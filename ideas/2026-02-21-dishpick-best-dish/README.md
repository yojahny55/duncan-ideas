# DishPick 🍽️

> Know what to order before you sit down

**Date:** 2026-02-21  
**Source:** Reddit (r/SomebodyMakeThis, r/AppIdeas)  
**Status:** Concept + Prototype

---

## Problem Statement

You're at a restaurant. The menu has 50 items. What do you order?

- **Yelp/Google** rates the *restaurant*, not individual dishes
- **Menu reviews** are scattered across platforms and hard to find
- **Asking the server** often gets you the most expensive item
- **Random picking** leads to regret when you see what your friend ordered

Everyone has experienced "order envy" — wishing you'd ordered what someone else got.

**Reddit quote that inspired this:**
> "I want to know the best dish to order at a restaurant when I get there"

---

## Target Users

| Segment | Pain Point |
|---------|-----------|
| **Foodies** | Want the "local's choice" not tourist traps |
| **Travelers** | Unfamiliar with local cuisine, need guidance |
| **Indecisive diners** | Overwhelmed by large menus |
| **First-time visitors** | Don't know the restaurant's specialty |
| **Health-conscious** | Want highly-rated healthy options |

---

## Solution: DishPick

A mobile-first app that provides **crowdsourced dish-level ratings** at any restaurant.

### Core Value Proposition

**Restaurant reviews tell you WHERE to eat. DishPick tells you WHAT to order.**

---

## Key Features

### 1. Dish Discovery
- Search by restaurant or scan menu with camera
- See top 3 recommended dishes with scores
- View photos of actual dishes from diners
- Filter by dietary restrictions (vegetarian, GF, etc.)

### 2. Rate What You Ate
- Quick 1-5 rating after your meal
- Photo upload with one tap
- "Would order again" badge
- Compare to your expectations

### 3. Personal Taste Profile
- Learn your preferences over time
- "Because you liked X, try Y"
- Avoid dishes similar to ones you rated low
- Dietary preferences saved

### 4. Social Features
- See what friends loved here
- Share dish recommendations
- "Trust network" — weight ratings from people with similar taste
- Create "Best Of" lists

### 5. Restaurant Menu Intelligence
- Full menu with dish scores
- Price-to-quality ratio indicator
- "Hidden gem" badges for under-ordered favorites
- Trending dishes (popular this week)

---

## User Flow

```
┌─────────────────────────────────────────────────────────┐
│                    ARRIVING AT RESTAURANT               │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
            ┌───────────────────────────────┐
            │   Search or Scan Menu/QR     │
            └───────────────────────────────┘
                            │
                            ▼
            ┌───────────────────────────────┐
            │   See Top Dishes + Scores    │
            │   📸 Photos from real diners │
            └───────────────────────────────┘
                            │
                            ▼
            ┌───────────────────────────────┐
            │   Browse Full Menu w/ Ratings │
            │   Filter by diet, price, etc  │
            └───────────────────────────────┘
                            │
                            ▼
            ┌───────────────────────────────┐
            │        ORDER WITH CONFIDENCE  │
            └───────────────────────────────┘
                            │
                            ▼
            ┌───────────────────────────────┐
            │   After meal: Quick Rating   │
            │   📸 + ⭐ (takes 10 seconds) │
            └───────────────────────────────┘
```

---

## Competitive Analysis

| Feature | DishPick | Yelp | Google Maps | TripAdvisor |
|---------|----------|------|-------------|-------------|
| Restaurant ratings | ✅ | ✅ | ✅ | ✅ |
| **Individual dish ratings** | ✅ | ❌ | ❌ | ❌ |
| Dish photos organized | ✅ | Scattered | Scattered | ❌ |
| Quick post-meal rating | ✅ | ❌ (lengthy) | ❌ | ❌ |
| Taste profile matching | ✅ | ❌ | ❌ | ❌ |
| "Best dish here" answer | ✅ | ❌ | ❌ | ❌ |

---

## Business Model

### Revenue Streams

1. **Freemium**
   - Free: See top 3 dishes, limited ratings
   - Pro ($4.99/mo): Full menu, taste matching, friends' picks

2. **Restaurant Analytics** (B2B)
   - Dashboard: Most loved/hated dishes, improvement suggestions
   - Compare to competitors
   - $99/mo per location

3. **Reservations Integration**
   - Partner with OpenTable/Resy
   - Affiliate commission on bookings

4. **Featured Dishes**
   - Restaurants can highlight dishes (clearly marked as promoted)
   - Pay per impression

---

## Technical Architecture

### Frontend
- React Native (iOS + Android)
- Camera integration for menu scanning (Google Vision API)
- Offline mode for menus you've searched before

### Backend
- Node.js + PostgreSQL
- Menu data aggregation (Yelp API, Google Places API, manual entry)
- ML for taste profile matching

### Data Sources
- User submissions (photos, ratings)
- Partner restaurants (official menus)
- Menu scraping (public data)

---

## MVP Scope

**Phase 1: Validate core value**
- Focus on one city (e.g., Tampa)
- Manual menu data entry for top 100 restaurants
- Simple rating system (no ML)
- Basic search + browse

**Success metric:** 100 active users rating dishes weekly

---

## Marketing Strategy

1. **Launch at local food festivals** — Free tasting + rate with app
2. **Partner with food bloggers** — They already take dish photos
3. **Restaurant partnerships** — QR codes on menus linking to DishPick
4. **"What should I order?" TikTok content** — Show the app in action

---

## Why Now?

1. **Review fatigue** — People want quick answers, not paragraphs
2. **Photo-first generation** — Everyone already photographs their food
3. **Personalization expectation** — Spotify knows your music, why doesn't anyone know your food taste?
4. **Post-pandemic dining boom** — People exploring new restaurants more than ever

---

## Prototype

See `/prototype/index.html` for an interactive demo of the dish discovery experience.

---

## Risk Assessment

| Risk | Mitigation |
|------|------------|
| Cold start (no data) | Focus on one city, seed with food blogger data |
| Restaurant pushback | Position as free marketing/feedback tool |
| Menu accuracy | Partner with POS providers, OCR verification |
| Yelp competition | They're too broad; we're laser-focused on dishes |

---

*"Every meal is a choice. Make it a good one."*
