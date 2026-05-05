# SubSherpa — Subscription Fatigue Killer

**Date:** 2026-05-05  
**Author:** Duncan ⚔️ (via Yojahny's automated idea pipeline)  
**Status:** Draft  
**Source Inspiration:** Subscription fatigue trending on X/Twitter — 40%+ of consumers report being overwhelmed by subscriptions (Deloitte 2025, Adapty 2026). Average US household pays for 12+ subscriptions and forgets 2-3 of them entirely.

---

## Problem Statement

People are drowning in subscriptions. Streaming, SaaS, gym, cloud storage, news, apps — the average person has 12+ recurring charges and **forgets about 20% of them**. There's no single place to see what you're paying, when you're paying, or whether you're actually using it. Banks show transactions but not patterns. Calendar reminders are manual. People are literally paying for things they haven't used in months and don't know how to stop.

**Key pain points:**
- No unified view of all subscriptions across payment methods
- Forgetting to cancel free trials before they convert
- Not realizing price hikes happened
- Can't compare "what am I getting vs what I'm paying"
- Guilt/anxiety about checking — easier to just ignore it

## Solution

**SubSherpa** — a lightweight subscription tracker that connects to your bank/credit cards via Plaid, auto-detects recurring charges, and gives you a dead-simple dashboard:

- **Auto-detection:** Plaid integration finds recurring charges automatically — no manual entry
- **Usage scoring:** Rate how much you use each sub (1-5 stars), app highlights zombies (<2 stars, 30+ days inactive)
- **Trial tracker:** Flags upcoming trial expirations with one-tap cancel reminders
- **Price hike alerts:** Notifies when a recurring charge amount changes
- **Burn rate dashboard:** "You're spending $347/mo on subscriptions. Here's what to kill."
- **Cancel assistant:** Direct links to cancellation pages + pre-written cancel emails
- **Share with partner:** Household view — see combined subscription spend

### Differentiator
Most competitors (Rocket Money, Truebill) are bloated and try to upsell you on financial services. SubSherpa is **opinionated and minimal** — one job, done well. No budgeting features, no credit score, no loan offers. Just subscription clarity.

## Target Users

| Segment | Description | Size |
|---------|-------------|------|
| **Subscription stackers** | Millennials/Gen-Z with 8+ streaming services | ~45M US adults |
| **SaaS professionals** | Developers/creators paying for 10+ tools | ~8M |
| **Free trial abusers** | People who sign up for trials and forget | ~30M |
| **Household managers** | Couples tracking combined spend | ~20M couples |

**Primary:** 25-40 year olds, urban, tech-savvy, multiple payment methods.  
**Secondary:** Freelancers/small business owners tracking business subs.

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Frontend** | React + TypeScript + Tailwind | Fast iteration, clean UI |
| **Mobile** | React Native (shared logic) | iOS + Android from one codebase |
| **Backend** | Node.js + Fastify | Lightweight, fast |
| **Database** | PostgreSQL + Redis | Relational for subscriptions, Redis for sessions |
| **Auth** | Clerk or Auth0 | Quick social login |
| **Bank integration** | Plaid API | Industry standard, 12k+ institutions |
| **Notifications** | Push (Expo) + Email (Resend) | Trial reminders, price alerts |
| **Infra** | Vercel (frontend) + Railway (backend) | Zero-devops, scales cheaply |
| **Analytics** | PostHog | Privacy-first, self-hostable |

### Architecture
```
[Plaid] → [Backend (Fastify)] → [PostgreSQL]
                ↓
[React Web] ← [API] → [React Native App]
                ↓
[Push/Email notifications via Resend]
```

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | Manual entry, up to 10 subs, basic alerts |
| **Pro** | $3.99/mo | Plaid auto-detect, unlimited subs, trial tracker, price alerts, cancel assistant |
| **Household** | $5.99/mo | Everything in Pro + shared view, up to 4 members |

**Key principle:** The free tier must be genuinely useful. Pro is for people who want automation.

**Revenue projections (Year 1):**
- 50k free users, 8% conversion = 4,000 paid users
- Avg $4.50/mo × 4,000 = $18k/mo → **$216k ARR**

## Competitive Landscape

| Competitor | Weakness We Exploit |
|------------|-------------------|
| Rocket Money | Bloated, upsells financial products, expensive ($6-12/mo) |
| Bobby (app) | Manual entry only, no bank connection |
| Subtrack | Clunky UI, limited notifications |
| Trim | Discontinued / acquired |

**Our edge:** Minimalist, no upsells, $3.99, actually helps you cancel.

## MVP Scope (4 weeks)

- [ ] Week 1: Plaid integration + recurring charge detection
- [ ] Week 2: Dashboard UI with subscription cards
- [ ] Week 3: Trial tracker + push notifications
- [ ] Week 4: Cancel assistant + polish

## Future Ideas

- AI-powered "you should switch to..." recommendations
- Group subscription splitting (share Netflix, etc.)
- Business tier with team/expense management
- Browser extension to catch signups in real-time

---

## Prototype

See `prototype.html` for interactive demo.
