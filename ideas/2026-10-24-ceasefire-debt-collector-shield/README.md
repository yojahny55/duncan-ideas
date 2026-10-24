# CeaseFire 🛑📞 — Debt Collector Shield

> Turn "I got a call from a debt collector and I don't know what to do" into a mailed, legally-magic-word letter in 10 minutes.

**Date:** 2026-10-24
**Source:** Reddit — r/personalfinance top threads (Oct 24, 2026)
**Category:** Consumer fintech / Legal-tech / Local-first
**Status:** Idea documented + interactive prototype (`prototype.html`)

---

## 1. The Spark — What Reddit Was Screaming This Week

r/personalfinance's front page today was wall-to-wall debt collection chaos:

- **"U.S. debt collector pursuing a paid Bologna, Italy traffic fine — what are my options?"** — a *foreign* fine, already *paid*, now being chased by a U.S. collector. OP has no idea whether this is even collectible, who to complain to, or what a validation notice is.
- **"Debt collector called me to get to my sister"** — third-party contact abuse. Under FDCPA §805(b), collectors generally can't contact third parties except to locate the consumer, must not reveal they're collecting a debt, and may contact any one person only once. Almost nobody knows this.
- **"Embarrassed to post this"** — shame keeps people from acting. The single most common reason wrong/paid/zombie debts get paid anyway.
- **"Freezing a newborns credit"** — adjacent but telling: parents are learning that credit defense starts at birth.

Backing stats (external, verify before marketing copy):

- **~77 million Americans** have at least one account in collections (2026 reporting).
- CFPB's **2025 FDCPA Annual Report**: debt collection = **207,000+ complaints/year (~7% of all CFPB complaints)**; other trackers count up to **387,400 collector complaints** in a record year. Top themes: false representations, calls about debts not owed, harassment.
- The CFPB's own report flags persistent collector **errors and FDCPA violations** — including wrong statute-of-limitations claims.

The pattern: **the FDCPA is one of the most consumer-friendly laws in the U.S. — and it's enforced almost entirely by consumers who don't know it exists.** Two words ("cease" and "validate") change the entire power dynamic, but the average person facing a collector is in fight-or-flight mode, not lawyer mode.

Existing options all fail:

- **Credit-repair / debt-relief companies** — charge fees, often make it worse, some are outright scams.
- **Consumer attorneys** — great when an FDCPA violation has already happened (statutory damages + fees), but nobody calls a lawyer over a *phone call*.
- **SoloSearch / "cease and desist letter" templates** — a Google Doc and 2 hours of fear-Googling.
- **CFPB complaint portal** — excellent, but it's step 4; most people don't get past step 1 (panic).
- **Call blockers (RoboKiller etc.)** — block the symptom, don't assert the right. The collector just calls from another number, and you've documented nothing.

Nobody ships the **private call-log → rights check → magic-words letters → escalation timeline** pipeline.

## 2. Problem Statement

When a debt collector makes contact, consumers face four compounding failures:

1. **Knowledge gap** — FDCPA rights (validation within 5 days of first contact, 30-day dispute window, cease-communication right, third-party contact limits, 7-calls-per-7-days call cap per debt) are unknown to ~95% of the people they protect.
2. **Evidence gap** — violations (calls before 8am/after 9pm, calls at work after being told to stop, threatening language, contacting your sister) happen on *calls* and evaporate. Without a contemporaneous log, a complaint or lawsuit has nothing to stand on.
3. **Deadline gap** — the 30-day window to dispute and force validation is the single most powerful lever a consumer has. Miss it and the debt is presumed valid. Nothing warns you it's ticking.
4. **Shame gap** — people freeze, pay wrong debts to make it stop, or ghost entirely and let zombie debt hit their credit report.

## 3. The Solution

**CeaseFire** is a local-first web/mobile app: a collector contact journal that converts every call, letter, and voicemail into (a) a timestamped evidence log, (b) a rights-violation analysis, and (c) generated, legally-grounded letters — from gentle validation request to full cease-and-desist to CFPB complaint packet.

### Core loop

