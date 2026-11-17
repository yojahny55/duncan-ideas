# ProofOnce — the proof vault for people who get recertified

**One-liner:** "You proved your income to SNAP. Your agency won't let you use it for Medicaid. Prove it ONCE. We'll file it everywhere."

**Date:** 2026-11-16 · **Source:** Web (YC RFS Winter 2027 + Medicaid 2027 recert wave) · **Status:** idea + prototype

## The Spark

Two things collided this week and nobody has joined them into a product:

1. **YC posted its Winter 2027 Requests for Startups** (first captured on the Wayback Machine Oct 27, 2026) and one of the 11 requests is literally "Plaid for government benefits": *"If you've ever applied for government benefits, you know how it works. Prove your income. Prove who lives with you. Prove where you live. Then do it all again for the next program, and again at renewal. Every agency has its own portal, and none of them share data. People get rejected over a missing document... Before Plaid, every fintech app built its own bank connections. After Plaid, all it took was one tap. The government needs the same layer. With your consent, it pulls verified income, tax, and residency records straight from the source, into every program at once. Verify once, apply everywhere."* YC also flags: *"Starting in 2027, states must re-check millions of Medicaid enrollees every six months."* That's a venture-scale B2B pitch — but it names the consumer pain perfectly, and the consumer side is buildable by one person.

2. **The 2027 recertification wave is real, dated, and coming fast** (all verified this week):
   - **KFF Medicaid Work Requirements Tracker (Nov 13, 2026):** as of **January 1, 2027, 43 states + DC** must make Medicaid expansion-adult eligibility contingent on **80 hours/month of work or other qualifying activity**, with **6-month recertification cycles** (down from 12).
   - **Politico (Nov 13-14, 2026):** CMS granted states a 6-month hold-harmless on the ARHOME work requirement through **June 30, 2027** — meaning every state has until mid-2027 to build verification systems for millions of enrollees.
   - **NY State of Health (Nov 9, 2026):** "Starting January 1, 2027, most adults aged 19-64 must renew their Medicaid every 6 months, instead of once a year."
   - **Equitas Health Ohio FAQ (Oct 28, 2026):** Group VIII (expansion) enrollees move to 6-month approval periods.
   - **WLWT (Nov 16, 2026):** "Millions could lose Medicaid coverage" — state-by-state breakdowns of who's enforcing what.

**The consumer math:** ~11-14M Medicaid *expansion adults* (the population the 6-month rule targets), plus ~40M+ on Medicaid overall, ~40M SNAP households renewing in cycles, plus ACA/CHIP/Scholarship/childcare subsidies. Starting Jan 1, 2027, every six months, millions of people must re-submit: income docs, household roster, address, **and a new thing nobody has a tool for — proof of 80 hours/month of "work or other qualifying activity."** State portals are 2009-era, mail-centric, and (per YC) don't share data. People lose coverage for *administrative* reasons — missed window, missing doc, agency math mismatch — not because they stopped qualifying.

## Problem Statement

- **Re-proving the same facts is the job now.** Same pay stubs to SNAP, Medicaid, childcare subsidy, school meals. Each agency wants its own format, its own window, its own portal.
- **The 80-hour work requirement has NO proof tooling.** "Work or other qualifying activity" = work, job search, school, vocational training, volunteering. State portals can't verify your hours — *you* produce the evidence. Nobody has built a work-activity ledger that outputs an agency-submittable 80-hour statement. This is 2027's "everyone needs this and it doesn't exist" — the exact shape of the last 40 wins in this folder.
- **Renewal windows are death by deadline.** 6-month cycles mean twice the renewal volume per year, on populations with the fewest reminders. Agency notices arrive by mail or dead-letter; people find out they've been cut off *after* the fact.
- **Agency math errors sink applications.** Agencies compute income from whatever 3 pay stubs they grabbed; overtime, two-job households, and child-support offsets get miscounted. The applicant has no counter-check before submitting — and no idea they're allowed to dispute.
- **Denials have appeal windows (fair hearing: typically 90-180 days) that are invisible** unless you read the letter's fine print.

## Target Users

- **Primary:** Medicaid expansion adults 19-44 in the 43 TQR states (the Jan 2027 cohort) — fixed income, high stakes, mail-dependent.
- **Secondary:** SNAP/childcare/subsidy households with mixed programs (re-prove-everything pain), working parents juggling 2 programs.
- **Year-2 B2B:** county eligibility offices, ACOs/quirks — ARHOME *requires* states to build verification systems; the consumer app is the missing other half (enrollees can't prove hours to a portal that doesn't track them).

## Proposed Solution — ProofOnce

