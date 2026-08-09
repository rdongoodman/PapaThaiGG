# Pug_Brain.py — talk to Pug on the streaming PC.
# Run: double-click Talk to Pug.bat

import asyncio
import os
import tempfile

import ollama
import pyttsx3

MODEL = "Pug"

# Neural voice (needs internet). Voice audition Aug 9: Roger #1 so far (a bit loud).
# Try next: Guy · Christopher · Ryan
PUG_VOICE = "en-CA-LiamNeural"
PUG_VOICE_RATE = "+5%"
PUG_VOICE_VOLUME = 0.82  # 0.0–1.0 — lower if voice feels too loud in headset


def speak_with_edge_tts(text: str) -> None:
    import edge_tts
    import pygame

    async def _save() -> str:
        communicate = edge_tts.Communicate(text, PUG_VOICE, rate=PUG_VOICE_RATE)
        tmp = tempfile.NamedTemporaryFile(delete=False, suffix=".mp3")
        tmp.close()
        await communicate.save(tmp.name)
        return tmp.name

    path = asyncio.run(_save())
    try:
        pygame.mixer.init()
        pygame.mixer.music.set_volume(PUG_VOICE_VOLUME)
        pygame.mixer.music.load(path)
        pygame.mixer.music.play()
        while pygame.mixer.music.get_busy():
            pygame.time.wait(100)
    finally:
        pygame.mixer.quit()
        os.unlink(path)


def speak_with_pyttsx3(text: str) -> None:
    engine = pyttsx3.init()
    engine.setProperty("rate", 158)
    voices = engine.getProperty("voices")
    for voice in voices:
        if "david" in voice.name.lower():
            engine.setProperty("voice", voice.id)
            break
    engine.say(text)
    engine.runAndWait()


def speak(text: str) -> None:
    try:
        speak_with_edge_tts(text)
    except Exception as exc:
        print(f"Neural voice unavailable ({exc}). Using backup voice...")
        speak_with_pyttsx3(text)


def ask_pug(user_input: str) -> str:
    response = ollama.chat(
        model=MODEL,
        messages=[{"role": "user", "content": user_input}],
    )
    reply = response["message"]["content"].strip()
    print(f"\nPug: {reply}\n")
    print(f"(Speaking now — voice: {PUG_VOICE}...)\n")
    try:
        speak(reply)
    except Exception as exc:
        print(f"TTS error: {exc}")
    return reply


def main() -> None:
    print("Pug is awake. Type something (or 'quit' to exit).")
    print("Tip: Route Python to CABLE Input in Windows Volume mixer for OBS.\n")
    while True:
        text = input("You: ").strip()
        if not text:
            continue
        if text.lower() in {"quit", "exit", "q"}:
            print("Pug signing off. See you on stream, Papa.")
            break
        ask_pug(text)


if __name__ == "__main__":
    main()