1. **Log contact** — one-tap call log entry: who, when, what they said, what they threatened. Optional: transcribe voicemails (on-device), snap collector letters (OCR).
2. **Rights check** — each entry is scored against FDCPA rules: call frequency (>7 calls/debt/7 days), call window (before 8am / after 9pm), third-party contacts, profanity/threats, refusal to identify, contact-at-work-after-notice. Violations accumulate into a **case strength meter**.
3. **Deadline clock** — from first contact, a live 30-day dispute window countdown; from first letter, the 5-day validation-notice check ("did they send it? No? That's §809(a) exposure.").
4. **Letter forge** — pick a lane, get a drafted letter citing the right sections:
   - 🟢 **Validate** — debt validation + dispute request (§809). Stops collection until they prove it.
   - 🟡 **Back off** — cease third-party contact / stop workplace calls (§805).
   - 🔴 **Cease** — full cease-communication (§805(c)). They may only confirm cessation or notify of specific remedies.
   - ⚖️ **Escalate** — CFPB + state AG complaint packet, prefilled with the log, or a "talk to a consumer attorney" summary sheet (FDCPA violations = statutory damages up to $1,000 + fees; many attorneys take these on contingency).
5. **Paper trail** — every letter is tracked: sent date, certified-mail number, response deadline (collectors have no fixed deadline to respond to validation, but continuing collection without validating is itself a violation — the app watches for that).

### Privacy stance (the moat)

Everything lives **on-device**. Debt collection data is the most sensitive consumer data there is — shame-adjacent, credit-adjacent, identity-adjacent. No account required, no cloud sync in v1, export-to-JSON for your attorney. This is a genuine differentiator vs. every credit app that monetizes your financial misery.

### Differentiator vs. RightNow / BillProof (in-house adjacency)

- **RightNow** = in-the-moment rights flashcards (breadth, no persistence).
- **BillProof** = medical bill vs. EOB auditing (one vertical, document-heavy).
- **CeaseFire** = an *adversarial relationship* tracked over time: ongoing contacts, accumulating evidence, deadline pressure, and letters the other side is legally obligated to react to. It's the first idea in the portfolio with a **case-building engine**.

## 4. Target Users