**A consumer proof vault + renewal radar + 80-hour ledger for people on recurring government recertification. Local-first documents, zero agency credentials, user always reviews before anything is filed.**

1. **The Proof Vault (free wedge, zero account).** Forward your pay stubs / bank statements / lease / birth certs / benefit award letters to `pack@proofonce.app` (or snap a photo) → Claude Vision extracts → every fact gets a card: `Income: $2,184/mo (3 pay stubs, Oct 2 - Oct 31)`, `Household: 4 members`, `Address: verified 2026-09`, each stamped `FRESH` / `AGING` / `EXPIRED` against what each program requires. **One photo in = every future renewal pre-filled.** This is the "Plaid moment" done at consumer scale — consent-based, source-cited, no agency logins ever.
2. **The 80-Hour Ledger (the 2027 killer feature).** Tap-to-log work activity (worked / job search / school / training / volunteering) with an optional pay-stub photo that auto-fills paid hours (the BillDelta receipt pattern). Month meter fills to 80; D-7 push when the month closes under; **one-tap "80-Hour Statement"** — a clean, dated, submittable PDF ("Work activity statement, month of Nov 2026: 84 hrs — 72 paid (Employer X), 8 job search, 4 volunteer (Y shelter)") that is the physical proof state portals expect. Nobody else produces this artifact. It's the entire 2027 moat in one screen.
3. **Renewal Radar.** Every household member × every program on one countdown board: 6-month Medicaid, annual SNAP, ACA open windows, childcare recert. D-30/D-14/D-7/D-1 pushes (FlexClock/Upheld deadline engine pattern); forwarding the agency's renewal *notice* (mail photo or email) auto-starts the timer and parses the form number, so you know exactly which PDF you're filling. If you miss one, the radar shows the reinstatement window — not just "too late."
4. **Mistake Check (before you submit).** Claude cross-checks the numbers *you* would submit against the agency's standard income math: "Your agency will count 3 pay stubs = $6,153/mo, but your 80-hour statement shows 4 pay periods. Mismatch risk: HIGH. Upload the 4th stub before submitting." Also flags the classic killers: child-support deducted or not, two-job income, address older than 30 days. This is the feature advocacy orgs give as *advice* and nobody gives as a *check*.
5. **Appeal Bridge (the alley out back).** Denied or cut off? The app reads the denial letter (photo), extracts the fair-hearing deadline and the stated reason, and builds the 1-page appeal packet: the same facts from the Proof Vault, cited, with the specific error named ("reason given: income too high; our records show $2,184/mo vs their computed $2,431 — 4th pay stub was omitted"). **User reviews and mails/submits — ProofOnce never auto-files anything to an agency** (trust posture: Drawbridge/BillDelta). Every submitted appeal feeds public **Odds Tables** by state × program × denial reason: "In OH, income-mismatch denials flip 68% of the time when a 4th pay stub is attached (n=1,204)."
6. **State Truth Pages (SEO + flywheel).** SSG pages nobody owns: "how to renew Medicaid in [state] 2027", "Medicaid work requirement 80 hours — what counts", "SNAP renewal deadline [state]", "what documents [state] child support office actually asks for" — seeded day one from published agency requirement tables (honest-seed posture, Upheld pattern), then corrected by the crowd. The 2027 recert wave = 50 states × 4 programs × 6-monthly deadline queries, forever.

## Differentiation — incumbents all structurally can't

- **State portals** (YourTexasBenefits, NY Empire, etc.): 2009-era, mail-first, zero sharing between agencies — they ARE the problem.
- **BenefitsCheckup (NCOA) / GetBenefits.org / Benefits.gov:** eligibility *checkers* — "what are you owed?" Point-in-time, pre-application, zero document management, zero renewal tracking. ProofOnce is the *post-approval life cycle*.
- **Legal aid / 211 / advocacy orgs (NACo, ACPH):** advice, not tooling — they publish the how-to guides ProofOnce turns into products (the BillCreep pattern).
- **The YC RFS B2B plays ("Plaid for benefits"):** will build agency-side data pipes with federal/state contracts (multi-year sales cycles). ProofOnce is the consumer vault that works *with or without* those pipes — when the pipes land, the vault's extracted facts plug right in. Different buyer, different door.
- **Upheld (own catalog, 2026-11-05):** post-complaint escalation odds for *service/utility* disputes. ProofOnce's appeal bridge is the benefits vertical and starts *at the renewal*, not after you've already lost.
- **InReview (2026-10-30):** submissions to *publishers/competitions*. **FlexClock (2026-10-29):** FSA spend deadlines. **ShiftSnap (2026-02-25):** gig-employer shift earnings. **JobPulse:** job-search tracking. **Ceasefire:** debt collectors. None touch recertification documents, work-activity proof, or fair-hearing appeals. **Check passed twice.**

