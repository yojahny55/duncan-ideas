# OpenSign 💡 — Your OPEN Sign for the AI Era

> **"Word-of-mouth moved inside the machine. When someone asks ChatGPT for what you sell — is your sign lit, or is the competitor down the street answering for you?"**

**Date:** 2026-11-02
**Source:** Web/Product Hunt/Indie research — Product Hunt Oct 2026 (ReSO AI #3, 499 upvotes: "get discovered & recommended when customers ask AI"), BrightLocal 2026 Local Consumer Review Survey, SOCi 2026 AI index, ChatClick 551-business study (Oct 2026), Zapier/Surmado/DiscoveredLabs AI-visibility tool roundups (Sep–Nov 2026)
**Category:** Local business / GEO (Generative Engine Optimization) / SMB SaaS
**Status:** Idea documented + interactive prototype

---

## Problem Statement

Discovery for local business just changed mediums, and 94% of Main Street missed the memo.

1. **The behavior shift is already measured, not theoretical.** BrightLocal's 2026 survey (n=1,002 US adults): **45% of consumers asked an AI tool for a local business recommendation in the past year — up from 6% the year before.** Altus Marketing puts AI-tool local discovery growth at +337% since 2023. Google AI Overviews trigger on only ~7% of local queries (Seresa, Oct 2026) — the action is in ChatGPT, Perplexity, and Gemini, where a "search results page" of 10 blue links has collapsed into **a list of 3–5 names**. Ten slots became three. The math got brutal.

2. **Almost nobody is on the list.** SOCi's 2026 index of 350,000+ locations: **only 1.2% ever get surfaced as an AI recommendation.** ChatClick asked ChatGPT, Claude, and Perplexity to recommend local businesses across 5 US cities — **of 551 real businesses, 94% were never named once.** An Ahrefs study of 4M AI citations found only 38% come from Google's top 10 — *ranking well on Google no longer protects you.*

3. **The list is unstable.** Searchable.com measured recommendation overlap for local service businesses across consecutive 10-week windows in 2026: **median overlap 26–33%** (vs 46% for B2B software). Your competitor who was never mentioned in July can own the "best plumber near me" answer by September — and nobody told either of you. Non-determinism means a single spot-check lies; you need repeated runs.

4. **The tools that exist serve brands, not Main Street.** The entire AI-visibility category is priced and shaped for CMOs: Profound $499/mo (enterprise), ReSO AI $599/mo (launched #3 on Product Hunt Oct 2026 — the demand signal), Peec €89–199/mo, Ahrefs Brand Radar $199/mo add-on ($828/mo effective minimum), Otterly $29/mo (15 prompts, brand-level, not geo-local). BrightLocal bolted "Local AI Visibility" onto its $31+/mo *agency* toolkit — a tab inside a suite, tracking-only. And per Discovered Labs' own Aug 2026 comparison: **"all three platforms diagnose the problem but don't fix it."** A taco truck owner and a solo HVAC tech have neither $29–599/mo nor a marketing department — and diagnosis without a fix list is useless to them anyway.

5. **88% have no strategy — and micro-businesses are 260% more likely to take zero action** (Seresa/Altus, Oct 2026). Not because they don't care: because nobody has ever handed them a plain-English list of *the five things that make the machine say your name* and shown them the before/after when they do it. 58% of local businesses still don't even optimize basic local search (BigEye, 2026) — the fix layer is the product.

**Nobody owns the local owner's question: "When they ask the AI for what I sell, do I exist?"**

## Target Users

- **Main Street owners (primary):** restaurants, salons, HVAC/plumbing/electrical, auto repair, dentists, gyms, pet groomers — the ~6M US local businesses with a Google Business Profile and no marketing staff. Feel the shift anecdotally ("my nephew asked Siri for a barber and sent the guy two towns over"). Will pay $19/mo for something that demonstrably brings customers.
- **Solo local marketers & small agencies (secondary):** run OpenSign as the audit + monthly client report; white-label Report Cards.
- **Chambers of commerce / downtown associations (Year-2 B2B):** "Is your downtown AI-visible?" district reports; group pricing funnel.
- **Franchise operators (Year-2):** per-location visibility across hundreds of signs.

## Proposed Solution

**OpenSign = Ask Engine → Visibility Score → Fix List → Before/After Receipts.** The first geo-local, fix-first AI-recommendation tool priced for Main Street.

### 1. The Ask Engine (diagnosis that matches reality)
- Onboarding in 90 seconds: business name, category, address/neighborhood, website. No Google credentials ever in v1 (house trust posture — everything is crawled public data + user-pasted screenshots).
- OpenSign generates **the questions your actual customers ask the machine**, in their phrasing, with their geography: *"best Cuban sandwich near Ybor City"*, *"emergency AC repair Tampa Sunday"*, *"dog groomer that handles anxious dogs south Tampa"* — mined from the category, your reviews (the words customers already use), and neighborhood names. 10–30 prompts.
- Each prompt is run **repeatedly (4×) across ChatGPT, Perplexity, Gemini, and Claude** weekly — because a 26%-overlap ecosystem can't be measured with one snapshot. Runs capture: were you named? in what position? with what sentiment? who was named instead? which sources did the AI cite?

### 2. The Visibility Score (the one number)
- **"Lit: 14%"** — you appeared in 4 of 30 runs this week. One glanceable neon score, trended weekly, sliced per-engine and per-question.
- **The Street:** your block rendered visually — which competitors' signs light up for each question and how often. "La Segunda: lit 8/10 for 'cuban sandwich ybor'. You: 1/10. Here's the diff."
- Alert on movement either direction: *"You dropped out of the 'watch repair downtown' answer this week — La Peñasco took the slot."*

### 3. The Fix List (the differentiator — diagnosis nobody else closes)
Every miss is attributed to concrete, fixable causes, rendered as prioritized cards with copy-paste content and crowd-proven impact:
- **GBP gaps:** missing services, wrong category, thin description, no Q&A seeded, stale hours/photos. Complete profiles convert 3.2× more (BigEye) — and GBP is a primary AI data source (Web Wonks, Oct 2026). OpenSign drafts the description, the 10 Q&A pairs to seed, the service list — in your voice.
- **Review language:** *"23 reviews say 'cuban' and 'cafecito' — your website says neither. AI recommends what the corpus says."* Review-reply templates that naturally elicit category keywords.
- **Citation & NAP consistency:** aggregator/directory drift that makes the machine unsure you exist.
- **Website machine-readability:** LocalBusiness schema, neighborhood/service pages, llms.txt, crawlability — checked by crawler, fixes generated as paste-ready HTML.
- **Source presence:** the AI cites Reddit, Yelp, TripAdvisor, local blogs (Ahrefs citation data) — "you have zero footprint on the pages the machine trusts; here are the 3 highest-leverage ones for your category."
- Every card carries **crowd impact stats:** *"Businesses that seeded 10 Q&As saw +18% median visibility in 4 weeks (n=412)."* The compounding dataset — the moat.

### 4. Before/After Receipts (the viral artifact)
- Apply a fix → OpenSign re-runs → **causal receipt:** *"Added GBP Q&A Oct 12. Mentions went 2/30 → 11/30 by Nov 2."* Shareable neon Report Card ("My shop is 74% Lit 💡 — ask your AI about [category] in [city]").
- Public **Neighborhood Leaderboards:** *"Who does ChatGPT recommend for tacos in Tampa?"* — public per category×city pages. SEO magnets currently owned by nobody, and every listed business is a lead (they see their score, claim it, fix it).

### Why now / why this wins
- The category's demand was validated on Product Hunt **this month** (ReSO #3 at $599/mo — for brands). The local slot at 1/30th the price is empty.
- The stats themselves are a **weekly news cycle** (94% invisible! 1.2% recommended! 45% ask AI!) — near-zero-CAC content for years.
- GEO guides are flooding in (HubSpot Aug 2026 "GEO for small business", Google's own AI-optimization doc) — education without tooling. OpenSign is the tool the guides keep implying.
- House pattern: free-tier-as-moat (the free one-shot Visibility Check IS the lead magnet AND the share card), crowd dataset unbootstrapable without users, receipt artifact, vertical wedge priced against misaligned incumbents (here: agency-suite pricing vs. a $19 Main-Street price point).

## Key Features (MVP)

1. 90-second onboarding, no credentials, public-data crawl + GBP screenshot paste
2. Question generator (category × neighborhood × review language) — 20 geo-local prompts
3. Weekly multi-engine runs (4× repetition) → Visibility Score + The Street view
4. Fix List with generated copy-paste content (GBP description, Q&A seeds, schema snippets, review-reply templates)
5. Before/After causal receipts + shareable neon Report Card
6. Competitor mention tracking per question
7. Public Neighborhood Leaderboard pages (SEO loop)

**V2:** crowd impact stats per fix type, alerting on slot loss, franchise/multi-location, agency white-label, chamber-of-commerce district reports, direct GBP API write-back (with credentials, opt-in).

## Monetization

- **Free forever:** one-shot Visibility Check (1 question set × 1 run, all engines) + shareable Report Card. Generous because check density IS the data moat and the viral loop.
- **Main Street $19/mo or $149/yr:** 30 prompts, weekly 4× runs, 4 engines, full Fix List, before/after receipts, competitor watch, alerts. Priced against one missed job — an HVAC call is $200+.
- **Agency $49/mo:** 10 client locations, white-label Report Cards, client-facing leaderboard claims, CSV exports.
- **Year-2:** Franchise per-seat; Chamber/district B2B ($99–499/mo white-label district reports — the Lamppost B2B pattern).
- No ads, no affiliate "listing optimization" services, ever — the fix list must be trustworthy, that's the whole brand.

**TAM:** ~6M US local businesses with a GBP; 33M small businesses overall. **Year-1 SOM:** 40K checks → 25K registered × 8% paid × $149 ≈ **$298K ARR** with near-zero CAC (reply-guy the weekly "94% invisible" news cycle in r/smallbusiness, r/localseo, local FB groups; leaderboard SEO; chambers as distribution).

## Competitive Landscape

| Player | Price | Audience | Gap OpenSign exploits |
|---|---|---|---|
| Profound | $499/mo | Enterprise brands | Not local, not geo, not Main-Street priced |
| ReSO AI | $599/mo | CMOs/growth teams (PH #3 Oct 2026) | Brand prompts, not neighborhood questions |
| Peec AI | €89–199/mo | Mid-market | Same |
| Ahrefs Brand Radar | $199 add-on ($828 min) | SEO teams | Requires Ahrefs stack |
| Otterly | $29/mo | Budget teams | 15 prompts, brand-level, tracking-only |
| BrightLocal Local AI Visibility | $31+/mo | Local SEO *agencies* | Tab in a suite; tracks, doesn't fix; agency UX |
| ChatClick study / evolveamz guides | — | — | Editorial proof-of-demand, no product for owners |

**Positioning:** everyone else measures brands; OpenSign lights up Main Street — geo-local questions, fix-first, $19, no credentials. Discovered Labs said the quiet part: *"they diagnose the problem but don't fix it."* That sentence is the pitch deck.

## Build Notes (Solo MVP, 4–6 weeks)

- Next.js PWA + Supabase; run engine = OpenAI/Anthropic/Perplexity/Gemini APIs behind a queue (~30 prompts × 4 runs × 4 engines weekly ≈ cost-manageable at ~$0.01–0.05/run; free tier = 1 run)
- Answer parsing: LLM extraction of {named businesses, positions, sentiment, cited sources} → normalized schema (plain SQL, no ML training)
- GBP/website audit: public crawler + Claude vision on pasted screenshots; schema checks via page fetch
- Fix generation: Claude with category playbooks (the crowd dataset starts as curated priors, becomes empirical)
- Leaderboard pages: SSG per category×city, refreshed weekly

## Design (ui-ux-pro-max)

**"Main Street at dusk, and your sign is the one that lights up."**
- Palette: dusk navy `#0E1420`, brick `#1A1210`, sign amber `#FFB84D`, lit green `#4ADE80`, unlit gray `#3A4152`, alert coral `#FF6B5A`
- Type: Fraunces (storefront-warm display) + Inter (UI) + JetBrains Mono (scores/data)
- Signature components: the **neon OPEN sign** hero whose glow intensity = Visibility Score; **The Street** (competitor signs lighting per question); fix cards stamped with expected impact; the **Report Card receipt** with neon glow for sharing
- Voice: the friendly sign-painter, not the SEO consultant. Plain English, zero jargon ("the machine" not "LLM", "lit" not "share of voice")
- Every screen ends in one action: **Run, Fix, or Share**

## Verdict

**Build it.** The demand event (45% asking AI, 94% invisible) is measured and recurring in the news; the incumbent field is priced 15–30× above Main Street and structurally tracking-only; the fix layer + causal receipts + crowd impact dataset is a genuine moat; and the free Visibility Check is simultaneously the lead magnet, the viral artifact, and the data flywheel. Timing: the holiday season is when local owners feel discovery pain most — and when "ask your AI for a gift shop/restaurant" volume peaks. Ship the free check by mid-November, ride the news cycle into January.

---

*Researched and documented by Duncan ⚔️ — 2026-11-02 (Web edition)*
