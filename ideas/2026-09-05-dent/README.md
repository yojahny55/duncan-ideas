# Dent 🔨 — The Procrastination Shrinker

> **Every avoided task is bigger in your head than in reality. Dent shrinks it to the next 10 minutes.**

**Date:** 2026-09-05
**Source:** Reddit — r/AppIdeas + r/productivity top threads (week of Sep 1–5, 2026)
**Category:** Productivity / Mental health-adjacent / Local-first AI
**Status:** Idea documented + interactive prototype (`prototype.html`)

---

## 1. The Spark — What Reddit Was Screaming This Week

Two things converged on Reddit this week:

**A. The r/AppIdeas thread that hit a nerve:**
> *"What's a task you've been avoiding for way longer than it would actually take to finish? Why do you think it's that one specifically?"* — posted this week, one of the top threads in the sub, with a comment section full of confessions.

The answers weren't about laziness. The top comment describes trying to clean the living room and spiraling: every object you touch "belongs somewhere else," so a 20-minute tidy becomes a whole-condo project and you quit before you start. The thread's own title contains the core insight — **people avoid tasks for *far longer* than the tasks actually take.** The dread is 3 hours; the task is 12 minutes.

**B. r/productivity's weekly top is the same wound, five ways:**
- *"Struggling with motivation and procrastination - stuck in a cycle"*
- *"Tasks and projects that you find important yet can never seem to prioritize doing?"*
- *"How the hell do people have enough time to do ALL the 'healthy adult' things?"*
- *"Can someone please guide me how to sit 3-4 hours straight for study!???"*
- *"How do I be more productive, days passing by but I'm just wasting my time"*

Note what's *not* in these threads: anyone asking for a better to-do list. These people already have to-do lists. The lists are the problem — every app they use shows the avoided task in red "overdue" text, which is shame, and shame is exactly what fuels avoidance.

**Corroborating signal:** the #1 post in r/AppIdeas this week was *"app that turns saved Instagram Reels into action plans"* — the same root pain in content form: a backlog of things you saved/intended that mocks you instead of moving you. People don't need more capture. They need **activation**.

Nobody is building the tool for the specific moment of *can't start*. Todoist manages tasks you've committed to. Notion organizes projects you're excited about. The avoided task — the one you've been dodging for 6 weeks that is actually 12 minutes of work — has no home except your anxiety.

## 2. Problem Statement

**The perceived size of an avoided task diverges wildly from its actual size, and every existing productivity tool amplifies the divergence instead of closing it.**

How avoidance actually works (the loop the Reddit threads describe):

1. A task enters the head as something **vague and big**: "clean the condo," "file taxes," "fix the portfolio site."
2. Vague → no obvious first move → the brain estimates effort by *dread*, not by minutes. Dread says 3 hours.
3. The task goes on a to-do list. It ages. Apps mark it **overdue, red, badge-counted**. Each reminder is a micro-shame event.
4. Shame → avoidance → more aging → more shame. The task becomes an identity ("I'm the kind of person who hasn't filed their taxes").
5. When it finally gets done, it takes **a fraction of the dreaded time** — confirming the thread title: you avoided it for months over something that was 20 minutes.

Concrete costs:
- **Weeks-to-months of delay** on high-value, low-effort tasks (a phone call, a form, an email).
- **Background anxiety tax** — an open loop consuming working memory 24/7 (the Zeigarnik effect, weaponized by your own backlog).
- **Shame spiral** — overdue-based apps actively make the core problem worse for avoiders, ADHD users, and anyone in a low-execution season of life.
- **Cascade quit** — starting a task reveals sub-tasks ("this belongs in the other room"), the scope explodes mid-task, and the person bails with the job half-done and feeling worse.

## 3. The Solution

**Dent is an app with exactly one job: convert a vague, dreaded task into a shrunk, timed, next-physical-action — and get you 10 minutes into it.**

### Core mechanics

1. **The Dump.** One input: *"What are you avoiding?"* You type the vague dread ("clean condo", "taxes", "reply to that email from July"). No projects, no tags, no due dates — due dates are the enemy here.

