# HomeKeep - Home Maintenance Schedule Tracker

> Never forget when you last changed the filter, serviced the furnace, or cleaned the gutters again.

## Problem Statement

**Homeownership comes with dozens of recurring maintenance tasks** — but no good way to track them:

- **HVAC filters** need changing every 1-3 months → Forgotten filters reduce efficiency 5-15%
- **Water heaters** need annual flushing → Sediment buildup cuts lifespan by 50%
- **Gutters** need seasonal cleaning → Clogged gutters cause $2K-5K foundation damage
- **Smoke detectors** need battery changes → 25% of home fire deaths have non-working detectors
- **Furnace/AC** need annual service → Skipped service voids warranties, causes breakdowns

**The result?** Homeowners either:
1. **Forget completely** → Things break, warranties void, expensive repairs
2. **Try to remember** → Mental load, guilt, unreliable
3. **Use paper checklists** → Get lost, not smart, no reminders
4. **Set calendar reminders** → Scattered, no history, can't track actual completion

**Market gap:** Enterprise tools like Oxmaint exist for HVAC contractors ($500+/mo), but homeowners have... nothing. A $400K house depends on $0 maintenance tracking software.

## Research Insights

- **$4,948**: Average annual cost of home maintenance (1% of home value)
- **$6,000+**: Average emergency repair when maintenance is skipped
- **40-50%**: Of homeowner insurance claims are from preventable maintenance issues
- **"Did I change the filter in January or February?"** — Every homeowner, always

## Target Users

1. **First-time homeowners** — Overwhelmed, don't know what needs doing or when
2. **Busy professionals** — Know maintenance matters but have no system
3. **Homeowners with older homes** — More systems, more maintenance, higher stakes
4. **Landlords with 1-5 properties** — Need to track maintenance across multiple homes

## Proposed Solution: HomeKeep

A **personal home maintenance companion** that:

1. **Knows your home** — Add your systems (HVAC type, water heater age, etc.)
2. **Generates a smart schedule** — Based on manufacturer recommendations, seasons, and your location
3. **Reminds before it's due** — Smart alerts with escalating urgency
4. **Tracks completion** — Log when you actually did it, with photos/notes
5. **Shows history** — "Last oil change was 4,847 miles ago"

### Key Features

#### 🏠 Home Profile
- Add home systems (furnace, AC, water heater, appliances)
- Input ages and brands for personalized schedules
- Multi-property support for landlords

#### 📅 Smart Scheduling
- Pre-built templates for common tasks (HVAC, plumbing, exterior, seasonal)
- Auto-adjusts based on climate/season
- Manufacturer recommendation integration

#### 🔔 Smart Reminders
- Escalating alerts: "Due in 7 days" → "Overdue 3 days" → "URGENT"
- Weather-aware: "Snow coming — check your roof"
- Seasonal bundles: "It's fall — time for these 5 things"

#### 📝 Completion Logging
- Quick "Done!" button with auto-timestamp
- Photo attachments for proof/reference
- Cost tracking for budgeting
- Contractor notes (who did it, contact info)

#### 📊 Maintenance Dashboard
- Visual health score for your home
- Overdue items prominently displayed
- History view by system/category
- Annual maintenance report

#### 🛠️ Task Library
- Pre-loaded with 50+ common home maintenance tasks
- Difficulty ratings and DIY vs. Pro recommendations
- Time estimates and average costs
- Video tutorial links

## Differentiation

| Feature | HomeKeep | Paper Checklists | Calendar Reminders | Enterprise Tools |
|---------|----------|------------------|-------------------|-----------------|
| Smart scheduling | ✅ | ❌ | ❌ | ✅ |
| History tracking | ✅ | ❌ | ❌ | ✅ |
| Multi-property | ✅ | ❌ | ⚠️ | ✅ |
| Photo evidence | ✅ | ❌ | ❌ | ✅ |
| Consumer-friendly | ✅ | ✅ | ✅ | ❌ |
| Price | $0-5/mo | Free | Free | $500+/mo |
| Homeowner-focused | ✅ | ❌ | ❌ | ❌ |

## Business Model

- **Free tier:** 1 home, 10 tasks, basic reminders
- **Pro ($5/mo):** Unlimited tasks, multiple homes, photo history, annual reports
- **Family ($9/mo):** Share with household members, assign tasks

**Expansion:**
- Partner with home service providers (furnace companies, etc.) for referral revenue
- Sell anonymous maintenance data to home insurance companies

## Technical Implementation

- **Progressive Web App** — Works offline, installable, no app store needed
- **Local-first** — Data persists even without account
- **Push notifications** — Via service worker
- **Export** — PDF maintenance history for selling home or insurance claims

## Competitive Landscape

| App | Focus | Why HomeKeep Wins |
|-----|-------|-------------------|
| Centriq | Appliance manuals | No scheduling/reminders |
| HomeZada | Home inventory/value | Bloated, not maintenance-focused |
| Notion/Spreadsheets | DIY tracking | No smart features, requires setup |
| Calendar apps | Generic reminders | No history, no home context |

**Gap:** No simple, homeowner-focused maintenance scheduler with smart reminders + history tracking.

## MVP Scope

1. Add home systems (dropdown templates)
2. Auto-generate maintenance schedule
3. Mark tasks complete with date
4. Push notification reminders
5. View history by system

## Success Metrics

- **Activation:** % of users who add at least 3 systems
- **Engagement:** % completing at least 1 maintenance task/month
- **Retention:** 30-day return rate
- **NPS:** "Would you recommend HomeKeep?"

## Why Now?

- **Gen Z/Millennials becoming homeowners** — Want apps for everything
- **Rising repair costs** — Preventive maintenance more valuable than ever
- **Climate unpredictability** — More weather-related home damage
- **Insurance requirements** — Some insurers now require maintenance proof

---

## Source

Web research: Product Hunt, Indie Hackers, home maintenance articles (March 2026)

## Status

✅ Prototype built

## Prototype

See `prototype/index.html` — Interactive demo with:
- Home system setup
- Maintenance schedule view
- Task completion logging
- History tracking
- Push notification preview

---

*Generated by Duncan ⚔️ — Daily App Ideas Research (Web Edition)*
