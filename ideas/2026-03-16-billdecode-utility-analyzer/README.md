# BillDecode — AI Utility Bill Analyzer 🔍⚡

> Upload your utility bill. Get plain-English breakdown, overcharge detection, and rate optimization recommendations in seconds.

## Problem Statement

Utility bills are deliberately confusing. The average American household spends **$2,060/year** on electricity alone, yet most people can't explain what half the line items on their bill mean. Rate riders, fuel adjustment charges, demand charges, tiered pricing — it's designed to be opaque.

**Real pain points:**
- **67% of consumers** say they don't understand their utility bill (J.D. Power 2025)
- **$1.5 billion** in utility billing errors go uncontested annually (NARUC estimate)
- Most people are on the **wrong rate plan** — utilities offer 3-8 plans but default you to the most expensive
- Deregulated markets (TX, OH, PA, etc.) have **200+ retail energy plans** — impossible to compare manually
- Solar/EV owners get complex time-of-use bills they can't decode

**Existing solutions fail:**
- Arcadia/OhmConnect focus on clean energy, not bill analysis
- Utility company "bill explainers" are biased (they won't tell you you're overpaying)
- Bill audit services exist for businesses ($500-2,000+), nothing consumer-grade
- EnergySage is solar-specific, not general bill analysis

## Target Users

| Segment | Size | Pain Level | Willingness to Pay |
|---------|------|------------|-------------------|
| Homeowners | 85M US | High | $5-15/mo |
| Renters in deregulated markets | 25M US | Very High | $3-10/mo |
| Solar/EV owners | 5M US | Extreme | $10-20/mo |
| Small landlords (multi-unit) | 3M US | High | $15-30/mo |
| Small business owners | 6M US | High | $20-50/mo |

**Primary persona:** Sarah, 34, homeowner in Texas. Got a $380 electricity bill last month. Has no idea if that's normal, if she's on the right plan, or if there are errors. Spends 20 minutes staring at the bill, gives up, pays it.

## Proposed Solution

**BillDecode** — snap a photo or upload a PDF of your utility bill. AI extracts every line item, explains it in plain English, compares to benchmarks, detects anomalies, and recommends the optimal rate plan.

### How It Works

1. **Upload** — Photo, PDF, or connect utility account directly (Green Button API)
2. **Decode** — AI OCR extracts every charge, fee, and rate
3. **Explain** — Plain-English breakdown: "This $14.23 'fuel adjustment charge' is a pass-through for natural gas prices. It went up 23% from last month because of winter demand."
4. **Analyze** — Compare against neighbors, historical data, and rate plan options
5. **Recommend** — "Switching to TOU-D plan would save you $47/month based on your usage pattern"

## Key Features

### Core (MVP)
- 📸 **Bill Scanner** — OCR for 200+ utility bill formats (electric, gas, water, sewer)
- 📝 **Plain-English Decoder** — Every line item explained like a friend would
- 🚨 **Anomaly Detection** — Spikes, errors, unusual charges flagged automatically
- 📊 **Rate Plan Optimizer** — "You're on Plan A, but Plan C would save $540/year"
- 📈 **Historical Tracking** — See trends, seasonal patterns, year-over-year comparisons

### Growth Features
- 🏘️ **Neighbor Benchmark** — "Your usage is 30% above average for a 2BR in your zip code"
- ⚡ **Deregulated Market Navigator** — Compare 200+ retail plans in TX, OH, PA, etc.
- 🔔 **Bill Alerts** — Predicted bill amount before it arrives based on smart meter data
- ☀️ **Solar/EV Intelligence** — Time-of-use optimization, net metering analysis
- 🏢 **Landlord Mode** — Track bills across multiple properties, catch tenant-caused spikes
- 📋 **Dispute Generator** — Auto-generate complaint letters for billing errors

## Market Research

### Similar Solutions (and why they fall short)

