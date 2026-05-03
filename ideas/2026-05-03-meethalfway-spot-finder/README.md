# MeetHalfway — Find the Perfect Meeting Spot Between People

## Problem
"Meet us halfway" is said millions of times daily — long-distance couples, friend groups, co-parents after divorce, business meetings, travel buddies. But nobody actually knows where "halfway" is. Google Maps shows you routes, not meeting points. You end up picking a chain restaurant off a highway exit and hoping for the best.

**The halfway problem is everywhere:**
- 3.9M long-distance couples in the US
- 13.4M co-parents sharing custody
- Friend groups spread across a metro area
- Remote teams meeting IRL for the first time
- Travel planners finding rendezvous points

Current solutions: drop pins manually in Google Maps (clunky), guess at a city name (inaccurate), or default to chain restaurants near highway exits (soul-crushing).

## Solution
**MeetHalfway** — enter 2+ addresses, get the true midpoint weighted by travel time (not just geographic distance), then discover great spots nearby.

### Not just geographic midpoint
Driving 30 minutes west ≠ 30 minutes east if there's a river, highway, or transit gap. MeetHalfway uses real-time travel time APIs to find the *fair* meeting point — where everyone spends roughly equal time getting there.

### Smart spot suggestions
Once it finds the midpoint, it surfaces:
- Coffee shops, restaurants, bars, parks, co-working spaces
- Filtered by vibe (quiet for work, lively for friends, kid-friendly for co-parents)
- Open now, rated well, not weird
- Price range awareness

### Group mode
Enter 3-8 people's locations. Finds the optimal meeting point that minimizes total travel time for the group — not just the geographic center.

### Key Features
- **2-person quick find** — two addresses, instant midpoint with 5 spot suggestions
- **Group mode** — 3-8 locations, optimal point minimizing total travel
- **Travel mode weighting** — driving, transit, walking, cycling (each person can use a different mode)
- **Vibe filters** — coffee/food/drinks/parks/coworking/kid-friendly/dog-friendly
- **Save & share** — save meeting points, share link with group ("Meet at Blue Bottle Coffee, 2pm?")
- **Recurring spots** — "our usual halfway" for couples/friends who meet regularly
- **Route preview** — see each person's route to the spot
- **Chain avoidance** — opt-out of Starbucks/Chili's/McDonald's suggestions
- **Accessibility** — wheelchair-accessible venues, parking availability

## Target Users
| Segment | Size | Pain |
|---------|------|------|
| Long-distance couples | 3.9M US | Drive hours to see each other, need fair meeting points |
| Co-parents | 13.4M US | Custody handoffs, need kid-friendly spots |
| Friend groups | ~100M US | "Where should we meet?" is the hardest group chat question |
| Remote teams | 35M US | Offsite planning, IRL meetups |
| Road trip planners | ~50M/yr US | Where to rendezvous with another car |

## Why Now
- Remote work spread friend groups and teams geographically
- Dating apps normalized long-distance connections
- Google Maps still doesn't have a "find midpoint" feature (only multi-stop routing)
- Existing "meet halfway" apps (WhatsHalfway, Meetways) are clunky, outdated, and don't suggest actual spots

## Differentiation
- **Meetways** — web-only, dated UI, geographic midpoint only (not travel-time weighted), no group mode, no spot suggestions
- **Google Maps** — can do multi-stop routes but you have to manually find the midpoint yourself
- **Waze** — navigation only, no meeting point discovery
- **Yelp** — great venue data but no geographic/logic layer for meeting points

**MeetHalfway is the only app that combines travel-time-based midpoint calculation WITH curated spot discovery.**

## Monetization
| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 5 lookups/day, 2-person mode, basic spot suggestions |
| Pro | $3.99/mo | Unlimited lookups, group mode (up to 8), vibe filters, chain avoidance, saved spots |
| Premium | $7.99/mo | Everything + recurring spots, route previews, accessibility filters, no ads |
| Business | $19.99/mo | Team offsite planning, venue booking links, calendar integration |

## Technical Feasibility
- **Travel time**: Google Maps Distance Matrix API or Mapbox ($5-10/1000 requests)
- **Places**: Google Places API / Foursquare / Yelp Fusion
- **Geocoding**: Mapbox Geocoding API
- **Midpoint algorithm**: Weighted centroid + travel-time optimization loop
- **Stack**: React Native (mobile), Next.js (web), Supabase (auth + saved spots)
- **Estimated build**: 2-3 weeks to MVP

## Market Size
- 3.9M long-distance couples + 13.4M co-parents = 17.3M core users
- TAM: ~50M US adults who regularly meet people away from home
- If 2% convert to Pro at $3.99/mo = $4M ARR

## Name Ideas
- MeetHalfway ✓
- Midpoint
- SplitMeet
- FairMeet
- RendezView

---

*Source: Web research (micro-SaaS trends, Reddit, Google Maps feature gap analysis)*
*Date: 2026-05-03*
