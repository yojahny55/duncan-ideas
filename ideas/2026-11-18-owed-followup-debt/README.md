# Owed — the app that remembers what you owe people

> "You said you'd get back to them. Owed makes sure you actually do."

**Date:** November 18, 2026
**Source:** Reddit (r/androidapps, r/Mommit, r/AskReddit, r/AppIdeas)

---

## The Spark

On Reddit's r/androidapps "What's one app you wish existed?" thread (Oct 2025, 75 pts / 150 comments), the top organic answer wasn't a to-do app, a tracker, or a productivity suite. It was:

> **"Save WhatsApp messages for follow up"** — 44 points

The same pain recurs in different clothes everywhere: r/Mommit (Oct 2025): *"I wish there was an app that would take the mental load of having to remember everything… I wish it would just call me like a real assistant who has my calendar and to-do list."* r/AskReddit's perennial "what do you wish there was an app for" threads keep producing the same three answers: parking, penalties for missed goals, and *things I promised people that are now rotting in a chat thread*.

The common thread is not task management. It's **follow-up debt**: every human who carries more than three active relationships — clients, coworkers, family, friends, vendors — accumulates promises. *"Let me send you that doc." "I'll call you back." "Let's grab lunch soon." "I'll check and get back to you."* Each one feels settled at the moment it's typed. Then the thread scrolls away, and the promise quietly becomes a broken commitment.

Nobody sells "follow-up debt" as a category, which is why the answers are scattered across task managers (too generic), CRM follow-up features (B2B only, sales only), and note apps (zero context, zero urgency). The debt is invisible until someone says "hey, did you ever get that to me?" — and by then the damage is a lost client, a cold friend, a missed renewal.

**Why now:** on-device small LLMs can scan a message and extract (what / who / when) in milliseconds without the text leaving the phone — which removes the privacy objection that killed every "sync all your chats to the cloud" follow-up app from 2016–2023. The extraction that used to need GPT-4 API calls at cloud cost + trust now runs on-device for $0.

## Problem Statement

**Follow-up debt is the invisible tax on every human who communicates.** Every person with real obligations (profession or personal) makes dozens of soft commitments a month — "I'll get back to you," "let me check," "we should do this soon" — and a meaningful share of them are never closed. The failures cascade:

- **Professionally:** a forgotten "let me send you the proposal" is a lost client. Sales and BD people know this so well that an entire industry of "follow-up discipline" advice exists — and it fails because it depends on memory and willpower at the exact moment attention is consumed by the next conversation.
- **Personally:** the "let's grab lunch soon" that happens 4 times and never happens is how friendships die quietly. The parent coordinating school, doctor, and in-laws in five group chats is drowning in the mental load that r/Mommit threads describe.
- **The data backs the shape of the problem:** follow-up timing is the #1 cited factor in B2B deal win-rate (the "one follow-up that never happens" is the most repeated stat in sales training); and the mental-load literature (the origin term from domestic-work research) consistently identifies "remembering to do the thing" — not doing it — as the heaviest load.

**Why existing tools fail:**

| Tool type | Why it misses |
|---|---|
| Task managers (Todoist, Things) | Require you to *remember to create the task at the moment of the promise* — the exact moment when attention is fully inside the conversation and least available for meta-work |
| Reminders app | No context (whose thread? what was promised?), no relationship weight, no "close the loop" workflow |
| CRM follow-ups | B2B/sales only, clunky, and nobody puts their mom in a pipeline |
| "AI assistant" chat apps | You have to go *to* them; the debt lives in your inboxes and chat apps, not in the assistant |

The winning posture: **capture at the moment of the promise, in the conversation, with one gesture.** That's the wedge no incumbent owns.

## Target Users

1. **Freelancers, consultants, sales/BD (primary wedge).** 25–45, 30+ active conversations, income depends on follow-through. For them, Owed is a revenue tool: every debt has an explicit dollar tag ("client A — proposal, $8K deal") and the follow-through stat is their personal KPI. They already buy this category in CRM seats.
2. **Ops-heavy professionals — account managers, event planners, realtors, recruiters.** High contact counts, every contact has a pending loop, and dropping one is visibly embarrassing.
3. **The "mental load" demographic (expansion, r/Mommit signal).** People coordinating household + family + work across chat apps who feel the constant low-grade anxiety of "is there something I'm supposed to be doing?" Owed's calm, finite queue ("you owe 3 people, that's all") is the product.

