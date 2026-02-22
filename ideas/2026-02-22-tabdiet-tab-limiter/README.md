# TabDiet 🍽️🗂️

**Tagline:** "Your browser's personal trainer — no more tab hoarding."

**Source:** X/Twitter  
**Date:** 2026-02-22

---

## The Problem

> "keeping hundreds of browser tabs open is the most distracting thing you can do — there should be an app that limits and forces you to keep it lean"
> — [@tofiakoury on X](https://x.com/tofiakoury/status/2025296633978655195)

Browser tab hoarding is an epidemic:
- **The average knowledge worker** has 20-30 tabs open at any time
- **Heavy tab hoarders** keep 100+ tabs open "just in case"
- Tabs represent **unfinished decisions** — each one is cognitive debt
- More tabs = **slower browser performance** + **higher RAM usage**
- Tab hoarding is linked to **anxiety, ADHD, and decision paralysis**

The problem isn't lack of awareness — people KNOW they have too many tabs. The problem is **lack of enforcement**. Every tab feels important enough to keep. There's no forcing function.

### Why Existing Solutions Fail

| Solution | Why It Fails |
|----------|--------------|
| Tab suspenders (OneTab, etc.) | Just moves the hoarding to a list — doesn't force decisions |
| Tab managers | More organization, not less tabs — enables hoarding |
| Browser limits | Non-existent in major browsers by default |
| Willpower | LOL |

---

## The Solution: TabDiet

**TabDiet** is a browser extension that enforces strict tab limits with progressive penalties. Think of it as a **fitness tracker for your browser** — it doesn't just count, it coaches and constrains.

### Core Concept: Progressive Tab Pressure

Like a personal trainer, TabDiet applies *increasing pressure* the more tabs you hoard:

1. **Green Zone (1-10 tabs):** Smooth sailing, encouraging feedback
2. **Yellow Zone (11-20 tabs):** Gentle warnings, "time to close some tabs"
3. **Orange Zone (21-30 tabs):** Aggressive prompts, productivity stats tank
4. **Red Zone (31+ tabs):** Tab jail activated — must close tabs to open new ones

---

## Key Features

### 1. Hard Tab Limit
Set a maximum tab count (default: 25). When you hit it:
- New tabs require closing an existing tab first
- "Tab Swap" modal: pick which tab to sacrifice
- No workarounds, no "just this once"

### 2. Tab Aging System
Tabs have a **freshness score** based on last visit:
- Fresh (visited today): 100%
- Stale (visited this week): 50%
- Rotten (visited 7+ days ago): 10%

Rotten tabs get auto-highlighted and suggested for closure. After 14 days untouched, they can be auto-closed with a recovery option.

### 3. The Guilt Counter
A persistent badge showing:
- Current tab count (color-coded by zone)
- "Tab calories" — estimated cognitive load
- Streak: days at under 15 tabs

### 4. Tab Bankruptcy
One-click "declare tab bankruptcy":
- Closes ALL tabs except current
- Saves closed tabs to a "Bankruptcy Archive"
- Clean slate, fresh start
- Tracks bankruptcy history ("3 bankruptcies this month")

### 5. Focus Sessions
- Temporarily limit to 5 tabs for "deep work" periods
- Auto-saves other tabs, restores after session
- Integrates with Pomodoro timer

### 6. Smart Tab Grouping (AI)
AI suggests which tabs belong together:
- "These 5 tabs are all about React hooks — archive as a group?"
- "You have 3 Amazon tabs — shopping session?"

### 7. Weekly Tab Report
- Peak tab count this week
- Average tabs per day
- Most hoarded domains (Reddit: 47 tabs closed!)
- Time spent in each zone
- "Tab efficiency score"

---

## User Interface

### Browser Extension Badge
```
╔═══════════╗
║    12     ║  ← Current tab count
║   🟢      ║  ← Zone indicator
╚═══════════╝
```

### Tab Limit Modal (when at limit)
```
╔══════════════════════════════════════════════════╗
║  ⚠️ TAB LIMIT REACHED (25/25)                   ║
╠══════════════════════════════════════════════════╣
║                                                   ║
║  To open a new tab, you must close one first:    ║
║                                                   ║
║  🔴 Reddit - 14 days old (ROTTEN)                ║
║  🟡 Amazon cart - 5 days old                     ║
║  🟢 GitHub PR - 2 hours old                      ║
║                                                   ║
║  Quick actions:                                   ║
║  [Close Oldest] [Close All Stale] [Tab Bankruptcy]║
║                                                   ║
╚══════════════════════════════════════════════════╝
```

### Sidebar Panel (Quick View)
```
╔══════════════════════════════════════════════════╗
║  📊 TAB DIET DASHBOARD                           ║
╠══════════════════════════════════════════════════╣
║  Current: 23 tabs    Zone: 🟠 ORANGE             ║
║  Streak: 🔥 4 days under 15 tabs                 ║
║                                                   ║
║  TAB BREAKDOWN:                                   ║
║  🟢 Fresh (today): 8                             ║
║  🟡 Stale (this week): 10                        ║
║  🔴 Rotten (7+ days): 5 ← CLOSE THESE!          ║
║                                                   ║
║  TOP HOARDERS:                                    ║
║  twitter.com — 6 tabs                            ║
║  docs.google.com — 4 tabs                        ║
║  github.com — 3 tabs                             ║
║                                                   ║
║  [📉 View Weekly Report]                         ║
║  [💣 Tab Bankruptcy]                             ║
║  [🎯 Start Focus Session]                        ║
╚══════════════════════════════════════════════════╝
```

---

## Monetization

### Free Tier
- Tab limit (fixed at 30)
- Basic aging indicators
- Weekly report (summary only)

### Pro ($4/month)
- Customizable tab limits (5-100)
- Full weekly analytics
- AI tab grouping suggestions
- Cross-device sync
- Focus session scheduling
- Export/archive features

### Team ($8/user/month)
- Team tab leaderboards (gamification)
- Admin-set max limits
- Productivity analytics dashboard
- Slack/Teams integration for reports

---

## Technical Architecture

### Browser Extension (Chrome/Firefox/Safari)

```
┌─────────────────────────────────────────┐
│           Background Script             │
├─────────────────────────────────────────┤
│  • Tab event listeners                  │
│  • Tab count enforcement               │
│  • Age tracking per tab                 │
│  • Sync with storage                    │
└─────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────┐
│             Popup UI                     │
├─────────────────────────────────────────┤
│  • Current status                       │
│  • Quick actions                        │
│  • Settings                             │
└─────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────┐
│           Content Script                 │
├─────────────────────────────────────────┤
│  • Tab limit modal injection            │
│  • Visual indicators                    │
└─────────────────────────────────────────┘
```

### Data Storage
- **Local:** Tab metadata, visit timestamps, settings
- **Sync (Pro):** Cross-device tab limits, reports, archives

---

## Competitive Landscape

| Product | Approach | TabDiet Difference |
|---------|----------|-------------------|
| OneTab | Collapse tabs to list | TabDiet *prevents* opening, OneTab *hides* |
| Tab Wrangler | Auto-close inactive | TabDiet is proactive, not reactive |
| Workona | Tab workspaces | More organization = more hoarding |
| Tree Style Tab | Vertical tabs | Layout change, not behavior change |
| **TabDiet** | **Hard limits + shame** | **Enforcement-first, not organization-first** |

---

## Market Validation

**Signals from X/Twitter:**
- "my brain is a browser with too many tabs open" — constant meme
- "keeping hundreds of browser tabs open is the most distracting thing you can do"
- Productivity communities constantly discuss tab limits

**Related Trends:**
- Digital minimalism movement
- "Attention diet" concept (Cal Newport)
- ADHD productivity tools market explosion
- Browser performance complaints (RAM usage)

**Target Users:**
1. Knowledge workers drowning in research tabs
2. ADHD individuals needing external constraints
3. Digital minimalists seeking enforcement
4. Teams wanting shared productivity standards

---

## Growth Strategy

### Phase 1: Chrome Extension Launch
- Free tier with hard 30-tab limit
- Product Hunt launch
- Target productivity subreddits (r/productivity, r/ADHD)
- Browser extension directories

### Phase 2: Virality Features
- Shareable "Tab Diet Score" cards
- "I declared Tab Bankruptcy" social badges
- Weekly email reports with shareable stats

### Phase 3: Team Features
- Slack bot: "/tabdiet leaderboard"
- Company-wide tab limit policies
- Productivity analytics for managers

---

## Name Alternatives Considered

- TabLimit ❌ (too generic)
- TabCop ❌ (negative connotation)
- LeanTabs ❌ (sounds like a startup framework)
- TabTrainer ❌ (sounds like exercise equipment)
- **TabDiet** ✅ (implies discipline, health, achievable goals)

---

## Prototype

See `prototype/` directory for an interactive HTML demo showing:
- Tab count badge
- Zone indicators
- Tab limit modal
- Dashboard panel

---

*Built with frustration, validated on X/Twitter, designed to actually work.*
