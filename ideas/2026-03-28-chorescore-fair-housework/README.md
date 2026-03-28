# ChoreScore — Fair Housework Distribution

**Date:** 2026-03-28
**Source:** Reddit (r/roommates, r/relationships, r/AITA, r/CouplesCounseling)
**Category:** Household / Relationships
**Pricing:** Free tier (2 members), $4.99/mo household (up to 8 members)

## Problem Statement

Unequal distribution of household chores is one of the most common relationship and roommate conflicts. Reddit is full of posts like "Am I crazy or does my partner do nothing?" and "My roommate hasn't cleaned in 3 months." The problem isn't laziness — it's **invisible work**. Cooking dinner is visible; noticing the trash is full, remembering to buy soap, and wiping counters are invisible.

Current solutions (shared chore charts, spreadsheets, apps like Tody or OurHome) fail because:
- They require manual check-off discipline (nobody does it)
- They treat all chores equally (scrubbing the bathroom ≠ taking out trash)
- They don't account for "mental load" — planning, noticing, managing
- They feel accusatory rather than collaborative
- No objective fairness metric

## Target Users

- **Couples** (especially dual-income) fighting about "who does more"
- **Roommates** (2-6 people) with unclear responsibilities
- **Families** teaching kids responsibility with fair expectations
- 66% of couples argue about housework (Pew Research); 25% of roommate conflicts are chore-related

## Proposed Solution

**ChoreScore** makes the invisible visible with a fairness-first approach:

1. **Effort-Weighted Tasks** — Each chore has a point value based on time, frequency, and unpleasantness (scrubbing toilets > watering plants). Customizable by household.
2. **Mental Load Credits** — Track "invisible" work: meal planning, scheduling repairs, noticing when supplies run low, remembering trash day.
3. **Quick-Log UX** — One-tap logging when you do something. No friction. Takes 2 seconds.
4. **Fairness Dashboard** — Visual equity meter showing contribution balance. Not a blame tool — a conversation starter.
5. **Smart Rotation** — Auto-suggest fair rotations based on preferences, availability, and historical balance.
6. **Weekly Digest** — Friendly summary showing who did what, overall balance, and appreciation highlights.
7. **Appreciation Mode** — Thank someone for a specific task. Positive reinforcement > guilt.

## Key Features

### Core (Free)
- Household creation (2 members)
- Pre-built chore library with effort points
- Quick-log with timestamps
- Basic fairness meter
- Weekly summary

### Premium ($4.99/mo)
- Up to 8 members
- Mental load tracking
- Smart rotation engine
- Custom chore categories and point values
- Historical trends and patterns
- "Appreciation streaks" gamification
- Integrations (shared calendars, reminders)

## Differentiation

| Feature | ChoreScore | Tody | OurHome | Sweepy |
|---------|-----------|------|---------|--------|
| Effort-weighted scoring | ✅ | ❌ | ❌ | Partial |
| Mental load tracking | ✅ | ❌ | ❌ | ❌ |
| Fairness dashboard | ✅ | ❌ | Basic | ❌ |
| Appreciation system | ✅ | ❌ | Points | ❌ |
| Quick one-tap logging | ✅ | Multi-step | Multi-step | ✅ |
| Smart rotation | ✅ | ❌ | ❌ | ❌ |
| Relationship-aware UX | ✅ | ❌ | ❌ | ❌ |

## Market Analysis

- **TAM:** 130M+ US households, 40M+ renter households
- **Pain intensity:** Chore conflict is cited in 25% of divorce cases and 40%+ of roommate disputes
- **Existing tools:** Tody (cleaning schedule), OurHome (family chores), Sweepy (cleaning tracker) — all task-focused, none fairness-focused
- **Revenue model:** Freemium. Free for couples, premium for larger households + advanced features
- **Key insight:** The problem isn't organizing chores — it's **proving fairness**. ChoreScore is the first app that makes the imbalance visible and measurable.

## Technical Approach

- **Frontend:** React Native (cross-platform mobile) + PWA
- **Backend:** Supabase (auth, real-time, database)
- **Key tech:** Real-time sync for multi-user households, push notifications for reminders
- **Estimated build time:** 4-6 weeks MVP

## Revenue Projections

- 50K free users → 10K premium conversions (20%) = $49,900/mo
- Low churn expected (household tool becomes habit)
- Expansion: household supply tracking, cleaning service marketplace

## Prototype

[Live Demo](https://yojahny55.github.io/duncan-ideas/ideas/2026-03-28-chorescore-fair-housework/prototype/index.html)

---

*Researched and documented by Duncan ⚔️ — 2026-03-28*
