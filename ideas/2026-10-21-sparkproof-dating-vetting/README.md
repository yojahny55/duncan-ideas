# 🔎 SparkProof — The Bouncer for Your Dating Apps

**Vet matches from any dating platform before you fall for them (or worse, wire them money).**

*Paste a chat log or profile → get an instant risk dossier: scam-script detection, AI-profile red flags, love-bombing patterns, and a first-date safety plan.*

---

## Source — Reddit Trends (week of Oct 21, 2026)

Dating-app distrust is the loudest consumer frustration on Reddit right now:

- **r/SomebodyMakeThis** (2 wks ago): *"A dating app without the downsides of dating apps — no paywall, no bots, no favoritism... matches based on actual shared [interests]"* — https://www.reddit.com/r/SomebodyMakeThis/comments/1wztrfj/
- **r/OnlineDatingApps** (1 wk ago): *"Why is dating in 2026 only about hookup culture and taken so unseriously?"* — https://www.reddit.com/r/OnlineDatingApps/comments/1x39qv1/
- **r/dating_advice** (1 wk ago): *"Are dating apps just an eternal grind?"* — https://www.reddit.com/r/dating_advice/comments/1x6bigb/

Corroborating data from this month's coverage:

- ~**58% of dating-app users now worry about AI-generated fake profiles** (industry survey via nexspark, Oct 2026)
- UK romance fraud: **10,784 reports in 2025 (+29% YoY), £102M lost** (City of London Police via cybernews)
- Scammers have moved beyond fake profiles to **entire fake dating apps** (KSL, Sep 2026)
- 2026 Harris poll: **3 in 4 Americans say dating apps made romance feel transactional** — a "huge exodus" of users is underway (Google News, Oct 2026)

**The insight:** People aren't just tired of swiping — they're *afraid*. Every match could be a bot, a scammer, or an AI-generated persona. The big apps optimize for engagement, not trust, and they will never solve this (scam-adjacent activity drives their metrics). A **neutral third-party vetting layer** that works across *all* platforms is the gap.

---

## Problem Statement

Meeting someone on a dating app in 2026 requires the user to personally run fraud detection, OSINT, and threat assessment — with zero tools, at 11pm, while emotionally compromised.

Concretely:

1. **AI fake profiles are industrialized.** Generated faces, scraped bios, and LLM-driven conversation make "vibes-based" detection useless. Even careful people can't tell anymore.
2. **Romance scams follow scripts** — and the scripts are predictable (fast emotional escalation → crisis or investment talk → money moves off-platform). Victims lose billions; the warning signs were in the chat log the whole time.
3. **Platform incentives are misaligned.** Tinder/Hinge/Bumble monetize attention. Aggressive bans hurt their numbers. Users get no independent verification.
4. **Safety planning is ad hoc.** "Meet in public, tell a friend" advice exists, but there's no tool that turns a specific match's risk profile into a specific plan.
5. **Existing checks are clunky.** Reverse image search is manual; background-check sites are predatory paywalls; friends-as-vetting-committee doesn't scale to 14 conversations a week.

## Solution

**SparkProof is a companion app — not a dating app.** It sits alongside whatever platform you already use and provides three things:

### 1. Chat Vet (core feature)
Paste (or share-sheet) a conversation. A hybrid rule+LLM engine scores it against known romance-scam scripts and manipulation patterns:

- **Money signals** — crypto/investment talk, gift cards, emergencies, "customs fees," business troubles
- **Off-platform rush** — pushing to WhatsApp/Telegram within days, "my account might get banned"
- **Evasion** — can't video call, broken camera, deployed/oil rig/overseas excuses
- **Love bombing** — soulmate language in week one, future-faking, urgency to commit
- **Script tells** — phrasing patterns matched against a corpus of confirmed scam transcripts

Output: a **risk dossier** with a 0–100 score, every matched phrase highlighted in context, and a plain-English verdict. All highlighting runs client-side; cloud LLM analysis is opt-in and ephemeral.

### 2. Profile Scan
Photo metadata heuristics + AI-generation likelihood (vision forensics API), account-age/plausibility checks, bio template matching against known bot corpora, and a "too good to be true" composite score.

