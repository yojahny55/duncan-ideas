# SubSlayer 🗡️

> "Kill forgotten subscriptions before they kill your wallet"

**Date:** February 2, 2026  
**Source:** Twitter/X Research  
**Status:** 💡 Concept

---

## Problem Statement

People are bleeding money from forgotten subscriptions. This isn't a new problem, but existing solutions (subscription trackers) are **passive** — they just list what you have. The real pain points from real people:

### Source Tweets

1. **@manu_guiadem**: *"I just realized i forgot to cancel a subscription, i feel like crying 😭. Ahhh!"*
   - https://x.com/manu_guiadem/status/2018095183854739838

2. **@myaumyao**: *"i forgot to cancel my niconico subscription they just charged me more money </3"*
   - https://x.com/myaumyao/status/2018063557305233853

3. **@theblur___**: *"forgot I pay for a subscription to use the remote start feature on my car and not just the base subscription... its an add on"*
   - https://x.com/theblur___/status/2018047645638406619

4. **@PranavDHQ**: *"POV: that one US subscriber who forgot to cancel their free trial, then forgot he even started & still has the subscription on"*
   - https://x.com/PranavDHQ/status/2018054328054161603

5. **@HeinrichCoetzee**: *"I keep buying small dumb things I don't need. Budgeting apps never worked for me"*
   - https://x.com/HeinrichCoetzee/status/2018146102827257907

### Core Problems
- 🔴 **Forgetting to cancel** before renewal dates
- 🔴 **Hidden subscriptions** buried in email receipts
- 🔴 **Dark patterns** making cancellation intentionally difficult
- 🔴 **Trial traps** that auto-convert to paid
- 🔴 **No emotional urgency** — passive trackers don't motivate action

---

## Target Users

### Primary: "Subscription Victims"
- **Age:** 22-45
- **Income:** $40k-$150k
- **Behavior:** Signs up for free trials, forgets, pays for months
- **Pain:** Feels guilty, annoyed, and helpless about wasted money
- **Motivation:** Wants to stop the bleeding without effort

### Secondary: "Budget Conscious"
- Already tracks some subscriptions manually
- Wants automation and insights
- Cares about long-term financial health

### Tertiary: "Financial Minimalists"
- Actively trying to reduce recurring costs
- Wants to know the "true cost" of each service
- Values simplicity and intentionality

---

## Proposed Solution: SubSlayer

An **aggressive subscription killer** that doesn't just track — it **hunts and eliminates** unwanted subscriptions.

### Core Differentiator
Most apps are passive ("here's your list"). SubSlayer is **active**:
- Proactively alerts you BEFORE charges
- Shows emotional impact ("You've wasted $847 this year")
- Gamifies cancellation ("You've saved $2,340!")
- Generates cancellation scripts when services make it hard

---

## Key Features

### 1. 📧 Smart Email Scanner
- Connects to Gmail/Outlook
- AI identifies subscription confirmations, receipts, renewal notices
- Auto-categorizes: Essential / Nice-to-have / Forgot about it
- Detects hidden subscriptions you didn't know existed

### 2. ⚠️ Pre-Renewal Alerts
- **7 days before:** "Heads up: Netflix renews in 7 days ($15.99)"
- **3 days before:** "Still want Netflix? Renews in 3 days"
- **1 day before:** "LAST CHANCE: Netflix charges tomorrow"
- Push notifications, SMS, email — configurable

### 3. 💀 One-Tap Cancel Assist
- Shows exactly how to cancel each service
- Direct links to cancellation pages (not the buried ones)
- For difficult services: generates cancellation email/chat scripts
- Tracks whether you actually canceled

### 4. 💰 Money Impact Dashboard
- **Monthly burn rate:** "You spend $287/month on subscriptions"
- **Annual projection:** "That's $3,444/year"
- **Lifetime projection:** "At this rate, $34,440 over 10 years"
- **Wasted money tracker:** "You've paid $847 for services you don't use"

### 5. 🏆 Savings Gamification
- "Subscriptions Slayed" counter
- "Money Saved" lifetime counter
- Monthly savings challenges
- Share achievements: "I saved $1,200 with SubSlayer"

### 6. 🎯 Subscription Health Score
- 0-100 score based on:
  - Usage vs. cost ratio
  - Duplicate services (2 streaming apps?)
  - Trial-to-paid conversions
  - Subscription creep over time
- Personalized recommendations

### 7. 🚨 Dark Pattern Detector
- Flags services known for difficult cancellation
- Warns about auto-renewal traps
- Identifies price increases
- "This service has been flagged by 847 users as hard to cancel"

### 8. 📝 AI Cancellation Copilot
- Generates personalized cancellation emails
- Chat scripts for phone cancellations
- Handles "retention offer" negotiations
- "Say this to get 3 months free instead of canceling"

### 9. 📊 Usage Tracking (Optional)
- Integrates with services to show actual usage
- "You've watched 2 hours on Hulu this month ($17.99)"
- "Spotify: 47 hours listened — worth it!"
- Helps make informed keep/cancel decisions

### 10. 👨‍👩‍👧‍👦 Family/Shared View
- See household subscriptions together
- Identify duplicates across family members
- "You and Sarah both pay for Disney+"

---

