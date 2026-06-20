# Orbit — Smart Subscription Rotation Manager

**Date:** 2026-06-20
**Source:** Reddit trends + industry research — subscription fatigue crisis, "subscription cycling" behavior, AI tool churn
**Status:** Idea Draft + Prototype

---

## Problem Statement

U.S. households now spend **$273/month** on subscriptions (West Monroe, 2025). **89% underestimate** that total — 13% are off by more than $400/month. The number of paid subscriptions per household keeps climbing while the tolerance for that spend collapses.

**The new behavior is rotation, not cancellation.**

- **53% of AI subscribers cancel and restart tools as needed** (Bango, Nov 2025). Managing churn is now the strategy.
- **39% of streamers canceled at least one SVOD** in the prior six months (Deloitte 2025) — but most come back when a new season drops.
- Americans pay for an average of **5.8 streaming services** and **4 paid AI tools** (~$66/mo for AI alone).
- The average household has **12+ recurring subscriptions** spread across Apple, Google, Amazon, Stripe, and direct billing.

**The pain is orchestration, not discovery.**

Apps like Rocket Money and Pine AI help you *find and cancel* subscriptions. But nobody helps you **rotate** them — the deliberate cycle of "pause ChatGPT Plus in July while I travel, re-up Claude in August for the project sprint, rotate Netflix out while Disney+ has the new Marvel show, coordinate the YouTube Premium family plan so someone else takes over this month."

People are running this rotation mentally — or with a Google Sheet and phone calendar reminders. It's error-prone, stressful, and leaves money on the table.

### Specific frustrations (from Reddit research)

1. **"I forgot to cancel the free trial"** — Thousands of posts across r/Frugal, r/personalfinance, r/iosapps. People get charged for auto-renewing subscriptions they never intended to keep. Existing reminders are manual and easy to miss.

2. **Family plan coordination chaos** — r/youtubepremium, r/netflix, r/Spotify are full of threads about splitting family plans across households. YouTube's "same household" enforcement is creating a coordination nightmare. People use Roku workarounds, share logins over text, and lose track of who owes what.

3. **"Subscription creep" backlash** — r/SomebodyMakeThis and tech coverage (Yahoo, TheCooldown, June 2026) highlight frustration with apps pushing recurring charges for features that should be included. Users want to vote with their wallets but can't coordinate the churn.

4. **AI tool subscription whiplash** — r/cursor, r/ChatGPT, r/ClaudeAI users routinely cancel and restart based on project needs. "I wish I could just schedule this" is a common refrain. Google Play and most platforms offer no native pause.

5. **The "which ones am I even paying for?" problem** — Subscriptions are scattered across Apple ID, Google Play, Amazon, Stripe, PayPal, and direct billing. 89% of people underestimate their total because they genuinely don't know.

---

## Solution

**Orbit** — the subscription rotation manager. Your subscriptions don't cancel forever — they orbit in and out of your life on a schedule you control.

### Core Features

#### 1. Subscription Dashboard (Auto-Discovery)
Connect bank accounts and Apple/Google subscription centers. Orbit auto-categorizes every recurring charge:
- **Rotation-friendly** (Netflix, ChatGPT, Disney+, newsletters — easy cancel/restart)
- **Sticky** (internet, phone, insurance — painful to switch)
- **Trials at risk** (active free trials with countdown timers)
- **Family/shared** (multi-payer subscriptions with split coordination)

#### 2. Rotation Calendar
The killer feature. Drag any rotation-friendly subscription onto a calendar:
- "Netflix: Jun–Aug (stranger things season), off Sep–Nov, back Dec for Oscar season"
- "ChatGPT Plus: off this week (vacation), back Jun 28"
- "Disney+: off until Marvel show drops (tracked via release calendar)"
- " NYT Cooking: rotate with Bon Appétt — never both at once"

Visual timeline shows monthly cost projection. Drag blocks to see instant savings recalculation.

#### 3. Savings Forecast Engine
"I want to cut my subscription spend to $150/mo." Orbit proposes a rotation:
- Pause these 3 AI tools this month (saves $60)
- Rotate to Hulu from Netflix for 60 days (saves $15)
- Cancel these 2 unused apps outright (saves $24)
- **Result: $99 saved this month, $143/mo projected**

