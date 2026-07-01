# Sift — The AI-Slop Filter for Online Shopping

**Date:** 2026-07-01
**Source:** Reddit trends + industry research — AI-generated product listings, fake review clusters, Google AI Overview hallucinations
**Status:** Idea Draft + Prototype

---

## Problem Statement

Online shopping in 2026 is broken. A user opens Amazon, Walmart, or any Shopify storefront looking for something simple — a vegetable peeler, a phone charger, a dog bed — and is immediately drowning in:

1. **AI-generated product listings** — Amazon's search bar now literally invents products that don't exist ([r/technology, June 2026](https://www.reddit.com/r/technology/comments/1tvx1pe/)). Dropshippers paste ChatGPT-generated descriptions over stock photos. Product names are SEO-stuffed word salad ("Vegetable Peeler Stainless Steel Professional Kitchen Gadget Ergonomic Handle Multifunctional Potato Carrot Scraper Slicer Dicer").
2. **AI-generated reviews** — Entire review clusters are fabricated. Five-star text reads like a press release. "This product changed my life" appears 300 times across unrelated listings. ReviewMeta and Fakespot flagged 40%+ of Amazon reviews as unnatural years ago; the AI generation era made it exponentially worse.
3. **Hallucinated features** — Listings describe capabilities the product physically doesn't have (USB-C on a product that ships Micro-USB, "dishwasher safe" on electronics, fake battery capacity claims).
4. **Google AI Overviews make it worse** — Search "best electric kettle 2026" and Google's AI Overview confidently summarizes AI-written listicles that were themselves summarizing Amazon AI listings. It's AI all the way down. A landmark German court ruling in June 2026 declared Google liable for false AI Overview answers — but the user is still the one who buys the wrong thing.
5. **Reddit itself is compromised** — June 2026 Help Net Security research showed that 13-word Reddit comments can poison AI search agents. The "just search Reddit" strategy is degrading.

**The result:** The average shopper spends 40+ minutes researching a $25 purchase, opens 12 browser tabs, cross-references Reddit threads, scrolls Wirecutter, and still ends up buying something with a 41% chance of being returned.

### Specific frustrations (from Reddit research, June 2026)

- **"Amazon's search bar will invent AI-generated products you can't buy"** — r/technology, June 2026. Top comment: *"Fake reviews!!"*
- **"Google's AI gives bullshit answers and then gaslights you"** — r/technology, June 2026. Users report being told they're "frustrated and confused" when correcting AI Overview falsehoods.
- **"I turned off AI Max campaigns because it was only getting me garbage leads"** — r/PPC, June 2026. Even advertisers admit the AI layer is polluted.
- **"Google search is almost dead"** — seo2.blog, June 2026. Top-10 results for most product queries are now AI-written affiliate SEO farms.
- **"Reddit comments with 13 words can influence AI research agents"** — Help Net Security, June 2026. The "just ask Reddit" escape hatch is closing.

The trust layer between "I want to buy a thing" and "I am confident this thing is real and good" has collapsed. **Sift rebuilds it.**

---

## Solution

**Sift** is a browser extension + mobile companion that acts as a "BS detector" for online shopping. You browse normally; Sift overlays trust signals on every product page you visit and surfaces genuinely human-verified alternatives.

### Core Features

1. **Sift Score (0–100)** — Every Amazon, Walmart, Shopify, Target, and Best Buy product page gets an at-a-glance trust score combining:
   - **Listing authenticity** — Image reverse-search (is this a stock photo? stolen from another brand?), description language model fingerprinting (is this ChatGPT-generated?), title keyword-density analysis
   - **Review integrity** — Per-review natural-language patterns (5-star clusters posted within 48 hours, unverified purchase ratio, repeated phrasing across unrelated SKUs, reviewer history entropy)
   - **Seller reputation** — Storefront age, return rate, trademark filings, BBB complaints, business address verification
   - **Spec verification** — Cross-check listed specs against manufacturer documentation, FCC filings, and patent databases when available

2. **"Show me the real version"** — One button. Sift queries r/BuyItForLife, r/Frugal, Wirecutter, NYT, Sweethome, and trusted YouTube channels (Project Farm, Hip2Save, etc.) for the same product category. Returns 3–5 genuinely human-vetted alternatives with citations and direct links.

3. **Hallucination highlighter** — Sift flags specific claims in the listing that can't be verified or contradict manufacturer specs: *"This claims 'dishwasher safe' — manufacturer site says hand-wash only."*

4. **Price-history overlay** — Replaces fake "was $99, now $49" strikethroughs with actual 90-day CamelCamelCamel / Keepa-style data so you see whether this is actually a deal.

5. **Return-rate badge** — When seller data is available, shows the actual return rate for the ASIN / SKU. Products above 15% return rate get a warning.

6. **Community Trust Feed** — A Reddit-style comment thread on each product where Sift users leave short, verified-purchase-required notes. Top contributions float up; AI-generated or templated comments get auto-filtered.

### What Sift Does NOT Do

- **No affiliate links.** Sift's business model is not affiliate commissions. That's the conflict of interest that ruined Wirecutter, NerdWallet, and the entire SEO-review industry. Sift makes money from users, not vendors.
- **No "deals" or "recommended" feed.** Sift is a tool you bring to a product page, not a shopping destination. It never pushes you toward a purchase.
- **No AI summaries of reviews.** AI summarizing AI-written reviews is how we got here. Sift shows you the actual patterns (cluster graphs, review timelines, image-search matches) and lets you judge.

---

## Target Users

### Primary

**Skeptical online shoppers, 25–55, who already cross-reference before buying.**
- Has 12+ browser tabs open during any purchase over $30
- Reads r/BuyItForLife before buying appliances
- Has been burned by fake reviews at least once
- Uses Reddit, Wirecutter, and YouTube reviewers as their trust layer
- Likely has Fakespot installed but finds it unreliable in the AI era

**Size:** ~30M people in the US alone fit this profile. Globally, 100M+.

### Secondary

**Busy professionals who outsource product research.**
- Wants to buy a decent thing in 5 minutes, not 50
- Will pay $20/year to never read another fake review again
- Has disposable income, values time over optimization

**Size:** ~80M in the US.

### Tertiary

**Elderly / less tech-savvy shoppers who are most vulnerable.**
- Hit hardest by AI-generated scam listings
- Family members would gift them Sift as protection
- Lower willingness to install browser extensions — mobile app + caregiver alerts make more sense here

---

## Tech Stack

### Browser Extension (Primary Surface)
- **Manifest V3** Chrome / Firefox / Edge / Safari extension
- **TypeScript + React** for the overlay UI
- **WXT framework** (modern WebExtension toolkit, 2026-ready)
- **Content scripts** that inject trust signals into Amazon / Walmart / Shopify DOM
- **Background service worker** for score caching + cross-tab state

### Mobile Companion App
- **React Native + Expo** (one codebase, iOS + Android)
- Share-sheet integration: share any product URL → Sift analyzes it
- Push notifications when a tracked product drops in price or gets flagged

### Backend (Analysis Engine)
- **Python (FastAPI)** on AWS Lambda + API Gateway (serverless, scales to zero)
- **PostgreSQL** (RDS) for product cache, seller reputation, community comments
- **Redis** (ElastiCache) for Sift Score caching — recompute only when listing changes
- **Qdrant** (vector DB) for fast image fingerprint similarity search (duplicate/stolen product images)

### Data Sources (Federated)
- **Amazon Product Advertising API** (affiliate-free access for specs + pricing)
- **Keepa API** (90-day price history)
- **Reddit API** (r/BuyItForLife, r/Frugal, r/SomebodyMakeThis mentions)
- **FCC ID database** (verify electronics claims)
- **USPTO TESS** (trademark verification)
- **BBB API** (seller complaints)
- **Google Vision API** (image reverse-search + Optical Character Recognition on product photos to verify spec-sheet text matches listing claims)

### AI Layer (Defensive, Not Generative)
- **Fine-tuned DeBERTa classifier** for AI-generated review detection — trained on 1M labeled reviews from a labeled dataset (GPT-4o-generated vs. verified-purchase humans)
- **Sentence-transformers** for review cluster detection — flag groups of reviews that are semantically near-duplicates across unrelated SKUs
- **No LLM summarization of reviews** — the entire point is to avoid AI-on-AI summaries

### Infrastructure
- **Terraform-managed AWS** (Lambda, API Gateway, RDS, ElastiCache, S3, CloudFront)
- **GitHub Actions** CI/CD — extension gets auto-published to Chrome Web Store on tag
- **Sentry** for error tracking
- **PostHog** for product analytics (self-hosted — no user data leaks to third parties)

---

## Monetization

### The Anti-Subscription Stance

Sift's positioning is deliberately anti-subscription, aligned with the 2026 Reddit-led backlash against subscription fatigue. The whole point of the product is that you shouldn't have to keep paying for trust. So:

**1. Free Tier (Forever)**
- Sift Score on every product page
- Last 30 days of price history
- Top 1 "real alternative" suggestion
- Community Trust Feed read-only

**2. Lifetime License — $39 one-time**
- Unlimited price history
- All "real alternative" suggestions
- Hallucination highlighter
- Return-rate badge
- Community comment posting rights
- Mobile companion app
- *Marketing hook: "Buy Sift once. Never buy a fake review again."*

**3. Family Plan — $69 one-time**
- 5 lifetime licenses for household members
- Shared blocklist + shared watchlist
- Elderly-caregiver alerts ("Mom saved a listing with a 12% Sift Score")

**4. Business / Editorial — $299/yr**
- API access for journalists, Wirecutter-style publications, consumer-protection nonprofits
- Batch analysis for product roundups
- Citation-ready embeddable widgets

### Revenue Math

| Metric | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Free users | 250,000 | 1,200,000 | 4,000,000 |
| Lifetime conversions | 2.5% | 3.0% | 3.5% |
| Paid users | 6,250 | 36,000 | 140,000 |
| Avg revenue per paid | $42 (mix of individual + family) | $44 | $46 |
| Gross revenue | $262K | $1.58M | $6.44M |
| COGS (API, infra, Vision API) | $90K | $380K | $1.1M |
| Gross margin | 66% | 76% | 83% |

The bet: lifetime pricing creates urgency at launch (Redditors love one-time purchases), builds a war chest, and the conversion rate compounds because free-tier users refer each other. Year-3 operating margin supports introducing a separate enterprise SaaS line for marketplaces themselves (Amazon sellers wanting to audit their own listings).

### Why This Works as a Business

- **Zero vendor conflict** — unlike affiliate-driven sites, Sift has no reason to push users toward any specific product. The incentive is purely user-aligned.
- **Viral distribution mechanism** — Sift Score badges appear on product pages; curious non-users click to learn what it is. Freemium funnel is built into the product surface itself.
- **Compounding moat** — Every user who flags a hallucinated spec or fake review improves the dataset for the next user. The community Trust Feed is a network effect Fakespot cannot easily replicate.
- **Defensive against platform retaliation** — If Amazon tries to block the extension (they've done this to Fakespot), the mobile share-sheet app survives and grows independently.

---

## Competitive Landscape

| Competitor | What They Do | Why Sift Wins |
|---|---|---|
| **Fakespot** | Letter-grade review confidence | Surface-level; doesn't detect AI-generated review text well; owned by Mozilla now, slow-moving; no alternative-suggestions layer |
| **ReviewMeta** | Review-pass/fail analysis | Same limitations as Fakespot; no AI-listing detection; no community layer |
| **Keepa** | Price history | One feature of Sift; doesn't help with trust |
| **FakeSpot by Amazon** | Amazon's in-house "AI" review analysis | Conflict of interest — Amazon analyzing its own reviews. Useless. |
| **Google "About this result"** | Source info on search | Doesn't help with product pages |
| **Reddit Manual Research** | The actual current solution | Works but takes 40+ minutes per purchase |

Sift's wedge: **AI-generated content detection + spec verification + real alternatives**, all in one overlay. No existing competitor does all three.

---

## Risks & Mitigations

1. **Amazon bans the extension** — Mitigation: Mobile app + Firefox/Edge/Safari versions distribute the risk. Mozilla acquired Fakespot in 2023; Amazon tolerated it.
2. **AI-generated review quality gets indistinguishable from human** — Mitigation: Sift's value shifts toward spec verification, seller reputation, and community signals. The trust problem outlives any single detection technique.
3. **Google's AI Overviews improve and absorb the trust layer** — Mitigation: Google is structurally conflicted (ad revenue from the same listings). Their incentives prevent honest trust scoring.
4. **Lawsuits from sellers** — Mitigation: Sift only publishes verifiable signals (return rates, spec mismatches, review-cluster patterns) and clearly labeled algorithmic scores. Opinions are protected speech; factual claims must be auditable.

---

## Launch Plan

### Pre-Launch (Weeks 1–6)
- Build Chrome extension MVP (Sift Score + "show me the real version" + price history)
- Seed the community Trust Feed with 500 hand-curated products from r/BuyItForLife archives
- Reach out to 12 Reddit mods in r/BuyItForLife, r/Frugal, r/SomebodyMakeThis, r/technology for soft pre-launch buzz

### Launch (Week 7)
- **Primary channel:** Reddit — organic posts in r/SomebodyMakeThis ("somebody made this — it's called Sift"), r/Frugal ("I built a free tool to detect fake Amazon reviews"), r/technology
- **Product Hunt launch** — position as "Fakespot for the AI era"
- **Hacker News** — "Show HN: I built an AI-slop detector for Amazon"
- **YouTube influencer outreach** — Project Farm, Hip2Save, Linus Tech Tips (Quickies), Marques Brownlee's production team

### Post-Launch (Weeks 8+)
- Firefox + Safari ports
- Mobile companion app (share-sheet)
- Community-driven Trust Feed seeding
- Press outreach to Wirecutter, The Verge, 404 Media (they've covered Amazon AI slop multiple times in 2026)

---

## Why Now

- **June 2026 German court ruling** — Google is now legally liable for false AI Overview claims. Trust in AI summaries is at an all-time low. Users are actively looking for alternatives.
- **Amazon AI listing scandal** — r/technology top thread in June 2026. Mainstream press picked it up.
- **Reddit search poisoning research** — Published June 2026. The "just search Reddit" fallback is degrading, opening space for a dedicated trust tool.
- **Subscription fatigue peak** — Users are rejecting $5/month tools. A $39 lifetime license is a breath of fresh air and aligned with 2026 consumer sentiment.
- **Fakespot stagnation** — Mozilla acquisition slowed development. The product has not kept up with AI-generated reviews. Sift enters a market with a complacent incumbent.

---

## One-Line Pitch

> **Sift is the BS detector for online shopping. It scores every product page for AI-slop, flags hallucinated specs, and points you to genuinely human-verified alternatives — $39 once, no subscription, ever.**

---

## Prototype

See `prototype.html` for a clickable mockup of the Sift browser extension overlay on a fake Amazon product page.