1. **The 77M with something in collections** — including zombie/paid/identity-theft debts.
2. **Third parties caught in the blast radius** — family members (like OP's sister), roommates, employers being called about someone else's debt.
3. **Recently-separated / divorced adults** — ex's debts being chased against them (marital-debt confusion is a collections goldmine).
4. **Gig workers & 1099 earners** — irregular income → missed payments → collections → shame spiral.
5. **Immigrant households** — foreign fines (the Bologna thread!), unfamiliarity with U.S. consumer law, fear of "authorities."
6. **Consumer attorneys & credit counselors** (B2B2C, later) — receive clean, timestamped case files from clients instead of shoeboxes of letters.

## 5. Tech Stack

### Prototype (shipped, `prototype.html`)
- Vanilla HTML/CSS/JS, localStorage, zero dependencies.

### Production v1 (web-first, then wrap)
- **Frontend:** React + TypeScript + Vite, Tailwind; PWA (offline-first, installable).
- **On-device:** IndexedDB (log), SQLite-WASM optional; Web Crypto for at-rest encryption of export bundles.
- **Letters:** React-PDF or serverless HTML→PDF (Cloudflare Workers + Puppeteer if cloud generation is ever wanted); e-sign flow via self-typed signature block (letters don't need wet ink).
- **OCR/voicemail (v1.5):** on-device models — Tesseract.js for letters, Whisper-tiny WASM for voicemail transcription. Local-first, nothing uploaded.
- **Rules engine:** TypeScript decision tables mirroring FDCPA §§805–809 + Reg F (call caps, time windows). Unit-tested against scenario fixtures; state-level add-ons (CA Rosenthal Act, NY DFS regs) as pluggable rule packs.
- **Mailing (optional paid tier):** Lob or Click2Mail API for certified-mail fulfillment — the one cloud hop in the product, explicit opt-in.
- **Complaint packet generator:** prefilled CFPB portal copy-paste + state AG address lookup (static dataset, quarterly refresh).
- **Backend (minimal):** none required for core product. Optional Firebase/Supabase only for cross-device sync (E2E-encrypted blobs) in v2.

## 6. Monetization

| Tier | Price | Includes |
|---|---|---|
| **Free** | $0 | Unlimited logging, rights check, deadline clock, DIY letter generation (print/download PDF) |
| **Certified** | $9.99/letter or $19.99/mo | We mail it via certified USPS w/ tracking, scanned return receipt, delivered to your case timeline |
| **Shield+** | $4.99/mo or $39/yr | Cross-device encrypted sync, voicemail transcription, unlimited OCR, rule-pack updates |
| **Pro (B2B)** | per-seat | Consumer attorneys/credit counselors: intake portal where clients share live case files |

Ethics guardrails (also marketing): **no percentage-of-savings pricing** (that's the debt-relief trap), no selling data, ever. Attorney-referral partnerships disclosed or skipped entirely. The free tier is genuinely sufficient — paid tiers sell *convenience* (certified mail is annoying), not *access to rights*. Rights access behind a paywall would be the same grift we're building against.

Secondary revenue: none from ads. None from lead-gen. If the case-strength meter hits "strong," the app suggests a consumer attorney directory (NACA — National Association of Consumer Advocates) with zero kickback.

## 7. Risks & Mitigations

- **UPL (unauthorized practice of law):** generate *information*, not advice; prominent "this tool is not a lawyer" disclaimer; letter templates reviewed by a consumer attorney in each launch state. Mitigation: template library with citations, never case-specific "you should" language.
- **Legal accuracy drift:** rules engine versioned with effective dates; quarterly review against CFPB/FTC guidance. Ship rule-pack version number inside every generated PDF (auditability).
- **Reg F nuance:** the 7-calls-in-7-days presumption applies per debt, with exceptions (attorney contacts, post-response calls). v1 flags *patterns* conservatively ("possible violation — document more") rather than declaring violations.
- **Emotional load:** users arrive scared/ashamed. UX rule: no red-scare design, no dark patterns, calm copy, "you have more rights here than you think" as the actual hero message.
- **Apple/Google call-log APIs:** mobile wrappers may not read call logs (iOS: they don't). v1 web PWA with manual one-tap logging sidesteps this; Android later via companion app.

## 8. MVP Definition (2-week build)

1. Manual contact logging (call/letter/voicemail/email) w/ fields mapped to the rules engine.
2. FDCPA rule check: call frequency, call window, third-party contact, threats, workplace contact.
3. 30-day dispute-window countdown from first logged contact.
4. Three letter templates (Validate / Back off / Cease) → downloadable PDF with merged case facts.
5. Case timeline export (JSON + printable PDF summary).
6. Zero accounts, zero network calls. Everything IndexedDB.

**Success metric:** 50% of new users generate ≥1 letter within their first session. **North star:** letters sent that produce a validation response or cessation (self-reported).

## 9. Reddit Signal Log (retrieved 2026-10-24)

- r/personalfinance top/day: "U.S. debt collector pursuing a paid Bologna, Italy traffic fine — what are my options?" · "Debt collector called me to get to my sister" · "Embarrassed to post this" · "Freezing a newborns credit" · "Becoming single, what should I look out for or do financially"
- Corroborating: CFPB FDCPA Annual Report 2025 (207k+ complaints ≈ 7% of all CFPB complaints); ~77M Americans with an account in collections (2026 industry reporting).

## 10. Prototype

`prototype.html` — fully client-side, no build step:

- Log collector contacts (type, agency, phone, date/time, summary, threats flag, third-party flag, work-contact flag)
- Live 30-day dispute-window countdown + FDCPA violation radar (call caps, quiet hours, third-party, workplace, threats)
- Case-strength meter + violation list with statute citations
- Letter forge: Validate / Back-off / Cease templates merged with your case facts → copy/print
- Escalation tab: prefilled CFPB complaint text + NACA attorney-finder checklist
- Case timeline export (JSON) and print-ready summary
- Demo data button so it can be judged in 30 seconds; localStorage persistence; disclaimer baked in

Not legal advice, obviously — the prototype says so on every screen.
