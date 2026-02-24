from datetime import datetime, timezone
from typing import Optional
from beanie import Document, Indexed
from pydantic import Field, EmailStr


class User(Document):
    # Using Indexed(unique=True) is more explicit for Beanie
    contact: Indexed(str, unique=True) = Field(pattern=r"^[0-9]{10}$")
    username: Indexed(str, unique=True) = Field(pattern=r"^[a-zA-Z0-9]+$")

    password_hash: str
    fullname: str
    email: Optional[EmailStr] = None
    state: str
    district: str

    # Standardized UTC timestamp
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    class Settings:
        name = "users"
        # Explicitly define indexes here if you have compound indexes later
        indexes = [
            "email",  # Optional: Index email for faster lookups if users login via email
        ]

    class Config:
        # Prevents extra whitespace and standardizes input
        str_strip_whitespace = True