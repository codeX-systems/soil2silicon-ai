from deep_translator import GoogleTranslator
from gtts import gTTS
import os
import platform
import time

# Supported Indian languages (with Google Translate + gTTS support)
language_options = {
    1: ("Hindi", "hi"),
    2: ("Bengali", "bn"),
    3: ("Marathi", "mr"),
    4: ("Tamil", "ta"),
    5: ("Telugu", "te"),
    6: ("Kannada", "kn"),
    7: ("Gujarati", "gu"),
    8: ("Malayalam", "ml"),
    9: ("Urdu", "ur"),
    10: ("Punjabi", "pa")
}

# Display language choices
print("Select your preferred language for translation and voice:")
for key, (lang_name, code) in language_options.items():
    print(f"{key}. {lang_name}")

# Get user choice
try:
    choice = int(input("Enter the number of your language choice: "))
    if choice not in language_options:
        raise ValueError("Invalid choice.")
except ValueError as e:
    print("Invalid input. Exiting program.")
    exit()

# Get selected language code
selected_language_name, lang_code = language_options[choice]
print(f"Selected Language: {selected_language_name}")

# Step 1: Input English text
english_text = "Hi Ramesh, Your soil is dry. You can grow wheat."

# Step 2: Translate
try:
    translated_text = GoogleTranslator(source='auto', target=lang_code).translate(english_text)
except Exception as e:
    print("Translation Error:", e)
    translated_text = "Translation failed."

# Step 3: Save translation
with open("translated_output.txt", "w", encoding="utf-8") as file:
    file.write(translated_text)

# Step 4: Print translation
print("\nTranslated Text (written to translated_output.txt):")
try:
    print(translated_text)
except UnicodeEncodeError:
    print("Cannot display translated text due to terminal encoding issues.")

# Step 5: Convert to speech and play
try:
    filename = f"speak_{int(time.time())}.mp3"
    tts = gTTS(text=translated_text, lang=lang_code)
    tts.save(filename)

    # Step 6: Play the file depending on OS
    os_name = platform.system()
    if os_name == "Windows":
        os.system(f"start {filename}")
    elif os_name == "Darwin":
        os.system(f"afplay {filename}")
    else:
        os.system(f"mpg123 {filename}")

except Exception as e:
    print("TTS Error:", e)