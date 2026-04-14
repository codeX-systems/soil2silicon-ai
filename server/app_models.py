# app_models.py

from datetime import datetime, timezone
from typing import Optional, List
from beanie import Document, Indexed
from pydantic import Field, BaseModel


# ==========================================================
# ----------------------- TASKS -----------------------------
# ==========================================================

class Task(Document):
    user_id: str  # Required for user-based filtering

    task_id: str = Indexed(unique=True)
    title: str
    description: Optional[str] = None

    status: str = "active"      # active | completed | pending
    priority: str = "medium"    # high | medium | low
    category: Optional[str] = None

    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    due_date: Optional[datetime] = None
    notes: Optional[str] = None

    class Settings:
        name = "tasks"


# ==========================================================
# -------------------- CURRENT CROPS ------------------------
# ==========================================================

class CurrentCrop(Document):
    user_id: str

    crop_id: str = Indexed(unique=True)
    crop_name: str

    start_month: int
    end_month: int

    planted_date: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    expected_harvest_date: Optional[datetime] = None

    status: str = "growing"  # growing | harvested | failed
    notes: Optional[str] = None

    class Settings:
        name = "current_crops"


# ==========================================================
# ---------------------- PAST CROPS -------------------------
# ==========================================================

class PastCrop(Document):
    user_id: str

    crop_id: str = Indexed(unique=True)
    crop_name: str

    start_month: int
    end_month: int

    planted_date: datetime
    harvested_date: datetime

    notes: Optional[str] = None

    class Settings:
        name = "past_crops"


# ==========================================================
# --------------- FIELD SOIL CONDITIONS --------------------
# ==========================================================

class FieldSoilCondition(Document):
    user_id: str
    image_url: Optional[str] = None
    field_id: str = Indexed(unique=True)

    soil_type: str
    N: int
    P: int
    K: int

    moisture_percent: int
    last_updated: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    notes: Optional[str] = None

    class Settings:
        name = "field_soil_conditions"

# ==========================================================
# ---------------- NEW DATA MODELS -------------------------
# ==========================================================

class DiseaseInfo(BaseModel):
    name: str
    bengali_name: str
    hindi_name: str
    img: Optional[str] = "https://via.placeholder.com/150"
    time_weeks: str
    prevention: str
    cure: str
    organic_inputs: str

class CropInfo(Document):
    crop_name: str
    bengali_name: str
    hindi_name: str
    img: Optional[str] = None # ✅ FIXED
    diseases: List[DiseaseInfo]

    class Settings:
        name = "crop_info"

class SoilLibrary(Document):
    soil_type: str
    image_url: str

    class Settings:
        name = "soil_library"

class CropTimeline(Document):
    crop_name: str
    district: str
    month: str
    land_prep_week: int
    sowing_week: int
    germination_week: int
    growing_week: int
    fertilizing_week: int
    watering_week: int
    weeding_week: int
    harvesting_week: int

    class Settings:
        name = "crop_timelines"