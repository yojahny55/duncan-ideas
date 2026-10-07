# TipCheck 💸

**Know before you tap: crowdsourced tip-screen intelligence, pre-added-gratuity detection, and a guilt-free tip budget.**

## Problem Statement

Tipping in America has become a minefield of confusion, guilt, and outright deception:

- **Guilt screens everywhere.** Digital payment terminals now prompt 20/25/30% tips at coffee shops, self-checkouts, bakeries, and retail counters — places where tipping was never the norm. The prompt itself creates social pressure while the person across the counter watches you choose.
- **Pre-added gratuities hiding in plain sight.** r/tipping this month: *"Tip added on my subway order and the worker wouldn't refund me. Advice?"* and *"Chilis is scamming their customers"* — chains quietly auto-adding 18–20% (sometimes on top of a tip screen), customers double-tipping or getting refused refunds.
- **Nobody agrees on the rules.** Etiquette advice is scattered across Reddit threads, TikTok, and contradictory articles. There is no single, fast, trustworthy answer for "do I tip here, and how much?"
- **It's costing real money.** Tipflation means Americans who tip "correctly" everywhere now spend hundreds more per year than a decade ago — and many have no idea where that money goes.

### Evidence of Demand (Reddit-sourced, Oct 2026)

- **r/tipping** (top this month): "Chilis is scamming their customers" · "Tip added on my subway order and the worker wouldn't refund me" · "Europe Just Made Me Realize How Fucking Stupid Tipping Culture Is" · "Confession: I've been on multiple cruises and have removed the gratuities every single time"
- **r/mildlyinfuriating** (top this week): "These tips options" (screenshot of an absurd tip prompt) — same recurring genre: hidden fees, sensor fridges, tipping screens
- **Bankrate 2025 survey**: 63% of US residents view tipping negatively; 41% say it's "gotten out of control"
- **Trade press (Sept–Oct 2026)**: "10 Places Americans Are Getting Tired of Being Asked to Tip in 2026"; multiple chains actively dialing back default prompts because customer frustration became impossible to ignore — merchants themselves now want data on how their tip screens are perceived
- Adjacent validation in this repo: **CancelScore** (crowdsourced difficulty ratings) and **TruePrice** (price memory + fake-sale grader) — same "transparency for asymmetric consumer experiences" pattern

## Solution

A consumer-first PWA with four parts:

1. **The Verdict** — instant, opinionated answer for any situation. Pick scenario (coffee counter, self-checkout, takeout pickup, sit-down, delivery, salon, hotel bar, rideshare…) → verdict badge (**Tip expected / Optional / No tip needed**), typical range, and a one-line *why*. Offline-capable, designed for the 10-second moment of panic at the counter.
2. **Merchant Intel** (crowdsourced, CancelScore-style) — per-chain/per-location reports: what % the terminal prompts, whether gratuity is **pre-added**, whether staff pressure you, refund experiences. Users submit a report in <60 seconds. Aggregated into a simple score: 🔴 aggressive / 🟡 normal / 🟢 fair.
3. **Receipt Scan** — snap the receipt; on-device OCR flags **pre-added gratuity / service charges**, detects double-tip traps (auto-grat + tip screen), and computes a fair total. "You already tipped 18% — $0 extra is correct."
4. **Tip Budget** — set a monthly tip allowance, log tips in one tap, watch the progress bar. Turns a diffuse guilt tax into a number you control. Includes yearly "where your tips went" breakdown by category/merchant.

### Positioning

Not anti-worker, anti-confusion. The app explicitly distinguishes **situations where tipping genuinely supports workers** (sit-down service, delivery, salon) from **manufactured guilt prompts** (self-checkout, retail counters) and **deceptive practices** (undisclosed pre-added gratuity). That nuance is exactly what Reddit threads keep re-litigating — and what no existing tool encodes.

## Target Users

- **Primary: confused consumers 20–45** — the "do I tip at a counter?" demographic; heavy card/phone payers who hit tip screens 5–15×/week
- **Budget-conscious tippers** — want to be generous *strategically*, not reflexively; care about where money actually goes
- **Travelers** — norms differ wildly by country/state; "Travel Mode" with 40+ country etiquette packs
- **Secondary (data side): merchants & POS companies** — anonymous aggregate reports of how tip-screen defaults are perceived; chains are already dialing back prompts and need evidence

## Tech Stack

- **Frontend:** PWA — React + Vite + Tailwind (or vanilla for MVP), installable, offline-first verdict engine via IndexedDB/service worker
- **Receipt OCR:** on-device first (Tesseract.js / Google ML Kit text recognition) with optional cloud fallback (Azure Document Intelligence) for hard receipts; privacy: images never leave device by default
- **Backend:** FastAPI (Python) or Node/Express; Postgres for merchant reports + aggregates; Redis for rate limiting report submissions
- **Anti-abuse:** device attestation + submission throttling + chain-level moderation queue (learn from CancelScore/Yelp review-gaming)
- **Auth:** magic-link/email or passkeys (no friction at the counter)
- **Deploy:** Fly.io or Railway + CloudFront; GitHub Actions CI

## Monetization

- **Free:** verdict engine, merchant intel browsing, 3 receipt scans/month, basic budget
- **Pro — $2.99/mo or $19.99/yr:** unlimited receipt scans, tip budget + yearly breakdown, Travel Mode country packs, pre-added-gratuity alerts by chain (watchlist: "notify me if Subway adds auto-grat in my state")
- **B2B data (later, anonymized aggregates):** "Tip Screen Sentiment Report" for merchants/POS vendors — they're actively changing defaults in 2026 and lack consumer-perception data. Sell as quarterly reports, not raw data.
- **No ads from payment/tip companies** — that would nuke trust, the entire moat.

## MVP Roadmap

1. **Week 1–2:** Verdict engine (static dataset of ~30 scenarios, opinionated copy) + tip calculator — ships as pure static PWA, no backend
2. **Week 3–4:** Merchant Intel submission + browsing (Postgres, moderation queue), seed with 200 known chains from Reddit threads
3. **Week 5–6:** Receipt OCR with pre-added-gratuity detection (the viral feature — "scan your receipt, find the hidden tip")
4. **Week 7–8:** Tip budget + launch on r/tipping, r/personalfinance, r/frugal (content: "we catalogued every chain that pre-adds gratuity")

## Risks

- **Crowdsourced data gaming** — merchants flooding their own ratings; mitigate with device attestation, submission velocity caps, transparent methodology
- **Reddit toxicity spillover** — reviews becoming worker-bashing; mitigate with structured report fields (prompt %, pre-added y/n) instead of free-text reviews
- **Legal** — defamation risk on merchant claims; structured factual fields + "user-reported" labeling + takedown process
- **OCR accuracy** on crumpled thermal receipts; on-device ML Kit is decent but plan manual-confirm UX

## Prototype

`prototype.html` — single-file interactive prototype: scenario verdict engine, tip calculator with pre-added-gratuity warning, merchant intel feed, and localStorage tip budget tracker.

---

*Generated 2026-10-07 by Duncan's daily Reddit-trend cron. Source signals: r/tipping (week/month top), r/mildlyinfuriating (week top), Bankrate tipping survey, Sept–Oct 2026 tipflation coverage.*