## Technical Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **State:** Zustand
- **Charts:** Recharts
- **Animations:** Framer Motion

### Backend
- **Runtime:** Node.js
- **Framework:** Hono or Express
- **Database:** PostgreSQL (Supabase)
- **Auth:** Clerk or Supabase Auth
- **Email Parsing:** Gmail API + custom NLP

### AI/ML
- **Email Classification:** Claude API or fine-tuned model
- **Subscription Detection:** Pattern matching + ML
- **Cancellation Scripts:** Claude API

### Infrastructure
- **Hosting:** Vercel (frontend) + Railway/Fly.io (backend)
- **Email:** Resend for notifications
- **SMS:** Twilio for critical alerts
- **Analytics:** PostHog

---

## Monetization Strategy

### Freemium Model

**Free Tier:**
- Track up to 10 subscriptions
- Basic renewal alerts (email only)
- Manual entry only

**Pro ($4.99/month):**
- Unlimited subscriptions
- Email scanning & auto-detection
- Push + SMS alerts
- Cancel assist & scripts
- Savings gamification

**Family ($9.99/month):**
- Everything in Pro
- Up to 5 family members
- Shared dashboard
- Duplicate detection

### Ironic Pricing Strategy
- "We're the only subscription that pays for itself"
- Show: "SubSlayer costs $60/year but saved you $1,200"
- 30-day free trial with aggressive "your trial is ending" emails (self-aware humor)

### Additional Revenue
- Affiliate partnerships with services (ironic but profitable)
- "Switch to this cheaper alternative" recommendations
- B2B: HR/Finance teams managing employee subscriptions

---

## Competition Analysis

### Existing Players

| App | Approach | Weakness |
|-----|----------|----------|
| **Truebill/Rocket Money** | Bank connection, passive tracking | Feels corporate, upsells aggressively |
| **Trim** | Negotiates bills, cancels for you | Takes 33% of savings as fee |
| **Bobby** | Simple manual tracker | No automation, iOS only |
| **Subtrack** | Clean manual tracking | No email scanning, no cancel assist |
| **Mint** | Full budgeting app | Subscriptions are afterthought |

### SubSlayer Differentiation
1. **Emotional design** — Makes you *feel* the waste
2. **Aggressive alerts** — Not just reminders, urgency
3. **Cancel-first mindset** — Assumes you want to cancel unless proven otherwise
4. **Gamification** — Makes saving money fun
5. **AI copilot** — Actually helps you cancel, not just tracks
6. **Transparent pricing** — No hidden fees, no % of savings

---

## Why This Will Work

### 1. Universal Problem
Everyone has forgotten subscriptions. The emotional reaction ("I feel like crying 😭") shows the pain is real and visceral.

### 2. Clear ROI
Unlike most apps, SubSlayer pays for itself. Easy to demonstrate value: "Saved $1,200, cost $60."

### 3. Viral Mechanics
- "I saved $X" shareable moments
- Referral: "Get 1 month free for each friend"
- Comparison: "The average SubSlayer user has 23 subscriptions"

### 4. Timing
- Subscription fatigue is at all-time high
- Economic uncertainty makes people cost-conscious
- AI makes email parsing/script generation feasible

### 5. Defensible Moats
- Database of cancellation processes (hard to replicate)
- Community-sourced dark pattern reports
- Network effects from family sharing

### 6. Exit Opportunities
- Acquisition target for: Intuit (Mint), NerdWallet, Credit Karma, banks
- Could pivot to full financial health platform

---

## MVP Scope (4-6 weeks)

### Week 1-2: Core Infrastructure
- [ ] Auth system (email/Google)
- [ ] Manual subscription entry
- [ ] Basic dashboard UI
- [ ] Database schema

### Week 3-4: Smart Features
- [ ] Gmail API integration
- [ ] Email parsing for subscriptions
- [ ] Renewal alert system
- [ ] Cancel assist links

### Week 5-6: Polish & Launch
- [ ] Savings gamification
- [ ] Onboarding flow
- [ ] Landing page
- [ ] Beta launch on Product Hunt

---

## Success Metrics

### North Star
**Monthly Recurring Revenue (MRR)** — but validated by:
- **Subscriptions Tracked:** Total across all users
- **Cancellations Assisted:** Times users used cancel assist
- **Money Saved:** Total saved by all users (social proof)

### Leading Indicators
- Daily Active Users (DAU)
- Email scan completion rate
- Alert → Cancel conversion rate
- 7-day retention

### Lagging Indicators
- MRR / ARR
- Customer Acquisition Cost (CAC)
- Lifetime Value (LTV)
- Net Promoter Score (NPS)

---

## Open Questions

1. **Privacy concerns** — How to message email access sensitively?
2. **Bank connection** — Add Plaid for auto-detection? Privacy vs. convenience?
3. **International** — Different payment patterns, currencies, services?
4. **Enterprise** — B2B opportunity for SaaS management?

---

## Next Steps

1. ✅ Document concept (this file)
2. ✅ Build interactive prototype
3. [ ] Validate with 10 potential users
4. [ ] Build MVP
5. [ ] Beta launch
6. [ ] Iterate based on feedback

---

*Generated by Duncan on February 2, 2026*
*Source: Twitter/X daily research*
