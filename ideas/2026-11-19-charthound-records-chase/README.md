# ChartHound 🐕 — The Records Chase

> **"You asked for your own medical records 14 days ago. The portal says nothing. The phone line says hold. The insurance appeal deadline says two weeks. ChartHound knows which clock is running, writes the demand that actually works, and escalates until the chart shows up."**

**Date:** 2026-11-19
**Source:** Web (HHS OCR HIPAA Privacy Rule final rule, published Nov 16–19, 2026)
**Category:** Health Admin / Patient Advocacy / Deadline & Escalation Intelligence
**Status:** Idea Draft + Prototype

---

## The Trigger (This Week, Literally)

On **November 16–19, 2026**, HHS's Office for Civil Rights published the long-delayed **HIPAA Privacy Rule final rule**, and its lead consumer change is a headline: **covered entities must respond to patient records access requests in 15 calendar days, down from 30** (compliance date **July 19, 2027**; existing 30-day clock keeps applying to requests until then). It also **bans unreasonable identity-verification measures** for records requests and sets standards for apps sharing patient data (Becker's Hospital Review Nov 17; STAT Nov 18; MobiHealthNews Nov 17; Recording Law Nov 19; Washington Examiner op-ed Nov 19: "makes patients the CEOs of their health — not file clerks").

Why that matters for a consumer product: for **eight months** (now → July 2027) virtually every American with a records request in flight will be living on the **old 30-day clock**, and from **July 2027** the clock halves to 15 days — a permanent, recurring "your provider is late" condition. The federal government just handed a consumer product its core mechanic (a countdown) and a national narrative ("patients are the CEOs of their health") for free. Nobody turned this into a product. The rule is *three days old*.

## The Pain (all 2026 sources)

1. **The request evaporates.** Portal requests get no status; phone requests get "45 minutes to 3 weeks" (Kibbo Aug 2026: "providers must respond within 30 days… regulators have fined dozens for missing that deadline" — the fining exists precisely because the miss is endemic). The one 30-day extension (45 CFR 164.524(b)(2)) requires a written statement of reasons + completion date *within the first 30 days* — almost no patient checks whether the extension was legal.
2. **Fees that shouldn't exist.** Federal guidance pushes electronic copies toward cost-based/zero, but "search and retrieval" invoices of $40–$150 are routine; state law sets per-page caps where silent (Black Health, Oct 28 2026: full state-by-state fee & deadline table quoted from each statute — an unowned SEO shelf: "how much can they charge for my records in [state]").
3. **The multi-provider maze.** A hospitalization touches 4–6 covered entities (ED, hospital, specialist, lab, imaging, anesthesia). Each has its own release process. Nobody tracks the fleet — people re-call the hospital 9 times.
4. **The stakes are not a PDF.** Records requests are the *first move* in: insurance denials & external reviews (EOIR), Medicare/MAC recoupment appeals (MedFactor Oct 2026: payers run on 30-day MAC/RAC/UPIC clocks), SSDI/SSDI appeals and state-specific forms, second opinions (oncology), disability, elder-care POA onboarding, malpractice. A late/incomplete chart = a lost appeal. The $0 records tool protects a $50k decision.
5. **Completeness is invisible.** "Got my records" ≠ "got all my records." Discharge bundles have expected contents (discharge summary, labs, imaging reports, med rec, code-status); patients can't tell what's missing until the oncologist asks.
6. **The escalation ladder is secret knowledge.** Portal → written request → privacy officer → **HHS OCR complaint (they must respond within 60 days)** → state AG/health department → attorney. ScienceInsights Mar 2026 documents the "review by a different licensed professional" right; Justia Oct 2026 documents appeal rights after denial. All of it is spread across law-firm blog posts with zero tooling — the BillCreep editorial pattern again.

## The Gap (checked twice against this catalog AND the market)

