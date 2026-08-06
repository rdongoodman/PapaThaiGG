# Pug — Independent AI Co-Host & Mascot Checklist

**Project:** PapaThaiGG.com / Pug  
**Owner:** PapaThaiGG (rdongoodman)  
**Updated:** August 6, 2026 (evening)  
**Repo:** `GitHub/PapaThaiGG/docs/` — ask Cursor to refresh Desktop PDF when this changes.

---

## Endgame goal (~1 month)

**Stream with friends & family** — Pug live as your independent AI co-host on PapaThaiGG streams.

- Reacts to **chat** (spoken and/or typed)
- Takes **voice commands** from Sal
- Reacts to **in-game moments** (hotkeys first, smarter hooks later)
- Runs **locally** (Ollama brain + Warudo body + TTS voice)
- **Two avatar bodies, one Pug personality** — swap for variety:
  - **ALPHA** — Booth robot VRM (`D:\PTGG\ALPHA.vrm`) — stream **first**
  - **Pugsan** — samurai pug dog mascot (build in parallel) — **upgrade**

**Not blocking streaming on Pugsan 3D.** Robot goes live first; Pugsan ships when ready.

---

## Vision (Sal’s)

- Pug is an **independent AI co-host and mascot**, not a passive overlay.
- **Bodies:** Robot now → Pugsan samurai pug later (humanoid, rigged, talking mouth).
- **Brain:** Local LLM (Ollama) on the streaming PC (“The Beast”).
- **Personality:** Sarcastic, tactical, Thailand Base Camp energy — support-dog for a brain-surgery survivor living in Ao Nang.
- **Listen:** Chat + Sal’s voice commands.
- **Speak / type:** TTS + Warudo lip/expressions; optional chat replies.
- **React to the game:** e.g. get shot in FPS → Pug freaks out; raid hype; death roasts.
- **Website:** [papathaigg.com](https://papathaigg.com) — Meet Pug, Field Guide, recon pages tell the story.

### Sal & Pug on screen (not the same thing)

- **Sal (human host):** real webcam **or** future Sal avatar with Ao Nang jungle/window behind you.
- **Pug / Pugsan:** independent AI co-host — **not** Sal’s body, not face-tracked from Sal unless you choose that later.
- **OBS layers:** game full screen · optional Sal cam · Pug in corner/side **or** walk-on/walk-off (no permanent box required).

### Future vision — stream presentation

- [ ] Pug/Pugsan **small on screen** — not huge; resize in Warudo + OBS
- [ ] **Game-only stream** — no Sal cam; Pug walks **on stage**, speaks, walks **off**
- [ ] Custom **backgrounds** per scene (Thailand, tactical, game-matched, etc.)
- [ ] Swap **ALPHA robot** vs **Pugsan samurai** for variety (same brain)

### Future vision — smart reactions (not 32 Stream Deck buttons)

**Goal:** automation first; hotkeys only as backup.

| Feature | Possible? | How (phased) |
|---------|-----------|--------------|
| React to chat (Twitch/YouTube) | **Yes** | Chat bridge → Ollama → TTS + Warudo |
| Sal says **“Pug, be quiet until I call you back”** | **Yes** | Mute flag in brain; voice command clears it |
| React to death / win / loot / big moment | **Yes, phased** | v1: Stream Deck **or** hotkeys · v2: game-specific hooks · v3: smarter detection per title |
| **Any game** auto-aware without setup | **Hard** | No universal magic; we pick your main games and wire them |
| Walk on → talk → walk off | **Yes** | Warudo animations + show/hide OBS layer + triggers |
| Welcome **new** chatter in chat | **Yes** | Bot sees first message / first time in session |
| “Where you been? 32 days” returning viewer | **Yes** | Viewer memory (last seen date) in bot DB |
| **Private** DM to each new viewer | **Limited** | Twitch whispers/YouTube don’t work like private chat bots easily; **public** hello in chat is standard |

**Both options available:** manual triggers (Stream Deck) **and** automated (chat/game/Ollama). You should **not** need 32 buttons forever — that’s the early/manual path.

---

## Recommended stack

| Layer | Tool | Notes |
|-------|------|-------|
| Brain | **Ollama** + Llama 3.1 8B or Qwen2.5 | Dolphin optional; strong **system prompt** often enough |
| Voice | **TTS** (separate from Ollama) | Start simple (Windows voice / pyttsx3); upgrade later |
| Body | **Warudo** (Steam) | Load `.vrm`; swap ALPHA ↔ Pugsan |
| 3D prep | **Blender** + VRM add-on 4.5.0 | Import/export VRM; build Pugsan here |
| Chat ears | Streamer.bot or bridge → Ollama | Phase after brain + avatar test |
| Game reactions | Hotkeys / Streamer.bot first | Not full screen AI yet |
| Stream | OBS + existing PapaThaiGG setup | Pug in corner, doesn’t cover HUD |

**Build order:** Brain → Robot in Warudo → TTS → Chat → Voice commands → Game reactions → Pugsan 3D.

---

## Already done (Aug 6, 2026)

- [x] PapaThaiGG website mobile hero fix (live)
- [x] Pug checklist created (MD + PDF on Desktop + GitHub)
- [x] **Blender 5.2** installed
- [x] **VRM add-on 4.5.0** installed in Blender
- [x] **ALPHA.vrm** imported in Blender (Booth license = view/use OK, no edit/re-export)
- [x] Blender basics started (orbit view, delete cube, frame robot)
- [x] **Pugsan reference art** located: `D:\PTGG\...\PapaThai Mascot Files\Pugsan - Perfect - T-Pose.png`
- [x] **Warudo** ready to launch (Steam)
- [x] **ALPHA.vrm** loaded in Warudo (characters folder + selected)
- [x] Motion capture skipped (None) — independent mascot, not Sal’s face/body
- [ ] **Ollama** — installing

---

## Phase 0 — Prep (PC & software)

- [x] Blender + VRM add-on
- [ ] **Ollama** installed + one model pulled
- [ ] TTS path chosen (simple first)
- [ ] Warudo launched + **ALPHA.vrm** loaded
- [ ] Pug **Modelfile** / system prompt updated (seed in `D:\PTGG\PugAI\`)
- [ ] OBS layout tested with Pug visible
- [ ] Primary chat platform picked (Twitch / YouTube / Discord for v1)

---

## Phase 1 — Brain online (Ollama)

- [ ] Ollama runs; model responds in terminal
- [ ] Custom **Pug** model from Modelfile (personality locked)
- [ ] Replies capped to 1–2 sentences for stream pace
- [ ] Test with game open — still fast enough on GPU

---

## Phase 2 — Robot live in Warudo (stream v1 body)

- [ ] Launch Warudo; import `D:\PTGG\ALPHA.vrm`
- [ ] Idle + basic expressions work
- [ ] TTS hooked so Pug **speaks**
- [ ] Mouth/face reacts when speaking (Warudo lip sync or expression mapping)
- [ ] OBS capture tested
- [ ] **Do not edit/re-export Booth robot** — use as-is

---

## Phase 3 — Chat co-host

- [ ] One chat source wired → Ollama → TTS
- [ ] Rate limit + trigger words (“hey Pug”)
- [ ] Mute / “Pug sleep” toggle
- [ ] Optional typed reply in chat

---

## Phase 4 — Voice commands (Sal → Pug)

- [ ] Push-to-talk → STT → Ollama → spoken reply
- [ ] v1 commands: hype, quiet, read chat, roast on death

---

## Phase 5 — In-game reactions

- [ ] Hotkey presets (shot, clutch, wipe, win)
- [ ] Optional LLM paraphrase so lines don’t repeat
- [ ] ARC Raiders / AoC / FPS — pick 2–3 events each

---

## Phase 6 — Pugsan samurai avatar (parallel build)

**Reference:** `Pugsan - Perfect.png`, `Pugsan - Perfect - T-Pose.png`  
**Goal:** New VRM — humanoid pug, samurai armor, rigged, mouth moves for TTS.

- [ ] Image → 3D base mesh (Tripo AI or similar)
- [ ] Clean + rig in Blender
- [ ] Face/mouth blend shapes for lip sync
- [ ] Export **Pugsan.vrm**
- [ ] Load in Warudo; same Ollama brain, different body
- [ ] Stream variety: robot nights vs samurai Pug nights (sometimes both pop in)

**Blender learning:** use robot import to understand armature/VRM — don’t modify Booth asset.

---

## Phase 7 — Website & brand

- [x] Mobile homepage readable
- [ ] Meet Pug / recon pages match what Pug can actually do on stream
- [ ] Update when Pugsan ships

---

## Phase 8 — First stream (~1 month target)

- [ ] 30+ min dry-run: game + Warudo + Ollama + TTS
- [ ] Emergency stop (one key)
- [ ] Backup if Ollama dies (silent avatar or canned line)
- [ ] Stream with friends/family — Pug live

---

## Explicitly later

- Both avatars on screen at once (fun bit — optional)
- Full autonomous game-watching AI
- Cloud-only brain as primary
- Editing/re-exporting Booth ALPHA (license forbids)

---

## Next one thing (right now)

1. Warudo onboarding → **Yes, import expressions** (3 built-in) → **OK**  
2. Finish onboarding; robot idle on preview  
3. Finish **Ollama** → wire Pug brain  
4. **OBS** default install → later: game + Pug layers

---

## Notes (Sal edits here)

- Booth robot = no edit license — stream only
- Pugsan T-pose art in `D:\PTGG\PapaThaiGG brand build\...\PapaThai Mascot Files\`
- Old brain seed: `D:\PTGG\PugAI\Modelfile` + `Pug_Brain.py`
- Ask Cursor: “update Pug checklist PDF on Desktop” when this file changes

-
