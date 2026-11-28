# BidPilot 🧭 — The Bid Coordinator. Stop Losing Your Mind Getting Three Quotes.

> "Your electrician just charged you $150 for an estimate. Your roofer wants $75, 'credited if you hire us.' Your plumber has gone silent for 12 days. You have four PDFs in three different formats, a $38k–$71k spread on the same scope, and a spreadsheet with 14 tabs. BidPilot is the bid desk: one scope, every bidder tracked, every fee on the ledger, every line item compared — apples to apples."

**Date:** 2026-11-28
**Source:** Reddit (r/Contractor, r/HomeImprovement, r/homeowners, r/milwaukee, r/bayarea, r/Home, r/AskContractors — 2025–2026 estimate-fee + quote-chaos thread cluster)
**Category:** Consumer / Home Projects / Life-Admin
**Status:** Idea documented + interactive prototype

---

## 1. The Spark — 2026 Is the Year Trades Started Charging for the Quote

A quiet structural shift is underway in US home services, and Reddit caught it across at least seven independent threads in 12 months:

- **r/Contractor, Aug 19 2026 (44 pts, 319 comments)** — "Is this normal — contractor wants me to pay for a quote." Full first-floor remodel; a "professional company" recommended by a friend charges a fee to produce the quote, credited to the account only if hired. 319 comments of "I didn't think this was normal."
- **r/HomeImprovement, Apr 28 2026 (82 pts, 60 comments)** — "Is this common? Service call fee for an estimate, **no notice**." Electrician visited for a knob-and-tube assessment, then surfaced a fee nobody quoted up front.
- **r/milwaukee, Feb 2 2026 (11 pts, 36 comments)** — "Is it normal to be charged a fee to get an estimate from tradespeople/companies?" OP: "I would say **75% of them are charging a service fee** simply to come out and give an estimate. Anywhere from $65 to $150."
- **r/homeowners, Feb 28 2026 (20 pts, 27 comments)** — "Is it normal to charge for a quote?" — hot-water-heater replacement, one vendor emailed a quote in 10 minutes free, another wanted a fee just to discuss.
- **r/bayarea, Sep 15 2026 (8 pts, 52 comments)** — "Home contractors (electrical/roof/etc) asking for payment to come out for estimates… **Is this the new normal?**" Top comment (33 pts): "I would never pay for an estimate."
- **r/HomeImprovement, Aug 20 2025 (42 pts, 124 comments)** — "Anyone struggling with getting multiple quotes for jobs and **the new trend of fees for quotes**?"
- **The quote chaos, same era:** r/Home Jul 28 2026 (156 pts, 89 comments) — "Has anyone under the age of 40 successfully gotten 3 quotes without losing their mind or giving up?"; r/AskContractors Aug 28 2026 (63 comments) — "Ghosted by multiple contractors"; r/HomeImprovement Oct 8 2025 — "Got 4 contractor quotes for my kitchen ranging from **$38k to $71k**" on the same scope; and the 2021 evergreen "Getting contractor quotes, what a circus" (92 pts).

**The two-sided confirmation:** r/Contractor Jul 28 2026 — contractors themselves are complaining about "tire kickers and time wasters" and wasting hours on bids that go nowhere. The fee trend is the trades' answer to no-show homeowners; the homeowner's answer is "fine, but now I'm paying to play, and I have no idea who to keep, who to drop, what I've spent, or what's actually in these PDFs."

**The structural gap:** every tool in the market sits on one side of the table. Marketplaces (Angi, Thumbtack) sell the homeowner to contractors and own the *search*, not the *bid*. Side projects (Quoterly Mar 2026, an AI quote-analyzer Mar 2026, RenoQuant Apr 2026) compare the static PDFs but ignore the process: the outreach, the ghosting, the visits, and the **fees paid to get the quotes in the first place** — which in 2026 is real money, $300–$600+ across a typical 4-bidder round, mostly untracked.

**The one-liner:** the homeowner pays for the quotes now, but nobody holds the homeowner's side of the bid — the scope, the chase, the fee ledger, and the apples-to-apples comparison.

## 2. Problem Statement

Getting 3–5 contractor quotes in 2026 is a part-time second job with no tools, four moving parts, all unmanaged:

1. **THE SCOPE DRIFT** — homeowners describe the job differently to each contractor (phone, text, email, in person). By quote time, no two bids describe the same scope. The $38k-vs-$71k spread isn't price gouging; it's incomparable documents. Nobody enforces "same brief, every bidder."
2. **THE GHOSTING** — invites go unanswered; visits get rescheduled; quotes evaporate. "Ghosted by multiple contractors" (Aug 2026, 63 comments) and "losing their mind getting 3 quotes" (Jul 2026, 156 pts) are the lived experience. There's no dashboard for who's alive in this process, and follow-up feels aggressive, so people just… wait. Weeks vanish.
3. **THE FEE LEDGER (the 2026 one)** — paid estimates are now the new normal ($65–$150 per visit, "credited if hired" terms vary by vendor, often surfaced late). Homeowners track these fees in their head or a sticky note. Nobody can answer the actual question: **"If I hire Contractor X, what did this whole bidding process cost me, net?"** — and nobody notices when a $150 non-credited fee or a "discounted visit" is off-market.
4. **THE PDF BLACK HOLE** — quotes arrive as PDFs, photos of whiteboards, Excel, and email threads with different line-item structures. The classic failure (documented in the BuildZoom premium story, r/Homebuilding 2023): **the cheapest bid silently excludes permits, haul-away, and change orders.** Finding that by eye across four formats is exactly what homeowners aren't built to do.

**Why nobody solves it today:** marketplaces optimize lead flow and don't serve the homeowner after the intro; comparison side projects assume the quotes already exist and are clean; spreadsheets handle one of the four problems at best; and the fee angle is too new to have an incumbent — it emerged as a trend across 2025–2026, not as a product category.

## 3. Target Users

