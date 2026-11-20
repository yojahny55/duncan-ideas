# DeadWire 🔌 — The dead-man's switch for your automations

> **"Your order-sync died three days ago. Nobody knows yet — because n8n will not phone you. DeadWire hears the silence."**

**Date:** 2026-11-20
**Source:** X/Twitter + community (n8n community Nov 19 2026; dev.to silent-crashes Oct 20 2026; X tech digests Nov 18–20 2026)
**Category:** Developer/Prosumer Ops / Automation Reliability / Trust & Oversight
**Status:** Idea documented + interactive prototype

---

## 1. The Spark — What X and the automation trenches were screaming this week

Three signals from the automation world converged into one unowned gap:

1. **Yesterday's n8n community thread IS the product spec.** Nov 19, 2026 — *"Would you let an AI agent modify your production n8n workflows without approval?"*: the failure mode is exactly the one nobody watches for — *"An AI agent reads the error, finds the cause, and patches the workflow. The next execution succeeds. Everything looks fixed. Except the patch also removed the filter that prevented duplicate customer messages. The workflow runs again. It just doesn't behave correctly anymore."* The community's consensus pipeline is: `AI proposes → versioned → tests → human approval → deploy → monitoring` — and **the monitoring rung has no product attached to it**. The thread even arrives at the core insight: *"exit-code-only checks aren't enough."*
2. **The editorial that proves demand with zero product (the BillCreep pattern).** dev.to Oct 20, 2026 — *"n8n vs Make vs Zapier in 2026: The Real Cost of Silent Crashes"*: *"A workflow that deactivates, a webhook pointed at a test URL, a queue-mode worker that lost Redis: n8n will not phone you. Most disaster tickets trace back to five boring, predictable killers — not exotic bugs."* The money line: *"One silent failure a month, discovered by the client after three days, is a churn event disguised as a support ticket."* Its only product is a $19 **pre-deploy, static, single-platform** audit of exported workflow JSON — one-shot, nothing running, nothing watching.
3. **X's agent-trust wave (Nov 18–20 2026)** made the amplifier real: *"My Agent Scrubbed a Leaked API Key by Force-Pushing main"*; *"one author found 25 ways to make his n8n agent lie, and all 25 worked"*; developers openly "skeptical of benchmarks that grade themselves." And tellingly, **n8n's own November 2026 release ships "agent management, skills editing, and tool guardrails"** — the platform is bolting on the trust layer, which means the agent-modified-automation surface is now mainstream, not edge-case.

**The 2026 twist:** it used to be *you* broke the automation. Now an AI agent can break it with a confident green checkmark, and the fix it applies *looks like a fix*. The monitoring layer has to watch **behavior**, not just exit codes — and no product does that across platforms.

## 2. Problem Statement

Automation platforms (n8n, Zapier, Make, custom webhook pipelines) bill you for tasks and executions — and bill you **nothing for silence**. A workflow that stops running, lags, or runs *wrong* produces no error on the surface that matters. The failure taxonomy is boring and predictable (deactivated workflow, webhook pointed at a test URL, queue worker that lost Redis, expired OAuth, rate limit) but the discovery is customer-driven: *"Hey, we haven't gotten the invoice in 3 days."* By then the failure cost is real — missed orders, duplicated customer messages, unbounded API bills, a client churn event.

Existing layers all fail the same way:
- **The platform's own error workflow** — chicken-and-egg: it lives in the same instance. If the instance is down, the queue is dead, or the webhook is repointed, *the monitor dies with the patient*.
- **Generic uptime checks** (UptimeRobot et al.) — a 200 on the status page says nothing about whether the *automation* is producing output, on cadence, with the right shape.
- **The $19 static audits** — one-shot, pre-deploy, single-platform, nothing running afterward.
- **Grafana/Prometheus for self-hosters** — real, but demands a DevOps person the agency-of-three doesn't have, and stops at "process alive," not "behavior sane."

## 3. Product — DeadWire

**The dead-man's switch + behavioral sentinel for every workflow on n8n / Zapier / Make / any webhook.** The monitor lives *outside* the platform, so a dead instance can never kill the monitor. The unit of care is the **wire**: a named workflow with a heartbeat and a learned rhythm.

