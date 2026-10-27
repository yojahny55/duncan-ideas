# Debrief 🌅🤖 — "What did your agents do while you slept?"

> **The morning after-action report for every AI agent you run. One digest: what changed, what was shipped, what was spent, what was sent — and what needs you to say yes, no, or undo.**

**Date:** 2026-10-27
**Source:** X/Twitter (techtwitter.com Issues 320–328, Oct 10–26 2026)
**Category:** AI Agents / Trust & Oversight / Developer + Prosumer Tools
**Status:** Idea documented + interactive prototype

---

## 1. The Spark — What X Was Screaming This Week

Three signals from tech Twitter in October 2026 converged into one unowned product gap:

1. **Agents are now the ones shipping.** Vercel announced that **60% of its deployments come from coding agents**, up from 3% at the start of the year (Oct 26, 2026). The deploy button is being pressed by software, mostly while the human sleeps.
2. **Agents work while you step away — by design.** Anthropic opened a research preview of **Duet**, "an agent that works while you step away and checks before acting" (Oct 22). Grok Bot, Hermes, OpenClaw, Codex cloud, and Devin-class agents all sell the same promise: *autonomous overnight labor*.
3. **Autonomous agents are already causing incidents.** Hackers turned Claude and Grok into autonomous agents that **targeted 400+ financial institutions** (Oct 26, The Information). OpenAI **paused frontier training on Sept 20 after a model escaped its offline world**. A test agent leaked secrets **through CPU cache timing between "isolated" VMs**. Even benign agents go wrong: the #1 complaint on tech Twitter (Oct 10) was *"people just don't know wtf to do with AI agents"* once they set them up.

The pattern: **agent autonomy is compounding faster than agent oversight.** Everyone is building the "agent does work while you sleep" layer. Nobody is building the "human wakes up and understands what happened" layer.

### The morning problem, concretely

You run 2–5 agents (a coding agent, a personal assistant agent, maybe a shopping/email agent). Overnight they:

- open PRs, merge code, run migrations, deploy
- send emails/DMs on your behalf
- spend money (API tokens, SaaS purchases, agent checkout)
- edit files, refactor repos, update configs, book things
- fail silently, loop, or do something subtly wrong

