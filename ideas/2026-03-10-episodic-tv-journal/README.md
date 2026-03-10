# Episodic — Letterboxd for TV Shows 📺

*Episode-by-episode tracking and reviews for television*

## The Problem

**TV shows deserve episode-level treatment.** Letterboxd revolutionized movie tracking with its elegant, social logging experience. But television — which people spend 3x more time watching — has no equivalent.

Current frustrations discovered on X/Twitter:

> "i wish there was an app like letterboxd for tv shows. i wanna give each episode of smallville and x files silly little reviews as I watch them" — @akrunyan1

**Why existing solutions fail:**
- **Trakt.tv** — Powerful but overwhelming; designed for data nerds, not casual viewers
- **TV Time** — Episode tracking exists but reviews are an afterthought, UX is cluttered
- **Letterboxd** — Perfect experience, but movies only
- **IMDb** — Can rate episodes but zero social features, outdated UX

## The Opportunity

- **58%** of US adults have a streaming subscription
- **Average American** watches 3+ hours of TV daily
- **Binge culture** creates demand for episode-by-episode reactions
- **#1 request** in Letterboxd community forums for years: TV show support (they've refused)

## Target Users

1. **TV Enthusiasts** — Want to document their viewing journey, remember reactions
2. **Rewatch Completists** — Tracking multiple rewatches of beloved shows (The Office, Breaking Bad)
3. **Social Viewers** — Want to discuss episodes without spoilers, see friends' opinions
4. **Content Creators** — Need to track shows they've covered/reviewed

## Proposed Solution: Episodic

A beautifully simple episode journal that captures the Letterboxd magic for television.

### Core Philosophy
- **Episode-first, not show-first** — Each episode is a unique viewing experience
- **Minimal friction** — Quick-log with one tap, add reviews when inspired
- **Spoiler-safe social** — See friends' activity only on episodes you've watched
- **Personal diary** — Your viewing history is yours, not algorithmic recommendations

## Key Features

### 1. Episode Logging
- **Quick-log**: Tap to mark watched (like Letterboxd's "watch" button)
- **Date tracking**: When did you watch it? (important for rewatches)
- **Rewatch badges**: See how many times you've experienced each episode
- **Batch logging**: Mark entire seasons/shows as watched for imports

### 2. Episode Reviews
- **5-star rating** per episode
- **Short-form reviews** (think Letterboxd's quick thoughts)
- **Reaction tags**: "Made me cry", "Filler episode", "Peak TV", "Boring", "Plot twist"
- **Favorite quotes**: Save memorable lines

### 3. Show Tracking
- **Watchlist**: Shows you want to start
- **Currently Watching**: Active shows with next episode indicator
- **Completed**: Finished shows with overall rating
- **Dropped**: Shows you quit (track when/why)

### 4. Social Features
- **Follow friends**: See their episode activity
- **Spoiler protection**: Only see reviews for episodes you've watched
- **Episode discussions**: Threaded comments per episode
- **Lists**: "Best Bottle Episodes", "Most Shocking Deaths", etc.

### 5. Stats & Insights
- **Episodes watched** this week/month/year
- **Time spent** viewing (calculated from runtime)
- **Most-watched genres**
- **Rating distribution** (are you a harsh critic?)
- **Streak tracker**: Days in a row watching TV

## Differentiation

| Feature | Episodic | Trakt.tv | TV Time | Letterboxd |
|---------|----------|----------|---------|------------|
| Episode reviews | ✅ First-class | ❌ Minimal | ⚠️ Basic | ❌ Movies only |
| Beautiful UX | ✅ | ❌ Cluttered | ⚠️ Dated | ✅ |
| Spoiler-safe feed | ✅ | ❌ | ❌ | N/A |
| Quick-log friction | Low | High | Medium | N/A |
| Social features | ✅ | ⚠️ Basic | ⚠️ Basic | ✅ |
| Rewatch tracking | ✅ | ✅ | ⚠️ | ✅ |

## Revenue Model

### Freemium
- **Free**: Log episodes, rate, basic stats, follow 50 friends
- **Pro ($4.99/mo)**: Unlimited follows, advanced stats, export data, custom lists, no ads

### Additional Revenue
- **Affiliate links**: "Watch on" buttons linking to streaming services
- **Premium badges**: Custom profile themes (à la Letterboxd Pro)

## Technical Approach

### Data Sources
- **TMDB API** (free, excellent TV metadata)
- **TVmaze API** (backup, episode air dates)
- **User contributions** for missing data

### Stack Recommendation
- **Frontend**: React Native (iOS + Android from single codebase)
- **Backend**: Node.js + PostgreSQL
- **Real-time**: Socket.io for live episode discussions
- **Auth**: Magic link + social logins

## Competitive Landscape

| Competitor | Users | Why They'll Switch |
|------------|-------|-------------------|
| Trakt.tv | 1M+ | Overwhelming UX, no mobile app |
| TV Time | 12M+ | Cluttered, social features weak |
| Simkl | 500K | Power-user focused, ugly |
| Reelgood | 2M+ | Discovery-focused, not logging |

## Success Metrics

- **30-day retention**: Target 40%+ (Letterboxd benchmark)
- **Episodes logged per user per week**: Target 10+
- **Reviews per 100 episodes**: Target 15+ (higher engagement than competitors)
- **Conversion to Pro**: Target 5% of MAU

## MVP Scope (4-6 weeks)

**Week 1-2:**
- Episode logging (mark watched, date, rating)
- Show search + watchlist
- Basic profile

**Week 3-4:**
- Episode reviews (short form)
- Following + feed (spoiler-protected)
- Currently watching section

**Week 5-6:**
- Basic stats
- Polish, bug fixes
- App Store submission

## Why Now?

1. **Peak TV fatigue** — People need help remembering what they've watched
2. **Letterboxd's rise** — Proved the model works (10M+ users, profitable)
3. **Social streaming** — Watch parties normalized during COVID, demand persists
4. **AI era** — Can add AI-powered recommendations later, but core experience is human

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Letterboxd adds TV | They've explicitly refused for 10+ years; focus on episode-level experience they'd never match |
| TV Time improves | They're bloated and slow; our advantage is focus |
| User acquisition cost | Leverage Twitter/X TV discourse; partner with TV podcasts |
| Content licensing | Use free APIs (TMDB); user-contributed data for gaps |

## Source

**Platform**: X/Twitter  
**Original Tweet**: https://x.com/akrunyan1/status/2031217660877263233  
**Date Found**: March 10, 2026

---

*Built with ⚔️ by Duncan*
