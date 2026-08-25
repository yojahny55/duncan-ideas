# ModelCompass 🧭 — Your AI Stack Radar

> **Stop rebuilding your stack every Tuesday.** Personal AI-model advisor that tracks your toolchain, watches the leaderboard churn, and tells you exactly when (and to what) to switch — with the receipts.

**Date:** 2026-08-25
**Source:** X/Twitter (techtwitter.com daily trend archives, Aug 20–22 2026 snapshots)
**Status:** Idea Draft + Prototype

---

## 1. Problem Statement

Choosing the "right" AI model in August 2026 has become a part-time job nobody applied for:

- **Weekly model churn.** Gemini 3.7 Flash "smashed previous growth records in its first week" (Sundar Pichai, Aug 20). Kimi K3 lands "~70% cheaper per task" than frontier incumbents. Z.ai ships GLM-family Flash variants with no announcement. Ox Alpha appears and half of tech Twitter spends 48 hours guessing which lab made it (Hesamation, Aug 20–22).
- **Tier lists are the new sports content.** @theo's "Rough tier list of where I'd put every major model" was the #1 engagement tweet on Aug 22. One-K: "ChatGPT went from the only option to the worst to the best. Claude went from the niche option to the best to the 'ok' option." Rankings flip monthly.
- **The switching moment is unowned.** @mattpocockuk (Aug 22, 500+ eng followers): *"I'm moving away from my local dev setup. Makes zero sense to me now."* When a developer decides to switch, they currently do it by vibes: 3 days of tab-hoarding benchmarks, asking ChatGPT which model to use (recursive!), and copying whatever their favorite YouTuber demoed.
- **Benchmarks lie in aggregate.** LMArena/Artificial Analysis give global scores, but "best at coding" ≠ "best for MY coding" — small models dominate real-world usage (a16z State of Open Models, Summer 2026). The delta that matters is *your* task distribution vs. *your* current stack.
- **Price/feature shocks are silent.** Harvey ($11B) quietly migrating away from OpenAI toward open models; OpenAI bundling ChatGPT + Codex into one $20 plan (TechCrunch, Aug 11); vendors deprecating endpoints mid-project. Teams find out from a 404, not a warning.

**Result:** developers and teams overpay, underperform, or freeze entirely ("model choice paralysis"). The a16z chart from Aug 22 — *agents now burn ~5x the tokens humans do, up 14x since February* — means wrong model choice compounds across thousands of automated runs.

## 2. Validation (Sources)

| Signal | Source | Date |
|---|---|---|
| "Rough tier list of every major model" — top tweet | @theo via techtwitter.com archive | Aug 22, 2026 |
| "I'm moving away from my local dev setup. Makes zero sense to me now." | @mattpocockuk via techtwitter.com | Aug 22, 2026 |
| "ChatGPT went only→worst→best; Claude went niche→best→ok" | @OneJKMolina via techtwitter.com | Aug 22, 2026 |
| Gemini 3.7 Flash fastest-growing model ever | @sundarpichai via techtwitter.com | Aug 20, 2026 |
| Kimi K3 ≈ frontier, ~70% cheaper per task | @Hesamation via techtwitter.com | Aug 20, 2026 |
| Ox Alpha mystery-model speculation threadstorm | @Hesamation, @AndrewCurran_ via techtwitter.com | Aug 20–22, 2026 |
| Agents burn 5x tokens of humans, up 14x since Feb | @a16z Charts of the Week | Aug 22, 2026 |
| Harvey moving away from OpenAI → open models | @twistartups via techtwitter.com | Aug 22, 2026 |
| ChatGPT/Codex $20 bundled plan | TechCrunch | Aug 11, 2026 |
| Open-weight 62% share of Vercel AI Gateway tokens | @rauchg via techtwitter.com | Aug 22, 2026 |
| Small models dominate real-world usage | a16z State of Open Models, Summer 2026 | Summer 2026 |

## 3. The Idea

**ModelCompass** is a personal "AI stack radar":

1. **Declare your stack** — models you use today + for what (coding, writing, agents, vision, summarization), via 60-second onboarding.
2. **Continuous intelligence** — ingest leaderboard deltas (Artificial Analysis, LMArena, OpenRouter throughput), pricing changes, deprecation notices, and — crucially — **practitioner sentiment from X/Twitter** (the leading indicator; pros tweet before benchmarks move).
3. **Personalized Switch Signals** — not "Model X is #1," but *"For YOUR coding-heavy profile, Kimi K3 is 68% cheaper with ~equal pass@1 on the tasks you run → est. $41/mo saved."* Every signal ships with receipts: benchmark rows, price math, source tweets, confidence score.
4. **Switch Playbook** — one-click migration diff: API format changes, prompt-format gotchas, config snippets for Claude Code / Codex / Cursor / OpenClaw / OpenRouter.
5. **Churn Digest** — weekly 2-minute brief: what shipped, what dropped, what you should ignore. Kills tab-hoarding.
6. **Team mode** — shared stack registry: which model runs where in production, blast-radius alerts when a vendor deprecates an endpoint you depend on.

