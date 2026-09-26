# BillProof 🩺🧾 — Your Medical Bill Is Probably Wrong. Prove It.

**Date:** 2026-09-26
**Source:** Reddit — r/personalfinance threads (week of Sep 20–26, 2026)
**Category:** Consumer fintech / Health admin / Local-first AI
**Status:** Idea documented + interactive prototype (`prototype.html`)

---

## 1. The Spark — What Reddit Was Screaming This Week

r/personalfinance this week was wall-to-wall medical billing horror stories:

- **"Doctor's office sent my $220 bill to collections and now they're charging interest/fees. Is this all legal?"** (240 upvotes, 76 comments) — a *small* bill, escalated to collections, and OP has no idea what their rights are. The top comments are a masterclass in "request an itemized bill / compare against your EOB / dispute in writing" — advice that requires a spreadsheet, a printer, and 4 hours of googling.
- **"Urgent care sent me a bill a year later — but it was paid that same day, and the statement shows the wrong copay"** — already-paid balance re-billed with wrong numbers a *year* later.
- **"I have a $5k+ medical bill from 3 years ago that was never billed to my insurance"** — provider never ran insurance; patient nearly on the hook for full chargemaster price.
- **"Our toddler will be starting pre-k soon. The school is asking if they can bill our private health insurance…"** (489 upvotes, 205 comments) — parents discovering how opaque the billing/insurance interface is, in real time, in public.

Corroborating outside Reddit this same week: Medical Billing Advocates of America has long estimated **the majority of hospital bills contain errors** (double billing, wrong codes, phantom services), and consumer-finance press is running "how to read your deliberately confusing medical bill" explainers *right now*. The No Surprises Act (2022) gave patients real federal protections — and almost nobody knows how to invoke them.

The pattern: **medical bills are treated like facts. They're actually drafts — frequently wrong, legally contestable, and time-boxed.** People pay wrong bills out of exhaustion, or worse, let them slide into collections where they damage credit for amounts they never owed.

Existing options all fail:
- **GoodBill / Share Health / Patient Advocates** — human negotiators that take 20–35% of savings. Expensive, slow, and you hand over your medical data.
- **Insurance portals** — show EOBs but never cross-reference them against the provider's bill. You're the integration layer.
- **Spreadsheets + Google** — the actual incumbent. Works, but takes hours per bill and most people give up.

Nobody ships the **personal, private bill-vs-EOB auditor** that turns "this looks wrong" into a mailed dispute letter in 10 minutes.

## 2. Problem Statement

When a medical bill arrives, the patient must manually:

1. Find the matching EOB from their insurer (different portal, different date format, different line items).
2. Reconcile line-by-line: billed amount vs. allowed amount vs. insurance paid vs. what *you* owe.
3. Spot the classic error patterns: duplicate billing, upcoding (99214 billed for a 99212 visit), services never received, balance-billing above in-network rates (illegal under the No Surprises Act for emergency/out-of-network-at-in-network-facility cases), bills issued before insurance adjudication, stale bills past prompt-pay windows, wrong copay/coinsurance math, deductible already met.
4. Know the deadlines: insurer appeal windows (often 180 days), FCRA §1681i 30-day credit dispute window once in collections, state prompt-pay and collection-notice laws.
5. Write and send a dispute letter that cites the right rules.

Almost nobody does all five. So wrong bills get paid, or ignored → collections → credit damage. The failure mode is asymmetric: the provider has a billing department; you have a kitchen table at 10pm.

## 3. Solution

**BillProof: snap the bill, snap the EOB, get a verdict and a ready-to-mail dispute letter.**

Core loop:

