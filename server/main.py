import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Import Models
from models import User
from app_models import (
    Task,
    CurrentCrop,
    PastCrop,
    FieldSoilCondition,
    CropInfo,        # <-- ADDED
    SoilLibrary,     # <-- ADDED
    CropTimeline     # <-- ADDED
)

# Import Routers
from auth_routes import router as auth_router
from farm_data_routes import router as farm_router
from prediction_routes import router as prediction_router


# ------------------ LIFESPAN ------------------
@asynccontextmanager
async def lifespan(app: FastAPI):
    database_url = os.getenv("DATABASE_URL")
    if not database_url:
        raise RuntimeError("DATABASE_URL not set in .env")

    client = AsyncIOMotorClient(database_url)

    # Initialize Beanie with ALL document models
    await init_beanie(
        database=client.get_default_database(),
        document_models=[
            User,
            Task,
            CurrentCrop,
            PastCrop,
            FieldSoilCondition,
            CropInfo,       # <-- ADDED
            SoilLibrary,    # <-- ADDED
            CropTimeline    # <-- ADDED
        ],
    )

    print("✅ Beanie initialized with all models (including New Datasets).")

    yield

    client.close()
    print("🛑 Database connection closed.")


# ------------------ APP INITIALIZATION ------------------
app = FastAPI(
    title="ML Project Backend",
    lifespan=lifespan
)

# ------------------ CORS ------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------ ROUTERS ------------------
app.include_router(auth_router)
app.include_router(farm_router)
app.include_router(prediction_router)

# ------------------ HEALTH CHECK ------------------
@app.get("/", tags=["Health"])
async def root():
    return {
        "status": "online",
        "message": "Backend is running successfully 🚀"
    }