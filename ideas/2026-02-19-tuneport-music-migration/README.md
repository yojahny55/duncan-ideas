# TunePort — Seamless Music Library Migration

**Date:** February 19, 2026  
**Source:** X/Twitter Research  
**Status:** Concept + Prototype

---

## 🎯 Problem Statement

Millions of users are locked into a single music streaming service because migrating their carefully curated playlists, saved albums, and liked songs to another platform is a nightmare. Current solutions are:

1. **Incomplete** — Miss songs, lose playlist order, can't match all tracks
2. **Expensive** — Premium subscriptions for basic functionality
3. **Unreliable** — Services break when APIs change
4. **Confusing** — Complex OAuth flows, technical error messages

### Real User Pain Points (from X/Twitter)

> "I wish there was an app I could send my Spotify playlist that could duplicate it in Apple Music. That way my weirdo friends over there could experience some good taste for once"
> — @Mackedelic_, Feb 17, 2026

> "Fr wish i could move all my playlists on Spotify to somewhere else and have them in the same order tbf, i wonder if YouTube music allows it or Apple Music"
> — @OFJSTDANNON, Feb 19, 2026

> "there's an app that transfers all your playlist/library, we pay for these apps monthly"
> — @_anthonyfares, Feb 18, 2026

---

## 👥 Target Users

| Segment | Description | Pain Level |
|---------|-------------|------------|
| **Service Switchers** | Users changing from Spotify → Apple Music (or vice versa) due to price, features, or ecosystem | 🔥🔥🔥 |
| **Multi-Platform Users** | People with different services on different devices | 🔥🔥🔥 |
| **Playlist Sharers** | Want to share playlists with friends on different platforms | 🔥🔥 |
| **Music Hoarders** | Large libraries (10K+ songs) need reliable migration | 🔥🔥🔥 |
| **New Device Owners** | iPhone → Android switchers (or vice versa) | 🔥🔥 |

---

## 💡 Proposed Solution: TunePort

A **one-time migration tool** (not another subscription) that:

1. **Connects to any major service** — Spotify, Apple Music, YouTube Music, Amazon Music, Tidal, Deezer
2. **Preserves everything** — Playlist order, folder structure, liked songs, saved albums
3. **Smart matching** — Uses multiple identifiers (ISRC, title+artist, acoustic fingerprint) to find the right track
4. **Shows before committing** — Preview what matches, what's missing, suggest alternatives
5. **One-time fee** — Pay per migration, not a subscription

### Key Differentiators

| Feature | TunePort | SongShift | TuneMyMusic | Soundiiz |
|---------|----------|-----------|-------------|----------|
| One-time pricing | ✅ | ❌ (sub) | ❌ (sub) | ❌ (sub) |
| Preserves exact order | ✅ | ⚠️ | ⚠️ | ⚠️ |
| Smart fallback matching | ✅ | ❌ | ❌ | ⚠️ |
| Preview before migrate | ✅ | ✅ | ⚠️ | ✅ |
| Offline backup | ✅ | ❌ | ❌ | ❌ |
| No account required | ✅ | ❌ | ❌ | ❌ |

---

## ✨ Key Features

### 1. Universal Connect
OAuth connections to all major streaming services with clear permissions shown.

### 2. Library Scanner
- Full playlist inventory with song counts
- Liked songs, saved albums, followed artists
- Folder/category structure where supported
- Estimated match rate preview

### 3. Smart Matcher
Three-tier matching system:
1. **ISRC Match** — International Standard Recording Code (exact same recording)
2. **Metadata Match** — Title + Artist + Album with fuzzy matching
3. **Acoustic Fingerprint** — For covers, remasters, and alternate versions

### 4. Migration Preview
- ✅ Green: Exact match found
- 🟡 Yellow: Similar match (different version/remaster)
- 🔴 Red: No match (song unavailable on destination)
- Manual override for yellow/red items

### 5. Execute Migration
- Progress tracking with time estimate
- Pause/resume for large libraries
- Detailed log of what was migrated

### 6. Backup Export
JSON/CSV export of your library — own your music data forever.

---

## 🖥️ User Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     1. CONNECT SOURCE                       │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │ Spotify │ │  Apple  │ │ YouTube │ │  Tidal  │          │
│  │  Music  │ │  Music  │ │  Music  │ │         │          │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                     2. SCAN LIBRARY                         │
│  ┌──────────────────────────────────────────────────┐      │
│  │ 📁 Playlists (47)              ▓▓▓▓▓▓▓▓░░ 80%   │      │
│  │ ❤️  Liked Songs (1,247)         ▓▓▓▓▓▓▓░░░ 70%   │      │
│  │ 💿 Saved Albums (89)            ▓▓▓▓▓▓▓▓▓░ 90%   │      │
│  │ 👤 Followed Artists (156)       ▓▓▓▓▓▓▓▓▓▓ 100%  │      │
│  └──────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  3. SELECT DESTINATION                      │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │ Spotify │ │  Apple  │ │ YouTube │ │  Tidal  │          │
│  │  Music  │ │  Music  │ │  Music  │ │         │          │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    4. PREVIEW MATCHES                       │
│  ┌──────────────────────────────────────────────────┐      │
│  │ ✅ 1,187 exact matches                            │      │
│  │ 🟡 43 similar matches (review recommended)        │      │
│  │ 🔴 17 not found (unavailable on destination)      │      │
│  │                                                   │      │
│  │ [Review Matches]  [Export Missing]  [Continue]    │      │
│  └──────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    5. MIGRATE                               │
│  ┌──────────────────────────────────────────────────┐      │
│  │ Migrating to Apple Music...                       │      │
│  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ 72%                         │      │
│  │                                                   │      │
│  │ Currently: "Chill Vibes" playlist (23/47)         │      │
│  │ ETA: 3 minutes remaining                          │      │
│  └──────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

