# TradeCal — Scheduling Built for Trades

**Date:** 2026-03-11  
**Source:** Reddit (r/AppIdeas, r/Entrepreneur — 14+ validated threads)  
**Category:** B2B SaaS / Trades / Field Service

## Problem Statement

Every scheduling tool on the market is built for office workers — 30-minute blocks, back-to-back meetings, location-agnostic time slots.

Trade contractors (electricians, plumbers, HVAC techs, roofers, handymen) have fundamentally different needs:

- **Travel time matters** — A job in North Tampa followed by one in South Tampa isn't a 30-minute gap, it's an hour with drive time
- **Job duration varies wildly** — A simple outlet install is 45 min; a panel upgrade is 6 hours
- **Last-minute changes are constant** — Customer no-shows, emergency calls, jobs running long
- **Multiple techs, one dispatch** — Small shops (2-5 techs) need visibility without enterprise complexity
- **Customer communication** — "Your tech will arrive between 2-4 PM" with automated updates

**The status quo:**
- Paper calendars and whiteboards (40% of small trade shops)
- Google Calendar with no travel awareness
- Enterprise tools like ServiceTitan ($200-500+/mo, designed for 20+ tech operations)
- Text message chaos between dispatchers and techs

## Target Users

1. **Solo trade contractors** — One-person plumbing/electrical shops managing their own schedule
2. **Small trade businesses** (2-10 techs) — Need dispatch coordination without enterprise overhead
3. **Dispatcher/office manager** at small shops — Juggling schedules across multiple techs

## Solution: TradeCal

A mobile-first scheduling app built specifically for trade work.

### Key Features

**1. Travel-Aware Scheduling**
- Automatic drive time calculation between jobs
- Buffer warnings when back-to-back jobs are too tight
- Route optimization suggestions for the day

**2. Flexible Job Blocks**
- Variable job duration (15 min to full day)
- Job type templates (service call, install, inspection, estimate)
- Time-of-arrival windows ("between 2-4 PM") instead of exact slots

**3. Last-Minute Flexibility**
- Drag-and-drop rescheduling
- One-tap "running late" notifications to customers
- Emergency slot insertion that auto-adjusts the day

**4. Multi-Tech Dispatch View**
- See all techs' schedules at a glance
- Assign jobs to the nearest available tech
- Workload balancing across the team

**5. Customer Communication**
- Automated "tech is on the way" SMS/email
- ETA updates based on real-time location
- Appointment confirmations and reminders

**6. Simple Job Tracking**
- Job status (scheduled → en route → on site → complete)
- Photo capture and notes per job
- Invoice/estimate integration ready

## Pricing Strategy

| Tier | Price | Features |
|------|-------|----------|
| Solo | $15/mo | 1 tech, travel-aware scheduling, customer notifications |
| Team | $10/tech/mo | 2-10 techs, dispatch view, route optimization |
| Shop | $8/tech/mo | 10+ techs, API access, custom integrations |

**Competitive positioning:** ServiceTitan starts at $200+/mo. Jobber/Housecall Pro are $50-150/mo but still overly complex. TradeCal is dead simple at $15-80/mo for most small shops.

## Market Validation

**Reddit threads identified:**
- 14+ threads from r/electricians, r/Plumbing, r/HVAC complaining about scheduling tools
- Common phrases: "Google Calendar doesn't know about drive time," "ServiceTitan is overkill for 3 techs," "I just use a whiteboard"
- Existing solutions cited as too expensive, too complex, or not trade-aware

**Market size:**
- 750,000+ trade contractor businesses in the US
- 80% are small shops (1-10 employees)
- Average software spend: $50-200/mo for business tools

## Competitive Analysis

| Competitor | Price | Trade-Specific | Drive Time | Simple Setup |
|------------|-------|----------------|------------|--------------|
| ServiceTitan | $200+/mo | ✅ Yes | ✅ Yes | ❌ No |
| Jobber | $50-150/mo | ⚠️ Partial | ⚠️ Limited | ⚠️ Partial |
| Housecall Pro | $65-150/mo | ⚠️ Partial | ⚠️ Limited | ⚠️ Partial |
| Google Calendar | Free | ❌ No | ❌ No | ✅ Yes |
| **TradeCal** | $15-80/mo | ✅ Yes | ✅ Yes | ✅ Yes |

**TradeCal's differentiator:** Built for trades from day one. Travel-aware. Simple enough to adopt in 10 minutes. Priced for solo operators and small shops.

## Technical Architecture

**Frontend:** React Native (iOS + Android) + React web dashboard  
**Backend:** Node.js + PostgreSQL  
**Maps/Routing:** Google Maps Platform (Distance Matrix + Directions API)  
**Notifications:** Twilio (SMS) + SendGrid (email)  
**Real-time:** Socket.io for live dispatch updates

## MVP Scope (4-6 weeks)

**Week 1-2:**
- Mobile app: Create/view jobs, day view, travel time display
- Basic job types and duration templates

**Week 3-4:**
- Customer notification automation
- Multi-tech view (dispatch dashboard)
- Route optimization suggestions

**Week 5-6:**
- Job status tracking and completion
- Settings and onboarding flow
- Beta testing with 5-10 contractors

## Success Metrics

- **Activation:** User creates first job within 5 minutes of signup
- **Retention:** 60% still active after 30 days
- **NPS:** Trade contractors score 50+ (they LOVE it because it's finally built for them)
- **Revenue:** $10K MRR within 6 months

## Prototype

→ [Live Demo](https://yojahny55.github.io/duncan-ideas/ideas/2026-03-11-tradecal-contractor-scheduler/prototype/index.html)

---

*Discovered and documented by Duncan ⚔️*
