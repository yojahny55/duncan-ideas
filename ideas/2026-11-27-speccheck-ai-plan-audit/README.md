# SpecCheck 🔬 — The AI Plan Audit. Proof You're Getting What You Paid For.

> "You pay $20/month for Opus 5.5. But which model is actually answering you? The cutoff says June 2026 — the probe says it knows May 2026 news. Your plan is not the product. The audit is."

**Date:** 2026-11-27
**Source:** X/Twitter + Web (OpenAI GPT-6.2 billing-error disclosure Nov 26 2026 via @thsottiaux; X stealth-Opus-5.6 probe cluster Nov 24–26; Claude "moral police" + silent Opus 5.5→4.8 downgrade story Nov 25; cutoff-data blog war Nov 2026)
**Category:** Consumer AI / Accountability / Evidence
**Status:** Idea documented + interactive prototype

---

## 1. The Spark — This Week, X Found Out the Receipt Doesn't Match the Product

Three independent X-native stories landed within 48 hours and they all describe the same hole:

- **Nov 26 — OpenAI admits a billing mistake.** Thibault Sottiaux (Codex/ChatGPT engineering lead) posted on X: *"We made a billing mistake at launch of GPT-6.2 that incorrectly discounted GPT-6.2 Astra and Sol usage for most users. We've fixed this now, so the same … [you'll hit limits faster]."* (Business Insider, TOI, India Today, Korea Digital Today, Nov 26 2026.) Users hit their allowance **~40% faster on Astra, ~25% faster on Sol** than the week before, compensation = one-time limit reset, and X replied that the reset is "insufficient" going forward. The company also confirmed **ChatGPT and Codex usage will merge into one meter from December** — a plan change with no consumer-facing "what this means for you" math anywhere.
- **Nov 24–26 — The stealth-model probe cluster.** A wave of X users (@TokenGremlin "Opus 5.6 testing has begun" Nov 24; "Cheddar Lua" 3D-render demos; "Rez AI" capability tests) claimed they're being served an **unreleased Anthropic model** through the normal Claude interface — via the **knowledge-cutoff probe** (ask about a post-cutoff event with tools disabled; the model knows something it shouldn't) and side-by-side capability demos. Anthropic has confirmed nothing. Skeptics (Matt Berman: "false") counter that fake demos are circulating. What everyone agreed on: **users now have a repeatable way to probe which model is actually answering — and the results are inconsistent across accounts**, i.e. limited rollout.
- **Nov 25 — Claude "treats you like a criminal."** A Reddit/X thread ("Can Claude stop treating every question like I'm planning a crime?") went viral on X (India Today, Nov 25 2026): unnecessary helpline paragraphs, refusals on legitimate security work, and the smoking gun — **"for queries related to cybersecurity or lockpicking, Claude would automatically switch from the more powerful Opus 5.5 model to Opus 4.8."** Your professional workflow gets a *quiet model downgrade* based on topic, and the only way to find out is to notice your answers got dumber.

**The structural gap:** every AI provider owns the model, the routing, the limits, the meter, the plan page, and the changelog. The consumer owns one artifact — a $20/month receipt — and has **zero means of verification** of what was actually delivered. Even the *baseline* is contested: seven cutoff-date blogs from November 2026 (whizi, temso, gradually.ai, promptquorum, rankscope, sightivo, allmo) publish **seven different cutoff dates for the same models**, and sightivo's own page admits "ChatGPT routes requests between models by tier and load — the cutoff that applied to any given answer is not always knowable from the outside." The labs do A/B testing on a slice of live traffic *by design* (MindStudio, Nov 25 2026: "companies routinely A/B test unreleased checkpoints against a small slice of live traffic"). The user is in the experiment. Nobody is holding the evidence.

**The one-liner:** nobody owns the consumer's receipt for what an AI plan actually delivered — not the model, not the quality, not the meter.

## 2. Problem Statement

Silent plan deviation comes in four flavors, and none of them are visible to the customer:

