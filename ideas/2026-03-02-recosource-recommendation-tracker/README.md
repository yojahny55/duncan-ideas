# RecoSource — Remember Who Told You About It

**Date:** 2026-03-02  
**Source:** Web Research  
**Status:** Prototype

## Problem Statement

We receive recommendations constantly — from friends, family, coworkers, podcasts, YouTube videos, articles, and social media. A friend mentions a great restaurant. A podcast host recommends a book. A tweet leads you to an app.

But by the time you actually try the recommendation, you've forgotten who told you about it. This creates several problems:

1. **Lost gratitude opportunities** — Can't thank the person who gave you a life-changing recommendation
2. **No taste calibration** — Don't know whose recommendations consistently work for you vs. whose don't
3. **Broken recommendation chains** — When you pass something along, you can't credit the original source
4. **Repeated forgetting** — Someone recommends the same thing twice because you forgot they already did
5. **FOMO guilt** — Stack of recommendations you feel bad about not trying, no idea which are actually worth it

### The Gap in Existing Solutions

- **DidISend** tracks what YOU shared, not what you received
- **HeartPing** is a relationship CRM, not recommendation tracking
- **SnapContext** captures why you saved something, not who told you
- **Watchlists/wishlists** store WHAT you want, but not WHERE it came from
- **Note apps** are too general — no structure for recommendation patterns

## Target Users

- **Active social learners** — People who get recommendations from many sources
- **Podcast listeners** — Constantly hearing about books, products, services
- **Social media users** — Saving posts with recommendations they want to try later
- **Curious networkers** — People who ask "what are you reading/watching/using?"
- **Grateful gift-givers** — Want to thank people for good recommendations

## Proposed Solution: RecoSource

A lightweight recommendation memory app that captures:
- **What:** The recommendation (movie, book, product, restaurant, etc.)
- **From:** Who or what source (person, podcast, article, etc.)
- **When:** Date received
- **Context:** Where/how you heard it (dinner conversation, episode #, tweet)
- **Status:** Queued → Tried → Rated

### Key Features

1. **Quick Capture**
   - Share sheet integration (save from any app)
   - "Who told you?" prompt when saving
   - Voice input for rapid logging
   - Auto-categorization by type

2. **Source Intelligence**
   - Track recommendation success rate per source
   - "Sarah's picks: 8/10 hits"
   - Surface your best recommendation sources
   - Identify sources to trust vs. ignore

3. **Gratitude Loop**
   - Prompt to thank someone when you love their pick
   - "You loved 'Severance' — Sarah recommended it 3 months ago. Send thanks?"
   - Generate shareable "recommendation credits"

4. **Smart Queues**
   - Filter by category, source, age
   - "Show me book recs from trusted sources"
   - Aging alerts for stale recommendations
   - Batch review: "Still want to try this?"

5. **Recommendation Network**
   - See the chain: "Alex → You → Mom"
   - Track your own recommendation success rate
   - "Your picks have 75% approval with friends"

## Technical Architecture

### Frontend
- Progressive Web App (PWA) for cross-platform
- Share sheet integration (iOS/Android)
- Offline-first with sync
- Quick-add widget

### Backend
- Supabase for auth + data
- Edge functions for link metadata extraction
- Optional: AI categorization and duplicate detection

### Data Model
```
Recommendation {
  id: uuid
  user_id: uuid
  title: string
  category: enum (book, movie, tv, podcast, restaurant, product, place, other)
  url: string?
  image_url: string?
  source_type: enum (person, podcast, article, social, other)
  source_name: string
  source_link: string?
  context: text?
  received_at: timestamp
  status: enum (queued, trying, tried)
  rating: int? (1-5)
  notes: text?
  thanked: boolean
  shared_to: string[]
}
```

## Revenue Model

1. **Freemium**
   - Free: 50 recommendations, basic tracking
   - Pro ($3.99/mo): Unlimited, source analytics, integrations

2. **Potential Integrations**
   - Goodreads, Letterboxd, Spotify import/export
   - Calendar integration for restaurant reservations
   - Reminders integration

## Competition Analysis

| Feature | RecoSource | Notion | Notes App | Watchlist Apps |
|---------|-----------|--------|-----------|----------------|
| Source tracking | ✅ Core | ❌ Manual | ❌ Manual | ❌ No |
| Quick capture | ✅ Optimized | ❌ Slow | ⚠️ Basic | ✅ Yes |
| Source analytics | ✅ Yes | ❌ No | ❌ No | ❌ No |
| Gratitude prompts | ✅ Yes | ❌ No | ❌ No | ❌ No |
| Cross-category | ✅ Yes | ✅ Yes | ✅ Yes | ❌ Single |

## Why Now?

1. **Recommendation overload** — More content than ever, more sources than ever
2. **Social credit economy** — People want to give/receive credit for discoveries
3. **AI assistants** — Can help with auto-categorization and smart prompts
4. **Gratitude culture** — Growing appreciation for acknowledgment and thanks
5. **Trust networks** — Algorithms failing, personal recommendations matter more

## Success Metrics

- Daily active users
- Recommendations logged per user
- "Tried" conversion rate
- "Thanks sent" rate
- Source analytics engagement
- Pro conversion rate

## Prototype

See `prototype/index.html` for a working demo.

### Screenshots

The prototype includes:
- Quick capture flow with source selection
- Recommendation queue with filters
- Source leaderboard showing hit rates
- Gratitude prompt after rating

---

*Because "who told me about this?" shouldn't be a mystery.*
