# BillDelta 🧾 — Your Bill Went Up. Here's Exactly Where.

> **"Your usage didn't change. Your bill went up $23.40. BillDelta reads the bill itself — line by line, month by month — and shows you exactly what crept, which lines are junk fees, and the script that actually gets them removed."**

**Date:** 2026-10-31
**Source:** Reddit — r/povertyfinance weekly top "I'm getting really fkng sick of paying for things I already paid for" (Oct 2026) + r/SomebodyMakeThis "What's one everyday problem you wish someone would actually solve?" (Oct 2026)
**Category:** Consumer Fintech / Bill Intelligence / Fee-Creep Auditing

---

## Problem Statement

This week's r/povertyfinance top post is a wall of text titled **"I'm getting really fkng sick of paying for things I already paid for."** The OP enumerates it: *"I'm already paying for a phone every month, which has internet. Now I need internet at home? ... Insurance. My life is insured (why though, when I have no one?). Car needs it (or can't drive), apartment requires it (or can't...)"* The top replies pile on with the same theme from a different angle:

- *"Buying the lowest tier of a streaming app but you still have to sit through ads kills me, **I'm already paying for this**."*
- *"Paying for utilities that increase because the companies decide the **delivery fee** needs to go up **even though my usage hasn't changed**."*
- *"Paying for internet that increases because the company wants to make more money but didn't offer m[e anything new]."*
- *"Everything I want to watch is scattered across 4-5 different [services]. I've cancelled all but one."*

This is the **fee-creep economy**, and it's a structural tax on attention:

1. **Bills rise silently, line-item by line-item.** The headline rate stays flat (regulators and PR depend on it); the growth happens in "delivery fees," "network access fees," "administrative recovery fees," "broadcast TV surcharges," and promo-price expirations. Nobody can name three line items on their own internet bill — that's the design.
2. **The bank feed can't see it.** Every mainstream tool (Rocket Money, Trim/OneMain MyMoney, bank apps' "subscription insights") works off **transaction totals**: `COMCAST $94.99`. The fee anatomy lives inside the PDF/paper bill, which those tools never parse. Rocket Money can tell you *that* you pay Comcast; it structurally cannot tell you *why it went up $23*.
3. **Negotiation concierges take a cut and solve a different problem.** Billshark/Trim negotiate on your behalf for **30–60% of the savings** — a success-fee model that (a) costs you half the win, (b) mostly targets headline rates, and (c) never hands you the durable skill or evidence: *your own bill history*.
4. **Proof exists that people want the audit, not the concierge.** BillCreep.com (April 2026) is an *editorial blog* — "named fees, 2026 data, negotiation scripts, and a 50-item audit checklist" — ranking for this intent with **zero product behind it**. The FTC's junk-fee rule saga and state all-in pricing laws keep this in the news cycle monthly.
5. **The emotional core is dignity, not dollars.** The Reddit thread isn't really about $23. It's about *being played* — paying for things you already paid for, increases you didn't agree to, ads on the tier you pay for. The product that wins here validates that feeling with receipts.

**Nobody owns the "why did this bill go up" moment.** Subscription trackers own the *cancel* moment. Negotiators own the *call* moment. The audit — line-item deltas over time, fee classification, and evidence-backed disputes — is an unclaimed wedge.

## Target Users

- **Bill-payers with recurring utility/telecom/streaming bills** (i.e., every adult) — especially renters and families for whom a $20/mo creep is a real budget hole (the r/povertyfinance crowd: high pain, high share rate, zero loyalty to concierge fees)
- **The "I already pay for this" crowd** — streaming-ads-on-paid-tier, fee-on-fee internet and phone plan holders
- **Households on tight budgets** — the audit is free labor replaced by OCR; no bank credentials required (huge trust advantage over Rocket Money in privacy-conscious and low-trust communities)
- **Small landlords / roommates splitting bills** — multi-account tracking and per-unit history
- **Year-2:** consumer advocates, legal aid orgs, journalists (the crowd fee database is a research goldmine — "show every junk fee Comcast added in Florida in 2026")

## Proposed Solution

**BillDelta** = receipt-ledger for your recurring bills + fee anatomy engine + dispute kit. **Snap the bill, get the delta.**

### 1. Bill Snap 📸 (the ingest)
- Photograph, upload PDF, or **forward the bill email** to `you@billdelta.app` — no bank credentials, no Plaid, ever. That's the trust pitch: *"We never touch your bank. We only read the bill you hand us."*
- On-device OCR + LLM extraction into a normalized line-item schema: `{name, amount, category, first_seen, provider, period}`.
- Auto-matches to provider templates (the top ~200 US providers cover most bills); community-maintained templates on GitHub like a Homebrew formula list.

