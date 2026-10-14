# PlanMath 🧮 — Stop Guessing Which Health Plan Is Cheaper

> **Pick your health plan by math, not by vibes. Answer 6 questions about your life → get the true annual cost of every plan, ranked.**

**Date:** 2026-10-04
**Source:** Reddit (r/Bogleheads, r/personalfinance, r/HealthInsurance, r/Fire ACA megathreads) + Web research
**Category:** Consumer fintech / Health admin / Decision support
**Status:** Concept + Prototype

---

## Problem Statement

Every November, ~150M+ Americans with employer coverage face open enrollment, and ~14M more shop the ACA exchanges during a Nov 1 – Jan 15 window. The decision is one of the biggest financial choices of their year — and almost nobody has the tools to make it rationally.

**The pain (from Reddit threads, recurring every enrollment season):**

- **PPO vs HDHP paralysis** — "Help Choosing PPO vs. HDHP for 2026 Open Enrollment" (r/Bogleheads). A user literally built his own comparison calculator and open-sourced it because nothing existed.
- **Premium-only thinking** — "Will my 2026 copays and coinsurance sum to greater than $2,500?" (r/personalfinance, father of 4 weighing a $2,500 premium saving against unknown utilization). People anchor on the premium sticker and ignore deductible, coinsurance, OOP max, HSA seed money, and FSA tax savings.
- **Life-event blindness** — "I'm lost on which medical insurance I should sign up for (planning on TTC early/mid 2026)" (r/personalfinance). A pregnancy, surgery, or new diagnosis completely flips the math, and no tool models "what if my year looks like X?"
- **ACA subsidy confusion** — "Are they calculating my subsidy WITH the extended subsidies or without?" (r/Fire ACA megathread). Subsidy cliffs, metal tiers, and CSR make exchange shopping even worse.
- **Deadline panic** — "TODAY IS THE LAST DAY IN MOST STATES TO ENROLL FOR JANUARY COVERAGE" and "Desperate! Missed newborn open enrollment" — recurring megathread titles. People procrastinate because the decision is hard, then miss windows.

**The math is genuinely hard.** True annual cost = premium − (HSA seed + FSA tax savings) + expected utilization at each plan's cost-sharing structure, where utilization itself is probabilistic (a healthy year vs. a surgery year). Nobody does this by hand. Spreadsheets exist (the Bogleheads user's hacky pages.dev calculator is the current "best tool"), but they're static, single-scenario, and require insurance literacy to set up.

**Why now:** Enhanced ACA subsidies expired/changed heading into 2026 coverage, employer premium contributions keep shrinking (cost-shifting to HDHPs), and every dollar of healthcare is more contested. Open enrollment Nov 1, 2026 is 4 weeks away — peak timing.

## Target Users

1. **Employees at benefits open enrollment** (primary) — 150M+ Americans, choosing between 2–6 plans every November, most defaulting to "what I had last year" out of confusion.
2. **ACA/marketplace shoppers** — 14M+ enrollments/year, subsidy math layered on top.
3. **Life-event planners** — TTC couples, scheduled-surgery patients, chronic-condition families, new parents (the "my year will NOT be normal" crowd).

## Proposed Solution

**PlanMath** turns plan selection into a 5-minute guided comparison that models your *actual* expected year:

1. **Plan intake (the hard part, automated)** — Screenshot/PDF your benefits portal or paste the SBC (Summary of Benefits and Coverage). AI extracts: premium, deductible, coinsurance, copays, OOP max, HSA eligibility/seed. No manual field entry for the 80% case.
2. **Your year, in 6 questions** — Doctor visits/month, prescriptions, planned procedures, pregnancy/TTC, expected ER/urgent care, known big events. Skip anything you don't know — defaults are conservative.
3. **True Cost Engine** — For each plan, computes: `annual premium + modeled utilization cost − HSA seed − FSA/HSA tax savings (at your bracket)`. Outputs one ranked number per plan: **your real annual cost**.
4. **Scenario slider** — "Healthy year" ↔ "Rough year" (surgery, baby, flare-up). Watch the ranking flip in real time. This is the killer feature: the HDHP wins in a healthy year and loses catastrophically in a rough one — showing the crossover point makes the risk legible.
5. **Verdict card** — Plain-English recommendation: *"Pick Plan B. You save $1,847 in a typical year. It only loses if you have >$6,200 in medical events — which your answers say is unlikely (but if the TTC plans happen, re-run this)."*
6. **Deadline radar** — Enrollment window countdown per employer/exchange, with escalation nudges ("3 days left, you haven't picked").

## Key Features

