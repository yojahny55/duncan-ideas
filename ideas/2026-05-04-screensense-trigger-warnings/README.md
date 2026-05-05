# ScreenSense — Personalized Content Warnings for Everything You Watch

> **Know before you watch.** Set your triggers, get instant warnings for any movie, show, or episode — before the scene hits.

## Problem

Every week, millions of people get blindsided by content in movies and shows:
- **PTSD triggers** — veterans, assault survivors, accident survivors seeing unexpected flashbacks
- **Phobias** — spiders, clowns, needles, drowning, heights appearing without warning
- **Parents** — graphic violence, sexual content, or language showing up in "family" movies
- **Epilepsy** — strobe/flashing light scenes with zero warning
- **Pet owners** — animal death/injury scenes (the #1 request on DoesTheDogDie.com)
- **Sensitive viewers** — SA scenes, self-harm, child danger, suicide depictions

**DoesTheDogDie.com** is the only real option — and it's a basic crowdsourced website with:
- No streaming integration
- No personalization (you see ALL triggers or none)
- No episode-level data (only season/show level)
- No "skip scene" feature
- No mobile app experience
- Outdated UX, no real-time data

**Content ratings (PG-13, R) are useless** — they tell you a movie *has* violence, not *when* it happens, *how graphic* it is, or if it involves specific triggers you care about.

## Market

| Segment | Size | Pain Level |
|---------|------|------------|
| PTSD survivors (US) | 12M+ | Extreme — unexpected triggers cause real harm |
| Epilepsy/photosensitive | 3M+ | Medical necessity |
| Parents of kids under 12 | 33M+ households | High — constantly surprised by content |
| People with phobias | 19M+ | Moderate — avoidance behavior |
| Pet owners (animal death sensitive) | 65M+ households | High — "I can't watch this" |
| General sensitive viewers | 50M+ | Moderate — ruins movie nights |

**Total addressable:** 50M+ US adults actively avoid content triggers. Reddit threads asking "is there an app like DoesTheDogDie but better?" appear weekly.

## Solution

**ScreenSense** — personalized content warning system that knows YOUR triggers and warns YOU about what matters.

### How It Works

1. **Set your profile** — pick from 40+ trigger categories, rate your sensitivity (🟢 Mild → 🔴 Severe)
2. **Search any title** — movie, show, or specific episode
3. **Get YOUR report card** — only the triggers YOU care about, with severity and timestamps
4. **Watch safely** — browser extension overlays warnings on Netflix/Hulu/Prime, optional scene-skip

### Key Features

- **40+ Trigger Categories** — animal death, spiders, clowns, needles, SA, self-harm, flashing lights, drowning, vomiting, child danger, jump scares, body horror, gore level, miscarriage, suicide, cancer, terminal illness, domestic violence, police brutality, eating disorders, drug use, and more
- **Episode-Level Data** — not just "this show has violence" but "S3E7 has a graphic stabbing at 34:22"
- **Severity Scale** — 🟢 Mentioned → 🟡 Shown briefly → 🟠 Graphic → 🔴 Extended/central
- **Timestamp Warnings** — "At 47:12 there's a spider scene lasting ~30 seconds"
- **Streaming Integration** — browser extension works with Netflix, Hulu, Prime, Disney+, HBO Max, Apple TV+
- **Skip Scene** — optional auto-skip or "look away" countdown for your triggers
- **Community Verification** — reports are crowdsourced + verified by multiple users for accuracy
- **Family Profiles** — parent profile sees "language/violence," teen sees different warnings, kid profile is strictest
- **Quick Check** — shareable link "Is [movie] safe for me?" — send to friends before movie night
- **Post-Credit Alerts** — "There's a post-credits scene with [trigger]"
- **New Release Radar** — get alerts when new movies/shows match your triggers

## Differentiation

| Feature | ScreenSense | DoesTheDogDie | IMDb Parents Guide | Common Sense Media |
|---------|-------------|---------------|-------------------|-------------------|
| Personalized to YOUR triggers | ✅ | ❌ | ❌ | ❌ |
| Episode-level detail | ✅ | ❌ | ❌ | ❌ |
| Timestamps | ✅ | ❌ | ❌ | ❌ |
| Severity ratings | ✅ | ❌ | Basic | Basic |
| Streaming integration | ✅ | ❌ | ❌ | ❌ |
| Skip scene | ✅ | ❌ | ❌ | ❌ |
| 40+ categories | ✅ | 35 (web only) | 10 | 15 |
| Mobile-first | ✅ | ❌ | ✅ | ✅ |
| Free core | ✅ | ✅ | ✅ | Partial |

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 5 titles/day, 10 trigger categories, no timestamps |
| **Shield** | $3.99/mo | Unlimited titles, all 40+ categories, timestamps, severity detail |
| **Guardian** | $7.99/mo | Everything in Shield + streaming integration, skip scene, family profiles (up to 5), new release radar |

## Technical Notes

- **Data sources:** TMDB API for titles, crowdsourced trigger reports, IMDb Parents Guide scraping for seed data
- **Browser extension:** Chrome/Firefox/Safari — overlays on streaming sites using content scripts + timestamp sync
- **Skip scene:** Content script detects video timestamp, pauses + shows "trigger coming" overlay, optional auto-skip
- **Mobile:** React Native or PWA for iOS/Android
- **Community:** Reddit-style verification system — reports need 3+ confirmations to be "verified"

## Why Now

1. **Streaming dominates** — 85%+ US households subscribe, content volume is overwhelming
2. **Mental health awareness** — trigger warnings have gone mainstream, people expect them
3. **DoesTheDogDie is stale** — been around for years, barely evolved, users actively beg for better
4. **No serious competitor** — nobody has built streaming-integrated, personalized, timestamped warnings
5. **Reddit validates weekly** — constant "is X safe to watch?" and "I wish there was an app for this" posts

## Name Ideas

- ScreenSense ✅ (clear, personal, positive connotation)
- WatchSafe
- TriggerGuard
- SafeScreen
- ContentCheck

---

*Date: 2026-05-04 | Source: Web (Reddit r/netflix, DoesTheDogDie, Product Hunt) | Category: Entertainment / Health & Wellness*
