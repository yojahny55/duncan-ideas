# RentReview — Landlord Rating & Review Platform for Renters

## The Problem

44M+ US renters sign leases with zero visibility into who they're renting from. Background checks for tenants are standard — but landlords operate in complete darkness. No verified reviews, no track records, no accountability.

Twitter is full of viral landlord complaint threads. Reddit r/badlandlord has 200K+ members. Yet the only "solution" is word-of-mouth and Facebook groups.

**Current options:**
- **Apartment reviews (Yelp, Google, Apartments.com)** — rate the *building*, not the landlord. Different landlord = different experience.
- **Better Business Bureau** — landlords aren't listed. Useless.
- **Local court records** — exist but require legal knowledge to search. Nobody does this.
- **Word of mouth** — doesn't scale, doesn't travel.

**The gap:** There is no Glassdoor for landlords. Renters deserve to know if a landlord returns deposits, responds to maintenance in days or months, and raises rent 40% at renewal.

## The Solution

**RentReview** — anonymous, verified landlord ratings with structured scoring and address-level search.

### How It Works

1. **Search before you sign** — Enter an address, landlord name, or management company. See ratings, reviews, and red flags.
2. **Write a review** — Rate your landlord on 6 dimensions after verifying your lease (upload redacted lease or utility bill).
3. **Landlord Score (0-100)** — Composite rating visible at a glance. Color-coded: 🟢 80+, 🟡 60-79, 🟠 40-59, 🔴 Below 40.
4. **Red Flag Alerts** — AI-detected patterns: "73% of reviewers report deposit issues," "Average maintenance response: 18 days."
5. **Rent Timeline** — Track rent increase history per building. See if renewal prices jump.

### Key Features

- **6-Dimension Scoring:** Maintenance Speed, Communication, Deposit Fairness, Rent Stability, Safety/Upkeep, Lease Transparency
- **Verified Reviews Only** — Lease verification prevents fake reviews (redacted upload, utility bill match, or landlord confirmation)
- **Anonymous by Default** — Your name never appears. Reviews show unit type, lease duration, and verified ✓ badge
- **Address-Level Search** — Search any address to see all landlords associated with it + reviews
- **Landlord Profile Pages** — Auto-generated when reviews come in. Landlords can claim and respond
- **Red Flag Engine** — AI scans reviews for patterns and surfaces warnings
- **Rent Increase Tracker** — Crowd-sourced rent history per address/unit
- **Moving Checklist Integration** — "Issues to document at move-in" generator based on common complaints for your building

## Target Users

- **Primary:** 44M US renters, especially 18-34 (move every 2.3 years on average)
- **College students** — 20M+ moving annually, most vulnerable to bad landlords
- **Relocating professionals** — signing sight-unseen, need landlord intel
- **Section 8 / affordable housing** — tenants with fewer options, most at risk
- **Secondary:** Good landlords wanting to differentiate, property managers building reputation

## Market Size

- 44M renter households in the US (Census 2025)
- Average renter moves every 2.3 years = ~19M apartment searches/year
- 70% of renters say they wish they could research landlords before signing (Zillow survey)
- 35% of renters have had a serious dispute with a landlord
- Average security deposit: $1,800 — and 26% of renters report partial/complete deposit withholding

## Competitive Landscape

| Competitor | What They Do | Gap |
|-----------|-------------|-----|
| Google/Yelp Reviews | Rate buildings, not landlords | Different landlords = different experience |
| Apartments.com | Building amenities and management reviews | Surface-level, not landlord-specific |
| RateMyLandlord (defunct) | Tried this 10 years ago | Died from fake reviews, no verification |
| Facebook Groups | Local word-of-mouth | Not searchable, not structured, not verified |
| **RentReview** | **Verified landlord ratings with structured scoring** | **First with verification + AI pattern detection** |

## Business Model

- **Free for renters** — Always. Search, read, write reviews. Unlimited.
- **Landlord Pro ($19.99/mo)** — Claim profile, respond to reviews, add photos/descriptions, analytics dashboard
- **Property Manager ($49.99/mo)** — Multi-property management, team responses, reputation analytics, widget for listing sites
- **Real Estate Agent Tool ($9.99/mo)** — Share landlord ratings with clients, build trust
- **Data API** — Rent trends, landlord ratings for listing platforms and tenant screening services

## Why Now

1. **Twitter virality** — Landlord complaint threads go viral weekly. Cultural momentum exists.
2. **Rent crisis** — Average rent up 30% since 2020. Renters are angry and organizing.
3. **Deposit wars** — 26% of renters lose deposits. States are passing stricter laws. Documentation matters.
4. **No dominant player** — RateMyLandlord died. The space is empty.
5. **Verification tech** — Document verification APIs (Stripe, Plaid) make verified reviews feasible now.

## Monetization Projections (Year 1)

| Metric | Projection |
|--------|-----------|
| Renter registrations | 150K |
| Verified reviews | 45K |
| Landlord Pro subscribers | 800 |
| Property Manager subscribers | 150 |
| Monthly revenue | ~$24K |
| Year 1 revenue | ~$180K |

## Technical Architecture

- **Frontend:** Next.js 14 + Tailwind CSS + sh.convex (real-time)
- **Backend:** Convex or Supabase (auth + DB + edge functions)
- **Verification:** Stripe Identity or manual review queue
- **Search:** Algolia or Meilisearch for address/landlord search
- **AI Red Flags:** OpenAI API for pattern detection across reviews
- **Maps:** Mapbox for geographic landlord search

## Source

X/Twitter — viral landlord complaint threads, r/badlandlord (200K+ members), Zillow renter surveys

## Tags

`renters` `landlord` `reviews` `housing` `verification` `consumer-protection`
