# GridVoice ⚡ — Your Utility Already Filed to Raise Your Bill. You Get a Say.

> **"Duke Energy Progress just asked regulators for +18.5%. On your usage that's +$377/year. The comment window closes in 19 days — and you found out from a meme."**

**Date:** 2026-11-10 (Tuesday research run)
**Source:** X/Twitter — the data-center/electric-bill discourse that dominated tech X and election X all week
**Category:** Consumer / Civic Fintech / Utility Regulation Intelligence

---

## 💡 The Problem

This week X is one long argument about electricity bills:

- **Data-center memes flooded X after the 2026 midterms** (Business Insider, Nov 4) — including posts from Elon Musk himself — as Democrats won seats on explicitly anti-data-center, pro-ratepayer platforms. Gina Hinojosa beat Gov. Abbott in Texas campaigning on a data-center moratorium and "tougher protections for electricity ratepayers" (Fox Business). Sherrod Brown in Ohio and James Talarico in Texas ran ads blaming "skyrocketing utility bills" on the AI build-out (Yahoo/WaPo).
- **The numbers behind the rage are real**: ratepayers in PJM are on the hook for an extra **$7.3B this delivery year and $6.5B next year** in capacity-market charges attributable to data centers (Monitoring Analytics, via WaPo/Tucson Sentinel). Advocacy groups project household bills **+70% by 2029** from data-center demand (CJA fact sheet, Rarelightmare Nov 10). US residential power averaged **+3.4% in 12 months, +14.2% in 3 years, +30.5% in 5 years** (EIA via BillHike/Energy Factbook, Aug 2026). Hawaii is at 47.18¢/kWh (+22.4% YoY); Maine +14.1%; Virginia +11.3%.
- **And the discourse is confused**: a Harvard/UPenn study found data centers explain only ~4% of residential rate increases 2020–2025 — gas prices and aging infrastructure do more (WaPo, viral on X Nov 6). So X is fighting over a question it can't answer locally: *is MY increase data-center-driven, infrastructure-driven, or profit-driven?*
- **Meanwhile the actual mechanism raising your bill is invisible to you.** Utilities don't raise rates by announcement — they file a **rate case** with your state public utility commission, a docket opens (e.g., `E-7, Sub 1329` in NC, `R-2025-3057164` in PA), and a judge eventually rules. Right now there are **28 pending rate cases across 575 tracked utilities** (BillHike, Aug 2026), with asks up to **+26.0%** (RG&E, NY — decision Nov 2026), **+23.7%** (NYSEG), **+18.5%** (Duke Progress, NC), **+18.2%** (Delmarva, DE), **+18.0%** (Eversource CT). Oregon's PUC holds a public comment hearing on PGE's proposed increase **literally today, Nov 10**, over Zoom with a phone-in line.
- **The public is legally invited to these proceedings — and almost nobody shows up.** Every commission takes public comment; CPUC publishes guides on participating in General Rate Cases; Vote Solar this week explained how Connecticut residents can weigh in on the Eversource testimony; the WA UTC even issued a public apology because its Oct 7 hearing "missed the mark." Commenting requires knowing (1) the case exists, (2) the docket number, (3) the deadline, (4) where to file, and (5) what to say in regulator language. That's five walls, and every one of them is a PDF.

**The gap:** the moment has never been hotter (elections, memes, White House Ratepayer Protection Pledge signed by 200+ companies, Trump "100% backing" a bill to make data centers pay more — KOCO, today), yet there is **no product that tells a ratepayer their utility filed, prices the ask in THEIR dollars, and puts their objection on the docket before the window closes.** Approval data shows it can matter: Green Mountain Power asked +7.5%, got +5.5%; Pepco MD asked +5.8%, got +2.3%; Xcel CO asked +9.9%, got +4.8% — commissions routinely cut asks by 40–60%, and comment volume is part of the record they cite.

## 🎯 Target Users