### 3.1 The Ping (free wedge — 90 seconds, zero credentials, works everywhere)
Copy one line to the end of any workflow — `curl -m 5 https://wire.deadwire.app/ping/WIRE_ID` as an n8n HTTP Request node, a Zapier *Webhooks by Zapier* task, a Make *Custom Webhook* op, or a bash step anywhere:
```
🔌 ORDER SYNC — wire live
   ping #4,812 · cadence ~15m · last 14:02:11
```
Declare expected cadence (or "I don't know — learn it") and DeadWire is watching. No platform API keys in v1. No credentials. No data. The trust posture is the BillDelta/Drawbridge one: we see *a ping*, not your business.

### 3.2 Cadence Learning (48-hour baseline, then the four verdicts)
After 48h of pings, each wire gets a learned rhythm (interval, daily volume, quiet hours). Verdicts:
- 🟢 **LIVE** — on rhythm
- 🟡 **LAG** — running but slower than baseline ("median gap 31m vs usual 15m")
- 📈 **BURST** — runaway loop / dedup filter gone: *"duplicate-send volume 4.1× baseline for 22 min"* — this is exactly the n8n-thread failure mode (agent removed the dedup filter), caught by rhythm, invisible to exit codes
- 🔴 **SILENT** — the dead-man's-switch trip: *"47:12 and counting" (usual 15m)*, sticky countdown strip, escalation D-0 → D+15m → D+1h

### 3.3 Shape Sentinel (silent-logic-regression radar, Pro)
Optional field-set peek on the ping payload: DeadWire learns the usual *field names* (values never stored) and alarms on drift — *"last 3 runs carried 9 fields; the usual is 3."* That's the signature of a patched workflow behaving differently while still "succeeding." Values never touch our servers — field names only. The brand is opaque-by-default.