Forecast shows annual savings, churn-risk scoring (will you actually notice it's gone?), and "pain-free" recommendations first.

#### 4. One-Tap Pause/Cancel/Restart
Orbit deep-links into each platform's cancellation flow:
- Apple ID subscriptions → direct manage link
- Google Play → pause or cancel deep link
- Web subscriptions (Netflix, ChatGPT, etc.) → cached direct-cancel URL
- **"Smart cancel"** → Orbit executes the cancel flow via browser automation, then verifies success by monitoring your transactions. If a charge still hits next cycle, Orbit flags it and helps you dispute.

#### 5. Free Trial Sentinel
Every free trial you sign up for gets:
- **Day 1 reminder** — "Enjoying it? Worth keeping?"
- **24-hour-before-renewal reminder** — One-tap cancel with confirmation
- **Chargeback helper** — If you miss it, Orbit walks you through Apple/Google refund request with the exact language that works

#### 6. Family Plan Coordinator
For shared subscriptions plans (YouTube Premium Family, Spotify Duo/Family, Netflix Standard/Premium, Apple One Family):
- **Roster management** — Who's on the plan, since when, their share
- **Monthly split** — Auto-calculates who owes what, sends Venmo/PayPal request links
- **Rotation scheduler** — "Maria's turn to hold the Apple One Family plan June–July"
- **Enforcement alerts** — YouTube's same-household check coming? Orbit tells the group so nobody gets kicked.

#### 7. Release Calendar Integration
Orbit tracks release dates for:
- Streaming originals (Stranger Things, Andor, House of the Dragon)
- Major game releases tied to subscription services (Game Pass, Apple Arcade)
- Software feature drops

It proactively suggests: "Re-up Netflix on Nov 1 — Squid Game S3 drops Nov 15. Cancel Nov 30, save $23."

#### 8. Usage Signals (Optional)
Connect to screen time / app usage data. Orbit flags subscriptions you haven't opened in 30/60/90 days:
- "You haven't opened Headspace in 47 days. That's $12.99/mo. Pause for 60 days?"
- "You used Claude 4 times this week vs. 22 times last month. Project ended? Time to rotate?"

---

## Target Users

### Primary
- **25–45 year-old professionals** with 8+ active subscriptions and $200+/mo spend
- **AI power users** (developers, marketers, creators) juggling 3–5 AI tool subscriptions
- **Cord-cutters / streaming enthusiasts** rotating between SVOD services based on content

### Secondary
- **Families / roommate groups** coordinating shared plans (YouTube Premium Family, Apple One)
- **Freelancers / contractors** managing business + personal subscriptions separately
- **Students** optimizing tight budgets across learning tools and entertainment

### Market Size
- **44M** U.S. households with active SVOD subscriptions (Parks Associates)
- **100M+** Americans pay for at least one AI tool (Bango 2025)
- **273M** U.S. smartphone users with at least one in-app subscription
- TAM: ~$1.2B in potential subscription management SaaS revenue by 2028

---

## Tech Stack

### Mobile App (Primary)
- **React Native + Expo** — iOS + Android from one codebase
- **TypeScript** — type safety on financial data
- **React Navigation** — tab + stack navigation
- **Reanimated 3** — smooth calendar drag interactions
- **Skia** — high-performance charts for savings projections

### Backend
- **Node.js + Fastify** — API server
- **PostgreSQL** — subscription records, rotation schedules, family rosters
- **Redis** — session cache, job queue for renewal reminders
- **Prisma ORM** — type-safe DB access

### Integrations
- **Plaid** — bank account linking, transaction categorization
- **Apple StoreKit + RevenueCat** — in-app subscription ingestion
- **Google Play Developer API** — Play subscription status
- **TMDB API + JustWatch** — streaming release dates
- **Venmo / PayPal APIs** — family plan split payments

### AI Layer
- **OpenAI GPT-4o-mini** — categorization fallback, cancel-flow detection
- **Web scraping pipeline** — keeps cancel-URL database fresh per provider

### Infrastructure
- **Vercel** — mobile OTA updates (Expo EAS)
- **Railway / Fly.io** — backend hosting
- **Cloudflare R2** — document storage (lease letters, refund docs)
- **Sentry** — error tracking

---

## Monetization

### Free Tier
- Up to 5 tracked subscriptions
- Basic rotation calendar (no savings forecast)
- Free trial reminders (up to 3 active)
- 1 family plan coordination

### Orbit Plus — $4.99/mo or $39/yr (35% savings)
- Unlimited subscriptions
- Savings forecast engine
- Smart cancel with verification
- Release calendar integration
- Unlimited family plan coordination
- Usage signals (screen time integration)
- Priority chargeback helper

### Orbit Household — $8.99/mo
- Everything in Plus
- Up to 6 household members
- Shared rotation calendar
- Automatic Venmo split requests
- Group savings goals ("Save $500 on subs this quarter")

### Revenue Projections (Year 1)
- **10,000 free users** → 8% conversion = 800 paid
- Avg paid ARPU: $4.20/mo (blend of Plus + Household)
- MRR: ~$3,360 → **$40K ARR in Year 1**
- Year 2 target: 50K users, 12% conversion → **$250K ARR**
- Year 3 target: 200K users → **$1M ARR**

### Other Revenue
- **Affiliate** — When Orbit recommends a new service (e.g., "switch from Adobe to Figma + Affinity"), earn referral bounty
- **Anonymized insights** — Trend reports sold to fintech researchers (opt-in only)
- **B2B API** — Sell cancel-flow detection API to banks for their own apps

---

## Competitive Differentiation

| Feature | Rocket Money | Truebill (now Rocket) | Pine AI | **Orbit** |
|---------|:---:|:---:|:---:|:---:|
| Subscription discovery | ✅ | ✅ | ✅ | ✅ |
| Cancel for you | ✅ | ✅ | ✅ | ✅ |
| Rotation scheduling | ❌ | ❌ | ❌ | **✅** |
| Savings forecast | ❌ | ❌ | ❌ | **✅** |
| Family plan split | Basic | Basic | ❌ | **Deep** |
| Free trial sentinel | ❌ | Basic | ❌ | **Full** |
| Release calendar | ❌ | ❌ | ❌ | **✅** |
| Usage-based flags | ❌ | ❌ | ❌ | **✅** |
| Cancel verification | ❌ | ❌ | ❌ | **✅** |

**Key differentiator:** Orbit is the only app that treats subscriptions as *fluid* — not as static line items to cancel once. The mental model is "orchestrate" not "trim."

---

## Reddit Trend Evidence

| Signal | Source | Date |
|--------|--------|------|
| "$273/mo avg household subscription spend" | West Monroe via Readless | 2025–2026 |
| "53% of AI subscribers cancel/restart" | Bango "Rise of the AI Subscriber" | Nov 2025 |
| "47% of streamers say they pay too much" | Deloitte Digital Media Trends | 2025 |
| "39% canceled an SVOD in last 6 months" | Deloitte | 2025 |
| "89% underestimate subscription spend" | West Monroe | 2025 |
| "'Subscription creep' backlash grows" | Yahoo / TheCooldown | Jun 2026 |
| "NYT charging me for a sub I don't have" | r/personalfinance | May 2026 |
| "YouTube Premium same-household notice" | r/youtubepremium | Jun 2026 |
| "If you accidentally auto-renew on App Store..." | r/Frugal (trending) | Jun 2026 |
| "Set a phone reminder for trial expiry" | LegalClarity / TikTok trend | Jun 2026 |

---

## MVP Roadmap

### Phase 1 — Foundation (8 weeks)
- Plaid integration for subscription auto-discovery
- Manual add/edit subscriptions
- Basic dashboard with categories
- Free trial reminders (push + email)
- One-tap cancel deep links (manual user follow-through)

### Phase 2 — Rotation Engine (6 weeks)
- Visual rotation calendar (drag-and-drop)
- Savings forecast calculator
- Monthly cost projection chart
- Smart cancel flow (browser automation for top 20 services)

### Phase 3 — Social Layer (6 weeks)
- Family plan rosters
- Split payment automation (Venmo deeplinks)
- Group rotation coordination
- Household savings goals

### Phase 4 — Intelligence (6 weeks)
- Release calendar integration (TMDB, JustWatch)
- Usage-based pause suggestions (iOS Screen Time API, Android Usage Stats)
- AI-powered "optimal rotation" recommendations
- Cancel verification via transaction monitoring

### Phase 5 — Scale (8 weeks)
- Web app (Next.js)
- Browser extension (Chrome / Safari) for inline free-trial detection
- Apple Watch / Wear OS complications
- Public API

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Plaid API costs scale with users | Start with manual entry + receipt scanning; Plaid for paid tier only |
| Apple/Google change subscription APIs | Maintain fallback cancel-URL database; manual flow always available |
| Users don't trust app with financial data | Bank-level encryption; Plaid handles credentials (we never see them); SOC 2 from day 1 |
| Low conversion to paid | Generous free tier builds habit; family plan upsell is high-converting |
| Competition from built-in tools (Apple Subscriptions, Google Play) | Those tools don't rotate, forecast, or coordinate. Orbit's value is above the platform layer. |

---

## Why Now

1. **Subscription fatigue is peaking** — $273/mo is the tipping point where households actively seek relief.
2. **AI tools created a new category** of rotating subscriptions that didn't exist 3 years ago.
3. **Streaming churn is normalized** — 39% churned in 6 months. The behavior exists; the tooling doesn't.
4. **Family plan crackdowns** (YouTube, Netflix) are forcing coordination that didn't used to be necessary.
5. **Plaid + open banking APIs** make subscription ingestion finally reliable.

---

## Prototype

See `prototype/index.html` for an interactive HTML/CSS/JS demo showcasing:
- Rotation calendar drag-and-drop concept
- Savings forecast with real-time recalculation
- Free trial sentinel dashboard
- Family plan coordinator view

Open in any browser.

---

*Built by Duncan ⚔️ — idea generated from Reddit trend analysis on 2026-06-20.*
