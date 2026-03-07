# FixLog - Never Forget How You Fixed It 🔧

**Date:** 2026-03-06  
**Source:** Web Research  
**Category:** Consumer Utility / Home Management

## Problem Statement

When something in your home breaks — the dishwasher won't drain, the WiFi keeps dropping, the garage door makes a weird noise — you usually figure out a fix. Clean the filter. Reset the router. Adjust the spring tension.

But 6 months later when it happens again, you've completely forgotten what worked.

You end up:
- Re-googling the same problem
- Re-watching the same YouTube videos
- Re-troubleshooting from scratch
- Wasting 30-60 minutes on something you already solved

**The core insight:** Your devices have *your* specific issues, not generic ones. Generic troubleshooting guides don't know that YOUR dishwasher's drain issue is solved by cleaning the filter housing (not the filter itself), or that YOUR router needs a specific sequence of unplugging.

There's no app for logging YOUR personal repair history for YOUR specific devices.

## Target Users

1. **Homeowners** — Managing 20+ appliances and systems
2. **Renters** — Keeping notes on apartment quirks
3. **Tech-savvy families** — Multiple people who might fix things
4. **DIY enthusiasts** — Who fix rather than call repair services
5. **Property managers** — Tracking issues across units

## Market Research

### Existing Solutions

| Solution | Why It Falls Short |
|----------|-------------------|
| **iFixit** | Community guides for generic repairs, not personal logs |
| **FixIt Lens (our idea)** | AI troubleshooter for general advice, no history |
| **HomeKeep (our idea)** | Maintenance schedules, not repair history |
| **Notes app** | Unstructured, unsearchable, not shareable |
| **Spreadsheets** | Clunky, no photo support, poor mobile experience |

### The Gap

Nobody is building a **personal repair diary** that:
- Logs fixes for your specific devices
- Surfaces past solutions when problems recur
- Tracks patterns over time
- Helps you decide repair vs. replace

## Proposed Solution

**FixLog** is a personal repair diary for your home.

Log problems when they happen. Record what fixed them. Next time something acts up, instantly see what you did before. Track patterns. Know when it's time to replace.

### Key Features

#### 1. Quick Problem Logging
- **Photo capture** — Snap the error code, the broken part, the fix
- **Voice notes** — "The dishwasher stopped draining. Cleaned the filter housing — the rubber part under the filter — and it worked"
- **One-tap entry** — Device, problem, fix, done

#### 2. Your Device Library
- Add your actual devices (not generic "dishwasher" — YOUR Samsung DW80R5060US)
- Track purchase date, warranty status, manuals
- See complete history per device

#### 3. Instant Search
- "Dishwasher won't drain" → shows your past fixes
- "Router" → shows all router issues and resolutions
- AI understands synonyms and context

#### 4. Pattern Detection
- "This device has had issues 4 times in 6 months"
- "This problem recurs every ~90 days — consider preventive action"
- "You've spent $450 on repairs — replacement might be cheaper"

#### 5. Repair vs. Replace Calculator
- Track cumulative repair costs
- Compare to replacement value
- Factor in device age and reliability

#### 6. Household Sharing
- Everyone can log fixes
- Everyone can search past solutions
- "Dad fixed this last year — what did he do?"

#### 7. AI Problem Assistant
- "My dryer is making a squeaking noise" → surfaces YOUR past dryer fixes first, then general suggestions

### How It Works

```
1. Something breaks → Open FixLog
2. Select device (or add new)
3. Describe problem (voice/text/photo)
4. Log the fix when you figure it out
5. Next time → Search and see your history
```

## Business Model

### Freemium

**Free Tier:**
- 10 devices
- Basic logging
- Search history

**Pro ($3.99/month):**
- Unlimited devices
- Household sharing (up to 5 members)
- Pattern analytics
- Repair vs. replace calculator
- Photo unlimited storage
- Export/backup

**Household ($6.99/month):**
- Up to 10 members
- Multiple properties
- Priority support

### Why It Works

- **Low price** — Competes with "just use a spreadsheet"
- **Recurring value** — You keep using it every time something breaks
- **Family sharing** — Increases stickiness

## Technical Architecture

### Stack
- **Frontend:** React Native (iOS + Android)
- **Backend:** Supabase (auth, database, storage)
- **AI:** OpenAI API for natural language search
- **Voice:** Whisper for voice-to-text

### Data Model
```
Device:
  - id, name, brand, model
  - purchase_date, warranty_expiry
  - photo, manual_url
  - household_id

Problem:
  - id, device_id
  - description, photos, voice_note
  - severity, status
  - created_at

Fix:
  - id, problem_id
  - solution_text, photos
  - cost, time_spent
  - effectiveness_rating
  - created_at
```

## MVP Scope (4 weeks)

### Week 1: Core Logging
- Add devices
- Log problems with text/photo
- Log fixes

### Week 2: Search & History
- Device history view
- Full-text search
- Timeline view

### Week 3: Mobile Polish
- Voice input
- Quick-add widget
- Push notification reminders ("Did you fix it?")

### Week 4: Sharing & Launch
- Household invites
- Data export
- App Store submission

## Competitive Advantages

1. **First mover** — No dedicated personal repair log exists
2. **Simplicity** — Not trying to be a home management suite
3. **Personal context** — YOUR devices, YOUR fixes
4. **AI-enhanced** — Natural language search across your history
5. **Sharable** — Family can all contribute and benefit

## Marketing Strategy

### Launch Channels
1. **Reddit** — r/homeowners, r/homeimprovement, r/DIY, r/fixit
2. **Product Hunt** — "Never forget how you fixed it"
3. **Home improvement blogs** — Guest posts about repair tracking
4. **YouTube DIY creators** — Sponsorships

### Key Messages
- "Your home's repair memory"
- "Never re-troubleshoot the same problem"
- "What did I do last time?"

## Success Metrics

| Metric | 3 Month Target | 12 Month Target |
|--------|---------------|-----------------|
| Downloads | 5,000 | 50,000 |
| MAU | 2,000 | 25,000 |
| Pro conversions | 5% | 8% |
| Fixes logged | 10,000 | 200,000 |
| Retention (30 day) | 30% | 45% |

## Why Now?

1. **Homeownership costs rising** — People want to DIY more
2. **AI makes search smarter** — Natural language across your history
3. **Mobile-first logging** — Voice + photo capture is seamless
4. **Right-to-repair movement** — Growing culture of fixing vs. replacing

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| "Just use Notes app" | Superior search, structure, sharing |
| Low frequency (devices don't break often) | Focus on retention + household sharing |
| Data privacy concerns | Local-first option, encrypted storage |
| Feature creep toward HomeKeep/inventory | Stay focused on repair history only |

---

## Prototype

See [prototype/](./prototype/) for the interactive demo.

**Demo link:** [FixLog Demo](https://yojahny55.github.io/duncan-ideas/ideas/2026-03-06-fixlog-repair-diary/prototype/index.html)

---

*Researched and documented by Duncan ⚔️*
