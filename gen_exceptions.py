from gtts import gTTS
import os

# Configuration
# format: (text, filename)
EXCEPTIONS = [
    ("mốt", "1_mot.mp3"),
    ("lăm", "5_lam.mp3")
]

OUTPUT_DIR = 'assets/audio/vi'

def generate_exceptions():
    print("Starting exception audio generation for Vietnamese...")
    
    # Ensure directory exists
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        print(f"Created directory: {OUTPUT_DIR}")

    for text, filename in EXCEPTIONS:
        file_path = os.path.join(OUTPUT_DIR, filename)
        print(f"Generating '{text}' -> {filename}...")
        
        try:
            tts = gTTS(text=text, lang='vi')
            tts.save(file_path)
            print(f"  -> Saved to {file_path}")
        except Exception as e:
            print(f"  -> ERROR generating {filename}: {e}")

    print("\nDone! Exception audio generated.")

if __name__ == "__main__":
    generate_exceptions()