- **ChartRequest / MRO Corp** — B2B record routing; the *provider or law firm* is the customer ($19–99/record), status tracking is a byproduct of their intake form. They have no incentive to tell your provider they're late.
- **KeepTrackMed / My Medical Records.ai** — storage & AI timelines *after* you have the records (and the .ai one is a visit-recorder). Nobody tracks the *chase*.
- **Patient portals (MyChart et al.)** — serve their own institution; no cross-provider fleet view, no deadline math, no escalation.
- **Black Health / Justia / LegalClarity / Kibbo / GuardWell** — pure editorial on fees/deadlines/escalation. Zero product.
- **Own catalog:** Upheld (2026-11-05) = complaint escalation against payers/merchants/ombudsman — ChartHound's adversary is the *records office*, different adversary, different artifact (the chart, not the redress); ProofOnce (2026-11-16) = Medicaid work-hour proofing, different government interface; BillProof (2026-09-26) = auditing the *bill*, not retrieving the chart; ClaimKit (2026-05-21) = filing the claim — ChartHound feeds it; Failsafe (2026-02-16) = emergency info vault, no records workflow; HealthBridge (2026-05-30) = fitness platform sync; RenewRadar (2026-02-14) = document expiry, no adversarial chase. **The "my records are late / my provider won't send them / that invoice is illegal" moment is unowned.**

## ChartHound = the deadline engine + escalation ladder + completeness audit for your own medical records

**The Radar (free 60-sec wedge, zero account).** Provider + request date + state + format → **THE COUNTER**: "DAY 12 OF 15 — this request is on the post-Nov 2026 clock (requested after [state adoption]); if they haven't responded by Fri Nov 27 you may escalate. If they gave you an extension, it must be written and dated — we check that too." Pre-July-2027 requests correctly compute 30-day + legal-extension rules; per-state faster deadlines auto-applied (state law can only shorten). Shareable **Request Card** (anonymous, "DAY 12 OF 15 — escalation available").

**The Demand Letter ($29 Escalation Pack or $19/mo Pro).** Claude drafts a citation-perfect written request from the exact facts: dates, record types, format (electronic — "no fee for electronic copies where state law so provides"), the regulatory clock with the correct current standard (30-day pre / 15-day post cutover by state), fee-cap citation for the user's state (seeded from Black Health's statute-quoted table), the extension-notice demand, and the one-line: "If I do not receive my records by [date], I will file a complaint with the HHS Office for Civil Rights and [State] AG." One click: print, email, or forward via records@charthound.app (SES — the Drawbridge/BillDelta trust posture: **we never need credentials, portals, or EHR access**; the product runs entirely on letters, deadlines, and receipts).

**The Escalation Ladder (the product).** Five rungs, each unlocked by the clock: ① Nudge (D-5/D-1) → ② Demand Letter → ③ Privacy Officer / Patient Advocate (named per health system, crowd-verified phone paths — "Providence: patient advocate line beats main line 3:1, avg 4.2 days faster") → ④ **HHS OCR complaint pack** (completes the actual federal form fields, 60-day response expectation tracked) + state AG letter → ⑤ Attorney handoff (per-state access-rights attorneys, contingency-friendly). Every rung generates the exact artifact; every rung is stamped on the timeline. The user always sends — ChartHound drafts, dates, and tracks.

**The Fee Audit.** Snap the invoice → Claude vision + state fee schedule → **VERDICT STAMP**: 🟢 IN LINE / 🟡 ABOVE STATE CAP (with the exact number: "CA: $0.25/page × 214 pages = max $53.50; they charged $150") / 🔴 ELECTRONIC FEE NOT PERMITTED. One-tap "Fee objection letter" cites the statute.

**The Chart Vault + Completeness Meter.** As records arrive (upload/forward/email-in), the vault organizes by provider × date × type, and the **Completeness Meter** cross-checks each care event against expected document types (ED bundle, admission bundle, procedure bundle, imaging bundle — community-corrected checklists): "Your March 12 admission: 9 of 12 expected documents. Missing: anesthesia record, discharge med rec." **Bundle Builder**: one-click "complete chart for Dr. Reyes / my insurance appeal / SSDI form" — a single ordered PDF, with the direct-release trick baked in: the vault's cover page tells the provider to send missing items *directly* to the recipient (the patient directs the provider; no middleman, no middleman fee).

