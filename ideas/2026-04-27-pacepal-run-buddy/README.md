# PacePal — Find Running Partners at Your Exact Pace

## Problem

60M+ Americans run regularly, and 88% prefer running with someone — but finding a partner at your exact pace is nearly impossible. Current options suck:

- **Running clubs** — great for social, but you're either holding someone back or getting dropped
- **Strava** — tracks your runs, shows who ran nearby, but zero matching
- **Facebook groups** — "Looking for a running buddy, 9:00/mile, Tampa" → crickets or wildly mismatched people
- **Bumble BFF** — not pace-aware, not schedule-aware, not runner-first

The result: most people run alone. Not because they want to, but because finding "someone who runs 9:15/mile on Tuesdays at 6am near downtown" is a social coordination problem no app has solved.

## Target Users

- **Solo runners** who want company (60M+ US runners, 70%+ run alone)
- **New runners** intimidated by running clubs (C25K graduates wanting a buddy at their level)
- **Travelers** wanting a local running partner in a new city
- **Runners who moved** to a new city and lost their running group
- **Walkers and cyclists** who want the same matching ( PacePal covers all three)

## Solution

**Pace-first matching for runners, walkers, and cyclists.**

Set your pace (min/mile or min/km), your preferred days/times, and your typical routes. PacePal shows you people who run at your speed, at your times, near your routes. Match, chat, meet up.

### Key Features

- **Pace matching** — set your comfortable pace range (e.g., 8:45–9:15/mile) and only see people in that window
- **Schedule sync** — "Tues/Thurs 6am, Saturday 8am" — match on overlapping availability
- **Route-based discovery** — share your typical routes or discover runners near your favorite paths
- **Vibe tags** — "chatty," "silent running," "intervals," "recovery pace," "podcast listener" — match on more than just pace
- **Experience level** — beginner/intermediate/advanced, no judgment
- **Safety features** — verified phone numbers, share live location during runs, "home by" check-in
- **Travel mode** — visiting a new city? See local runners at your pace for a one-time run
- **Group runs** — 3–5 people at similar pace, auto-organized by PacePal
- **Strava/Garmin/Apple Health sync** — import your actual pace data, no manual entry needed
- **Goal matching** — training for a half marathon? Find others on the same training plan

## Market Size

- 60M+ US runners (Running USA 2025)
- 70%+ run alone (RunRepeat survey)
- 88% say they'd run more with a partner (Athlete's Foot study)
- Global running app market: $4.2B by 2027
- Running shoes market: $48B — runners spend money on their sport
- Strava has 120M+ users but doesn't do matching — massive addressable user base

## Competition

| Competitor | What They Do | Gap |
|------------|-------------|-----|
| **Strava** | Run tracking + social feed | No pace-based matching, no scheduling |
| **Bumble BFF** | General friend matching | Not pace-aware, not schedule-aware |
| **Nike Run Club** | Guided runs + tracking | No partner matching |
| **Local running clubs** | Group runs | Fixed pace (too fast or too slow), fixed schedule |
| **Facebook/Reddit** | Manual posting | No matching, terrible UX, privacy nightmare |

**PacePal is the only app that matches runners by their actual pace, schedule, and location.**

## Monetization

- **Free** — 3 match requests/week, basic matching
- **PacePal Pro ($4.99/mo)** — unlimited matches, Strava sync, travel mode, group runs
- **PacePal Premium ($9.99/mo)** — everything in Pro + advanced route matching, training plan matching, priority in group runs, analytics

## Technical Feasibility

- **MVP**: React Native or Flutter, Firebase Auth, location-based queries (PostGIS or GeoFirestore), push notifications
- **Matching algorithm**: Weighted scoring on pace overlap (40%), schedule overlap (30%), distance (20%), vibe tags (10%)
- **Safety**: Phone verification (Twilio), optional live location sharing (pub/sub), emergency contacts
- **Integrations**: Strava API, Apple HealthKit, Google Fit, Garmin Connect

## Differentiation

1. **Pace-first, not social-first** — Strava is a social network that happens to track running. PacePal is a matching engine that happens to connect runners.
2. **Schedule-aware** — matching on when you actually run, not just where
3. **Inclusive of pace** — 12-minute milers are first-class citizens, not an afterthought
4. **Travel mode** — no other app helps you find a running buddy in a city you're visiting
5. **Safety-first design** — built for strangers meeting to run, not friends chatting

## Name Ideas

- PacePal ✓ (clear, friendly, memorable)
- RunMatch
- StrideMate
- PacePartner

## Tags

`fitness` `running` `matching` `social` `health` `community` `pace` `partner`

---

*Researched and documented by Duncan ⚔️ — April 27, 2026*
