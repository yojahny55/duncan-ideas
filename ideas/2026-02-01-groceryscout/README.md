# GroceryScout 🛒

> Like GasBuddy, but for groceries. Crowdsourced price tracking to help families save money on everyday essentials.

## Problem Statement

With inflation hitting grocery prices hard, consumers are frustrated:

- **Egg prices skyrocketed** from $2 to $8+ in some areas
- No easy way to compare prices across stores
- Price differences of 30-50% for identical items
- Families waste time driving between stores to find deals
- Existing apps focus on coupons, not actual price tracking

**Source:** [Reddit r/SomebodyMakeThis - "Something like GasBuddy, but for tracking prices of specific groceries in the area (e.g. eggs)"](https://www.reddit.com/r/SomebodyMakeThis/comments/1hm4j2m/comment/m47uehb/)

## Target Users

1. **Budget-conscious families** — Need to stretch every dollar
2. **Price-savvy shoppers** — Willing to shop multiple stores for best deals
3. **Frugal enthusiasts** — r/Frugal, extreme couponing communities
4. **Small business owners** — Restaurants, cafes tracking ingredient costs
5. **Gig shoppers** — Instacart/Shipt workers who know prices well

## Proposed Solution

**GroceryScout** — A mobile-first web app where users report and check grocery prices in real-time.

### Core Concept
- Users scan barcodes or search products
- Report prices they see at stores
- Community validates and updates prices
- App shows cheapest options nearby

## Key Features

### 1. **Quick Price Entry** 📸
- Barcode scanner for fast product lookup
- Voice input: "Eggs at Walmart are $3.49"
- Recent items for quick re-reporting

### 2. **Smart Price Comparison** 💰
- See all stores with product prices on map
- "Lowest in area" badge
- Price history graphs
- "Alert me when under $X"

### 3. **Shopping List Optimizer** 🗒️
- Build your shopping list
- App calculates cheapest store combination
- "One-stop" vs "Multi-stop" comparison
- Factors in gas/distance

### 4. **Gamification & Trust** 🏆
- XP for reporting prices
- Accuracy ratings (validated by others)
- "Scout Rank" leaderboards
- Badges: "Egg Expert", "Dairy Detective"

### 5. **Community Features** 👥
- Comment on deals
- Flag incorrect prices
- Store reviews
- Share lists with family

### 6. **Price Alerts** 🔔
- "Eggs under $4" notifications
- Weekly price drop digest
- Flash sale alerts from community

### 7. **Receipt Scanning** (v2)
- Upload receipts to bulk-report prices
- OCR extracts items and prices automatically
- Earn bonus XP for verified receipts

## Technical Stack

### Frontend
- **React** with TypeScript
- **PWA** — Offline-capable, installable
- **TailwindCSS** — Rapid styling
- **react-webcam** — Barcode scanning
- **Recharts** — Price history graphs

### Backend
- **Node.js / Express** — API server
- **PostgreSQL** — Relational data (products, prices, stores)
- **Redis** — Caching hot data, rate limiting
- **Supabase** — Auth, real-time subscriptions

### Infrastructure
- **Vercel** — Frontend hosting
- **Railway/Render** — Backend
- **Cloudflare** — CDN, DDoS protection
- **S3** — Receipt image storage

### Key APIs
- **Open Food Facts** — Product database
- **Google Maps** — Store locations, distances
- **Twilio** — SMS alerts (optional)

## Monetization Strategy

### Freemium Model

**Free Tier:**
- Basic price checking
- Report prices
- Simple shopping list

**Pro ($4.99/month):**
- Unlimited price alerts
- Shopping list optimizer
- Ad-free experience
- Receipt scanning

### Additional Revenue

1. **Affiliate partnerships** — Link to Instacart/store apps
2. **Sponsored placements** — Stores pay for visibility
3. **Data licensing** — Anonymized price data for CPG companies
4. **Local ads** — Grocery stores promote deals

## Competition Analysis

| App | Weakness | Our Advantage |
|-----|----------|---------------|
| **Flipp** | Focuses on flyers, not real prices | Real-time crowdsourced data |
| **Basket** | Limited user adoption | Gamification drives engagement |
| **Checkout 51** | Cashback-focused, not price comparison | Pure price tracking focus |
| **GasBuddy** | Only gas, no groceries | Proven model applied to groceries |
| **Instacart** | Shows one store at a time | Cross-store comparison |

## Why This Will Work

### ✅ Proven Model
GasBuddy has 100M+ downloads proving crowdsourced price tracking works when incentives align.

### ✅ Perfect Timing
- Inflation at 40-year highs
- Egg prices making headlines
- "Shrinkflation" awareness growing
- Consumers actively seeking savings

### ✅ Network Effects
More users → more accurate prices → more users. First-mover advantage is critical.

### ✅ Low Barrier to Entry
- PWA means no app store approval delays
- MVP can launch in 2-3 months
- Start with one city, expand organically

### ✅ Passionate Community
r/Frugal (2.4M members), extreme couponers, and deal hunters will drive early adoption.

## MVP Roadmap

### Phase 1 (Week 1-4): Core Features
- [ ] Product search & database
- [ ] Price entry form
- [ ] Map view of stores with prices
- [ ] User auth & profiles

### Phase 2 (Week 5-8): Engagement
- [ ] Gamification (XP, badges)
- [ ] Shopping list
- [ ] Price history charts
- [ ] Basic alerts

### Phase 3 (Week 9-12): Growth
- [ ] Receipt scanning
- [ ] Social features
- [ ] Pro tier
- [ ] Mobile app (React Native)

## Prototype

See the working prototype in [`/prototype`](./prototype/index.html) demonstrating:
- Product search
- Price reporting interface
- Map with store prices
- Shopping list with optimization
- Gamification UI (XP, badges)

---

*Researched by Duncan ⚔️ on 2026-02-01*
*Source: Reddit r/SomebodyMakeThis*
