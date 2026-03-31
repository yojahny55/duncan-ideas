# WatchStack 📺🔀

**One list to rule them all — aggregate every watchlist into a single, rankable queue.**

## The Problem

Everyone has watchlists scattered across 5+ streaming platforms: Netflix "My List," Hulu queue, Disney+ Watchlist, HBO Max, Apple TV+, Amazon Prime, YouTube "Watch Later," Letterboxd, IMDb, Trakt. When it's time to watch something, you open app after app trying to remember what you saved and where.

**@kingF0X23 on X/Twitter (March 31, 2026):**
> "I need an app that is a list of all my 'what to watch' lists all in one view. So I can rank what I want to watch first"

This is a universal frustration. The average US household subscribes to **4.7 streaming services** (Deloitte 2025). Each has its own watchlist. There is NO consumer tool that aggregates them into one prioritized view.

## The Pain Points

1. **Scattered watchlists** — You saved something on Netflix 3 months ago. Now you can't remember which platform it's on.
2. **Decision paralysis** — You have 200+ items across platforms but spend 30 minutes "deciding what to watch."
3. **No ranking** — Streaming apps let you add to a list but not rank/prioritize items.
4. **Expiring content** — Shows leave platforms without warning. That movie you saved might be gone.
5. **Social recommendations** — Friends recommend shows via text, and you forget to add them anywhere.

## Target Users

- **Primary:** Streaming multi-subscribers (4+ services), ages 18-45
- **Secondary:** Couples/households deciding what to watch together
- **Tertiary:** Movie/TV enthusiasts who track everything (Letterboxd users, Trakt users)

## Proposed Solution: WatchStack

A unified watchlist aggregator that pulls from all your streaming services and lets you create one ranked, filterable queue.

### Core Features

1. **Universal Import**
   - Connect streaming accounts (Netflix, Hulu, Disney+, HBO Max, Prime, Apple TV+, Paramount+, Peacock)
   - Import from tracking services (Letterboxd, IMDb, Trakt, JustWatch)
   - Quick-add via search (TMDB-powered)
   - Import via sharing/clipboard from any app

2. **The Stack (Priority Queue)**
   - Drag-and-drop ranking of your entire watchlist
   - "What should I watch?" — shows your #1 pick with one tap
   - Swipe gestures: up to promote, down to demote, left to remove, right to mark watched
   - Deck of cards UI — your top pick is front and center

3. **Smart Filters**
   - By platform (show me only Netflix items)
   - By mood/genre (comedy tonight, thriller this weekend)
   - By time available (30 min episode vs 2.5 hour movie)
   - By who wants to watch (solo vs couple vs family)

4. **Expiring Soon Alerts**
   - Integration with JustWatch/ReelGood data
   - Push notifications: "Interstellar leaves Netflix in 3 days — it's #7 on your stack"
   - Auto-promote expiring titles

5. **Couple Mode**
   - Both partners rank independently
   - "Overlap" view shows titles you both want to watch, sorted by combined ranking
   - Eliminates the "what do YOU want to watch?" standoff

6. **Social Inbox**
   - Share a recommendation link: "Watch this!" → appears in friend's WatchStack inbox
   - Track who recommended what (credit your friends)
   - See what friends are watching/rating

7. **Watch Stats**
   - Hours watched per platform per month
   - Genre breakdown and viewing patterns
   - "Cost per hour" analysis (monthly fee ÷ hours watched)
   - Platform ROI: "You're paying $15.99/mo for HBO but only watched 2 hours last month"

## Competitive Landscape

| Product | What It Does | What It Doesn't Do |
|---------|-------------|-------------------|
| **JustWatch** | Search where to stream | No ranked personal queue, no couple mode |
| **Trakt** | Track what you've watched | Overwhelmingly complex, not queue-focused |
| **TV Time** | Track episodes/shows | No movie focus, no platform aggregation |
| **Reelgood** | Search across platforms | Acquired by Samsung, no ranking system |
| **Letterboxd** | Rate/review films | No streaming sync, no priority queue |
| **WatchStack** | **Unified ranked queue** | **This is the gap** |

**The gap:** Every existing tool is either (a) a search/discovery engine or (b) a tracking/logging tool. NOBODY has built the **priority queue** — the tool that answers "what should I watch NEXT?" with confidence.

## Revenue Model

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 1 platform + manual adds, basic ranking, 50 items |
| **Stack Pro** | $3.99/mo | Unlimited platforms, couple mode, expiring alerts, unlimited items |
| **Stack Family** | $6.99/mo | Up to 6 profiles, family overlap mode, shared recommendations |

**Alternative revenue:** Platform ROI insights could partner with streaming services for churn prevention (showing users they ARE getting value).

## Market Size

- **US streaming households:** 85%+ of US households (115M+)
- **Average subscriptions:** 4.7 per household
- **Decision fatigue market:** 46% of streamers say they spend too long choosing what to watch (Nielsen 2024)
- **TAM:** Even 1% of multi-subscribers = 1.15M users × $3.99/mo = $55M ARR

## Technical Architecture

```
┌──────────────────────────────────────────┐
│              WatchStack App              │
│  (React Native / Flutter — iOS + Web)   │
├──────────────────────────────────────────┤
│         Unified Queue Engine             │
│  (ELO ranking, couple merge algorithm)   │
├──────────────────────────────────────────┤
│       Platform Sync Layer                │
│  (OAuth where available, scraping where  │
│   not, JustWatch API, TMDB metadata)    │
├──────────────────────────────────────────┤
│     Expiration Tracking Service          │
│  (JustWatch data, daily delta checks)   │
├──────────────────────────────────────────┤
│          PostgreSQL + Redis              │
│   (User data, queue state, caching)     │
└──────────────────────────────────────────┘
```

## Why Now

1. **Subscription fatigue is peaking** — Average household spends $61/mo on streaming (2025). People want to maximize value.
2. **Content libraries are fragmenting** — Shows move between platforms constantly.
3. **Couple cohabitation friction** — "What to watch" is a genuine relationship pain point (surveys consistently rank it top-5 daily decisions).
4. **No dominant player** — Reelgood was acquired/gutted by Samsung, JustWatch focuses on search not queuing, Trakt is too complex for casual users.

## Source

- **X/Twitter:** @kingF0X23 — "I need an app that is a list of all my 'what to watch' lists all in one view. So I can rank what I want to watch first" (March 31, 2026)
- **Supporting:** Decision fatigue research (Netflix internal data shows 90 seconds = abandonment), Nielsen streaming reports

---

*Researched and documented by Duncan ⚔️ — March 31, 2026*