**Anti-vibe positioning:** no hype, no tier-list drama. Every recommendation shows its evidence trail and confidence. "Don't switch" is a valid, frequent answer.

## 4. Target Users

- **Solo devs / indie hackers** juggling 3–8 model subscriptions (Cursor + Claude + ChatGPT + OpenRouter). Millions of them; the Vercel AI Gateway open-weight shift shows the config churn.
- **Teams/CTOs** whose agents burn 5–14x growing token volumes and who need a defensible answer to "why are we on this model?"
- **AI-curious knowledge workers** overwhelmed by "which ChatGPT should I pay for" content.

## 5. Competitive Landscape & Differentiation

| Player | What it does | Gap ModelCompass fills |
|---|---|---|
| Artificial Analysis / LMArena | Global benchmarks | Not personalized; no "your stack" delta or migration playbooks |
| OpenRouter | Routing + pricing data | Marketplace, not advisor; no sentiment, no playbooks |
| Helicone / LangSmith | Observability after-the-fact | Post-hoc; ModelCompass is *pre-switch* decisioning |
| Tether (this repo, 2026-06-24) | Release gating for agents | Different moment: Tether = "is my agent safe to ship?"; Compass = "should I even be on this model?" — complementary, potential integration |
| Model-picker content (YouTubers, X tier lists) | Entertainment | No memory of YOUR stack, no continuity, no price math |

**Nobody owns the "when should YOU switch, and to what" position.**

## 6. Business Model

- **Free:** 1 stack (up to 3 models), weekly churn digest, public leaderboard deltas.
- **Pro $9/mo or $79/yr:** unlimited stacks, personalized switch signals with savings math, migration playbooks, X sentiment feed, deprecation alerts.
- **Team $29/mo:** shared registry, blast-radius alerts, decision log (audit trail for "why we chose this model" — SOC2/review gold).
- Future: affiliate rev-share from OpenRouter/provider referrals (disclosed).

**TAM estimate:** ~40M paying AI-tool users worldwide (OpenAI alone claims hundreds of millions of MAU; paid dev-tool segment conservatively 10M+). SOM year 1: 25K users × 10% paid × $79 ≈ **$197K ARR**. Low-CAC GTM: reply to every viral tier-list tweet with a personalized take; SEO on "is [model] good for [task]" long-tail.

## 7. Feasibility (Solo-dev MVP, 6–8 weeks)

- **Ingest:** Artificial Analysis + OpenRouter public APIs, model release RSS, X sentiment via curated list + nitter-style scrapers (rate-limit respected), GitHub release watches for Claude Code/Codex config formats.
- **Engine:** nightly diff job → per-user delta computation (task-weight vectors from onboarding) → switch-signal scoring with confidence bands.
- **Stack:** Next.js + Supabase + pgvector for embedding similar tasks/tweets; email + web digest. No LLM training — pure retrieval + arithmetic + LLM summarization of evidence.
- **Moat over time:** anonymized aggregate "who switched to what and stayed" outcome data → the first *retention-weighted* model leaderboard.

## 8. Design Direction

- **"Mission control, not hype feed."** Deep space-navy `#0A0E1A`, radar cyan `#22D3EE`, alert amber `#F59E0B`, evidence green `#34D399`. Monospace data, sans for narrative.
- Signature components: **Switch Signal card** (verdict + savings + confidence + receipts drawer), **Stack Radar** (your models on a quality/price scatter), **Churn Digest** (numbered, skimmable).
- Dark-mode native. Zero confetti. Numbers with sources.

## 9. Risks & Mitigations

- **Platform API cost/rate limits** → scrape-first + cached snapshots; X sentiment as enrichment, not dependency.
- **Benchmarks can be gamed** → multi-source triangulation + practitioner-sentiment cross-check; publish methodology.
- **Incumbents could ship this** → personalization + migration playbooks + outcome data are defensible; incumbents have conflicts of interest (OpenAI won't recommend Kimi).

---

*Researched & documented by Duncan ⚔️ — 2026-08-25, 1:00 AM EST. Source: X/Twitter trend archives (techtwitter.com Aug 20–22 snapshots) + TechCrunch.*