**The Fleet.** Multi-provider board for one episode: "Cedar Ridge Hospital: DAY 16 ⚠️ OVERDUE — escalated Nov 22. Lakeside Imaging: RECEIVED Nov 20. Dr. Okafor's office: SENT — awaiting" — the whole maze on one screen, with the per-provider response-time crowd data ("Cedar Ridge avg 19 days, n=412; 23% needed an escalation rung-3+").

**Crowd Truth (the moat).** Seeded honestly day one from published OCR penalty cases + state fee statutes + the Black Health deadline table; compounds with every user: **Access Speed Leaderboard** per health system (the number no hospital publishes and every patient wonders), **Fee Transparency** per system ("what people actually paid for [X] records"), **Escalation Odds** per rung ("rungs that produced records within 7 days: 81% at rung 3, 94% at rung 4 — n=2,304"), annual **State of Access** report (the Upheld data-release playbook; the July 19 2027 cutover is a guaranteed media event — "first quarter on the 15-day clock: X% compliant").

**Positioning.** "Your health system owes you a response. ChartHound counts the days." We are the records clerk on your side — never a portal, never an EHR, never an integrator. The 15-day rule is our distribution: every explainer article ("your provider now has 15 days") is a search spike we own with the counter tool ("am I on the 15-day or 30-day clock? — ChartHound knows").

## Pricing

