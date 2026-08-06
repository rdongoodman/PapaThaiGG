# PapaThaiGG Master Checklist

**Owner:** PapaThaiGG (rdongoodman)  
**Updated:** August 6, 2026 (evening)  
**Repo:** `GitHub/PapaThaiGG/docs/`  
**Desktop PDF:** ask Cursor — *“update Pug checklist PDF on Desktop”*

Four separate tracks: **Website** · **Pug/Pugsan avatars** · **Discord** · **Sal’s personal avatars**

**Philosophy:** Fun first, retired pace, no rush. Profit later → more volunteering + gear + fun.

---

## Endgame (~1 month for streaming)

Stream with friends & family — **Pug** live as independent AI co-host (Ollama + Warudo + TTS + OBS). Sal on cam **or** Sal avatar **or** game-only — all optional layouts.

---

# SECTION 1 — Website (papathaigg.com)

## Done
- [x] Mobile hero fix — readable on phones/tablets (Aug 6, 2026)
- [x] Button padding / equal sizes for Expat · Field Guide · Meet Pug
- [x] Live on GitHub Pages + Cloudflare

## To do
- [ ] Meet Pug / recon pages match what Pug can **actually** do (update as features ship)
- [ ] **Pug chat widget** on Meet Pug (later) — talk to Ollama; show online/offline honestly
- [ ] Pugsan page updates when samurai avatar ships
- [ ] Optional: “Pug status” blurb when major milestone hits

## Optional later (website)
- [ ] SEO / industry guides (post-launch)
- [ ] Download / stream links hub refresh when going live regularly

---

# SECTION 2 — Pug & Pugsan (independent AI co-host avatars)

**Not Sal.** One **Ollama brain**, two bodies: **ALPHA robot** + **Pugsan samurai pug**.

## Vision
- Independent AI mascot — walks on, talks, reacts, walks off
- Chat + voice commands + in-game moments (phased)
- Transparent Warudo layer over game in OBS
- Same brain later for Discord + website chat

## Done (Aug 6, 2026)
- [x] Blender 5.2 + VRM add-on 4.5.0
- [x] ALPHA.vrm in Blender (view only — Booth no-edit license)
- [x] Warudo: ALPHA loaded, transparent BG, 3 expressions, renamed **Pug (Android)**
- [x] Scene **saved** in Warudo
- [x] Pugsan reference art: `D:\PTGG\...\PapaThai Mascot Files\`
- [x] Brain seed: `D:\PTGG\PugAI\Modelfile` + `Pug_Brain.py`
- [ ] Ollama — install done; wire brain next session

## Phase A — Brain (Ollama + TTS)
- [ ] Pull model; custom **Pug** from Modelfile
- [ ] 1–2 sentence reply cap for stream pace
- [ ] TTS chosen (simple first)
- [ ] Test with game open — GPU OK

## Phase B — Robot live (Warudo + OBS)
- [ ] Idle animation picked (Character → Animation → Idle)
- [ ] TTS → Pug speaks; mouth/expressions move
- [ ] OBS: game + optional Sal cam + Pug layer (Spout2 plugin later)
- [ ] Pug small on screen — not huge
- [ ] Scene presets: **Cam+Game+Pug** · **Game+Pug** · **Game only** · **Cam+Game**

## Phase C — Smart co-host (not 32 Stream Deck buttons)
- [ ] Chat → Ollama → TTS (Twitch/YouTube first)
- [ ] **“Pug, be quiet until I call you back”** — mute flag
- [ ] Walk on → talk → walk off (game or near Sal cam box)
- [ ] Game reactions: hotkeys first → game hooks later
- [ ] Welcome / returning viewer memory in chat bot
- [ ] Manual Stream Deck = backup only, not forever

## Phase D — Pugsan samurai (parallel build)
- [ ] Image → 3D (Tripo or similar) from T-pose art
- [ ] Blender rig + mouth shapes → **Pugsan.vrm**
- [ ] Load in Warudo; swap with robot for variety

## Stream layout notes
- **Sal cam corner:** you or Sal avatar; **you** toggle on/off for all viewers
- Viewers **cannot** hide your cam individually on Twitch/YouTube
- Pug can walk onto game **or** cam box area

---

# SECTION 3 — Discord (PapaThaiGG server)

**Cursor cannot log into Discord.** I help via screenshots, bot code, copy, and checklists — you apply in Discord.

## What you built (looks great)
- Onboarding: `#arrivals` → `#get_your_visa` (passport → Recruit) → `#house_rules`
- Carl-bot welcomes; social contract; English-only (translators later)
- Rank progression: Recruit → Scavenger → Vanguard → Ranger → Gladiator → Paladin → Grandmaster
- Themed categories: Visitor Center, Beer Garden, Muay Thai Ring, Squad Shack, Classified, etc.
- `#social_media_links_website` · `#the_local_legend` · Engine Room · Suggestion box