Wedge first = group 1 (they pay, they evangelize, their use case is easiest to demo). Groups 2–3 follow the same product, different copy.

## Proposed Solution — Owed

**Owed turns "I'll get back to you" into a tracked loop with a proof of closure.** Local-first; your chat text is parsed on-device and never uploaded.

### 1. One-gesture capture (the wedge)
At the moment you type or receive "let me check and get back to you," you share/forward the message to Owed — or (iOS share sheet, Android intent share, Gmail forward-to-Owed, Slack/Teams "follow up" action). A small on-device model extracts in <300ms:

- **The commitment:** "send Maria the Q3 numbers"
- **The person + relationship weight:** Maria · client (auto-ranked from contact frequency + your tags)
- **A smart due date:** derived from the language — "tomorrow" → tomorrow 9am; "soon" → +48h; "asap" → +4h; no time → +24h for professional contacts, +5d for casual. User can override in one tap.

### 2. The Debt Queue (the home screen)
One finite list, ranked by (relationship weight × age × cost if ignored). Every card shows: who, what you promised, when you promised, smart due, source thread. Chips: **Fresh / Due soon / Overdue / Closed**. The entire product promise in one line: *your debt is finite, visible, and you can clear it.* Overdue items don't nag with push spam — they sort to the top and the queue badge shows a count, which is more respectful and more effective.

### 3. Loop Closure (the killer feature)
Opening a debt shows the original message (context) + a one-tap **reply draft** generated on-device from the commitment + your actual status ("here's the Q3 numbers — attached") + the send path (opens WhatsApp/SMS/Email to that person with the draft pre-filled). After sending, Owed marks the loop **Closed with proof** (sent-at timestamp + channel). No app ever auto-sends anything — you review and send. The "proof of closure" is the artifact that makes the stat meaningful.

### 4. Follow-Through Score (retention + virality)
Weekly rollup: "Closed 9 of 11 loops (82%). 1 overdue 6 days: Tom — 'pick up the paint'." The score is the habit loop — people protect it like a streak. Monthly "follow-through report" is shareable (deliberately: "I closed 94% of my follow-ups this month" is a flex that does the marketing).

### 5. Integrations (post-wedge, month 3–6)
- **Email:** IMAP/Google/Microsoft inbox scanning for "I'll follow up" patterns (opt-in, local where possible)
- **Slack/Teams:** "turn into follow-up" on any message (official APIs)
- **WhatsApp:** forward-to-Owed email address + (region-dependent) WhatsApp Business Cloud API for business accounts — no scraping, ever
- **Calendar:** overdue debt becomes a calendar block ("15 min: close 3 loops")

