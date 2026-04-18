import asyncio
import os
import json
import pandas as pd
from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from dotenv import load_dotenv

# Import your models
from app_models import CropInfo, SoilLibrary, CropTimeline

load_dotenv()


async def upload_data():
    print("🔄 Starting data injection...")

    # 1. Connect to Database
    database_url = os.getenv("DATABASE_URL")
    if not database_url:
        print("❌ ERROR: DATABASE_URL not found in .env file")
        return

    client = AsyncIOMotorClient(database_url)
    db = client["soil2silicon"]

    try:
        # 2. Initialize Beanie
        await init_beanie(
            database=db,
            document_models=[CropInfo, SoilLibrary, CropTimeline]
        )
        print("✅ Beanie initialized.")

        # ======================================================
        # 3. CROP + DISEASE DATA
        # ======================================================
        if os.path.exists('crop.json'):
            with open('crop.json', 'r', encoding='utf-8') as f:
                disease_data = json.load(f)

                for item in disease_data:

                    # ----------------------------
                    # SAFE IMAGE NORMALIZATION
                    # ----------------------------
                    raw_img = item.get("crop_img") or item.get("img")

                    if raw_img:
                        item["img"] = raw_img
                    else:
                        item["img"] = "https://via.placeholder.com/150"
                        print(f"⚠️ Missing image for {item.get('crop_name')}")

                    # remove legacy field to avoid confusion
                    item.pop("crop_img", None)

                    # ----------------------------
                    # FIX DISEASE IMAGES
                    # ----------------------------
                    if "diseases" in item and item["diseases"]:
                        for disease in item["diseases"]:
                            if not disease.get("img"):
                                disease["img"] = "https://via.placeholder.com/150"

                    # ----------------------------
                    # UPSERT LOGIC (SAFE)
                    # ----------------------------
                    exists = await CropInfo.find_one(
                        CropInfo.crop_name == item["crop_name"]
                    )

                    if exists:
                        # update only provided fields (no schema corruption)
                        for key, value in item.items():
                            setattr(exists, key, value)

                        await exists.save()
                        print(f"🔄 Updated: {item['crop_name']}")

                    else:
                        await CropInfo(**item).insert()
                        print(f"✅ Inserted: {item['crop_name']}")

            print("✅ Crop/Disease data injected.")
        else:
            print("⚠️ crop.json not found. Skipping.")

        # ======================================================
        # 4. SOIL DATA
        # ======================================================
        if os.path.exists('soil_types.xlsx'):
            soil_df = pd.read_excel('soil_types.xlsx')
            soil_df = soil_df.dropna(subset=['Major Soil Types'])

            for _, row in soil_df.iterrows():
                s_name = str(row['Major Soil Types']).strip()
                s_url = str(row['IMAGE LINK']).strip()

                if not s_name:
                    continue

                if not s_url:
                    s_url = ""

                exists = await SoilLibrary.find_one(
                    SoilLibrary.soil_type == s_name
                )

                if not exists:
                    await SoilLibrary(
                        soil_type=s_name,
                        image_url=s_url
                    ).insert()
                    print(f"✅ Injected: {s_name}")

            print("✨ Soil data injection complete.")

        # ======================================================
        # 5. CROP TIMELINE DATA
        # ======================================================
        if os.path.exists('crop_timeline.xlsx'):
            time_df = pd.read_excel('crop_timeline.xlsx')

            for _, row in time_df.iterrows():
                await CropTimeline(
                    crop_name=str(row['Crop']),
                    district=str(row['District']),
                    month=str(row['Month']),
                    land_prep_week=int(row['Land Preparation'].replace('Week ', '')),
                    sowing_week=int(row['Sowing'].replace('Week ', '')),
                    germination_week=int(row['Germination'].replace('Week ', '')),
                    growing_week=int(row['Growing'].replace('Week ', '')),
                    fertilizing_week=int(row['Fertilizing'].replace('Week ', '')),
                    watering_week=int(row['Watering'].replace('Week ', '')),
                    weeding_week=int(row['Weeding'].replace('Week ', '')),
                    harvesting_week=int(row['Harvesting'].replace('Week ', ''))
                ).insert()

            print("✅ Timeline data injected.")
        else:
            print("⚠️ crop_timeline.xlsx not found. Skipping.")

    except Exception as e:
        print(f"❌ AN ERROR OCCURRED: {e}")

    finally:
        client.close()
        print("🏁 Script finished.")


if __name__ == "__main__":
    asyncio.run(upload_data())