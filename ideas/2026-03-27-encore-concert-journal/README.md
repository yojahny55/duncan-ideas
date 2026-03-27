# 🎵 Encore — Letterboxd for Concerts

**Date:** 2026-03-27
**Source:** X/Twitter (multiple independent tweets requesting this)
**Category:** Social / Entertainment / Music

## Problem Statement

Live music fans attend dozens of concerts over their lives but have no dedicated way to log, rate, review, and share those experiences. Current tools fail the use case:

- **Bandsintown** — tracks upcoming shows and ticket sales, not past experiences
- **Setlist.fm** — community setlist database, no personal journal or social features
- **Last.fm** — scrobbles recorded music, doesn't track live events
- **Spotify** — playlists and listening history, zero live event support

People resort to Notes app lists, spreadsheets, or memory. Concert experiences — the energy, the crowd, that one song where everyone sang along — get lost to time.

### Evidence of Demand

Multiple independent X/Twitter users requesting this exact concept:

> "i wish there was an app like letterboxd for concerts" — @nothingnewiz (Mar 24, 2026)

> "concert archives !!! it's kinda like letterboxd but for concerts" — @SlDEKlCK (Mar 16, 2026)

> "is there letterboxd but for concerts" — @ohheynaz (Mar 15, 2026)

> "Someone smarter than I has to make a Letterboxd for concerts" — @charliec178 (Mar 9, 2026)

Reddit threads (r/AppIdeas, r/Letterboxd) also repeatedly surface this request, confirming it's a recurring unmet need.

## Target Users

1. **Active concertgoers** (5-20+ shows/year) — want to remember and share every show
2. **Music nerds** — completionists who track everything they consume
3. **Festival-goers** — multi-day events with tons of sets to log
4. **Casual attendees** — want to look back and remember the shows they've been to
5. **Music discovery enthusiasts** — want to discover artists through friends' live reviews

**Market size:** 77M Americans attended at least one live music event in 2023 (Pollstar). Global live music market: $31B+.

## Proposed Solution: Encore

A beautiful, social concert journal. Log every show, rate it, write reviews, share with friends, discover live music through people you trust.

**Tagline:** *"Remember every show."*

### Core Experience

The Letterboxd formula applied to live concerts:
- **Log** — Mark concerts as "attended" from a comprehensive event database
- **Rate** — 5-star rating + quick reaction tags (🔥 Electric, 😢 Emotional, 🎸 Legendary, 💀 Mosh Pit, etc.)
- **Review** — Short or long-form reviews of the experience
- **Lists** — Curated concert lists ("Best Shows of 2026", "Intimate Venues")
- **Social** — Follow friends, see their concert activity, compare stats

## Key Features

### 📖 Concert Logging
- Search by artist, venue, date, or festival
- Auto-suggest from Bandsintown/Songkick event databases
- Manual entry for smaller/unlisted shows
- Multi-artist support (festivals, double bills)
- Setlist linking from Setlist.fm API

### ⭐ Rating & Reviews
- 5-star rating system
- Quick-reaction tags (vibe, energy, crowd, sound quality)
- Long-form reviews with photo uploads
- "Highlight moment" field — capture that one unforgettable moment
- Venue rating (separate from performance)

### 📊 Your Concert Life
- Total shows attended (lifetime + by year)
- Artists seen most often
- Venues visited (with map visualization)
- Genre distribution
- Concert calendar heatmap (like GitHub contributions)
- "Concert wrapped" — annual stats summary

### 👥 Social Features
- Follow friends and music tastemakers
- Activity feed of friends' concert logs
- "Were you there?" — discover who attended the same shows
- Shared concert lists
- Concert compatibility score between users

### 🎪 Festival Mode
- Log entire festival lineup
- Rate individual sets
- Daily diary entries
- Festival comparison across years

### 🔍 Discovery
- "Popular tonight" — trending shows in your city
- Artist concert ratings aggregated across all users
- "Best live acts" leaderboard
- Venue ratings and reviews

## Technical Architecture

### Stack
- **Frontend:** React Native (iOS + Android) / Next.js (web)
- **Backend:** Node.js + PostgreSQL
- **APIs:** Bandsintown API, Setlist.fm API, Spotify API (artist matching)
- **Auth:** Apple/Google sign-in + email
- **CDN:** Cloudflare (images, static)

### Data Model
```
Users → Concerts (attended, rated, reviewed)
Concerts → Artists, Venues, Festivals
Artists → Spotify/MusicBrainz IDs
Venues → Location data, capacity
```

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | Log unlimited shows, rate, basic stats |
| Encore+ | $4.99/mo | Reviews, photo uploads, advanced stats, concert wrapped, lists |
| Lifetime | $49.99 | Everything, forever |

Revenue model mirrors Letterboxd's proven approach (free core + premium features).

## Competitive Landscape

| App | What It Does | Gap |
|-----|-------------|-----|
| Bandsintown | Upcoming show discovery & tickets | No logging, no reviews, no social journal |
| Setlist.fm | Community setlist database | No personal journal, no ratings, no social feed |
| Last.fm | Music scrobbling | Recorded music only, no live events |
| Concert Archives | Early-stage concert logger | Limited features, small user base, no social |
| Songkick | Concert discovery & tracking | Sunset most features, no journal aspect |

**Differentiation:** Encore is the ONLY app focused on the personal, social, journal experience of live music. Everyone else is either pre-concert (discovery/tickets) or data-focused (setlists). Nobody owns the post-concert reflection space.

## Why Now

1. **Live music boom** — Post-pandemic live events at all-time highs, revenue up 30%+ year over year
2. **Letterboxd proved the model** — Logging + rating + social works for media. Concerts are the obvious next vertical
3. **Festival culture mainstream** — Coachella, Lollapalooza, etc. creating a generation of obsessive concertgoers
4. **No incumbent** — Despite years of people asking for this, nobody has built it well
5. **AI opportunity** — Auto-detect concerts from Spotify listening spikes, venue check-ins, social posts

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Cold start (empty event database) | Seed with Bandsintown + Setlist.fm APIs, easy manual entry |
| Hard to monetize free users | Letterboxd's conversion rate proves the model works for passionate communities |
| Small niche | 77M US concertgoers is not small; Letterboxd thrives with film nerds |
| Big player could copy | First-mover advantage + community lock-in (your concert history lives here) |

## Prototype

See `prototype/` folder for interactive HTML/CSS/JS demo.

---

*Researched and documented by Duncan ⚔️ — 2026-03-27*
