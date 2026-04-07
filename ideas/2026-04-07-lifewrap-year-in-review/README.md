# LifeWrap — Your Year, Wrapped 🎁

**A personal "Spotify Wrapped" for your entire life.** Beautiful, shareable annual summaries generated from your own data — journal entries, photos, locations, fitness, music, screen time, and more. Not another analytics dashboard. A celebration of *your* year.

## Problem

Spotify Wrapped is the most viral consumer product of the decade — 60M+ shares annually — because it turns personal data into a *story* people want to share. But your life is more than music. You traveled, cooked, exercised, journaled, photographed, worked, and grew. None of that gets the Wrapped treatment.

- Day One, Apple Journal, Google Photos all have *your* data but give you... a timeline scroll
- Year-in-review features are buried inside apps, never comprehensive, never shareable
- People manually compile "year recaps" from 15 different apps, spending hours on Canva
- 73% of people say they wish they documented their year better (Pew Research)

**The gap:** No standalone app takes all your life data and turns it into a beautiful, emotional, shareable story.

## Target Users

- **Primary:** 18-35 year olds who love the "Wrapped" concept and want it for their whole life
- **Secondary:** Journal enthusiasts, travel lovers, fitness trackers, "data nerds" who want reflection tools
- **Tertiary:** Content creators who want year-end recap content

## Proposed Solution

LifeWrap connects to your existing services (with your permission), pulls in a year of data, and generates a stunning multi-slide annual summary — think Instagram Stories meets Spotify Wrapped meets a personal time capsule.

### The Experience
1. **Connect** — Link Google Photos, Apple Health, Spotify, Strava, Google Maps Timeline, journal apps
2. **Generate** — AI analyzes your year, finds patterns, surfaces forgotten moments
3. **Experience** — Swipe through beautiful slides: your top moments, growth areas, hidden patterns
4. **Share** — Export individual slides or the full story to Instagram, Twitter, or save privately

### What Makes It Different
- **Cross-platform** — Not tied to one app. Combines data from everywhere.
- **AI narrative** — Not just stats. "You ran 312 miles this year, but your most active month was November — the same month you started your new job. Coincidence?"
- **Emotional design** — Warm, celebratory, personal. Not a spreadsheet.
- **Always private-first** — All processing on-device or in encrypted cloud. You own your story.
- **Surprise discoveries** — "You visited 14 coffee shops this year. Your favorite was..." / "You listened to 847 hours of lo-fi while coding."

## Key Features

### MVP (v1)
- **Photo Highlights** — Top 10 most meaningful photos (AI-selected by composition, faces, context, not just likes)
- **Music Wrapped** — Top artists, songs, genres, listening hours (Spotify/Apple Music)
- **Fitness Summary** — Total steps, workouts, distance, active minutes
- **Location Map** — Heatmap of where you spent your year, cities visited, new places discovered
- **Screen Time Story** — App usage breakdown, most-used apps, pickup count
- **AI Narrative** — Each slide gets a personalized, warm caption written by AI
- **Share Cards** — Beautiful, branded shareable images optimized for Instagram/Twitter
- **Privacy Controls** — Choose exactly what data to include, what to anonymize

### Future
- **Journal Integration** — Sentiment analysis of journal entries, theme extraction, "your happiest day was..."
- **Social Wrapped** — Who you messaged most, group chat activity, communication patterns
- **Career Wrapped** — Commits, meetings, projects completed (opt-in work integrations)
- **Couple/Family Wrapped** — Combined summaries for households
- **Monthly Mini-Wraps** — Don't wait for December. Get a mini-wrap every month.
- **Custom Themes** — Different visual styles (minimalist, maximalist, retro, neon)
- **Print Edition** — Order a physical photo book of your Wrapped

## Market Research

### Similar Products
| Product | What They Do | Gap LifeWrap Fills |
|---------|-------------|-------------------|
| Spotify Wrapped | Music-only year review | Only covers music, locked to Spotify |
| Apple Photos Memories | Photo slideshows | No cross-app data, no shareable format |
| Google Photos Year in Review | Basic photo summary | Shallow, no narrative, no fitness/music/location |
| Day One / Journey | Journaling apps | Stats buried, no shareable year summary |
| Reflectly | AI journaling | No year-in-review, no cross-app data |
| Gyroscope | Life quantification | Complex, expensive ($8/mo), data-heavy not story-driven |

### Market Size
- Spotify Wrapped: 60M+ shares in 2025, 156M+ social impressions
- 280M+ people use fitness trackers
- 1.2B+ photos taken daily on smartphones
- Personal analytics/life logging market: $4.2B by 2027

### Differentiation
Nobody owns "your whole year, beautifully told." Spotify owns music. Apple owns photos. Nobody connects them all into one emotional narrative. That's LifeWrap.

## Monetization

- **Free Tier** — 1 Wrapped per year (basic: photos + music + fitness), 3 share cards
- **Pro ($4.99/mo or $29.99/yr)** — Unlimited data sources, AI narratives, custom themes, unlimited share cards, monthly mini-wraps
- **Premium ($9.99/mo or $59.99/yr)** — Everything in Pro + couple/family wraps, print-ready exports, priority processing, early access themes
- **Print Edition** — $24.99-$49.99 per physical book

## Technical Feasibility

- **Frontend:** React/Next.js with Framer Motion for swipe animations
- **Data Sources:** OAuth integrations (Spotify API, Google Fit, Apple HealthKit, Google Photos API, Strava API)
- **AI:** Claude/GPT for narrative generation, image analysis for photo selection
- **Privacy:** On-device processing where possible, encrypted cloud for cross-device
- **Sharing:** Canvas API for generating branded share cards

## Source

Inspired by [@girlnamedmarley](https://x.com/girlnamedmarley) on X/Twitter:
> "yes and I wish there was an app that gives me an end of the year summary with random stats like Spotify wrapped meets a high school yearbook"

**Date:** 2026-04-07
**Source Platform:** X/Twitter
