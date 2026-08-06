# Pug — Independent AI Co-Host & Mascot Checklist

**Project:** PapaThaiGG.com / Pug  
**Owner:** PapaThaiGG (rdongoodman)  
**Updated:** August 6, 2026  
**Goal:** Local, independent AI co-host that lives as a 3D avatar on stream, reacts to chat, reacts to in-game moments, takes voice/text commands, and talks or types back — without relying on a cloud “brain” for the core personality.

---

## Vision (Sal’s)

- Pug is an **independent AI co-host and mascot**, not a passive overlay.
- **Body:** 3D avatar (current shell + possible second avatar for Warudo streaming).
- **Brain:** Local LLM (Ollama) so Pug can run on the streaming PC (“The Beast”).
- **Personality:** Sarcastic, tactical, Thailand Base Camp energy — Pug has attitude.
- **Listen:** Chat (Twitch / YouTube / Discord as needed) + voice commands from Sal.
- **Speak / type:** Verbal TTS replies and/or on-stream chat messages.
- **React to the game:** e.g. get shot in an FPS → Pug freaks out / comments; raid moments; wins/losses.
- **Website:** papathaigg.com “Meet Pug” tells the story; tech builds behind the scenes.

---

## Recommended stack (start simple)

| Layer | Recommendation | Notes |
|-------|----------------|-------|
| Brain | **Ollama** + Llama 3.1 8B or Qwen2.5 (14B if VRAM allows) | Dolphin (or similar) optional for spicier personality; a strong **system prompt** often beats swapping models |
| Memory | Short session memory + optional notes file | Keep replies short for stream pace |
| Mouth | **Warudo** avatar + TTS (e.g. local or preferred voice) | Lip-sync later if needed |
| Ears (chat) | Chat bridge → Ollama → TTS / typed reply | Twitch first, then YouTube |
| Ears (voice) | Push-to-talk or wake word → STT → Ollama | Phase after chat works |
| Game reactions | Streamer.bot / hotkeys / simple event triggers first | Full “see the game” AI is Phase 3 |
| Control | Mute Pug, force line, panic button | Always have a kill switch on stream |

**Build order:** Chat reactions → Voice commands → Game-event reactions.

---

## Phase 0 — Prep (PC & accounts)

- [ ] Confirm streaming PC GPU/VRAM budget for Ollama + game + Warudo
- [ ] Install / update **Ollama**
- [ ] Pull a base chat model (Llama 3.1 8B or Qwen2.5)
- [ ] Optional: pull a Dolphin (or personality) model and A/B test vs system prompt only
- [ ] Write Pug **system prompt** (name, tone, length limits, never spoil, never talk over Sal for long)
- [ ] Decide primary stream platform for chat (Twitch / YouTube)
- [ ] Warudo project ready with current Pug avatar
- [ ] Decide if a **second Warudo-optimized avatar** is needed (robot shell vs final form)

---

## Phase 1 — Brain online (local)

- [ ] Ollama answers from a terminal with Pug’s system prompt
- [ ] Max reply length capped (1–2 sentences for live play)
- [ ] “Stay in character” + Thailand / squad flavor without derailing
- [ ] Save prompt + model name in a small config file in this repo (or private notes)
- [ ] Document which model wins on *your* machine (speed + quality)

---

## Phase 2 — Avatar body (Warudo)

- [ ] Pug avatar loads reliably in Warudo
- [ ] Idle / talk / react animations mapped
- [ ] TTS voice chosen and matched to Pug’s personality
- [ ] Test lip-sync or talk motion when TTS plays
- [ ] OBS / stream layout: Pug visible without covering critical HUD
- [ ] Optional: second avatar variant for Warudo-only streaming look

---

## Phase 3 — Chat co-host

- [ ] Read live chat (start with one platform)
- [ ] Filter noise (bots, spam, links) before sending to the brain
- [ ] Rate-limit Pug (e.g. one reply every N seconds) so he doesn’t spam
- [ ] Trigger words / @Pug / “hey Pug” for direct questions
- [ ] Output path A: **spoken** via TTS + Warudo
- [ ] Output path B: **typed** message in chat (optional toggle)
- [ ] On-stream mute / “Pug sleep” toggle

---

## Phase 4 — Voice commands (Sal → Pug)

- [ ] Push-to-talk mic path for Sal only
- [ ] Speech-to-text → Ollama → short spoken confirm
- [ ] Command list v1 examples: “Pug, read that,” “Pug, hype,” “Pug, quiet,” “Pug, what did chat say?”
- [ ] Fail-safe: if STT is wrong, Pug asks a one-line clarification or stays quiet

---

## Phase 5 — In-game reactions

- [ ] Start with **manual / hotkey** reactions (Sal or Streamer.bot button = “got shot” / “clutch” / “wipe”)
- [ ] Preset short lines + optional LLM paraphrase so it doesn’t sound identical every time
- [ ] Map a few high-value events per game (ARC Raiders / AoC / FPS): death, revive, extraction, boss, win
- [ ] Only after that: explore deeper game-state hooks (overlays, APIs, memory — harder, game-specific)
- [ ] Never block gameplay performance; reactions must be cheap and skippable

---

## Phase 6 — Website & brand sync

- [ ] Meet Pug page stays aligned with real capabilities (no over-promise)
- [ ] Recon / Field Guide pages mention Phase status honestly
- [ ] Optional: short “Pug status” blurb when a major phase ships
- [ ] Keep mobile hero / buttons readable (Aug 6, 2026 pass done)

---

## Phase 7 — Stream-ready polish

- [ ] Full dry-run: game + Warudo + Ollama + chat bridge for 30+ minutes
- [ ] CPU/GPU temps and FPS acceptable
- [ ] Emergency stop documented (one key / one click)
- [ ] Backup plan if Ollama dies mid-stream (silent avatar or canned lines)
- [ ] First public “Pug is live” stream checklist (5 bullets max)

---

## Explicitly later / not v1

- Full autonomous “plays the game for you”
- Unfiltered always-on chat without rate limits
- Heavy vision AI watching the whole screen 24/7 (costly / laggy)
- Cloud-only brain as the primary personality (local-first is the point)

---

## Suggested “next one thing”

1. Install Ollama and confirm a model runs fast enough while a game is open.  
2. Lock Pug’s system prompt.  
3. Wire **one** chat source → spoken reply in Warudo.

---

## Notes (Sal edits here)

_Add decisions, model names that worked, Warudo settings, and stream dates below._

-
-
-
