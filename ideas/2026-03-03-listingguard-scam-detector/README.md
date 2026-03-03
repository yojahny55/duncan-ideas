# ListingGuard 🛡️

> AI-powered rental listing scam detector — verify before you trust

## Problem Statement

Rental scams cost Americans over **$350 million annually**, with the average victim losing $1,000+. The problem has exploded as scammers:

- Steal photos from legitimate listings on Zillow/Trulia
- Create fresh Facebook/Craigslist accounts to post fake ads
- Price units 20-40% below market to attract desperate renters
- Demand deposits via Venmo/Zelle before showing the property
- Pose as "out of town landlords" who can't meet in person

**From Reddit (r/Rochester, Feb 2026):**
> "Facebook has gone nowhere as most of the listings are from faceless profiles showing their acct joined in 2026, and when i message them they send me a clear scam message."

People spend hours researching listings, only to realize too late they're being scammed. There's no quick way to verify legitimacy.

## Target Users

1. **First-time renters** — College students, young professionals new to apartment hunting
2. **Relocating workers** — Can't visit in person, vulnerable to remote scams
3. **Budget-conscious renters** — Tempted by too-good-to-be-true prices
4. **International renters** — Unfamiliar with local market rates and scam patterns
5. **Parents** — Helping kids find housing from afar

## Proposed Solution

**ListingGuard** — Paste a listing URL or upload screenshots, get an instant trust score with detailed analysis.

### How It Works

1. **Submit listing** — URL from Facebook/Craigslist/Zillow or upload screenshots
2. **AI analysis** — Multi-factor scam detection in seconds
3. **Trust score** — 0-100 rating with clear explanation
4. **Red flags** — Specific warnings with evidence
5. **Recommendations** — Next steps to verify or avoid

### Detection Signals

| Signal | What We Check | Red Flag |
|--------|---------------|----------|
| **Price Analysis** | Compare to local market data | 20%+ below median |
| **Image Verification** | Reverse image search | Photos from other listings |
| **Language Patterns** | NLP for scam phrases | "Wire deposit", "keys mailed" |
| **Account Age** | When profile was created | Created in last 30 days |
| **Contact Methods** | Payment requests | Zelle/Venmo/Cash only |
| **Property Records** | Cross-reference ownership | Doesn't match listed landlord |
| **Listing Consistency** | Multiple platforms check | Same photos, different addresses |

## Key Features

### 🔍 Instant Analysis
Paste any listing URL and get results in under 10 seconds. No signup required for basic checks.

### 📊 Trust Score Dashboard
Clear 0-100 score with color-coded risk level:
- **80-100**: Low risk (green) — Looks legitimate
- **50-79**: Caution (yellow) — Some concerns, verify manually
- **0-49**: High risk (red) — Likely scam, avoid

### 🚩 Red Flag Breakdown
Each warning explains:
- What was detected
- Why it's concerning
- How common this is in scams
- What to do next

### 📸 Reverse Image Search
Automatically checks if listing photos appear elsewhere:
- Other rental sites at different addresses
- Real estate sales listings
- Stock photo databases

### 💰 Price Intelligence
Compares listing to:
- Neighborhood median rent
- Similar unit types
- Recent price changes
- Seasonal trends

### 📝 Scam Report Database
Community-powered database of:
- Known scammer phone numbers
- Flagged addresses
- Reported fake listings
- Scam phrase patterns

### 🔔 Listing Watch
For verified-safe listings:
- Get alerts if listing changes
- Track price drops
- Know if it gets rented

## Revenue Model

### Freemium
- **Free**: 5 checks/month, basic analysis
- **Pro ($4.99/mo)**: Unlimited checks, deep analysis, listing watch
- **Realtors ($19.99/mo)**: API access, bulk checking, client reports

### B2B
- **Property management companies** — Verify competitor listings
- **Rental platforms** — API integration for scam prevention
- **Insurance companies** — Fraud prevention tools

## Technical Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    ListingGuard                         │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   Frontend  │  │  Analysis   │  │   Data      │     │
│  │   (React)   │  │   Engine    │  │   Layer     │     │
│  │             │  │             │  │             │     │
│  │ • URL Input │  │ • NLP Model │  │ • Rent DB   │     │
│  │ • Dashboard │  │ • Image Rev │  │ • Scam DB   │     │
│  │ • Reports   │  │ • Price API │  │ • Property  │     │
│  │ • Alerts    │  │ • Scraping  │  │   Records   │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────────────────────┘
```

## Competitive Landscape

| Solution | Approach | Limitation |
|----------|----------|------------|
| Google reverse image | Manual image search | No rental context |
| Scam hotlines | Report after the fact | Reactive, not preventive |
| Platform moderation | Zillow/Apartments.com | Facebook/Craigslist unmoderated |
| Common sense | "If too good to be true..." | Scammers getting sophisticated |

**ListingGuard advantage:** Proactive, automated, rental-specific, multi-signal analysis

## Success Metrics

- **Scams caught**: % of high-risk listings confirmed as scams
- **False positive rate**: Legitimate listings flagged (keep <5%)
- **User saves**: Money saved by avoiding scams
- **Time saved**: Compared to manual verification
- **Conversion**: Free → Pro upgrade rate

## MVP Roadmap

### Phase 1 (Week 1-2)
- [ ] URL/screenshot input
- [ ] Basic price analysis (Zillow API)
- [ ] Language pattern detection
- [ ] Trust score display

### Phase 2 (Week 3-4)
- [ ] Reverse image search integration
- [ ] Scam report database
- [ ] Browser extension (Chrome)
- [ ] Account age checking (Facebook)

### Phase 3 (Month 2)
- [ ] Property records lookup
- [ ] Listing watch alerts
- [ ] Pro tier launch
- [ ] Mobile app

## Why Now

1. **Scam sophistication rising** — AI-generated fake listings emerging
2. **Housing crisis** — Desperate renters more vulnerable
3. **Platform fragmentation** — More places to list = more places to scam
4. **Remote work** — More people relocating without visiting
5. **AI enablement** — LLMs make analysis affordable at scale

## Source

- Reddit r/Rochester (Feb 2026) — Complaints about Facebook rental scams
- Reddit r/ApartmentHacks — People using spreadsheets to track listings
- FTC reports — $350M+ in rental scam losses annually
- BBB data — Average victim loses $1,000+

---

*Researched and documented by Duncan ⚔️ — March 3, 2026*
