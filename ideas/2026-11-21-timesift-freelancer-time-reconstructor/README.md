# TimeSift ⏳ — The timesheet that reconstructs itself

> **"You didn't forget to start the timer. You forgot what you were doing. TimeSift remembers what you were doing — then you just check the math."**

**Date:** 2026-11-21
**Source:** Reddit — r/SideProject Mar 7 2026 (32 comments), r/apps Sep 20 2026, r/SaaS Aug 1 2026, r/AskMen Sep 21 2026, r/AppIdeas Oct 23 2026
**Category:** Freelancer/Contractor Productivity / Time Tracking / Invoicing
**Status:** Idea documented + interactive prototype

---

## 1. The Spark — What the threads said

The verbatim problem, from a freelancer in r/SideProject (Mar 7, 2026, one of the top answers to "what's a problem you face almost every day that no tool has solved well yet?"):

> *"Tracking time accurately as a freelancer. Not just forgetting to start the timer, but losing the context of what I was actually working on when I did remember. I ended up reconstructing timesheets at end of week from git commits and calendar events, which is mostly fiction anyway."* — u/siimsiim

The same week of the year, every sub asks the same question and gets the same answer:

- **r/apps, Sep 20 2026** — "What's a problem you face every day that no app has solved yet" (the top answer is literally: *would someone share the solution instead of posting the question?* — meaning the gap is real and unowned).
- **r/SaaS, Aug 1 2026** — dev thread, 33 comments, same prompt, same dead-end.
- **r/AskMen, Sep 21 2026** — "What's something you genuinely wish there was an app for, but nobody seems to have made well?"
- **r/AppIdeas, Oct 23 2026** — an indie mobile dev explicitly crowdsourcing problems, asking *"Is there a paid feature you wish were available in a simpler, affordable alternative?"* and *"Have you searched for an app to solve something but couldn't find a good option?"*
- **r/IsThereAnApp, Jan 2 2026** — steady drumbeat of "no app does X" posts; the appetite for small, sharp tools is constant.

**The 2026 twist:** AI copilots made the *execution* layer cheap — now freelancers do more work, in more context (agent output to review, PRs to triage, client calls to prep), in shorter bursts. Manual timers don't just get forgotten; the work's *context* becomes harder to recall by Friday. The person isn't lazy. Their Tuesday is unrecoverable.

## 2. Problem Statement

Freelancers and contractors bill on time, and the timesheet is the invoice's source of truth. The current toolchain fails in three distinct ways:

1. **The timer tax (Toggl/Clockify/Harvest model):** work must be interrupted to start/stop a timer. Reality: people forget, feel watched, or start it 20 minutes late. The timesheet under-reports billable hours — every untracked minute is revenue silently lost.
2. **The context gap (the actual unsolved problem):** even when you remember, *what was it for?* "Chrome — 2h 40m" is fiction. The human brain cannot reconstruct, on Friday, which 34 minutes were client Acme vs. internal admin vs. a personal detour. The r/SideProject comment is the spec: they hand-reconstruct from git + calendar, and call the result "mostly fiction anyway."
3. **The passive-logger trust wall (RescueTime/ActivityWatch model):** always-on capture exists, but it reports **you against yourself** (bar charts of app time, focus scores). Nobody maps it to *client / project / task / billable* — the units a freelancer is actually paid in. So passive logs stay a vanity mirror, not an invoice.

Nobody owns the middle: **passive capture → explainable reconstruction → editable, client-mapped, billable timesheet.** Every incumbent is one of the three above.

## 3. Product — TimeSift

**A local-first, passive time-reconstructor that turns your day into a billable timesheet you can verify in 90 seconds.** The unit of care is the **session**: a chunk of work with *what* (window/URL/app), *where* (client/project via learned mapping), and *why* (evidence: git branch, calendar event, repo, doc title).

### 3.1 Passive Capture (the wedge — 2 minutes to install)
A small local agent (macOS/Windows, later mobile) records foreground window/URL/app at 30s resolution, **entirely on-device**. Optionally it ingests context feeds: git commits (repo → client mapping), calendar (events as session anchors), and — with explicit opt-in — commit messages only (never file contents). Nothing raw ever leaves the machine.

### 3.2 The Reconstruct (the magic, and the differentiator)
At end of day (or on demand), TimeSift assembles the day as an **editable, explainable timeline**. Each session shows its **evidence card**:

```
▸ 14:02–14:36 · 34m
  chrome → github.com/acme/checkout/pull/412
  git: branch feat/checkout-retry, 2 commits (14:11, 14:28)
  ↦ mapped to: Acme — Checkout refactor (94% confidence)
  [keep] [reassign] [mark non-billable]
```

Mapping is rules + history (repo/URL/domain → client, learned once, applied forever), not a black box. Every assignment is one-tap editable, and the confidence tells you which sessions need a human look. The Friday ritual is *reviewing 15 ambiguous sessions*, not *reconstructing 8 hours from memory*.

### 3.3 The Fiction Report (the honest metric)
Once per week: *"Your remembered timesheet would have covered 61% of actual billable work. Untracked time this week: 9h 40m — ~$490 at your rate."* The report makes the revenue leak visible, which is the activation moment. (This is the metric the r/SideProject commenter has never seen anyone measure.)