- **Every household in a service territory with a pending rate case** (~tens of millions right now; 28 open cases and counting)
- **The data-center-adjacent angry**: Virginians, Ohioans, Texans, Georgians whose bills rose near announced AI campuses and who want the increase *on the record* as opposed to a meme
- **Renters and fixed-income households** for whom +$30/mo is a real budget hole — highest pain, highest share rate
- **Local organizers, legal aid, consumer advocates** (CJA, Vote Solar, AARP-type orgs) who need turnkey ratepayer mobilization
- **Small landlords & multi-utility households** tracking several dockets at once
- **Year-2:** energy journalists (the docket database IS the story), municipal utilities wanting a modern ratepayer-notification channel

## 🚫 Non-Overlap Check (own catalog — checked twice)

- **BillDecode (2026-03-16)** = decodes a bill you already received (line items, overcharges, rate-plan optimization). Backward-looking, bill-shaped. GridVoice is forward-looking, docket-shaped: the increase hasn't happened yet and the remedy is regulatory comment, not billing dispute.
- **BillDelta (2026-10-31)** = fee-creep anatomy across telecom/streaming/utility bills + dispute scripts to the provider. GridVoice's adversary is the *rate case*, not the line item; output is docket testimony, not a call script.
- **TownHall (2026-06-15)** = municipal civic layer: city council/school board agendas, votes, reps. Different bodies (city hall vs. state PUC), different data (agendas vs. dockets/testimony), different artifact (email-your-rep vs. filed comment with case number). GridVoice is the utility-regulation vertical TownHall never opens.
- **Upheld (2026-11-05)** = post-complaint escalation odds (ombudsman routes). Same house DNA (public dataset → odds → deadline engine), different adversary and moment: Upheld starts after you lose; GridVoice starts before the ruling.
- **OutageProof, GreenLedger, ChargeFuel, TapSpot, StormHaven** = unrelated surfaces (ISP uptime, carbon compliance, EV costs, water, shelters).
- **NOT a subscription tracker.** No overlap with the Sub* shelf whatsoever.

## 🛠️ Proposed Solution

**GridVoice = rate-case radar + dollar translator + testimony engine.** Enter your ZIP once; get owned by nobody else's timeline again.

### 1. The Rate Shock Card (free wedge, zero account)
ZIP → utility → every open docket affecting you, rendered as one card:

> **RG&E — Case 25-E-0311**
> Asked: **+26.0%** · Decision: **Nov 2026** · Comment deadline: **19 days**
> On your usage (~900 kWh/mo): **+$34.19/mo → +$410/yr**
> Stated drivers: grid modernization, storm hardening, data-center interconnection queue

The dollar translation uses your actual bill (snap it, BillDelta-style OCR, **no utility credentials ever**) or your utility's average residential usage. Every number cited to the docket.

### 2. Deadline Engine
Comment windows, hearing dates, ruling ETAs per case with D-14/D-7/D-3/D-1 push + email nudges (the FlexClock/Upheld pattern). Hearings are Zoom links and phone-in numbers, surfaced verbatim — Oregon's PGE hearing today needs nothing but a calendar entry and a courage nudge.

### 3. Testimony Drafter (the product)
Three plain-English questions — *What does this bill do to your month? What breaks if it goes up? What do you want the commission to do?* — plus your Rate Shock numbers, and Claude composes a docket-ready comment: correct case number, correct commission format, first-person impact statement with YOUR dollar delta, a specific ask (deny / reduce / phase / require large-load cost allocation — the language commissions actually respond to, learned from which comments correlate with reduced approvals). Then: exact filing path for that commission (portal link, email address, mail), one-tap mailto pre-filled, and a confirmation-checkbox receipt. **The user always reviews and sends; GridVoice never auto-files.**

### 4. The Crowd Docket (house flywheel)
Per case: "1,847 GridVoice ratepayers have filed on this docket," anonymized theme breakdown (fixed-income impact 38%, data-center cost-shift 27%, medical equipment 9%…), and the counter is shareable — because comment volume itself becomes record evidence. PityTrack/Upheld crowd-intelligence applied to a dataset that literally counts.

