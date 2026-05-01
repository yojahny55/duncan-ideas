# RecallShield — Personal Product Recall Monitor

## The Problem

You own hundreds of products. Some get recalled — for **safety reasons**. You almost never hear about it.

- **400+ recalls per month** in the US alone (CPSC, FDA, NHTSA, USDA)
- Product recalls **surged 25% in 2025**, hitting the highest level in a decade
- Most consumers learn about recalls **by accident** — if at all
- **Only ~15-20% of recalled products are ever returned or fixed** (CPSC data)
- The rest stay in homes: faulty electronics, contaminated food, dangerous kids' toys, recalled car parts
- Government recall sites are scattered across **4+ agencies**, each with different interfaces
- Amazon added recall alerts, but **only for things bought on Amazon**
- Recall text scams are now spreading (Consumer Reports warned April 2026) — consumers don't trust random alerts

**Nobody aggregates every recall source and matches it to what you actually own.**

## Target Users

- **Parents** — kids' products are the most frequently recalled category (toys, furniture, car seats, formula)
- **Car owners** — NHTSA recalls affect millions; many drivers ignore mailed notices
- **Home cooks** — food recalls (E. coli, salmonella, listeria) happen weekly
- **Anyone with appliances/electronics** — fire hazards from recalled devices kill ~300 people/year
- **Pet owners** — pet food recalls are frequent and dangerous
- **276M+ registered vehicle owners**, **130M+ households** with consumer products

## Proposed Solution

**RecallShield** — register products you own, get matched recall alerts instantly.

1. **Add products** — scan barcode, type brand/model, or import purchase history (Amazon, email receipts)
2. **Continuous monitoring** — aggregates CPSC, FDA, NHTSA, USDA, and EPA recall feeds in real-time
3. **Matched alerts** — only notify when a recall affects something YOU own (not generic firehose)
4. **Actionable guidance** — severity level, what to do, direct links to manufacturer remedy (refund, repair, replacement)
5. **Remedy tracker** — track your claim status, deadline reminders before remedy windows close
6. **Household mode** — protect your whole family's products in one account
7. **Food recall checker** — scan pantry items during recalls, get instant match

## Key Features

### Core
- **Product inventory** — add by barcode scan, photo recognition, manual entry, or email import
- **Real-time recall matching** — cross-reference 5+ government databases against your inventory
- **Severity-rated alerts** — 🔴 Critical (stop using immediately) → 🟡 Advisory (check details) → 🟢 Informational
- **Remedy wizard** — step-by-step: fill form, print label, schedule pickup, track resolution
- **Deadline tracker** — remedy windows expire; never miss your chance for refund/repair

### Smart
- **Category auto-subscribe** — own a crib? Get ALL infant product recalls automatically
- **Vehicle VIN lookup** — enter VIN, get all open recalls + NHTSA safety ratings
- **Pantry scan mode** — during food recalls, scan your pantry items to check instantly
- **Email receipt parser** — forward Amazon/receipt emails, auto-adds products to inventory
- **Neighborhood alerts** — see recalls trending in your area (useful for food/water advisories)

### Trust & Safety
- **Source-verified** — every alert links to the official government recall page
- **No scam vectors** — RecallShield never asks for payment info to claim remedies; always links to official sources
- **Privacy-first** — product data stays on-device; only recall matching happens server-side

## Market Research

### Competitors
- **Recalls.gov** — government portal, no personalization, no alerts, 2003-era UX
- **CPSC app** — firehose of ALL recalls, no filtering by "what I own"
- **Amazon recall alerts** — Amazon purchases only, misses everything else
- **Cars.com / NHTSA VIN lookup** — cars only, manual, no ongoing monitoring
- **Smart.Check (.food)** — food recalls only, paid, no product inventory

### Differentiation
RecallShield is the **only product that builds a personal inventory and cross-matches against all recall sources**. Everything else is either:
- A firehose (all recalls, no filtering)
- Single-category (food only, cars only)
- Single-retailer (Amazon only)

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 20 products, vehicle VIN lookup, weekly digest |
| Shield | $3.99/mo | Unlimited products, real-time alerts, remedy tracker, email import |
| Family | $6.99/mo | Everything in Shield + household sharing, pantry scan, category auto-subscribe |

## Technical Feasibility

- Government APIs are **free and public** (CPSC, FDA, NHTSA, USDA all have open data)
- Barcode databases are accessible (Open Food Facts, UPCitemdb)
- OCR for receipt parsing is mature
- VIN decode APIs are cheap/free
- All doable as a solo dev in 2-3 months

## Market Size

- 131M US households, average owns **300+ products** worth monitoring
- **400+ recalls/month** = ~5,000/year across all agencies
- Only 15-20% of recalled items are remediated — **80% stay in homes as hazards**
- Product recalls cost companies **$10B+/year**; consumers bear the risk of NOT knowing
- Insurance industry estimates **$1.5B+ in preventable property damage** from recalled-but-unremediated products

## Why Now

- Recalls hit **decade-high levels in 2025** and continue rising
- Tariff-driven cost-cutting may increase quality issues → more recalls
- Recall **text scams** (April 2026) prove consumer demand exists but trust is broken — a verified, source-backed app fills the gap
- Government modernization efforts (CPSC API v2) making data more accessible than ever

---

*A recalled product you don't know about is a danger in your home. RecallShield makes sure you know.*
