import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie, PydanticObjectId
from dotenv import load_dotenv

from models import User, UserRead, UserCreate
from auth import auth_backend
from users import get_user_manager
from fastapi_users import FastAPIUsers

load_dotenv()

app = FastAPI()

# Enable CORS so your React landing page can talk to this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

fastapi_users = FastAPIUsers[User, PydanticObjectId](get_user_manager, [auth_backend])

@app.on_event("startup")
async def on_startup():
    # Ensure your .env has: DATABASE_URL=mongodb://localhost:27017/your_db_name
    client = AsyncIOMotorClient(os.getenv("DATABASE_URL"))
    await init_beanie(
        database=client.get_default_database(),
        document_models=[User]
    )

# Authentication Endpoints
app.include_router(fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"])
app.include_router(fastapi_users.get_register_router(UserRead, UserCreate), prefix="/auth", tags=["auth"])