| Product | Focus | Price | Gap |
|---------|-------|-------|-----|
| Arcadia | Clean energy matching | Free | Doesn't analyze/explain bills |
| OhmConnect | Energy reduction rewards | Free | Gamification, not analysis |
| EnergySage | Solar marketplace | Free | Solar-only |
| Sense | Real-time monitoring | $299 hardware | Requires hardware install |
| Bidgely | Utility-side analytics | B2B only | Not consumer-facing |
| Utility Billing Auditors | Full bill audit | $500-2K | Business-only, expensive |

### Differentiation
- **Consumer-first** — No existing tool gives consumers a plain-English bill breakdown
- **No hardware required** — Just a photo of your bill
- **Actionable** — Don't just explain, recommend specific savings actions
- **Cross-utility** — Electric, gas, water, sewer — all in one place
- **AI-native** — LLM-powered explanations that adapt to your knowledge level

### Market Size
- **TAM:** 130M US households × $10/mo = $15.6B/year
- **SAM:** 25M households in deregulated markets = $3B/year
- **SOM:** 250K early adopters × $8/mo = $24M ARR (Year 3 target)

## Technical Architecture

```
┌─────────────┐    ┌──────────────┐    ┌─────────────────┐
│  Bill Upload │───▶│  OCR Engine  │───▶│  AI Extraction  │
│  (Photo/PDF) │    │  (Tesseract/ │    │  (GPT-4V/       │
│              │    │   Azure CV)  │    │   Claude Vision) │
└─────────────┘    └──────────────┘    └────────┬────────┘
                                                │
┌─────────────┐    ┌──────────────┐    ┌────────▼────────┐
│  Rate Plan   │◀──│  Analysis    │◀──│  Data Normalize  │
│  Optimizer   │   │  Engine      │    │  (200+ formats)  │
└──────┬──────┘    └──────┬───────┘    └─────────────────┘
       │                  │
       ▼                  ▼
┌─────────────────────────────────────┐
│         Dashboard / Report          │
│  Plain-English • Savings • Alerts   │
└─────────────────────────────────────┘
```

### Tech Stack
- **Frontend:** React Native (mobile-first) + Next.js (web)
- **OCR:** Azure Computer Vision + Claude Vision for complex bills
- **AI:** Claude/GPT-4 for natural language explanations
- **Data:** PostgreSQL + utility rate databases (OpenEI, URDB)
- **APIs:** Green Button (utility data), EIA (energy pricing)

## Revenue Model

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 3 bill scans/month, basic explanations |
| Plus | $7.99/mo | Unlimited scans, rate optimization, alerts |
| Pro | $14.99/mo | Multi-property, dispute generator, API access |
| Family | $19.99/mo | Up to 5 households, shared dashboard |

**Additional revenue:**
- Affiliate commissions from energy plan switches ($25-75 per switch)
- B2B API for property managers and real estate platforms
- Anonymous aggregated data for energy market research

## Competitive Moat

1. **Bill format library** — Every new bill format processed makes the system smarter
2. **Rate plan database** — Comprehensive rate structure data across all US utilities
3. **Usage pattern intelligence** — ML models that predict bills and detect anomalies
4. **Trust** — Consumer-side advocacy (unlike utility-funded tools)

## Go-to-Market

1. **Launch:** Texas (deregulated, highest pain) → viral TikTok/Reddit content ("I found $840 in savings on my electric bill")
2. **Content:** "Bill roasts" — dramatic readings of absurd utility charges
3. **Partnerships:** Real estate agents (new homeowner gift), solar installers (pre-sale analysis)
4. **PR:** "Americans overpay $X billion on utility bills" data reports

## Prototype

See `prototype/` folder for interactive HTML/CSS/JS demo.

---

*Researched and documented by Duncan ⚔️ — March 16, 2026*
*Source: Web Research (Micro-SaaS trends, consumer energy pain points, utility billing analysis)*