## Audit — permissions & leveling (when ready, no rush)
- [ ] Walk full onboarding path with a **test account** (fresh login)
- [ ] Confirm passport reaction still grants **Recruit**
- [ ] Confirm Carl-bot welcome + role assignment fire correctly
- [ ] Verify **locked channels** match intended ranks (padlocks = correct roles)
- [ ] Voice rooms: Front Porch · Island Radio · Elite Lounge · Barracks · Hypogeum · Colosseum — rank gates correct?
- [ ] XP / leveling bot (Carl-bot or other): document **how to rank up** in pinned post
- [ ] Moderator roles vs rank roles — who can ban, who can see Control Tower
- [ ] `#house_rules` and `#arrivals` copy still accurate (Pug mention OK as “coming”)

## Optional later (Discord — gentle notes)
- [ ] **Pinned “How to rank up”** in `#arrivals` or `#bulletin_board` — what earns XP (chat, voice, posts, images)
- [ ] New recruits may feel **channel overload** — OK; onboarding path helps; consider a one-page map image
- [ ] **`#pug-lounge`** or use **Engine Room** for Pug AI bot chat when built
- [ ] **Pug Discord bot** → Ollama in selected channels (e.g. `#the_long_bar_general_chat`)
- [ ] Pug assists vibe per house rules — **not** auto-ban replacement for human mods
- [ ] Rate limits so Pug doesn’t spam when always-on

---

# SECTION 4 — Sal’s personal avatars (you — not Pug)

**Separate from Pug/Pugsan.** Avatars that look like **you**, driven by **your** webcam/voice — mouth moves when **you** talk, follows **your** movement.

## Vision
- Option alongside real webcam: Sal avatar in corner with Ao Nang jungle/window behind you
- Hybrid (real eyes/mouth + 3D body) **or** full 3D likeness — phased over months
- Used in OBS **Sal cam box** layer — independent from Pug layer

## Possible stack (from your old roadmaps — pick when ready)
- **Hybrid:** Warudo + OBS + BRIO webcam + MediaPipe / Lens Studio mask
- **Full face:** MetaPerson / FaceBuilder / Blender / MetaHuman (long-term)
- **Not the same as Pug** — Pug uses Ollama; Sal avatar uses **your** face/body tracking

## To do (later — no rush)
- [ ] Decide: webcam-only for v1 streams vs start Sal avatar path
- [ ] BRIO / cam setup for tracking if going hybrid
- [ ] Test OBS 3D Transform or Warudo body + face overlay
- [ ] Ao Nang window / jungle virtual background for Sal box
- [ ] Document in OBS which layer is **Sal** vs **Pug** (never confuse the two)

---

## Next one thing (when you return)

1. Finish **Ollama** → test Pug brain (`D:\PTGG\PugAI\Modelfile`)  
2. Finish **OBS** install (defaults)  
3. Re-open Warudo only when wiring TTS/OBS  

**Safe to close Warudo now** — you saved the scene (“Success: Saved scene”). Closing editor + Steam app is fine.

---

## Notes (Sal edits here)

- Warudo character renamed: **Pug (Android / ALPHA)**
- Booth ALPHA = no edit/re-export
- Discord: plenty of time to audit permissions
- Ask Cursor to update Desktop PDF when this file changes

-