### 3. First-Date Plan
Based on the dossier, generates a proportionate safety plan: public venue suggestions, a live-location share link, a check-in timer that pings a trusted contact ("Duncan mode" — if you don't confirm by 9pm, your friend gets everything), and an exit-code text template.

**Positioning:** *"You wouldn't buy a used car without a Carfax. Why date without one?"*

## Target Users

**Primary**
- Women 18–35 dating on mainstream apps (highest harassment/scam exposure, highest willingness to pay for safety tools)
- Men 45+ (largest romance-scam loss demographic per FTC data)
- Anyone who's been burned once and now checks everything

**Secondary**
- Parents of teens/young adults dating online (gift-the-subscription angle)
- Adult children protecting elderly parents from romance scams
- Dating coaches and matchmakers (professional tier)

**TAM signal:** ~366M online dating users worldwide in 2026; even the 10% who've encountered a suspected scam/bot is a nine-figure market, and fear-based safety tools have proven willingness to pay (see: Life360's 70M+ MAU).

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Mobile | **React Native + Expo** | One codebase, share-sheet integration is the core acquisition loop |
| Backend | **Node.js (Fastify) + PostgreSQL** | Team's home turf; queue-heavy workload |
| Chat analysis | **Weighted regex/rule engine (on-device, TS)** + **LLM fallback (cloud, opt-in, zero-retention)** | Rules give instant free-tier results and privacy; LLM catches novel scripts |
| Scam corpus | Curated dataset (r/Scams, FTC complaint narratives, confirmed transcripts) + embeddings search (pgvector) | "This chat is 94% similar to a known pig-butchering script" is the killer feature |
| Image forensics | **Hive Moderation / SightEngine AI-detection APIs** | Don't build detector v1 in-house |
| Safety features | Live location via Mapbox, Twilio for check-in SMS, cron escalation worker | Boring, reliable, cheap |
| Infra | AWS (ECS Fargate, RDS, S3), CloudFront | Standard |

Privacy is the product: default mode processes chat text **entirely on-device**; anything sent to cloud is deleted after analysis and never used for training. Say it loudly — it's the differentiator vs. creepy background-check sites.

## Monetization

1. **Freemium** — 3 Chat Vets/month free (acquisition + word of mouth; the verdict screen is inherently shareable)
2. **SparkProof+ — $7.99/mo or $59/yr** — unlimited vets, Profile Scans, First-Date Plans, live check-in with escalation, script-corpus updates
3. **Single dossier — $3.99** — one-off purchase for people who won't subscribe (high conversion among the 45+ scam-scared segment)
4. **Family plan — $12.99/mo** — adult children monitor/protect parents (mirrors Life360's winning motion)
5. **B2B API** — smaller dating platforms and community apps license the scam-script engine rather than build it (the big apps won't buy; the long tail will)
6. **Affiliate (ethical only)** — reputable identity-verification services, never predatory background-check sites

Unit economics: rule engine is free to run; LLM+vision calls cost ~$0.02–0.05/dossier → 90%+ gross margin on paid tiers.

## Competition & Moat

- **Dating apps' built-in verification** — photo-selfie checks only; don't analyze conversation; incentive conflict. Not real competition.
- **Background-check sites (BeenVerified etc.)** — predatory pricing, legally gray data, zero scam-script intelligence. We're the anti-them.
- **Reverse image search / manual Google-fu** — the DIY we replace.
- **Moat:** the curated scam-transcript corpus + similarity matching compounds over time (every user-submitted confirmed scam makes the engine better — with consent). Trust brand + privacy stance is defensible where features aren't.

## MVP Roadmap (6 weeks)

- **W1–2:** Rule engine (TS, on-device) + scam corpus v1 (500 confirmed transcripts) + verdict UI
- **W3:** Share-sheet ingestion from WhatsApp/Telegram/iMessage + dossier screen + shareable verdict card
- **W4:** Profile Scan v1 (photo AI-detection API + plausibility heuristics)
- **W5:** First-Date Plan + check-in timer (Twilio escalation)
- **W6:** Paywall, onboarding, TestFlight/Play beta. Launch hook: post verdict-card screenshots into the exact Reddit threads this idea came from — they're begging for it.

**Success metric:** >25% free→paid within 14 days of install (fear+safety tools typically beat this); dossier share rate >15% (viral loop).

## Risks

- **App-store policies on "dating" utilities** — position as personal safety, not dating; precedent exists (bSafe, Noonlight)
- **LLM false positives damaging real people** — verdicts frame as risk signals, never accusations ("pattern match," not "this person is a scammer"); prominent disclaimer; human-review appeal for flagged profiles
- **Corpus licensing** — build from public FTC/police-published narratives + user consented submissions

---

## Prototype

Open `prototype.html` — working client-side demo of **Chat Vet**: paste a conversation (a seeded pig-butchering sample included), run the investigation, get an animated risk gauge, highlighted scam signals by category, and a generated First-Date Plan. The rule engine in the prototype is a real (miniature) version of the shipping one.

*Generated by Duncan ⚔️ — 2026-10-21, from Reddit trend research (r/SomebodyMakeThis, r/OnlineDatingApps, r/dating_advice + Oct 2026 industry coverage).*
