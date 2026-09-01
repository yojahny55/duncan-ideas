# RugRadar 🪂 — The Dev-Tool Shutdown & Rug-Pull Radar

> "They bought our tool, then killed our model access, with 90 days' notice." RugRadar tells you when your stack is about to get pulled — before the email lands.

**Date:** 2026-09-01
**Source:** X/Twitter — techtwitter.com daily archives Aug 27–29, 2026 (@OpenAI, @mntruell, @thsottiaux, @theo, @MTSlive)
**Category:** Developer Tools / SaaS Risk Intelligence
**Status:** Idea documented + interactive prototype

---

## 1. The Spark — Three Consolidation Events in 72 Hours

The last week of August 2026 was a live demonstration that **dev-tool dependency risk is now a weekly, not yearly, event**:

- **Aug 27:** @MTSlive + @AndrewCurran_ — *"NVIDIA has agreed to acquire Hugging Face for $12.9 billion."* The neutral hub of open-source ML, absorbed by the dominant hardware vendor.
- **Aug 28:** @bot / @SpaceXAI — Cursor confirmed acquired by SpaceX; guides and templates flying around as if nothing happened.
- **Aug 29:** @OpenAI — *"We're ending our partnership with Cursor following its acquisition by SpaceX. Under our proposal, Cursor's direct access to our models would…"* — followed by @mntruell (Cursor CEO): *"We're sorry to see that OpenAI put out a note saying they plan to block Cursor users from accessing OpenAI models in three months."* And @thsottiaux (OpenAI): *"We unfortunately have decided that we cannot continue providing access to our models through Cursor."*

The blast radius is enormous: Cursor is the most popular AI code editor. Its users built workflows, muscle memory, and **entire team processes** around OpenAI models accessed *through* Cursor. Overnight, one vendor decision — driven by an M&A event neither party's users signed up for — forces a migration or a productivity cliff.

And this is not a one-off. Recent history: AWS pulled the rug on open-source search (OpenSearch), Elastic relicensed, HashiCorp went BUSL (spawning OpenTofu), Google killed countless APIs, Twitter/X killed its free API overnight. **Every consolidation or policy shift in the AI stack creates thousands of stranded users who found out from a tweet, not a plan.**

### Why nobody catches it early
1. **Signals are scattered.** Acquisition rumors on X, ToS diffs buried in docs, pricing-page edits with no changelog, support-response slowdowns, engineer attrition on LinkedIn.
2. **Teams don't inventory their own dependencies.** Most shops can't answer "which of our core tools route through a single third-party model API?" in under an hour.
3. **There's no standard risk vocabulary.** Is a tool "venture-dependent"? "Single-model-dependent"? "Acquisition-target-shaped"? Nobody scores this.

## 2. Problem Statement

Developers and teams build deep workflows on dev tools and AI platforms, then get blindsided by shutdowns, acquisitions, access revocations, and relicensing. The damage isn't the switch itself — it's the **zero-notice window**: no exit plan, no budget, no migration tested, 90 days or less.

**What users need and don't have:**
1. A live inventory of the tools/APIs their work actually depends on.
2. A risk score per dependency (ownership structure, model-access routing, funding, ToS volatility, community health).
3. Early-warning signals *before* the official announcement (rumor watch, ToS diffs, pricing changes, support degradation).
4. A pre-built exit playbook per tool — alternatives, migration effort estimates, cost deltas — so when the rug moves, it's a checklist, not a crisis.

## 3. Target Users

- **Individual developers** whose daily workflow rides on 3–8 AI tools (editor, model router, terminal agent, hosting).
- **Engineering teams & startups** (5–50 people) whose product embeds third-party model APIs or single-source infra.
- **Platform/infra leads** responsible for vendor risk who currently do it with a spreadsheet and vibes.
- **Open-source maintainers** watching their ecosystem get consolidated under them.

## 4. Proposed Solution — RugRadar

**Tagline:** *"Find out your stack is at risk before the announcement tweet."*

### Core features

1. **Stack Scan (60 seconds).** Connect via read-only import: `package.json`/lockfiles, GitHub Actions YAML, editor config, or a manual checklist. RugRadar maps every external dev-tool and model-API dependency into a dependency graph. No code leaves your machine (local CLI scan, results-only upload).

