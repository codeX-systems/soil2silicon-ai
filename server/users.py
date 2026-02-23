import os
from beanie import PydanticObjectId
from fastapi import Depends, Request
from fastapi_users import BaseUserManager
from fastapi_users_db_beanie import BeanieUserDatabase
from models import User

SECRET = os.getenv("JWT_SECRET", "SECRET_KEY_123")

# We removed ObjectIDIDMixin.
# BaseUserManager[User, PydanticObjectId] tells the system everything it needs to know.
class UserManager(BaseUserManager[User, PydanticObjectId]):
    reset_password_token_secret = SECRET
    verification_token_secret = SECRET

    def parse_id(self, value: any) -> PydanticObjectId:
        if isinstance(value, PydanticObjectId):
            return value
        try:
            return PydanticObjectId(value)
        except Exception:
            return value

    async def on_after_register(self, user: User, request: Request = None):
        print(f"User {user.username} has been created with ID {user.id}")

async def get_user_db():
    yield BeanieUserDatabase(User)

async def get_user_manager(user_db=Depends(get_user_db)):
    yield UserManager(user_db)
