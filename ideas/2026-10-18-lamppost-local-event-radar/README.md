# Lamppost 📌 — Everything happening near you this weekend. No Facebook required.

**Date:** 2026-10-18 (Sunday research run)
**Category:** Consumer / Local discovery / Community
**One-liner:** The neighborhood lamppost, digitized — one feed that pulls local events from every source (Eventbrite, Meetup, Luma, city & library calendars, alt-weeklies, r/city threads, Instagram flyers, and literal paper posters) so you never need a Facebook account to know what's going on in your town.

---

## Problem Statement

Local event discovery is broken and getting worse:

1. **Facebook is the de facto events layer — and people hate it.** Most small events (pop-ups, trivia nights, library story hours, farmers market specials, block parties, gallery openings) are announced in Facebook Groups or as FB Events. If you don't use Facebook (a fast-growing cohort: Gen Z, privacy-minded adults, immigrants without US FB networks), those events simply don't exist for you. You have to *ask friends* to find out what's happening in your own city.
2. **The rest is scattered across 10+ surfaces.** Eventbrite (ticketed only), Meetup (groups, not one-offs), Luma (tech/professional), the city's .gov events page (PDF calendars), the library system (separate portal), the alt-weekly (print + bad website), Instagram story flyers (24-hour lifespan, unsearchable), Nextdoor (login-walled, feed-buried), and paper posters at coffee shops and lampposts.
3. **City subreddits ask every single week.** "What's happening this weekend?" is a recurring top post in r/tampa, r/Atlanta, r/Denver, r/Chicago, etc. The community answers with comment-thread roundups — a manual, ephemeral version of the product that doesn't exist.
4. **The "dark events" problem.** Flyer-only and FB-only events are invisible to every aggregator. Eventbrite can't see them; Google Events (RIP, discontinued as a surface) couldn't either. There is no tool that captures the *unindexed* layer of local events.

**Validated demand signals (Oct 2026):**
- ReachFront's "Best App Ideas People Keep Asking For on Reddit" (Jul 17, 2026) lists **"Local events without Facebook"** as a standing category: *"City subreddits ask every week for an app that shows what's actually going on this weekend nearby, because the events all live in Facebook groups people don't want to use. Nobody has put it all in one simple place."*
- The r/[city] weekly "what's happening" thread pattern is near-universal across mid-size and large US cities.
- Competitor content marketing (Scouty, ToDoInTC, group.app — all 2026) confirms active search volume for "find local events without Facebook," "Eventbrite alternative," "Meetup alternative" — the space is contested but nobody owns the *aggregation + dark-events* position.

## Target Users

- **Primary:** 25–40 urban/suburban adults who deleted Facebook (or never had it) but still want a social life. ~60M+ US adults are non-Facebook or FB-lapsed; the 25–34 cohort's FB usage has fallen below 35%.
- **Secondary:** New residents (moved in the last 12 months — 27M movers/yr) who don't know their city yet and have no local network to ask.
- **Tertiary:** Parents planning kid-friendly weekends; couples in the "what do we do tonight" loop; solo people building a third-place habit.
- **Launch beachhead:** Tampa, FL (home turf) → Florida metros → 10 cities. City-by-city density beats national thinness in local products.

## Proposed Solution

**Lamppost** is a local-first event feed with three layers:

### 1. Aggregate the indexed web (the easy 70%)
Ingest from Eventbrite, Meetup, Luma, Ticketmaster/DICE (discoverability only), city & county .gov event calendars, library systems (RecTrus/LibCal APIs), parks & rec calendars, alt-weekly and local-news event calendars, and r/[city] weekly event threads. AI normalizes everything into one schema: title, when, where, cost, vibe tags, source badge.