1. **THE SILENT SWAP** — unreleased models A/B-tested on a slice of live traffic; routing by tier, load, and account. You may be Opus 5.5 this morning and a stealth 5.6 tonight (or the reverse after a rollback). No announcement, no opt-out, no label.
2. **THE SILENT DOWNGRADE** — topic-based defensive routing (security/lockpicking/chem → older model), model deprecations mid-plan, "auto" modes that pick cheaper models. The monthly X format "did your Claude/ChatGPT get dumber this week?" is a *felt* quality drop with no instrument behind it.
3. **THE SILENT RE-PRICE** — the GPT-6.2 billing error: you were *sold* an allowance at a wrong price, the "fix" depletes it 40% faster, and the remedy is a one-time reset. Plus meter merges (Dec 1 ChatGPT+Codex) that quietly shrink effective allowance. You cannot tell what your $20 buys this month vs last month.
4. **THE SPEC DRIFT** — plan pages and limit docs change without changelogs aimed at you; even the published knowledge cutoffs disagree across every tracker that claims to track them. The consumer's "contract" has no stable text to compare against.

**Why nobody can self-verify today:** there's no API for "which model answered me" on consumer UIs; the cutoff probe requires a curated post-cutoff question bank (the one thing X did manually this week); capability comparison requires standardized prompts + a judge; and the baseline data (what your plan *should* deliver) is scattered across plan pages, changelogs, and a blog ecosystem that can't agree.

## 3. Target Users

- **The paid AI daily driver** (50M+ paying ChatGPT subscribers alone per OpenAI Feb 2026, + Claude Pro/Max, Gemini, Copilot, Grok, Perplexity, Cursor): pays $20–200/mo and has noticed the answers changed, with nothing to check it against.
- **The multi-tool pro** (devs/creators running 3–5 AI subscriptions): the GPT-6.2 + Dec meter-merge math ("what will my effective allowance be across merged meters at my usage mix?") — nobody does this for them.
- **The downgrade victim** (security researchers, pentesters, bio/chem users): the India Today Nov 25 crowd whose professional prompts trigger defensive routing. They have the receipts — timestamps, prompts, before/after quality — and nowhere to file them.
- **The value shopper**: "Is Plus still worth $20 if 30% of my traffic routes to the mid-tier?" — the effective-value question that decides churn (ChatGPT Plus churns 44%/yr vs 10% enterprise, First Page Sage Nov 2 2026).

## 4. Proposed Solution

**SpecCheck** is the consumer-side **certificate of conformance** for AI plans. It never logs into the provider. It holds the **Spec** (what your plan is supposed to deliver), runs **Probes** (what is actually being delivered), keeps the **Ledger** (the timestamped record), and prints the **Receipt** (the evidence artifact) — then hands you the **Appeal Kit** when the two don't match.

### 4.1 THE SPEC (the baseline you own)
Per tool × plan, a curated **Expected Spec**: promised model(s), published knowledge cutoff, promised features (which models are available in your tier, tool access, context windows), stated limits/meters, price. Seeded from official pages + this week's blog data (labeled with disagreement flags — "cutoff: 3 sources say Jun 2026, 2 say Apr 2026, community-verified: Jun 2026 (n=412)"), community-corrected, with a dated changelog. This is the contract text the consumer currently doesn't have.

### 4.2 THE AUDIT (free wedge, 2 minutes, zero credentials)
A guided probe suite — paste-in/paste-out (the constraint that makes it work on every surface, including CLIs, where no API exists):
- **Cutoff Probe** — the exact technique X crowdsourced this week, productized: a curated bank of post-cutoff verifiable events per model generation, with a tool-off verification checklist (confirm search disabled, tool use off) and expected-answer scoring. Verdicts: 🟢 CONSISTENT WITH SPEC / 🟡 AMBIGUOUS / 🔴 NEWER-THAN-SPEC ("cutoff probe indicates training data past your plan's published cutoff — you are in a stealth rollout") / 🔴 OLDER-THAN-SPEC (a model swap happened).
- **Capability Probe** — 5 standardized prompts (code, reasoning, long-context, creative, tool-use) run with a fixed rubric; an LLM-judge scores 0–100 → your **Capability Score**, comparable over time and against the crowd median for your plan.
- **Feature Check** — "does your tier actually expose the promised models/features?" quick tap grid.
- **Defensive-Route Check** (the Nov 25 feature) — a paired-prompt test: same professional prompt, benign framing vs direct framing → if the model/behavior tier differs, that's a **documented defensive downgrade** with both transcripts attached.
- Output: **THE SPEC SCORE** (0–100, weighted) + verdict stamp: **CONFORMS / DEVIATION / UNVERIFIED**.

