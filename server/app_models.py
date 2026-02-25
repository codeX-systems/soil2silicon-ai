# app_models.py

from datetime import datetime, timezone
from typing import Optional
from beanie import Document, Indexed
from pydantic import Field


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