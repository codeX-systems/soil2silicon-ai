import joblib
import pandas as pd
import numpy as np
import os

# ======================================
# 1️⃣ Path Configuration & Model Loading
# ======================================
# This finds the 'ml' folder sitting one level above the current 'server' folder
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ML_FOLDER = os.path.join(BASE_DIR, "ml")

MODEL_PATH = os.path.join(ML_FOLDER, 'random_forest_1031_model_143.pkl')
PREPROCESSOR_PATH = os.path.join(ML_FOLDER, 'preprocessor.pkl')

# Initialize as None to prevent crashes if files are missing
# rf_model = None
# preprocessor = None
# crop_cols = []

# if os.path.exists(MODEL_PATH) and os.path.exists(PREPROCESSOR_PATH):
#     rf_model = joblib.load(MODEL_PATH)
#     preprocessor = joblib.load(PREPROCESSOR_PATH)

#     # Identify Crop columns to exclude from prediction input
#     crop_cols = [i for i, col in enumerate(preprocessor.get_feature_names_out()) if 'Crop_' in col]
#     print(f"✅ ML Models loaded successfully from {ML_FOLDER}")
# else:
#     print(f"❌ ML Models NOT found at {ML_FOLDER}. Check your folder structure!")


def load_ml_models():
    if not os.path.exists(MODEL_PATH) or not os.path.exists(PREPROCESSOR_PATH):
        raise Exception(f"ML files not found in {ML_FOLDER}")

    model = joblib.load(MODEL_PATH)
    preprocessor = joblib.load(PREPROCESSOR_PATH)

    crop_cols = [
        i for i, col in enumerate(preprocessor.get_feature_names_out())
        if 'Crop_' in col
    ]

    print("✅ ML models loaded successfully")

    return model, preprocessor, crop_cols


# ======================================
# 2️⃣ Cleaning Logic
# ======================================
def clean_weather_columns(df):
    """Normalize inconsistent categorical labels for weather features."""
    df = df.apply(lambda col: col.astype(str)
                  .str.replace('–', '-', regex=False)
                  .str.replace('—', '-', regex=False)
                  .str.strip())

    # Rainfall: Low, Moderate, High
    df['Rainfall'] = df['Rainfall'].replace({
        'Low-moderate': 'Moderate', 'Moderate-high': 'High',
        'Low rainfall': 'Low', 'Moderate rainfall': 'Moderate', 'High rainfall': 'High'
    }).map(lambda x: 'Low' if 'Low' in x else 'High' if 'High' in x else 'Moderate')

    # Sunlight: Moderate, High
    df['Sunlight'] = df['Sunlight'].replace({
        'moderately sunny': 'Moderate', 'highly sunny': 'High'
    }).map(lambda x: 'High' if 'High' in x else 'Moderate')

    # Temperature: Cool, Moderate, Warm
    df['Temperature'] = df['Temperature'].replace({
        'cool-warm': 'Moderate', 'warm-hot': 'Warm',
        'cool-moderate': 'Moderate', 'warm-moderate': 'Warm', 'cool': 'Cool'
    }).map(lambda x: 'Cool' if 'Cool' in x else 'Warm' if 'Warm' in x else 'Moderate')

    # Humidity: Low, Moderate, High
    df['Humidity'] = df['Humidity'].replace({
        'high humidity': 'High', 'moderate humidity': 'Moderate', 'low humidity': 'Low'
    }).map(lambda x: 'High' if 'High' in x else 'Low' if 'Low' in x else 'Moderate')

    return df


# ======================================
# 3️⃣ Prediction Logic
# ======================================
def predict_crop_logic(model,preprocessor,crop_cols,**features):
    """
    Core logic to transform user input and return prediction.
    """
    # if rf_model is None or preprocessor is None:
    #     raise Exception("ML Models are not loaded. Check server logs for path errors.")
    encoded=preprocessor.transform(df)
    # Convert incoming dict to DataFrame
    df = pd.DataFrame([features])

    # Map keys to match the preprocessor's expected column names
    df = df.rename(columns={
        'soil': 'Soil',
        'districts': 'Districts',
        'start_month': 'Start_Month',
        'end_month': 'End_Month',
        'rainfall': 'Rainfall',
        'sunlight': 'Sunlight',
        'temperature': 'Temperature',
        'humidity': 'Humidity'
    })

    # Add placeholder Crop column (required by your preprocessor)
    if 'Crop' not in df.columns:
        df['Crop'] = 'Dummy'

    # Ensure all columns exist
    expected_cols = ['Crop', 'Soil', 'Districts', 'Start_Month', 'End_Month',
                     'Rainfall', 'Sunlight', 'Temperature', 'Humidity']
    for col in expected_cols:
        if col not in df.columns:
            df[col] = None

    # Apply cleaning
    df = clean_weather_columns(df)

    # Transform using preprocessor
    encoded = preprocessor.transform(df)

    # Remove encoded Crop columns before passing to RF Model
    encoded_features = np.delete(encoded, crop_cols, axis=1) if crop_cols else encoded

    # Predict
    prediction = model.predict(encoded_features)

    return prediction[0]