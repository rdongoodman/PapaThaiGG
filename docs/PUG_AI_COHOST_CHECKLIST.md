# PapaThaiGG Master Checklist

**Owner:** PapaThaiGG (rdongoodman)  
**Updated:** August 10, 2026 (website review recommendations logged · step-by-step merged)  
**Repo:** `GitHub/PapaThaiGG/docs/`  
**Master PDF (open first):** Desktop → `00 - PUG PROJECT MASTER GUIDE (Sal).pdf`  
**Ordered build steps:** Desktop → `PUG_PUGSAN_STEP_BY_STEP_BUILD.pdf` · repo `docs/PUG_PUGSAN_STEP_BY_STEP_BUILD.html`  
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

**Key paths (from step-by-step guide):**
| What | Where |
|------|--------|
| ALPHA.vrm | `...\PTGG\ALPHA.vrm` |
| Streamer.bot (Phase C) | Desktop → `Streaming\Streamer.bot-x64-1.0.4\` |
| Gaming PC archive (old home) | `D:\PTGG\` — Blender `...\Blender Pug and Pugsan avatar builds\Pug 1.blend` · Pugsan art under brand build / Mascot Files |
| Brain choice | **Ollama local** = locked path · Dolphin optional later · cloud APIs only if selling to folks without GPUs |

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

### Nickname usage percentages (tune later — logged Aug 9 late evening)

Set target **weights** in Modelfile or `Pug_Brain.py` so nicknames feel natural, not random:

| Nickname | Suggested starting weight | Notes |
|----------|---------------------------|--------|
| **Papa** | ~40% of primary uses | Most common — short and warm |
| **Papa Thai** | ~35% of primary uses | Brand name — use often |
| **Papa T** | ~25% of primary uses | Casual hype |
| **Secondary** (PT · Big guy · Boss · Chief · Pops) | ~15–20% of **all** replies | Hype moments, wins, banter |
| **Khun Papa** | ~2–5% | Rare Thai flavor |
| **Pugsan Japanese** | ~5–10% when Pugsan active | Rare · special moments |

- [ ] Papa + Mozart pick final percentages after more live testing  
- [ ] **Percentages shift by game mood** — doing poorly vs doing great (see below)  
- [ ] Lock one **TTS voice** for stream (viewers stay consistent) · **not** multiple voices on stream  
- [x] **Voice rankings (Aug 9–10):** 1 Northern English Piper · 2 Alan Piper · 3 Ryan · 4 Christopher · 5 Liam · 6 HFC Male Piper · 7 Roger · 8 Guy · 9 Thomas  
- [ ] **MediaPipe notes (review later):** **Assets → MediaPipe Tracker** = scene webcam engine · **Characters → Pug → Motion Capture = No** = correct for TTS/audio lip-sync · tracker **Face/Hand/Pendulum = No** + **Show Camera = No** = idle/safe · **Character Freeze = No** (Freeze on Pug freezes the avatar, not the tracker) · deleting tracker asset = **this scene only** (Sal avatar later needs own scene or re-add tracker) · minus/delete may respawn (Warudo blueprint) — OK to leave asset idle · full mocap phase later when corner-cam or gestures wanted  
- [ ] **More uncommon Piper:** Joe (trying) · Norman · then lock voice  
- [ ] **Multilingual (near end — optional / may discard):** Pug/Pugsan reply in viewer language (YouTube/Twitch/Discord/website text) · personal vs global · spoken non-English needs multilingual TTS · integrate with Discord/website translators · Warudo N/A for chat  
- [ ] **Friend recordings:** quiet 1–2 min with phone OK · lunch-table chat = lower quality · permission required  
- [ ] **Lock voice once streaming starts** — no voice changes unless strong viewer feedback (brand consistency)  
- [ ] **Viewer feedback system:** stream polls · website · Discord — “like Pug voice?” yes/no · other mascot feedback  
- [ ] **Stand out vs common voices:** avoid overused Edge defaults · avoid ElevenLabs “Josh” presets · pick less-common Piper models  
- [ ] **Custom voice path (before paid):** record **British/Canadian expat friends** in Ao Nang (with permission) → clone for Pug/Pugsan  
- [ ] **Papa voice clone + British cadence blend** — test Coqui XTTS · free · quality TBD  
- [ ] **AI “generate voice from nothing”** — research ElevenLabs custom · cost · one-time vs monthly · only if free paths fail  
- [ ] **Fully unique studio voice — LAST RESORT:** pro voice actor or premium AI studio · document cost + licensing  
- [ ] **Paid TTS research (later):** ElevenLabs · Play.ht · monthly vs one-time · stream/commercial ToS  
- [ ] **Volume tune:** Roger felt loud — `PUG_VOICE_VOLUME` in Pug_Brain.py (now 0.82)  
- [ ] **Pause / hesitancy tune (later):** shorter one-sentence replies · SSML · merge lines · Piper  
- [ ] **TTS speed (later):** local Piper · pre-warm · on-screen “Pug is thinking…”  
- [ ] **Discord (Phase E):** text first · Pug/Pugsan voice replies later (TTS clips · VC)  
- [ ] **Website (Phase F):** text chat first · optional browser voice · Pugsan JP/EN voice modes  

### Game-mood nicknames & lines (future — logged Aug 9 late evening)

Pug’s **tone and nickname pick** change with how the run is going (via game hooks, your voice, or Stream Deck):

| Game mood | Nickname vibe | Example lines |
|-----------|---------------|---------------|
| **Rough night / losing** | Stick to **primary** — Papa, Papa Thai, Papa T · gentle, not mean | *“Papa, what’s happening tonight? We’ll turn it around.”* · *“You got this, Papa T — shake it off.”* |
| **Crushing it / big win** | More **secondary** + rare flavor · hype energy | *“Boss, that was clean!”* · *“Khun Papa kicks butt!”* · *“Papa-san kicks butt!”* (Pugsan) |
| **Normal / mid game** | Default percentage table above | Wholesome co-host banter |

- [ ] Tie mood to game signals (deaths, streak, score) or Papa saying *“rough night”* / *“we’re cooking”*  
- [ ] Percentages are **starting guesses** — tune after live streams

### Custom AI voices & “impersonations” (future · legal caution)

**Idea:** Funny occasional voice styles — accent vibes, character energy, custom cloned voices.

**Legal / platform reality (not legal advice):**
- **Celebrity impersonations** (Sean Connery, etc.) on a **public stream** = risky — publicity rights, platform rules, monetization issues. **Not recommended** for PapaThaiGG streams.
- **Safer paths:** original Pug/Pugsan voices · generic accents/archetypes (*“wise mentor”*, *“hype announcer”*) · **your own** voice clone · licensed voice packs where terms allow streaming.
- [ ] Research TTS options: Edge TTS · Piper · Coqui · ElevenLabs (check ToS + commercial/stream use)  
- [ ] **One default stream voice** for viewers + optional **non-celebrity** style modes via Stream Deck (if legal and ToS-safe)  
- [ ] **Skip celebrity impersonations** unless lawyer/licensed — note for future: probably forget this idea for public stream  
- [ ] Private offline jokes in bat file only = still gray area — treat as **no** for brand safety  
- [ ] **Mixed/original voice design** — blend or generate a unique Pug voice (not copying one celebrity)  
- [ ] **Papa voice clone** — optional funny mode · check ToS + stream use · probably not default on stream
- [ ] **Pugsan dual voice modes (Phase H):** (1) Japanese-primary — mostly JP, little English · (2) Japanese-English bilingual mix
- [ ] **TTS speed:** neural Edge voice has ~1–4s delay (internet) · first reply slower · improve later with local Piper or pre-cache

### VRM gestures, dances & expressions (future — Pug + Pugsan)

- [ ] **Warudo animations** — idle · wave · hype dance · sad slump · victory pose · walk on/off  
- [ ] Trigger dances/gestures from Stream Deck · game events · chat · TTS timing  
- [ ] **Pugsan build:** T-pose art → 3D → rig → **Pugsan.vrm** with same gesture library  
- [ ] Lip-sync to TTS (later polish) · eye/mouth expressions in Warudo  
- [ ] Custom animation clips for ALPHA + Pugsan bodies in Warudo

### Game awareness — what’s possible (logged Aug 9 evening)


| Level | What happens | Realistic? | When |
|-------|----------------|------------|------|
| **Easy** | Pug reacts to **chat**, **your voice**, or **Stream Deck button** you press | ✓ Yes | Phase C |
| **Medium** | Pug reacts to **game events** via hooks/APIs for specific games you play | ✓ Yes, per-game | Phase C–D |
| **Hard** | Pug **watches the screen** like a human (AI vision on game capture) | △ Experimental — slow, GPU-heavy, not reliable alone | Future test |
| **Animations** | Victory dance, sad slump, hype bounce in Warudo | ✓ Yes — **triggered** by any event above | Phase C |

**Honest answer:** Pug won’t silently “see” you lose a fight and react **by magic** on day one. We **build event pipes** (chat → you → hotkey → game hook → vision). Each pipe can fire Ollama + TTS + Warudo animation. **Chat + voice + Steam Deck + game hooks** is the reliable path first.

### Vision experiment — “Pug watch the game” (future · fun to try · not now)

- [ ] **Experimental:** AI vision on game capture — Pug/Pugsan “watch” screen and react (slow, GPU-heavy, may not work well — OK to turn off forever if bad)  
- [ ] **Steam Deck toggle ON:** before a big fight/group battle — tap button → vision mode starts watching  
- [ ] **Steam Deck toggle OFF:** tap same (or second) button → vision mode stops — **not on all the time** (saves GPU)  
- [ ] Works **alongside** reliable pipes (chat · mic · game hooks) — not a replacement  
- [ ] If too slow or flaky: disable feature, keep the rest — still a fun experiment when time comes  
- [ ] Same toggle idea for Pugsan when samurai body ships

---

# SECTION 1 — Website (papathaigg.com)

**When to work on this:** After avatar/stream phases prove fun — or small copy fixes anytime. **Do not block Pug build for website polish.**

**Site review (Aug 10, 2026):** Foundation is solid — tactical vibe, good page split, Expat Intel is strongest teaching page. Gaps = brand accuracy copy + more Sal/Thailand depth over time.

## Done
- [x] Mobile hero fix — readable on phones/tablets (Aug 6, 2026)
- [x] Button padding / equal sizes for Expat · Field Guide · Meet Pug
- [x] Live on GitHub Pages + Cloudflare
- [x] Multi-page structure: Live · Discord · Loadout · Expat Intel · Field Guide · Meet Pug
- [x] Expat Intel: ping table, visa breakdown, 3km villa case study, real cost numbers
- [x] Field Guide hub: Krabi cards + Pug → Pugsan evolution block

## Fix when ready — brand accuracy (small text, big trust)

Do these before Pug goes public on stream/site — no redesign needed.

- [ ] **Meet Pug tone:** Change “sarcasm-fueled commentary” → **wholesome, loyal, family-friendly** co-host (match Modelfile)
- [ ] **Meet Pug hardware:** Remove “RTX 5090 / The Beast” → **3080 Ti gaming PC + 3080 streaming PC** (dual-PC truth)
- [ ] **Homepage specs:** Fix RAM line — **32 GB DDR5 (gaming) + 64 GB DDR4 (streaming)**, not “64GB DDR5” as one box
- [ ] **“Under Construction” header:** Soften giant H2 on photos/videos section → small badge e.g. *“Gallery growing — Jan 2026”*; keep fun section names (In-Country Intel · Combat Footage · Base Camp)
- [ ] **Meet Pug expectations:** Add honest phased line — *“Live on stream first · Discord & site chat coming soon”* (don’t overpromise before Phase F)

## Add over time — aligned with vision (fun + teach + community)

Retired pace — one item at a time is fine.

1. [ ] **One-sentence mission under hero** — e.g. retired-pace gaming from the Andaman coast · real Thailand intel · zero cash grab · squad welcome
2. [ ] **Light “About Papa” beat** — 35+ years travel · military · worldwide experience · why Ao Nang (short block, not a memoir)
3. [ ] **Field Guide as real chapters** — each Krabi card → its own page over time:
   - [ ] Ao Nang day-to-day (markets, scooter, rainy season)
   - [ ] Railay / Phra Nang (“postcard office” story)
   - [ ] Island day trips (4 Islands, Hong, etc.)
   - [ ] Beyond Krabi — Lanta, Phuket, Malaysia runs, wider SE Asia
4. [ ] **Homepage trio clickable** — In-Country Intel → recon · Combat Footage → live/YouTube · Base Camp → Discord
5. [ ] **More Sal voice in copy** — warm, self-deprecating, “building for fun” (like recon Blender joke); balance tactical skin with hangout feel
6. [ ] **Pugsan tease on Meet Pug** — one line: same brain, samurai pug body, joins squad later (Phase H)
7. [ ] **When Pug ships — honest status on site** — online/offline · “talk on stream now” · “site chat soon” · update as features ship
8. [ ] **Optional: “This week at Base Camp”** — one homepage line: what you’re playing · one Thailand tip · stream day (only if it stays fun, not a chore)

## Phase F — Website chat (when avatars prove fun)

- [ ] Meet Pug / recon pages match what Pug can **actually** do (update as features ship)
- [ ] **Pug chat widget** on Meet Pug — talk to Ollama; show online/offline honestly
- [ ] Pugsan page updates when samurai avatar ships

## Optional later (website)

- [ ] SEO / industry guides (post-launch)
- [ ] Download / stream links hub refresh when going live regularly
- [ ] Persistent nav on subpages (nice-to-have)

## Do NOT change (by design)

- No donation / “buy me a coffee” pressure — not your brand
- Keep tactical aesthetic — distinctive and on-brand
- No rush for Pug 3D on web — text/voice first (Phase F)
- Don’t bloat homepage — mobile readability is good now

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
- [x] **Hear Pug in headset + OBS meter** — Python → CABLE Input · OBS → CABLE Output · Monitoring Enabled ✓ (Aug 9)
- [x] Identity fix — Pug speaks **as Pug**, not as Papa (*“Pug here, ready to stream with you”* ✓)
- [ ] Upgrade TTS to nicer single voice (later — one voice for viewers)
- [ ] Tune nickname usage percentages (see Nickname Bible)
- [ ] Test with game open on gaming PC — GPU OK (later, dual-PC)

## Phase B — Robot live (Warudo + OBS) — DONE (Aug 9 evening)
- [x] Warudo: ALPHA.vrm · **Pug (Android)** · Orbit camera · Focus Character
- [x] Transparent background ON · Render Environment OFF
- [x] Scene saved: **Pug (Android)**
- [x] OBS: Window Capture → Warudo · Pug small in corner ✓
- [x] OBS: **Pug Voice** — Audio Input Capture → **CABLE Output** ✓
- [x] Route TTS: Volume mixer → **Python** → CABLE Input (per-app)
- [x] Hear Pug in headset (OBS Monitoring Enabled · USB Audio Device)
- [ ] Idle animation picked (optional polish)
- [ ] TTS → lip-sync / mouth (later polish)
- [ ] Crop/Pad Warudo capture edges (optional polish)
- [ ] **MediaPipe Tracker:** not required for TTS Pug — **Show Camera = No** + Face/Hand off · leave asset in scene OK · delete only affects current scene · see MediaPipe notes above  
- [ ] Scene presets: **Cam+Game+Pug** · **Game+Pug** · **Game only**

## Phase C — Smart co-host
- [ ] **Reliable path (main):** chat + Papa mic + Steam Deck + game hooks → Ollama → TTS → Warudo animation
- [ ] **Talk to Pug with mic** (Whisper/STT) — no typing
- [ ] **Personality modes** — voice command + Stream Deck buttons (see goals above)
- [ ] Chat → Ollama → TTS (Twitch/YouTube first)
- [ ] **“Pug, be quiet until I call you back”** — mute flag
- [ ] Walk on → talk → walk off (game or near Sal cam box)
- [ ] Pug **movement** / expressions in Warudo tied to speech
- [ ] Game reactions: hotkeys first → game hooks later
- [ ] **Vision experiment (optional):** AI watches game capture · Steam Deck ON/OFF toggle · GPU-heavy · fun to try · OK to disable
- [ ] Welcome / returning viewer memory in chat bot
- [ ] Stream Deck: personality buttons + backup hotkeys (not 32 manual macros forever)

## Phase I — Package for streamers / VTubers to buy (optional · after Sal proves it)

**Goal:** Turn PapaThaiGG’s working Pug stack into a **product other streamers can buy** — one-time or monthly TBD.

**Already modular (good for packaging later):**
- [x] `Pug_Brain.py` — brain + voice config at top of file
- [x] `Modelfile` — personality (editable text)
- [x] `Talk to Pug.bat` — simple launcher
- [x] Checklist + master PDF — setup docs
- [x] OBS + VB-Cable routing documented

**Still needed before selling:**
- [ ] Pug fun on **Sal’s stream** for weeks (proof first)
- [ ] One-click or guided **installer** (Ollama · Python deps · VB-Cable check)
- [ ] **Settings UI** or simple config screen (voice · personality · OBS profile)
- [ ] **BYO VRM avatar** — buyer brings own body, our brain + voice + OBS template
- [ ] License + **Terms of Service** (TTS providers · stream use · no celebrity voices)
- [ ] Support docs / video walkthrough
- [ ] Pricing: one-time vs monthly · update channel
- [ ] See `AI_Stream_Cohost_App_Syllabus` in PapaThaiGG Plans folder

## Phase H — Pugsan samurai (after Pug is fun on stream)
- [ ] Image → 3D (Tripo or similar) from T-pose art
- [ ] Blender rig + mouth shapes → **Pugsan.vrm**
- [ ] Load in Warudo; swap with robot for variety
- [ ] **Do not** block Pug’s first live streams waiting on Pugsan

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

## Tonight — voice fix — DONE ✓ (Aug 9)

1. Windows default output = **USB Audio Device** (headset) ✓  
2. Volume mixer → **Python** → **CABLE Input** ✓  
3. OBS **Pug Voice** = **Audio Input Capture → CABLE Output** ✓  
4. OBS Settings → Monitoring Device = USB headset · Pug Voice = **Monitoring Enabled** ✓  
5. **Skip** “Listen to this device” on CABLE Output (not needed — would echo)

**Next session:** Phase C prep · lock Piper voice · OBS scene presets · nickname percentage tuning

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
- **Ordered steps companion:** `PUG_PUGSAN_STEP_BY_STEP_BUILD` (Desktop PDF + repo docs) — safe after deleting old “Cursor work info” folder
- Ollama local brain = correct MVP path (no paid API required)

