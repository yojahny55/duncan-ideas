# MoveMate — Moving Cost Calculator & Coordinator

## 💡 Elevator Pitch
The only app that tells you exactly how much your move will cost and coordinates every step — from estimates to packing to move-in day.

## 🔥 Problem
27 million Americans move each year. Every single one faces the same chaos:
- **No idea what it'll cost** — quotes from movers vary wildly, hidden fees everywhere
- **Comparing options is painful** — truck rental vs pods vs full-service vs DIY? Each has 20 variables
- **Moving day is a disaster** — forgot to transfer utilities, can't find the box with sheets, no idea what's done
- **Budget blowouts are the norm** — average move costs 25-40% more than estimated

Current tools are either:
- **MoveBudda/Unpakt** — lead generation for moving companies, not YOUR calculator
- **Checklists in Notes/Google Docs** — static, not smart, no cost tracking
- **Moving company apps** — only cover their service, not the full picture

Nobody owns the "plan your entire move with real costs" position.

## 🎯 Target Users
- **Primary:** 27M Americans moving yearly (renters, home buyers, job relocations)
- **Secondary:** Military PCS moves (400K/year), college students (20M/year)
- **Tertiary:** Real estate agents offering "move concierge" as a perk

## 🏗️ Solution — MoveMate

### Core Features

#### 1. Instant Cost Estimator
- Enter origin → destination, home size (studio → 5BR), move date
- Get side-by-side comparison: DIY truck, rental truck + labor, portable container (PODS/U-Pack), full-service movers
- **Real cost calculation** — not just the sticker price:
  - Fuel, tolls, mileage overage charges
  - Insurance (released value vs full replacement)
  - Packing supplies (boxes, tape, bubble wrap by room count)
  - Temporary storage
  - Tips for movers (industry standard 15-20%)
  - Travel costs (hotel, meals for long distance)
  - "Hidden fee" estimator (stairs, long carry, elevators, appliance disconnect)

#### 2. Move Budget Tracker
- Set total budget, track actual vs estimated per category
- Receipt scanning for move-related expenses
- Tax deduction finder (moving for work = deductible expenses)
- "You're $340 over budget on packing supplies" alerts

#### 3. Smart Timeline
- Auto-generated task list based on move date:
  - 8 weeks: book movers, start purging
  - 6 weeks: order supplies, forward mail
  - 4 weeks: transfer utilities, change address
  - 2 weeks: pack non-essentials, confirm details
  - 1 week: essentials box, defrost fridge
  - Move day: room-by-room checklist
  - Post-move: unpack priority order
- Push notifications with deadlines
- Utility transfer one-tap calls/links

#### 4. Packing Coordinator
- Room-by-room packing progress tracker
- QR code box labels — scan a box, see exactly what's inside
- "Where is my [x]?" search across all boxes
- Priority flags: "Open First" for essentials
- Estimated boxes per room based on home size

#### 5. Address Change Automation
- One-tap address update links for: USPS, DMV, voter registration, bank accounts, subscriptions, insurance
- Custom list of who still needs updating
- Confirmation tracking

## 💰 Monetization
| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 1 move, cost estimator, basic checklist, 20 box labels |
| **Move Pro** | $4.99/mo (or $9.99 one-time) | Unlimited moves, budget tracker, receipt scanning, full timeline, unlimited QR labels, address automation |
| **Move Family** | $7.99/mo | Pro + shared access for partner/roommate, task delegation, family packing coordinator |

One-time pricing option is key — most people only move occasionally and won't subscribe. The $9.99 "buy once for this move" is the sweet spot.

## 📊 Market Research
- **27M** Americans move per year (US Census)
- **Average move cost:** $1,250 (local) to $4,890 (long-distance)
- **Moving industry:** $18B+ in US
- **MoveBudda** raised $5M — validates the space but they're lead-gen, not a planner
- **Unpakt** = price comparison only, no coordination
- **Sortly** = inventory only, not move-specific
- **Nobody** combines cost estimation + budget tracking + timeline + packing coordination

### Competitor Matrix
| Feature | MoveMate | MoveBudda | Unpakt | Sortly | Checklist App |
|---------|----------|-----------|--------|--------|---------------|
| Cost Estimator (all options) | ✅ | Partial | ✅ | ❌ | ❌ |
| Hidden Fee Calculator | ✅ | ❌ | ❌ | ❌ | ❌ |
| Budget Tracker | ✅ | ❌ | ❌ | ❌ | ❌ |
| Smart Timeline | ✅ | ❌ | ❌ | ❌ | Partial |
| QR Box Labels | ✅ | ❌ | ❌ | ✅ | ❌ |
| Address Automation | ✅ | ❌ | ❌ | ❌ | ❌ |
| Tax Deduction Finder | ✅ | ❌ | ❌ | ❌ | ❌ |

## 🛠️ Technical Feasibility
- **MVP Stack:** React Native or PWA, Firebase/Supabase backend
- **Cost data:** Moving company APIs + crowdsourced pricing + government fuel/toll data
- **QR labels:** Standard QR generation, no special hardware
- **Address change:** Deep links to services (USPS API, state DMV portals)
- **Timeline complexity:** Moderate — well-defined task templates with date math
- **Estimated MVP build time:** 4-6 weeks solo

## 🎨 Design Direction
- Clean, calm aesthetic — moving is stressful enough, the app should feel organized and in control
- Color: Trust-building blues and greens, warm accents
- Card-based layout for each moving option
- Progress bars everywhere — make the user feel accomplished
- Move day = simplified view with just the essential checklist

## 📈 Growth Strategy
1. **SEO** — "how much does it cost to move from [X] to [Y]" — instant cost calculator as landing page
2. **Real estate agent partnerships** — free Pro accounts for agents who recommend it
3. **Zillow/Realtor.com integration** — "Just bought? Plan your move"
4. **College orientation** — target universities with "dorm move-in kit"
5. **Military bases** — PCS move sponsor program

## Why This Wins
Moving is a **universal, high-stress, high-cost event** that everyone faces and nobody enjoys. Every single mover is desperate for someone to just tell them what it costs and what to do. The tools that exist solve one slice (compare movers, or track inventory, or change your address). MoveMate is the **first app that owns the entire move** from estimate to unpacked.

---

*Source: Web research (MoveBudda funding, Census data, Reddit r/moving, micro-SaaS trends May 2026)*
