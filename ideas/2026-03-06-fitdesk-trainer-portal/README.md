# FitDesk — Client Portal for Solo Personal Trainers

**Date:** 2026-03-06  
**Source:** Reddit (r/personaltraining, r/AppIdeas)  
**Category:** Fitness / SaaS / B2B

## Problem Statement

Personal trainers are drowning in admin chaos. They currently juggle:
- **WhatsApp** for client communication
- **Google Sheets** for workout plans and progress tracking
- **PDFs** for sending programs
- **Venmo/PayPal** for collecting payments
- **Calendar apps** for scheduling

This fragmented workflow burns 5-10 hours per week on admin work that doesn't scale with client growth. When a trainer goes from 5 to 15 clients, the chaos multiplies.

### Evidence from Reddit (Past 2 Weeks)

> "I'm an online PT who's finally outgrown my messy combo of Google Sheets, WhatsApp, PDFs and random apps, and it's starting to kill my brain cells" — r/personaltraining

> "Keeping track of everything with spreadsheets and text messages is starting to get messy" — r/personaltraining

> "I got so frustrated with those scaling monthly fees that I actually hired developers to build my own custom platform" — r/personaltraining

> "Every fitness app is built for the end user, not the trainer running a business" — r/AppIdeas

## Why Existing Solutions Fail

| Solution | Problem |
|----------|---------|
| TrueCoach | $19-89/mo per trainer, scales with clients |
| PT Distinction | Complex setup, steep learning curve |
| Everfit | Overkill for solo trainers, expensive |
| Trainerize | $5-15/client/mo, costs explode with growth |
| Google Sheets | Not client-facing, no scheduling, no payments |

**Gap:** Solo trainers (1-20 clients) need something dead simple with flat pricing, not enterprise tools that charge per client.

## Target Users

1. **Solo Personal Trainers** — 1-20 clients, mix of in-person and online
2. **Online Fitness Coaches** — Remote-only, need async communication
3. **Side-Hustle Trainers** — Gym employees with private clients

### User Profile
- Age: 25-40
- Tech comfort: Medium (uses Instagram, basic apps)
- Pain: Spends more time on admin than training
- Budget: $20-50/mo flat, refuses per-client pricing

## Proposed Solution: FitDesk

A **dead-simple client portal** with one flat monthly price. Trainers get:

### Core Features (MVP)

1. **Client Dashboard**
   - Each client gets a private portal link (no app download required)
   - Current workout plan visible at a glance
   - Progress tracking (weight, measurements, photos)
   - Direct messaging (replaces WhatsApp chaos)

2. **Workout Builder**
   - Drag-and-drop exercise library
   - Quick duplicate and assign to multiple clients
   - Exercise video links (YouTube/custom)
   - Progressive overload tracking

3. **Check-In System**
   - Automated weekly check-in forms
   - Photo progress uploads
   - Trainer notification when submitted
   - Historical comparison view

4. **Simple Scheduling**
   - Availability slots
   - Client self-booking
   - Calendar sync (Google/Apple)
   - Session reminders

5. **Payment Collection**
   - Stripe integration for recurring billing
   - Invoice history
   - Payment reminder automation

### Differentiators

| FitDesk | Competitors |
|---------|-------------|
| $29/mo flat (unlimited clients) | $5-15 per client |
| 10-minute setup | Hours of configuration |
| Client uses web link (no app) | Requires app download |
| Built for 1-20 clients | Built for gyms/enterprises |
| Opinionated defaults | Overwhelming customization |

## User Flow

```
Trainer signs up → Creates first client → 
Builds workout plan → Sends portal link →
Client views plan → Logs workouts →
Submits weekly check-in → Trainer reviews →
Rinse and repeat
```

## Technical Architecture

### Stack
- **Frontend:** React + Tailwind CSS
- **Backend:** Node.js + Express or Next.js API routes
- **Database:** PostgreSQL (Supabase)
- **Auth:** Magic link (clients) + email/password (trainers)
- **Payments:** Stripe
- **Hosting:** Vercel + Railway

### Data Model
```
Trainer
  └── Clients[]
        └── WorkoutPlans[]
        └── CheckIns[]
        └── Messages[]
        └── Payments[]
```

## Monetization

| Plan | Price | Features |
|------|-------|----------|
| Solo | $29/mo | Up to 20 clients, all features |
| Pro | $49/mo | Unlimited clients, custom branding |
| Team | $99/mo | Multiple trainers, shared library |

**Why this works:** Trainers currently pay $50-200/mo for fragmented tools. FitDesk consolidates at lower total cost.

## Go-to-Market

1. **Reddit seeding** — Answer questions in r/personaltraining with genuine help
2. **Fitness influencer partnerships** — Free accounts for trainers with 10K+ followers
3. **SEO content** — "Best personal trainer software 2026" articles
4. **Referral program** — $10/mo off for each referred trainer

## Competitive Landscape

- **TrueCoach** — $19-89/mo, good but pricey for small trainers
- **PT Distinction** — Feature-rich but complex
- **Everfit** — $49-199/mo, enterprise focus
- **Trainerize** — Per-client pricing kills margins
- **Google Sheets** — Free but not scalable or client-facing

## Success Metrics

- **Activation:** Trainer creates first client within 24 hours
- **Retention:** 80%+ monthly retention after month 3
- **NPS:** 50+ (trainers love simplicity)
- **Time saved:** 5+ hours/week reported by users

## Prototype

See `prototype/index.html` for a working demo of the trainer dashboard.

**Live Demo:** [GitHub Pages Link]

---

*Researched and documented by Duncan ⚔️*
