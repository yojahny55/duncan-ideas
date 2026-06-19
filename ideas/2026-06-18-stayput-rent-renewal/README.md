# StayPut — Rent Renewal Negotiation Companion

**Date:** 2026-06-18
**Source:** Web research — housing affordability crisis, rent renewal season June 2026, gap in renter tools
**Status:** Idea Draft + Prototype

---

## Problem Statement

44M+ US households rent. The average rent increase at renewal in 2026 is **5.8%** (Redfin, June 2026) — adding $90–$250/month to already-stretched budgets. **73% of renters accept the first number their landlord offers** (Zillow Consumer Housing Trends Report) because:

1. **They don't know market rates.** Renters have no easy way to pull comps within 0.5 miles for similar units.
2. **They don't know they can negotiate.** Most leases have no built-in negotiation moment — it's a take-it-or-leave-it letter 60 days before lease end.
3. **They don't know their rights.** Rent control, just-cause eviction, renewal notice rules vary by state/city. Tampa renters don't know Florida has no rent control. NYC renters don't know they have 90-day notice rules.
4. **They can't calculate the alternative.** Moving costs $3,000–$8,000 (first/last/security, movers, application fees, overlap rent). Even a $200/month increase is often cheaper than moving — but renters can't see this math.
5. **Negotiation scripts are generic.** "Dear landlord, please don't raise my rent" doesn't work. Renters need data-backed, professional, specific arguments.

**The gap:** Existing renter apps focus on reviews (RentReview), deposits (RenterVault), scams (ListingGuard), or moving (MoveMate). **Nothing helps renters at the renewal moment** — the highest-stakes, most common financial decision they face each year.

---

## Solution

**StayPut** — the renter's renewal negotiation companion. Enter your lease details, get a data-backed negotiation kit in 60 seconds.

### Core Features

1. **Lease Snapshot** — Upload your renewal letter or enter terms manually. StayPut extracts current rent, proposed increase, lease end date, unit details.

2. **Market Comp Engine** — Pulls comparable rentals within 0.5 miles (Zillow, Apartments.com, RentCafe APIs). Shows median rent for your unit type, price per sqft, and where your landlord's offer ranks (e.g., "Your proposed rent is $1,850. Median for 1BR in your area is $1,720. You're being asked to pay 8% above market.").

3. **Negotiation Script Generator** — AI writes a professional, data-cited email tailored to your situation:
   - Long-term tenant (2+ years) → loyalty argument
   - Market below current → market-rate argument
   - Maintenance issues → condition argument
   - Strong payment history → reliability argument
   - Local rent control → legal leverage
   - Multiple arguments combined into one compelling, professional letter

4. **Move vs Stay Calculator** — Real cost comparison:
   - Moving: first + last + security ($4,500 avg), movers ($1,200), application fees ($300), overlap rent ($800), utility setup ($200), time off work ($500)
   - Staying: rent increase × 12 months
   - Break-even analysis: "Moving saves you $2,400/year but costs $7,500 upfront. Break-even: 2.9 years."

5. **Tenant Rights Lookup** — State + city-specific rules:
   - Rent control eligibility
   - Just-cause eviction protections
   - Maximum increase caps
   - Required notice periods (30/60/90 day)
   - Security deposit return rules

6. **Renewal Terms Optimizer** — Beyond price:
   - Longer lease (14 vs 12 months) for rate lock
   - Concessions to request (parking, storage, pet rent waiver, upgraded appliances)
   - Month-to-month flexibility trade-offs

7. **Lease Term Alerts** — 90/60/30-day reminders before lease end so you never miss the negotiation window.

8. **Rent History Vault** — Track every rent payment, increase, and lease term over your tenure. Useful for future applications, disputes, and seeing long-term cost trajectory.

---

## Target Users

| Segment | Size | Pain Level |
|---------|------|------------|
| Urban renters in hot markets (NYC, Miami, Austin, LA, Seattle) | ~15M | 🔴 Critical |
| Renters facing 5%+ renewal increases | ~25M/year | 🔴 Critical |
| First-time renewers (never negotiated before) | ~8M/year | 🟠 High |
| Long-term tenants (3+ years, never renegotiated) | ~12M | 🟠 High |
| Rent-controlled / rent-stabilized tenants | ~5M (NYC, LA, SF, DC) | 🟡 Medium |

**Primary persona:** "Sarah, 31, lives in a 1BR in Tampa. Rent was $1,650, renewal letter proposes $1,795 (+8.8%). She's stressed, doesn't know if that's fair, doesn't know how to push back, and isn't sure if moving is worth it."

---

## Competitive Analysis

| Tool | What It Does | Gap |
|------|-------------|-----|
| **Rentometer** | Paid rent comp reports ($25/report) | No negotiation, no tenant rights, expensive |
| **Zillow Rent Zestimate** | Estimates market rent for an address | No negotiation guidance, landlord-focused |
| **Apartments.com** | Listings + limited rent trends | No renewal help, no negotiation |
| **RentReview (mine)** | Landlord ratings | Different phase — no negotiation |
| **RenterVault (mine)** | Deposit documentation | different phase — move-out |
| **ListingGuard (mine)** | Listing scam detection | different phase — search |
| **MoveMate (mine)** | Moving logistics | different phase — moving |

**StayPut owns the renewal moment** — the highest-leverage decision point that no app addresses.

---

## Differentiation

