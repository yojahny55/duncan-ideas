# TruePrice — Your Personal Price Memory 🏷️

**Date:** 2026-09-30
**Source:** Reddit (r/Frugal, r/povertyfinance, r/EatCheapAndHealthy, r/budgetfood)
**Status:** Concept + Prototype

---

## Problem Statement

Shoppers have no memory of what they *actually* pay — so "sales" are meaningless.

If you normally pay $4.20 for coffee, a sticker reading **"$5.49, was $5.99!"** tells you nothing. Retailers know this and lean into fake anchors: inflated "was" prices, promo theater, and shrinkflated packages that quietly raise the unit price while the sticker stays flat.

**The frustration is documented and recurring:**

> "I want to know the regular price per can, then what is the lowest historical price on sale. What is the best way to do that without creating a manual Excel spreadsheet? I have tried Flipp and ShopSavvy, but they don't do what I want." — r/Frugal, Sep 2025

> "Looking for a way to actually CHECK the price of things at my local grocery store without actually going there first, smh." — r/Frugal, Dec 2025

> "Pen and paper for real. Keep a price book." — top reply, r/Frugal

Existing tools all miss the mark:
- **Flipp / store apps** → show flyers, not *your* baseline
- **ShopSavvy / Honey** → web price comparison, not local grocery memory
- **Spreadsheets / paper price books** → work, but require manual entry every single trip (why people abandon them)
- **GroceryScout-style crowdsourcing** → requires network effects before it's useful to *you*

The missing product is **personal**: day-one value from your own receipts, no crowd needed. A September 2026 trend analysis of Reddit app requests names grocery "price memory" as one of the clearest clusters of unmet consumer demand.

## Solution

**TruePrice** — a receipt-first personal price book that builds itself and grades every "sale" against your real history.

### How it works

1. **Snap the receipt** — OCR extracts items, sizes, and prices in ~3 seconds. No typing. (Manual quick-add fallback.)
2. **It builds your price book automatically** — every trip adds to per-item history: your normal price, your best-ever price, price trend, per store.
3. **Unit-price normalization** — 52oz vs 64oz vs "family size" all reduced to $/oz or $/count, so size tricks can't fool you. Shrinkflation surfaces as a unit-price spike even when the sticker doesn't move.
4. **Sale grading** — in-store or while browsing flyers, check any item and get a verdict:
   - 🟢 **REAL DEAL** — at/below your historical low
   - 🟡 **Meh** — matches what you normally pay; the "was $X" is theater
   - 🔴 **FAKE SALE** — above your normal price; the anchor is inflated
5. **Buy-now / wait alerts** — set a target unit price on staples ("coffee ≤ $0.42/oz"); get pinged when a flyer or your last receipt hits it.

### Why it wins where others failed

- **Zero cold-start problem:** value from your first receipt, unlike crowdsourced price apps
- **The AI disappears into the workflow:** OCR removes the one step (manual entry) that kills every spreadsheet price book
- **Emotional hook:** "FAKE SALE" verdicts are shareable, screenshot-able, and enraging in the best way — built-in virality for r/Frugal

## Target Users

1. **Budget shoppers & frugal families** — r/Frugal, r/povertyfinance; already keeping price books by hand
2. **Inflation-squeezed households** — 2026 tariff economy adds $600–1,500/yr per household; every "sale" now gets scrutinized
3. **Meal-preppers & bulk buyers** — need unit-price math across Costco vs grocery vs club cards
4. **Shrinkflation-aware consumers** — r/shrinkflation crowd who want proof, not vibes
5. **Couponers graduating from complexity** — want savings without the binder lifestyle

**Market size signal:** US grocery spend ≈ $900B/yr; the frugal-shopping subreddit ecosystem runs into millions of members, and the same request threads recur yearly across at least five subreddits — demand that no incumbent has converted.

## Tech Stack

### MVP (matches prototype)
- **Frontend:** PWA — React + TypeScript + Vite (mobile-first, installable, works offline in-store)
- **Local storage:** IndexedDB (via Dexie.js) — receipts and history stay on-device by default; privacy is a feature
- **OCR:** Tesseract.js on-device for MVP; server-side upgrade to a VLM endpoint (e.g., Gemini Flash / GPT-4o-mini class) for crumpled-receipt accuracy
- **Backend (sync + alerts):** FastAPI + Postgres + Redis; S3-compatible storage for receipt images
- **Flyer ingestion:** optional scraper pipeline (Playwright + cron) for the user's 2–3 chosen chains; alerts via push (Web Push / FCM)
- **Hosting:** Fly.io or Railway (cheap), CloudFront for static

### Key engineering notes
- Receipt OCR is a solved-enough problem; the moat is **entity resolution** — mapping "FOLGERS CLSIC DCaf 30.5OZ" across trips to one canonical item. Start with fuzzy matching (RapidFuzz) + user corrections that train the matcher.
- Unit-price extraction: parse size strings ("12 ct", "1.5L", "30.5oz") with a rules engine; fall back to LLM for weird formats.

## Monetization

| Tier | Price | Includes |
|---|---|---|
| **Free** | $0 | 2 stores, 50 tracked items, manual entry + 3 receipt scans/mo, sale grading |
| **TruePrice+** | $3.99/mo or $29.99/yr | Unlimited receipts & items, cross-store comparison, price-drop alerts, household sharing, CSV export |
| **Data licensing (later)** | B2B | Aggregated, opt-in, anonymized local price intelligence sold to CPG brands / market researchers (the Nielsen/IRI wedge, built from real receipts) |

**Why it converts:** the free tier hooks them with the first "FAKE SALE" caught; the paid tier is the alerts + unlimited receipts. $3.99/mo is below one average basket — easy justification. Affiliate flyer links (Instacart/Walmart) as secondary revenue without touching user data.

**Benchmarks:** ShopSavvy (millions of users, barcode-compare model), Flipp (17M+ weekly users on flyers) — both monetize at scale; neither owns *personal* price memory.

## Prototype

See `prototype.html` — a working single-file demo with:
- Your price book with historical baselines (normal price, all-time low, trend sparkline)
- Unit-price normalization across package sizes
- **Sale Checker**: enter a shelf price → instant REAL DEAL / MEH / FAKE SALE verdict vs your history
- Receipt quick-add flow simulation
- Fully offline, vanilla HTML/CSS/JS

## Roadmap (if pursued)

1. **Week 1–2:** PWA shell + manual price book + sale grading (prototype → production)
2. **Week 3–4:** Receipt OCR with Tesseract.js, fuzzy item matching
3. **Month 2:** VLM receipt parser, cross-store compare, price alerts
4. **Month 3:** Household sharing, flyer ingestion for top 5 chains, launch on r/Frugal + Product Hunt
5. **Month 6:** Evaluate B2B aggregated-price product

## Risks & Mitigations

- **OCR accuracy on bad receipts** → hybrid on-device + VLM pipeline; every scan editable before commit
- **Item matching errors** → corrections train the matcher; show confidence, never silently merge
- **Incumbent copycats (Flipp, store apps)** → they're structurally conflicted: retailers won't let their own apps call sales "FAKE." Independence is the moat.
- **Data privacy concerns** → on-device-first by design; cloud sync opt-in

---

*Sources: r/Frugal threads (Sep 2025, Dec 2025), r/povertyfinance price-book threads, r/EatCheapAndHealthy, r/budgetfood, StealWhatWorks Reddit app-demand analysis (Sep 2026).*
