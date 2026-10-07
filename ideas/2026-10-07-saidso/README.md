# SaidSo 🤖📸 — "The Bot Said So. Now Make Them Honor It."

**Date:** 2026-10-07
**Source:** Reddit trends — r/doordash, r/UnitedAirlines, r/legaladvice, r/CustomerService + this week's AI-customer-service news cycle
**Category:** Consumer rights / Evidence capture / Local-first AI
**Status:** Idea documented + interactive prototype (`prototype.html`)

---

## 1. Problem Statement

AI customer service has crossed from "annoying" to "actively harmful," and consumers have no way to hold companies accountable for what their bots say.

**The pain is everywhere right now (late Sep – early Oct 2026):**

- **Bots deny refunds with fabricated reasons.** r/doordash: *"The bot told me they cancelled it without refund because they were 'in the process of making the item' — no they weren't! I had to beg several times for a human."*
- **Bots take destructive actions.** NBC Chicago (Sep 2026): a United customer asked a chatbot about a refund fee — *the bot cancelled their entire trip*.
- **Bots hallucinate policy.** Documented case: a support bot promised 90-day returns when the real policy was 14 days. Another: *"Returns are accepted within 30 days"* when it's actually 7. Restaurants hallucinating allergen answers. Stores inventing products.
- **Bots flip-flop under pressure.** Research on AI sycophancy shows bots change correct answers when a user pushes back with "are you sure?" — so the "policy" you were quoted 5 minutes ago may not survive the next message.
- **Alchemer survey (Oct 2026):** the two biggest customer complaints are *can't reach a person* and *have to repeat themselves*. The Verge this week: *"AI hallucinations are making entitled customers even worse."*

**And here's the twist consumers don't know:** the law already sides with them.

- **Air Canada v. Moffatt (2024):** a tribunal ruled the airline was *bound by its chatbot's* bereavement-fare promise, even though the website's real policy said otherwise. "The chatbot is an agent of the airline."
- **German appeals court (May 2026):** confirmed again — *a business owns what its support chatbot says, even when the AI makes it up.*
- The Chevy dealership whose bot "promised" a Tahoe for $1 became a meme for the same principle.

**The gap:** rulings exist, but no consumer tool operationalizes them. When the bot promises a refund and the company later refuses, you have to (a) still have the conversation, (b) know it's evidence, (c) know the precedent, and (d) write a letter that cites it. Most people fail at step (a) — chat windows close, transcripts vanish, and screenshots are trivially dismissible as fabricated (in an era where everyone knows AI can fake anything, an unverified screenshot proves nothing).

## 2. The Solution: SaidSo

**A promise-capture and enforcement kit for AI customer service.** One flow, four weapons:

### 1. Capture → tamper-evident record
- Paste a transcript, upload screenshots, or use the share-sheet from any chat widget.
- OCR + LLM extraction pulls out every **commitment**: "you will receive a refund," "returns accepted within 90 days," "your credit will appear in 3–5 days."
- Each capture gets a **SHA-256 hash + RFC-3161 timestamp**, optionally anchored to OpenTimestamps (Bitcoin). The record is provable: *this text existed at this moment and hasn't changed.* This is the answer to "screenshots can be faked."

### 2. Verify → promise vs. real policy
- SaidSo fetches the company's *actual* published policy (refund page, terms, tariff) and diffs it against what the bot said.
- Three verdicts:
  - 🟢 **PROMISE+** — bot promised *more* than policy → under Air Canada/Moffatt precedent, the company is likely bound by its agent's word. **This is your leverage.**
  - 🟡 **MATCH** — bot and policy agree → record it anyway (policies change; sycophantic bots flip).
  - 🔴 **CONTRADICTION** — bot said *less* than your rights (denied something policy grants) → cite their own policy page back at them.

### 3. Enforce → one-tap demand letter
- Generates a firm, citation-backed letter: the promise, the timestamped evidence hash, the Air Canada precedent (and the German 2026 ruling for EU), a deadline, and the escalation path (small claims / CFPB / state AG / national consumer agency).
- Export as PDF, email, or copy-paste. Most companies fold at this stage — it's cheaper than being the next Reddit thread.

### 4. Crowd → the Bot Reliability Index
- Anonymized aggregates: which companies' bots hallucinate most, most-contradicted policies, denial rates. A public leaderboard ("UnitedAirlines bot: contradicts published policy in 34% of captured refund chats") is press-bait and SEO gold — and it's a moat no incumbent can build without damning themselves.

### Why it wins
- **Timing:** two court rulings + a mainstream news cycle = the "legal hook" is now real and citable, not theoretical.
- **Zero cold start:** value from your first capture, even with no crowd data.
- **Emotional engine:** the PROMISE+ verdict is shareable outrage — exactly the content that made Air Canada and Chevy-Taho man go viral. Built-in distribution via r/legaladvice, r/CustomerService, r/flights.
- **Adjacent ≠ duplicate:** HumanPlease (2026-05-22) helps you *reach* a human; CallTrail (2026-02-23) logs *your calls*. SaidSo is the first to capture *the bot's commitments as legally-weighted, tamper-evident evidence*.

