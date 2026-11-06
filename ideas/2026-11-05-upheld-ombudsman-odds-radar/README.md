# Upheld ⚖️ — The Odds Board for Your Complaint Escalation

> **"You complained. They stonewalled, lowballed, or sent a 'final response' letter. Now you have 6 months, a dozen possible escalation routes, and zero idea whether fighting is worth it. Upheld tells you your real odds, your exact route, and your deadline — before the clock runs out."**

**Date:** 2026-11-05
**Source:** Web (Financial Ombudsman Service data releases May–Sep 2026; CFPB complaint-database analyses; Resolver/FairShake competitive scan)
**Category:** Consumer Rights / RegTech / Escalation Intelligence

---

## 1. The Spark — The Data Just Dropped and Nobody Built the Product

The regulators publish the outcome data. Nobody turns it into a consumer decision tool.

**UK (Financial Ombudsman Service, FY 2025/26 annual data, published May 21 2026):**
- **220,000+ cases resolved** in the year
- **Uphold rate: 30%** in favor of consumers (down from 34% in 2024/25)
- Q1 2026/27 (July 22 2026): 53,600 new cases; Q2: 57,000 — volume rising again post motor-finance wave
- Excluding the motor-finance-commission cohort, the underlying uphold rate is **30–31%** — meaning roughly **1 in 3 escalated complaints wins**
- FOS publishes uphold rates *by product and by firm* every quarter — a public odds dataset sitting unused by any consumer product

**US (CFPB Consumer Complaint Database):**
- **17,006,331 complaints** published Dec 2011 → July 2026 (FinObservatory bulk aggregation)
- The brutal stat: an analysis of **5,867,288 credit-reporting complaints** in the year to June 2026 found only **947 ended with money paid** (Kim Law, 2026) — 0.016%. Filing ≠ winning. The delta between a sloppy complaint and a precise one is the entire game, and no tool teaches it.

**The escalation rules are a maze that changes under people's feet:**
- Financial complaints: **6 months from the final response** to reach FOS (DISP 2.8.2R) — miss it and the door shuts
- Telecoms: refer after **6 weeks** for complaints raised on/after **8 April 2026** (8 weeks for older ones) or on deadlock letter — the rule literally changed 7 months ago
- Energy: **12 months** from deadlock letter
- Different sectors route to different schemes: FOS, CISAS, Ombudsman Services, Energy Ombudsman, LGO, plus US state AGs / state insurance DOIs / CFPB
- Consumers routinely escalate to the *wrong* scheme, or sit on a final-response letter until the 6-month window quietly expires

## 2. Problem Statement

The post-rejection moment is the most anxious, least-tooled moment in consumer rights:

1. **No odds.** "Should I bother escalating?" has no data-backed answer. The 30% aggregate hides huge variance by product × issue × firm × evidence quality — and that variance is exactly what a consumer needs.
2. **No route clarity.** Which ombudsman/regulator actually covers *my* company and *my* issue? Directories exist as static SEO pages; nothing answers with *your* deadline attached.
3. **Silent clocks.** The 6-month/6-week/12-month deadlines run from a letter most people file in a drawer. Nobody sends reminders.
4. **Weak case files.** The 947-out-of-5.9M stat proves it: complaints that don't cite the rule, attach the evidence, and quantify the redress lose. Drafting help is either £200/hr solicitors or nothing.
5. **Incumbents are misaligned.** Resolver (5M users, 7.8M cases, "£2bn saved") is a *router* — its own Trustpilot answer (Jan 2026): "we can only offer escalation options that companies already have in place." No odds, no drafting intelligence, no deadline engine. FairShake automates *US private arbitration* — a different (and consumer-hostile) venue, monetized per claim. Law-firm blogs (Kim Law) rank for the data with zero product behind it — the BillCreep pattern again.

## 3. The Product — Upheld

TurboTax for the escalation decision, with PityTrack-style crowd odds.