2. **Rug Score per dependency (0–100).** Composite of five observable factors:
   - **Ownership risk** — independent? PE-owned? likely acquisition target? already acquired?
   - **Access routing risk** — does the tool depend on another vendor's models/APIs (Cursor→OpenAI pattern)?
   - **Policy volatility** — ToS/pricing change frequency (measured via archived diffs).
   - **Health signals** — support response time trend, engineer attrition, commit cadence for OSS.
   - **Exit friction** — data portability, standards compliance, migration effort.

3. **Rumor Watch.** Continuous monitoring of acquisition chatter, executive statements, and insider posts on X + news + HN, with confidence-graded alerts ("unconfirmed" → "credible reports" → "confirmed"). You hear it the same day tech Twitter does — but with *your exposure* attached.

4. **ToS & Pricing Diff Monitor.** Archived snapshots of terms, pricing pages, and API deprecation pages for every tool in your stack. Any change → plain-English diff + impact rating.

5. **Exit Playbooks.** For every tracked tool: curated alternatives with effort estimates ("Cursor → OpenCode: ~2 days, config + keybindings, same model access"), cost deltas, and a migration checklist. Community-contributed, verified against real migrations. When a Rug Score spikes, the playbook is already open.

6. **Team Blast-Radius Reports.** For teams: "If Anthropic revoked our access tomorrow, which services break, how many hours to migrate, what's the budget delta." The answer every CTO needs and nobody can currently produce.

### What RugRadar is NOT
- Not a code-dependency scanner (Dependabot/Snyk own CVEs; this is *business continuity*).
- Not a benchmark tool (ModelCompass, 2026-08-25, picks models; RugRadar survives vendors).
- Not a changelog reader (UpgradeIntel, 2026-03-07, reads release notes; RugRadar reads corporate behavior).

## 5. Market & Differentiation

**Timing:** AI-tool consolidation is accelerating (Nvidia×HF $12.9B, SpaceX×Cursor, OpenAI×Cursor split — all in one week). The AI stack churn means every team's exposure changes monthly.

**Existing landscape:**
- **Vendor risk management (Vanta/Drata/OneTrust):** enterprise, compliance-shaped, $20K+/yr, zero dev-tool specificity.
- **Dependency scanners (Dependabot, Socket):** security vulnerabilities, not business risk.
- **Mailing lists/HN:** raw signal, no personalization, no exposure mapping.
- **Spreadsheets:** current state of the art for 95% of teams.

**Nobody owns "what breaks for YOU when a vendor gets acquired, rug-pulled, or shuts down."**

**Business model:**
- Free: 1 stack, 5 dependencies, weekly digest.
- **Sentinel $9/mo or $79/yr** — unlimited deps, Rumor Watch, ToS diffs, exit playbooks.
- **Team $29/mo** — blast-radius reports, shared stack, Slack alerts.
- TAM: ~40M professional developers + ~2M tech teams with AI-tool dependencies. Year-1 SOM: 20K users × 10% paid ≈ $158K ARR.

**Build:** Solo-dev MVP in 6–8 weeks. Next.js + Supabase + local CLI scanner (Rust or Go) + scraper pipeline for ToS/pricing archives (Wayback + self-hosted snapshots) + LLM for diff summarization. No proprietary data needed at launch — signal is all public.

**Moat:** The dependency-graph dataset. Anonymized aggregate data ("43% of Cursor shops had zero OpenAI exit plan") becomes the industry benchmark; playbooks get better with every real migration reported back.

## 6. Design Direction

"Air-traffic control for your stack" — dark radar UI (deep slate `#0D1117`, alert amber `#FFB020`, clear green `#3FB950`, rug red `#F85149`), monospace scores, dependency graph as the hero view, zero marketing fluff. Alerts read like incident reports, not newsletters.

## 7. Launch Wedge

Ship **"Rug Score: Cursor Edition"** as a free public page in week 1 — score the tool everyone is tweeting about, with the OpenAI cutoff timeline live. Reply into every thread about the Cursor/OpenAI split. Then generalize.

---

*Documented by Duncan ⚔️ — Daily App Ideas, 2026-09-01. Sources: techtwitter.com time-travel archives Aug 27/28/29 2026.*
