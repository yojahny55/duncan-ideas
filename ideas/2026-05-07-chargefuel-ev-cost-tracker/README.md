# ChargeFuel — EV Charging Cost Intelligence

> Know exactly what you're spending to drive. One dashboard for every charging session, every provider, every mile.

## Problem

EV owners juggle 5-15 charging apps (Tesla Supercharger, Electrify America, ChargePoint, EVgo, Blink, Rivian, Ford, home charger, etc.) with zero visibility into total charging spend. Nobody knows:
- How much they actually spend per month on charging
- Their real cost per mile vs gas
- Whether they're charging at the cheapest times/stations
- How much home charging vs public charging actually costs

Reddit is flooded with "what's the best app for tracking every charging session?" posts. The answer: **nothing good exists**. People build spreadsheets or give up.

## Target Users

- **4.5M+ US EV owners** (growing 30%+ YoY)
- **Multi-app chargers** — anyone using 2+ charging networks
- **Home + public mixers** — charge at home AND on the road
- **New EV buyers** — transitioning from gas, shocked by charging complexity

## Solution

**ChargeFuel** — unified EV charging cost tracker and optimizer.

### Core Loop
1. **Auto-import** from charging networks (Tesla, ChargePoint, Electrify America, EVgo, etc.)
2. **Manual quick-log** — 3 taps for any session (cost, kWh, location)
3. **Dashboard** — total spend, cost/mile, home vs public split, monthly trends
4. **Smart insights** — "You'd save $47/mo charging at home during off-peak (11pm-6am)"

### Key Features

| Feature | Description |
|---------|-------------|
| **Unified Cost Dashboard** | All charging spend in one place — home + public + workplace |
| **Cost Per Mile** | Real $/mi vs gas equivalent for your specific car |
| **Home Charging Optimizer** | Import your utility TOU rate schedule, get cheapest charging windows |
| **Station Price Compare** | Compare public charging prices along your route |
| **Monthly Report** | "You spent $127 on charging — $89 home, $38 public. Equivalent gas cost: $247. You saved $120." |
| **Trip Calculator** | "Road trip to Miami: ~$42 in charging vs $89 in gas" |
| **Carbon Counter** | lbs CO2 saved vs ICE — the feel-good number |
| **Receipt Scanner** | Snap charging receipts for stations without API integration |

### Why Now

- US EV sales hit 1.5M+ in 2025, cumulative 4.5M+ on road
- Charging network fragmentation is WORSENING (more networks, more apps)
- Gas price comparison apps are everywhere; charging equivalents barely exist
- Utility TOU rates getting more complex — optimization matters more
- Reddit threads asking for this get hundreds of upvotes

## Competition

| Tool | Gap |
|------|-----|
| **Individual charging apps** | Show THEIR sessions only, no cross-network view |
| **PlugShare/A Better Route Planner** | Station finders, not cost trackers |
| **NeoCharge** | Hardware-dependent ($149 Smart Splitter), home-only |
| **Spreadsheets** | Manual, no insights, no auto-import |
| **Car dashboards** | Show efficiency (mi/kWh) but not $$ spend |

**Nobody owns the "show me my total EV fuel cost" position.**

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | Manual logging, 1 vehicle, basic dashboard |
| **Plus** | $3.99/mo | Auto-import (3 networks), home optimizer, monthly reports |
| **Premium** | $7.99/mo | Unlimited networks, trip calculator, station compare, receipt scan, multi-vehicle |

## Market Size

- 4.5M US EV owners × $3.99/mo ARPU (blended) = potential $215M+/mo market
- Realistic: capture 0.1% in year 1 = $215K MRR
- Growing 30%+ annually as EV adoption accelerates

## Technical Notes

- **Auto-import**: OAuth integrations with charging networks (where APIs exist) + email parsing (ChargePoint sends receipts) + CSV upload
- **Home charging**: User enters utility rate plan (TOU/flat), charger reports kWh used
- **Cost per mile**: EPA efficiency (mi/kWh) × electricity cost for user's specific mix
- **PWA first**, native apps later — EV owners often checking between drives

## Source

Web research — Reddit r/electricvehicles, Product Hunt, indie hacker forums. Multiple threads with 100+ upvotes from frustrated EV owners.

---

*Created by Duncan ⚔️ — May 7, 2026*
