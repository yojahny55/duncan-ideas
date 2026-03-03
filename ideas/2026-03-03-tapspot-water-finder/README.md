# TapSpot - Find Drinking Water Anywhere 💧

**Date:** March 3, 2026  
**Source:** X/Twitter  
**Category:** Location/Utility/Sustainability

## The Spark

> "i wish there was an app that would tell you where the nearest water fountain is. i am so thirsty rn"
> — [@birthdaybashed](https://x.com/birthdaybashed/status/2028185319074324559)

## Problem Statement

Finding clean drinking water when you're out and about is surprisingly hard:

- **No centralized map** of public water fountains, refill stations, or tap water sources
- **Plastic bottle purchases** are often the only "solution" — bad for wallet and environment
- **Travelers, joggers, cyclists, hikers** waste time searching or end up dehydrated
- **Existing maps are incomplete** — Google Maps has some, but coverage is spotty and often outdated
- **Sustainability-conscious people** want to refill, not rebuy

## Target Users

| Segment | Pain Point |
|---------|------------|
| **Urban pedestrians** | Thirsty in the city, don't want to buy another bottle |
| **Joggers & cyclists** | Need to refill on routes, plan hydration stops |
| **Travelers & tourists** | Unfamiliar cities, don't know where to find water |
| **Parents with kids** | Constantly need water access, playgrounds often have fountains |
| **Sustainability advocates** | Carrying reusable bottles, need refill stations |
| **Hikers & outdoor enthusiasts** | Critical water planning for trails |

## Proposed Solution: TapSpot

A crowdsourced, real-time drinking water finder that shows you the nearest places to get free, clean water.

### Core Features

1. **Water Source Map**
   - Public fountains
   - Bottle refill stations
   - Businesses offering free water
   - Park drinking fountains
   - Airport/transit station fountains

2. **Source Details**
   - Type (fountain, bottle filler, tap, cooler)
   - Accessibility (wheelchair, height)
   - Water quality notes
   - Photos
   - Operating hours (some are seasonal/indoor)
   - Last verified date

3. **Smart Filters**
   - "Pet-friendly" (ground-level bowl)
   - "Bottle filler" (easier to fill)
   - "Indoor" (climate controlled)
   - "24/7 access"
   - "Filtered/chilled"

4. **Crowdsourced Verification**
   - "Still here" confirmations
   - "Broken/out of service" reports
   - Quality ratings
   - Photo updates

5. **Route Planning**
   - "Show water along my route"
   - Jogging/cycling route overlay
   - "Add water stop" to navigation

6. **Offline Maps**
   - Download areas for hiking/travel
   - Works without cell service

### Gamification & Community

- **Contributor badges** (Fountain Finder, Hydration Hero)
- **Local leaderboards** (who's mapped the most)
- **"Adoption"** — claim a fountain to keep updated
- **Streaks** for verifying water sources

## Technical Architecture

```
┌─────────────────────────────────────────────────────┐
│                    TapSpot App                      │
├─────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │   Map View  │  │  List View  │  │   Add New   │  │
│  │  (Mapbox)   │  │  (Sorted)   │  │   Source    │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  │
├─────────────────────────────────────────────────────┤
│                    API Layer                        │
├─────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │  Location   │  │   Search    │  │  Contrib.   │  │
│  │  Service    │  │   Engine    │  │   System    │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  │
├─────────────────────────────────────────────────────┤
│  PostgreSQL + PostGIS  │  Redis Cache  │  S3 Photos │
└─────────────────────────────────────────────────────┘
```

### Data Sources (Bootstrap)

- **OpenStreetMap** — has drinking_water and amenity=water_point tags
- **Municipal open data** — many cities publish fountain locations
- **WeTap** data (defunct app, data may be accessible)
- **User contributions** — primary growth driver

## Competitive Analysis

| App/Service | Status | Weaknesses |
|-------------|--------|------------|
| **WeTap** | Defunct | App no longer maintained |
| **Tap** (UK) | UK-only | Limited to UK businesses |
| **Refill** (UK) | UK-only | Business partnership model |
| **Google Maps** | Generic | Incomplete, no fountain-specific features |
| **OpenStreetMap** | Data source | No user-friendly app interface |

### TapSpot Differentiation

- **Global scope** with local depth
- **Crowdsourced verification** keeps data fresh
- **Route integration** for active users
- **Offline support** for hikers/travelers
- **Community ownership** of data

## Business Model

### Phase 1: Free & Crowdsourced
- Build user base and data
- Community-driven mapping
- No ads, no subscriptions

### Phase 2: Premium Features
- **TapSpot Pro ($2.99/mo)**
  - Offline maps for any region
  - Route planning with water stops
  - Water quality alerts
  - Ad-free experience

### Phase 3: Partnerships
- **Municipal contracts** — cities pay to have accurate fountain data
- **Bottle company partnerships** — Hydro Flask, Nalgene, CamelBak
- **Event integration** — music festivals, marathons
- **B2B** — enterprise campus water mapping

## Development Roadmap

### MVP (4 weeks)
- [ ] Mobile-first web app
- [ ] Basic map with water sources
- [ ] Add new source form
- [ ] "Still here" verification
- [ ] Import OpenStreetMap data

### V1.0 (8 weeks)
- [ ] Native iOS/Android apps
- [ ] User accounts & profiles
- [ ] Photo uploads
- [ ] Detailed source attributes
- [ ] Search & filters

### V2.0 (12 weeks)
- [ ] Offline maps
- [ ] Route planning integration
- [ ] Gamification system
- [ ] Municipal data partnerships
- [ ] API for third-party apps

## Success Metrics

| Metric | 3-month Target | 12-month Target |
|--------|----------------|-----------------|
| Water sources mapped | 50,000 | 500,000 |
| Monthly active users | 10,000 | 100,000 |
| Daily verifications | 500 | 5,000 |
| Cities with >100 sources | 20 | 200 |
| App store rating | 4.5+ | 4.7+ |

## Marketing Strategy

1. **Runner/cyclist communities** — Strava clubs, running groups
2. **Sustainability influencers** — eco-conscious content creators
3. **Travel bloggers** — "Stay hydrated" travel tips
4. **Local mapping parties** — gamified community events
5. **Earth Day campaigns** — plastic bottle reduction messaging

## Why Now?

- **Sustainability movement** at peak — plastic bottle backlash
- **Refillable bottle market** growing 8% annually
- **Post-pandemic outdoor activity** surge
- **OpenStreetMap** maturation provides bootstrap data
- **PWA technology** enables cross-platform with small team

## Similar Success Stories

- **GasBuddy** — crowdsourced fuel prices (acquired for $1.7B)
- **Flush** — toilet finder (acquired by Waze)
- **PlugShare** — EV charging (acquired for $200M)

TapSpot follows the same playbook: **essential utility + crowdsourced data + mobile-first**.

---

*Stay hydrated, skip the plastic.* 💧
