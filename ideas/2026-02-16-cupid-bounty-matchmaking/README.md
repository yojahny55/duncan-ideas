# CupidBounty 💘💰

**AI-powered matchmaking bounty marketplace** — Set a bounty for finding your soulmate. Friends, family, or skilled matchmakers earn rewards when their introductions lead to relationships.

## Source

**X/Twitter** — [@lostinproxies](https://x.com/lostinproxies/status/2023266618856653032):
> "Someone should build a matchmaking bounty app. People who are looking for a partner would set a bounty and if you set them up with someone and they end up getting married you would get paid that bounty. I feel like this would be huge"

## Problem Statement

**Finding a life partner is broken:**

1. **Dating apps are exhausting** — Endless swiping, ghosting, and shallow connections
2. **Matchmaking is unscalable** — Friends/family want to help but forget or don't prioritize
3. **Professional matchmakers are expensive** — $5K-$50K+ for services
4. **No incentive alignment** — People who know great matches have no motivation to act on it
5. **Trust deficit** — Dating apps optimize for engagement, not successful relationships

**The insight:** Everyone knows someone who'd be perfect for someone else. They just don't act on it because there's no reward and it's awkward to push.

## Target Users

### Seekers (People Looking for Partners)
- Busy professionals tired of dating apps
- People who trust friends' judgment over algorithms
- Those who've had success with setups before
- Anyone willing to invest in finding "the one"

### Matchmakers (Bounty Hunters)
- Friends and family who love playing matchmaker
- Professional matchmakers wanting scale
- Social butterflies who know everyone
- People with large networks (realtors, event planners, etc.)

## Proposed Solution

**CupidBounty** — A marketplace where:

1. **Seekers** create profiles and set bounties ($100 - $10,000+)
2. **Matchmakers** browse seekers and suggest potential matches
3. **AI** helps matchmakers find compatible suggestions from their network
4. **Milestones** trigger partial payouts (match accepts, first date, 6 months, engaged)
5. **Escrow** holds funds until milestones are verified

## Key Features

### For Seekers
- **Bounty Creation** — Set your prize, preferences, and dealbreakers
- **Profile Privacy Levels** — Control who sees what (network-only vs. public)
- **Match Review Queue** — Accept/decline suggested matches
- **Milestone Tracker** — See relationship progress affecting payouts
- **AI Dealbreaker Filter** — Auto-reject incompatible suggestions

### For Matchmakers
- **Seeker Discovery** — Browse active bounties by amount, location, preferences
- **Network Import** — Connect social accounts to find matchable singles
- **AI Compatibility Scorer** — Get confidence scores before suggesting
- **Earnings Dashboard** — Track pending, earned, and withdrawn bounties
- **Reputation System** — Build credibility with successful matches

### Trust & Safety
- **Escrow System** — Funds held until milestones verified
- **Milestone Verification** — Both parties confirm relationship status
- **Anonymous Suggestions** — Matchmakers can suggest without revealing identity
- **Report System** — Flag fake seekers or scam matchmakers
- **Refund Policy** — Clear terms for bounty refunds

### AI Features
- **Compatibility Scoring** — Predict match success from profile data
- **Network Analysis** — Help matchmakers find ideal matches in their contacts
- **Conversation Starters** — AI-generated icebreakers for introductions
- **Red Flag Detection** — Identify potentially problematic profiles

## Payout Structure (Default)

| Milestone | Payout | Verification |
|-----------|--------|--------------|
| Match accepts intro | 10% | Both confirm |
| First date completed | 20% | Both confirm |
| Dating 3+ months | 30% | Both confirm |
| Engaged | 40% | Photo/announcement |
| **Total** | **100%** | — |

*Seekers can customize milestone weights*

## Business Model

1. **Platform Fee** — 15% of all bounty payouts
2. **Premium Seeker Features** — $29/mo for priority visibility, AI filtering
3. **Pro Matchmaker Tools** — $49/mo for advanced network analysis, CRM
4. **Bounty Boosts** — Pay to feature your bounty
5. **Corporate Plans** — Companies subsidize bounties for employees

## Market Analysis

### Why Now?
- Dating app fatigue at all-time high (Tinder MAU down 30% since 2023)
- Gig economy normalized bounty/reward models
- AI makes compatibility scoring accessible
- Remote work expanded people's networks globally

### Competition
| Competitor | Weakness |
|------------|----------|
| Dating apps | No incentives for friends to help |
| Professional matchmakers | $5K-$50K, not scalable |
| "Blind date" apps | No accountability for matchmakers |
| Facebook Dating | No reward mechanism |

### Differentiator
**Aligned incentives** — Matchmakers only get paid for successful outcomes.

## Technical Architecture

```
┌──────────────────────────────────────────────────────────┐
│                    CupidBounty Platform                   │
├──────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│  │   Seeker    │  │ Matchmaker  │  │    Admin    │       │
│  │   Portal    │  │   Portal    │  │  Dashboard  │       │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘       │
│         │                │                │               │
│  ┌──────┴────────────────┴────────────────┴──────┐       │
│  │              API Gateway (GraphQL)             │       │
│  └──────────────────────┬────────────────────────┘       │
│                         │                                 │
│  ┌──────────────────────┴────────────────────────┐       │
│  │                 Core Services                  │       │
│  ├─────────────┬─────────────┬─────────────┬─────┤       │
│  │   Profile   │    Match    │   Escrow    │ AI  │       │
│  │   Service   │   Service   │   Service   │     │       │
│  └─────────────┴─────────────┴─────────────┴─────┘       │
│                         │                                 │
│  ┌──────────────────────┴────────────────────────┐       │
│  │          PostgreSQL + Redis + S3               │       │
│  └────────────────────────────────────────────────┘       │
├──────────────────────────────────────────────────────────┤
│  External: Stripe (escrow) │ Twilio │ Social APIs        │
└──────────────────────────────────────────────────────────┘
```

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Fake milestone claims | Require both parties to verify |
| Scam seekers (never pay) | Escrow with upfront deposit |
| Low matchmaker supply | Launch in tight-knit communities first |
| Privacy concerns | Granular privacy controls, anonymous mode |
| Awkward rejections | Anonymous suggestions, gentle decline messages |

## Go-to-Market

### Phase 1: Community Launch
- Target wedding vendors (photographers, planners) as matchmakers
- Launch in 3 tight-knit cities (Austin, Nashville, Charleston)
- Seed with $500 bounties from beta seekers

### Phase 2: Network Effects
- Referral bonuses for both sides
- "Cupid Leaderboards" with top matchmakers
- Success story content marketing

### Phase 3: Scale
- Celebrity/influencer matchmakers
- Corporate wellness partnerships
- International expansion

## Success Metrics

| Metric | Target (Year 1) |
|--------|-----------------|
| Active seekers | 50,000 |
| Active matchmakers | 10,000 |
| Matches made | 25,000 |
| Relationships (3+ months) | 5,000 |
| Engagements | 500 |
| GMV (bounties) | $5M |

## Why This Will Work

1. **Incentive alignment** — Everyone benefits from successful matches
2. **Network effects** — Each user brings potential matches AND matchmakers
3. **Trust** — Friends know you better than algorithms
4. **Gamification** — Matchmakers compete, earn reputation, flex stats
5. **Premium willingness** — People spend $1K+ on dating coaches already

---

## Prototype

See `prototype/` for a working HTML/CSS/JS demo.

**Demo features:**
- Seeker bounty creation flow
- Matchmaker discovery feed
- Match suggestion interface
- Milestone tracking dashboard
- Earnings overview

---

*Idea documented by Duncan ⚔️ — February 16, 2026*
