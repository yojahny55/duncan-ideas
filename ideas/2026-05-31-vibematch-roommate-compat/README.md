# VibeMatch — Roommate Compatibility Scorer

## The Problem

Moving in with someone is a massive decision based on vibes and hope. 60% of roommate arrangements end in conflict within the first year. People avoid the awkward "so what are your habits?" conversation and discover incompatibilities too late — when they're locked into a lease.

Existing roommate apps (Roomies, SpareRoom, Roomster) are **marketplaces** for finding people. Nobody helps you **assess compatibility** with someone you're already considering.

## The Solution

VibeMatch: a 5-minute lifestyle quiz that both people take independently. Get a compatibility score (0-100) with specific friction predictions and conversation starters for the awkward stuff.

## How It Works

1. **Create a Room** — Generate a shareable link
2. **Both Take the Quiz** — 25 questions across 7 lifestyle dimensions
3. **Get Your Score** — Compatibility breakdown with conflict predictions
4. **Talk It Out** — Guided conversation starters for weak spots

### 7 Compatibility Dimensions

| Dimension | What It Measures |
|-----------|-----------------|
| 🌙 Sleep Schedule | Bedtime, wake time, weekend vs weekday |
| 🧹 Cleanliness | Tidiness tolerance, chore philosophy, bathroom standards |
| 🎉 Social Life | Guests frequency, party tolerance, introvert/extrovert |
| 🔊 Noise Tolerance | Music, TV, alarms, phone calls, quiet hours |
| 🌡️ Temperature | AC/heating preferences, window open/closed |
| 🍽️ Sharing | Food, supplies, space, boundaries |
| 💰 Finances | Bill splitting, shared purchases, budget consciousness |

### Key Features

- **Compatibility Score** — 0-100 with color coding (🔴 <60, 🟡 60-75, 🟢 75+)
- **Friction Predictions** — "78% chance of conflict over bathroom cleanliness"
- **Dealbreaker Detection** — Automatic flagging of incompatible hard lines
- **Conversation Starters** — "You both marked 'quiet after 10pm' but defined it differently — discuss!"
- **Lease Readiness Check** — "You've discussed 4/7 dimensions. Talk about finances before signing."
- **Anonymous Mode** — Share results without revealing which answers were yours
- **History** — Compare multiple potential roommates side by side

## Market Size

- 44M+ US renters
- 30% of renters have roommates (~13M people)
- 5M+ new roommate pairings per year (college, post-grad, urban)
- Average cost of a bad roommate situation: $2,000-5,000 (broken leases, moving costs)
- College market alone: 20M+ students, 60% have roommates

## Differentiation

| Competitor | What They Do | What They Don't |
|-----------|-------------|----------------|
| Roomies/SpareRoom | Find roommates | Assess compatibility |
| Roommate agreement templates | Legal docs | Lifestyle matching |
| Generic personality tests | Fun but vague | Roommate-specific |
| "Just talking" | Awkward, incomplete | Structured, comprehensive |

**VibeMatch is the only roommate-specific compatibility assessment tool.**

## Business Model

- **Free** — Create 3 rooms, basic compatibility score
- **VibeMatch Pro** ($3.99/mo) — Unlimited rooms, friction predictions, conversation guides, side-by-side comparisons
- **VibeMatch Campus** ($1.99/mo) — Student pricing with .edu verification
- **Property Manager** ($49/mo) — White-label for apartment complexes, include in onboarding

## Technical Feasibility

- **Frontend:** React Native / PWA
- **Backend:** Simple scoring algorithm (weighted dimension matching)
- **No ML required** — rule-based scoring with statistical conflict models
- **MVP:** 2-3 weeks for a solo developer
- **Scale:** Serverless, low compute costs

## Why Now

- Remote work drove urban migration — more strangers sharing apartments
- Housing costs forcing more people into roommate situations
- Gen Z prefers structured, app-mediated communication over awkward face-to-face
- Housing market shows no signs of easing — roommate demand will grow

## Sources

- Web research (renter statistics, roommate conflict studies)
- Reddit r/badroommates (250K+ members), r/roommates (100K+)
- Pew Research housing data 2026

---

*Daily App Idea by Duncan ⚔️ — May 31, 2026*