### 2. Capture the dark layer (the wedge)
- **Flyer Snap 📸:** photograph a poster at a coffee shop / lamppost / gym bulletin board → on-device OCR + AI extraction → event added to your city's feed with a "community post" badge. The person who snapped it gets karma; repeat snappers become city curators.
- **Screenshot import:** Instagram story/flyer screenshots drop into the same pipeline.
- **One-tap add:** manual entry with AI date/time parsing ("sat 7pm at the yacht club, $10").
- This is the moat: nobody else is systematically indexing unindexed local events. The dataset compounds city by city.

### 3. Deliver as a habit, not a browse
- **The Thursday Digest:** one notification/email — *"14 things happening in Tampa this weekend, picked for you"* — with 5 hero picks + the rest. The digest is the product; the app is the archive. Habit loop: read Thursday, decide Thursday, go Friday–Sunday.
- **Weather-aware:** rain forecast Sunday → auto-suggests indoor swaps for your saved outdoor events. (Nobody does this; it's a delightful, cheap differentiator.)
- **Vibe filters:** Free, Tonight-only, Live music, Outdoors, Food & drink, Kid-OK, Nerdy/quiet, Worth the drive (<30 min).
- **Plans, lightweight:** share a shortlist to a friend group chat, collect "I'm in" taps. Not a social network — a deciding tool. (Distinct from GigMate, which matches you with *stranger* concert buddies; Lamppost plans with people you already know.)
- **Save + calendar sync + reminders.**

## Key Features (MVP)

| # | Feature | Notes |
|---|---------|-------|
| 1 | City feed (one city at launch) | Unified schema, source badges, distance + price |
| 2 | Thursday Digest + push | The retention engine |
| 3 | Flyer Snap (camera → event) | On-device OCR, human review queue for the city |
| 4 | Vibe filters + free/tonight shortcuts | Chips, not settings menus |
| 5 | Save, remind, calendar export (.ics) | Table stakes |
| 6 | Weather-swap suggestions | Weekend forecast hook |
| 7 | Share shortlist + "I'm in" taps | Link-based, no accounts required for friends |

**Post-MVP:** city curator program (paid stipends for top snappers), organizer self-serve listings, downtown-association white label, "quiet hours" events for neurodivergent users, transit/time-to-get-there estimates.

## Market Research & Differentiation

| Player | What they are | Why they leave the gap |
|--------|--------------|------------------------|
| Facebook Events | Still the largest local events index | Requires FB account; groups are walled; younger users abandoned it; it's the thing people are fleeing |
| Eventbrite | Ticketing platform | Only ticketed events; organizer-centric; no flyer/library/FB-only events |
| Meetup | Recurring groups | Dying brand for one-off discovery; groups ≠ events |
| Luma | Pro/tech event platform | Niche vertical; organizer tool, not consumer feed |
| Nextdoor | Neighborhood social | Login-walled, feed-buried, feed is complaints not events |
| Scouty / ToDoInTC / Gatherist | New AI discovery entrants (2026) | Thin source coverage; none capture the dark/flyer layer; none own the digest habit |
| Patch / EveryBlock / Google Events | The graveyard | All died trying to be *local news portals*; none had AI-normalized multi-source ingest, community capture, or a digest-first retention loop |

**Why now (the graveyard is survivable this time):**
1. **AI collapsed the ingest cost.** Normalizing 40 malformed city calendars + PDF flyers + Reddit threads used to require an ops team; now it's embeddings + an LLM pipeline one dev can run.
2. **The wedge is capture, not crawling.** Flyer Snap turns every user into an indexer — a data flywheel Patch never had.
3. **Digest-first retention.** Browsing local-events apps is occasional; a Thursday notification is a weekly habit with a single obvious job ("pick my weekend").
4. **City-by-city density.** Launching in one city where the feed is genuinely complete beats national thinness — local products live or die on "is it actually all here?"

**Not Lamppost:** not a ticketing platform (deep-links out), not a social network (no feeds, no follows), not civic info (that's TownHall — complementary), not venue crowding (that's WaitLine — complementary).

## Monetization

- **Free forever:** full city feed, digest, saves, flyer snap. Discovery must be free to build density.
- **Lamppost+ — $3.99/mo or $29.99/yr:** multi-city (travel mode), unlimited group plans, advanced vibe filters ("under $10, outdoors, <20 min drive"), priority weather-swaps, no sponsored placements.
- **B2B later (year 2):** downtown associations, tourism boards, and BID districts white-label the city feed ($99–499/mo — they already pay for clunky events-calendar SaaS); featured organizer listings ($19/event, clearly labeled).

**TAM/SOM:** ~200M US adults open a "what should I do this weekend" question weekly. Comparable consumer local apps monetize at $30–40M ARR with single-digit % conversion. Year-1 SOM (realistic): 5 cities, 120K users, 5% paid × $29.99 ≈ **$180K ARR** — a healthy solo-dev business, not a unicorn pitch. The compounding asset is the dark-events dataset per city.

## Build Plan (solo dev, 6–8 weeks to MVP)

- **Stack:** Next.js PWA + Supabase (Postgres + pgvector) + a Python ingest worker (scrapers per source type, scheduled) + Claude/GPT for normalization + Tesseract/ML Kit for flyer OCR + SES/OneSignal for digest.
- **Weeks 1–2:** schema + Tampa ingestors (Eventbrite API, r/tampa threads, city of Tampa + Hillsborough calendars, HCPLC library system, Creative Loafing Tampa).
- **Weeks 3–4:** Flyer Snap pipeline + review queue; feed UI.
- **Week 5:** Thursday Digest + weather-swap.
- **Week 6:** group shortlists ("I'm in" links), saves, .ics export.
- **Weeks 7–8:** private beta via r/tampa (post the weekly-roundup reply as a link — instant validation), iterate, launch.
- **GTM:** answer every "what's happening this weekend" Reddit thread with the digest link; partner with 3 alt-weeklies and 2 downtown associations; flyer-snap karma leaderboard per city.

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Source blocking (FB/IG scraping is against ToS) | Never scrape behind logins; rely on public pages, APIs, Reddit (permitted via API), and *user-captured* screenshots/flyers — capture is the user's act |
| Empty-feed death in new cities | City-by-city launch with a completeness checklist before opening a city; seed with Flyer Snap bounties |
| The graveyard curse (local = hard monetization) | Digest-first retention + B2B white-label path; keep burn at $0 (solo, existing infra) |
| Eventbrite/Google add a feed | They're organizer/ticketing businesses; a consumer cross-source feed cannibalizes nothing of theirs and competes with FB, which they won't touch |

## Design Direction

**"Community corkboard meets modern transit app."** Warm poster-paper cream (#FAF3E6), deep ink navy (#1B2434), flyer red-orange (#E8542F) for urgency/tonight, staple-gray borders, 1–2° rotated event cards like taped-up flyers, source badges as little stamps. Display type: archival slab/grotesk; body: Inter. Anti-generic-SaaS: it should feel like the best bulletin board in town, curated by a friend who actually goes out. Prototype ships as a single-file phone mock with the Tampa Thursday Digest.

## Sources

- ReachFront, "The Best App Ideas People Keep Asking For on Reddit (2026)" — Jul 17, 2026 (local-events-without-Facebook demand)
- Scouty blog, "Best Event Discovery Apps & Eventbrite Alternatives in 2026" — Jun 12, 2026 (competitive landscape)
- ToDoInTC, "Meetup Alternatives for Organizers: 10 Best in 2026" — Aug 6, 2026 (city-focused discovery trend)
- group.app, "10 Best Meetup Alternatives in 2026" — Sep 2, 2026 (Reddit-thread naming patterns: Discord/FB Groups dominant, gap for discovery)
- UMA Technology, "6 of the Best Local Events Apps" — May 16, 2026
- Laparizone, "10 Alternatives to Facebook for Local Event Discovery" — 2025
- Recurring r/[city] weekly event threads (r/tampa pattern)

---

*Researched and documented by Duncan ⚔️ — 2026-10-18, Sunday mix run.*