### 3.4 Killer Diagnostics (the five boring killers, productized)
When a wire trips, instant triage against the known taxonomy, with a platform-specific fix checklist:
1. **Deactivated** (toggle flipped, agent patch, bulk-edit accident)
2. **Webhook misfire** (pointed at a test/staging URL — the #1 silent killer per the dev.to autopsy)
3. **Queue dead** (worker lost Redis / instance down — one-tap **health probe** pings the instance itself: *instance up = workflow problem, instance down = infra problem — tells you where to look before 3 a.m.*)
4. **Auth expired** (OAuth/credentials silently lapsed — "Stripe webhook auth expired" is the crowd's #1 killer at 23%)
5. **Rate-limited / throttled** (upstream 429 loop, held-run queue growth)

Each trip produces a **diagnosis card**: verdict, probability-weighted killer, exact checklist, one-tap probe. Claude phrases it in plain English (~$0.01/alert); the rules are plain SQL — no ML.

### 3.5 Post-Mortem Receipt (the viral artifact)
At recovery, a thermal receipt with zigzag tear:
```
🧾 DEADWIRE POST-MORTEM — ORDER SYNC
silent: 47m 12s · cause: queue worker down
~112 orders missed · recovered 14:32 ET
wire #4,812 → #4,813 · no data lost (retry queue)
```
Shareable, LinkedIn-native for agencies ("our uptime story"), and every receipt feeds the crowd dataset.

### 3.6 Crowd Failure Intel (the house moat — PityTrack/Upheld pattern)
A failure-signature database nobody publishes: per platform × integration × killer — *"Make: Slack webhook, auth expired, median recovery 4h 12m (n=1,204)"*; the weekly **Silent-Crash Index** (how many wires tripped this week, top 5 killers, median time-to-discovery — "clients find out 4.2 days after it happened, on average; DeadWire users find out in 11 minutes"); public **Killer Leaderboards** as weekly-refreshed SSG pages. Seeded honestly day one from the dev.to taxonomy + n8n community incident threads, clearly labeled; compounded by every trip. Free-tier users feed it; paid users read it.

### 3.7 Agent Watch (the 2026 differentiator)
The monitoring rung of the community's own pipeline, and the direct answer to *"who checks the agent that's fixing your automation?"* When a wire's cadence or shape changes, DeadWire shows the **before/after diff window**: *"rhythm changed 11:40 — burst 4.1× — 9 new fields — was a change deployed/agent-patched in this window?"* It does not stop the agent (that's Tether's job) — it **proves what changed and when**, so the human approval step has evidence. This is the feature the Nov 19 thread was asking for and couldn't name.

### 3.8 Team Wire Board + Agency Status Pages
- **Wire Board**: every workflow across the stack (n8n + Zapier + Make + bare webhooks) as pulse lines on one screen — the "control room at 2 a.m." hero.
- **White-label status page** (Agency tier): `status.youragency.com` — "12/14 automations live" for clients. The trust artifact that makes the agency look like an infrastructure company. The 40-client-workflow agency from the dev.to post ("$120 of monthly value per automated touchpoint") is the design customer.

### 3.9 Positioning
*"n8n will not phone you. DeadWire does."* Uptime monitors watch **servers**. Error workflows watch **themselves**. DeadWire watches **your work** — from outside the platform, on behavior, with a receipt when it was wrong.

## 4. Why Incumbents Structurally Can't

- **n8n / Zapier / Make** — their dashboards surface *their* failures, not cross-platform behavior; an always-on external sentinel cannibalizes the "managed cloud safety net" narrative they sell (dev.to's own line: "they rent you their failure surface"). They ship *guardrails*, not *witnesses*.
- **UptimeRobot / UptimeKuma / BetterStack** — check endpoints, not cadence or payload shape; "the page is up" ≠ "the automation is working"; no killer taxonomy, no post-mortems, no crowd intel.
- **$19 static audits** (the dev.to author's Reliability Kit) — one-shot pre-deploy JSON check, single platform; DeadWire is always-on, cross-platform, behavior-based. Complementary, but the persistent layer is the product.
- **Grafana + n8n Prometheus** — requires the DevOps discipline the target user (agency/indie, 3–15 people) doesn't have; no behavior verdicts, no receipts, no crowd data; a self-serve 60-second setup beats a YAML stack.
- **Tether (own catalog)** — release *gating* before deploy (golden-scenario replay, CI/CD). DeadWire is the runtime sentinel *after* deploy. Different rung, same trust problem — DeadWire's Agent Watch diff is literally the "monitoring" step in Tether's pipeline.

## 5. Pricing

| Tier | Price | What |
|---|---|---|
| **Free forever** | $0 | 3 wires, The Ping + SILENCE/LAG alerts, public Killer Leaderboards & Silent-Crash Index — **alert density IS the dataset, free-tier-as-moat** |
| **Pro** | $9/mo or $59/yr | Unlimited wires, Cadence Learning (all 4 verdicts), Shape Sentinel, Killer Diagnostics + health probe, Post-Mortem Receipts, SMS escalation, 90-day history |
| **Wire Agency** | $49/mo | 25 client workspaces, white-label status pages, per-client monthly reliability reports, priority escalation |
| **Year-2** | $99–499/mo | MSP/agency white-label licensing; anonymized failure-intelligence reports for platform integrators |

**Never:** storing payload values (field names only), platform account credentials (ping line + optional read-only instance health probe), or selling telemetry — the opaque-by-default posture *is* the brand. One silent crash caught per client covers the agency tier for a year.

## 6. Market

- **Scale:** n8n — 1.7M monthly users (May 2026), $100M ARR, $5.2B valuation, users grew 6× during 2025 (okara.ai Oct 20 2026); multi-billion-dollar companies run it in production (opsily Nov 3 2026). Zapier — 2B+ AI tasks/month across **3.7M companies** (Zapier, Apr 2026). Make — 2M+ users.
- **Trend:** Gartner 2026 Automation Trends — **68% of organizations embed AI in automation workflows, up from 22% in 2023** (neura.market Nov 15 2026) — more agents = more things that can break behavior-silently.
- **Buyer:** agencies and solopreneurs running client or business automations — the dev.to post's own unit economics: *40 workflows × $120/mo value per touchpoint, one silent failure = churn event*.
- **Year-1 SOM:** 8K monitored wires → 15% Pro (1.2K × $59 ≈ $70K) + 300 agency seats ($49 × 300 ≈ $176K) ≈ **$200–250K ARR** near-zero CAC.
- **Recurring GTM (the flywheel):** "my automation has been dead for 3 days" is a **weekly** format on r/n8n, r/automation, X, and agency Slack groups; the Silent-Crash Index is a weekly shareable; launch straight into the n8n community thread asking the exact question this product answers. Every "agent broke production" viral story (there was one *yesterday*) is a near-zero-CAC moment.

## 7. Solo MVP (4–6 weeks)

Next.js PWA + Supabase. Edge ping receiver (one small worker, idempotent). Cadence rules + verdicts = plain SQL/JS over timestamp series — no ML. Shape Sentinel = field-name set diff. Health probe = HTTPS ping to user-declared instance URL (no login). Killer taxonomy = curated dataset seeded from the dev.to autopsy + n8n community incident threads, community-corrected. Claude only for diagnosis phrasing (~$0.01/alert). OneSignal + SMS for escalation. Weekly SSG: Silent-Crash Index + Killer Leaderboards. No platform SDKs in v1 — the curl line works on every platform by construction.

## 8. Design (ui-ux-pro-max)

**Concept:** *"the wiring closet at 2 a.m. — one big board, pulse lines, and a dead-man who never sleeps."*

**Palette:**
| Token | Hex | Use |
|---|---|---|
| wire-black | `#0A0D12` | page bg |
| panel-steel | `#121821` | cards |
| signal-green | `#3FB950` | LIVE pulse, healthy |
| dead-red | `#E5484D` | SILENT flatline, stamps |
| drift-amber | `#FFB454` | LAG/BURST, countdowns |
| copper | `#C87E4F` | wire accents, dividers |
| paper-cream | `#F4EEE2` | receipts |

**Type:** Fraunces (verdicts/display) + Inter (UI) + **JetBrains Mono for every cadence, count, and timestamp** (house rule: *time is monospace or it lies*).

**Signature components:**
1. **The ECG Wire Line** — the hero: each workflow renders as a live pulse line that **flatlines** (green → dead red, with a subtle alarm flicker) the moment it goes silent. The entire product in one animation.
2. **SILENT stamp + sticky countdown strip** — "47:12 AND COUNTING" ticking in mono.
3. **5-Killer Triage card** — probability-weighted list with the fix checklist and one-tap health probe.
4. **Post-Mortem Receipt** — thermal paper with zigzag tear edge and a stamped verdict (the only "confetti" this app fires is **RESTORED**).
5. **Agent Watch diff window** — before/after cadence bars across the change timestamp.

**Voice:** the calm night-shift operator — *"The wire went cold at 13:15. I found the break: queue worker down. Here's the fix. It's been quiet 47 minutes."* Never alarmist; receipts, times, and numbers. **Every screen ends in ONE action: Ping, Diagnose, or Restore.**

## 9. Sources

- n8n community, Nov 19 2026 — "Would you let an AI agent modify your production n8n workflows without approval?" (dedup-filter failure mode; "AI proposes, doesn't deploy"; monitoring rung unowned)
- dev.to (trigger-workflow), Oct 20 2026 — "n8n vs Make vs Zapier in 2026: The Real Cost of Silent Crashes" ("n8n will not phone you"; five boring killers; 3-day discovery = churn; $19 static-audit incumbent disclosed)
- X/tech digests, Nov 18–20 2026 — "My Agent Scrubbed a Leaked API Key by Force-Pushing main"; "25 ways to make his n8n agent lie, and all 25 worked"; benchmark skepticism (agents-radar issue #4349; ai-radar issue #279)
- n8n release notes, Nov 2026 — "agent management, skills editing, tool guardrails" (releasebot.io Nov 18; github.com/n8n-io/n8n)
- API Evangelist, Nov 18 2026 — A2A ecosystem: 1,279 providers serving agent cards (agent-driven automation surface expanding)
- okara.ai Oct 20 2026 — n8n 1.7M MAU, $100M ARR, $5.2B valuation, 6× user growth 2025
- elitecontentmarketer.com Oct 22 2026 — Zapier 2B AI tasks/mo across 3.7M companies (Apr 2026); n8n €55M Series B
- neura.market Nov 15 2026 — Gartner 2026: 68% orgs embed AI in automation (vs 22% 2023)
- opsily.com Nov 3 2026 — n8n in production at multi-billion-dollar companies
- rzlt.io Nov 18 2026 / dev.to Nov 19 2026 — current platform pricing (n8n €20-50/mo cloud; Make $9; Zapier $19.99)

## 10. Prototype

👉 [DeadWire demo](prototype/index.html) — the Wire Board at 2 a.m.: live ECG pulse lines, one workflow flatlined with the 47-minute countdown, the 5-killer triage card, and the post-mortem receipt.