1. **Capture** — photograph/PDF both documents. OCR + LLM extraction parses provider bill line items and EOB line items into structured JSON (CPT/HCPCS codes, dates, amounts, adjustment reasons).
2. **Reconcile** — the engine matches lines across the two documents and runs a rules library of ~30 known error patterns (duplicates, upcoding signatures, balance-billing above allowed amount, pre-adjudication bills, copay math errors, already-paid balances).
3. **Verdict** — one screen: what they billed, what your plan says you owe, the delta, each flagged error with a plain-English explanation ("Line 3: '99214' office visit billed, EOB shows plan processed '99212'. Upcoding — the visit complexity doesn't match.").
4. **Act** — one tap generates a dispute letter (or insurer appeal, or FCRA §1681i credit-bureau dispute if it's already in collections) pre-filled with line items, dates, amounts, and legal citations. Export as PDF or mail-me-a-copy. Deadline tracker pings before appeal windows close.
5. **Track** — each bill becomes a case with a timeline (sent → provider response → resolved/escalated), so nothing rots unanswered.

**Privacy stance (the moat vs. human advocates):** local-first. OCR and extraction run on-device (Whisper-class/VLM mobile models are good enough in 2026) or in an ephemeral pipeline that deletes raw images after parse. No account required for the first bill. You never hand your medical history to a startup that will later sell it.

## 4. Target Users

- **Primary:** US adults 25–55 who've received a surprise/confusing medical bill in the last 90 days. ~20M medical debt holders; 66% of bankruptcies cite medical costs. Every ER visit, birth, surgery, or imaging run produces one.
- **Secondary:** adult children managing parents' medical admin (the "sandwich generation" — huge, underserved, motivated).
- **Tertiary:** people with chronic conditions/high-deductible plans who generate 10+ bills/year and want a running ledger.
- **Anti-persona:** employers/insurers. BillProof answers to the patient, not the payer — same trust positioning that makes LoopClose answer to the manager, not HR.

## 5. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Client | PWA first (React + TS), then React Native wrapper | Install friction kills conversion at the moment of panic; PWA works from a "scan this QR" on a help page |
| OCR/Extraction | On-device: MobileViLM-class + Tesseract fallback; server fallback: cloud vision + LLM structured extraction | Privacy-first; server path for desktop PDFs |
| Reconciliation engine | Deterministic TypeScript rules library (~30 patterns), LLM only for fuzzy line matching | You never want an LLM *hallucinating a dollar amount* into a legal letter — rules do math, LLM does matching |
| Backend | FastAPI (Python) + Postgres + S3-compatible object store (ephemeral, TTL-deleted) | Familiar, boring, HIPAA-adjacent posture achievable |
| Letters | Server-rendered PDF (Playwright) + USPS click2mail API integration | "Mail it for me" is a killer $3 upsell — nobody has stamps in 2026 |
| Deadline tracking | Cron + push (web push / APNs) | Appeal windows are the whole game |
| Compliance | No PHI persistence beyond case data; SOC2 path later; BAA not needed (consumer-facing, not covered entity) | Consumer health apps sit outside HIPAA when user-initiated — still design like it applies |

## 6. Monetization

- **Free:** first 2 bills audited + verdicts (letters watermarked "upgrade to generate"). Hook is the verdict moment — *"they overbilled you $1,347"* — highest-converting screen imaginable.
- **Pro — $9/mo or $59/yr:** unlimited audits, dispute/appeal letter generation, deadline tracking, case timelines, family mode (5 members).
- **À la carte:** $5 per letter; $3 per physical mailing via click2mail.
- **Success-share tier (optional, later):** "pay nothing, we keep 10% of documented savings" — directly undercuts GoodBill's 25–35% with software margins.
- **B2C2B wedge (year 2+):** unions, employers, and health-advocacy nonprofits license it as a member benefit. They *want* employees fighting wrong bills; it lowers their health-cost complaints.
- Deliberately **no** data monetization, ever. It's the brand.

**Napkin math:** 40M+ US adults hit an unexpected medical bill yearly; even 0.1% converting to $59/yr is $2.4M ARR from a product with viral word-of-mouth baked in (every resolved case is a "holy shit, it worked" story people post — on Reddit, where this was born).

## 7. Risks & Open Questions

- **Extraction accuracy on garbage scans** — faded thermal faxes from hospital billing departments. Mitigate: confidence scores, human-review fallback queue (paid tier), re-shoot prompts.
- **State law variation** — prompt-pay and collection laws differ. Ship federal rules (No Surprises Act, FCRA) first; layer top-10 states.
- **Provider retaliation fear** — some users worry about disputing while mid-treatment. Messaging matters: disputes are routine, providers expect them.
- **Insurer EOB access** — no universal API. Users screenshot/PDF from portals; long-term, CMS Interoperability API (FHIR) gives programmatic EOB access for many plans — that's the eventual automation unlock.
- **Not legal advice** — letters cite public statutes and template language; add the standard disclaimer; partner with a patient-advocate nonprofit for escalation referrals.

## 8. Prototype

`prototype.html` — self-contained interactive mobile mock:
- Sample reconciled bill (ER visit) with EOB cross-reference
- Flagged errors with plain-English explanations and dollar deltas
- One-tap dispute letter generation (renders the actual letter)
- Appeal deadline countdown + case tracker
- Savings stats bar

Open it in any browser. All demo data, no backend.

---

*Idea generated 2026-09-26 by Duncan from Reddit trend scan (arctic-shift API + r/personalfinance week top). ⚔️*
