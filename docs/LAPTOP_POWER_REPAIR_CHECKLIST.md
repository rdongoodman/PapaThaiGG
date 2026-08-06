# Gigabyte 4K Laptop — Power Repair Checklist

**Owner:** PapaThaiGG (Randy)  
**Updated:** August 6, 2026  
**Machine:** Gigabyte ~17" 4K laptop · RTX 3070 · 64 GB DDR4 · ~4.5 years old  
**Problem:** No power — died ~2.5 years ago. New AC adapter + brick — still dead.  
**Goal:** Find where power stops (simple fix vs motherboard). Step-by-step with photos to Cursor.

**Desktop PDF:** `LAPTOP_POWER_REPAIR_CHECKLIST.pdf`  
**Ask Cursor:** *“I’m on laptop repair Step X — here’s my photo”*

---

## Before you start

- [ ] **Unplug everything.** Work on a dry table — not the beach yet.
- [ ] **Photo folder ready** on phone — label shots “Step 1 adapter,” “Step 2 jack,” etc.
- [ ] **Write down** exact laptop model from bottom sticker (e.g. `AORUS 17X`, `AERO 17`, etc.) — needed for parts.
- [ ] **Write down** new adapter label: voltage (V), amps (A), wattage (W), tip size (mm).
- [ ] **Confirm adapter matches laptop** — wrong voltage can kill boards; Gigabyte gaming laptops are often **19V** or **19.5V**, ~180–230 W.

### Tools you have / may need

- [x] Digital multimeter (voltmeter)
- [ ] Known-good power outlet (lamp tested in same socket)
- [ ] Small Phillips screwdriver set
- [ ] Plastic pry tools (credit card works in a pinch)
- [ ] Optional: ESD wrist strap (~$10) — gentle on electronics
- [ ] Optional: magnifier or phone macro for burned parts

### Multimeter basics (2 minutes)

1. **Dial:** DC volts — **20 V** range (or auto-range).
2. **Red probe** → **VΩmA** (or V) jack. **Black probe** → **COM**.
3. **DC vs AC:** Adapter output = **DC**. Wall side before the brick = **AC** (only if you know what you’re doing — skip wall AC for now).

---

## How we’ll work with Cursor

One step at a time. After each step:

1. Do **only** that step.
2. Send Cursor **2–3 photos** + meter reading (numbers on screen).
3. Wait for “go / stop / next step” before opening the laptop.

**Do not** plug in a questionable adapter into the laptop until Steps 1–3 pass.

---

# PHASE 1 — Test the power brick (no laptop yet)

*Most common fix: dead adapter or bad DC cable. ~30 minutes.*

### Step 1.1 — Visual check (adapter unplugged from wall)

- [ ] Inspect **wall cord**, **brick**, and **laptop cord** for:
  - Melted plastic, burn smell, bulging brick
  - Bent or loose barrel plug (round tip)
  - Pet-chewed cable, kinks, exposed wire
- [ ] **Photo:** whole adapter chain + close-up of tip and brick label.

### Step 1.2 — Meter the adapter output (brick plugged in, NOT plugged into laptop)

- [ ] Plug brick into wall only.
- [ ] Set meter to **DC volts**, 20 V range.
- [ ] **Red probe** on **center pin** of barrel tip. **Black probe** on **outer sleeve** of barrel.
- [ ] Read voltage — should be close to label (e.g. **19.0–19.5 V**). Some adapters read slightly high with no load.
- [ ] **Record:** ______ V DC
- [ ] **Photo:** meter display + how probes touch the tip.

| Reading | Meaning |
|--------|---------|
| **0 V** | Bad brick, bad wall cord, or bad outlet — try another outlet; if still 0, replace adapter (match V and ≥ W). |
| **Correct V (e.g. 19 V)** | Brick likely OK → Phase 2. |
| **Way too low (e.g. 5 V)** or **way too high** | Wrong adapter or failing brick — **do not** plug into laptop. |

### Step 1.3 — Wiggle test (optional)

- [ ] With meter still on tip, gently wiggle cord at brick and at tip.
- [ ] If voltage **drops to 0** when wiggling → **intermittent cable** — replace adapter or repair cable.

**Checkpoint:** Adapter must show stable correct DC voltage before laptop connection.

---

# PHASE 2 — Laptop side (still mostly external)

### Step 2.1 — Battery out if possible

- [ ] Many Gigabyte models: **bottom panel screws** → disconnect **internal battery connector** before deep testing.
- [ ] If battery is **non-removable without opening** — note it; proceed to Step 2.2 with battery connected for now (short test only).

### Step 2.2 — “No battery” power-on test

- [ ] Battery disconnected (if you got there).
- [ ] Plug in **known-good adapter** (passed Step 1.2).
- [ ] Press power button **once**, hold **3 seconds**.
- [ ] Look/listen for: **any** LED, fan twitch, keyboard blink, charging light.

