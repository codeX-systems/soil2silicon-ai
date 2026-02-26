# from fastapi import APIRouter, HTTPException
# from pydantic import BaseModel, Field
# from ml_utils import predict_crop_logic
#
# router = APIRouter(prefix="/predict", tags=["ML Prediction"])
#
#
# # --- 1. Schema for Frontend Validation ---
# class PredictionRequest(BaseModel):
#     state: str = Field(..., example="West Bengal")
#     districts: str = Field(..., example="Nadia")
#     soil: str = Field(..., example="Loamy soil")
#     start_month: int = Field(..., ge=1, le=12)
#     end_month: int = Field(..., ge=1, le=12)
#     rainfall: str = Field(..., example="Moderate")
#     sunlight: str = Field(..., example="High")
#     temperature: str = Field(..., example="Warm")
#     humidity: str = Field(..., example="Moderate")
#
#
# # --- 2. The Prediction Endpoint ---
# @router.post("/")
# async def get_prediction(data: PredictionRequest):
#     """
#     Receives farming parameters and returns a crop recommendation
#     using the Random Forest model. Limited to West Bengal.
#     """
#
#     # 🛑 West Bengal Security Guard
#     if data.state.strip().lower() != "west bengal":
#         raise HTTPException(
#             status_code=400,
#             detail="The prediction model is currently only calibrated for West Bengal districts."
#         )
#
#     try:
#         # Convert Pydantic object to dictionary and run ML logic
#         # .model_dump() is for Pydantic v2; use .dict() if on v1
#         features = data.model_dump()
#
#         recommended_crop = predict_crop_logic(**features)
#
#         return {
#             "status": "success",
#             "recommended_crop": recommended_crop,
#             "district_analyzed": data.districts
#         }
#
#     except Exception as e:
#         # Catch errors from ml_utils (e.g., model not loaded or shape mismatch)
#         raise HTTPException(
#             status_code=500,
#             detail=f"ML Processing Error: {str(e)}"
#         )

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from ml_utils import predict_crop_logic

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
async def get_prediction(data: PredictionRequest):
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

        # Run ML logic
        recommended_crop_raw = predict_crop_logic(**features)

        # Normalize crop name for frontend i18n
        recommended_crop = normalize_crop_name(recommended_crop_raw)

        return {
            "status": "success",
            "recommended_crop": recommended_crop,
            "district_analyzed": data.districts,
            "confidence": None  # Add later if you compute probabilities
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail="ml_processing_error"
        )