### 3.1 Case Decoder (free 90-second wedge)
Paste or photograph the final-response/deadlock letter (or answer 5 questions) → classification:
- Is this even ombudsman-eligible? (many people escalate things that aren't in scope)
- **Which scheme/regulator** — exact route, not a directory
- **Which clock is running** — 6 months (FOS) / 6 weeks (telecoms post-Apr-2026) / 12 months (energy deadlock) / none yet (still stage 1 — here's the template to force a deadlock letter)
- Output: shareable anonymous **Case Card** (the viral artifact)

### 3.2 Deadline Engine
Live countdown from the letter date, D-30/D-7/D-1 escalations, "the door closes on <date>" — the FlexClock/Reinstated pattern. One screen, one number, one action.

### 3.3 Uphold Odds (THE house moat)
Odds tables sliced by **product × issue × firm × route × evidence attached**:
- Seeded honestly from published regulator data (FOS quarterly per-firm/per-product uphold rates are public — we can bootstrap real odds on day one, unlike most crowd products)
- Compounded by crowd outcomes ("Energy billing dispute, evidence attached, post-deadlock: **41% upheld** (n=1,204)" vs 23% without documentation)
- Public **Firm Leaderboards** ("Which banks lose most at FOS?") = weekly-refreshed SSG SEO magnets currently owned by nobody

### 3.4 Case Drafter
LLM drafts the referral statement citing the *exact* scheme rules (DISP, ombudsman "approach" documents, CFPB issue taxonomies), with an evidence checklist tailored to the issue type — because the 947/5.9M stat says precision is what separates paid from ignored. Includes redress quantification (principal + statutory 8% interest where applicable).

### 3.5 Outcome Receipts
Track the referral to verdict → shareable **UPHELD stamp** receipt with amount recovered ("Upheld — £340 + 8% interest, 11 weeks"). Annual "State of Escalation" wrap = earned media every data-release week.

### 3.6 The Never-Do List (free forever)
Harm reduction: never miss the 6-month window, never accept a "summary resolution" without checking odds, never re-file the same text, never escalate to the wrong scheme (it burns weeks).

## 4. Differentiation — NOT Any Of These

| Existing idea | Why Upheld is different |
|---|---|
| **CeaseFire** (2026-10-24) | Debt-collector defense — different adversary, pre-escalation |
| **BillProof** (2026-09-26) | Medical-bill auditing — US healthcare itemization, no ombudsman route |
| **ClaimKit** (2026-05-21) | Insurance claim filing — Upheld starts *after* the claim is rejected |
| **FlightDrop** (2026-06-11) | Airline compensation — single vertical; Upheld is the cross-sector escalation layer |
| **SaidSo** (2026-10-07) | Captures CS promises — evidence input that *feeds* an Upheld case file |
| **Reinstated** (2026-11-03) | Platform bans — same house DNA (odds + deadlines + case file), different adversary |
| **BillDelta** (2026-10-31) | Fee anatomy on bills you can't cancel — disputes feed *into* Upheld when they fail |
| **UnlockMe** (2026-04-03) | Credential lockouts — access problem, not adjudication problem |

Upheld owns the moment: **"I complained, I lost, now what are my odds?"** Same house pattern as PityTrack/InReview/Reinstated — crowd odds tables, deadline engine, shareable receipt, free-tier-as-moat, vertical wedge priced against misaligned incumbents.

## 5. Business Model

- **Free forever:** Case Decoder + Case Card + Deadline Engine + Never-Do List + 3 odds lookups/mo + Firm Leaderboards (decoder density feeds the dataset)
- **Case Pass — $19 one-time:** full Case Drafter + evidence kit + complete odds slice + PDF referral pack (episodic pricing for an episodic crisis — the NameSync/Reinstated model; nobody starts a subscription at the worst moment of their dispute)
- **Pro — $6/mo or $49/yr:** unlimited cases, deadline alerts, outcome tracking, drafter credits, household mode
- **Year-2 B2B:** anonymized escalation-intelligence API for claims-management firms, fintechs, and consumer-advocacy orgs ($99–499/mo); law-firm referral marketplace **never** — the clean-case-file brand is the asset
- **TAM:** FOS alone ~220K resolutions/yr + ~1M UK escalations across all schemes; CFPB sees ~3M+/yr; EU ADR networks larger still. **Year-1 SOM:** 30K free decodes → 3K Case Passes ($57K) + 1.5K Pro ($108K) ≈ **$165K ARR** with near-zero CAC — every quarterly FOS data release and every "complaint rejected" Reddit thread is a recurring GTM event
- **Solo MVP 4–6 weeks:** Next.js PWA + Supabase; Claude for decode/draft; seed odds from public regulator datasets (plain SQL, no ML training); SES email-forward ingest for final-response letters (BillDelta pattern); OneSignal deadline alerts; weekly SSG leaderboards

## 6. Design (ui-ux-pro-max)

**"Court docket meets odds board."**
- Ink navy `#0C1120`, docket cream `#F5EFE1`, upheld green `#3FB950`, denied red `#E5484D`, deadline amber `#FFB454`
- Fraunces display headings + Inter prose + JetBrains Mono for every number, date, and odds figure
- Signature components: **Uphold Odds dial** with evidence-tagged `n=` counters, vertical **Escalation Ladder** with a "YOU ARE HERE" marker, sticky countdown strip, docket-stamp animations (UPHELD is the only confetti this app fires), Case Card rendered as a stamped legal document
- Voice = the calm solicitor: "here are your odds, here is your route, here is your deadline, here is what not to do"
- Every screen ends in ONE action: **Decode, Escalate, or Draft**

## 7. Sources

- financial-ombudsman.org.uk — FY2025/26 annual data (May 21 2026: 220K cases, 30% uphold); Q1 2026/27 (Jul 22 2026: 53.6K cases, 26–30% uphold); Q2 2026/27 (57K received); Feb 5 2026 quarterly (27%/31% ex-motor-finance); consumer time-limits page (6 months from final response)
- insurancedisputeservice.co.uk (Sep 24 2026) — insurance uphold-rate breakdown
- thekimlawfirmllc.com (2026) — 5,867,288 credit-reporting complaints → 947 monetary outcomes
- finobservatory.org — 17M CFPB complaints aggregated Dec 2011–Jul 2026
- consumer-rights.org (Sep 2 2026) — UK ombudsman directory, 6-month rule
- civilhelp.co.uk — telecoms 6-week/8-week rule change effective 8 Apr 2026
- uktaxdrag.co.uk (Oct 3 2026) — energy 12-month deadlock window
- Resolver: Trustpilot escalation-limitation answer (Jan 13 2026), getkibbo.com guide (Jul 8 2026), usenoreply.com comparison (Apr 26 2026 — 5M users/7.8M cases/£2bn)
- CNET — FairShake arbitration-automation model

---

*Upheld: the odds are public. The deadlines are real. Somebody has to hand them to the consumer.*