## 3. Target Users

1. **Refund/claim fighters** — r/doordash, r/instacart, r/AmazonHelp crowd; daily victims of bot-denied refunds.
2. **Frequent travelers** — airlines are the worst offenders (United trip-cancellation, Air Canada bereavement); high stakes, high emotion, clear precedent.
3. **Insurance & telecom bill disputers** — bots front-run every claim denial; overlaps with BillProof users.
4. **EU/UK consumers** — the May 2026 German ruling makes this *stronger* in Europe; GDPR-era consumers already comfortable asserting rights.
5. **Advocacy & legal-aid orgs** — consumer unions, small-claims clinics wanting structured evidence instead of hearsay screenshots.
6. **(Later) B2B:** CX teams who want to audit their own bots before a court does — same engine, flipped customer.

**Market signal:** ~94% of Reddit's value to brands is exactly these complaint threads; Alchemer's 6,000-person survey shows the frustration is majority opinion, not a vocal minority. AirHelp proved consumers pay 25% success fees for "we enforce your rights against an airline." SaidSo is AirHelp for *everything a bot ever promised*.

## 4. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Mobile | React Native + Expo (share-sheet extension) | One codebase; share target from chat widgets is the killer capture path |
| Web | Next.js PWA | Paste-transcript flow, SEO for the Reliability Index |
| Extraction | On-device OCR (ML Kit) → LLM claim extraction (fine-tuned small model, e.g. Qwen/Llama-class) | Privacy: transcripts contain PII; keep raw text local, send only redacted claim candidates |
| Promise classifier | 3-class model (commitment / policy-statement / hedging) + confidence | The core IP; trained on AirHelp-style annotated support transcripts |
| Evidence | SHA-256 + RFC-3161 TSA + optional OpenTimestamps anchoring | Cheap, standard, court-legible tamper evidence |
| Policy crawler | Playwright workers + per-brand policy-page registry | Diff bot claims vs published policy |
| Letters | Template engine (Handlebars) → PDF (WeasyPrint) | Jurisdiction-aware templates (US state / EU country) |
| Backend | Node.js (Fastify) + Postgres + S3-compatible object store | Boring, scalable, Yojahny-native |
| Infra | AWS (Lambda for letter gen, CloudFront, RDS) | Fits existing expertise; ~$50/mo at 10k users |

## 5. Monetization

1. **Freemium:** 3 captures/mo free (verification + storage). **Pro $4.99/mo or $29.99/yr:** unlimited captures, demand letters, policy diffs, priority support.
2. **Success fee (the AirHelp model):** optional "escalate for me" — SaidSo's team files the CFPB/AG complaint or small-claims packet; 20% of recovered amount, capped at $100. Zero risk to user, aligns incentives.
3. **B2B Bot Audit:** CX vendors/insurers pay to run the same extractor against their own bot logs ("hallucination exposure report"). $500–2,000/mo. They're already terrified post-Air-Canada; sell them the mirror.
4. **Data licensing:** anonymized Bot Reliability Index to journalists, consumer groups, and (carefully) competitors — the index itself stays public for trust/SEO.
5. **Affiliate/adjacent:** small-claims filing services (e.g. DoNotPay successors), travel-compensation partners.

**Unit economics:** extraction ≈ $0.002/capture (small local-first model), TSA timestamp ≈ $0.01, storage ≈ pennies. Pro subscriber margin >95%; success fee is pure upside.

## 6. Prototype

`prototype.html` — interactive single-file demo:
- Paste any bot transcript (sample pre-loaded: airline refund denial)
- "Analyze" extracts promises with classification + confidence, computes a SHA-256 evidence hash and timestamp
- Verdict card (PROMISE+ / MATCH / CONTRADICTION) with the legal hook explained
- One-tap demand-letter generator with real precedent citations
- Capture vault showing hashed, timestamped records

## 7. Risks & Mitigations

- **"Is this legal advice?"** — No: it's evidence capture + template generation, clearly disclaimed. Templates reviewed per jurisdiction.
- **Companies block scrapers** — policy registry is manually seeded for top 500 brands; crowd-sourced updates with review.
- **Bots stop making promises (hedging everywhere)** — that outcome still wins: the Reliability Index documents the hedging, and MATCH records still protect users when bots flip.
- **Fake-capture abuse** — hash proves *content integrity*, not authenticity; be honest about that. Authenticity path: browser-extension capture with signed DOM snapshots (v2).

---

*Precedent is on your side. Now you just need receipts.* 📸
