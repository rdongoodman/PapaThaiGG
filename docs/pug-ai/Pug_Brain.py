# Pug_Brain.py — talk to Pug on the streaming PC.
# Run: double-click Talk to Pug.bat

import ollama
import pyttsx3

MODEL = "Pug"


def make_tts_engine():
    engine = pyttsx3.init()
    engine.setProperty("rate", 158)
    voices = engine.getProperty("voices")
    # Prefer David (male) or first available voice
    for voice in voices:
        if "david" in voice.name.lower():
            engine.setProperty("voice", voice.id)
            break
    else:
        if voices:
            engine.setProperty("voice", voices[0].id)
    return engine


engine = make_tts_engine()


def ask_pug(user_input: str) -> str:
    response = ollama.chat(
        model=MODEL,
        messages=[{"role": "user", "content": user_input}],
    )
    reply = response["message"]["content"].strip()
    print(f"\nPug: {reply}\n")
    print("(Speaking now — check speakers or OBS Pug Voice meter...)\n")
    try:
        engine.say(reply)
        engine.runAndWait()
    except Exception as exc:
        print(f"TTS error: {exc}")
    return reply


def main() -> None:
    print("Pug is awake. Type something (or 'quit' to exit).")
    print("Tip: For OBS audio, route Python to CABLE Input in Windows Volume mixer.\n")
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
