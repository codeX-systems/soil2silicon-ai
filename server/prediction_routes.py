from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from ml_utils import predict_crop_logic
from fastapi import Request

router = APIRouter(prefix="/predict", tags=["ML Prediction"])


# --- 1️⃣ Schema for Frontend Validation ---
class PredictionRequest(BaseModel):
    state: str = Field(..., example="West Bengal")
    districts: str = Field(..., example="Nadia")
    soil: str = Field(..., example="Loamy soil")
    start_month: int = Field(..., ge=1, le=12)
    end_month: int = Field(..., ge=1, le=12)
    rainfall: str = Field(..., example="Moderate")
    sunlight: str = Field(..., example="High")
    temperature: str = Field(..., example="Warm")
    humidity: str = Field(..., example="Moderate")


# --- 2️⃣ Utility: Normalize Crop Name for i18n Keys ---
def normalize_crop_name(crop_name: str) -> str:
    """
    Converts model output into frontend-friendly snake_case key.
    Example:
    'Black Gram (Urad)' → 'black_gram'
    'Bitter Gourd' → 'bitter_gourd'
    """
    return (
        crop_name
        .lower()
        .split("(")[0]          # remove bracket part
        .strip()
        .replace("'", "")
        .replace("-", "_")
        .replace(" ", "_")
    )


# --- 3️⃣ The Prediction Endpoint ---
@router.post("/")
async def get_prediction(data: PredictionRequest,request:Request):
    model= request.app.state.model
    preprocessor=request.app.state.preprocessor
    crop_cols=request.app.state.crop_cols
    """
    Receives farming parameters and returns a structured crop recommendation.
    Frontend handles translation and voice.
    """

    # 🛑 West Bengal Restriction
    if data.state.strip().lower() != "west bengal":
        raise HTTPException(
            status_code=400,
            detail="model_limited_to_west_bengal"
        )

    try:
        # Convert Pydantic object to dictionary
        features = data.model_dump()
        features.pop("state", None)
        
        print("📦 Incoming features:", features)
        
        # recommended_crop_raw = predict_crop_logic(**features)

        # Run ML logic
        # recommended_crop_raw = predict_crop_logic(**features)
        recommended_crop_raw = predict_crop_logic(
            model,
            preprocessor,
            crop_cols,
            **features
        )
        # Normalize crop name for frontend i18n
        recommended_crop = normalize_crop_name(recommended_crop_raw)

        return {
            "status": "success",
            "recommended_crop": recommended_crop,
            "district_analyzed": data.districts,
            "confidence": None  # Add later if you compute probabilities
        }

    except Exception as e:
        print("❌ ML ERROR:", str(e))   # 👈 ADD THIS
        raise HTTPException(
            status_code=500,
            detail=str(e)   # 👈 show actual error
        )