2. **The Shrink (AI-powered).** Dent decomposes the dread into a **Shrink Report**:
   - **Actual time estimate:** "This is a ~35-minute task, not a Saturday." (LLM-generated, calibrated against completion data.)
   - **The smallest next physical action:** not "clean condo" but "put the 5 dishes in the sink." One body movement. Zero decisions.
   - **The stop rule:** pre-committed permission to quit — "Do the next action. If you want to stop after, stop. No guilt, we'll shrink it again tomorrow."
   - **Cascade guard:** a captured "parking lot" for sub-tasks discovered mid-flow ("this belongs in the other room" → park it, don't follow it), which directly fixes the top comment's spiral.

3. **Dent Timer.** A 10-minute timer (adjustable, but 10 is the default and the brand). You're not committing to the task; you're committing to *10 minutes at the task*. When it rings, you may stop — the app celebrates the dent either way. Most people don't stop (activation energy is the whole barrier), but the *permission* is what makes starting possible.

4. **The Wall of Dents.** History view: every dent made, with dreaded-time vs. actual-time. Over weeks this builds the one belief that kills chronic avoidance: *"My dread overestimates by ~10x. The report card proves it."* A personal calibration score: **Dread Ratio™**.

### Anti-shame design rules (non-negotiable)

- **No overdue states.** A task can't be late. It can only be not-yet-shrunk.
- **No streaks that break.** Dents accumulate; missed days just... don't add. No red zeros.
- **No red badges, no notification guilt-trips.** Nudges are curious, not accusatory: *"The taxes thing. Still 12 minutes. Wanna make a dent?"*
- **Tasks can be dismissed with dignity:** "Not now" and "Never — retire it" are first-class actions. A retired task is a closed loop, not a failure.

## 4. Target Users

| Segment | Why they bleed | Willingness to pay |
|---|---|---|
| **ADHD adults (dx or self-identified)** | Task initiation is *the* executive-function deficit; "body doubling" and artificial urgency are known interventions — Dent is a productized version of both | High — this audience already pays for Inflow ($48/mo), Routinery, Tiimo |
| **Chronic avoiders with normal brains** | The r/productivity demographic: functioning, but carrying 3–10 aged dread-tasks | Medium — $4–6/mo impulse-buy range |
| **Students (exams, applications, thesis)** | The "sit 3-4 hours straight for study" thread is a student; deadlines create mega-dreads | Medium, seasonal spikes (Sep, Jan, Apr) |
| **Freelancers/solo devs** | Admin tasks (invoices, taxes, that one client email) get avoided because billable work feels more legitimate | High — time is literally money |

Beachhead: **ADHD-adjacent Twitter/TikTok/Reddit productivity communities** — the exact people who were commenting on this week's threads.

## 5. Competition & Wedge

- **Todoist / Things / TickTick** — list managers. Their overdue mechanics *punish* avoiders. Dent never shows a list; it shows one shrunk action.
- **Finch / Habitica** — gamified self-care, but built on daily habit streaks (streak-break shame) and cute-pet guilt. Dent has no streaks and no pet that dies.
- **Body doubling (Focusmate, Flow Club)** — real humans on camera, $10–20/mo, scheduled sessions. Heavyweight. Dent is the 2am, alone, anonymous version: the *feeling* of body doubling via a shared timer lobby (later feature) without the calendar commitment.
- **AI planners (Reclaim, Motion)** — auto-schedule your calendar for tasks you already defined. Wrong end of the funnel: they optimize *committed* work. Dent activates *uncommitted* dread.
- **"Two-minute rule" GTM lore** — the concept exists in books; nobody has shipped it as a calibrated product with dread-vs-actual telemetry.

**The wedge: the Dread Ratio.** No competitor measures the gap between estimated and actual effort across a user's history. That data (a) delivers the core psychological intervention (proof your dread lies), (b) improves the AI shrinker over time, and (c) is a marketing asset — "On average, Dent users dread tasks 8.4x longer than they take."

## 6. Tech Stack

**Client (PWA first, then wrapper):**
- **React + Vite + TypeScript**, Tailwind — ship as PWA in week 1 (the demo is already an HTML prototype; PWA is the honest MVP)
- **Capacitor** wrap for App Store / Play Store once retention proves out
- Local-first storage: **SQLite via wa-sqlite / OPFS** in the browser; task data never required to leave the device

**Backend (thin):**
- **Supabase** (Postgres + auth) for sync and account features — free tier carries MVP
- **Cloudflare Worker** as the LLM proxy (keeps API keys server-side, rate-limits free users)

**AI (the Shrink engine):**
- LLM via proxy: **Claude Haiku / GPT-mini class** model — decomposition + time estimate + next-action phrasing is a small, cheap prompt (~$0.001/shrink)
- Structured output: `{ actualMinutes, nextAction, stopRule, parkPrompt }`
- **Calibration loop:** every completed dent feeds (estimated vs. actual) back per user and per task-category → few-shot context for future shrinks → the Dread Ratio gets honest over time
- Offline fallback: heuristic templates per category (admin / cleaning / creative / social-reply) so the core loop works with no API

**Notifications:**
- Web Push (PWA) → Expo/ Capacitor local notifications in the wrapped apps
- Copy rules enforced in code: nudges may not contain shame vocabulary (no "overdue," "late," "you forgot")

## 7. Monetization

**Freemium, guilt-free pricing (the pricing page must match the anti-shame brand):**

- **Free forever:** 3 active dread-tasks, unlimited Dent Timer, manual shrink (pick your own next action), full Wall of Dents. The core loop is never paywalled — paywalling it would strand the most vulnerable users.
- **Dent Pro — $4/mo or $30/yr:**
  - AI Shrink Reports (unlimited)
  - Dread Ratio analytics + weekly "avoidance audit"
  - Cascade Guard parking lot with auto-capture of sub-tasks
  - Cloud sync across devices
- **Launch offer:** $20/yr founding members (the ADHD community is price-sensitive but loyal; annual plans fix churn).
- **Later / B2B:**
  - **Dent Lobby** — anonymous shared timer rooms (body doubling without cameras). Free tier: 1 room/day; Pro: unlimited. This is the Focusmate-killer feature and it compounds retention.
  - **Coach/therapist white-label** — clinicians assign shrinks between sessions ($15/mo per clinician).
  - No ads. Ever. Ads on a shame-vulnerable audience is brand suicide.

**Back-of-napkin:** 50k PWA MAU at 6% conversion × $30/yr ≈ **$90k ARR** — a solid solo-dev business, with the Lobby feature as the viral/PR hook ("the app that proves your dread lies to you" is a self-pitching headline).

## 8. MVP Scope (2-week build)

1. Dump input → AI Shrink Report (proxy + fallback templates)
2. 10-minute Dent Timer with stop-permission ritual
3. Wall of Dents (dreaded vs. actual, per task)
4. Dread Ratio on profile
5. Local-first storage; Supabase sync behind Pro flag
6. PWA manifest + push nudge (one curious, non-shaming nudge/day max)

**Kill criteria:** if D7 retention < 15% or <30% of shrunk tasks start a timer within 48h, the "shrink" framing isn't activating people — pivot the intervention (e.g., lead with Lobby body-doubling instead of solo shrinks).

## 9. Prototype

`prototype.html` in this folder — a working mobile-frame demo of the core loop:
dump a dread → watch the Shrink Report generate → start the Dent Timer → log the dent → see the Wall of Dents and your Dread Ratio. Fully client-side, no dependencies, try it in a browser.

---

*Generated by Duncan's Daily App Ideas — 2026-09-05. Sources: r/AppIdeas top/week ("What's a task you've been avoiding...", "app that turns saved Instagram Reels into action plans"), r/productivity top/week (procrastination cycle, prioritize important tasks, healthy adult things, study stamina threads), retrieved via RSS 2026-09-05 06:07 ET.*
