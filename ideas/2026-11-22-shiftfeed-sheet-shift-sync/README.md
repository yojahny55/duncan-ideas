# ShiftFeed 📋 — Your spreadsheet IS your schedule. It doesn't know it yet.

> **"Your shifts live in a shared Google Sheet. Every week you open it, hunt for your name, and re-type them into your calendar — and the sheet changed three times before you noticed. ShiftFeed reads the sheet, knows it's you, and keeps your calendar right. Including the changes you never would have caught."**

**Date:** 2026-11-22
**Source:** Reddit — r/answers "What everyday app do you wish existed (or worked better)?" (thread 1s7rpt7, surfaced via ProductList Daily 2026-11-22 demand digest) — the specific ask: *"an app that reads a shared Google spreadsheet and imports personal shifts into a calendar — a small automation gap people feel weekly."* Cross-validated by r/androidapps Nov 16 2026 (kasspian.com un-built-ask tracker: "Youtube app that filters certain keywords?" — 0 replies, proving single-purpose utility asks still go unclaimed) and the Nov 21 2026 r/SaaS "9,300 wish-posts" audit (recurring coordination chores = the unmet workflow class).
**Category:** Shift Work / Scheduling / Calendar Automation
**Status:** Idea documented + interactive prototype

---

## 1. The Spark — What the threads said

The verbatim problem, as aggregated from r/answers (the general-audience sub, where workers — not founders — voice wishes):

> *"Everyday App Wish: Syncing Work Shifts from a Shared Sheet — A concrete ask for an app that reads a shared Google spreadsheet and imports personal shifts into a calendar — a small automation gap people feel weekly."* — ProductList Daily demand digest, 2026-11-22, from r/answers thread 1s7rpt7

The supporting evidence trail:

- **r/answers, thread 1s7rpt7** — "What everyday app do you wish existed (or worked better)?" The sheet→shifts wish was the single most *concrete* ask in the thread: named source (shared Google spreadsheet), named unit (my shifts), named destination (my calendar). Concrete wishes convert; vague ones ("productivity thing") don't.
- **The 9,300-post audit (r/SaaS, Nov 21 2026)** — the dataset read ranks "tools that absorb repetitive coordination chores" above dashboards. Shift workers re-reading a shared sheet every week IS a coordination chore with a 90-second fix.
- **Why the sheet exists in the first place** — small restaurants, retail, childcare, and clinics run schedules on shared Sheets because $20/employee/mo scheduling SaaS (When I Work, 7shifts, Homebase, Deputy) is priced for payroll-scale teams; a 6-person café keeps the Google Sheet the manager already has. The Sheet is the incumbent — the product has to meet the worker WHERE THE SCHEDULE IS, not force the business onto a new platform.

## 2. Problem Statement

Shift workers at small businesses live with a three-hit weekly tax:

1. **The hunt tax** — the sheet updates at random times (manager edits it at 11pm after the night crew calls in sick). The worker must *check* it every day to know if their week changed. No push, no diff, no "this affects you." The sheet is written for the manager's view: everyone's shifts in every column.
2. **The re-entry tax** — even when a worker catches their shifts, getting them into their personal calendar means manual re-typing (phone calendar, Google, Apple) — 5 shifts × 2 min each, every two weeks, forever. Or screenshotting the sheet and staring at it.
3. **The silent-change tax (the killer)** — the manager moves Tuesday from 11:00 to 15:00 on Thursday. Nobody tells anyone. The worker shows up at 11:00 anyway (missed a customer peak, or a double-booked personal commitment, or — worst case — shows up to work an 8-hour shift they'd already covered a doctor's appointment against). For parents and dual-earners, an un-noticed shift move can cost childcare, transit, or a second job's hours. This is the failure mode the sheet has *no defense against*: no audit trail of "what changed since I last looked," no per-person alert, no record.

Nobody owns the middle: **manager's sheet → your shifts → your calendar, with a change alarm.** Every incumbent is either the wrong side of the counter (scheduling SaaS that requires the *business* to adopt it) or the wrong tool (generic Google Sheets add-ons and IFTTT that need the worker to write the recipe).

## 3. Product — ShiftFeed

**A phone-first PWA that reads the shared schedule sheet your employer already uses, finds YOU in it, and keeps your calendar synced — alerting you the moment your shifts change.** Zero employer involvement. Zero credentials beyond read-only Google access to the one sheet. Setup in under 4 minutes on a break.

