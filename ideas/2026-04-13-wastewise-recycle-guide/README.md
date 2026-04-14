# WasteWise ♻️ — Your Local Recycling Answer

**Scan any item. Get exact instructions for YOUR town. Stop guessing.**

## The Problem

You're holding a pizza box. Greasy bottom, clean lid. Recyclable? It depends on your city. That plastic container with a #5? Your neighbor's town takes it — yours doesn't.

- **78% of consumers** look at labels for recycling info, but **two-thirds leave confused**
- **Recycling contamination rates increased 20%** in the last decade from "wishcycling" (tossing things in hoping they're recyclable)
- Some municipalities have **40% non-recyclable contamination** in blue bins
- **Recycling rules vary by city** based on facility capabilities, contracts, and end markets
- One contaminated item can **send an entire batch to landfill**
- Most people either give up (trash everything) or wishcycle (recycle everything) — both are wrong

**Existing apps fail:** EcoScan gives generic advice. Bower gamifies recycling with rewards but doesn't handle the hard part — the 500+ material-specific, location-specific preparation rules. Your city might require you to remove caps from bottles, flatten cardboard, or bag plastic film separately. No app tells you this.

## The Solution

**WasteWise** is the location-aware recycling instruction manual you never had.

1. **Scan or search** any item (barcode, photo, or text search)
2. **Set your location once** — WasteWise loads your municipality's exact rules
3. **Get step-by-step disposal instructions** — not just "recyclable" or "not recyclable," but:
   - Which bin (recycling, compost, trash, hazardous, specialty)
   - How to prepare it (rinse, flatten, remove label, separate parts)
   - Any special rules (set-out days, drop-off locations, seasonal schedule changes)
   - Nearby drop-off points for items your curbside doesn't accept

## Target Users

- **Environmentally conscious millennials & Gen Z** (want to do the right thing, frustrated by confusion)
- **New homeowners/renters** (moved to a new city, rules changed)
- **Parents** (teaching kids to recycle correctly)
- **Office managers** (setting up workplace recycling)
- **Anyone who's stared at a plastic container wondering "can I recycle this?"**

## Key Features

### Core
- **Item Scanner** — barcode scan + AI photo recognition for any packaging
- **Location-Specific Rules** — enter your ZIP code, get your municipality's actual rules (scraped + verified from 20,000+ US municipal waste programs)
- **Preparation Steps** — rinse, flatten, remove cap, separate materials, bag or loose
- **Bin Selector** — tells you exactly which bin (color-coded matching your local bins)
- **Search** — text search for "pizza box," "styrofoam," "batteries," etc.

### Smart Features
- **Multi-Component Breakdown** — "Separate the plastic lid from the cardboard box. Lid → recycling. Box → compost if food-soiled, recycling if clean."
- **Confusion Busters** — tackles the top 50 most commonly wishcycled items with clear explanations WHY they aren't accepted
- **Drop-Off Finder** — for e-waste, hazardous materials, bulky items, textiles
- **Holiday Schedule** — knows when your pickup changes for holidays
- **Scan History** — remember items you've already looked up

### Social & Impact
- **Household Impact Score** — track your correct recycling streak, estimate environmental impact
- **Confusion Alerts** — "Did you know? Your town JUST started accepting #5 plastics as of March 2026"
- **Community Reports** — report municipal rule changes, flag incorrect info

## Market Research

### Competitors
- **EcoScan** — generic advice, not location-specific
- **Bower** — gamified recycling with rewards, but generic rules
- **iRecycle (Earth911)** — drop-off finder only, no item-level prep instructions
- **Municipal websites** — exist but are PDFs buried in city.gov sites, confusing, rarely updated
- **How2Recycle labels** — on-package labels but only ~30% of products have them

### Differentiation
WasteWise is **location-first + preparation-specific**. It doesn't tell you "plastic #5 is recyclable" (which may be false in your town). It tells you "Tampa, FL: plastic #5 goes in the BLUE bin, rinse and replace cap. Accepted at curbside on Tuesdays."

### Market Size
- 293M+ US residents with access to recycling programs
- 67% of Americans say they'd recycle more if they understood the rules
- Zero dominant consumer app in this space

## Business Model

| Tier | Price | Features |
|-------|-------|----------|
| **Free** | $0 | 10 scans/month, search, basic location rules |
| **Pro** | $2.99/mo | Unlimited scans, drop-off finder, impact score, holiday schedules |
| **Family** | $4.99/mo | Pro + 5 family members, kids mode with simpler instructions |

### Revenue Projections
- Target: 100K free users in Y1, 8% conversion to Pro/Family
- MRR at 8K paid: ~$30K/mo
- Municipal partnerships (white-label for cities): $500-2K/city/yr

## Technical Feasibility

- **Item database:** Open Food Facts (barcode), EPA material classification
- **Municipal rules:** Scrape + verify 20K+ municipal waste program websites (public data)
- **AI recognition:** Fine-tuned image model on packaging types
- **Location:** GPS + ZIP code → municipality lookup
- **Drop-off data:** Earth911 API + Google Places

### MVP Stack
- React Native (iOS + Android)
- Supabase (database + auth)
- Open Food Facts API (barcode lookup)
- Google Vision API (item recognition)
- Municipal rules database (seeded manually for top 100 cities, then crowdsourced)

## Why Now

1. **Contamination crisis** — 20% increase in contamination, cities are cancelling recycling programs
2. **Sustainability mandates** — EU and US cities increasingly requiring proper sorting
3. **AI makes it possible** — image recognition finally good enough for packaging ID
4. **No dominant app** — the space is fragmented between generic tools and municipal PDFs
5. **Climate awareness** — Gen Z and millennials actively want to do better

## Name Alternatives
- WasteWise ♻️
- SortRight
- RecycleLocal
- BinWise

---

*Stop wishcycling. Start knowing.*