### 2. Delta Engine (the core screen)
- Side-by-side this month vs. last month vs. 12 months ago.
- Every line classified: **Usage** (kWh, GB, minutes — actually changed), **Rate** (same thing, higher price), **New Fee** (appeared out of nowhere — flagged 🔴), **Promo Expired** (the classic "your $49.99 intro ends" moment), **Tax/Regulatory** (usually legit, shown in calm grey).
- The one number that matters: **Creep** — *"Your total rose $23.40 (+18.8%) over 12 months while usage stayed flat. $14.99 of that is fees."*

### 3. Fee Anatomy (the crowd moat)
- Every parsed line item is matched against the **crowd-verified Fee Database**: what is this fee, is it negotiable, is it legally required, what do other users report?
- Example entry: *"Xfinity 'Network Access Fee' — not required by law, not pass-through. Dispute success rate: 71% (n=2,841). Winning script: request loyalty credit + cite promo terms; escalate to retention."*
- Every user's snap enriches the database → every query gets smarter. Unbootstrapable without users; useless to copy without the corpus. (Same playbook as PityTrack's odds tables and InReview's percentile telemetry — the house moat.)

### 4. Dispute Kit (the payoff)
- Per flagged fee: plain-language explanation → generated dispute script (phone + chat + written letter) prefilled with *your exact line items and 12-month history* → crowd success rate → escalation ladder (retention → corporate → state AG / FCC complaint with links).
- Track outcomes: won $8.99/mo → the app books your **annualized recovery** ("BillDelta has recovered $187/yr for you") — the retention number.

### 5. Creep Receipts (the viral loop)
- Spotify-Wrapped for fee creep: a shareable receipt card — *"12 months with Verizon Fios: +$31.08 creep. 3 new fees. 0 usage changes. I paid for things I already paid for."*
- The Reddit thread's own language becomes the marketing. r/povertyfinance, r/frugal, r/CablePorn (ironically) share these natively.
- Public **Fee Leaderboards**: most-disputed fees of the month, biggest creep by provider — SEO magnets for "why did my X bill go up" (currently owned by forums and one blog).

### 6. Household & Reminder layer
- Multiple accounts, roommates, landlords; "promo ends in 21 days" early warnings (the creep you can still dodge); annual "State of Your Bills" review every January.

## Why existing tools don't cover this

| Tool | Model | Why it misses |
|---|---|---|
| **Rocket Money** ($7–14/mo) | Bank-feed aggregator + human negotiation | Sees totals, never line items; wants your bank credentials; negotiation costs 30–60% of savings |
| **Billshark / Trim (OneMain MyMoney)** | Success-fee negotiation concierge | Same blind spot; takes 40%+; no durable history or education; churns after the one call |
| **BillCreep.com** | Editorial blog + checklist | Proves demand, ships nothing; static data, no personal bills |
| **Bank app "insights"** | Transaction categorization | `COMCAST $94.99` — end of story |
| **Utility comparison sites** | Switch-provider lead gen | Optimize the headline rate, ignore the fee anatomy; incentive = affiliate payouts |
| **CancelMySubs family** (SubSlayer etc.) | Subscription cancellation | The *cancel* moment; can't help with bills you can't cancel (internet, power, water) |

**BillDelta is the inverse of the concierge:** flat-priced, document-based, credential-free, and it hands you the evidence and the script instead of pocketing half your win.

## Monetization

- **Free forever:** 3 bills, 6-month history, Delta Engine, Fee Anatomy lookups (5/mo), 1 Creep Receipt/mo. Generous because *density of snaps is the product* — the crowd fee DB is the moat, so free users are miners, not charity cases.
- **Pro — $6/mo or $49/yr:** unlimited bills, 24-month history, email-forward ingest, full Dispute Kit + success rates + escalation ladder, promo-expiry early warnings, household mode (5 accounts), recovery tracking. Priced *below one recovered fee* — the comparison is the pitch, same as PityTrack's "less than one 10-pull."
- **Anti-success-fee pledge (brand):** "We never take a cut of your savings. Ever." Directly attacks the Billshark/Trim model; extremely quotable in Reddit threads where the 40%-cut resentment is explicit.
- **Year-2 B2B:** anonymized fee-intelligence reports for consumer advocates, legal aid, journalists, and state AG offices ($99–499/mo); white-label audit tools for credit unions / financial-coaching nonprofits.
- **No affiliate lead-gen for switching providers** in year 1 — it would corrupt the trust posture that is the entire product.

