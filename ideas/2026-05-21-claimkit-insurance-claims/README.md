# ClaimKit 🏠📋 — Insurance Claim Documentation Helper

> **Don't let poor documentation cost you thousands.**

## The Problem

**1 in 3 homeowners insurance claims are denied.** The #1 reason? Insufficient documentation. When disaster strikes (water damage, storm, theft, fire), you're stressed, panicked, and in no state to think about what photos to take, what receipts to gather, or what your policy actually covers.

Homeowners lose **$8,000-$50,000+** on denied or underpaid claims because they:
- Don't photograph damage correctly (missing angles, no scale reference)
- Forget to document damaged items before disposal
- Can't find receipts or proof of ownership
- Don't understand their policy coverage limits
- Miss filing deadlines (typically 60 days)
- Accept lowball first offers without knowing their rights

Existing solutions only help **before** disaster (home inventory apps like Everspruce, Encircle) or are full-service public adjusters who take 10-20% of your settlement. **Nobody guides you through the claim process itself with step-by-step documentation checklists.**

## The Solution

**ClaimKit** is your pocket insurance claim assistant. Open it the moment damage happens, and it walks you through exactly what to document, how to photograph it, what to say (and NOT say) to your adjuster, and tracks your entire claim timeline.

### Core Features

1. **📸 Damage Photo Guide** — Step-by-step photo checklist per damage type (water, fire, storm, theft, hail). "Take wide shot of room → close-up of damage → measure with tape measure in frame → show where water entered → photo of damaged items." AI analyzes your photos and flags gaps ("you're missing proof of the ceiling damage in the living room").

2. **📋 Claim Checklist** — Dynamic checklist based on your claim type and state. Policy review, mitigation steps, documentation deadlines, forms to file. Never miss a step.

3. **💰 Item Valuation Helper** — Log damaged/destroyed items, AI estimates replacement cost from current market data, flags items likely under-valued by adjusters. Links to comparable listings as proof.

4. **📝 Communication Tracker** — Log every call/email with your insurance company. Auto-generates follow-up emails. "Adjuster said X on May 15" becomes searchable evidence.

5. **⏰ Deadline Monitor** — Visual timeline with all claim deadlines. Initial filing, proof of loss, supplement deadline, statute of limitations. Push alerts before each deadline.

6. **📄 Claim Package Generator** — One-tap export of complete claim package: all photos, itemized inventory with values, communication log, timeline, and supporting documentation as organized PDF.

7. **🤖 AI Claim Analyzer** — Paste or photograph your policy declarations page. AI explains your coverages, deductibles, limits, and exclusions in plain English. Flags potential coverage for your specific damage type.

## Target Users

| Segment | Size | Pain |
|---------|------|------|
| Homeowners filing claims | 6M+ claims/year in US | Don't know the process, make documentation mistakes |
| Renters with renter's insurance | 44M insured renters | Even less familiar with claims, smaller claims mean no lawyer help |
| Flood/hurricane/storm victims | 500K+ annually | Overwhelmed, high-stress, mass-claim situations |
| Small business property claims | 2M+ businesses | Commercial policies even more complex |

**Primary:** First-time homeowners dealing with property damage (25-45 years old). They've never filed a claim, don't know the process, and are vulnerable to insurance company tactics.

## Market Research

### Competition
- **Home inventory apps** (Everspruce, Encircle, Sortly) — Pre-disaster only. Help you catalog belongings, not file claims.
- **Public adjusters** — Take 10-20% of settlement ($3K-$20K on a typical claim). ClaimKit = DIY adjuster in your pocket.
- **Insurance company apps** — Designed for THEIR benefit, fast-track to quick (low) settlements.
- **Nolo/LegalZoom** — General legal info, not claim-specific guidance.

### Differentiation
ClaimKit is the **only** app that sits on YOUR side of the claims process:
- Pre-disaster: inventory apps ✓, ClaimKit ✗
- During filing: inventory apps ✗, ClaimKit ✓
- Post-denial: lawyers ✓, ClaimKit ✓ (appeal guidance)
- Cost: adjusters take 10-20%, ClaimKit = $4.99-9.99/mo

### Market Size
- US property & casualty insurance: $800B+ market
- 6M+ homeowners claims filed annually
- Average claim payout: $15,000
- 30% denial rate = 1.8M denied claims/year
- Even a 10% improvement in claim outcomes = $2.7B value created

### Why Now
- 2024-2026: Record hurricane/wildfire seasons driving unprecedented claim volumes
- May 2026: "1 in 3 claims denied" headlines across US media
- AI-powered photo analysis and document generation finally mature enough
- Growing consumer awareness of insurance company tactics (social media exposure)

## Business Model

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 1 active claim, basic photo checklist, deadline tracker |
| **ClaimKit Pro** | $4.99/mo | Unlimited claims, AI photo analysis, item valuation, communication log, claim package PDF |
| **ClaimKit Premium** | $9.99/mo | Everything in Pro + AI policy analyzer, appeal letter generator, contractor estimate comparison, priority support |

**Revenue projection:** If 0.1% of annual claimants subscribe to Pro ($4.99/mo × 12 × 6,000 = $359K/year). At 1% adoption: $3.6M/year.

## Technical Feasibility

- **Photo guidance:** Template-based checklists per damage type (static content + AI vision for gap analysis)
- **Item valuation:** Product search APIs + eBay/Amazon price data
- **Deadline tracking:** State-specific insurance regulations database + local calendar
- **PDF generation:** Client-side document assembly
- **AI policy analyzer:** LLM-based document parsing (policy PDF → plain English summary)
- **Stack:** React Native or Flutter (mobile-first), Firebase/Supabase backend, OpenAI Vision for photo analysis

## Future Expansion

- **ClaimKit for Auto** — Car accident claim documentation
- **ClaimKit for Health** — Medical billing dispute helper
- **Contractor Network** — Verified restoration/repair pros
- **Pre-claim Policy Review** — Annual policy checkup before you need it
- **Community Forum** — Share claim experiences by insurance company

## Name Ideas

- ClaimKit ✅ (friendly, tool-focused)
- ClaimCoach
- ClaimSense
- FairClaim
- ClaimBuddy

---

*The average homeowner files 1-2 claims in their lifetime. ClaimKit makes sure they do it right.*
