# TenantFix — Simple Maintenance Requests for Small Landlords

**Date:** 2026-03-14
**Source:** Reddit (r/Landlord, r/realestateinvesting, r/AppIdeas — 18+ threads)
**Category:** Property Management / SaaS

## Problem Statement

Small landlords (1-5 units) have no good way to manage tenant maintenance requests. Enterprise property management platforms (Buildium, AppFolio, Property Meld) start at $100-300/mo and are designed for 50+ unit portfolios. What do small landlords actually use?

- **Text messages** — requests get buried in conversations, no paper trail
- **Phone calls** — "I told you about the leak 3 weeks ago" disputes
- **Email** — photos scattered across threads, hard to track status
- **Spreadsheets** — nobody updates them, no tenant-facing visibility
- **Google Docs** — not designed for this, clunky to share

The result: missed requests, he-said-she-said disputes, delayed repairs, angry tenants, and potential legal liability for documented-but-ignored issues.

### Reddit Evidence (18+ threads)

- r/Landlord: "Can anyone suggest a basic and free software system to track/manage a small number of rental properties?"
- r/realestateinvesting: "Best apps for small time landlord" — top comment: "Most investors don't need software until they have 10 rentals"
- r/Landlord: "What app is everyone using for communicating with your tenants?"
- r/homeowners: "How do you all handle tenant maintenance requests? (I built my own system)"
- r/Landlord: "What app to track maintenance / annual inspections?"
- r/AppIdeas: "A maintenance request tool for small landlords with 1-5 units" (listed in validated complaint analysis, 18 threads)

### Key Pain Quotes
> "Every property management platform starts at $100/mo and is designed for companies with 50+ units. Small landlords are using text messages and spreadsheets."

> "I'm a small-time landlord and software engineer, and one of my biggest headaches was keeping track of tenant maintenance requests (texts, calls...)"

> "Most investors don't need software until they have 10 rentals. You only need a place to track tenant information, payment history, maintenance, etc."

## Target Users

### Primary: Small Landlords (1-5 units)
- 10.6M individual landlords in the US own 1-4 units
- Side-hustle investors, inherited properties, house-hackers
- Not property management professionals
- Tech-comfortable but not power users
- Price-sensitive — won't pay $100+/mo for software

### Secondary: Tenants
- Want a better way to submit and track repair requests
- Tired of "I texted you about this" conversations
- Want documented proof that they reported issues

## Proposed Solution

**TenantFix** — A dead-simple maintenance request system built specifically for landlords with 1-5 rental units. Two interfaces:

1. **Landlord Dashboard** — See all requests across properties, assign vendors, track resolution, document everything
2. **Tenant Portal** — Shareable link (no app download required) where tenants submit requests with photos, see status updates

### What Makes It Different
- **Priced for small landlords:** $12/mo for up to 5 units (vs $100+ for Buildium)
- **No tenant app download:** Tenants get a web link — no friction
- **Paper trail by default:** Every request, update, and photo is timestamped and logged
- **Vendor coordination:** Forward requests to your plumber/electrician with one tap
- **Legal protection:** Documented response times protect both landlord and tenant

## Key Features

### For Landlords
- **Request Dashboard:** All maintenance requests across all properties in one view
- **Status Pipeline:** New → Acknowledged → Scheduled → In Progress → Completed
- **Vendor Directory:** Save your go-to plumber, electrician, HVAC tech with contact info
- **One-Tap Forward:** Send request details + photos to vendor via email/SMS
- **Response Timer:** See how long each request has been open (legal protection)
- **Property Overview:** Quick status of each unit — active requests, last inspection date
- **Photo Documentation:** Before/after photos for every repair
- **Export/Reports:** Monthly maintenance reports, expense tracking for tax purposes

### For Tenants
- **No-Download Portal:** Web link works on any phone, no app needed
- **Guided Submission:** Room-by-room prompts, urgency levels, photo upload
- **Status Tracking:** Real-time updates on their request
- **Message Thread:** Communication log for each request
- **Request History:** See all past requests and resolutions

### Smart Features
- **Urgency Detection:** Water leak? Mold? No heat in winter? Auto-flags as urgent
- **Seasonal Reminders:** HVAC filter changes, gutter cleaning, furnace inspections
- **Duplicate Detection:** "This looks similar to a request from Unit 2B last month"
- **Cost Tracking:** Log repair costs per request for tax deductions

## User Flow

### Tenant Submits Request
1. Opens their unit's TenantFix link (bookmarked or texted to them)
2. Taps "New Request"
3. Selects category (Plumbing, Electrical, HVAC, Appliance, Pest, Other)
4. Describes issue in text + takes photos
5. Sets urgency (Routine / Urgent / Emergency)
6. Submits → gets confirmation with tracking number

### Landlord Receives & Manages
1. Gets push notification / email alert
2. Opens dashboard → sees new request with photos
3. Acknowledges request (tenant sees status update)
4. Forwards to vendor with one tap
5. Schedules repair, updates status
6. Marks complete with before/after photos
7. Full paper trail documented

## Tech Stack (Proposed MVP)

- **Frontend:** Next.js + Tailwind CSS
- **Backend:** Supabase (auth, database, storage, realtime)
- **Notifications:** Email (Resend) + SMS (Twilio)
- **Storage:** Supabase Storage for photos
- **Hosting:** Vercel

## Competitive Landscape

| Solution | Price | Target | Why It Falls Short |
|----------|-------|--------|-------------------|
| Buildium | $55-175/mo | 50+ units | Way too complex and expensive |
| AppFolio | $1.40/unit/mo ($280 min) | 50+ units | Enterprise minimum |
| TurboTenant | Free | Small landlords | Focused on listings/screening, weak maintenance |
| Avail (Realtor.com) | Free-$7/unit | Small landlords | Maintenance is an afterthought |
| Stessa | Free | Investors | Financial tracking only, no maintenance |
| Text/Email | Free | Everyone | No organization, no paper trail |
| **TenantFix** | **$12/mo** | **1-5 units** | **Built specifically for this** |

## Revenue Model

- **Free:** 1 unit, 5 requests/month (try it out)
- **Starter:** $12/mo — up to 5 units, unlimited requests
- **Growth:** $25/mo — up to 15 units, vendor directory, expense reports
- **One-time setup:** $0 (no onboarding fees)

## Market Size

- **TAM:** 10.6M individual landlords × $144/yr = $1.5B
- **SAM:** ~3M landlords with 2-5 units actively seeking tools = $432M
- **SOM (Year 1 target):** 1,000 paying users × $144/yr = $144K ARR

## Differentiation from Existing Duncan Ideas

| Idea | Focus | Persona |
|------|-------|---------|
| HomeKeep | Homeowner maintaining their OWN home | Homeowner |
| RenterVault | Tenant collecting evidence for disputes | Tenant |
| ProofBuild | Verifying contractor credentials | Homeowner hiring contractors |
| **TenantFix** | **Landlord managing tenant maintenance requests** | **Small landlord** |

Different persona, different problem, different workflow. No overlap.

## Prototype

See `prototype/` directory for a working HTML/CSS/JS demo showing:
- Landlord dashboard with request pipeline
- Tenant submission portal
- Request detail view with timeline
- Property overview