- 📸 **SBC screenshot parser** — photo/PDF → structured plan data (Claude vision). Fallback: guided 8-field manual entry.
- 🧮 **True-cost calculator** — premium + deductible + coinsurance + copays + OOP max, minus HSA seed and tax-advantaged savings at user's marginal bracket.
- 🎚️ **Healthy ↔ Rough year scenario slider** with live crossover visualization (the "aha" moment).
- 👶 **Life-event presets** — Pregnancy (~$4–8K modeled utilization), Surgery, New baby, Chronic condition, Healthy — one tap instead of 6 questions.
- ⚖️ **HSA/FSA intelligence** — triple-tax-advantage explainer in one line, seed money credited, "use it or lose it" FSA sizing.
- ⏰ **Deadline radar** — countdown + escalation ("enrollment closes Friday").
- 📤 **Shareable verdict** — PDF/link to show spouse or HR ("we ran the numbers").
- 👨‍👩‍👧 **Family mode** — whose plan do the kids go on? Two-employer combination math (the *really* hard version nobody solves).

## Market & Competition

| Player | What it does | Gap |
|---|---|---|
| Healthcare.gov / state exchanges | Lists plans, subsidy calc | No cross-plan true-cost modeling, no utilization scenarios |
| Employer portals (Workday, benefits admin) | Shows plan PDFs | Zero decision support |
| Bogleheads' pages.dev calculator | Static PPO-vs-HDHP sheet | One scenario, DIY setup, no parsing, ugly |
| Broker sites (eHealth, HealthMarkets) | Lead-gen for ACA plans | Sells plans, doesn't neutrally compare; employer plans excluded |
| FSA/HSA vendors (FSA Store, Lively) | Account management | No plan-choice math |
| AI chatbots | Can do the math if you prompt perfectly | No persistence, no parsing, no deadline tracking, garbage-in |

**Nobody owns the "TurboTax for health plan selection" position.** The mental model is proven: guided questions in, one confident verdict out, seasonal usage with premium price tolerance.

**Market size:** 150M employer-covered + 14M ACA enrollees/year. Even 0.1% penetration at $9.99/season ≈ $164K/yr ARR on a product that costs almost nothing to run. B2B2C upside: HR teams pay to offer it to employees (reduces benefits-meeting load).

## Business Model

- **Free:** 2-plan comparison, healthy-year scenario, manual entry.
- **PlanMath+ $9.99/season** (one-time, not a subscription — enrollment is annual): unlimited plans, scenario slider, SBC parsing, family mode, PDF export, deadline alerts. Priced like TurboTax, not like a sub.
- **HR tier $2–4/employee/yr:** white-labeled enrollment companion, anonymized plan-mix analytics. (Year 2+.)

Seasonal product with an evergreen tail: ACA special enrollment (life events) runs year-round, and job-changers compare plans whenever they switch.

## Tech / Feasibility

- **Stack:** Next.js + Supabase + Claude (vision for SBC parsing, math is deterministic client-side JS — LLM extracts, code computes; never let the model do arithmetic).
- **MVP scope (solo dev, 4–6 weeks):** manual entry calculator + scenario slider + verdict card + deadline countdown. Ship before Nov 1.
- **Phase 2:** SBC parser, family mode, PDF export.
- **Moat:** seasonal word-of-mouth + SEO ("PPO vs HDHP calculator 2026" has desperate, recurring search volume every October–December) + anonymized plan-pricing dataset that compounds yearly.
- **Risk:** acquisition by an HSA vendor or benefits platform is the likely exit; that's a feature, not a bug.

## Design Direction

**"Tax software clarity meets kitchen-table warmth."** Deep navy + mint-green accent (money/calm), big monospace numbers (costs should *look* like numbers), zero insurance jargon without a tap-to-explain tooltip. Verdict cards feel like a referee's decision: one winner, one number, one sentence why. Dark-mode native for the 11pm "I should really pick a plan" session.

## Prototype

`prototype/index.html` — interactive demo: sample plan set, 6-question year profile, true-cost engine, healthy↔rough scenario slider with crossover chart, verdict card, enrollment countdown.

## Sources

- r/Bogleheads — "Help Choosing PPO vs. HDHP for 2026 Open Enrollment" (user-built calculator in comments)
- r/personalfinance — "I'm lost on which medical insurance I should sign up for (TTC 2026)"; "Will my 2026 copays and coinsurance sum to greater than $2,500?"; "2026 Open Enrollment: 2 Health Insurance Options"
- r/Fire — Weekly ACA 2026 Open Enrollment FAQ/megathread (subsidy confusion)
- r/HealthInsurance — "Trying to plan for open enrollment"; "Open Enrollment for 2026 Help" (deadline desperation threads)
- CustomHealthPlans.com — "When Is Open Enrollment 2026" (Nov-2026-enrolls-2027 mismatch confusion)
- stealwhatworks.com Reddit demand analysis (Sep 2026) — decision-support tools with existing spreadsheet workarounds = strongest demand signal
