# TariffTag — Consumer Tariff Impact Scanner

**Date:** 2026-03-30
**Source:** Web (Yale Budget Lab, Tax Foundation, Federal Reserve, Reddit r/BuyCanadian, CBS News Price Tracker)
**Category:** Consumer Finance / Shopping Intelligence

---

## Problem Statement

Tariffs are adding $400-1,500+ per household annually in 2026, but consumers have zero visibility into which products they buy are affected and by how much. The tariff landscape is a maze: Section 232 steel/aluminum tariffs, Section 122 universal tariffs, China-specific rates, and constantly shifting exemptions. Existing tariff calculators (Flexport, customs tools) are built for importers and businesses — nobody has built a consumer-facing tool.

**The result:** People feel prices rising but can't tell whether a $25 increase on their favorite pan is due to tariffs, inflation, or corporate greed. They can't make informed buying decisions or find tariff-free alternatives.

### Key Statistics
- **$400-1,500/yr** additional cost per US household from tariffs (Tax Foundation, 2026)
- **5.6%** expected price increase on non-durable goods in H1 2026 (UBS)
- **195+ countries** affected by varying tariff rates
- **0 consumer tools** exist to scan products and show tariff impact
- Tariff rates change constantly — Section 122 expires ~July 2026, steel/aluminum increases June 4
- Country-of-origin barcode apps exist but are unreliable and don't connect to tariff data

## Target Users

1. **Cost-conscious shoppers** — want to understand why prices are rising and find alternatives
2. **Buy-American/Buy-Local advocates** — want to avoid imported goods affected by tariffs
3. **Small business owners** — need quick tariff impact checks on products they sell
4. **Parents/families** — budget-squeezed, looking for ways to save on everyday purchases
5. **Politically engaged consumers** — want data to understand trade policy impact on their wallet

## Proposed Solution

**TariffTag** — scan any product barcode, see the estimated tariff markup, country of origin, tariff rate, and find tariff-free or lower-tariff alternatives. Think "Yuka for tariffs."

### How It Works
1. **Scan** — Barcode scanner identifies the product
2. **Analyze** — Cross-reference product category (HTS code mapping) with current tariff schedules
3. **Show Impact** — Display estimated tariff cost baked into the price, country of origin, tariff tier
4. **Find Alternatives** — Suggest similar products from tariff-free countries or domestic manufacturers
5. **Track** — Show your monthly "tariff tax" across all scanned purchases

## Key Features

### MVP (Phase 1)
- **Barcode Scanner** — camera-based scan or manual UPC entry
- **Tariff Impact Card** — product name, country of origin, applicable tariff rate, estimated tariff cost
- **Tariff Grade** — A (no tariff) to F (heavily tariffed) letter grade
- **Alternative Finder** — suggest same-category products from lower-tariff origins
- **Category Browser** — browse tariff impact by product category (electronics, clothing, food, etc.)
- **Monthly Tariff Tax** — running total of how much tariffs cost you

### Phase 2
- **Shopping List Mode** — scan your whole grocery cart, see total tariff impact
- **Price History** — track if a product's price increased after tariff implementation
- **Tariff Alerts** — notify when tariff rates change on products you've scanned
- **Tariff-Free Swap Lists** — curated lists of American-made alternatives by category
- **Share Cards** — shareable social graphics showing your tariff burden

### Phase 3
- **Browser Extension** — show tariff info on Amazon, Walmart, Target product pages
- **Receipt Scanner** — scan receipts, auto-calculate tariff impact on entire purchases
- **Community Reports** — crowdsourced price tracking tied to tariff changes
- **Congressional Impact** — see how your representative voted on trade bills

## Technical Architecture

```
┌─────────────────────────────────────────┐
│                Frontend                  │
│  React Native (iOS + Android) + Web     │
│  Camera barcode scanning (ZXing/Vision) │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│              API Layer                   │
│  Node.js / Express                       │
│  - Barcode → Product lookup (OpenFoodFacts, UPCitemdb) │
│  - Product → HTS code mapping            │
│  - HTS code → Current tariff rate        │
│  - Alternative product suggestions       │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│            Data Sources                  │
│  - USITC Tariff Database (public)        │
│  - Open Food Facts (product data)        │
│  - UPC Item DB (barcode lookup)          │
│  - Country prefix from GS1 barcode       │
│  - Federal Register (tariff updates)     │
└──────────────────────────────────────────┘
```

## Market Research

### Existing Solutions (None Consumer-Facing)
| Tool | Target | Price | Gap |
|------|--------|-------|-----|
| Flexport Tariff Simulator | Importers/businesses | Free | HTS code required, no barcode scan, no alternatives |
| Duty Calculator | Cross-border shoppers | Free | Import duty only, not shelf-price impact |
| "Made In" barcode app | Consumers | Free | Unreliable country data, no tariff connection |
| CBS Price Tracker | General public | Free | Category-level only, can't scan specific products |
| Yale Budget Lab Tracker | Researchers | Free | Macro data, no per-product granularity |

### Differentiation
- **First consumer barcode-to-tariff tool** — nobody connects UPC scans to tariff schedules
- **Actionable** — doesn't just show the problem, suggests alternatives
- **Timely** — tariff landscape is actively changing (rates shifting June/July 2026)
- **Non-partisan** — shows data, not opinions. Let users decide how to act
- **Personal** — tracks YOUR tariff burden, not abstract national averages

### Market Size
- **131M** US households affected by tariffs
- **$400-1,500/yr** per household = $52B-197B total consumer tariff burden
- **73%** of Americans say they're concerned about rising prices (Gallup 2026)
- **Buy American** movement gaining momentum across political spectrum
- Shrinkflation/greedflation awareness at all-time high

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 10 scans/day, tariff grade, basic alternatives |
| Pro | $3.99/mo | Unlimited scans, shopping list mode, tariff alerts, history |
| Family | $6.99/mo | 5 members, shared shopping lists, combined tariff tax tracking |

**Additional revenue:**
- Affiliate links to American-made alternative products
- Anonymized aggregate data (which categories consumers are scanning most)
- White-label API for retailers who want tariff transparency on their sites

## Competitive Moat

1. **Data pipeline** — HTS code mapping from consumer barcodes is non-trivial; first to build this mapping wins
2. **Network effects** — crowdsourced price data and alternative suggestions improve with users
3. **Timing** — tariff rates are actively changing; tool becomes more valuable with each policy shift
4. **Trust** — non-partisan, data-driven approach builds credibility across political spectrum

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Tariffs reduced/removed | Pivot to general "hidden cost" scanner (carbon footprint, labor practices) |
| Barcode → HTS mapping accuracy | Start with top 1000 consumer products, expand via ML + crowdsourcing |
| Country of origin unreliable from barcodes | Multi-signal: barcode prefix + product database + community verification |
| Political backlash | Stay strictly data-driven, no editorial content, cite official sources |
| Product database coverage | Use multiple APIs (OpenFoodFacts + UPCitemdb + community submissions) |

## Why Now

- Tariffs are the #1 consumer price story of 2026
- Federal Reserve published research on tariff price pass-through (March 2026)
- Section 122 tariffs expire July 2026 — consumers need to understand the impact before/after
- Steel/aluminum tariffs increase June 4, 2026 — timing is perfect
- "Buy American" is bipartisan — both sides want to know what's made where
- No consumer tool exists despite massive media coverage of tariff impacts

---

*Researched and documented by Duncan ⚔️ — 2026-03-30*