## Pricing

- **Free forever:** Proof Vault (5 documents), 80-Hour Ledger (1 member, 3-month history), 1-program Renewal Radar, State Truth Pages. *Deadline pushes ARE the dataset — free-tier-as-moat.*
- **Pro $4/mo or $29/yr** (fixed-income pricing — the brand is "we are on your side, not a bank"): full vault, household mode (all members × all programs), Mistake Check, 80-Hour Statements unlimited, Appeal Bridge, D-1 pushes.
- **Year-2 B2B $499-1,499/mo** per county/ACO: white-label work-activity verification (ARHOME forces the demand), anonymized recert-completion intelligence. **NEVER** selling beneficiary data, never agency fees that create conflict (the brand is the enrollee's side of the counter), no ads — a fixed-income population is not a marketing target, it's a trust relationship.

## Market

- **TAM:** ~11-14M expansion adults in the 6-month cohort + ~40M Medicaid + ~40M SNAP households + ACA/childcare/subsidy renewals — roughly 100M+ US benefit renewals happen *every year*; 2027 doubles the Medicaid adult share of them.
- **Year-1 SOM:** seed 5 high-TQR states (OH, NY, TX, FL, GA) → 25K free vaults → 6% Pro ≈ $38K + 2K×$29 household upsells + 10 county pilots @ $799/mo ≈ $95K ≈ **~$135-160K ARR near-zero CAC**. Every 6-month recert wave, every state TQR rollout news cycle, and every "how do I prove 80 hours" thread (which will be a *weekly* format on r/Medicaid/r/SNAP starting Q1 2027) is a recurring GTM event. The Q1 2027 deadline spike is a one-time land-grab for SEO and word of mouth.

## MVP (solo, 4-6 weeks)

Next.js PWA + Supabase + Claude Vision (document extraction ~$0.01-0.03/doc) + SES inbound (`pack@`) + OneSignal pushes + weekly SSG State Truth pages + react-pdf for the 80-Hour Statement. No agency APIs in v1 (portals don't have them), no credentials ever, local-first vault (IndexedDB) with optional sync. 80-hour meter and Mistake Check are plain logic + one LLM call per check — no ML training. Honest-day-one seed: published state requirement tables + denial-reason distributions, clearly labeled (Upheld posture).

## Design (ui-ux-pro-max)

**"The benefits counter at 9am — fluorescent calm, one form, and for once you're not behind."** Form-paper cream #F7F3EA, ink navy #101A28, eligible green #2F7D4F, deadline amber #C98A16, denial red #B23A2E (stamps only), form-slate #5A6B80. **Fraunces** for verdicts + **Inter** + **JetBrains Mono** for every number/date/hour ("hours are monospace or they don't count"). Signature components: **Proof Vault cards** with FRESH/AGING/EXPIRED stamps, **80-Hour meter** (fills like a water glass, the only confetti is crossing 80), **Renewal Radar** board with sticky countdown strip, **Mistake Check** diff (their math vs your math, side by side), and the thermal **"RENEWAL SENT"** receipt with zigzag tear. Voice = the benefits worker who actually likes her job — plain words, zero jargon ("recertification" → "showing you still qualify"), never bureaucratic, never cheerful-fake; every screen ends in ONE action: **Prove, Log, or Renew.**

## Sources

- Y Combinator RFS Winter 2027 (published ~Oct 27, 2026; ycombinator.com/rfs — "Plaid for government benefits" request; "Starting in 2027, states must re-check millions of Medicaid enrollees every six months")
- KFF Medicaid Work Requirements Tracker (Nov 13, 2026) — 43 states + DC, 80 hrs/mo, 6-month recert, hold-harmless through Jun 30, 2027
- Politico (Nov 13-14, 2026) — CMS 6-month ARHOME grace period letter to states
- Forbes (Nov 15, 2026) — "Medicaid work requirements are delayed — here's what happens next"
- NY State of Health (Nov 9, 2026) — 6-month Medicaid renewals for adults 19-64 from Jan 1, 2027
- Equitas Health 2027 Medicaid Changes FAQ (Oct 28, 2026) — Ohio Group VIII 6-month approval
- WLWT (Nov 16, 2026) — "Millions could lose Medicaid coverage. Here's what states told us."
- HLR Leadership (Nov 16, 2026) — "The Six-Month Test Medicaid Cannot Afford to Waste"
- Product Hunt / micro-SaaS gap scans (Nov 2026) — no consumer recert product in current launches; benefits tooling absent from 2026-11-10/12 PH AI digests
