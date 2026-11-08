# RaiseCase 🧾💼

**The one-page raise brief for people who like their job — "You don't want to leave. You want to be paid right where you are."**

![Status](https://img.shields.io/badge/status-prototyped-brightgreen)
![Source](https://img.shields.io/badge/source-Reddit%20%2B%20Web-orange)
![Date](https://img.shields.io/badge/date-2026--11--08-lightgrey)
![Pricing](https://img.shields.io/badge/pricing-%240--29%20one--time-blue)

> **Demo:** [prototype/index.html](prototype/index.html) · [Live on GitHub Pages](https://yojahny55.github.io/duncan-ideas/ideas/2026-11-08-raisecase-stay-and-ask/prototype/index.html)

## The Spark (Reddit + Web, THIS WEEK)

**PainPoint Daily, Nov 7, 2026** ([dev.to article](https://dev.to/painpointdaily/5-micro-saas-ideas-from-real-reddit-complaints-4ma7), #1 of 5 ideas from real Reddit complaints, evidence rating: **Moderate** — strongest of the list): **7 threads in 5 days (Oct 22–30, 2026)** on r/careerguidance, all variations of *"How do I increase my salary if I like my job?"*

The lead thread (ranked #176 in PainPoint Daily's Oct 22 daily ranking): a marketing poster who likes their team, earns ~$70–75k, and knows market pay is **$90k–$130k**. The top reply is the whole problem in one sentence:

> **"If you want to make more money, you have to go somewhere else."**

That reply is *wrong* — and it's wrong in a way that costs people five figures. The data says askers win ~2/3 of the time. But nobody has ever handed the "I like it here" employee a weapon: a case file.

## Problem Statement

**The silence tax.** The raise market is enormous and structurally under-served because the #1 barrier isn't negotiating skill — it's never asking:

- **Fewer than 40%** of employees have *ever* proactively requested a raise at their current job — yet among those who ask, **roughly two-thirds succeed** (Robert Half 2026 survey, via salario.io Apr 2026)
- **82%** of full-time workers who asked received a raise — but only **35% of women and 49% of men** ever asked at all (LendingTree 2026, via metaintro.com Jul 2026): *"The single biggest barrier to a raise is silence."*
- Only **37%** of workers have ever negotiated a raise (Salary.com)
- Median merit raise budget for 2025/2026: **3.5%** (WTW Salary Budget Planning Report) — with inflation in the low-to-mid 4% range through 2026, staying silent means a *real pay cut every year* (getstello.ai Sep 2026)
- Atlanta Fed Wage Growth Tracker: overall wage growth **3.9%** (Sep 2026)

**Why people don't ask:** no evidence dossier, no number to anchor to, fear of damaging a relationship they value, and the folk wisdom above ("leave or stay poor"). The conversation happens once every 1–2 years; nobody practices for it; most people walk in with vibes and walk out with 3%.

**What exists today:**
- **Levels.fyi negotiation coaching:** $1,250–$5,000 packages — focused on *job offers*, not internal reviews
- **Free AI email generators** (NueCareer, Lettrio, thefreeconverter, resumemakeroffer "raise planner"): generate a polite email. No evidence structure, no benchmark anchoring, no timeline, no outcome data. A nice email is not a case.
- **Bragduck** ($5/mo), **CareerWins** ($3.99/mo): wins *logging* apps — they help you remember accomplishments but never turn them into a negotiation artifact with a number and a date
- **Static SEO guides** (Built In, Investopedia, Indeed): "summarize your achievements, benchmark salaries" — advice with zero tooling. The BillCreep pattern again: editorial demand, no product.

**The gap:** nobody owns the *internal* raise moment for the employee who wants to **stay**. Offer-negotiation tools assume you have leverage from another company. Wins-loggers stop at the log. Email generators produce prose without proof. The "I like my job but market pay is $20–40k above me" employee — the exact poster in 7 threads this month — has no tool.

## Solution

**RaiseCase** turns scattered wins, a public pay benchmark, and non-salary asks into **one-page evidence brief + conversation script + timeline engine + outcome receipt**. TurboTax for the stay-and-ask conversation, with the house's crowd-outcome moat.

### Core loop

1. **The Case File (free)** — guided 10-minute build: role, tenure, current comp, 3–7 wins (each one forced into *Situation → Action → Number* format — "shipped X" becomes "shipped X, cut churn 12%, saved $40k/yr"). Claude rewrites vague wins into quantified evidence and flags weak ones with prompting questions.
2. **The Benchmark** — user pastes public pay data (Levels.fyi/Glassdoor/BLS/their own company's posted ranges — pay-transparency laws now publish ranges in CA/NY/CO/WA/IL/NJ+) → Claude normalizes to a defensible market band with sources cited → **the Gap Number**: "You're at $72k. Market band for your scope: $90–130k. Evidence-backed ask: $88k."
3. **The One-Page Brief (paid unlock, $29)** — the artifact you actually send/carry: wins table with numbers, benchmark with sources, the ask, and **non-salary asks** ranked (title, equity refresh, extra week PTO, conference budget, remote days, review-in-6-months clause) — because when budget is frozen, the counter-offer you pre-loaded is what saves the negotiation.
4. **The Script** — the exact opening 90 seconds, three objection plays with crowd-tested responses ("budget's tight" → "when does the next cycle open, and what do I need to have done by then?"; "you're invaluable where you are" → the Promo Terms handover move; "everyone would want a raise" → benchmark-to-scope, not fairness), and the **Ask Calendar**: request the meeting 6–8 weeks before review cycle, send brief 48h ahead.
5. **Deadline Engine** — review-cycle countdown, "latest safe ask date" per cycle, follow-up nudge if no answer in 14 days, and the 6-month written-criteria checkpoint if the answer was "not now."
6. **Outcome Receipts** — log what happened → shareable stamped receipt ("ASKED. +$14k. 9 minutes of courage, 10 minutes of prep.") → the crowd dataset: **raise success rates sliced by industry × tenure × ask-size × evidence-attached × objection-heard** — "With a benchmark cited: 71% got some raise (n=842). Without: 44%." The PityTrack/Upheld odds-table moat, applied to the most universal white-collar negotiation on earth.

### Why this wins the shelf

- **The dataset compounds**: every outcome receipt makes the odds tables sharper; unbootstrapable without users (house pattern: PityTrack, InReview, BillDelta, Upheld)
- **The reply-guy GTM writes itself**: every "how do I ask for a raise" thread gets the two stats that reframe a life — *67% of askers win; you're in the 60% who never ask*
- **Episodic pricing for an episodic event**: $29 one-time at the moment of maximum motivation beats another $5/mo subscription people forget to cancel (NameSync/Reinstated/NetNet Tax Pack model — and it matches the Nov 2026 micro-SaaS pricing trend: one-time unlocks over tiny monthly fees, blog.mean.ceo)
- **Pay-transparency laws are a tailwind**: published ranges gave every employee a legal, citable benchmark that didn't exist 3 years ago — the Benchmark step converts a public policy change into a private negotiation weapon

## Target Users

- **The "I like it here" underpaid** — 2–8 years tenure, market gap $10–40k, loyal enough to stay, anxious enough to freeze (the 7-thread poster; ~60% of the workforce who never ask)
- **Review-season procrastinators** — know the cycle date, dread the conversation, need a structure not a pep talk
- **The gender-gap cohort** — 35% of women vs 49% of men ever ask; an evidence-first, script-backed tool is disproportionally valuable exactly where silence is most expensive
- **Junior ICs & non-tech roles** (marketing, ops, admin, healthcare, education) — where Levels.fyi's $1,250+ coaching and tech-bro salary lore don't reach

## Key Features (MVP → v2)

**MVP (solo, 4–6 weeks):**
- Guided Case File builder (wins → Situation/Action/Number rewrite via Claude)
- Benchmark normalizer (paste ranges/links/screenshot → cited market band → Gap Number)
- One-page Brief PDF export (print-perfect, evidence-first layout)
- Script + 3 objection plays + Ask Calendar
- Review-cycle Deadline Engine (OneSignal nudges)
- Free tier: Case File + Gap Number + script preview. Paid ($29 one-time): Brief PDF + full objection library + benchmark deep-dive + Deadline Engine

**v2:**
- Crowd outcome receipts + public Odds Tables ("State of the Ask" annual report = earned media every review season)
- Objection-heard → response-effectiveness stats
- Team mode (manager-side: build fair counter-offers) — NEVER in v1; brand is employee-side only
- Follow-up drafter for "not now" answers (6-month written-criteria letter)
- Household mode (partner builds their case, you review it)

## Tech Stack (solo MVP, 4–6 weeks)

- Next.js PWA + Supabase (auth, Postgres for cases/outcomes)
- Claude API: wins rewrite, benchmark normalization, script personalization (LLM cost per completed case ≈ $0.05–0.20)
- PDF generation server-side (react-pdf) — the Brief is the paid artifact
- Claude Vision: screenshot ingest of pay-range pages/Glassdoor (no scraping legal risk — user brings their own evidence)
- OneSignal: deadline + follow-up nudges
- Weekly SSG: public Odds Tables + "benchmark band" SEO pages per role×city (high-intent searches owned by weak blogs)
- No bank/HRIS/credentials ever — the case file is user-entered evidence (trust posture: Drawbridge/BillDelta)

## Monetization

- **Free forever:** Case File builder, Gap Number, script preview, wins-log (the free log IS the funnel — Bragduck charges $5/mo for less)
- **$29 one-time — The Brief:** PDF + full objection library + benchmark deep-dive + Deadline Engine + one outcome receipt. Priced against Levels.fyi's $1,250 floor: "a thousand-dollar negotiation skill for twenty-nine bucks."
- **$19 one-time — Re-Ask Pack** (v2): for the "not now" cohort — 6-month criteria letter + follow-up sequence
- **Year-2 B2B:** anonymized Ask Intelligence for comp teams & career-services ($99–499/mo) — what objections actually kill raises, what counter-offers retain. NEVER selling individual case data; NEVER coaching-marketplace upsells — the clean-case-file brand is the asset (Upheld/Reinstated posture)
- **Unit math:** Year-1 SOM: 30K free case files → 8% Brief conversion ≈ 2.4K × $29 ≈ **$70K** + review-season spikes (Jan–Mar, Sep–Oct) + Re-Ask packs ≈ **$85–110K** with near-zero CAC

## Go-To-Market

- **Reply-guy on the exact threads that spawned it:** r/careerguidance raise threads are a WEEKLY recurring format; lead with the two reframing stats, not the product
- **Review-season timing:** ship by early January (US review season Jan–Mar is the single biggest GTM window; second wave Sep–Oct)
- **SEO magnets owned by blogs:** "how to ask for a raise and actually get it", "average raise percentage 2026", "raise request letter template" — weekly SSG odds/benchmark pages
- **The viral artifact:** the stamped Outcome Receipt ("ASKED. +$14k.") is LinkedIn-native content — the humble-brag platform where this lives
- **"State of the Ask" annual report:** every January, publish crowd success rates → earned media (the Upheld data-release playbook)
- Launch-in-public straight into the PainPoint Daily ecosystem that surfaced it

## Competitive Landscape

| Competitor | What it does | Why RaiseCase wins |
|---|---|---|
| Levels.fyi coaching ($1,250–5,000) | Job-offer negotiation coaching | Offer-side, tech-centric, 43× the price; RaiseCase owns the *internal review* moment |
| NueCareer / Lettrio / free email generators | Polite raise email in 60s | Prose without proof — no evidence structure, no benchmark anchoring, no timeline, no outcome data |
| Bragduck ($5/mo), CareerWins ($3.99/mo) | Wins logging | Stop at the log; never produce a negotiation artifact with a number and a date. RaiseCase's free tier matches them and the $29 Brief is the missing 90% |
| Built In / Investopedia / Indeed guides | "Summarize achievements, benchmark" | Pure editorial, zero tooling — the BillCreep/AppyPie pattern: demand proven, product absent |
| ChatGPT directly | Generic script | No persistent case file, no cited benchmark normalization, no deadline engine, no crowd odds — and it tells you to "be confident" instead of handing you receipts |
| Own catalog | TalkReady = rehearsal for ANY hard conversation (no raise case file/benchmark/odds); VoiceMine = interview insights (job-seeking side); PivotMap = career-change planning (the LEAVE path — RaiseCase is the STAY path); HireGround = employer-side first-hire | No overlap: nobody owns stay-and-ask |

## Design Direction (ui-ux-pro-max)

**"The personnel folder you build for yourself"** — evidence-first, calm-authority aesthetic:

- **Palette:** dossier cream #F7F3EA, ink navy #14202E, evidence green #2F7D4F (the number that proves it), gap amber #C98A16 (the money left on the table), stamp red #B23A2E (used ONLY on the ASKED stamp)
- **Type:** Fraunces for display/verdicts (the human-warm authority), Inter for prose, **JetBrains Mono for every dollar figure** — money is monospace or it lies (house rule, NetNet)
- **Signature components:** the One-Page Brief rendered as an actual document (wins table with green-highlighted numbers, benchmark band chart with YOUR position marked, the ask in a bordered box); the Gap Bar (current → market band → ask, the visual that reframes everything); stamped outcome receipts (ASKED / GRANTED / +$14,900 — rotate-in stamp animation, the ONLY confetti this app fires); the Ask Calendar countdown strip
- **Voice:** the mentor who's sat on both sides of the table — never hype, always receipts. "You're not asking for a favor. You're presenting a case."
- **Every screen ends in ONE action:** Log, Benchmark, or Ask.
- Empty state of the wins log: "Vague wins get vague raises. Let's add numbers."

## Risks & Mitigations

- **"Claude can write my email for free"** → the product is the *structure* (evidence format, cited benchmark, timeline, odds), not the prose; the PDF Brief is an artifact LLM chat doesn't produce
- **Outcome-data cold start** → seed honestly from published surveys (Robert Half 2/3, LendingTree 82%, WTW 3.5%) on day one, clearly labeled; crowd data layers on top (the Upheld seed-from-public-data pattern)
- **Episodic usage** (one ask per 1–2 years) → the free wins-log creates monthly-return behavior; Re-Ask Pack monetizes the "not now" second act; receipt sharing pulls the next user
- **Employer hostility risk** (managers seeing briefs) → brand stays employee-side, tone stays professional-evidence not adversarial; v2 team mode is opt-in and separate
- **Benchmark legal sensitivity** → user supplies their own public pay data; tool normalizes and cites — never scrapes, never claims official comp advice

## Sources

- PainPoint Daily dev.to, Nov 7 2026 — "5 Micro-SaaS Ideas From Real Reddit Complaints" (#1 Raise Case Builder, 7 threads Oct 22–30, Moderate evidence) — dev.to/painpointdaily/5-micro-saas-ideas-from-real-reddit-complaints-4ma7
- salario.io Apr 2026 (Robert Half survey) — <40% ever ask, ~2/3 of askers succeed
- metaintro.com Jul 2026 (LendingTree survey) — 82% of askers get a raise; 35% women / 49% men ever asked; "the biggest barrier is silence"
- resumeoptimizerpro.com May 2026 (Salary.com) — 37% have ever negotiated
- investopedia.com Apr 2026 (WTW report) — median 3.5% merit raise 2025/2026
- getstello.ai Sep 2026 — inflation low-to-mid 4% vs 3.5% budget = real pay cut
- Atlanta Fed Wage Growth Tracker — 3.9% overall (Sep 2026, updated Oct 8 2026)
- Incumbent scan (Brave, Nov 8 2026): NueCareer, Lettrio, thefreeconverter, resumemakeroffer raise-planner, Built In, JobWizard — all email/template tools; Levels.fyi services pricing $1,250/$2,450/$5,000 (checked Nov 7 2026 per PainPoint Daily); Bragduck $5/mo & CareerWins $3.99/mo (checked Nov 1 2026 per PainPoint Daily)
- blog.mean.ceo Nov 2026 — micro-SaaS pricing trend: one-time unlocks > tiny subscriptions
