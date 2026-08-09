# Pug_Brain.py — talk to Pug on the streaming PC.
# Run from the PugAI folder. Type quit to exit.

import ollama
import pyttsx3

MODEL = "Pug"

engine = pyttsx3.init()
engine.setProperty("rate", 155)

voices = engine.getProperty("voices")
if voices:
    engine.setProperty("voice", voices[0].id)


def ask_pug(user_input: str) -> str:
    response = ollama.chat(
        model=MODEL,
        messages=[{"role": "user", "content": user_input}],
    )
    reply = response["message"]["content"].strip()
    print(f"\nPug: {reply}\n")
    engine.say(reply)
    engine.runAndWait()
    return reply


def main() -> None:
    print("Pug is awake. Type something (or 'quit' to exit).\n")
    while True:
        text = input("You: ").strip()
        if not text:
            continue
        if text.lower() in {"quit", "exit", "q"}:
            print("Pug signing off. See you on stream, Sal.")
            break
        ask_pug(text)


if __name__ == "__main__":
    main()
