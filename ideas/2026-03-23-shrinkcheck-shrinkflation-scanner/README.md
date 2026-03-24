# ShrinkCheck — Shrinkflation Scanner 📏

**Date:** 2026-03-23
**Source:** Web (Reddit, BuzzFeed, GAO, Guardian)
**Status:** Concept + Prototype

---

## Problem Statement

Products are shrinking while prices stay the same or increase — and consumers have no tool to detect it. Orange juice went from 64oz to 52oz. Cereal boxes lost 2-3oz. Easter eggs are smaller. The GAO has published reports confirming it's widespread. BuzzFeed documented 63+ products. Reddit's r/shrinkflation has tens of thousands of members.

**The frustration is real:** Multiple Reddit threads ask "is there a tool that tracks shrinkflation?" — and the answer is still no. Consumers are blind to stealth price increases.

**Scale of the problem:**
- Tariffs in 2026 are adding $600-1,500/year per household — companies respond with shrinkflation instead of visible price increases
- 63+ products documented shrinking in Feb 2026 alone (BuzzFeed)
- GAO analyzed scanner data across 7 high-spending categories
- r/shrinkflation subreddit exists specifically because people are frustrated
- France already requires shrinkflation labeling by law — the US has no equivalent

## Target Users

1. **Budget-conscious shoppers** — people who want to know the true cost of what they're buying
2. **Frugal families** — households tracking every dollar, especially in the tariff economy
3. **Consumer advocates & journalists** — people who write about and expose shrinkflation
4. **Smart comparison shoppers** — anyone who wants unit price intelligence at their fingertips

## Proposed Solution

**ShrinkCheck** — scan any product barcode, instantly see if it's been shrinkflated. Get the full size history, true unit price, and community-verified reports.

### How It Works

1. **Scan** — Point camera at any barcode in the store
2. **Check** — See the product's size history (current vs historical)
3. **Compare** — Unit price comparison across sizes and brands
4. **Report** — Community-submitted shrinkflation sightings with photo proof
5. **Alert** — Get notified when products you buy regularly shrink

## Key Features

### Core
- 📸 **Barcode Scanner** — Instant product lookup via UPC/EAN
- 📉 **Size History Timeline** — Visual chart of product size changes over time
- 💰 **True Unit Price** — Price per oz/g/ml/count, the metric that matters
- 🔴 **Shrinkflation Alert Badge** — Clear visual indicator: "This product shrank 18% since 2024"
- 📊 **Shrink Score** — Letter grade (A-F) rating how much a brand shrinkflates

### Community
- 📝 **Crowdsourced Reports** — Users submit before/after photos and size data
- ✅ **Verification System** — Community upvotes/downvotes on reports, photo evidence required
- 🏆 **Leaderboard** — Top contributors who catch shrinkflation first
- 🔔 **Watch List** — Track your regular purchases, get alerts when they shrink

### Intelligence
- 🏷️ **Brand Report Card** — Which brands shrinkflate the most? Aggregated data per brand
- 🔄 **Better Alternatives** — "This brand shrunk 15%. Try [Brand X] — same price, original size"
- 📈 **Category Trends** — See which product categories are shrinking fastest
- 🧮 **Savings Calculator** — "Shrinkflation is costing you ~$X/month based on your watch list"

## Market Research

### Existing Solutions (and why they fail)
| Tool | Problem |
|------|---------|
| r/shrinkflation (Reddit) | Manual, unstructured, no search by product |
| BuzzFeed/news articles | One-off lists, not a tool |
| Unit price on shelf tags | Tiny font, inconsistent units, many stores don't show it |
| France's shrinkflation law | Government mandate, not a consumer tool; US has nothing |
| Open Food Facts | Has some data but no shrinkflation-specific tracking or UX |

### Why ShrinkCheck Wins
- **Consumer-first UX** — not a database, but a shopping companion
- **Barcode scanning** — instant in-store lookup, no typing
- **Community-powered** — crowdsourced data grows with users
- **Actionable** — doesn't just tell you it shrank, suggests alternatives
- **Timely** — tariff economy of 2026 makes this more relevant than ever

### Market Size
- 330M+ US consumers affected by shrinkflation
- $1,200-1,500/year in hidden costs per household from tariffs + shrinkflation
- 92% of consumers say they've noticed shrinkflation (Consumer Reports)
- France's law shows regulatory momentum — the US may follow

## Revenue Model

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 10 scans/day, basic size history, community reports |
| Pro | $3.99/mo | Unlimited scans, watch list alerts, brand report cards, savings calculator |
| Family | $6.99/mo | Up to 5 members, shared watch list, household savings tracking |

### Additional Revenue
- **Affiliate links** to better-value alternatives
- **Brand transparency badges** (B2B) — brands pay to show "No Shrinkflation" certification
- **Data licensing** to consumer advocacy organizations and journalists

## Tech Stack (Proposed)

- **Frontend:** React Native (iOS + Android) + PWA
- **Backend:** Node.js + PostgreSQL
- **Barcode API:** Open Food Facts + UPCitemdb
- **ML:** Image recognition for package size comparison
- **Infrastructure:** Vercel (PWA) + Railway (API)

## Competitive Advantage

1. **First mover** — No dedicated shrinkflation tracking app exists
2. **Network effects** — More users = more data = better coverage
3. **Emotional hook** — People are ANGRY about shrinkflation (built-in virality)
4. **Regulatory tailwind** — If US follows France's labeling law, ShrinkCheck becomes the de facto consumer tool
5. **Tariff timing** — 2026's economic pressure makes this painfully relevant

## Prototype

See `prototype/` for a working HTML/CSS/JS demo featuring:
- Product barcode scanner UI
- Size history timeline visualization
- Shrinkflation alert badges
- Community report feed
- Brand report cards
- Watch list with alerts

---

*Researched and documented by Duncan ⚔️ — 2026-03-23*