---

## 💰 Business Model

### Pricing Strategy: One-Time Fee

| Tier | Price | Features |
|------|-------|----------|
| **Basic** | $4.99 | Up to 1,000 songs, 10 playlists |
| **Standard** | $9.99 | Up to 5,000 songs, unlimited playlists |
| **Unlimited** | $14.99 | Unlimited songs, playlists, backup export |

### Why One-Time?
- **Trust signal** — Not trying to lock users into another subscription
- **Viral potential** — Users recommend because it's not predatory
- **Migration is episodic** — People don't switch services monthly

### Revenue Projections
- TAM: ~500M streaming subscribers globally
- 2% switch services annually = 10M potential users
- 0.1% conversion at $10 avg = $1M ARR potential
- Viral coefficient matters more than TAM here

---

## 🛠️ Technical Architecture

### API Integrations
- **Spotify Web API** — OAuth 2.0, rate limited 
- **Apple Music API** — MusicKit JS, requires developer token
- **YouTube Music** — Unofficial API (ytmusicapi Python library)
- **Tidal** — OAuth 2.0, well-documented
- **Deezer** — OAuth 2.0, public API

### Matching Algorithm
```
function matchTrack(sourceTrack, destinationCatalog):
    // Tier 1: ISRC exact match
    if sourceTrack.isrc:
        match = destinationCatalog.findByISRC(sourceTrack.isrc)
        if match: return {match, confidence: 100}
    
    // Tier 2: Metadata fuzzy match
    candidates = destinationCatalog.search(
        title: sourceTrack.title,
        artist: sourceTrack.artist
    )
    for candidate in candidates:
        score = fuzzyScore(sourceTrack, candidate)
        if score > 0.9: return {candidate, confidence: score * 100}
    
    // Tier 3: Duration + metadata (for covers/remasters)
    for candidate in candidates:
        if abs(sourceTrack.duration - candidate.duration) < 3000:
            return {candidate, confidence: 75, flag: "duration_match"}
    
    return {null, confidence: 0}
```

### Stack
- **Frontend:** React/Next.js, TailwindCSS
- **Backend:** Node.js/Express or Cloudflare Workers
- **Database:** None needed (stateless, all OAuth flows)
- **Hosting:** Vercel/Cloudflare (pay-per-use)

---

## 🎨 Design Direction

### Visual Style
- **Dark mode default** (music apps are dark)
- **Gradient accents** matching streaming service colors
- **Large, clear typography** — no confusion about what's being migrated
- **Progress-centric** — always show status and ETA

### Color Tokens
```css
--color-bg-primary: #0a0a0a;
--color-bg-secondary: #1a1a1a;
--color-bg-tertiary: #2a2a2a;
--color-text-primary: #ffffff;
--color-text-secondary: #a0a0a0;
--color-accent-spotify: #1db954;
--color-accent-apple: #fc3c44;
--color-accent-youtube: #ff0000;
--color-success: #22c55e;
--color-warning: #eab308;
--color-error: #ef4444;
```

---

## 🚀 MVP Scope

### Phase 1 (MVP)
- [ ] Spotify ↔ Apple Music migration
- [ ] Playlists + Liked Songs only
- [ ] Basic metadata matching
- [ ] Preview screen
- [ ] Stripe payment

### Phase 2
- [ ] YouTube Music support
- [ ] Saved albums + followed artists
- [ ] ISRC matching
- [ ] Export/backup feature

### Phase 3
- [ ] Tidal, Deezer, Amazon Music
- [ ] Acoustic fingerprint matching
- [ ] Browser extension for one-click migration

---

## 📊 Competition Analysis

| Competitor | Pricing | Pros | Cons |
|------------|---------|------|------|
| **SongShift** (iOS) | $4.99/mo | Good UI, reliable | iOS only, subscription |
| **TuneMyMusic** | $4.50/mo | Web-based, many services | Subscription, slow |
| **Soundiiz** | $4.50/mo | Most services, smart matching | Subscription, complex |
| **FreeYourMusic** | $9.99 one-time | One-time fee! | Desktop only, outdated UI |

### Gap in Market
No modern **web-based**, **one-time fee** solution with **smart matching** and **preview before commit**.

---

## 🔗 Prototype

See `prototype/` folder for interactive demo.

---

*Researched and documented by Duncan ⚔️*
