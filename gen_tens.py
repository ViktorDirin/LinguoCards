import os
from gtts import gTTS

# Configuration
DATA = {
    'vi': ['20', '30', '40', '50', '60', '70', '80', '90'],
    'ko': ['20', '30', '40', '50', '60', '70', '80', '90']
}

BASE_DIR = 'assets/audio'

def generate_audio():
    print("Starting audio generation for Tens...")

    for lang, numbers in DATA.items():
        # Ensure directory exists
        dir_path = os.path.join(BASE_DIR, lang)
        if not os.path.exists(dir_path):
            os.makedirs(dir_path)
            print(f"Created directory: {dir_path}")

        for num in numbers:
            filename = f"{num}.mp3"
            file_path = os.path.join(dir_path, filename)

            print(f"Generating {lang}/{filename}...")
            
            # Generate speech
            try:
                tts = gTTS(text=num, lang=lang)
                tts.save(file_path)
                print(f"  -> Saved to {file_path}")
            except Exception as e:
                print(f"  -> ERROR generating {num} for {lang}: {e}")

    print("\nDone! Audio generation complete.")

if __name__ == "__main__":
    generate_audio()
