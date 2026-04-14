# ClearRoll — Smart Photo Declutter

**"Your camera roll has 30,000 photos. You've looked at 200 of them in the last year."**

Smart photo album cleaner that identifies forgotten, redundant, and junk photos — then makes deleting them feel like a game, not a chore.

## Problem

The average smartphone user has **20,000-50,000 photos** and growing. We take 5+ photos of the same moment, screenshot everything, save memes we'll never find again, and accumulate years of digital clutter. Storage fills up, iCloud/Google Photos costs climb, and finding anything becomes impossible.

**The emotional paralysis is real:** "I'll clean it up someday" → someday never comes → 40GB of photos you've never looked at twice.

Existing tools (Apple Photos "Duplicates", Google "Storage Manager") only find exact duplicates. Nobody solves the **full declutter experience**: near-duplicates, forgotten photos, screenshots, memes, blurry shots, and the psychological friction of deciding what to keep.

## Source

X/Twitter — @syntr0py: *"Need an app that scans my photo album and finds images I haven't touched in the past 3 years that periodically asks if I want to delete them"*

Multiple related complaints about photo storage full, paying for iCloud, never being able to find photos.

## Target Users

- **Primary:** iPhone/Android users with 10,000+ photos (millennials, parents, travelers)
- **Secondary:** Power photographers who shoot bursts and never cull
- **Tertiary:** Budget-conscious users trying to avoid paying for more cloud storage

## Key Features

### 🗂️ Smart Categories
- **Burst cleanup** — 8 photos of the same moment? Keep the best 1-2, trash the rest
- **Screenshot graveyard** — All screenshots older than 6 months, sorted by type (receipts, directions, memes, conversations)
- **Forgotten photos** — Photos you haven't viewed, shared, or favorited in 12+ months
- **Blurry/dark rejects** — AI detects out-of-focus, underexposed, and low-quality shots
- **Duplicates & near-dups** — Beyond exact matches: similar angles, same scene
- **Meme/social clutter** — Downloaded images from group chats, Instagram saves, etc.

### 🎮 Swipe to Clean (Tinder for photos)
- Swipe right to keep, left to delete
- "Keep All" and "Delete All" batch actions per category
- Undo buffer (30-day rollback before permanent deletion)
- Daily 2-minute declutter sessions with streak tracking

### 📊 Photo Health Score
- Overall camera roll health (0-100)
- Breakdown by category (screenshots: F, duplicates: D, etc.)
- Storage recovered tracker: "You've freed 12.4 GB!"
- Monthly camera roll report

### 🔔 Gentle Nudges
- "You added 847 photos this month and deleted 3"
- Weekly 5-minute declutter challenge
- "Your iCloud storage is 89% full — a 15-minute clean could save you $2.99/mo"

### 🧠 AI That Learns
- Learns your keep patterns (you always keep pet photos, always delete screenshots)
- Auto-suggests batches: "Delete all 234 screenshots of QR codes?"
- Face awareness: never auto-suggest deleting photos of your kids

## Market Research

| Competitor | What They Do | Gap |
|---|---|---|
| Apple Photos Duplicates | Exact duplicate detection only | No near-dups, no categories, no UX for decision-making |
| Google Storage Manager | Basic cleanup suggestions | Generic, not intelligent, no gamification |
| Gemini Photos | Similar photo finder | One feature only, $5/mo subscription |
| Slidebox | Swipe-based photo organizer | Manual sorting only, no AI categories |
| Smart Cleaner | Storage cleaner | Focused on caches, not photo declutter |

**ClearRoll is the only app that combines AI categorization + swipe UX + gamification + learning for photo declutter.**

## Pricing

- **Free:** Scan + 50 swipes/day + basic categories
- **Pro ($3.99/mo):** Unlimited swipes, all AI categories, burst cleanup, photo health score, streaks
- **Premium ($6.99/mo):** Add family sharing, advanced AI learning, priority processing, export reports

## Tech Stack

- **Mobile:** React Native (iOS + Android)
- **AI:** On-device ML (Core ML / TFLite) for classification, similarity detection
- **Privacy-first:** All processing on-device, no photos uploaded to servers
- **Cloud sync:** Optional encrypted backup of "keep" decisions across devices

## Prototype

👉 [Live Demo](https://yojahny55.github.io/duncan-ideas/ideas/2026-04-14-clearroll-photo-declutter/prototype/index.html)

---

*Inspired by @syntr0py on X/Twitter — "Need an app that scans my photo album and finds images I haven't touched in the past 3 years"*