| Result | Next |
|--------|------|
| **Nothing at all** | Phase 3 — DC jack or internal power path. |
| **LED / fan briefly then dead** | Photo + note — could be short, bad MOSFET, or board fault. |
| **Lights steady, still no boot** | Power delivery OK — different problem (RAM, display, BIOS). Still a win. |

- [ ] **Photo:** laptop when plugged in (any lights).

### Step 2.3 — DC power jack (barrel socket on laptop)

- [ ] **Visual:** loose jack, cracked solder ring, burned smell at port.
- [ ] **Feel:** wiggle plug — excessive play = common failure point.
- [ ] If you open bottom cover later: jack may need **resolder** or **replacement** ($10–30 part + labor if shop).

---

# PHASE 3 — Open bottom cover (first look inside)

*Only after Phase 1 passes. Ground yourself — touch metal case before touching board.*

### Step 3.1 — Identify model & service manual

- [ ] Bottom sticker: full model number → Google `"[model] service manual"` or iFixit.
- [ ] **Photo:** sticker + first look inside with cover off.

### Step 3.2 — Visual inspection (adapter UNPLUGGED)

Look for obvious damage — **do not touch board yet**:

- [ ] **Burn marks** near power jack, chips, or caps
- [ ] **Swollen capacitors** (domed tops, leakage)
- [ ] **Blown fuse** (small glass or square chip near jack — black inside or missing)
- [ ] **Liquid residue** (corrosion = often fixable if caught early, often not if sat 2 years)
- [ ] **Photo:** wide shot + close-up of area around DC jack and any burned spot.

### Step 3.3 — Battery connector

- [ ] Reseat battery cable (unplug, plug firmly).
- [ ] Retry Step 2.2 with adapter.

---

# PHASE 4 — Meter inside (advanced — with Cursor guiding each probe point)

*Skip until Cursor says go, based on your photos.*

Typical order on dead Gigabyte-style boards:

1. **Adapter present at jack?** — DC voltage at jack solder pads (adapter plugged in, careful of shorts).
2. **Fuse continuity?** — meter **beep/Ω** mode, power **unplugged** — fuse should beep (low Ω).
3. **Battery present?** — old dead battery can sometimes block boot — test **without** battery, adapter only.
4. **Power button ribbon** — loose cable to board (common on laptops).

**You will not guess pad locations** — send inside photos; Cursor marks *where* to probe on *your* board.

---

# PHASE 5 — What it might be (realistic expectations)

| If… | Likely fix | Difficulty |
|-----|------------|------------|
| Adapter reads **0 V** | New correct adapter | Easy |
| Adapter OK, **loose jack** | Resolder/replace jack | Medium (shop ~$50–100) |
| **Blown fuse** near jack | Replace fuse | Medium — if nothing else burned |
| **Burned MOSFET/chip** near jack | Board-level repair or replace board | Hard — often not worth it vs used board |
| **No signs, adapter OK, no LEDs** | Motherboard power circuit or EC | Hard — used motherboard hunt |
| **Lights on, no display** | Not power — RAM, GPU, display cable | Different checklist |

**2.5 years dead:** battery may be fully dead (normal). That alone **should not** block power-on on adapter — if nothing at all, suspect adapter path or board.

### Used motherboard option (last resort)

- [ ] Note **exact** Gigabyte model + revision.
- [ ] Search eBay / AliExpress / laptop parts sellers: *“[model] motherboard”*.
- [ ] Compare CPU soldered on board (laptop CPU often **on** motherboard — must match generation).
- [ ] RAM you have may transfer if same type — **photo old board** before swap.

---

# PHASE 6 — When to stop and use a shop

Stop and ask a local repair shop if:

- [ ] You see **large burn area** or smell strong burn
- [ ] Meter readings **don’t make sense** and we’re going in circles
- [ ] You’re unsure which probe point is safe
- [ ] Board needs **micro soldering** (tiny chips)

Bring: laptop, **working adapter**, this checklist, your photos. Ao Nang/Krabi may have phone/laptop shops — worth one quote before throwing board money at eBay.

---

# Session log (fill in as you go)

| Date | Step | Reading / result | Photo sent? |
|------|------|------------------|-------------|
| | 1.2 Adapter V | ___ V DC | |
| | 2.2 Power button | LED? fan? | |
| | 3.2 Inside visual | | |
| | | | |

---

## Next one thing (first session after dinner)

1. **Step 1.2 only** — meter the adapter tip, **not** plugged into laptop.  
2. Photo of meter + adapter label → send to Cursor.  
3. We decide Phase 2 or new adapter from there.

**You’ve got the gear. We’ll go slow. Fix or learn — both are fine.**

---

*Separate from PapaThaiGG master checklist (website · Pug · Discord · Sal avatars).*
