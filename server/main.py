import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from dotenv import load_dotenv
load_dotenv()
from models import User
from auth_routes import router as auth_router




# ------------------ LIFESPAN (Replaces @app.on_event) ------------------
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup logic
    database_url = os.getenv("DATABASE_URL")
    if not database_url:
        raise RuntimeError("DATABASE_URL not set in .env")

    client = AsyncIOMotorClient(database_url)
    # Initialize Beanie with your database and models
    await init_beanie(
        database=client.get_default_database(),
        document_models=[User],
    )

    yield  # This is where the app runs

    # Shutdown logic (Optional: close DB connection)
    client.close()


# ------------------ APP INITIALIZATION ------------------
app = FastAPI(
    title="ML Project Backend",
    lifespan=lifespan
)

# ------------------ CORS ------------------
# Pro-tip: In production, ensure allow_origins isn't just localhost
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------ ROUTERS ------------------
app.include_router(auth_router)


# ------------------ HEALTH CHECK ------------------
@app.get("/", tags=["Health"])
async def root():
    return {
        "status": "online",
        "message": "Backend is running successfully 🚀"
    }