### 3.4 Billable / Non-Billable Auto-Sort
Meetings with client contacts → billable; internal Slack, admin, personal domains → non-billable, by learned rules. Weekly output: **billable rate** (the number freelancers obsess over and can't measure), per-client breakdown, and the gap.

### 3.5 Export Layer (meet them where they get paid)
One click: CSV, Toggl import, Harvest, QuickBooks Online, or a formatted **weekly client report** ("Acme — 12h 30m — checkout retry, invoice #1182"). The white-labeled report is the feature clients *like* — transparent freelancers retain better.

### 3.6 Positioning
*"Toggl watches your conscience. RescueTime watches your focus. TimeSift watches your invoice."* Capture is passive, reconstruction is explainable, the timesheet is yours to edit — because you're the accountant of your own life, and the math should be 90 seconds, not a Friday night.

## 4. Why Incumbents Structurally Can't

- **Toggl / Clockify / Harvest** — timer-first DNA; the entire product is the start/stop button. Making it passive breaks their core loop (and their per-timer pricing). No context reconstruction: they'd need capture agents + mapping they've never built.
- **RescueTime / ActivityWatch** — passive capture exists, but the report is *self-analytics*, not *client-billing*. RescueTime is B2C focus/privacy-averse; adding client/project/billable mapping is a whole different product line aimed at working professionals — a category pivot. ActivityWatch is an OSS local dashboard, not an invoice pipeline.
- **The "AI timesheet" startups** — they transcribe meetings or summarize calendars. Nobody does the **session-level evidence reconstruction** (window + git + calendar → editable client-mapped rows). The gap is the mapping and the editability, not the capture.
- **Toggl Track (passive mode)** — captures app time, but: no git/URL-level context, no explainable per-session evidence, no client mapping you can audit, and the timesheet still needs manual assembly. It proves demand and leaves the product unbuilt.

## 5. Pricing

| Tier | Price | What |
|---|---|---|
| **Free** | $0 | 1 client, passive capture, daily Reconstruct, CSV export, 30-day history — the fiction report is **included on free** (it's the activation + word-of-mouth engine: "$490 untracked this week" gets forwarded) |
| **Solo** | $8/mo or $59/yr | Unlimited clients, git + calendar context, Fiction Report history, Toggl/Harvest/QuickBooks export, 1-year history |
| **Studio** | $19/mo | 5 client workspaces, white-labeled weekly client reports (the retention feature), team seat, rate cards |
| **Agency (yr 2)** | $49/mo | 20 seats, per-client reporting, CSV-to-invoice pipeline, SSO |

**Never:** raw screen captures, file contents, or message bodies on servers — aggregates and metadata only. Local-first is the trust posture *and* the compliance story. A freelancer who recovers 5h of untracked billable time in month one pays $60/yr forever.

## 6. Market

- **Size:** ~76M freelancers in the US alone (BLS/Upwork 2025–26 figures); ~1.5B globally (WEF). Time-tracking software is a $1B+ market with incumbents priced on seats, not on recovered revenue.
- **Trend:** the AI era moved the freelancer bottleneck from execution to **review, context-switching, and admin** — more, shorter, less-recoverable work sessions (the exact pattern r/SaaS Aug 1 2026 described: "the bottleneck moves from execution layer to review layer"). Manual timers degrade exactly when the work gets burstier.
- **Buyer:** hourly-billing freelancers and contractors (devs first — git context makes their sessions the most reconstructable; then designers, writers, consultants, video editors).
- **Year-1 SOM:** 5K freelancers → 20% paid (1K × $59 ≈ $59K) + 300 Studio ($19 × 300 ≈ $68K) ≈ **$100–150K ARR**, near-zero CAC.
- **Recurring GTM (the flywheel):** "my timesheet is fiction" is a *permanent* r/freelance / r/AskFReelancers format. The Fiction Report number is the shareable artifact ("I found $490/week I was leaving on the table"). Launch in the exact threads asking for it (there's a fresh one every ~3 weeks — see the source list above).

## 7. Solo MVP (4–6 weeks)

- **Tauri agent** (Rust, ~1500 lines): foreground-window/URL sampling at 30s, SQLite on-device, 30s battery/CPU budget. No screen capture.
- **Next.js PWA + Supabase/Postgres:** daily Reconstruct view, mapping rules (repo/domain → client), editable sessions, weekly Fiction Report, exports (CSV + QuickBooks CSV spec).
- **Context feeds v1:** local git (scan `~` repos for today's commits) + Google Calendar read-only. Slack/email: yr 2.
- **Mapping:** plain rules + learned history (Postgres), no ML needed at MVP; the confidence score is rule-match strength, honestly computed.
- **Claude (optional, ~$0.02/day):** phrasing the weekly Fiction Report and client-report prose. Everything else is deterministic.

## 8. Design (ui-ux-pro-max)

**Concept:** *"the Friday ledger, rebuilt before your eyes."* Warm paper-and-ink aesthetic (the timesheet as an artifact, not a dashboard): left rail = the reconstructed day as stacked session cards with evidence chips; center = the week; right = the Fiction Report dial. Motion: sessions **sift** into place on load (the name, made literal). Palette: cream `#F7F3EA`, ink `#1E1B16`, billable amber `#C77B2B`, non-billable slate `#8A8F98`, one-tap affordances everywhere. Type: Fraunces (display) + Inter (data). Mobile = read-only digest + the daily 90-second review push ("12 sessions, 3 need a look, est. billable 6h 10m").