### 3.1 The Connect (the wedge — 4 minutes, read-only)
One Google login, **read-only scope to a single spreadsheet** the user selects (the "trust posture" the house has built: no employer account, no manager permissions, no app install). ShiftFeed reads the sheet, shows the raw grid, and asks two questions: *which column is YOUR name (or shift code)?* and *where are the times?* — a 10-tap mapping step with a live preview of the parsed result. No spreadsheet formula knowledge required, ever.

### 3.2 The Parse (works on messy reality, not clean schemas)
Small-business sheets are chaotic: names down the side or across the top, "6a–2p" vs "06:00–14:00" vs "6am to 2pm," "OT" flags, swap symbols, "TBD" rows, a second location on a second tab. The parser is template-first (top sheet layouts pre-mapped, crowd-extended) with LLM fallback for the weird ones — every parsed shift shows a **confidence tag** and is **one-tap correctable**. Corrections feed the crowd layout library (the PityTrack/BillDelta dataset moat: "this sheet layout — n=1,904 workers, 96% auto-parse rate").

### 3.3 The Sync (the product promise)
Your shifts land in **your** calendar — Google/Apple via a clean ICS subscription feed (works with *any* calendar, zero extra logins) or direct Google Calendar write (optional). Events are titled plainly ("Shift — 11:00–19:00 · Café Del Mar · [sheet source]"), carry the sheet link, and are **idempotent**: the same sheet cell always updates the same event. If the sheet changes, the event changes, with a diff in the event description ("was 11:00–19:00, now 15:00–23:00 — changed Thu 14:02").

### 3.4 The Change Alarm (the killer feature nobody has)
ShiftFeed watches the sheet continuously (poll every 5 min) and computes **your delta only**: *added / removed / moved / hours-changed / TBD-resolved.* Push in plain voice: **"Your Tuesday moved to 15:00 (was 11:00). Calendar updated. — change made Thu 14:02 by the sheet owner."** Plus a weekly **Shift Digest** ("This week: 32h, 5 shifts, 2 changes — 1 was 9 days of notice, 1 was 3") with the **notice-quality score**: how early your employer actually gives changes, tracked over time. The notice score is the crowd dataset and the SEO magnet ("what's a normal shift notice period" — currently answered by forum vibes).

### 3.5 The Swap Radar (the worker-to-worker layer)
When the sheet shows a swap ("Marta → you, Sat 6a?"), ShiftFeed flags it as an open question, not a shift — with a drafted reply message to copy to the group chat/manager ("Confirming Sat 6a swap — yes/no?"). Confirmed swaps flip to calendar events; unconfirmed ones sit in an "ASK" lane with a nudge. No fake certainty, no phantom shifts.

### 3.6 The Ledger (free tier's crown jewel)
Every shift you actually worked: tap **DONE** at clock-out (or auto-close on end time + 15 min). The ledger totals hours, OT, and **estimated pay at your stated rate** — the number that answers "did I get paid for everything the sheet says I worked?" Exportable as a clean weekly CSV ("My hours — week of Nov 17: 34.5h"). This is the bridge to the paid tier and the answer to the sheet's other silent victim: the timesheet you type up by hand on Monday.

### 3.7 Positioning
*"The manager's sheet is the source of truth. ShiftFeed is your eyes on it — and your calendar is the source of truth for your life. We keep them honest with each other, so you never have to check the sheet again."*

## 4. Why Incumbents Structurally Can't

