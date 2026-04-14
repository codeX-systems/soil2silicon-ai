from fastapi import APIRouter, HTTPException, status, Depends
from typing import List, Optional
from datetime import datetime, timezone, timedelta
from pydantic import BaseModel

from security import get_current_user
from models import User

# ✅ IMPORT ALL DOCUMENT MODELS
from app_models import (
    Task,
    CurrentCrop,
    PastCrop,
    FieldSoilCondition,
    CropTimeline,
    CropInfo,
    SoilLibrary
)

router = APIRouter(prefix="/farm", tags=["Farm Data"])


# ==========================================================
# ------------------ Pydantic Schemas ----------------------
# ==========================================================

class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = ""
    status: str
    priority: str
    category: Optional[str] = ""
    due_date: Optional[datetime] = None
    notes: Optional[str] = ""


class TaskUpdate(BaseModel):
    title: Optional[str]
    description: Optional[str]
    status: Optional[str]
    priority: Optional[str]
    category: Optional[str]
    due_date: Optional[datetime]
    notes: Optional[str]


class CurrentCropCreate(BaseModel):
    crop_id: str
    crop_name: str
    start_month: int
    end_month: int
    planted_date: datetime
    expected_harvest_date: datetime
    notes: Optional[str] = ""
    status: str


class PastCropCreate(BaseModel):
    crop_id: str
    crop_name: str
    start_month: int
    end_month: int
    planted_date: datetime
    harvested_date: datetime
    notes: Optional[str] = ""


class FieldSoilCreate(BaseModel):
    field_id: str
    soil_type: str
    N: int
    P: int
    K: int
    moisture_percent: float
    notes: Optional[str] = ""


# ==========================================================
# ------------------ HELPER FUNCTIONS ----------------------
# ==========================================================

async def generate_smart_tasks(user: User, crop_doc: CurrentCrop):
    """
    Calculates milestone dates based on the regional CropTimeline
    and injects them directly into the user's task list.
    """
    # 1. Find matching timeline (Case-insensitive regex search)
    timeline = await CropTimeline.find_one({
        "crop_name": {"$regex": crop_doc.crop_name, "$options": "i"},
        "district": user.district
    })

    if not timeline:
        return

    # 2. Map milestones to their target calendar weeks from the Excel data
    milestones = [
        ("Germination Check", timeline.germination_week),
        ("Start Growing Phase", timeline.growing_week),
        ("Apply Fertilizer", timeline.fertilizing_week),
        ("Major Watering/Irrigation", timeline.watering_week),
        ("Weeding", timeline.weeding_week),
        ("Harvesting Preparation", timeline.harvesting_week)
    ]

    # 3. Calculate target dates based on Sowing Week
    planted_date = crop_doc.planted_date

    for title, target_week in milestones:
        # Calculate weeks difference
        weeks_to_wait = target_week - timeline.sowing_week

        # Handle year rollover logic
        if weeks_to_wait < 0:
            weeks_to_wait += 52

        due_date = planted_date + timedelta(weeks=weeks_to_wait)

        # 4. Create and Insert Task
        new_task = Task(
            user_id=str(user.id),
            task_id=f"auto_{int(datetime.now().timestamp())}_{target_week}",
            title=f"{title}: {crop_doc.crop_name}",
            description=f"Automatic schedule for {user.district}. Planted on {planted_date.strftime('%Y-%m-%d')}.",
            status="active",
            priority="medium",
            category="Automation",
            due_date=due_date
        )
        await new_task.insert()


# ==========================================================
# ------------------ TASK ENDPOINTS ------------------------
# ==========================================================

@router.post("/tasks", response_model=dict)
async def create_task(task: TaskCreate, current_user: User = Depends(get_current_user)):
    task_id = f"task_{int(datetime.now().timestamp())}"

    new_task = Task(
        user_id=str(current_user.id),
        task_id=task_id,
        title=task.title,
        description=task.description,
        status=task.status,
        priority=task.priority,
        category=task.category,
        due_date=task.due_date,
        notes=task.notes
    )

    await new_task.insert()
    return {"message": "Task created", "task_id": task_id}


@router.get("/tasks", response_model=List[Task])
async def get_tasks(current_user: User = Depends(get_current_user)):
    tasks = await Task.find(Task.user_id == str(current_user.id)).to_list()
    return tasks


