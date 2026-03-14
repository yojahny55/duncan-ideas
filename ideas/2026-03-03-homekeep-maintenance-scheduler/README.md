# HomeKeep — Smart Home & Rental Maintenance Hub

**Date:** 2026-03-03 (merged with TenantFix on 2026-03-14)
**Source:** Reddit (r/Landlord, r/realestateinvesting, r/AppIdeas, r/homeowners — 18+ threads), Web research
**Category:** Property Management / Home Maintenance / SaaS

## Problem Statement

Home maintenance is broken for **two groups** — and the solution is one platform:

### Homeowners
- Dozens of recurring tasks (HVAC filters, water heater flush, gutter cleaning) with no tracking
- Forgotten maintenance → expensive repairs ($6K+ average emergency fix)
- A $400K house depends on $0 maintenance tracking software
- Enterprise tools (Oxmaint) cost $500+/mo — nothing for consumers

### Small Landlords (1-5 units)
- 10.6M individual landlords manage maintenance via texts, calls, spreadsheets
- Enterprise platforms (Buildium, AppFolio) start at $100-300/mo for 50+ unit portfolios
- No paper trail → disputes, delayed repairs, legal liability
- 18+ Reddit threads of small landlords begging for a simple solution

**Same core need:** Track what needs fixing, when it was done, and prove it.

## Target Users

1. **Homeowners** — First-time buyers, busy professionals, older homes
2. **Small landlords (1-5 units)** — Side-hustle investors, house-hackers, inherited properties
3. **Tenants** (secondary) — Submit and track repair requests, documented proof of reports

## Proposed Solution: HomeKeep

One platform, two modes:

### 🏠 Homeowner Mode
Personal maintenance companion for your own home:
- **Home profile** — Add systems (HVAC type, water heater age, appliances)
- **Smart scheduling** — Auto-generated based on manufacturer recs, season, climate
- **Reminders** — Escalating alerts: "Due in 7 days" → "Overdue" → "URGENT"
- **Completion logging** — Quick "Done!" with photos, cost tracking, contractor notes
- **Maintenance history** — Full timeline per system, annual reports
- **Task library** — 50+ pre-loaded tasks with DIY vs Pro ratings, time/cost estimates

### 🏘️ Landlord Mode
Everything in Homeowner mode, plus tenant-facing tools:
- **Tenant portal** — Shareable web link (no app download). Submit requests with photos, track status
- **Request dashboard** — All requests across all properties in one view
- **Status pipeline** — New → Acknowledged → Scheduled → In Progress → Completed
- **One-tap vendor forwarding** — Send request + photos to your plumber/electrician
- **Response timer** — Track how long each request has been open (legal protection)
- **Paper trail** — Every request, update, and photo timestamped and logged
- **Expense reports** — Cost tracking per property for tax purposes

### Smart Features (Both Modes)
- **Seasonal reminders** — HVAC filters, gutter cleaning, furnace inspections
- **Urgency detection** — Water leak? No heat in winter? Auto-flags as urgent
- **Weather-aware** — "Snow coming — check your roof"
- **Photo documentation** — Before/after for every repair
- **Duplicate detection** — "Similar to a request from Unit 2B last month"

## User Flows

### Homeowner
1. Add home systems (dropdown templates)
2. Auto-generated maintenance schedule appears
3. Get reminders when tasks are due
4. Mark complete with date + optional photos
5. View history, health score, annual report

### Tenant Submits Request
1. Opens unit's HomeKeep link (bookmarked or texted)
2. Selects category (Plumbing, Electrical, HVAC, Appliance, Pest, Other)
3. Describes issue + takes photos, sets urgency
4. Submits → gets tracking number + status updates

### Landlord Manages
1. Gets notification of new request
2. Acknowledges (tenant sees update)
3. Forwards to vendor with one tap
4. Schedules repair, updates status
5. Marks complete with before/after photos
6. Full paper trail documented

## Revenue Model

- **Free:** 1 home, 10 tasks, basic reminders (homeowner trial)
- **Pro ($5/mo):** Unlimited tasks, multiple homes, photo history, annual reports
- **Landlord ($12/mo):** Up to 5 units, tenant portal, vendor directory, expense reports
- **Growth ($25/mo):** Up to 15 units, all features

## Market Size

- **Homeowners:** 84M US homeowners, growing millennial/Gen Z segment
- **Landlords:** 10.6M individual landlords × $144/yr = $1.5B TAM
- **SAM:** ~3M landlords actively seeking tools = $432M
- **Year 1 target:** 1,000 paying users = $144K ARR

## Competitive Landscape

| Solution | Price | Target | Gap |
|----------|-------|--------|-----|
| Buildium | $55-175/mo | 50+ units | Too complex/expensive for small landlords |
| AppFolio | $280/mo min | 50+ units | Enterprise minimum |
| TurboTenant | Free | Small landlords | Weak maintenance, focused on listings |
| Centriq | Free | Homeowners | Appliance manuals only, no scheduling |
| HomeZada | $7/mo | Homeowners | Bloated, not maintenance-focused |
| Calendar apps | Free | Everyone | No history, no home context |
| Text/Email | Free | Everyone | No organization, no paper trail |
| **HomeKeep** | **$0-25/mo** | **Homeowners + small landlords** | **Smart scheduling + tenant requests in one** |

## Differentiation from Other Duncan Ideas

| Idea | Focus | Persona |
|------|-------|---------|
| RenterVault | Tenant collecting evidence for disputes | Tenant |
| ProofBuild | Verifying contractor credentials | Homeowner hiring contractors |
| **HomeKeep** | **Maintenance tracking + tenant request management** | **Homeowner + small landlord** |

## Tech Stack (Proposed MVP)

- **Frontend:** Next.js + Tailwind CSS (PWA)
- **Backend:** Supabase (auth, database, storage, realtime)
- **Notifications:** Email (Resend) + SMS (Twilio) + Push (service worker)
- **Storage:** Supabase Storage for photos
- **Hosting:** Vercel

## Why Now?

- Gen Z/Millennials becoming homeowners — want apps for everything
- Rising repair costs — preventive maintenance more valuable than ever
- Small landlord market is underserved and growing
- Climate unpredictability — more weather-related home damage
- Some insurers now require maintenance proof

## Success Metrics

- **Activation:** % of users who add at least 3 systems
- **Engagement:** % completing at least 1 task/month
- **Conversion:** Free → Paid upgrade rate
- **Landlord adoption:** % who activate tenant portal
- **Retention:** 30-day return rate

---

## Source

Reddit (18+ threads across r/Landlord, r/realestateinvesting, r/AppIdeas, r/homeowners), Web research, Product Hunt, Indie Hackers

## Status

✅ Prototype built (Homeowner mode + Landlord/Tenant mode)

## Prototype

See `prototype/index.html` — Interactive demo with:
- Home system setup & maintenance schedule
- Task completion logging & history
- Landlord request dashboard with pipeline
- Tenant submission portal

---

*Generated by Duncan ⚔️ — Daily App Ideas Research*
