from fastapi import APIRouter, HTTPException, status, Depends
from typing import List, Optional
from datetime import datetime, timezone

from pydantic import BaseModel

from security import get_current_user
from models import User

# ✅ IMPORT DOCUMENT MODELS FROM app_models
from app_models import (
    Task,
    CurrentCrop,
    PastCrop,
    FieldSoilCondition
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
# ------------------ CURRENT CROPS -------------------------
# ==========================================================

class CurrentCropCreate(BaseModel):
    crop_id: str
    crop_name: str
    start_month: int
    end_month: int
    planted_date: datetime
    expected_harvest_date: datetime
    notes: Optional[str] = ""
    status: str


@router.post("/current_crops", response_model=dict)
async def create_current_crop(crop: CurrentCropCreate, current_user: User = Depends(get_current_user)):
    new_crop = CurrentCrop(user_id=str(current_user.id), **crop.model_dump())
    await new_crop.insert()
    return {"message": "Current crop added", "crop_id": crop.crop_id}


@router.get("/current_crops", response_model=List[CurrentCrop])
async def get_current_crops(current_user: User = Depends(get_current_user)):
    crops = await CurrentCrop.find(CurrentCrop.user_id == str(current_user.id)).to_list()
    return crops


# ==========================================================
# ------------------ PAST CROPS ----------------------------
# ==========================================================

class PastCropCreate(BaseModel):
    crop_id: str
    crop_name: str
    start_month: int
    end_month: int
    planted_date: datetime
    harvested_date: datetime
    notes: Optional[str] = ""


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
# ------------------ FIELD SOIL CONDITIONS -----------------
# ==========================================================

class FieldSoilCreate(BaseModel):
    field_id: str
    soil_type: str
    N: int
    P: int
    K: int
    moisture_percent: float
    notes: Optional[str] = ""


@router.post("/field_soil_conditions", response_model=dict)
async def create_field_soil(data: FieldSoilCreate, current_user: User = Depends(get_current_user)):
    new_field = FieldSoilCondition(user_id=str(current_user.id), **data.model_dump())
    await new_field.insert()
    return {"message": "Field soil condition added", "field_id": data.field_id}


@router.get("/field_soil_conditions", response_model=List[FieldSoilCondition])
async def get_field_soil(current_user: User = Depends(get_current_user)):
    fields = await FieldSoilCondition.find(
        FieldSoilCondition.user_id == str(current_user.id)
    ).to_list()
    return fields