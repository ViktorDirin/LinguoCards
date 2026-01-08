from gtts import gTTS
import os

# Configuration
# format: (text, filename)
# Note: Filenames should probably be ASCII safe if possible, but user requested specific filenames with accents?
# User requested: 'trăm.mp3', 'nghìn.mp3', etc.
# Ideally we should stick to the requested filenames.
BRICKS = [
    ("trăm", "tram.mp3"),     # Normalized to ASCII for safety usually, but let's check user request. 
                              # User asked for 'trăm.mp3'. Windows handles utf-8 filenames okay usually, 
                              # but standard practice in web assets is often ascii. 
                              # However, previous files were '1_mot.mp3'.
                              # Let's use the requested filenames but maybe safer to mape them?
                              # "trăm" -> 'tram.mp3'? 
                              # "nghìn" -> 'nghin.mp3'?
                              # "triệu" -> 'trieu.mp3'?
                              # "linh"  -> 'linh.mp3'?
                              # The user wrote "save as 'trăm.mp3'". I will respect that literally.
    ("trăm", "trăm.mp3"),
    ("nghìn", "nghìn.mp3"),
    ("triệu", "triệu.mp3"),
    ("linh", "linh.mp3")
]

OUTPUT_DIR = 'assets/audio/vi'

def generate_bricks():
    print("Starting Big Number audio generation for Vietnamese...")
    
    # Ensure directory exists
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        print(f"Created directory: {OUTPUT_DIR}")

    for text, filename in BRICKS:
        file_path = os.path.join(OUTPUT_DIR, filename)
        print(f"Generating '{text}' -> {filename}...")
        
        try:
            tts = gTTS(text=text, lang='vi')
            tts.save(file_path)
            print(f"  -> Saved to {file_path}")
        except Exception as e:
            print(f"  -> ERROR generating {filename}: {e}")

    print("\nDone! Big number audio generated.")

if __name__ == "__main__":
    generate_bricks()
