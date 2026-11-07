# Waylock 🏥🧭

**Hospital wayfinding without the BLE beacons — "Turn-by-turn indoor navigation for massive hospital complexes, crowdsourced from photos, not hardware."**

![Status](https://img.shields.io/badge/status-prototyped-brightgreen)
![Source](https://img.shields.io/badge/source-Reddit%20r%2FAppIdeas-blue)
![Date](https://img.shields.io/badge/date-2026--11--07-lightgrey)
![Pricing](https://img.shields.io/badge/pricing-%240--B2B-orange)

> **Demo:** [prototype/index.html](prototype/index.html) · [Live on GitHub Pages](https://yojahny55.github.io/duncan-ideas/ideas/2026-11-07b-waylock-hospital-wayfinding/prototype/index.html)

## Problem Statement

Patients get lost inside hospitals. Not "briefly confused" lost — *miss-the-appointment, wander-three-wings, stop-a-nurse-for-directions* lost. And it costs real money and real care:

- **~30% of patients report getting lost** in large hospital complexes (Gozio Health, 2026 compilation of 12 studies)
- **UK: ~6.9M outpatient appointments missed per year** — a meaningful share are patients who couldn't find the department in time, gave up, or arrived too late to be seen (ScienceInsights, Mar 2026)
- **The average hospital employee spends ~40 hours/year guiding lost people** — a full work week per employee, across thousands of employees, spent being a human signpost (ScienceInsights, Mar 2026)
- **Hospitals using digital wayfinding saw a 25% reduction in missed appointments** (Gozio, 2026)
- Confusion **increases patient anxiety** in an already high-stress moment — the navigation failure is also a care-quality failure (Wavetec, 2025)

### The Spark (Reddit, THIS WEEK)

r/AppIdeas weekly top (fetched via RSS, Nov 7 2026): **"An app that provides turn-by-turn indoor navigation specifically for massive hospital complexes"** (comments/1xp5dry). The comment thread is the whole competitive analysis in four lines:

1. /u/vancha113: "Good idea **if you can get permission** :) I would use something like that when it feels polished" — the two blockers named by users themselves: access + polish
2. /u/SirPali: "It basically runs on **tracking BLE beacons** that have to be placed throughout the facility and having a giant map of where each beacon is" — the incumbent approach: **hardware installation**
3. /u/dmazzoni: "**Already exists**: https://www.pointr.tech/sectors/healthcare" — the enterprise answer
4. /u/dj_mather87: "There are **app-free versions** as well: https://zap.works/spaces/healthcare/" — the Zappar/kiosk answer

Note what all four miss: Pointr, Mappedin, Mapsted, Zappar — **every existing solution is B2B, sold to the hospital, and most require on-site infrastructure** (BLE beacons, Wi-Fi fingerprinting surveys, custom venue mapping engagements). That's why 2026 has a $42.5B indoor-positioning market (Straits Research, Aug 2026; $150B+ by 2030 at 41.5% CAGR — Business Research Co., Apr 2026) and *still* 30% of patients get lost: the market serves venues that can sign six-figure contracts, not the patient standing in the lobby with a 9:40 appointment and a crumpled referral slip. **Nobody owns the patient-side, consumer app.** That's the shelf.

### Why the incumbent model structurally fails the patient

1. **Hardware moat = coverage desert.** BLE/Wi-Fi positioning needs beacons installed and surveyed per facility. Rollout is slow, expensive, and prioritizes flagship campuses — the mid-size regional hospital your aunt goes to will never get it.
2. **Sold to the hospital, not used by the patient.** The buying committee cares about analytics dashboards and kiosk integrations. The 74-year-old with a 7:15 AM fasting blood draw cares about one thing: *"where do I actually walk."*
3. **The per-hospital app problem.** Even when a hospital has navigation, it's a white-labeled feature inside *their* app behind *their* portal login. A patient visiting two health systems downloads two apps. Nobody has "Google Maps for all hospitals."
4. **Appointment context is never joined to the map.** The confirmation email says "Ambulatory Care Center, Level 4, Suite 4200" — and the wayfinding app (if it exists) makes you re-type that. The connection between *your appointment* and *your route* is the obvious move nobody makes.

## The Solution

**Waylock = the consumer-side indoor navigator for hospitals, built on photo-dead-reckoning instead of beacons.**

The core bet: **you don't need to know where the patient is on the planet — you need to know where they are relative to the lobby they just entered.** That kills the hardware requirement entirely.

### 1. Appointment Ingest (the wedge — Drawbridge/BillDelta pattern, zero-typing)
Forward your appointment confirmation email/SMS to `route@waylock.app` (or paste/screenshot it). Claude extracts: facility, building, floor, suite, appointment time, arrival instructions ("arrive 30 min early for registration"), parking notes. You get a **Route Card**: one screen, one tap, the day of your visit. No account needed to receive it; account unlocks saving/sharing.

### 2. Beacon-Free Positioning (the technical moat)
- **Lobby-anchored dead reckoning:** the patient taps "I'm at the main entrance" (or scans a QR code Waylock asks hospitals to print and tape up — a $0.10 sticker replaces a $40 BLE beacon). From there, **step counting + compass + explicit landmarks** ("pass the elevator bank, turn left at the chapel") track position well enough for turn-by-turn guidance.
- **Photo-based route building:** routes are authored by walking them once and snapping photos at decision points. Claude vision turns photos into landmark captions ("double doors with Radiology sign overhead"). Community + hospital staff both contribute; each verified walk permanently improves the venue.
- **Landmark instructions, not coordinates:** humans navigate by "left at the coffee shop," not "heading 240°, 38m." Every instruction is a photo + one sentence. Works in Airplane Mode. Works on a 2019 Android.

### 3. The Visit Timeline (retention + anxiety killer)
A hospital visit is a *sequence*, not a point: park → register → lab draw → imaging → clinic → checkout → pharmacy. Waylock renders the whole day as a checklist timeline with per-stop routes, "leave by" times computed backwards from the appointment (the KickoffClock pattern — actual-start vs official-start), and a **panic button: "I'm lost"** → shows nearest staffed desk + floor map + one-tap call to the department.

### 4. Escort Mode (the caregiver story nobody builds for)
The person who most needs this isn't the patient — it's the adult child driving Mom to a campus she's never seen, in a city they don't know, for an oncology appointment neither of them wants to be at. Escort Mode: share your live route progress with family ("Dad is on Level 3, 4 minutes from Cardiology"), post-visit "arrived safely" receipt, and a saved photo trail so a sibling can replicate the walk next month.

### 5. Crowd Truth (the PityTrack/Reinstated data flywheel)
Every completed route logs what actually happened: real walk time, which entrance actually had the shortest security line, "registration closed the window at 4:45," "parking garage B was full at 8 AM." Public, anonymous **Campus Truth pages** per hospital — SEO magnets owned by nobody ("[hospital name] where to park," "[hospital name] how early to arrive") that double as the B2B sales deck.

## Target Users

### Primary
- **Outpatients at large/multi-building health systems** — the ~30% who get lost; highest-stress visits (oncology, surgery pre-op, first visits)
- **Caregivers & adult children** — Escort Mode; they do the navigating and the worrying
- **Elderly patients & non-native speakers** — photo instructions beat text signage; landmark navigation needs no literacy in the local language

### Secondary
- **New hospital staff, students, residents, vendors, delivery** — they get lost too and rotate constantly (40 hrs/yr/employee of guiding is *their* time being wasted)
- **Hospital patient-experience / operations teams** — Year-2 buyers: crowd truth dashboard, no-show reduction analytics, $0-hardware deployment story

### Beachhead
Mid-size US health systems (2–6 hospitals) that can't justify Mappedin/Pointr enterprise contracts but *can* tape up QR stickers and forward patients to a free web app. Ship consumer-first; let patient volume drag hospitals into the B2B tier.

## Tech Stack

**Solo MVP (4–6 weeks), house-standard:**
- **Frontend:** Next.js PWA (installable, offline-first via service worker + IndexedDB/Dexie — routes must work in elevator-dead-zones and Airplane Mode)
- **Backend:** Supabase (auth, Postgres, storage for landmark photos); Edge Functions for email/SMS ingest
- **AI:** Claude — appointment-email/SMS parsing, Claude Vision for photo→landmark captioning and route QA; no ML training, plain SQL over outcome tables (Upheld/Reinstated pattern)
- **Ingest:** SES inbound email (`route@waylock.app`) — the BillDelta/Drawbridge email-forward pattern
- **Sensors:** Web APIs only — `DeviceMotionEvent` (step cadence), `DeviceOrientationEvent` (compass), Geofence API for campus proximity trigger. **No native app, no BLE SDK, no Google Indoor Maps dependency**
- **Routing:** landmark graph per venue (nodes = photos/decision points, edges = walk segments) — trivial Dijkstra over 50–500 nodes; no GIS stack needed
- **Push/notifications:** OneSignal (visit-day reminders, "leave now" nudges)
- **SEO:** weekly SSG Campus Truth pages per hospital

## Monetization

**Consumer free forever. The visit is episodic; charging patients at their most anxious moment is brand suicide (Upheld lesson). The money is B2B + data-adjacent, never data-selling.**

1. **Free (consumer, always):** appointment ingest, routes, timeline, Escort Mode, panic button. Coverage density IS the dataset — free-tier-as-moat. Every completed route improves the venue for the next patient and for the hospital sales demo.
2. **Waylock for Hospitals — $499–$1,499/mo per campus (Year 1–2 core revenue):** white-label routes inside their app/portal (they already bought Mappedin-style tech? fine — we're the *coverage* layer for campuses they skipped), QR-sticker kit + staff route-walking tools, no-show reduction dashboard ("112 patients guided, avg 6 min saved, 4 near-misses recovered"), patient-experience analytics. Priced ~90% under Pointr/Mappedin engagements with **zero hardware** — the switch/no-switch pitch both write themselves.
3. **Pro $4/mo or $29/yr (light consumer tier):** multi-visit history for chronic patients (dialysis, chemo, recurring therapy = 100+ visits/yr — their route should auto-load with one tap forever), household mode (manage Mom + kid's appointments), Apple/Google Calendar two-way sync.
4. **Campus Truth Reports — $99–$299 one-off (Year 2):** anonymized arrival/parking/wait-flow reports sold to hospital ops and to *employers/insurers* doing network adequacy work. Aggregated, anonymous, consented — never individual patient data (HIPAA posture: we ingest appointment *logistics*, never clinical content; BAA-ready architecture from day one).
5. **NEVER:** selling patient data, ad networks, pharmacy referral kickbacks. Trust is the product.

### TAM / SOM
- IPIN market: **$42.5B in 2026 → $444B by 2034** (34.1% CAGR, Straits Research) — healthcare is a top-3 vertical
- ~6,100 US hospitals, ~90M+ inpatient stays and ~400M+ ED/outpatient encounters annually; UK alone: 6.9M missed outpatient appointments/yr
- Year-1 SOM: 25 consumer campuses seeded from public floor maps + 500 community route walks → 100K free guided visits → 8 hospital pilots @ $500–1,500/mo ≈ **$60–140K ARR + 3K Pro ≈ $85K** ≈ **$150–225K ARR**, near-zero CAC (every "I got lost at [hospital]" thread and every no-show stat article is a recurring GTM event; Campus Truth SEO pages compound)

## Why Nobody Owns This
- **Mappedin/Pointr/Mapsted/Situm/Navigine/IndoorAtlas:** enterprise, hardware-or-survey-dependent, hospital-as-customer. They will not build a consumer app that works at hospitals that don't pay them — it cannibalizes their sales narrative.
- **Zappar/app-free QR spaces:** kiosk/web experiences *inside* one venue's contract; no appointment ingest, no cross-venue coverage, no consumer brand.
- **Google Maps indoor:** exists for a shrinking list of venues, no appointment context, no turn-by-turn indoor routing, no caregiver story — and Google has repeatedly deprioritized indoor.
- **Hospital portals (MyChart et al.):** show the appointment, occasionally a static PDF map. The PDF map IS the incumbent, and it's why 30% get lost.
- **Own catalog check:** AccessHub (2026-02-09) = crowdsourced *accessibility attributes* of venues (ramps, sensory zones) — Waylock is *navigation inside* the venue and would consume AccessHub data as an input (step-free route preference). StormHaven = emergency shelters. HushMap = quiet places. No overlap.

## Differentiation (one line)
**Pointr sells hospitals a navigation system. Waylock gives patients one — at every hospital, with a QR sticker instead of a beacon, starting from the appointment email you already have.**

## Design (ui-ux-pro-max)

"Hospital calm" — the opposite of clinical coldness. Warm paper white `#FAF8F4`, deep teal `#0E4F4A`, wayfinding amber `#F5A623`, reassurance green `#3FB950`, alert coral `#E5484D`. Fraunces for headings (human, warm serif — not sterile), Inter for UI, JetBrains Mono for times/room numbers/floor codes. Signature components: the **Route Card** (one appointment = one card: big photo, one sentence, progress dots), the **vertical Visit Timeline** with YOU ARE HERE marker and per-stop "leave by" mono times, the **"I'm lost" panic button** (always thumb-reachable, coral outline, never filled — it should feel available, not alarming), photo-first step cards with landmark captions. Voice = the kind nurse at the information desk: "Head straight past the elevators, the chapel is on your right." Every screen ends in ONE action: Start, Next, or I'm Here.

## Sources
- [r/AppIdeas — "An app that provides turn-by-turn indoor navigation specifically for massive hospital complexes"](https://www.reddit.com/r/AppIdeas/comments/1xp5dry/) (weekly top, fetched via RSS Nov 7 2026, incl. full comment thread: /u/vancha113, /u/SirPali, /u/dmazzoni, /u/dj_mather87)
- [ScienceInsights — What Is Wayfinding in Healthcare and Why It Matters (Mar 16 2026)](https://scienceinsights.org/what-is-wayfinding-in-healthcare-and-why-it-matters/) — 40 hrs/yr/employee guiding; UK 6.9M missed outpatient appointments
- [Gozio Health — Patients Are Getting Lost in Hospitals: 12 Stats Show What That Costs (2026)](https://www.goziohealth.com/blog/patients-are-getting-lost-in-hospitals-12-stats-show-what-that-costs) — ~30% get lost; 25% missed-appointment reduction with digital wayfinding
- [Mappedin — How to improve wayfinding in hospitals (May 12 2026)](https://www.mappedin.com/resources/blog/how-to-improve-hospital-wayfinding/) — operational-cost framing; [best hospital navigation apps (Mar 10 2026)](https://www.mappedin.com/resources/blog/best-hospital-navigation-apps/) — incumbent scan (Pointr, Mapsted)
- [Ariadne — Hospital Outpatient Wayfinding: 6 Rules (Jun 23 2026)](https://www.ariadne.inc/resources/blogs/hospital-outpatient-wayfinding/) — missed-appointment design rules
- [Wavetec — Wayfinding Challenges in Healthcare (Jan 2025)](https://www.wavetec.com/blog/how-to-overcome-wayfinding-challenges-in-healthcare/) — patient anxiety
- [Straits Research — Indoor Positioning & Navigation Market (Aug 24 2026)](https://straitsresearch.com/report/indoor-positioning-and-navigation-market) — $42.5B 2026 → $444B 2034
- [Business Research Co. — IPIN Global Market Report (Apr 13 2026)](https://www.thebusinessresearchcompany.com/report/indoor-positioning-and-indoor-navigation-ipin-global-market-report) — $150.66B by 2030 @ 41.5% CAGR
- [Pointr Healthcare](https://www.pointr.tech/sectors/healthcare) · [Zappar Spaces Healthcare](https://zap.works/spaces/healthcare/) — named in-thread incumbents