- **The first-time big-project homeowner** (the under-40 crowd from the 156-point thread): first kitchen, bath, roof, or electrical project at $10k–$100k. Never done the bid process; assumes it's just "call three guys." Meets the fee trend, the ghosting, and the PDF chaos all at once. Highest anxiety, highest willingness to pay for "stop losing my mind."
- **The fixer-upper buyer** (r/HomeImprovement's core): 4–6 trades in one house, staggered bids, $1k+ in estimate fees across the project. The fee ledger and bidder board compound in value here — one app across the whole rehab.
- **The labor-tight-market homeowner** (Bay Area, Boston, Seattle, Denver, Miami): where paid estimates went mainstream first and bid rounds drag longest. The response-speed data is most valuable where contractors are most selective.
- **Secondary (year 2): the small trade office.** The "tire kicker" thread proves contractors also hate dead bids. A free, public **Transparent Fee page** (their estimate fee + credit terms, verified by the homeowner who paid it) becomes a trust asset worth more than any ad — the two-sided entry that makes the data moat.

## 4. Proposed Solution

**BidPilot** is the homeowner-side **bid desk** for one project. It never becomes the marketplace — it owns the four artifacts the homeowner doesn't have today: **The Scope, The Board, The Ledger, The Matrix** — plus the two engines that turn them into a decision: **Nudges** and **The Decision Memo**.

### 4.1 THE SCOPE (the single source of truth)
A guided builder turns "new kitchen, kinda" into a versioned one-page scope: rooms, demo, materials tier, timeline, permits responsibility, haul-away, exclusions. **Every bidder gets the identical scope doc** (PDF + link, version-stamped) — this alone collapses the $38k–$71k "comparability" problem. Revisions re-stamp the version and tell you which bidders got v1 vs v2. The doc is also the leverage: "here is the exact scope all four of you priced."

### 4.2 THE BID BOARD (the ghosting radar — the wedge feature)
A kanban of bidders: `INVITED → CONTACTED → VISIT SCHEDULED → VISITED (fee paid) → QUOTE RECEIVED → FOLLOWING UP → HIRED / DROPPED`. Each card carries:
- **Response meter** — first-response time and follow-up count, computed automatically ("Denny: 2 nudges, 12 days silent" vs "Marcus: quote in 4 days").
- **Fee chip** — the $150 / "credited if hired" from the ledger, always visible on the card.
- **One action:** Nudge (drafted, tone-checked follow-up — user taps send, app never auto-sends) or Drop ("2 nudges, 12 days. Fee non-credited either way. Drop him?" — the superintendent's voice).
Response speed becomes a **hiring signal**: the contractor who takes 3 days to quote is usually the contractor who takes 3 days to respond mid-project.

### 4.3 THE FEE LEDGER (the 2026 differentiator — no incumbent has this)
Every paid visit/estimate fee as a receipt line: vendor, date, amount, terms ("credited if hired" / "non-refundable" / "discounted toward materials"), source (invoiced / verbal / text — flagged). The ledger answers the question nobody else frames:
- **Gross spent on bidding this project:** $425 across 4 visits.
- **Net cost if you hire X:** Marcus $18,400 − $150 credit = **$18,250 all-in**; Denny $16,900 − $0 = $16,900 — but see the Matrix (his exclusions add ~$2,300).
- **Fee fairness check** — amount + terms vs. local norms (seeded from crowd-sourced fee entries + the 2025–2026 Reddit data: $65–$150 typical; flag $150+ or undisclosed late fees: "surprise fees at the doorstep are the #1 complaint in the r/HomeImprovement cluster — flagging for you").
The receipt-style ledger is the shareable artifact (the "I paid $425 for quotes" story is the viral hook — it's what every r/HomeImprovement post already does manually).

### 4.4 THE MATRIX (apples-to-apples, with the red stamps)
Upload each quote (PDF, photo, or manual entry) → OCR + LLM normalization to a standard line-item schema (demolition, permits, materials, labor, haul-away, change-order policy, warranty, payment schedule, timeline). The comparison matrix shows the **union of line items** with three states per cell: priced, **EXCLUDED** (red stamp), or **MISSING** (red stamp + "not stated — ask"). Plus the two computed tells:
- **Effective gap** — "Denny is $1,500 under Marcus on paper; after adds for permits ($950) + haul-away ($1,250), the real gap is −$600."
- **Fine-print flags** — change-order markup, payment-schedule aggressiveness ("40% deposit"), timeline slippage language.
Manual-correction UI on every parsed cell — parsing is a head start, not a black box; the user is the auditor, the app is the clerk.

### 4.5 NUDGES + THE DECISION MEMO (from chase to signature)
- **Nudge engine:** per-bidder follow-up cadence (day 3, day 7, day 12) with drafted, appropriately-toned messages; the board shows who's alive; two misses = suggested Drop.
- **The Decision Memo:** the one-page end product — scope version, matrix summary, effective-gap math, net cost per vendor (quote + net fees), response-speed history, red-stamp list of open questions, and a drafted "questions to ask before signing" checklist. This is the Decision Pack export (see Pricing) — the artifact you'd actually pin to the fridge.

### Positioning
Marketplaces (Angi/Thumbtack) answer "who do I call?" and stop at the handshake. Quote-comparison side projects (Quoterly, RenoQuant, the Mar 2026 AI analyzer) answer "what do the PDFs say?" after the fact. **BidPilot answers the process: "what happens between 'I need quotes' and 'I sign someone' — and what did it cost me?"** The fee ledger is the wedge no one has: it's new money (2026), it's measurable, it's emotional ("they charged me to price my own kitchen"), and it makes the whole board feel like the app is on your side of the table.

### House non-overlap (checked twice)
- **NOT a marketplace / lead-gen.** No contractor search, no lead sales, no "hire in-app" transaction — the app is structurally neutral, which is why its data (response speeds, fee norms, exclusion rates) is trustworthy.
- **NOT a quote-comparison PDF tool only.** The comparison is one of four artifacts; the process (scope versioning, board, ledger, nudges) is the product. Quoterly/RenoQuant compare; BidPilot runs the bid.
- **NOT a home-maintenance tracker** (the crowded 2024–2026 space): nothing about recurring upkeep, filters, or smoke alarms — BidPilot's lifespan is one project, 2–16 weeks, then it exports and (optionally) archives.
- **NOT a project-management PM tool** (Buildertrend/JobTread serve contractors' crews): BidPilot has no crew, no schedule Gantt, no payments-in — it's the owner's clipboard, not the site office.
- Own catalog: none of the 2026 house ideas (GridVoice, ProofOnce, Downstream, OwedFollowup, ChartHound, Deadwire, TimeSift, ShiftFeed, Buyable, Reverta, GatePass, ShelfSure, SpecCheck) touches home projects, contractor bidding, or estimate fees. Clean.

## 5. Market

- **Scale:** US home-improvement spend is ~$600B/yr, roughly **35–40M remodeling projects annually** (Harvard JCHS estimates; post-2021 remodeling boom left a durable floor). Even the conservative slice — first-time big-project ($10k+) remodelers in the 20 metros where paid estimates are established — is ~1M+ projects/yr, each one a natural bid round of 3–5 contractors.
- **The fee-trend tailwind:** paid estimates spread from the Bay Area (2025 threads) to Milwaukee, the Southwest, and the Northeast (2026 threads) in ~12 months. The r/bayarea "is this the new normal?" question (Sep 2026) is being asked in more metros every quarter — the pain is *currently forming*, which means the category is open right now, not after.
- **Contractor-side pull:** the "tire kicker" complaint (r/Contractor Jul 2026) means the fee trend persists for years — the app's fee ledger and response data stay relevant as long as trades charge to show up.
- **Recurring GTM is structural:** every major project season (spring kitchen/bath, fall roof) + every "contractor charged me for an estimate" thread (these appear weekly across metros) is a search spike: "is it normal to pay for an estimate," "contractor estimate fee," "compare contractor quotes," "ghosted by contractor." The Reddit threads are the ad copy.

## 6. Pricing

- **Free forever:** 1 active project, 3 bidders, scope builder, manual quote entry, fee ledger with 10 lines — enough to survive a single bid round and see the Matrix. (The free tier IS the fee-norms dataset: free users log fees, everyone gets the fairness check.)
- **Pro $9/mo or $79/yr:** unlimited bidders + projects, quote PDF parsing (AI), full Matrix with red stamps + effective gap, Nudge engine (SES + OneSignal), local fee-fairness checks, Decision Memo. Priced against the project, not the year: **"$79 < the single estimate fee you'll mis-track this spring."**
- **Decision Pack $29 ONE-TIME:** the end-project export — Decision Memo PDF, full Matrix print, fee ledger receipt, negotiation question sheet, "what to ask before signing" checklist. Episodic pricing for an episodic purchase (the NameSync/Receipt Pack model): nobody starts a subscription to finish a kitchen, but everyone buys the artifact they pin to the fridge.
- **Year-2 B2B, two doors:** (1) free **Transparent Fee page** for trades (their fee + credit terms, verified by homeowners who paid it) — a trust asset that quietly builds the two-sided graph; (2) anonymized **Estimate Fee Index by metro** (median fee, credit-terms rate, surprise-fee incidence, average response time per trade) licensed to press/analysts/Home Depot-style market desks — the fee trend is a 2026 macro story and the index is the citation everyone will want.
- **Never:** selling homeowner contact data to contractors, paying-per-lead fees, or "verified contractor" badges — neutrality is the brand; the day a bidder pays to rank, the Matrix stops being trusted.

## 7. Year-1 SOM

1M+ first-time big-project remodelers in the 20 fee-trend metros → SEO shelf ("is it normal to pay for an estimate" per metro × trade), weekly Reddit-thread presence (the clusters above are the exact ICP talking to each other), + word of mouth via the shareable fee receipt → **12K signups, ~2.5K active projects in year 1**: 8% Pro (≈200 × $79 ≈ **$16K**) — wait, that's the floor; the realistic middle: 6% of signups convert during project season (≈720 Pro ≈ **$57K**) + 1.5K Decision Packs (**$43K**) + 8 index seats (press/market desks, **$8–16K**) ≈ **$110–115K ARR at near-zero CAC**. The distribution is the news cycle: the estimate-fee story runs in every metro as it arrives, and the SEO shelf + Reddit presence catch each spike. Upside lever: the two-sided Transparent Fee page — if trades adopt it in 3 metros, bid-round data quality (and Pro conversion) doubles.

## 8. Solo MVP — 4–6 weeks

Next.js PWA + Supabase. No marketplace, no CRM, no ML training:
- **Scope builder:** form + photos → generated one-page scope (React → print-to-PDF), version-stamped, shareable link. Pure state, zero infra.
- **Bid Board:** Supabase table + state machine + response timers (timestamps are the whole product — first-response and follow-up deltas computed, never entered).
- **Fee Ledger:** table + computed net-cost views + receipt render; local-norms seed = static JSON (the 2025–2026 Reddit data points as launch seed, crowd-corrected after).
- **Quote parsing:** PDF/photo upload → LLM structured extraction into the line-item schema (~$0.03/quote) + mandatory manual-review UI on every cell. Parsing is a convenience; the schema is the product.
- **Matrix:** union-of-line-items render with EXCLUDED/MISSING stamps + effective-gap math (deterministic, no AI).
- **Nudges:** template library + SES send + OneSignal reminders; Decision Memo = print-ready PDF export.
- **SEO shelf:** weekly SSG fee-norms pages per metro/trade from logged data (labeled n=).
- The constraint is the moat: it's a clipboard, not a platform — 4 tables, 1 LLM call path, 1 PDF renderer.

## 9. Design (ui-ux-pro-max)

"the bid desk" — job-site clipboard × blueprint, not dashboard:
- **Palette:** blueprint-navy `#0E1626`, panel-steel `#16233A`, grid-line `#1E2C47`, safety-orange `#FF7A1A` (primary actions only), paper-cream `#F6F1E3` (receipts, scope doc, quote cells), stamp-red `#E5484D` (EXCLUDED/MISSING/GHOSTED stamps only — red is earned, never decorative), bid-green `#3FB950` (quote received / hired), cash-yellow `#FFC24B` (fees).
- **Type:** Space Grotesk headers + Inter body + **JetBrains Mono for every dollar amount, date, and meter** ("a number that isn't monospace is a number that can lie").
- **Signature components:** THE BID BOARD (kanban cards, status chips, response-speed meter as a fuel gauge, fee chip always visible — the ghosting radar), THE FEE LEDGER (thermal receipt, zigzag tear edge, per-vendor NET row in mono, "surprise fee" flags in cash-yellow), THE MATRIX (line-item grid; the red stamps are rotated 4° and stamped, not styled; the effective-gap callout is the only orange on the page), THE SCOPE DOC (blueprint-style one-pager, version stamp in the corner — the artifact sent identically to every bidder), THE NUDGE TRAY (drafted follow-ups with tone dial: Polite → Firm → Final Notice), THE DECISION MEMO (one page, fridge-pin sized, hire stamp at the end — the only confetti in the app is the green HIRED stamp).
- **Voice:** the superintendent who's done twelve remodels — "Denny's been quiet 12 days. The fee's gone either way. Nudge twice, then drop." No alarm, no guilt, no "we're sorry for the inconvenience." Numbers, deadlines, stamps. Every screen ends in ONE action: **Nudge, Compare, or Decide.**

## 10. Sources

- Reddit: r/Contractor "Is this normal — contractor wants me to pay for a quote" (Aug 19 2026, 44 pts / 319 comments — fee credited only if hired)
- Reddit: r/HomeImprovement "is this common? service call fee for an estimate, no notice" (Apr 28 2026, 82 pts / 60 comments — knob-and-tube electrician, late-surfaced fee)
- Reddit: r/milwaukee "Is it normal to be charged a fee to get an estimate from tradespeople/companies?" (Feb 2 2026 — "75% of them charging a service fee… anywhere from $65 to $150")
- Reddit: r/homeowners "Is it normal to charge for a quote?" (Feb 28 2026 — water heater; free 10-min emailed quote vs. fee-to-discuss)
- Reddit: r/bayarea "Home contractors (electrical/roof/etc) asking for payment to come out for estimates… is this the new normal?" (Sep 15 2026, 52 comments — top comment "I would never pay for an estimate," 33 pts)
- Reddit: r/HomeImprovement "Anyone struggling with getting multiple quotes for jobs and the new trend of fees for quotes?" (Aug 20 2025, 42 pts / 124 comments)
- Reddit: r/Home "Has anyone under the age of 40 successfully gotten 3 quotes without losing their mind or giving up?" (Jul 28 2026, 156 pts / 89 comments)
- Reddit: r/AskContractors "Ghosted by multiple contractors" (Aug 28 2026, 63 comments — new home, old-house work)
- Reddit: r/HomeImprovement "Got 4 contractor quotes for my kitchen ranging from $38k to $71k" (Oct 8 2025) + "Getting contractor quotes, what a circus" (Nov 12 2021, 92 pts — evergreen)
- Reddit: r/Contractor "How do you filter out tire kickers and time wasters?" (Jul 28 2026 — contractor-side confirmation the fee trend is structural)
- Incumbent scan: Quoterly (iOS/Android quote compare, r/SideProject Mar 9 2026); AI contractor-quote analyzer (r/SideProject Mar 23 2026); RenoQuant (actuals marketplace, r/SideProject Apr 2 2026); BuildZoom premium side-by-side bid comparison + "cheapest bid missing lots of items" (r/Homebuilding thread, 2023–2024); DIYUK quote-compare site (r/DIYUK Apr 2025); Angi/Thumbtack marketplace model (lead-gen, not bid management)
- Market: Harvard JCHS home-improvement spending estimates (~$600B/yr, 35–40M projects/yr — directional, labeled)