**TAM/SOM:** ~130M US households × ~4 recurring utility/telecom/streaming bills each; the "why did my bill go up" search volume is perennial and spikes with every junk-fee news cycle. Year-1 SOM: 40K users × 8% paid × $49 ≈ **$157K ARR**, with near-zero CAC (Creep Receipts are native Reddit content; r/povertyfinance + r/frugal threads are a daily reply-guy surface; SEO on provider+fee long-tails currently owned by one blog and forums).

## Tech Stack (solo-dev MVP, 4–6 weeks)

- **Next.js PWA** (installable, camera-first mobile web — no app-store gatekeeping, and the audience skews Android/prepaid)
- **Supabase** (Postgres + auth + storage for bill images/PDFs)
- **Claude vision** for line-item extraction; deterministic post-processing into the normalized schema; provider templates reduce LLM calls to near-zero for the top 200 providers
- **SES inbound** for email-forward ingest (same pattern as InReview)
- **Plain-SQL delta engine** — no ML for the core: line matching by fuzzy name + category, period-over-period diffing
- **OneSignal** for promo-expiry and monthly-bill-arrival nudges
- **Local-first mode** (IndexedDB) for credential-phobic users — snaps never leave the device unless they opt into crowd contribution
- Fee Database seeded from public sources (state AG junk-fee actions, FCC dockets, provider rate pages) + community GitHub PRs

**Privacy posture:** no bank linkage, on-device OCR option, images deleted after parse (Pro: encrypted archive for history), crowd contributions are opt-in and scrubbed of PII at parse time. This *is* the marketing for the r/povertyfinance audience.

## GTM

1. **Reply-guy the thread that spawned it:** the "paying for things I already paid for" post format recurs weekly on r/povertyfinance, r/frugal, r/personalfinance — answer with a Creep Receipt, never a link dump.
2. **Free public "Fee of the Week"** — one named junk fee, what it is, success rate, script. BillCreep.com proves the SEO exists; take it with data instead of prose.
3. **Creep Receipts** shared natively (the r/povertyfinance vernacular is already on the card).
4. **Launch window:** November–January — holiday budget stress, annual promo-expiry waves, and "New Year, audit your bills" season (FlexClock proved the January-moment pattern in this portfolio).

## Design Direction (ui-ux-pro-max)

**"Thermal-paper receipt meets investigative ledger."**
- Palette: paper cream `#FAF6EE`, receipt white `#FFFFFF`, ink navy `#131A2A`, **creep red `#E5484D`** (deltas up), ledger green `#30A46C` (recovered/won), fee amber `#F5A623` (suspect lines), calm grey for taxes.
- Type: **Fraunces** display (editorial gravity — this is investigative work), **JetBrains Mono** for all money and line items (receipts are monospace, always).
- Signature screens: (1) **The Receipt** — a bill rendered as thermal paper with red delta gutters, `NEW FEE` rubber-stamp badges, perforated edges; (2) **Creep Gauge** — 12-month stacked bars, fee layers in amber/red, "usage flat" annotation line; (3) **Dispute Card** — script in a copyable box with the crowd success-rate meter; (4) **Creep Receipt share card** — the viral artifact.
- Tone: validating, not clinical. The user already feels played; the UI's job is to say *"you're right, here's the proof, here's the script."* Every screen ends in one action.
- Empty/loading/error states: parse failure → "We couldn't read this bill — tap any line to fix it" (correction trains the template); first-run → snap a sample bill pre-loaded so the delta magic is visible in 30 seconds.

## Moat & Compounding

1. **Crowd fee database** — every snap classifies lines; every dispute outcome updates success rates. Billshark's version of this data is private and negotiation-shaped; Rocket Money's is transaction-shaped. Only a document-first product can build *line-item* intelligence.
2. **Provider templates** — parse accuracy compounds per provider; switching cost grows with bill history depth (24 months of history is a moving-day nobody wants).
3. **Trust posture** — no bank credentials, no success fee: a positioning competitors can't copy without cannibalizing their revenue model (Rocket Money's premium tier *is* the negotiation cut).

## Cross-Portfolio Notes

- **NOT SubSlayer/TrialGuard** (cancel unwanted spend — BillDelta audits bills you *can't* cancel: power, water, internet).
- **Complements FlexClock** (that one spends pre-committed FSA money down; this one stops committed money from leaking) and **CeaseFire** (debt-collector defense → same trust-first, no-credentials, vulnerable-user posture; shared escalation-ladder UX pattern).
- **Same house moat** as PityTrack (odds tables) and InReview (percentile telemetry): crowd-sourced corpus + percentile/success-rate intelligence + shareable receipt artifacts.

---

*Sparked by r/povertyfinance, week of Oct 27–31, 2026: "I'm getting really fkng sick of paying for things I already paid for" — and the reply that nailed the product: "Paying for utilities that increase because the delivery fee goes up even though my usage hasn't changed."*
