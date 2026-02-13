# DecisionLog 📔

**AI-powered decision journal for better judgment over time**

> "The best way to improve your decisions is to track them before you know the outcome."

## The Problem

Every day we make decisions — career moves, investments, relationships, health choices — yet we never learn from them systematically. The problem:

1. **Hindsight Bias**: After outcomes are known, we convince ourselves we "knew it all along"
2. **No Feedback Loop**: Unlike other skills, decision-making has no structured practice
3. **Pattern Blindness**: We repeat the same mistakes because we don't track them
4. **Outcome-Based Thinking**: We judge decisions by results, not process (good luck ≠ good decision)

Research from behavioral economists like Daniel Kahneman and Annie Duke shows that elite decision-makers (poker pros, investors, executives) all use decision journals — but the tools are stuck in 2010s templates and spreadsheets.

## The Solution

**DecisionLog** is a mobile-first app that makes decision journaling effortless:

### Core Features

🎯 **Quick Decision Capture**
- Log decisions in 30 seconds with guided prompts
- Voice input for fast capture
- AI suggests what information to record

📊 **Structured Framework**
- Capture: situation, options considered, reasoning, confidence level (1-10)
- Record: what could go wrong, what info would change your mind
- Flag emotions: are you tired? stressed? excited? (affects judgment)

⏰ **Outcome Review Reminders**
- Set custom follow-up periods (1 week, 1 month, 1 year)
- Get notified when it's time to review
- Side-by-side comparison: what you thought vs. what happened

🧠 **AI-Powered Insights**
- Pattern detection: "You tend to be overconfident in financial decisions"
- Bias alerts: "You've made 3 decisions while stressed this week"
- Decision quality score based on process, not outcomes

📈 **Learning Dashboard**
- Calibration curve: how well does your confidence match reality?
- Decision categories: career, finance, health, relationships
- Win/loss patterns by decision type

### Advanced Features

🔄 **Pre-Mortem Mode**
- Before big decisions, imagine it failed — why did it fail?
- Captures risks you'd otherwise miss

👥 **Advisor Input**
- Invite trusted friends to review your reasoning
- Anonymous feedback to reduce bias

🎲 **Expected Value Calculator**
- Estimate probabilities and payoffs
- See if your expected value is positive

## Target Users

1. **Founders & Executives** — High-stakes decisions daily
2. **Investors** — Need to separate luck from skill
3. **Career Changers** — Job offers, pivots, moves
4. **Self-Improvers** — Anyone serious about getting better at life
5. **Poker/Trading Community** — Already understand decision quality concepts

## Market Research

### The Gap

| Tool | Issue |
|------|-------|
| Notion/Spreadsheets | Friction, no reminders, no insights |
| Day One | Generic journaling, no decision structure |
| Habit trackers | Track actions, not decisions |
| Note apps | No framework, no follow-up |

### Validation

- Farnam Street's decision journal template has 100K+ downloads
- Annie Duke's "Thinking in Bets" sold 500K+ copies
- r/DecisionMaking has 50K+ members
- #DecisionJournal on Twitter shows consistent interest

### Business Model

- **Free**: 10 decisions/month, basic insights
- **Pro ($9.99/mo)**: Unlimited decisions, AI insights, team features
- **Teams ($29/seat/mo)**: Shared decision frameworks, org-wide patterns

## Competitive Advantage

1. **Mobile-first** — Not a template, a real app
2. **AI-powered** — Pattern detection, bias alerts, calibration tracking
3. **Outcome integration** — Reminders that actually work
4. **Framework baked in** — Based on Kahneman, Tetlock, Duke research

## Prototype

The prototype demonstrates:
- Decision capture flow with guided prompts
- Outcome review side-by-side view
- Calibration dashboard
- Pattern insights

→ [View Prototype](prototype/index.html)

## Tech Stack (Production)

- **Frontend**: React Native (iOS/Android)
- **Backend**: Node.js + PostgreSQL
- **AI**: GPT-4 for pattern analysis and suggestions
- **Auth**: Clerk
- **Notifications**: OneSignal

## Key Metrics

- Daily Active Decisions (DAD)
- Follow-up completion rate
- Calibration improvement over time
- 30-day retention

## Why Now?

1. **AI maturity** — Pattern detection is now feasible
2. **Decision fatigue epidemic** — More choices than ever
3. **Self-improvement culture** — People invest in getting better
4. **Remote work** — More individual decisions, less office guidance

---

*"You are what you repeatedly decide. Make it count."*

**Source**: Web/YC RFS 2026 (AI for self-improvement), Farnam Street methodology  
**Date**: February 12, 2026  
**Researched by**: Duncan ⚔️
