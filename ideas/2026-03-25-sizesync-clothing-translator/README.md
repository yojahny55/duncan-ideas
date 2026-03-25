# SizeSync — Your Size, Every Brand

**Date:** 2026-03-25
**Source:** Reddit (r/femalefashionadvice, r/malefashionadvice, r/tall, r/petite, r/BuyItForLife — 40+ threads)
**Category:** Shopping / Fashion Tech

## Problem Statement

Online clothing returns are a **$743 billion problem** (NRF 2024). The #1 reason? **Sizing inconsistency across brands.** A Medium at Nike is not a Medium at Zara is not a Medium at Uniqlo. Vanity sizing makes it worse — a size 32 waist at Old Navy measures 35 inches, while Levi's is closer to 33.

Reddit is full of frustration:
- "I'm a S at H&M, M at Zara, L at Uniqlo — how is this acceptable?"
- "Ordered 3 sizes of the same shirt just to return 2"
- "I've measured myself but the size charts are lies"
- "Every brand has a different idea of what 'medium' means"

**The real cost:** Consumers waste time, shipping costs, and mental energy. Retailers eat $101 billion/year in returns. The planet suffers from return logistics emissions.

## Target Users

- **Primary:** Online shoppers frustrated by sizing roulette (70%+ of adults shop online for clothes)
- **Secondary:** People between sizes, non-standard body types, cross-border shoppers (US vs EU vs UK sizing)
- **Tertiary:** Fashion-forward people trying new brands they haven't worn before

## Proposed Solution

**SizeSync** translates your body measurements into the exact right size at any brand. Not a generic size chart — a personalized **sizing translator** that learns from your purchase history and community data.

### How It Works

1. **One-time body scan** — Use your phone camera for a guided measurement session (or enter measurements manually). We capture: chest, waist, hips, inseam, shoulders, arm length
2. **Brand intelligence** — Crowdsourced database of actual garment measurements (not marketing size charts). Users report "I'm 5'10", 170lb, this M fits perfectly" or "runs small"
3. **Size translation** — "You're a M at Nike → S at Zara → L at Uniqlo → 40 at Hugo Boss"
4. **Fit preference** — Slim fit? Relaxed? Oversized? SizeSync adjusts recommendations based on how YOU like clothes to fit
5. **Purchase verification** — After buying, rate the fit → improves recommendations for you AND everyone with similar measurements

## Key Features

### 🔄 Size Translator
- Enter any brand you know fits → get your size at 500+ brands
- Works for tops, bottoms, shoes, outerwear
- Handles US/EU/UK/Asian sizing conversions

### 📏 Smart Body Profile
- Guided phone-camera measurement (AR-assisted)
- Manual measurement entry option
- Multiple profiles (weight fluctuation, pregnancy, etc.)

### 📊 Brand Fit Intelligence
- Crowdsourced actual measurements per brand/item
- "Runs small/true/large" community consensus
- Historical fit data (brands that changed sizing over time)

### 🛒 Shopping Integration
- Browser extension: shows your size on product pages (ASOS, Nordstrom, etc.)
- "Will this fit me?" widget
- Return probability score ("87% of people your size kept this item")

### 🏷️ Fit History
- Log what you own and how it fits
- "I love how this Nike Dri-FIT M fits" → find similar fits at other brands
- Wardrobe-based recommendations

### 👥 Body Twins
- Match with people who have similar measurements
- "People your size love these brands"
- Anonymous — only measurements shared, never photos

## Technical Architecture

```
Frontend: React / React Native (mobile-first)
Backend: Node.js + PostgreSQL
ML: Collaborative filtering for size predictions
Data: Crowdsourced measurements + scraped size charts
Browser Extension: Chrome/Firefox for inline size suggestions
```

## Market Analysis

### Existing Solutions & Why They Fall Short

| Solution | Problem |
|----------|---------|
| Brand size charts | Often inaccurate, don't account for fit style |
| True Fit (embedded in retailers) | Black box, inconsistent, many users say it's wrong |
| MySizeID / 3DLOOK | Body scanning tech — requires standing in underwear, creepy factor |
| Amazon "Try Before You Buy" | Doesn't solve the problem, just shifts cost |
| Size guides on blogs | Generic, not personalized |

### SizeSync Differentiation
- **Crowdsourced real data** — not marketing-approved size charts
- **Cross-brand translation** — the core feature nobody does well
- **Fit preference awareness** — same body, different style preferences
- **Privacy-first** — no photos stored, measurements only
- **Browser extension** — meets you WHERE you shop

## Revenue Model

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 5 brand lookups/month, basic profile |
| Plus | $4/mo | Unlimited lookups, browser extension, fit history |
| Pro | $8/mo | Body twins, return probability, wardrobe analytics |

### B2B Opportunity
- Retailers pay for embedded widget ($0.10/lookup) — reduces their returns
- Affiliate revenue on "better fit" recommendations
- Anonymous aggregate data licensing to brands

## Validation

- **$743B** in online clothing returns annually (NRF)
- **70%** of returns are size/fit related (Coresight Research)
- **40+ Reddit threads** with hundreds of upvotes complaining about sizing inconsistency
- True Fit (closest competitor) raised $100M+ but is B2B-only and universally disliked by consumers
- Every "what app do you wish existed" thread has sizing/fit mentioned

## Competitive Moat

1. **Network effects** — More users = better size data = better predictions = more users
2. **Data flywheel** — Every purchase verification improves the model
3. **Cross-brand knowledge** — No single retailer has incentive to build this
4. **Browser extension lock-in** — Becomes part of your shopping workflow

## MVP Scope (4-6 weeks)

1. Manual measurement input
2. Size translation for top 50 brands (manually researched)
3. Community "runs small/true/large" voting
4. Basic web app with brand search
5. Fit logging after purchase

---

*"Stop buying 3 sizes and returning 2. Know your size before you click."*