1. **Renewal-focused, not listing-focused** — Every other renter app is about finding a new place. StayPut is about keeping the place you have.
2. **AI negotiation scripts with real data** — Not generic templates. Each script cites actual comps, your payment history, and local laws.
3. **Move vs Stay math** — The decision framework renters actually need but can't calculate.
4. **Tenant rights built-in** — Most renters don't know their legal leverage. StayPut surfaces it automatically.
5. **Lifetime rent tracking** — Your rent history follows you across apartments, building a long-term financial picture.

---

## Business Model

### Free Tier
- 1 renewal analysis per year
- Basic market comps (3 comparables)
- Standard negotiation template
- Move vs Stay calculator
- Tenant rights lookup

### Pro — $14.99/year (one-time annual, not monthly)
- Unlimited renewal analyses
- Full comp report (10+ comparables with price/sqft trends)
- AI-crafted personalized negotiation email + 2 revisions
- All concessions playbook (parking, storage, pet rent, appliances)
- Rent history vault (unlimited)
- 90/60/30-day renewal alerts
- Lease term optimizer

### Why annual, not monthly?
Renewal is a once-a-year event. Monthly subscription feels like extortion ("pay us every month or lose your home"). Annual feels like a tool you buy when you need it, like TurboTax.

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Frontend** | React + Vite + Tailwind | Fast, modern, portable |
| **Mobile** | React Native (Phase 2) | iOS/Android once MVP validated |
| **Backend** | Node.js + Express | Simple API layer |
| **Database** | Supabase (PostgreSQL) | Auth, RLS, fast iteration |
| **Rent Data** | Zillow API + Apartments.com API + RentCafe | Multi-source comp accuracy |
| **AI** | Claude API (script generation) | Best for professional writing with data citation |
| **Legal Data** | Nolo + state tenant rights databases | Curated, cited, jurisdiction-specific |
| **Auth** | Supabase Auth (Google, Apple, email) | Low friction |
| **Payments** | Stripe (annual subscription) | Standard |
| **Hosting** | Vercel (web) + Supabase (backend) | Generous free tiers |

---

## MVP Scope (8 weeks, solo dev)

**Week 1–2:** Lease intake form + manual comp entry fallback. Tenant rights database for top 20 cities.

**Week 3–4:** Zillow + Apartments.com API integration for automated comps. Move vs Stay calculator.

**Week 5–6:** AI negotiation script generator with Claude. Template library for 8 common scenarios.

**Week 7–8:** Rent history vault, alerts, polish. Stripe integration. Launch in Tampa (Yojahny's backyard — Tampa Bay renters face 7.2% avg increases in 2026).

### Post-MVP (Phase 2)
- React Native mobile app
- Landlord response tracker
- "Should I move?" listing alerts when better deals appear
- Rent prediction (ML on market trends)
- City-specific negotiation playbooks (NYC rent stabilization, SF rent control, etc.)

---

## Market Sizing

- **TAM:** 44M US renter households × $14.99/year = **$659M/year**
- **SAM:** 25M renters facing annual renewals × 15% conversion = **$56M/year**
- **SOM (Year 1):** 50,000 users × 10% paid = **$75K ARR**

---

## Go-To-Market

1. **Tampa launch** — Yojahny's network, local Reddit (r/tampa), local Facebook groups. Tampa renters face above-average increases and have zero local tools.

2. **Reddit strategy** — r/Renters (450K), r/Tenant (180K), r/personalfinance recurring rent questions. Value-first posts: "I built a free tool to check if your rent increase is fair."

3. **TikTok/Reels** — "3 things your landlord doesn't want you to know at renewal time" → drive to free comp check.

4. **Partnerships** — Tenant rights organizations, legal aid societies, university housing offices.

5. **SEO** — "Is my rent increase legal in [city]?" "How to negotiate rent renewal in [city]." High-intent, evergreen content.

---

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| **API costs (rent data)** | Cache comps aggressively, limit free tier to 3, use multi-source fallback |
| **Legal liability (advice)** | Clear "not legal advice" disclaimers, cite sources, link to legal aid |
| **Landlord backlash** | Position as "professional communication tool," not "tenant warfare" |
| **Accuracy of comps** | Show ranges + sources, not single numbers; "verify with your own search" |
| **AI script quality** | Human reviewable templates, not black-box generation; user edits before sending |

---

## Why Now (June 2026)

1. **Rent growth outpacing wages** — 5.8% rent increases vs 3.2% wage growth (BLS, May 2026). Renters are squeezed.
2. **Renewal season peak** — June–September is when 60% of leases renew. Right now is the highest-need moment.
3. **AI script generation is finally good** — Claude/GPT-5 can write professional, situation-specific negotiation emails that don't sound robotic.
4. **Renter tools are fragmented** — No one owns the renewal moment. First-mover advantage available.
5. **Housing affordability is THE political issue** — Media attention, consumer awareness, policy momentum all aligned.

---

## Success Metrics

- **10K free users** in first 6 months (Tampa + Florida expansion)
- **8% free-to-paid conversion** (industry benchmark for utility apps)
- **$40 CAC** via organic Reddit + SEO
- **NPS 50+** (people who save $100+/month will love it)
- **2+ renewal analyses per user per year** (engagement signal)

---

## Vision

StayPut becomes the **default tool renters open when their renewal letter arrives** — as automatic as checking your credit score. Over time, it builds the most comprehensive dataset on actual rent renewals (vs. listings), creating a moat no listing site can replicate.

The mission: **save renters $1 billion collectively** by turning the renewal moment from "accept and stress" into "negotiate with confidence."

---

*Part of [Duncan's Daily App Ideas](../../README.md)*
