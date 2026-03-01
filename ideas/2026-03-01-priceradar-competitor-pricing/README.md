# PriceRadar ⚡

**Real-time competitor pricing alerts for small ecommerce sellers**

> "Enterprise pricing intelligence tools cost $500+/month. Solo Etsy/Shopify sellers just need alerts when competitors drop their prices."

## The Problem

Small ecommerce sellers (Etsy, Shopify, Amazon, eBay) manually check competitor prices daily. This is:

- **Time-consuming**: 11+ Reddit threads describe daily manual checks across multiple competitor listings
- **Error-prone**: Easy to miss price changes, especially flash sales
- **Stressful**: Fear of being undercut without knowing
- **Unprofessional**: Enterprise sellers have automated tools; small sellers don't

Current solutions are **too expensive** ($500+/month enterprise tools) or **too manual** (spreadsheets, browser tabs).

## The Solution

**PriceRadar** — Set it and forget it competitor monitoring.

1. **Add competitors**: Paste URLs to competitor product listings
2. **Set thresholds**: Get alerted when prices drop below X% or specific amount
3. **Get alerts**: Email, SMS, or push notifications instantly
4. **Track history**: See price trends over time to make smarter decisions

## Target Users

- **Solo Etsy sellers** (2.5M+ active sellers)
- **Small Shopify stores** (4M+ stores globally)
- **Amazon FBA small sellers**
- **eBay power sellers**
- **Handmade/craft sellers**
- **Dropshippers**

## Key Features

### MVP (v1)
- [ ] Add competitor product URLs (Etsy, Shopify, Amazon, eBay)
- [ ] Set price alert thresholds (% drop or absolute price)
- [ ] Email notifications on price changes
- [ ] Simple dashboard showing all tracked products
- [ ] 24-hour price check frequency

### v2
- [ ] SMS alerts
- [ ] Hourly price checks
- [ ] Price history charts
- [ ] Bulk import competitors
- [ ] Browser extension for easy add

### v3
- [ ] AI-powered competitor discovery
- [ ] Price prediction / trend analysis
- [ ] Recommended pricing based on market
- [ ] Multi-store management
- [ ] API for integrations

## Tech Stack (Proposed)

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js/Express or Python/FastAPI
- **Database**: PostgreSQL
- **Job queue**: Bull/Redis for scheduled price checks
- **Scraping**: Playwright/Puppeteer for dynamic sites
- **Notifications**: SendGrid (email), Twilio (SMS)

## Pricing Model

| Tier | Price | Products Tracked | Check Frequency |
|------|-------|------------------|-----------------|
| Free | $0 | 5 products | Daily |
| Starter | $9/mo | 25 products | Every 6 hours |
| Pro | $29/mo | 100 products | Hourly |
| Business | $79/mo | Unlimited | 15 minutes |

## Market Validation

- **11 Reddit threads** describing this exact pain point (manual daily checks)
- **Enterprise tools exist** at $500+/mo (Prisync, Competera, Intelligence Node) — proves the need
- **Gap**: "Too small for enterprise tools, too complex for a spreadsheet"
- **Large TAM**: 10M+ small ecommerce sellers globally

## Competitive Landscape

| Tool | Target | Price | Gap |
|------|--------|-------|-----|
| Prisync | Enterprise | $500+/mo | Too expensive |
| Competera | Enterprise | Custom | Too complex |
| Price2Spy | Mid-market | $100+/mo | Still pricey |
| Keepa | Amazon only | Free/cheap | Amazon-only |
| **PriceRadar** | Solo sellers | $9-29/mo | ✅ Affordable + multi-platform |

## Why This Wins

1. **Price point**: 10-20x cheaper than alternatives
2. **Simplicity**: No enterprise features, just alerts
3. **Multi-platform**: Works across Etsy, Shopify, Amazon, eBay
4. **Speed to value**: Paste URL → get alerts in minutes
5. **Clear ROI**: One price adjustment = pays for months of service

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Scraping gets blocked | Use rotating proxies, respect rate limits |
| Platform TOS issues | Scrape public data only, no login required |
| Competition enters | Move fast, build community, add features |
| Churn | Prove ROI with savings reports |

## Source

Reddit r/AppIdeas — "I scraped 749+ problems from Reddit and HN" thread
- Multiple threads describing manual daily price checks
- Clear enterprise/consumer gap in the market

---

*Documented by Duncan ⚔️ | March 1, 2026*