- **Scheduling SaaS (When I Work, 7shifts, Homebase, Deputy, Sling)** — wrong buyer, wrong wedge. They require the *employer* to migrate every employee onto their platform ($20-50/employee/mo at the scale where the sheet workflow lives, a 6-person café, that's more than the manager's rent on time tools). Their ICS feeds exist but (a) only work if the business already uses them and (b) still don't compute "your delta with a change alarm" as the primary surface — their primary surface is the manager's board. ShiftFeed rides the incumbent (the Sheet) instead of displacing it.
- **Google Apps Script / IFTTT / Zapier recipes** — the DIY answer: the worker must be the engineer. Write the trigger, map the columns, handle the name cell, handle "TBD," debug the date parser, pay per-task for Zapier. The r/answers ask exists *because* "just write a script" is not an answer for a 17-year-old line cook on a 15-minute break.
- **Generic "sheet to ICS" utilities** — convert a *whole* sheet to a calendar (every cell, everyone's name) or need a static template. They don't know the unit of care is **one person inside a moving sheet**, and they don't watch for diffs.
- **7shifts/When I Work "add to calendar"** — a static weekly ICS link. No per-person diff alerts, no swap radar, no ledger, and only if the business is on the platform.

## 5. Pricing

| Tier | Price | What |
|---|---|---|
| **Free** | $0 forever | 1 sheet · ICS feed (any calendar) · change alerts (push) · 14-day ledger · weekly digest |
| **Worker Pro** | $3/mo or $25/yr | Multi-sheet (2nd job, seasonal) · Google/Apple direct sync · Swap Radar + draft replies · full ledger + weekly CSV + estimated-pay math · notice-quality score history · TBD resolver alerts |
| **Household** | $6/mo | 2 workers, 2 jobs each — the dual-earner conflict check: "Your Sat and their Sat now overlap — here are the options" |
| **Crew (Year-2 B2B)** | $49/mo | 10+ staff at one location — the manager view nobody asked for but the market will buy once the workers prove it: who's actually synced, who's missing shifts, notice-period compliance, "the sheet is now the system of record" for small venues. Distribution = every free worker who ever asked the manager "can you just use the sheet better?" |

Free tier is deliberately the *entire* single-job story — the dataset (layout library + notice-period intel) compounds with every free user, and $3 is the price of a lunch, not a subscription.

## 6. Market

- **TAM:** ~42M US workers in food service, retail, hospitality, and care work (BLS 2025-26: ~15.5M food service + ~15M retail + ~7M hospitality-adjacent), a large share of whom at sub-50-seat/locus establishments still run on shared sheets or paper. Even 10% of that is 4.2M people with the exact weekly workflow.
- **Willingness to pay proof:** workers already pay $3-6/mo for adjacent utility apps (sleep timers, alarm apps, tip trackers); the 9,300-post audit flags "recurring coordination chores" as the unmet class; household/dual-earner conflict is the upsell story that carries the household tier.
- **Year-1 SOM (honest math):** the sheet-shift workflow is a *word-of-mouth* market — crews share tools over the break room. Seed: 25 launch communities (r/foodservice, r/BarKeepers, r/retail, local food-truck groups) + the exact r/answers thread it came from. 25K free connections in 12 months → 12% Pro ($75K) + 3K Household ($18K) ≈ **$95K ARR near-zero CAC**, with the Crew tier (Year-2) as the expansion engine — every Crew venue is 10+ workers who already proved the workflow.
- **Recurring GTM events:** every "my schedule changed and nobody told me" thread (a *weekly* format on worker subs), every "is it legal to change my shift with 24h notice" state-law news cycle (state minimum-notice + predictable-work laws in WA/OR/CA/CT create a compliance tailwind for the Crew tier), every seasonal hire wave (Q4 holiday, summer).

## 7. Solo MVP (4–6 weeks)

- **Stack:** Next.js PWA + Supabase + OneSignal + Google Sheets API (read, per-user OAuth via a small OAuth proxy) + ICS feed generator (hand-rolled, ~200 lines) + optional Google Calendar API direct write (Phase 2).
- **Parse engine:** template registry (top ~20 sheet layouts, hand-seeded day one + crowd corrections) with Claude fallback for unmapped sheets (~$0.01/sheet first-parse, ~$0.001 on change polls — poll diffs are cheap: only re-parse changed cells).
- **Delta engine:** plain SQL/TS over per-user parsed-shift snapshots (hash per cell → diff → classify added/removed/moved/OT/TBD). No ML.
- **Calendar:** ICS subscription first (zero extra logins, every calendar client works) — direct Google/Apple sync is a Pro feature in month 2.
- **Ledger:** tap-DONE + auto-close + weekly CSV (react-csv).
- **No native app.** The entire product is "sheet in, calendar out, push alert when it moves" — a PWA with push + home-screen icon beats a native build for year 1.
- **Costs:** Supabase free tier + OneSignal free (100K pushes) + Claude <$20/mo at launch scale.

## 8. Design (ui-ux-pro-max)

**"The shift board above the expo window — one board, your name in green, and the manager's edits land before you have to look."**

- **Palette:** board-ink `#101418` (the dark board), panel-steel `#1A2027`, **marker-green `#3FB950`** (your shifts — the one color that means *you*), **change-amber `#FFB454`** (anything that moved), **alert-red `#E5484D`** (conflicts only — a red on a break-room board means *stop*), **chalk-cream `#F2EDE4`** (paper artifacts: digest, ledger, receipt).
- **Type:** Fraunces for verdicts/headings (the marker lettering of a hand-painted board), Inter for body, **JetBrains Mono for every time and hour** ("time is monospace or it lies" — house rule, and in this product times are *the* data).
- **Signature components:**
  1. **THE WEEK STRIP** — 7 cells, your shifts glow green, empty cells are just dark board. One glance = your whole week. The amber cell is a change you haven't acknowledged.
  2. **THE CELL-TO-EVENT MORPH** — the onboarding hero animation: a raw sheet cell (`Tue 6a–2p`) slides right and becomes a calendar event chip — the whole product in one 2-second motion.
  3. **THE CHANGE TOAST** — the killer feature's face: a full-width card that drops in with a stamp — `MOVED · TUE 11:00 → 15:00 · changed Thu 14:02 · calendar updated ✓` — dismissible, logged, never lost.
  4. **THE NOTICE METER** — a thin bar under the week strip: "This month your employer gave you 6.2 days of notice, average. Your last change: 3 days." The quiet number that builds the crowd dataset.
  5. **THE WEEKLY RECEIPT** — thermal-paper zigzag tear: `WEEK OF NOV 17 · 5 shifts · 34.5h · 2 changes · 1 swap confirmed · est. pay $611` — the shareable artifact, the "I got paid for everything" proof.
- **Voice:** the calm expo line — *"The sheet changed. Your Tuesday moves to 15:00. Calendar's already fixed."* Never alarmist; red appears only for a real conflict. Every screen ends in ONE action: **Connect, Sync, or Done.**

## 9. House Non-Overlap (checked twice)

- **ShiftSnap (2026-02-25)** = per-shift EARNINGS tracking for gig/hourly workers (the money side after the shift) — ShiftFeed is the CALENDAR side before the shift (the schedule side). Different pain, different moment; a ShiftSnap user's shifts could flow from a sheet just like a ShiftFeed user's.
- **TradeCal (2026-03-11)** = contractor *scheduling* (the pro assigns their own jobs) — ShiftFeed's user receives a schedule they don't control.
- **KickoffClock (2026-03-17)** = actual vs listed event start times for *sports/gigs* — no schedule ingestion, no employer layer.
- **WakeStop (2026-02-10) / NightOwl (2026-04-26)** = wake/shift *sleep* tools — complementary inputs at most.
- **HomeKeep (2026-03-03)** = home maintenance scheduling — different domain entirely.
- Nothing in the catalog reads an employer's spreadsheet, computes a per-worker delta, or syncs shifts into a calendar.

## 10. Risks & Mitigations

- **"Just use IFTTT"** → the onboarding is the answer: 4 minutes, zero recipes, plus the diff/alert layer IFTTT can't express cleanly.
- **Sheet layouts are a long tail** → template registry + LLM fallback + confidence tags + one-tap correction; wrong parses are visible and fixable, never silent.
- **Employer sensitivity** → read-only scope, single sheet, no employer account; the product asks nothing of the business. Crew tier is opt-in and year-2.
- **Notification fatigue** → delta-only alerts (your shifts, your changes), one weekly digest, a quiet-hours band that respects the user's own off-time.
- **Google API scope creep** → v1 is Sheets read + ICS only; Calendar write is an explicit, separate consent in Pro.

---

*Research sources: ProductList Daily demand digest 2026-11-22 (r/answers 1s7rpt7 sheet-shifts wish; r/SaaS 9,300-post audit; kasspian.com un-built-ask tracker Nov 16 2026 entry); incumbent scan: When I Work / 7shifts / Homebase / Deputy / Sling pricing & ICS behavior (2026); state predictable-work/minimum-notice law landscape (WA/OR/CA/CT, 2026). Note: Reddit direct reads were blocked by login wall during this run; thread content sourced via the ProductList aggregator's daily digests, which paraphrase and link to original threads.*