### 5. Verdict Receipts + Odds
Track every case from ask → ruling. Thermal-receipt artifact: **"FILED. Asked +26.0%. Approved +9.1%. 2,311 of us testified. Cut: 65%."** Public tables: approval-vs-ask by state, by utility, by comment volume band — seeded day one from published decisions (BillHike's decided-cases list, commission orders), compounding with every tracked outcome. This is the number nobody publishes: **how much of the ask survives public participation.**

### 6. Data-Center Exposure pages (SEO + the X discourse, answered)
Per utility/docket: what share of the ask the filing attributes to large-load interconnection and grid upgrades, whether the utility signed the White House Ratepayer Protection Pledge, whether the state has large-load cost-allocation rules (VA, OH, FL do). Neither pro- nor anti-data-center — evidence from the filing itself. This page answers the WaPo-viral question "how much of MY increase is data centers?" with the docket as citation, and owns search intent ("is Duke raising rates 2026", "RG&E rate case comment deadline") currently served by one static blog and law-firm editorial.

## 💰 Pricing

- **Free forever**: Rate Shock Card, deadline alerts, one testimony draft per open case, Crowd Docket counts, verdict tables. Alert density IS the dataset; free-tier-as-moat.
- **GridVoice Pro — $4/mo or $29/yr**: multi-property/multi-utility tracking (landlords, snowbirds), instant alert on filing (not weekly), docket history + PDF digests of testimony waves, household mode, bill-snap delta tracking.
- **Year-2 B2B — $99–499/mo**: anonymized docket intelligence for advocates, legal aid, journalists, energy analysts; white-label ratepayer notification for municipal/co-op utilities (they *want* participation; IOUs will never fund us — which is the point).
- **NEVER**: utility or supplier money, solar/plan-switch affiliate bounties, selling ratepayer identity data. Independence is the entire brand in a domain where incumbents literally own the "bill help" content farms.

## 📈 Market & GTM

- **TAM**: ~131M US households pay an electric bill; every one lives in a rate-case jurisdiction. 28 open cases now; utilities file continuously — the docket stream never ends.
- **Year-1 SOM**: seed top-10 states by open asks (NY, NC, DE, CT, OK, WA, NM, MI, MD, CO + OR/PA/VA fast-follow) → 60K free Rate Shock cards → 4–6% Pro ≈ **$115–175K ARR**, near-zero CAC.
- **Recurring GTM events, weekly**: every new rate filing, every "your bill is going up" news cycle (this week alone: WaPo, Forbes, ABC, FactCheck, KOCO, Business Insider), every election, every quarterly PJM/capacity-market report. Reply-guy positioning on the exact X threads that inspired this: not another take — "your utility's ask, your dollars, your deadline, link."
- **SEO magnets owned by nobody**: "[utility] rate increase 2026", "[utility] rate case comment deadline", "how to comment on a PUC rate case", "data centers electricity bill [state]" — BillHike proves intent with pure editorial; GridVoice ships the tool behind it.
- **Annual artifact**: "State of the Ask" report every January (avg % of ask approved, comment volume correlation, data-center share of filings) = earned media on the Upheld playbook.

## 🧱 Solo MVP (4–6 weeks)

- Next.js PWA + Supabase; Claude for docket-PDF summarization (~$0.02–0.10/case) and testimony drafting (~$0.05/draft)
- Docket dataset: public PUC dockets, hand-seeded for top-10 states (filings, deadlines, orders are all public record — the Upheld "seed honestly day one" posture); community corrections thereafter
- SES inbound (forward the rate-hike notice letter in your bill → case auto-match); OneSignal deadlines; weekly SSG case/exposure pages
- No scraping arms race, no credentials, no ML training; verdict odds = plain SQL over public orders

## 🎨 Design (ui-ux-pro-max)

**Concept: "the public hearing room at 7pm — fluorescent calm, one microphone, your three minutes."**

- **Palette**: hearing cream `#F7F3EA`, ink navy `#101A28`, grid amber `#FFB454` (electricity + countdown), asked red `#C0392B`, approved green `#2F7D4F`, docket slate `#5A6B80`
- **Type**: Fraunces for verdicts/display, Inter for body, **JetBrains Mono for every cent, date, docket number and percentage** — money is monospace or it lies (house rule)
- **Signature components**: Rate Shock Card with the animated meter needle swinging from current bill to asked bill; sticky countdown strip; the Testimony Builder (three questions → stamped docket comment); ASKED vs APPROVED verdict stamps (the only confetti is a CUT verdict); thermal-paper "I FILED" receipt with zigzag tear
- **Voice**: the calm consumer advocate who's read all 400 pages so you don't have to. Never partisan, never alarmist — receipts, dates, dollars. Every screen ends in ONE action: **See Your Case, File, or Track.**

## ⚠️ Risks

- **Docket data is messy per-state** → start narrow (10 states), community-correction loop, publish coverage honestly (Waylock posture)
- **Comment volume could be dismissed as astroturf** → every comment is individual, first-person, dollar-specific, user-reviewed; GridVoice publishes its anti-template pledge (varied asks, no copy-paste walls)
- **BillHike or a civic-tech org extends into the tool layer** → they are editorial/tracker-shaped; the testimony engine + crowd odds + deadline push is a product, and speed matters while the discourse is peaking
- **Political crossfire** → the product is deliberately evidence-only: it prices asks from filings and cites studies on both sides (4% Harvard/UPenn vs +70% CJA projections both live in the Exposure page)

---

## Sources

- Business Insider (Nov 4, 2026) — "Data Center Memes Flood X After Democrats' 2026 Midterm Wins," incl. Musk post
- Fox Business (Nov 5) — voters reject data-center expansion; Hinojosa def. Abbott on moratorium + ratepayer platform
- Forbes (Nov 2) — data centers as midterm issue; Shapiro EO "build, bring or buy"; Garrity moratorium call
- FactCheck.org / WaPo (Oct–Nov, viral on X Nov 6) — Harvard/UPenn: data centers ~4% of residential rate rises 2020–25; gas + infrastructure larger
- Tucson Sentinel/WaPo wire (Nov 2) — Monitoring Analytics: +$7.3B this delivery year, +$6.5B next in PJM capacity charges from data centers
- Rarelightmare Substack (Nov 10) — CJA: household bills projected +70% by 2029 from data-center demand
- KOCO (Nov 10) — Trump "100% backs" bill making data centers pay more; VA/OH/FL special large-load rate structures; White House Ratepayer Protection Pledge (200+ companies, Mar 2026)
- BillHike.com (Aug 2026) — 28 pending rate cases, 575 utilities tracked; RG&E +26.0%, NYSEG +23.7%, Duke Progress +18.5%, Delmarva +18.2%, Eversource CT +18.0%; decided cases (GMP +7.5→+5.5%, Pepco MD +5.8→+2.3%, Xcel CO +9.9→+4.8%); US avg 18.16¢ +3.4%/12mo, +30.5%/5yr; docket formats (E-7 Sub 1329 NC, R-2025-3057164 PA); comment guides
- Energy Factbook (Oct 2026) — EIA: 16.40¢/kWh Jul 2026, +13.3%/3yr, +24%/5yr; state table 12.72¢ LA – 48¢ HI
- 24/7 Wall St (Oct 29) — 44 states up; HI +22.5% = 6.6× national pace
- Oregon Capital Chronicle (Nov 5) — PGE rate-increase public comment hearing **Nov 10, 2026**, Zoom + phone-in
- CPUC (Oct/Nov 2026) — how the public participates in General Rate Cases; Vote Solar (Nov 7) — CT Eversource testimony + how to weigh in; WA UTC — Oct 7 hearing apology
- ABC News (Oct) — electricity costs +~5% YoY; midterms backlash; Yahoo — Talarico/Brown "skyrocketing utility bills" ads
- The Guardian (Nov 9) — Democrats won seats on anti-data-centre tickets; Musk spent ~half a billion
- tech-insider.org (Nov 10) — backlash routes: onsite power shift moves fights to county boards; cost-allocation rules tightening
- techtwitter.com trending (Nov 9–10) — X pulse check context
