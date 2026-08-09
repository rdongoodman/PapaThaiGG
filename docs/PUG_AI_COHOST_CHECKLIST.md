# PapaThaiGG Master Checklist

**Owner:** PapaThaiGG (rdongoodman)  
**Updated:** August 9, 2026 (streaming PC · evening — wholesome Pug + voice routing)  
**Repo:** `GitHub/PapaThaiGG/docs/`  
**Master PDF (open first):** Desktop → `00 - PUG PROJECT MASTER GUIDE (Sal).pdf`  
**Also:** `Desktop\PapaThaiGG Plans\` · repo `docs/PUG_PROJECT_MASTER_GUIDE.pdf`  
**Ask Mozart:** *“update master guide PDF”* after big milestones

Four separate tracks: **Website** · **Pug/Pugsan avatars** · **Discord** · **Sal’s personal avatars**

**Philosophy:** Fun first, retired pace, no rush. Profit later → more volunteering + gear + fun.

---

## Dual-PC map (streaming PC = Pug home)

| | **Gaming PC** | **Streaming PC** |
|--|----------------|------------------|
| **Job** | Game only → capture out | **Pug / AI / Warudo / OBS** |
| **CPU** | i9-12900KF | i9-10900KF |
| **RAM** | 32 GB DDR5 | 64 GB DDR4 |
| **GPU** | RTX 3080 Ti | RTX 3080 |
| **Hostname** | DESKTOP-JCVJ6HR | RANDYS_PC_TH |

**Pug files (streaming PC):** `OneDrive\Desktop\App ideas\PTGG\PugAI\` · talk via Desktop **`Talk to Pug.bat`**

---

## Brand vision (PapaThaiGG · Pug · Pugsan)

**PapaThaiGG (Sal):** Retired-pace gaming/stream brand — fun first, Thailand expat vibe, community on Discord + website.

**Pug:** Wholesome AI co-host in the **Android robot** body (ALPHA.vrm). One **Ollama brain** — talks on stream, later in Discord + website chat. Default personality: **sweet, upbeat, loyal**; light humor OK; not mean or irritating.

**Pugsan:** Same brain, **samurai pug** body — second mascot for variety (Phase H).

**Endgame:** Pug/Pugsan live on stream → chat everywhere → remember viewers → welcome-back → optional DMs → sell toolkit to other streamers (low priority, after Sal proves it’s fun).

---

## Endgame (technical)

**Stream:** Pug live co-host (Ollama + Warudo + TTS + OBS). Sal cam optional — **Game + Pug only** layout OK.

**Everywhere (after stream proves fun):** Same brain on **Discord**, **website chat**, viewer **memory/welcome-back**, optional **DMs**. **Pugsan** second body. **Sell product** to other streamers later (low priority).

### Build order (do not skip)
1. **Phase B** — OBS (now) · Warudo scene **Pug (Android)** saved ✓  
2. **Phase C** — Stream chat → Pug · mute · walk on/off  
3. **Phase D** — Dual-PC Elgato  
4. **Phase E** — Discord bot  
5. **Phase F** — Website chat widget  
6. **Phase G** — Remember viewers · “Where you been?” welcome-back · DMs where allowed  
7. **Phase H** — Pugsan samurai  
8. **Phase I** — Product / sell (optional)

### Sal’s extra goals (logged Aug 9)
- [ ] Pug remembers users across stream + Discord + website  
- [ ] Welcome back with exact time away (*“30 days, 2 hours, 16 minutes…”*)  
- [ ] Global stream shout when returning viewer joins live  
- [ ] Private one-on-one messages (Discord DMs, website; Twitch/FB/X limited)  
- [ ] Pug + Pugsan both available for chat everywhere  
- [ ] 3D on website/Discord = nice-to-have; text/voice first  
- [ ] Social media full bots = unlikely · low priority  
- [ ] Sell toolkit to gamers/VTubers · one-time or monthly TBD · **after proof on Sal’s stream**

### Personality modes (future — logged Aug 9 evening)
- [x] **Default:** wholesome / sweet / hype co-host (done in Modelfile)  
- [x] **Nickname list locked** — see **Nickname Bible** section below  
- [ ] **Game-aware nicknames:** use secondary names on hype moments when game hooks exist (Phase C)  
- [ ] **Modes to add later:** funny · scared · light sarcastic (not irritating) · extra-wholesome · hype beast · etc.  
- [ ] **Switch by voice while streaming:** e.g. *“Pug, wholesome mode”* · *“Pug, funny mode”* · *“Pug, snark mode”* (light only)  
- [ ] **Switch by Steam Deck:** map modes to buttons on Sal’s **32-button Stream Deck** (one button = one personality)  
- [ ] **Implementation idea:** separate Ollama models (`Pug-wholesome`, `Pug-funny`, …) **or** one model + system prompt swap in `Pug_Brain.py`  
- [ ] Pugsan can share same mode system when samurai body ships

### Nickname Bible (Pug & Pugsan call Papa — never “Sal”)

**Primary (most of the time — brand core):** Papa · Papa Thai · Papa T  

**Secondary (hype, wins, funny moments):** PT · Big guy · Boss · Chief · Pops  

**Rare flavor:** Khun Papa (Thai respect — like Kun Randy)  

**Pugsan only — occasional Japanese:** Papa-san (パパさん) · Bossu (ボス) · Chīfu (チーフ) · Aniki (兄貴) · Denka-sama / Honored Papa (殿下様) · Khun Papa (クン・パパ)  

**Never:** Sal · old man · grandpa · geezer · elder · dude · age-mocking insults  

**Game-aware use (Phase C+):** secondary nicknames on big wins/clutches; primary for normal chat.

### Game awareness — what’s possible (logged Aug 9 evening)

| Level | What happens | Realistic? | When |
|-------|----------------|------------|------|
| **Easy** | Pug reacts to **chat**, **your voice**, or **Stream Deck button** you press | ✓ Yes | Phase C |
| **Medium** | Pug reacts to **game events** via hooks/APIs for specific games you play | ✓ Yes, per-game | Phase C–D |
| **Hard** | Pug **watches the screen** like a human (AI vision on game capture) | △ Experimental — slow, GPU-heavy, not reliable alone | Future test |
| **Animations** | Victory dance, sad slump, hype bounce in Warudo | ✓ Yes — **triggered** by any event above | Phase C |

**Honest answer:** Pug won’t silently “see” you lose a fight and react **by magic** on day one. We **build event pipes** (chat → you → hotkey → game hook → vision). Each pipe can fire Ollama + TTS + Warudo animation. True autonomous game-watching is possible to **experiment with later**, but **chat + voice + Steam Deck + game hooks** is the reliable path first.

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

## Done
- [x] Blender 5.2 + VRM · ALPHA.vrm · Warudo scene (gaming PC prototype)
- [x] **Streaming PC (Aug 9, 2026):** Ollama · llama3 · custom **Pug** model · Python 3.12
- [x] Pug_Brain.py works · **Talk to Pug.bat** on Desktop
- [x] Modelfile → **wholesome** personality rebuilt (no snark / no “ugh”) · tested *“Hey, pal”* ✓
- [x] VB-Cable installed · OBS installed
- [x] Master guide PDF on Desktop + `PapaThaiGG Plans\`
- [x] Pugsan reference art in PTGG brand build folders
- [x] **Lesson learned:** Windows default output must stay on **USB headset** — not CABLE Input (YouTube + OBS meter fix)

## Phase A — Brain (Ollama + TTS) — DONE on streaming PC
- [x] Pull llama3; custom **Pug** from Modelfile
- [x] Wholesome 1–2 sentence replies in Modelfile (+ example messages)
- [x] Windows TTS via Pug_Brain.py (David voice · prints “Speaking now…”)
- [ ] **Hear Pug in headset + OBS meter** — route **Python only** → CABLE Input (in progress tonight)
- [ ] Test with game open on gaming PC — GPU OK (later, dual-PC)

## Phase B — Robot live (Warudo + OBS) — IN PROGRESS (almost done)
- [x] Warudo: ALPHA.vrm · **Pug (Android)** · Orbit camera · Focus Character
- [x] Transparent background ON · Render Environment OFF
- [x] Scene saved: **Pug (Android)**
- [x] OBS: Window Capture → Warudo · Pug small in corner ✓
- [ ] OBS: **Pug Voice** — fix source → **Audio Input Capture → CABLE Output** (not Output Capture on CABLE Input)
- [ ] Route TTS: Volume mixer → **Python** → CABLE Input (per-app, not system default)
- [ ] Hear Pug while testing (OBS monitor and/or Listen on CABLE Output)
- [ ] Idle animation picked (optional polish)
- [ ] TTS → lip-sync / mouth (later polish)
- [ ] Crop/Pad Warudo capture edges (optional polish)
- [ ] Scene presets: **Cam+Game+Pug** · **Game+Pug** · **Game only**

## Phase C — Smart co-host
- [ ] **Talk to Pug with mic** (Whisper/STT) — no typing
- [ ] **Personality modes** — voice command + Stream Deck buttons (see goals above)
- [ ] Chat → Ollama → TTS (Twitch/YouTube first)
- [ ] **“Pug, be quiet until I call you back”** — mute flag
- [ ] Walk on → talk → walk off (game or near Sal cam box)
- [ ] Pug **movement** / expressions in Warudo tied to speech
- [ ] Game reactions: hotkeys first → game hooks later
- [ ] Welcome / returning viewer memory in chat bot
- [ ] Stream Deck: personality buttons + backup hotkeys (not 32 manual macros forever)

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

## Tonight — voice fix (do in order)

1. **Windows default output** = **USB Audio Device** (headset) — ✓ Sal fixed Aug 9  
2. **Volume mixer** → **Python** → Output = **CABLE Input** (only while Talk to Pug is open)  
3. **OBS** → replace **Pug Voice** with **Audio Input Capture → CABLE Output**  
4. Ask Pug a question → meter should move · enable OBS **Monitor** on Pug Voice to hear in headset  

Say **“Pug voice step 2”** in Cursor for click-by-click help.

---

## Notes (Sal edits here)

- Talk to Pug: Desktop **`Talk to Pug.bat`** only (skip Cursor terminal)
- **USB Audio Device** = Sal’s headset (YouTube + normal sound)
- **Never** set Windows default output to CABLE Input — only route **Python** there
- Warudo scenes are per-PC — redo Android on streaming PC
- Booth ALPHA = no edit/re-export
- Elgato on desk — hook up after Phase B works solo
- Mozart updates master PDF on Desktop + `PapaThaiGG Plans\` + GitHub `docs/`
- **Personality buttons + voice modes** = Phase C (logged above — not forgotten)

