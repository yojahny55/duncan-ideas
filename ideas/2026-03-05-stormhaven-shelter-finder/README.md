# StormHaven 🌪️

> Find public emergency shelters before the storm hits

**Source:** X/Twitter — [@lorigracewx](https://x.com/lorigracewx/status/2028658094339768804)  
**Date:** March 5, 2026

---

## The Problem

> "Why isn't there an app that shows where all public tornado shelters are in every city?"

When severe weather strikes, people have minutes—sometimes seconds—to find safety. Yet:

- **No unified database** of public tornado/storm shelters exists
- **FEMA** and local emergency management have scattered, often outdated lists
- **Google Maps** doesn't categorize "tornado shelter" as a place type
- **Weather apps** tell you a tornado is coming but not where to go
- **Panic decisions** — people hide in bathrooms or overpasses (dangerous) instead of actual shelters

**The stakes are real:**
- 1,376 tornadoes in the US in 2023
- ~70 deaths annually from tornadoes
- Tornado Alley residents (50M+ people) face this regularly
- Mobile home residents are 15x more likely to die in tornadoes

---

## Target Users

### Primary: Tornado Alley Residents
- Texas, Oklahoma, Kansas, Nebraska, Missouri, Arkansas, Iowa
- 50M+ people in high-risk zones
- Recurring seasonal need (March–June peak)

### Secondary: Travelers & Newcomers
- People visiting or moving to tornado-prone areas
- Don't know local shelter locations
- Especially vulnerable during storm season

### Tertiary: Emergency Managers
- Local government EOCs wanting to update shelter info
- Schools, churches, businesses registering as shelters

---

## The Solution: StormHaven

A mobile-first app that answers one critical question: **"Where's the nearest safe shelter right now?"**

### Core Features

#### 1. **Shelter Map**
- All public tornado/storm shelters in your area
- Real-time distance and walking/driving time
- Filter by: shelter type, capacity, accessibility, hours

#### 2. **One-Tap Navigation**
- Instant directions to nearest shelter
- Works offline (critical during storms when cell towers fail)
- Calculates ETA vs. storm arrival time

#### 3. **Weather Integration**
- NOAA/NWS severe weather alerts
- Tornado watch → "Find shelters nearby"
- Tornado warning → "GO NOW — Shelter 0.3 mi away"

#### 4. **Shelter Types**
- **Official Public Shelters** — Community centers, government buildings
- **Designated Safe Rooms** — FEMA-rated structures
- **Underground Shelters** — Basements, cellars, subway stations
- **Verified Business Shelters** — Stores, malls that open during storms
- **School Shelters** — Open to public during emergencies

#### 5. **Real-Time Status**
- Crowdsourced shelter status (open/closed/full)
- Capacity estimates
- Last verified timestamp
- Community check-ins during active storms

#### 6. **Offline Mode**
- Download shelters for your area
- Works without internet
- GPS-only navigation to cached locations

---

## Data Sources

### Official Sources
- FEMA shelter databases
- State emergency management agencies
- County/city emergency operations centers
- School district emergency plans
- NOAA Storm Prediction Center

### Crowdsourced
- Community-submitted shelter locations
- Business self-registration
- Verification through photos/check-ins
- Gamified verification (like TapSpot for water)

### Partnerships
- Red Cross shelter network
- Underground shelter manufacturers (Survive-A-Storm, Atlas)
- Big box retailers (Walmart, Home Depot often open as shelters)

---

## Key Screens

### 1. Map View (Default)
```
┌──────────────────────────────────────┐
│  ⚠️ TORNADO WATCH until 9 PM         │
│  [Find Shelter Now]                  │
├──────────────────────────────────────┤
│                                      │
│    🏢 Community Center              │
│         0.3 mi • 2 min              │
│                                      │
│         📍 You                       │
│                                      │
│    ⛪ First Baptist                 │
│         0.8 mi • 5 min              │
│                                      │
│    🏫 Lincoln Elementary            │
│         1.2 mi • 8 min              │
│                                      │
├──────────────────────────────────────┤
│ [List] [Map] [Alerts] [Settings]    │
└──────────────────────────────────────┘
```

### 2. Emergency Mode (Tornado Warning)
```
┌──────────────────────────────────────┐
│  🔴 TORNADO WARNING                  │
│  Seek shelter IMMEDIATELY            │
├──────────────────────────────────────┤
│                                      │
│      ⬆️ HEAD NORTH                  │
│                                      │
│    🏢 Moore Community Center        │
│       234 Main Street               │
│                                      │
│       0.3 miles • 2 min walk        │
│       Status: OPEN ✅               │
│                                      │
│   [🚗 Drive] [🚶 Walk] [📞 Call]    │
│                                      │
├──────────────────────────────────────┤
│  Storm ETA: 8 minutes               │
│  ⚡ You have time. Move now.        │
└──────────────────────────────────────┘
```

### 3. Shelter Detail
```
┌──────────────────────────────────────┐
│  ← Back                              │
├──────────────────────────────────────┤
│  🏢 Moore Community Center          │
│  ⭐ Official Public Shelter          │
│                                      │
│  📍 234 Main Street, Moore, OK      │
│  📞 (405) 555-0123                  │
│                                      │
│  ────────────────────────────────── │
│  Type: Underground Safe Room        │
│  Capacity: 500 people               │
│  Accessibility: ♿ Wheelchair OK     │
│  Hours: 24/7 during warnings        │
│  ────────────────────────────────── │
│                                      │
│  Last verified: 2 days ago          │
│  23 check-ins this season           │
│                                      │
│  [Navigate] [Check In] [Report]     │
└──────────────────────────────────────┘
```

---

## Competitive Landscape

| App | Focus | Shelters? |
|-----|-------|-----------|
| Weather Channel | Forecasts | ❌ |
| RadarScope | Radar imagery | ❌ |
| FEMA App | Disaster prep | Limited, outdated |
| Google Maps | Navigation | No shelter category |
| Red Cross Emergency | General preparedness | Only Red Cross shelters |

**StormHaven's Edge:**
- **Single purpose** — find shelter fast
- **Comprehensive database** — all shelter types
- **Real-time status** — crowdsourced updates
- **Offline-first** — works when you need it most
- **Speed** — one tap to navigation

---

## Revenue Model

### Freemium
- **Free:** Basic shelter map, weather alerts, navigation
- **Premium ($2.99/mo or $19.99/yr):**
  - Offline maps for unlimited areas
  - Family location sharing during storms
  - Advanced storm tracking
  - Priority shelter notifications

### B2B
- **Emergency Management Agencies:** Dashboard for managing shelter data
- **Businesses:** Verified shelter badge + promotion
- **Insurance Companies:** Partner for policyholder safety

### Data Licensing
- Aggregated shelter data for emergency planners
- Storm response analytics

---

## Technical Architecture

### Mobile App (React Native)
- iOS + Android from single codebase
- Offline-first with SQLite + MapBox offline tiles
- Push notifications via Firebase
- Background location for storm proximity alerts

### Backend
- Node.js/Express API
- PostgreSQL + PostGIS for geospatial queries
- Redis for real-time shelter status
- NOAA Weather API integration
- WebSocket for live storm tracking

### Data Pipeline
- Scrapers for official shelter databases
- Community submission + moderation queue
- AI-assisted verification (satellite imagery)
- Decay scoring (flag stale data)

---

## MVP Scope (4 weeks)

### Week 1-2: Core
- [ ] Shelter database seeding (Oklahoma as pilot)
- [ ] Basic map view with shelter pins
- [ ] Shelter detail pages
- [ ] NOAA weather alert integration

### Week 3: Navigation
- [ ] One-tap navigation to shelter
- [ ] Offline map caching
- [ ] Push notifications for warnings

### Week 4: Community
- [ ] User check-ins
- [ ] Shelter status reporting
- [ ] Basic moderation flow

---

## Success Metrics

- **Downloads in Tornado Alley states** during storm season
- **Shelter database coverage** — % of cities with >5 verified shelters
- **Time to shelter** — average navigation time during warnings
- **Lives potentially saved** — tracked via check-ins during events
- **Community engagement** — shelter verifications per user

---

## Why Now?

1. **Climate change** — Tornado Alley expanding, more intense storms
2. **Mobile-first generation** — Everyone has a smartphone
3. **Crowdsourcing proven** — Waze, Citizen, TapSpot model works
4. **Offline maps mature** — MapBox/Google offline tiles reliable now
5. **Recent disasters** — 2023-2024 tornado outbreaks highlighted gaps

---

## Prototype

[View Interactive Demo](prototype/index.html)

---

*Research and documentation by Duncan ⚔️*
