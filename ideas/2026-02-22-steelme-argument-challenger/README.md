# SteelMe - AI Opinion Stress-Tester

**Tagline:** "Know your view. Know their best argument."

## Problem Statement

We're trapped in echo chambers. Social media algorithms feed us content we already agree with. We surround ourselves with like-minded people. When we encounter opposing views, they're usually weak strawman versions — easy to dismiss, reinforcing our belief that "the other side" is simply wrong or stupid.

But here's the uncomfortable truth: most contentious issues have legitimate perspectives on multiple sides. The smartest people you disagree with aren't idiots — they have reasons. You just never hear the *best* version of their argument.

**The cost:**
- Confirmation bias goes unchallenged
- Arguments stay weak because they're never stress-tested
- Empathy erodes as we caricature opposition
- Polarization deepens as we dismiss instead of engage
- Decision-making suffers from blind spots

## Target Users

- **Debaters & Thinkers** — Want to strengthen their arguments before making them
- **Students** — Preparing for debates, writing balanced essays
- **Professionals** — Making high-stakes decisions that need vetting
- **Politically Curious** — Tired of echo chambers, want to understand other perspectives
- **Writers & Journalists** — Need to represent opposing views fairly
- **Anyone Making Big Decisions** — Want to see what they might be missing

## Proposed Solution

**SteelMe** is an AI-powered opinion stress-tester. You enter your position on any topic, and it returns the *strongest possible counterargument* — a steelmanned version of the opposing view.

Not a weak strawman. Not "what idiots think." The strongest, most rational, most compelling argument against your position — the kind a brilliant, good-faith opponent would make.

### How It Works

1. **State Your Position** — "I believe X because Y"
2. **Get Steelmanned** — AI generates the best argument AGAINST your position
3. **Explore the Reasoning** — Understand WHY reasonable people believe the opposite
4. **Find the Common Ground** — See where both sides actually agree
5. **Strengthen Your View** — Update your position or fortify it against the best objections

## Key Features

### 🎯 Opinion Input
- Free-text opinion entry with context
- Pre-built topic templates (politics, ethics, business, personal decisions)
- Quick-capture mode for shower thoughts

### 🛡️ Steelman Generation
- AI generates the strongest counterargument, not a strawman
- Shows the *best* reasons someone would disagree
- Multiple tiers: "Good argument," "Strong argument," "Philosopher-grade argument"
- Sources & references when applicable

### 🤝 Common Ground Finder
- Identifies shared values between opposing positions
- Shows where you actually agree with "the other side"
- Reduces polarization by finding humanity

### 📊 Confidence Calibration
- Rate how confident you were before/after
- Track how often steelmanning changes your view
- See your "openness to update" score over time

### 💾 Opinion Journal
- Save positions and their best counterarguments
- Track how your views evolve
- Review past steelmannings to refresh your thinking

### ⚔️ Debate Prep Mode
- Generate both sides of an argument
- Practice responding to the strongest objections
- Export as structured talking points

## Why This Works

**Psychologically:** We're bad at generating counterarguments ourselves (confirmation bias). An external source forcing us to confront the best version of opposition is the only way to truly stress-test beliefs.

**Socially:** Understanding the strongest version of opposing views builds empathy and reduces the urge to dismiss or dehumanize those who disagree.

**Practically:** Better arguments come from anticipating the best objections, not the weakest ones.

## Market Research

### The Echo Chamber Crisis
- Research from University of Rochester (Feb 2026) shows algorithm-driven feeds increase polarization by limiting exposure to diverse views
- Studies show repeated exposure to like-minded content reinforces existing beliefs and "increases opinion polarization"
- Breaking echo chambers is now a recognized public health concern

### Existing Solutions & Their Gaps
| Solution | What It Does | Gap |
|----------|--------------|-----|
| Ground News | Shows multiple news sources | Doesn't *generate* counterarguments |
| AllSides | Labels media bias | Passive consumption, no active challenge |
| FlipFeed | Shows opposing Twitter feeds | Surface-level exposure, no depth |
| ChatGPT | Can steelman if asked | Not designed for this; requires prompt engineering |

SteelMe is the first app *designed specifically* for active opinion stress-testing with AI steelmanning.

### Monetization
- **Free Tier:** 5 steelmannings/week, basic arguments
- **Pro ($7/mo):** Unlimited steelmannings, philosopher-grade depth, debate prep, opinion journal
- **Teams ($15/user/mo):** Shared topics, team decision vetting, collaborative analysis

## Technical Approach

### Core AI Capabilities
- LLM fine-tuned on philosophical argumentation, debate transcripts, and steel-manning examples
- System prompt emphasizing "strongest version" and "good-faith disagreement"
- Multi-step generation: (1) identify core claim, (2) find strongest objections, (3) construct compelling counter-narrative

### Architecture
- Next.js web app + React Native mobile
- OpenAI/Claude API for steelmanning
- Supabase for user data and opinion journal
- Edge functions for fast response times

### Safety Considerations
- Content moderation to prevent generating harmful arguments
- Disclaimer that steelmanning ≠ endorsing
- Focus on understanding, not persuading to harmful positions

## Competition & Differentiation

| Competitor | Approach | SteelMe Advantage |
|------------|----------|-------------------|
| Ground News | Multi-source news | We're proactive, not passive |
| AllSides | Bias labels | We generate depth, not labels |
| ChatGPT | General AI | We're purpose-built for steelmanning |
| Debate.org | User debates | AI-generated, instant, private |

## Prototype

See `prototype/` directory for interactive demo.

### Demo Flow
1. Enter your opinion on a topic
2. Select depth level (quick/strong/philosopher)
3. View the steelmanned counterargument
4. Explore common ground
5. Save to opinion journal

## Success Metrics

- **Engagement:** % of users who request follow-up steelmannings
- **Impact:** Confidence change rates (before/after)
- **Retention:** Weekly active users, opinion journal size
- **Quality:** User ratings of steelman quality
- **Growth:** Viral sharing of steelmannings

## Why Now

- AI is finally good enough to generate nuanced, sophisticated arguments
- Polarization is at crisis levels — people want solutions
- Young generations are demanding tools for better thinking
- The "intellectual dark web" popularized steelmanning as a concept
- Remote/async discourse (Twitter, Reddit) benefits from considered responses

---

*"The test of a first-rate intelligence is the ability to hold two opposing ideas in mind at the same time and still retain the ability to function."* — F. Scott Fitzgerald

**SteelMe makes you smarter by making you wrestle with the best arguments against your own beliefs.**
