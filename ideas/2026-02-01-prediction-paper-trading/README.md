# PredictPaper — Paper Trading for Prediction Markets

> Practice trading prediction markets without risking real money. Learn the game before you play for keeps.

## 📍 Source

**Twitter/X Discovery:**
- [@Growwithweb3](https://x.com/Growwithweb3/status/2017826760487031111) - February 1, 2026
  > "is there any testnet of polymarket? if no someone should build this to contribute as a developer in polymarket so that newbie can take trade understand the market without loosing money"

## 🎯 Problem Statement

Prediction markets like Polymarket, Kalshi, and Manifold are gaining mainstream adoption. However:

1. **High barrier to entry** — New users risk real money while learning market mechanics
2. **Complex UX** — Understanding shares, probabilities, and liquidations takes practice
3. **No safe sandbox** — Unlike stock trading (with paper trading), prediction markets have no practice mode
4. **Fear of loss** — Many potential users avoid the space entirely due to risk aversion
5. **Crypto complexity** — Polymarket requires USDC on Polygon, adding friction for beginners

## 👥 Target Users

| Segment | Size | Pain Point |
|---------|------|------------|
| **Prediction Market Curious** | Millions | Want to try but scared of losing money |
| **Stock Traders** | 50M+ in US alone | Familiar with paper trading, expect it everywhere |
| **Students/Researchers** | Large | Study decision markets without real stakes |
| **Content Creators** | Growing | Need to demonstrate strategies without financial risk |
| **International Users** | Huge | Often blocked from real-money prediction markets |

## 💡 Proposed Solution

**PredictPaper** — A web app that mirrors real prediction markets with virtual currency:

- Sync real-time odds from Polymarket/Kalshi/Manifold
- Start with $10,000 virtual balance
- Trade exactly like the real platforms
- Track performance with detailed analytics
- Compete on leaderboards
- Graduate to real trading when ready

## ✨ Key Features

1. **Real Market Sync** — Pull live questions and odds from actual prediction markets via APIs
2. **Virtual Portfolio** — $10K starting balance, realistic fees, no real money
3. **One-Click Trading** — Buy YES/NO shares with intuitive UI
4. **Position Tracking** — See P&L, entry prices, and current value
5. **Market Resolution** — Automatic settlement when real markets resolve
6. **Performance Analytics** — Win rate, ROI, Brier score, calibration charts
7. **Leaderboards** — Compete globally, weekly resets
8. **Learning Mode** — Tooltips and guides explaining prediction market mechanics
9. **Strategy Backtesting** — "What if I had bought YES at 30%?"
10. **Export to Real Trading** — Generate a "report card" to show you're ready

## 🛠 Technical Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Frontend** | Next.js 14 + TypeScript | Fast, SEO, app-like feel |
| **Styling** | Tailwind CSS + shadcn/ui | Polished, accessible, fast dev |
| **State** | Zustand | Lightweight, perfect for portfolio state |
| **Backend** | Next.js API Routes + Edge Functions | Serverless, low latency |
| **Database** | Supabase (PostgreSQL) | Auth, realtime, free tier generous |
| **Market Data** | Polymarket API, Kalshi API | Real-time odds sync |
| **Caching** | Redis (Upstash) | Rate limit API calls, cache odds |
| **Auth** | Supabase Auth (magic link) | Frictionless onboarding |
| **Hosting** | Vercel | Perfect Next.js pairing |
| **Analytics** | PostHog | Privacy-friendly, funnels |

## 💰 Monetization Strategy

| Strategy | Revenue Model | Potential |
|----------|---------------|-----------|
| **Freemium** | Free tier + Premium ($5/mo) for analytics, unlimited markets | ⭐⭐⭐⭐ |
| **Affiliate** | Referral links to Polymarket/Kalshi when users "graduate" | ⭐⭐⭐⭐⭐ |
| **Education** | Premium courses on prediction market strategy | ⭐⭐⭐ |
| **B2B** | White-label for trading education platforms | ⭐⭐⭐⭐ |
| **Ads** | Non-intrusive, relevant (trading platforms, fintech) | ⭐⭐ |

**Primary model:** Affiliate + Freemium
- Users who get good at paper trading WILL graduate to real money
- Prediction markets pay significant referral bonuses ($20-50 per user)
- Premium analytics for serious users who want edge

## 🔍 Competition Analysis

| Competitor | What They Do | Gap PredictPaper Fills |
|------------|--------------|------------------------|
| **Polymarket** | Real-money prediction market | No paper trading mode |
| **Kalshi** | US-regulated prediction market | No practice mode |
| **Manifold** | Play money but own ecosystem | Not synced to real markets |
| **Stock Paper Trading** (Webull, etc.) | Virtual stock trading | No prediction market support |
| **Metaculus** | Forecasting community | Not trading-focused |

**Key Differentiation:**
- PredictPaper is the ONLY platform that lets you practice trading on REAL prediction markets
- Manifold is close but uses its own markets (different from Polymarket/Kalshi)
- We sync actual odds = skills transfer directly to real trading

## 🚀 Why This Will Work

### 1. **Proven Model**
Paper trading works for stocks (every broker offers it). Prediction markets are next.

### 2. **Growing Market**
- Polymarket did $4B+ volume in 2024
- Kalshi expanding rapidly
- Prediction markets going mainstream

### 3. **Clear User Journey**
Curious → Paper Trade → Get Good → Graduate to Real Money → We earn affiliate

### 4. **Low CAC**
- SEO: "polymarket paper trading" "prediction market simulator"
- Viral: Leaderboards, shareable results
- Community: Reddit, Twitter/X, Discord

### 5. **Technical Moat**
- Real-time API integrations are non-trivial
- Accurate P&L tracking requires market knowledge
- Network effects from leaderboards

### 6. **Timing**
- 2024-2026: Prediction markets exploding
- Post-election boom in interest
- Crypto onboarding still painful = paper trading more attractive

## 📁 Prototype

See `./prototype/` for a working HTML/CSS/JS demo showing the core trading experience.

## 📊 Success Metrics

| Metric | Target (Month 1) | Target (Month 6) |
|--------|------------------|------------------|
| MAU | 1,000 | 25,000 |
| Avg Session | 5 min | 10 min |
| Paper → Real Conversion | 5% | 15% |
| Premium Conversion | 2% | 5% |
| NPS | 30 | 50 |

## 🗓 Roadmap

**Phase 1 (Week 1-2):** MVP
- Core trading UI
- Polymarket sync
- Basic portfolio

**Phase 2 (Week 3-4):** Growth
- Leaderboards
- Social sharing
- Email capture

**Phase 3 (Month 2):** Monetization
- Premium tier
- Affiliate integration
- Analytics dashboard

**Phase 4 (Month 3+):** Scale
- Mobile app
- More market sources
- API for developers

---

*Generated by Duncan 🤖 | Source: Twitter/X | Date: February 1, 2026*
