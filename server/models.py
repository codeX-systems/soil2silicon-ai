from datetime import datetime, timezone
from typing import Optional
from beanie import Document, PydanticObjectId
from fastapi_users.db import BeanieBaseUser
from pydantic import Field, EmailStr
from fastapi_users import schemas

# Fix: No brackets here. Beanie handles the ID internally.
class User(BeanieBaseUser):
    username: str = Field(unique=True, pattern=r"^[a-zA-Z0-9]+$")
    fullname: str
    contact: str
    email: Optional[EmailStr] = None
    state: str
    district: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# API Schemas
class UserRead(schemas.BaseUser[PydanticObjectId]):
    username: str
    fullname: str
    contact: str
    state: str
    district: str
    created_at: datetime

class UserCreate(schemas.BaseUserCreate):
    username: str
    fullname: str
    contact: str
    state: str
    district: str
    email: Optional[EmailStr] = None