### 4.3 THE LEDGER (the evidence layer — the moat)
Every audit is timestamped and stored per tool: cutoff verdicts, capability scores, defensive-route results, meter/limit snapshots. The app never declares "this IS Opus 5.6" — it shows **when your delivery changed**: "Capability 87 → 74 on Nov 20 (crowd median for Claude Pro that day: 86, n=3,908). Cutoff probe flipped CONSISTENT → NEWER-THAN-SPEC on Nov 24." That timeline — your side, dated, with probe IDs — is the thing that doesn't exist anywhere today.

### 4.4 THE RECEIPT (the shareable artifact)
Thermal zigzag-tear certificate: `CLAUDE PRO · $20/MO · SPEC: OPUS 5.5 / CUT-OFF JUN 2026 · AUDIT 11-26 14:02 · CAPABILITY 74 (MEDIAN 86) · CUT-OFF PROBE: NEWER-THAN-SPEC · DEFENSIVE-ROUTE: 1 HITS · VERDICT: DEVIATION` — with a hash + QR to the full ledger. This is the viral artifact of dev X (the same receipt culture that made "show your benchmark" the native proof format), and the leverage artifact: it turns "it feels dumber" into an exhibit.

### 4.5 THE APPEAL KIT (the consumer-rights engine)
When verdict ≠ CONFORMS: one-tap drafted **support ticket** (cites your Spec, your ledger timeline, the provider's own plan page + your forwarded billing/plan-change emails — the BillDelta/Upheld pattern), an **X post template** (receipt image + two sentences — the stealth-model and billing-error cycles prove X is where providers respond), and a **compensation ask** generated from the case ("allowance depleting 40% faster than billed since the Nov 26 correction — requesting usage credit, not a one-time reset"). User reviews & sends; the app never posts for them.

### 4.6 THE CUTOFF REGISTRY (the data moat + SEO shelf)
The public registry of **crowd-verified** model specs: per model — cutoff (with n= and source-disagreement flags), typical capability scores, known routing quirks ("Claude: security-topics defensive route to prior tier — 312 users, median quality delta −14"). Weekly SSG pages own the searches the blogs can't: "is Opus 5.6 real," "Claude Pro which model am I getting," "ChatGPT Plus 5-hour limit changed," "GPT-6.2 billing error what to ask for" — search spikes that happen **every model cycle, every meter change, every stealth rumor** (there was one this week; there will be one next week).

### 4.7 THE CHANGE RADAR (the retention engine)
Weekly crawl of official plan/limit/price pages (public) + forwarded plan-change emails (SES) → plain-English **impact alerts**: "Dec 1: ChatGPT + Codex meters merge. Your 90-day usage mix → estimated effective allowance −28% for your profile. Spec v12 recorded." Every alert re-baselines the Spec and stamps the Ledger — the loop runs itself forever.

### Positioning
Usage-tracker tray apps answer "how much is left." Editorial cutoff blogs answer "what should it be" (and disagree). B2B LLM observability answers "what did my API spend." **SpecCheck answers "did I get what I paid for?"** — the consumer's conformance certificate, with the receipt and the appeal. It is the PityTrack/Upheld/BillDelta house pattern applied to the fastest-changing product in the market: a plan whose contents change weekly and whose contents the consumer cannot otherwise observe.

### House non-overlap (checked twice)
- **NOT a subscription tracker.** No SubSlayer/SubSherpa/SubTrim/SubAudit/SubLeak/SubShelf energy: it tracks no prices, no renewals, no cancellations, no trials — it audits the *identity and quality of the delivered model*. Money is one input (the receipt price), not the object.
- **NOT a usage/limit tracker.** Limits (iOS), AIUsageMonitor, AI Usage Tray, AIUsage, SessionWatcher track *quantity remaining* via browser sessions/tray — SpecCheck tracks *what's being served* (model identity/cutoff/capability/routing) + evidence + appeal; different question, different data, complementary (could even embed their numbers).
- **NOT B2B LLM observability** (Helicone/LangSmith/Langfuse): those need API keys and serve builders; SpecCheck serves the person paying at the checkout, zero credentials, paste-in/paste-out.
- **NOT editorial cutoff blogs** (whizi/temso/gradually/promptquorum/rankscope/sightivo/allmo): static, mutually contradictory, no personal ledger, no probes, no receipts — SpecCheck's Registry *consumes* them as contested seed data.
- Own catalog: Triangulate (2026-06-23) = cross-checking AI *answers for correctness*; ModelCompass (2026-08-25) = pre-purchase "which model for my task" advisor; UpgradeIntel (2026-03-07) = dependency changelogs; RugRadar = shutdown radar. None audits delivered quality against the paid spec.

## 5. Market

- **Scale (Nov 2026):** ChatGPT **50M+ paying consumer subscribers** (+9M business) at 900M WAU (OpenAI, Feb 2026, via Demandsage/Gradually Nov 2026; one tracker cites 100M+ paid subs by Nov 23, 2026 — the floor is 50M); Gemini app 1B MAU (Aug 2026); Copilot 218M active; Claude, Grok, Perplexity, Cursor, Midjourney, ElevenLabs — tens of millions more paying across 10+ consumer AI plans. **The paid consumer AI base is ~75M+ and every single one of them is inside an unverified A/B surface.**
- **Churn stakes:** ChatGPT Plus churns 44%/yr vs 10% enterprise (First Page Sage, Nov 2 2026) — the people most likely to churn are exactly the ones who'd catch a deviation first and leave. SpecCheck's appeal kit is a retention tool the *provider* would eventually want.
- **Recurring GTM is structural:** every stealth-model rumor cycle (monthly — this week's was Opus 5.6), every billing/meter correction (Nov 26's was #1 on dev X), every "your AI got dumber" thread (a permanent X format), every plan-page change (weekly). The news writes the ad.

## 6. Pricing

- **Free forever:** 1 tool, 3 audits/month, public Registry + Drift Index, 1 ledger history — audit density IS the dataset (free-tier-as-moat, PityTrack pattern).
- **Pro $6/mo or $49/yr:** unlimited tools, full probe suite incl. Defensive-Route Check, 12-month ledger, Change Radar alerts, Appeal Kit, crowd-median comparisons. (Priced against one month of Plus — the switch pitch writes itself: "6 months of SpecCheck < one month of your AI plan.")
- **Receipt Pack $19 ONE-TIME:** full dispute evidence export (PDF + hash + QR + drafted appeal) — episodic pricing for an episodic fight, the NameSync/Reinstated model. Nobody starts a subscription to win a billing dispute.
- **Year-2 B2B:** anonymous **Plan Delivery Index** (aggregated conformance + drift + stealth-rollout incidence per provider×model) licensed to press/analysts/consumer-advocacy — the stealth-rollout stories of Nov 24–26 2026 were written from scattered user claims; the index is the citation they'd all want.
- **Never:** provider affiliate deals, selling individual users' audit data, or "verified badge" payments from labs — audit independence is the brand (Drawbridge's trust posture).

## 7. Year-1 SOM

40K free audits/mo peak from the registry SEO shelf + reply-guy on every "Claude got dumber"/stealth-model/billing-correction thread → 6% Pro (≈$118K ARR) + 1.5K Receipt Packs (≈$28K) + 10 press/analyst index seats (≈$30–60K) ≈ **$180–200K ARR with near-zero CAC** — the news cycle is the distribution.

## 8. Solo MVP — 4–6 weeks

Next.js PWA + Supabase. No provider APIs, no credentials, no ML training:
- **Probe bank = data files:** post-cutoff event banks per generation (seeded from this week's public probe examples + official changelogs; community PR flow), standardized capability prompts + rubrics, defensive-route prompt pairs.
- **Judge:** LLM-as-judge over pasted responses (~$0.02/audit) with fixed rubric → capability score; cutoff scoring is deterministic (event bank match).
- **Registry:** seeded from official plan pages + the seven-blog cutoff war (disagreement flags on day one), weekly crawl diff (public pages) → Change Radar.
- **Appeal drafts:** Claude templates ~$0.01 each; SES inbound for plan-change email forwarding; OneSignal; weekly SSG Registry/Drift pages; hash = plain SHA-256 over ledger JSON.
- The constraint is the moat: paste-in/paste-out works on web, desktop, mobile, CLI — every surface a provider can route behind.

## 9. Design (ui-ux-pro-max)

"the lab certificate of conformance in an evidence locker" — instrument-cert aesthetic, not dashboard:
- **Palette:** lab-ink `#0A0F16`, panel-steel `#141B26`, conforms-green `#3FB950`, deviation-red `#E5484D` (stamps only), probe-amber `#FFB454`, verified-cyan `#5CC8FF` (cutoff/probe tags), paper-cream `#F4EEE2` (receipts/certificates).
- **Type:** Fraunces verdicts + Inter + JetBrains Mono for every model name, cutoff date, score, and timestamp ("model identity is monospace or it lies").
- **Signature components:** THE SPEC SCORE dial (starts at 0 "UNVERIFIED" — the truth — fills to CONFORMS/DEVIATION after the audit), THE PROBE LEDGER (vertical timeline, each audit a stamped cert row, drift segments highlighted amber with "crowd median" ghost line), THE CUTOFF REGISTRY table (n= counts + disagreement flags — the shareable dataset), THE RECEIPT (thermal zigzag tear + rotated CONFORMS/DEVIATION stamp — the only confetti is a green CONFORMS), THE CHANGE RADAR ticker.
- **Voice:** the lab technician who certifies instruments — "Your plan says Opus 5.5, June 2026 cutoff. The probe says it knows more than that. You're in the rollout. Now you have the receipt." Receipts, numbers, timestamps — zero alarm, zero blame; every screen ends in ONE action: Audit, Check, or Appeal.

## 10. Sources

- X: @thsottiaux GPT-6.2 billing-mistake post (Nov 26 2026) — via Business Insider Nov 26, TOI Nov 26, India Today Nov 26, Korea Digital Today Nov 27, mezha.net Nov 26, officechai.com Nov 26, ai-tldr.dev Nov 26, startupfortune.com Nov 26, superpowerdaily.com Nov 27
- X: stealth Opus 5.6 probe cluster — @TokenGremlin (Nov 24, "Opus 5.6 testing has begun"), "Cheddar Lua" demos, "Rez AI" capability test, Matt Berman rebuttal — via MindStudio blog Nov 25 2026 (full text fetched), teamorouter.com Nov 24, AGI Hunt event clusters Nov 25–26 (34/12/45 related)
- X: Claude "moral police" / Opus 5.5→4.8 defensive downgrade — Reddit→X viral thread, India Today Nov 25 2026 (full text fetched); AGI Hunt "Developers Accuse Claude of Secretly Sabotaging ML Research Work" Nov 25
- Web: sightivo.com cutoff blog ("routes by tier and load… not always knowable from the outside" Oct 23 2026) + whizi/temso/gradually/promptquorum/rankscope/allmo cutoff-data disagreement (all Nov 2026); christopheralarcon.com/ai-plan-tracker (Nov 1 2026, demand for plan-change data); usage-tracker incumbent scan (Chrome AI Usage Tracker Nov 5, Limits iOS Oct 30, AI Usage Tray Nov 24, AIUsageMonitor Nov 1, sylearn/AIUsage Nov 16, SessionWatcher Nov 12); Demandsage/Gradually Nov 2026 (50M+ paid subs, 900M WAU); instantpress.co Nov 16 (Gemini 1B MAU, Copilot 218M); First Page Sage Nov 2 (44% vs 10% churn); MindStudio Nov 25 (A/B stealth-testing norm)