@router.put("/tasks/{task_id}", response_model=dict)
async def update_task(task_id: str, updates: TaskUpdate, current_user: User = Depends(get_current_user)):
    task = await Task.find_one(
        Task.task_id == task_id,
        Task.user_id == str(current_user.id)
    )

    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    update_data = updates.dict(exclude_unset=True)

    for field, value in update_data.items():
        setattr(task, field, value)

    task.updated_at = datetime.now(timezone.utc)
    await task.save()

    return {"message": "Task updated"}


@router.delete("/tasks/{task_id}", response_model=dict)
async def delete_task(task_id: str, current_user: User = Depends(get_current_user)):
    task = await Task.find_one(
        Task.task_id == task_id,
        Task.user_id == str(current_user.id)
    )

    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    await task.delete()
    return {"message": "Task deleted"}


# ==========================================================
# ------------------ CROP ENDPOINTS ------------------------
# ==========================================================

@router.post("/current_crops", response_model=dict)
async def create_current_crop(crop: CurrentCropCreate, current_user: User = Depends(get_current_user)):
    new_crop = CurrentCrop(user_id=str(current_user.id), **crop.model_dump())
    await new_crop.insert()

    # 🔥 TRIGGER: Generate the automated timeline tasks immediately
    await generate_smart_tasks(current_user, new_crop)

    return {"message": "Current crop added and timeline tasks generated", "crop_id": crop.crop_id}


@router.get("/current_crops", response_model=List[CurrentCrop])
async def get_current_crops(current_user: User = Depends(get_current_user)):
    crops = await CurrentCrop.find(CurrentCrop.user_id == str(current_user.id)).to_list()
    return crops


@router.get("/crop-health/{crop_key}")
async def get_crop_health(crop_key: str):
    """
    Returns disease information, images, and cures from the JSON-based collection.
    """
    info = await CropInfo.find_one({"crop_name": {"$regex": f"^{crop_key}$", "$options": "i"}})
    if not info:
        raise HTTPException(status_code=404, detail="No health data found for this crop")
    return info


@router.post("/past_crops", response_model=dict)
async def create_past_crop(crop: PastCropCreate, current_user: User = Depends(get_current_user)):
    new_crop = PastCrop(user_id=str(current_user.id), **crop.model_dump())
    await new_crop.insert()
    return {"message": "Past crop added", "crop_id": crop.crop_id}


@router.get("/past_crops", response_model=List[PastCrop])
async def get_past_crops(current_user: User = Depends(get_current_user)):
    crops = await PastCrop.find(PastCrop.user_id == str(current_user.id)).to_list()
    return crops


# ==========================================================
# ------------------ SOIL ENDPOINTS ------------------------
# ==========================================================

@router.post("/field_soil_conditions", response_model=dict)
async def create_field_soil(data: FieldSoilCreate, current_user: User = Depends(get_current_user)):
    # 🖼️ OPTIONAL: Fetch soil image from library to store with the record
    soil_ref = await SoilLibrary.find_one({"soil_type": data.soil_type})
    image_url = soil_ref.image_url if soil_ref else ""

    new_field = FieldSoilCondition(
        user_id=str(current_user.id),
        image_url=image_url,  # ✅ FIX
        **data.model_dump()
    )
    # If your FieldSoilCondition model has an image_url field, you can set it here:
    # new_field.image_url = image_url

    await new_field.insert()
    return {"message": "Field soil condition added", "field_id": data.field_id}


@router.get("/field_soil_conditions", response_model=List[FieldSoilCondition])
async def get_field_soil(current_user: User = Depends(get_current_user)):
    fields = await FieldSoilCondition.find(
        FieldSoilCondition.user_id == str(current_user.id)
    ).to_list()
    return fields


@router.get("/soil-library", response_model=List[SoilLibrary])
async def get_soil_library():
    """Returns all soil types and their hosted image URLs."""
    return await SoilLibrary.find_all().to_list()

# ==========================================================
# ------------------ CROP SEARCH ---------------------------
# ==========================================================

@router.get("/search-crops", response_model=List[str])
async def search_crops(q: str):
    """
    Live search crops by name (autocomplete)
    """
    if not q or len(q) < 2:
        return []

    crops = await CropInfo.find(
        {"crop_name": {"$regex": q, "$options": "i"}}
    ).limit(10).to_list()

    return [c.crop_name for c in crops]