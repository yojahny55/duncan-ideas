# GoalStake 🎯💰

**Social goal betting with escrow** — Put your money where your mouth is, or bet against a friend who's all talk.

> "There should be an app where friends can bet on each others goals. Friend 1 says he's gonna lose 20 pounds in 2 months and friend 2 thinks he's bull shitting so they bet on it and the money is held in escrow on the app. Winner takes all, why isn't this a thing yet?"
> — [@BasedSatori](https://x.com/BasedSatori/status/2026427345775501360), Feb 24, 2026

## Problem Statement

People make goals all the time. Most fail because:
- **No real stakes** — It's easy to quit when nothing's on the line
- **No accountability partner** — Friends might be supportive but not invested
- **Friendly bets are awkward** — Who holds the money? How do you verify? What about disputes?

Existing solutions like Beeminder and StickK focus on self-commitment (pay a penalty if YOU fail). But they're missing the social dynamic: **What if your friend could bet AGAINST you** — putting their money on the line too?

## Target Users

1. **Goal Setters** — People making fitness, learning, career, or habit goals who need real stakes
2. **Skeptical Friends** — People who know their friend is "all talk" and want to profit from it
3. **Supportive Bettors** — Friends who want to financially back someone's success
4. **Friend Groups** — Social circles who enjoy friendly competition and accountability

## Proposed Solution

**GoalStake** — A mobile-first web app where friends create, challenge, and bet on each other's goals with real money held in escrow.

### Core Concept

1. **Create a Goal** — "I'll lose 20 lbs by April 1st"
2. **Stake Your Claim** — Put $50 on yourself
3. **Get Challenged** — Your friend bets $50 you'll fail
4. **Prove It** — Submit verification (photos, data, witnesses)
5. **Winner Takes All** — Escrow releases to the victor

## Key Features

### 1. Goal Creation & Stakes
- Set specific, measurable, time-bound goals
- Choose your stake amount ($5-$500+)
- Public or friends-only visibility
- Goal categories: Fitness, Learning, Finance, Habits, Career, Creative

### 2. Challenge System
- **Support Bet** — "I believe in you, here's $20 on your success"
- **Counter Bet** — "No way you pull this off, I'll match your $50"
- **Side Bets** — Third parties can bet on either outcome

### 3. Escrow & Payouts
- Secure payment processing (Stripe)
- Funds held in escrow until resolution
- Automatic payout to winner
- Optional: Split pot, charity donation, rollover to next goal

### 4. Verification System
- **Photo Proof** — Before/after with timestamps
- **Data Sync** — Connect fitness apps, Duolingo, etc.
- **Witness Sign-off** — Friends can verify completion
- **Judge Panel** — For disputed outcomes, neutral arbitration

### 5. Social Features
- Friend connections
- Goal feed
- Leaderboards (most goals crushed, biggest upsets)
- Trash talk / encouragement comments
- Achievement badges

### 6. Anti-Gaming Safeguards
- Cool-down period before goal start
- Verification requirements set upfront
- Dispute resolution process
- Trust scores based on history

## User Flows

### Flow 1: Create & Get Challenged
```
Goal Setter                          Friend (Skeptic)
    |                                      |
    |-- Creates goal: "Run marathon       |
    |   by June 1st" Stakes $100          |
    |                                      |
    |------ Sends challenge invite ------->|
    |                                      |
    |<----- Counter-bets $100 -------------|
    |       "No chance, you hate running"  |
    |                                      |
    |-- Both funds held in escrow          |
    |                                      |
    [... Training period ...]              |
    |                                      |
    |-- Submits marathon finish photo      |
    |   & Strava data                      |
    |                                      |
    |<----- Friend verifies/disputes ------|
    |                                      |
    |-- Winner gets $200 payout            |
```

### Flow 2: Group Goal Challenge
```
Friend Group (4 people)
    |
    |-- All pledge "Learn 100 Spanish words by March"
    |-- Each stakes $25
    |-- First to complete takes the $100 pot
    |-- OR everyone who completes splits the quitters' stakes
```

## Market Analysis

### Existing Solutions

| App | Model | Gap |
|-----|-------|-----|
| **Beeminder** | Self-commitment, pay penalty on fail | No social betting, no friend involvement |
| **StickK** | Self-commitment with anti-charity | One-sided stakes, no peer betting |
| **Habitica** | Gamification, virtual stakes | No real money, weaker commitment |
| **Pact/DietBet** | Pool betting on weight loss | Limited to weight, no friend challenges |

### GoalStake Differentiation

- **Two-sided stakes** — Friends bet FOR or AGAINST you
- **Any goal type** — Not limited to weight loss
- **Personal challenges** — 1:1 friend bets, not anonymous pools
- **Social dynamics** — Trash talk, rivalries, bragging rights
- **Flexible verification** — Multiple proof methods

### Market Size

- $14B gamification market (2024)
- 500M+ people use goal-tracking apps
- 60% of New Year's resolutions fail by February
- Growing interest in accountability apps

## Technical Architecture

### Frontend
- React + TypeScript
- Mobile-first PWA
- Tailwind CSS
- Real-time notifications

### Backend
- Node.js / Express (or Next.js API routes)
- PostgreSQL
- Stripe Connect for escrow
- Firebase for real-time updates

### Integrations
- Fitness: Apple Health, Google Fit, Strava, Fitbit
- Learning: Duolingo, Coursera, Udemy
- Habits: Any app with export/API
- Social: Deep links for sharing

## Monetization

1. **Transaction Fee** — 5% of pot on payout
2. **Premium Features** — Unlimited goals, custom verification, priority disputes
3. **Group Plans** — For offices/teams doing challenges together

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Gambling regulations | Structure as skill-based challenge, not chance; legal review |
| Payment disputes | Clear terms, verification requirements, judge system |
| Goal gaming | Trust scores, community reporting, verification standards |
| Friend drama | Anonymous judging option, cool-off periods |

## MVP Scope

### Phase 1 (MVP)
- User accounts + friend connections
- Goal creation with stakes
- Challenge/counter-bet system
- Simple photo verification
- Manual payout processing

### Phase 2
- Stripe escrow integration
- Automated payouts
- App integrations (Strava, etc.)
- Push notifications

### Phase 3
- Judge/arbitration system
- Group challenges
- Leaderboards
- Trust scores

## Success Metrics

- Goals created per user
- Challenge acceptance rate
- Goal completion rate
- Repeat usage (users who create 2+ goals)
- NPS from winners AND losers

## Why This Could Work

1. **Real stakes work** — Studies show financial commitment increases follow-through 3x
2. **Social accountability** — People perform better when others are watching
3. **Competition is motivating** — Especially when a friend is betting against you
4. **Clear winner/loser** — No ambiguity, no participation trophies
5. **Viral potential** — "I just took $50 from my friend who said he'd quit smoking"

---

## Prototype

See the interactive prototype in `/prototype/` — a mobile-first web app showcasing the core flows.

---

*Found via X/Twitter research on Feb 27, 2026*  
*Documented by Duncan ⚔️*
