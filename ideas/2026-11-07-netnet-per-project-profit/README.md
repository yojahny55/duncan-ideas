# NetNet 📒💵

**Per-project profit ledger for multi-hustle solopreneurs — "Which of your projects is *actually* making money?"**

![Status](https://img.shields.io/badge/status-prototyped-brightgreen)
![Source](https://img.shields.io/badge/source-Reddit-orange)
![Date](https://img.shields.io/badge/date-2026--11--07-lightgrey)
![Pricing](https://img.shields.io/badge/pricing-%240--8%2Fmo%20%2B%20%2419%20tax%20pack-blue)

> **Demo:** [prototype/index.html](prototype/index.html) · [Live on GitHub Pages](https://yojahny55.github.io/duncan-ideas/ideas/2026-11-07-netnet-per-project-profit/prototype/index.html)

## The Spark (Reddit, THIS WEEK)

**r/AppIdeas, Nov 2, 2026** ([thread](https://www.reddit.com/r/AppIdeas/comments/1xmax7d/i_need_a_super_simple_app_to_track_income_vs/)): *"I need a super simple app to track income vs expenses for multiple projects at a time."* The OP's follow-up nails the exact job: **"Create Project, list the expenses starting the project, and then the income from the project. And then a total number for income vs expenses and where I am at with the investment of starting the project."**

The comment section is the market research — and it proves the gap:

- *"Not to be a bummer, but excel is your friend here for basic super simple… or libreoffice for the free excel"* → the incumbent is a spreadsheet.
- A household-budget app builder showed up to plug Klusek, self-admitting *"It's built more for households and events than for business bookkeeping."*
- A no-code agency tried to sell the OP a custom build.
- Someone offered to have Claude build it.
- **Nobody could name a product that does exactly this.** For a top-of-week r/AppIdeas thread in 2026, that's a flashing neon "unowned shelf."

Same week on r/SomebodyMakeThis: *"Why is there no simple app to track poker chips in real life?"* — people keep asking for dead-simple money ledgers scoped to **one context at a time**, not a whole business. The pattern across r/freelance, r/EtsySellers, r/sweatystartup, r/SideProject: solopreneurs now run **3-6 income streams** (clients + Etsy + digital products + gigs) and still answer "how's business?" with a vibe.

## Problem Statement

1. **Accounting software is shaped like a business, not like a person with projects.** QuickBooks Self-Employed lumps all income and expenses together — no per-client profitability (Steph's Books, Apr 2026); FreshBooks starts at $19/mo with no free version and is invoice-centric; Wave is free but drags you into charts of accounts and bank-feed categorization nobody asked for. All of them answer "how is my *business* doing" when the solopreneur's actual question is "is *this project* worth it."
2. **Spreadsheets die of neglect.** One tab per project with a SUM at the bottom works for exactly 11 days. No phone-first entry, no reminders, no receipts, no hourly math. The r/freelance verbatim: *"I mark shit down on a daily spreadsheet and guess half of it."*
3. **The investment question has no answer.** OP's core ask — "where am I at with the investment of starting the project" — is break-even tracking: spend-to-date vs revenue-to-date per project, with the break-even line visible. No mainstream tool renders this. It lives in heads, and heads are wrong.
4. **Zombie projects eat capital silently.** The $400 spent on the app idea with $0 revenue, the Etsy line that lost money for two quarters — nobody gets an alert. Killing a project is a decision you can only make with per-project numbers in front of you.
5. **True hourly is invisible.** Revenue feels great until you divide by the 60 hours the project actually consumed. Per-project margin AND per-project $/hr is the difference between "I made $2,000" and "I made $2,000 at $33/hr vs my other project's $12/hr" — which reshapes what you say yes to next.

## Solution

**NetNet** is a local-first, phone-first ledger where the unit of accounting is the **project**, not the business. No double-entry vocabulary, no bank credentials, no chart of accounts. Log money in 8 seconds; the app does the net.

### Core loop

1. **Tap-to-log (the 8-second entry).** Big segmented **IN / OUT** toggle → amount → project chip → optional note + hours → save. That's it. This is the whole product's heartbeat; everything else is downstream of entry speed.
2. **Project Cards + Net Meter.** Every project is a card: cumulative in vs out, **net position**, margin %, true $/hr, and a **Net Meter** bar that fills spend-first with a stamped break-even marker — you can *see* how far from green a project is. Verdict stamps: 🟢 IN THE GREEN / 🟡 BREAKING EVEN / 🔴 IN THE RED / 💀 ZOMBIE.
3. **Break-even radar.** "You've sunk $412 into Launch My App. Break-even = 7 sales at $59." The OP's exact question, rendered as a number and a countdown instead of a feeling.
4. **Zombie alerts.** Any project with spend but no income for 90 days gets flagged: *Kill it, park it, or push it?* — a forced decision with the numbers attached. The Never-Do List pattern applied to capital allocation.
5. **Portfolio strip.** Top of dashboard: total in / total out / net / blended true hourly across all active projects, plus a ranked "which hustle deserves your Saturday" leaderboard.
6. **Receipt Snap (Pro).** Photo or email-forward a receipt → Claude vision extracts amount/vendor/category → draft entry attached to a project (BillDelta's snap-and-parse pattern, credential-free by design).
7. **Tax Pack (year-end, one-tap).** Per-project Schedule C-ready CSV/PDF export, 1099 reconciliation checklist ("Stripe says $4,210; your ledger says $4,080 — here's the $130 diff"), and the annualized P&L your accountant actually wants.
8. **Hustle Wrap (viral artifact).** Year-in-review share card: "5 projects. 2 paid for the other 3. My true hourly ranged $11-$84. NetNet kept me from a 6th." Spotify-Wrapped-for-your-hustles (PityTrack/LoreScribe receipt pattern).

### Why this wins the shelf

- **Simpler than Wave, cheaper than FreshBooks, project-shaped unlike QBSE** — the switch pitch writes itself: the tools that exist answer a different question.
- **No bank credentials, ever.** Manual + receipt-snap only. For people running an Etsy shop and a side contract off one personal account, credential-linking tools create a compliance mess; NetNet's privacy posture is the feature (Drawbridge/BillDelta trust DNA).
- **Local-first with offline mode.** Flea-market sellers, food-truck vendors, craft-fair pop-ups — spotty Wi-Fi is the norm (TruckStock insight). IndexedDB first, sync second.
- **The 8-second entry is the moat.** Every spreadsheet dies from entry friction; every accounting app dies from vocabulary. NetNet only has to beat "open Notes app, type number."

## Target Users

1. **Multi-client freelancers** (designers, devs, writers) who need per-client P&L to price the next engagement — 36.2M US small businesses, ~29.8M of them without employees (SBA, Feb 2026).
2. **Marketplace sellers** (Etsy, eBay, Vinted, craft fairs) running several product lines where per-listing profitability decides what to restock.
3. **Side hustlers with 2-4 streams** (gig work + freelance + digital products) — 70M+ Americans did gig work in 2025; most multi-app workers have zero cross-stream P&L view.
4. **Micro-agencies / solo contractors** juggling 3-8 concurrent projects with deposits, materials, and subcontractor costs.
5. **Creator-entrepreneurs** monetizing newsletters, courses, merch, and sponsorships as separate P&Ls.

## Key Features (MVP → v2)

| Phase | Feature |
|---|---|
| MVP | Projects, 8-second IN/OUT entries, Net Meter + verdict stamps, break-even radar, portfolio strip, CSV export, local-first PWA |
| v1.1 | Hours logging + true hourly, zombie alerts, entry reminders, multi-currency |
| v2 | Receipt Snap (Claude vision), Tax Pack (Schedule C CSV + 1099 reconciliation), Hustle Wrap share cards, Supabase sync + household/partner mode |
| Year-2 | Accountant handoff export, community benchmarks ("median margin for web-freelance projects: 62%, n=3,100" — the crowd-dataset moat), white-label for seller communities |

## Tech Stack (solo MVP, 4-6 weeks)

- **Next.js PWA** (installable, offline shell) + **IndexedDB** (Dexie) local-first store
- **Supabase** — sync, auth (magic link), row-level security; sync is a feature, not a dependency
- **Claude API** — receipt extraction (vision), Tax Pack narrative generation; plain SQL aggregation everywhere else, zero ML training
- **SES inbound** — email-a-receipt-to-your-ledger address (BillDelta pattern)
- **OneSignal** — zombie alerts, entry streak nudges, tax-season reminders
- **Vercel** deploy; weekly SSG pages for SEO magnets ("Etsy profit per listing calculator", "freelance per-project profit tracker")

## Monetization

- **Free forever:** 3 active projects, manual entry, Net Meters, CSV export, break-even radar. Entry density IS the dataset — free-tier-as-moat (PityTrack/OpenSign pattern).
- **Pro — $8/mo or $64/yr:** unlimited projects, Receipt Snap, zombie + tax alerts, Hustle Wrap, multi-year history, sync. Priced *under* FreshBooks' $19 floor and a third of QBO — the switch pitch again.
- **Tax Pack — $19 ONE-TIME:** the January spike. Full year-end export bundle + 1099 reconciliation + accountant-ready PDFs. Episodic pricing for an episodic event (NameSync/Reinstated model).
- **Year-2 B2B:** anonymized margin benchmarks for seller communities/freelance platforms; accountant handoff tier.
- **Never:** selling financial data, ads, bank-feed affiliate bounties. Ledger trust is the entire brand.

**Unit economics:** LLM cost per receipt ≈ $0.005-0.02. **TAM:** ~28M US nonemployer businesses + 70M gig workers. **Year-1 SOM:** 40K free registrations → 6% Pro ($64) ≈ $154K ARR + 2K Tax Packs ($38K) ≈ **$190K near-zero CAC**.

## Go-To-Market

- **Launch in the spark thread itself** + every "how do you track per-project profit" r/AppIdeas / r/freelance / r/EtsySellers / r/sweatystartup thread — this post format recurs **weekly** (LoreScribe pattern).
- **SEO magnets nobody owns:** "income vs expenses per project app", "Etsy profit per listing", "is my side hustle actually profitable calculator" — currently ranking: forums and blogs with zero product.
- **Share artifacts:** verdict-stamped Project Cards + Hustle Wrap are screenshot-native; every share is an ad.
- **Timing:** January Tax Pack spike + Q4 "what did my hustles actually make this year" wrap season = two recurring annual GTM events.

## Competitive Landscape

| Tool | Price | Why it loses |
|---|---|---|
| QuickBooks Self-Employed | $15-35/mo | No project profitability at all ("All income and expenses are lumped together" — Steph's Books 2026); dead-end product, no upgrade path |
| FreshBooks | $19/mo, no free tier | Invoice-centric; time-based client work, not multi-project P&L |
| Wave | Free | Bank-feed + chart-of-accounts complexity; categorization ≠ project verdicts |
| Klusek | Free-ish | Self-admittedly "households and events", not business bookkeeping (from the spark thread) |
| Excel/Sheets | Free | Dies of entry friction; no phone-first capture, no alerts, no break-even visuals |
| SideQuest (own catalog, 2026-04-17) | — | Gig-*platform* earnings aggregation for drivers; no expense side, no arbitrary projects |
| ShiftSnap (2026-02-25) | — | Hourly *shift* take-home for W2-adjacent workers; single employer, not multi-project |
| SplitShare (2026-03-04) | — | Social debts between friends; opposite direction of money |
| BillDelta (2026-10-31) | — | Audits recurring *bills* you can't cancel; NetNet tracks projects you chose to start |

**Positioning line:** *QuickBooks knows your business. NetNet knows your projects.*

## Design Direction (ui-ux-pro-max)

- **Concept:** "the ledger a shopkeeper would keep if they ran six shops" — warm paper, decisive stamps, honest math.
- **Palette:** ledger cream `#FAF6EC`, ink navy `#16202E`, profit green `#2F7D4F`, loss red `#C03A2B`, amber `#E8A33D` (break-even/warnings), faded stamp gray for zombie state.
- **Type:** Fraunces (display/verdicts) + Inter (UI) + JetBrains Mono (every number — money is monospace or it lies).
- **Signature components:** Net Meter bars with stamped break-even markers; verdict stamps that rotate-in on state change (🟢 IN THE GREEN is the only confetti this app fires); the 8-second entry sheet (bottom drawer, giant IN/OUT segmented control); ranked "Saturday Leaderboard" by true hourly.
- **Voice:** the honest bookkeeper friend — "here's what this project really paid you," never accounting jargon, every screen ends in ONE action: **Log, Review, or Export.**
- Dark-mode native (people log at night after the hustle); WCAG AA contrast on all money figures.

## Risks & Mitigations

- **"Just use Excel" inertia** → beat entry friction obsessively (8s or it's a failure); free tier must be genuinely useful forever.
- **Crowded fintech adjacency** → don't touch payments/banking/invoicing; the *verdict* per project is the product, not the money movement.
- **Churn after tax season** → Hustle Wrap + zombie alerts + Saturday Leaderboard keep it a weekly-open app, not an annual one.
- **Trust** → no credentials, local-first, export-everything. The ledger you can walk away from is the ledger you trust.

---

*Sources: r/AppIdeas thread (Nov 2, 2026) + comment thread via RSS; r/SomebodyMakeThis weekly/monthly top (poker-chip thread, Oct-Nov 2026); Steph's Books freelancer-bookkeeping comparison (Apr 2026); Cashflowy freelance accounting comparison (Aug 2026); Bench (May 2026); r/freelance tracking threads; SBA Feb 2026 counts via HireGround research; SideQuest market notes (2026-04-17).*
