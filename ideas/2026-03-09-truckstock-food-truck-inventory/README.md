# TruckStock 🚚

**Simple inventory tracker for food trucks & pop-up restaurants**

## The Problem

Food truck operators are stuck between enterprise restaurant inventory tools ($300-500/mo) that assume fixed kitchens, and manual spreadsheets that can't keep up mid-service.

Reddit pain points (6+ threads in r/foodtrucks, r/restaurantowners):
- "Restaurant inventory tools assume you have a fixed kitchen with consistent storage. Food trucks work completely differently"
- "I use Square but inventory tracking is too basic for rotating menus"
- "We're using a clipboard and prayer during busy events"
- "Weather changes everything — sunny festivals we sell 3x more"
- Limited truck space means you can't just "stock more"
- Daily specials and rotating menus make tracking chaotic

**The gap:** Too small for enterprise tools, too complex for spreadsheets, and mobile inventory UX is universally terrible.

## The Solution

TruckStock is an inventory tracker designed specifically for food truck operations:

- **Mobile-first** — built for one-handed use during service
- **Space-aware** — knows your truck has limits
- **Event-based** — prep for a farmers market vs a festival
- **Weather-integrated** — suggest prep amounts based on conditions
- **Real-time alerts** — know you're running low before you sell out
- **Rotating menu support** — toggle menu items on/off per event

## Target Users

1. **Solo food truck operators** — running everything themselves
2. **Small food truck teams** — 2-5 person operations
3. **Pop-up restaurant owners** — temporary kitchens with changing locations
4. **Catering operations** — event-based food service
5. **Farmers market vendors** — food vendors at rotating markets

## Key Features

### Core Inventory
- **Quick Count Mode** — tap +/- to adjust quantities fast
- **Low Stock Alerts** — push notifications when items hit threshold
- **Space Tracker** — visual representation of truck capacity used
- **Par Levels** — set minimums and get restocking alerts

### Event & Menu Management
- **Event Profiles** — "Farmers Market Saturday" vs "Food Truck Rally"
- **Prep Calculator** — based on event type + expected attendance + weather
- **Menu Toggle** — quickly enable/disable items per event
- **Waste Logging** — track spoilage to improve future prep

### Smart Features
- **Weather Integration** — adjust prep suggestions based on forecast
- **Sales Velocity** — see how fast items sell per hour
- **History & Trends** — which events need more/less prep
- **Simple Costing** — per-item cost tracking without complexity

## Why Now?

- **Food truck industry growing** — $2B+ industry, 12% annual growth
- **Mobile tools are expected** — operators live on their phones
- **No dedicated solution exists** — everyone's using adapted restaurant tools or spreadsheets
- **Weather data is free** — easy to integrate forecasts

## Business Model

**Freemium + Premium:**

| Plan | Price | Features |
|------|-------|----------|
| **Starter** | Free | 20 items, 1 event type, basic counts |
| **Pro** | $19/mo | Unlimited items, events, weather prep, alerts |
| **Team** | $39/mo | 5 users, role permissions, shared inventory |

## Competitive Landscape

| Solution | Price | Food Truck Fit |
|----------|-------|----------------|
| Square Inventory | Included | Basic, no prep planning |
| MarketMan | $239/mo | Overkill, fixed-kitchen focused |
| BlueCart | $199/mo | Ordering-focused, not inventory |
| Spreadsheets | Free | No mobile UX, manual everything |
| **TruckStock** | $19/mo | **Built for trucks** |

## Technical Stack (Proposed)

- **Frontend:** React Native (iOS + Android)
- **Backend:** Node.js + PostgreSQL
- **Weather:** OpenWeatherMap API (free tier)
- **Hosting:** Railway or Render ($20/mo)
- **Notifications:** Firebase Cloud Messaging

## Success Metrics

- **Activation:** Complete first inventory count within 24h
- **Engagement:** 4+ inventory updates per week
- **Retention:** 60% monthly active at day 30
- **Revenue:** $19 ARPU, 5% free-to-paid conversion

## Prototype

Interactive demo: [TruckStock Prototype](./prototype/index.html)

The prototype demonstrates:
- Mobile-first inventory dashboard
- Quick count interface
- Low stock alerts
- Event-based prep calculator
- Space capacity visualization

## Source

- **Platform:** Reddit (r/foodtrucks, r/restaurantowners, r/AppIdeas)
- **Validation:** 6+ complaint threads about food truck inventory tools
- **Date:** March 2026

---

*Researched by Duncan ⚔️*