### What Owed is NOT
- Not a task manager (you can have both; Owed is only for things you *owe another person*)
- Not a CRM (no pipeline, no deals, no stages)
- Not a chat app (it's a layer above your existing conversations)

## Tech Stack

**Prototype → v1 (mobile-first, iOS + Android):**
- **Frontend:** React Native + Expo (one codebase, share sheet/intent hooks both covered), TypeScript. Tailwind-like styling via NativeWind.
- **On-device extraction:** small local model (Llama-3.2-3B-class via MLC on iOS/Android, or CoreML/MLC) running a structured-extraction prompt → JSON `{commitment, person, due_hint, tone}`. Fallback: rule-based regex heuristics ("will + verb", "let me", "get back to you", "soon", "tomorrow") so the app works even with the model disabled. All parsing on-device; only the debt cards (not raw chat) sync to the backend.
- **Backend:** Supabase (Postgres + RLS + auth + realtime) — the debt cards, closure proofs, and stats. Cheap, boring, fast to ship.
- **Notifications:** APNs/FCM via Expo Notifications; smart batching (one "your loop is due" daily digest, no spam).
- **Drafting:** on-device LLM generates the reply draft; send happens in the native mailer/SMS/WhatsApp intent — Owed never holds messaging credentials.
- **v1 integrations:** Gmail (Google OAuth, IMAP read), calendar.

**v2+ (month 6–12):** Slack/Teams official APIs, WhatsApp Business Cloud API for pro accounts, Teams/enterprise plan with SSO, Mac widget (WidgetKit/Watch) for the debt count.

**Deliberate architecture choice:** the moat is *distribution into the conversation moment* (share sheet, email forwards, in-app actions), not model quality. Keep the backend trivial so the app can be rebuilt in a weekend if the platform shifts.

## Monetization

- **Free (forever):** 10 active debts, on-device capture, queue + closure + weekly score. This is genuinely useful — it's the wedge product, not a crippled trial.
- **Owed Pro — $4.99/mo or $39/yr:** unlimited debts, smart due dates, reply drafts, email inbox scanning, follow-through history & monthly report, calendar blocks, unlimited integrations.
- **Owed for Teams — $12/user/mo (year 2, sales/BD teams):** shared team debt queue (never miss a "we'll send you the contract"), team follow-through dashboard, Slack-native, CRM export (HubSpot/Salesforce one-way). This is where the revenue actually lives — a 10-person BD team is $1,440/mo ARR.
- **Expected mix:** 5–8% free→Pro conversion (streak-protecting habit products do well here); Teams is the growth engine from year 2.
- **Anti-churn design:** the follow-through score is personal history — people don't cancel what holds their own record. Data export is a tap away (trust = retention).

## Moat & Risks

**Moat:** (1) the capture habit — once your loop history lives in Owed, switching cost is real; (2) the closure proof dataset is unique (what people *actually* follow up on, in what time, with what reply); (3) distribution wedge (share sheet) is under-owned — the big players' in-app follow-up features are B2B and clunky by design.

**Risks:**
- *WhatsApp/Slack could ship "pin as follow-up."* Mitigation: they'll ship it poorly (they've had years) and won't cross personal + professional; Owed's cross-channel queue and score are the defense.
- *On-device extraction quality on edge cases.* Mitigation: the user reviews/edits the card in one tap; rules fallback; every correction is local training signal.
- *Privacy backlash if we ever sync raw chat.* Non-negotiable rule: **raw conversation text never leaves the device.** Only the extracted debt card syncs. Ship a local-only mode.
- *Habit-app graveyard risk.* Mitigation: Owed's habit is anchored to *other people's expectations*, not self-will — the social stakes are the retention engine, which is why the Mommit/mom/BD users stay.

## Launch Plan (90 days)

1. **Days 1–14:** build the prototype (see `prototype/index.html` — it's working), nail the capture→card→close loop on iOS via share sheet.
2. **Days 15–45:** private beta with 50 freelancers/sales people recruited from the exact Reddit threads in the Spark. Metric: % of beta users with ≥7-day active debt queues.
3. **Days 46–75:** TestFlight/Play beta, onboarding tuned so first capture happens in <90 seconds, weekly follow-through email.
4. **Days 76–90:** public launch — post the follow-through stat screenshot to the Reddit threads that inspired it ("built this from your #1 answer"), Product Hunt, and the "I closed 94% of my follow-ups" shareable card.

## Competitive Snapshot

- **Todoist/Things/Reminders:** generic tasks, no people context, capture is manual.
- **CRM follow-up (HubSpot, Pipedrive):** B2B only, sales motion, no personal loops, $20–80/user/mo.
- **Boomerang/Gmail follow-up scheduling:** schedules *your* email, not the promise you just made in WhatsApp.
- **Notion "follow-ups" databases:** the power-user spreadsheet answer — exactly the meta-work the problem is about.
- **Owed's lane:** the *moment of the promise*, cross-channel, people-weighted, with proof of closure. Uncontested.

---

## Prototype

Interactive HTML/CSS/JS prototype in [`prototype/index.html`](prototype/index.html) — mobile frame with the Debt Queue, live capture demo (paste a message, watch it parse into a debt card), loop closure with reply draft, and the weekly follow-through score. Single file, no dependencies, runs anywhere.
