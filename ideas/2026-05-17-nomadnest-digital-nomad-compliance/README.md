# NomadNest — Digital Nomad Compliance Tracker

## The Problem

35M+ digital nomads globally, and every single one lives in fear of one thing: **overstaying a visa by accident**. Beyond that, they juggle:

- **Visa day counting** — Schengen = 90/180, Thailand = 30+30, Colombia = 90+90. Manual counting is error-prone and gets you deported.
- **Tax residency thresholds** — Stay 183+ days in many countries and you owe taxes. No one tracks this for you.
- **Healthcare gaps** — Travel insurance expiring between countries, coverage not valid in next destination.
- **Banking red flags** — Many banks close accounts if they detect you're living abroad. No heads-up.
- **Document chaos** — Passports, visas, insurance cards, tax residencies — scattered across email, photos, and drawers.

**Current "solutions"**: Spreadsheets. A Notes app with dates. Forgetting. Getting deported.

Wanderlog and TripIt are travel planners. NomadList is a city database. **Nobody owns compliance tracking for location-independent workers.**

## The Solution

**NomadNest** — a single dashboard that tracks your legal status across every country you visit:

- 🛂 **Visa Countdown** — Add entry date, select country, get exact days remaining with calendar visualization. Warns at 30/14/7/3 days. Handles rolling windows (Schengen 90/180 automatically calculated).
- 💰 **Tax Residency Tracker** — Days spent per country, 183-day countdown, "you're about to trigger tax residency in Portugal" alerts.
- 🏥 **Insurance Gap Detector** — Enter policy dates per country, get warnings about coverage gaps before you travel.
- 📄 **Document Vault** — Passport expiry, visa PDFs, insurance cards, tax IDs. All in one place with expiry alerts.
- 🗺️ **Travel Timeline** — Visual map + timeline of where you've been and for how long. Auto-generates from entries.
- 🏠 **Home Base Monitor** — Track how many days you spend in your "home" country vs abroad (relevant for tax domicile).

## Target Users

| Segment | Size | Pain Level |
|---------|------|------------|
| Full-time digital nomads | 35M globally | 🔴 Critical |
| Slow travelers (1-3 months per country) | 20M+ | 🟠 High |
| Remote workers on "workcations" | 50M+ | 🟡 Medium |
| Expats who travel frequently | 15M+ | 🟠 High |
| Retirees splitting time between countries | 10M+ | 🟡 Medium |

## Key Features

### Core
1. **Visa Calculator** — Select country, enter arrival date, see exact status. Rolling window support for Schengen, UK, etc.
2. **Day Counter Dashboard** — Days remaining in current visa, days until tax residency triggers, days spent in each country this year.
3. **Smart Alerts** — Push notifications at configurable thresholds. "You have 14 days left in Thailand." "You'll trigger Spanish tax residency in 23 days."
4. **Travel Log** — Quick entry: "Arrived in Lisbon" + date. Auto-populates everything else.

### Premium
5. **Multi-Country Trip Planner** — Plan a 6-month route, see visa feasibility and tax implications before you book.
6. **Tax Summary Export** — Generate a PDF for your accountant showing days per country.
7. **Compliance Score** — Green/yellow/red status across all your compliance vectors.
8. **Household Mode** — Track compliance for a couple/family traveling together.

## Market Research

### Competitors
| App | What it does | Gap |
|-----|-------------|-----|
| **Wanderlog** | Trip planning | No compliance, no visa tracking |
| **TripIt** | Itinerary management | Travel-focused, not legal |
| **NomadList** | City comparisons | Database, no personal tracking |
| **VisaHQ** | Visa requirements lookup | No day counting, no personal tracker |
| **Spreadsheets** | Manual tracking | Everyone's current "solution" |

### Why Now
- Post-COVID remote work explosion: 35M nomads in 2026, up from 10M in 2019
- Schengen cracking down on "visa runs" — consequences are real (bans, fines)
- Tax authorities globally tightening remote worker rules (Portugal NHT, Spain Beckham Law changes, Greece new digital nomad visa)
- GLP-1 / health-conscious nomads more aware of insurance gaps
- Zero apps own this specific compliance niche

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 1 country tracking, basic visa countdown, 5 travel log entries |
| **Nomad** | $4.99/mo | Unlimited countries, tax tracking, alerts, document vault, travel log |
| **Pro** | $9.99/mo | Trip planner, tax export, household mode, priority support, compliance score |

## Technical Feasibility

- **Visa rules database**: Curated dataset of ~200 countries' visa requirements. Updatable via API. Many open datasets exist.
- **Day counting logic**: Straightforward date math. Schengen 90/180 rolling window is the complex case — well-documented algorithm.
- **Tax residency rules**: Per-country thresholds. ~50 countries cover 95% of nomad destinations.
- **Tech stack**: React Native / Flutter for mobile, React for web. SQLite for local-first offline access (critical for traveling users).

## Differentiation

This isn't a travel app. It's a **legal compliance** app for people who live across borders. The mental model is closer to "TurboTax for nomads" than "TripIt for backpackers."

The anxiety is real — Reddit threads with 500+ upvotes asking "how do I count my Schengen days?" TikTok videos with millions of views about visa overstay horror stories. Nobody has built the simple "enter your dates, see your status" tool.

## Name

**NomadNest** — your home base for border compliance. Warm, protective, belongs-to-you energy.

## Tags

`digital-nomad` `visa-tracker` `tax-residency` `compliance` `travel` `remote-work` `expat`