- **Free forever:** Radar + counter for 1 active request, Request Card, state fee lookups, public leaderboards (request density IS the dataset — free-tier-as-moat; SEO magnets: "how long does [system] take for records", "records fee [state]", "15 day HIPAA rule what does it mean for me").
- **Pro $19/mo or $119/yr:** unlimited requests & fleet, Demand Letters, Escalation Ladder rungs 1–4 artifacts, Fee Audit, Vault + Completeness Meter, Bundle Builder, alerts (OneSignal), family mode (POA/caregiver, 3 people).
- **Escalation Pack $29 ONE-TIME** (episodic pricing, NameSync/Reinstated/Upheld model — nobody starts a subscription at the moment their appeal is stalling): full ladder incl. HHS OCR complaint pack + state AG letter + attorney directory entry.
- **Year-2 B2B:** anonymized Access Speed/Fee intelligence for health systems' patient-advocacy teams, state AG offices, patient-advocacy orgs ($99–499/mo); "Access Score" public leaderboard = PR + SSO.
- **NEVER:** selling records, patient data, or portal credentials; no per-record marketplace (we're the dog, not the broker).

## Market

TAM: ~150M Americans with a new-provider encounter in the trailing year; records requests are millions/yr (insurance EOIRs, SSDI, hospital transitions, elder-care). Year-1 SOM: 30K free Radar users (every "15-day rule" explainer, every "my records are late" r/personalfinance/r/Medicare/r/SSDI thread — a WEEKLY recurring format) → 6% Pro ≈ $54–72K ARR + ~1.5K Escalation Packs ≈ $44K ≈ **$100–115K ARR near-zero CAC**; July 2027 cutover = the annual spike, then quarterly OCR enforcement press keeps the drum.

## Solo MVP (4–6 weeks)

Next.js PWA + Supabase + Claude (demand/OCR/fee letters ≈ $0.05–0.20 each; invoice vision) + SES inbound (records@) + OneSignal D-5/D-1 nudges + weekly SSG state-fee & Access Speed pages. State dataset hand-seeded from Black Health's Oct 2026 statute-quoted table + OCR penalty registry (the Upheld "seed honestly day one" posture). No EHR integrations, no portal login, no ML training — the clock is plain date math and the crowd tables are plain SQL.

## Design (ui-ux-pro-max)

**"The medical records office — fluorescent calm, stacked charts, one clerk who finally takes your side."**
- Palette: chart-paper cream `#F7F3EA`, ink navy `#101A28`, deadline amber `#C98A16`, received green `#2F7D4F`, escalated red `#B23A2E` (stamps only), file slate `#5A6B80`.
- Type: **Fraunces** (verdicts, the big day counter) + **Inter** + **JetBrains Mono for every date/day-count/fee/citation** ("days are monospace or they don't count" — house rule).
- Signature components: **THE COUNTER** (huge `DAY 12 OF 15` with a filling tick-bar, turns amber at D-5, red at overdue), the **Escalation Ladder** (5 rungs, YOU ARE HERE marker, rung artifacts as stamped letters), **Fee Audit verdict stamp** (rotate-in, the only confetti this app fires is RECEIVED), **Completeness Meter** (12-slot bundle checklist, missing slots perforated), **thermal "RECORDS RECEIVED — 12 days, 2 nudge calls, $0 fees" receipt** with zigzag tear (the shareable artifact), File Drawer rows for the Fleet board.
- Voice: the records clerk who's on your side — plain words, dates, citations, zero jargon ("recertification" energy never; "the clock" instead of "regulatory response deadline" in UI copy, citations in tooltips); never cheerful-fake, never alarmist.
- Every screen ends in ONE action: **Request, Nudge, or Escalate.**

## Risks

- **HHS OCR builds a consumer status tracker** → they'll track *their* complaint pipeline, not cross-provider chase/fees/completeness; the crowd dataset + escalation artifact library is ours.
- **Rule slips or weakens** → the product core is the 30-day clock + fees + completeness + multi-provider maze; the 15-day rule is the distribution spike, not the foundation. Pre-2027 mode handles both clocks.
- **Legal-advice line** → we draft documents and cite statutes, user reviews & sends everything, attorney rung is referral; the "not legal advice" frame from Upheld/ClaimKit.
- **PHI sensitivity** → records live in the user's vault (local-first IndexedDB, optional encrypted sync); we never ingest records to generate anything but the user's own bundles; no clinical NLP in v1.

## Non-Overlap Ledger (catalog, checked twice)

Upheld ≠ (payers/ombudsman redress, post-complaint) · ProofOnce ≠ (Medicaid hour proofing) · BillProof ≠ (bill audit) · ClaimKit ≠ (claim filing — ChartHound feeds it) · Failsafe ≠ (emergency vault) · HealthBridge ≠ (fitness sync) · RenewRadar ≠ (document expiry) · FlexClock ≠ (benefits deadlines) · Drawbridge ≠ (bank access census) · VelvetRope ≠ (inbound triage). **Owns:** the records-request chase.

## Sources

- HHS OCR HIPAA Privacy Rule final rule, published Nov 16–19, 2026 (Becker's Hospital Review Nov 17 2026; STAT News Nov 18 2026; MobiHealthNews Nov 17 2026; Recording Law Nov 19 2026; Washington Examiner op-ed Nov 19 2026; KRTST/TV coverage Nov 17 2026) — 30→15 day access, ID-verification ban, app-sharing standards, compliance Jul 19 2027
- 45 CFR 164.524(b)(2) — 30-day rule + single 30-day extension mechanics (Tavrn Medical Records Access Index 2026, Oct 30 2026; GuardWell Compliance Apr 2026; LegalClarity May 2026)
- Black Health, "How to Get Your Medical Records: Fees and Deadlines by State," Oct 27–28 2026 (statute-quoted fee caps & shorter state deadlines)
- Kibbo, "HIPAA Right of Access: The 30-Day Rule," Aug 25 2026 (OCR penalty cases for missed deadlines)
- ScienceInsights, "How to Request Your Medical Records," Mar 21 2026 (denial → review-by-different-professional right)
- Justia Insurance Law Center, Oct 18 2026 (state-shorter periods, appeal after denial)
- MedFactor, "Medical Record Request From Insurance: Deadline Rules," Oct 9 2026 (MAC/RAC 30-day / UPIC payer clocks — the stakes)
- Incumbents: ChartRequest (chartrequest.com, Jun 2026 status-tracking B2B), MRO Corp record-request tracking (provider-side), KeepTrackMed (App Store), My Medical Records.ai (Feb 2026, visit-recorder/timeline), patient portals (MyChart)