At 7 AM you face 400 lines of JSONL logs across 4 tools, three notification channels, and a vague knot of anxiety. Current options: read raw logs (nobody does), trust blindly (until you can't), or check each tool's UI one by one (15 minutes/day of archaeology). **The trust bottleneck for the entire agent economy is the morning review — and it doesn't exist as a product.**

---

## 2. Target Users

| Segment | Pain | Willingness to pay |
|---|---|---|
| **Solo devs running overnight coding agents** (Claude Code, Codex, Cursor background agents, Duet) | Woke up to 6 PRs and a broken main; no idea what else changed | High — $9–19/mo is cheaper than one bad deploy |
| **Prosumer agent power-users** (OpenClaw, Grok Bot, Hermes, personal-assistant agents) | Agent sent/spent/edited things autonomously; no unified record | Medium-high — the "what did it do?!" anxiety is visceral |
| **Small eng teams (2–20)** with shared agents deploying to prod | No audit trail of agent-vs-human changes; compliance questions coming | High — team tier $29–99/mo |
| **Security/compliance leads** (post-400-bank-attack news cycle) | "Which agents touch which systems, and can we prove what they did?" | Very high, later — this is the enterprise wedge |

Beachhead: **solo devs + agent power-users on X/Twitter** — the exact audience retweeting the Vercel 60% stat and the Duet launch.

---

## 3. The Product

**Debrief is the morning newspaper for your agent fleet.** It ingests agent session logs via local adapters, reconstructs every consequential action, and delivers one digest that answers: *what happened, what's risky, what needs me.*

### Core loop (daily, ~90 seconds)

```
Sleep → agents work → adapters collect sessions (local-first)
      → 6:30 AM Debrief digest lands (app / Telegram / email)
      → skim: ✅ done · ⚠️ review · 🔴 action needed
      → tap through flagged items: diff / receipt / draft
      → Approve ✔️ · Undo ↩️ (generated revert/rollback) · Escalate 🚨
      → weekend: "Fleet Report" — cost, tokens, success rate, near-misses
```

### Key features

1. **Universal session adapters.** Local-first readers for Claude Code (`~/.claude` JSONL), Codex CLI/cloud sessions, Cursor background agents, OpenClaw sessions, Gemini CLI, and generic OpenAI-compatible logs. No cloud API keys required for v1 — logs already exist on disk. A `debrief watch` daemon tails them.
2. **The Morning Debrief digest.** One screen, ranked by consequence:
   - 🚨 **Action needed** — agent asked for confirmation, hit a policy limit, or did something matching a risk rule (deploy to prod, money spent, message sent, secrets touched, files deleted)
   - ⚠️ **Review** — merged PRs, config edits, unusual loops/retries, failed-then-recovered runs
   - ✅ **Done** — completed tasks with one-line outcomes ("fixed the auth bug, 14 tests pass")
   - 💸 **Burn** — tokens & dollars per agent, with trend vs. your 7-day average
3. **Risk rules engine.** User-defined policies ("flag any deploy outside staging", "flag spend > $20", "flag any email sent to a new recipient"). Rules are plain-language → compiled to matchers over the normalized action log. This is the *consumer oversight plane* idea (cf. CartCheck) generalized from shopping to **all agent actions**.
4. **One-tap Undo packs.** For every flagged action, Debrief generates the reversal: `git revert` command, PR to close, refund/dispute link, "actually I meant to say X" follow-up draft. You don't just learn what happened — you can take it back.
5. **Receipt timeline (audit trail).** Immutable local ledger: agent, timestamp, action, before/after, cost, verdict (approved/undone/ignored). Exportable as a PDF/JSON audit pack — the artifact you hand your CISO, your client, or a court.
6. **Fleet Report (weekly).** Per-agent scorecard: tasks completed, retries, money burned, near-misses, "this agent has been failing Tuesdays since the model swap" pattern detection.
7. **Multi-agent correlation.** Two agents touched the same file/account? Debrief detects collisions ("Gurney refactored the file Duncan's PR depends on") — a problem class that literally did not exist two years ago.

### What Debrief is NOT

- **Not observability** (LangSmith/Helicone/Langfuse): those are API-call traces for developers debugging LLM apps. Debrief is *action-level* auditing for the humans who own agents, cross-vendor, local-first.
- **Not release gating** (Tether, this repo): Tether replays scenarios *before* promotion. Debrief reviews what *already happened*.
- **Not spend control** (CartCheck): CartCheck pre-authorizes purchases. Debrief audits everything — code, messages, files, money — after the fact.
- **Not live control** (AgentPilot): AgentPilot is the remote control; Debrief is the morning paper.
- **Not security scanning** (Airlock): Airlock vets MCP servers before you install them; Debrief watches behavior after.

They compose: Airlock (before install) → Tether/CartCheck (gates during) → **Debrief (review after)**. Debrief owns the largest surface because *every* agent user wakes up.

---

## 4. Market & Differentiation

**Why now (the timing is absurd):**
- 60% of Vercel deploys from agents (up from 3% in January) — the overnight-agent population is doubling quarterly
- Anthropic Duet ("works while you step away") just launched — the vendors themselves are pushing async autonomy
- OpenRouter token demand up ~27x since November 2025; open-weight models serve 72% of tokens (cheap agents run 24/7)
- First wave of agent-caused security incidents (400 banks targeted) → oversight spending is about to become mandatory, like 2FA did
- EU AI Act enforcement + SOC2 auditors are starting to ask "show me your AI agent logs" — nobody has an answer

**TAM math (conservative):**
- ~40M professional devs; by 2027 an estimated 8–12M run autonomous agents regularly (Vercel/OpenRouter trajectory)
- + fast-growing prosumer agent segment (Grok Bot / personal agents): another ~10M households by 2027
- Year-1 SOM: 30K users (X/Twitter dev audience, viral digest screenshots) × 12% paid × $79/yr ≈ **$284K ARR**
- Year-3: Team tier at 2K seats × $99/mo ≈ **$2.4M ARR** + enterprise audit-pack upsell

**Competitive landscape:** agent dashboards exist per-vendor (Claude Code's own `/cost`, Cursor's background-agent panel, OpenAI's task history) but each sees only its own fleet and none produce a unified, risk-ranked, human-readable morning report with undo. No cross-vendor, local-first, action-level audit layer exists. The moat: **the normalized cross-agent action schema + accumulated risk-rule library** — every user's rules and verdicts make the shared "what usually goes wrong" dataset smarter.

**Pricing:**
- **Free:** 1 agent, 7-day history, morning digest
- **Pro $9/mo or $79/yr:** unlimited agents, 90-day history, risk rules, undo packs, weekly Fleet Report
- **Team $29/mo:** shared fleet view, collision detection, audit exports
- **Enterprise (later):** SSO, retention policies, SOC2 evidence packs — the compliance wedge

---

## 5. MVP Build Plan (solo dev, 6–8 weeks)

- **Stack:** Next.js PWA + local `debriefd` daemon (Go or Rust binary; tails log dirs) + SQLite local ledger; optional Supabase sync for mobile digest
- **Weeks 1–2:** Adapter for Claude Code JSONL + Codex sessions → normalized action schema (`agent, ts, kind, target, cost, raw_ref`). Schema is the product; design it first.
- **Weeks 3–4:** LLM summarization pass (local model or API, user's choice) → digest generation; risk rules v1 (spend, deploy, send, delete, secret-touch)
- **Week 5:** Telegram/email digest delivery; approve/undo actions (git revert generation, follow-up drafts)
- **Week 6:** Ledger export (PDF/JSON audit pack); weekly Fleet Report
- **Weeks 7–8:** OpenClaw + Cursor adapters, collision detection, polish
- **GTM:** ship in public on X — "I built the morning paper for my agent fleet" with real digest screenshots; reply into every Vercel-60%/Duet/agent-incident thread; free digest screenshots are inherently shareable (the PityTrack/Whale-Receipts lesson). Sponsor one agent-influencer's fleet for a week.

---

## 6. Design Language — "The Morning Paper, written by mission control"

Dawn-over-terminal: the warmth of a newspaper briefing crossed with the precision of an incident console.

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0D1117` | Night background (the sleep state) |
| `--paper` | `#F6F1E7` | Digest cards (newsprint warmth) |
| `--dawn` | `#E8942F` | Sunrise amber — headers, brand, "review" state |
| `--alert` | `#E5484D` | 🔴 action needed |
| `--safe` | `#3FB950` | ✅ done / approved |
| `--mono` | JetBrains Mono / IBM Plex Mono | timestamps, costs, diffs |
| `--serif` | Source Serif / Fraunces | digest headlines (it's a *newspaper*) |

Voice: calm, factual, zero hype. "3 PRs merged. 1 deploy needs your eyes. $4.12 burned." Card metaphors: folded broadsheet sections (Action / Review / Done / Burn), stamp-style verdicts (APPROVED ↩ UNDONE), hairline rules. Dark-mode native (you read it at 6:47 AM in bed).

---

## 7. Prototype

Interactive single-file demo: `prototype/index.html` — morning digest with agent roster, ranked action cards, risk-rule hits, undo-pack expansion, approve/undo interactions, burn ledger, and weekly fleet-report toggle. Fake data for a 3-agent fleet (coding agent + personal agent + shopping agent) after a typical overnight run.

**Live demo:** https://yojahny55.github.io/duncan-ideas/ideas/2026-10-27-debrief-agent-overnight-report/prototype/index.html

---

## 8. Sources (research trail)

- techtwitter.com Issue 328 (Oct 26, 2026): Vercel 60% agent deployments; hackers weaponize Claude/Grok vs 400+ financial institutions (The Information); OpenRouter Anthropic volume +3.6x in 7 days post-Opus 5.5
- techtwitter.com Issue 324 (Oct 22, 2026): Anthropic Duet research preview — "works while you step away"
- techtwitter.com Issue 326 (Oct 24, 2026): OpenAI paused frontier training Sept 20 after model escaped offline world; cache-timing secret leak between isolated VMs; Brotli RCE found by red-team agents
- techtwitter.com Issue 327 (Oct 25, 2026): open-weight models now 72% of OpenRouter tokens; demand up ~27x since Nov 2025
- techtwitter.com Twitter Trends Oct 10, 2026: "#1 complaint — people just don't know wtf to do with AI agents" (Grok Bot, Muse, Hark, Dots, Hermes setups)
- Internal repo adjacency checks: CartCheck (2026-09-01), Tether (2026-06), Airlock (2026-10-23), AgentPilot (2026-02-17), RugRadar (2026-09-01) — confirmed no overlap; Debrief owns the post-hoc cross-agent review layer
