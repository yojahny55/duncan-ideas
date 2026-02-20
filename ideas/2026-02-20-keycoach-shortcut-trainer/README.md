# KeyCoach - Keyboard Shortcut Trainer 🎹

**Date:** February 20, 2026  
**Source:** Reddit (r/SomebodyMakeThis)  
**Category:** Productivity / Education / Browser Extension

---

## Problem Statement

People know keyboard shortcuts exist and would save them time, but:
- **Learning curve is steep** — hundreds of shortcuts across different apps
- **No immediate feedback** — when you click, nothing reminds you of the shortcut
- **Context switching** — learning shortcuts requires pausing work to look them up
- **Forgetting** — even after learning, without practice, shortcuts fade from memory

> *"I want a browser extension that nags me every time I click something that could have been a shortcut on the keyboard. I want to remember all the possible shortcuts but heck I don't want to go find everything and learn one by one."*  
> — Reddit user, r/SomebodyMakeThis

---

## Target Users

1. **Knowledge workers** — Spending 8+ hours in browser-based tools (Gmail, Sheets, Docs, Notion)
2. **Developers** — Already value efficiency, want to optimize IDE and terminal shortcuts
3. **Students** — Building productivity habits early
4. **Productivity enthusiasts** — ADHD folks, efficiency nerds, anyone who loves optimization
5. **Corporate teams** — IT departments wanting to boost employee productivity

---

## Proposed Solution: KeyCoach

A browser extension that **watches your clicks** and **coaches you in real-time** when a keyboard shortcut was available. Over time, you naturally learn shortcuts through spaced repetition without interrupting your workflow.

### How It Works

1. **You click something** (e.g., Gmail's "Compose" button)
2. **KeyCoach detects it** and shows a subtle notification: *"Tip: Press `C` to compose faster"*
3. **You keep working** — the tip fades after a few seconds
4. **Spaced repetition** — KeyCoach tracks what you've learned and only reminds you about shortcuts you haven't mastered yet
5. **Progress tracking** — See your "shortcut fluency" increase over time

---

## Key Features

### Core (MVP)
- **Click-to-shortcut detection** — Detect clicks and show the keyboard alternative
- **Popular site support** — Gmail, Google Docs/Sheets, Notion, Slack, GitHub, VS Code Web
- **Non-intrusive notifications** — Subtle toast that doesn't block your work
- **Spaced repetition** — Track which shortcuts you've learned vs need practice
- **Daily stats** — "Time saved today: 3 minutes (47 shortcuts used)"

### Growth
- **Crowdsourced shortcuts** — Users contribute shortcuts for any website
- **Custom shortcuts** — Train on your own macros and custom keybindings
- **Team leaderboards** — Gamified learning for workplaces
- **Shortcut challenges** — Daily challenges to learn new shortcuts
- **Analytics dashboard** — See your most-used clicks and potential time savings

### Advanced
- **"Shortcut Golf"** — Challenges to complete tasks in minimum keystrokes
- **Site-specific profiles** — Different intensity levels for different sites
- **Accessibility mode** — For users who *need* keyboard navigation, not just want it
- **Integration with native apps** — Desktop companion for Figma, Slack, etc.

---

## User Experience

### Onboarding
1. Install extension → 30-second intro: "KeyCoach watches your clicks and teaches shortcuts"
2. Choose intensity: Gentle (1-2 tips/hour), Normal (5-10), Aggressive (every opportunity)
3. Select sites to monitor (or "all sites")
4. Start working — tips appear naturally

### Daily Flow
- Work normally — KeyCoach runs silently in background
- Click something with a shortcut → see tip in corner
- Optional: Press the shortcut immediately to dismiss tip + earn points
- End of day: "You learned 3 new shortcuts today. Time saved estimate: 5 min"

### Weekly Progress
- Dashboard shows shortcut fluency score (e.g., "Gmail: 78% fluent")
- Highlights: "You've stopped clicking 'Reply' — you now use `R` automatically!"
- Suggestions: "This week, focus on Google Docs formatting shortcuts"

---

## Technical Architecture

### Browser Extension Stack
- **Manifest V3** — Chrome extension (cross-browser with minor tweaks)
- **Content script** — Injects into pages, monitors DOM clicks
- **Background worker** — Manages shortcut database, spaced repetition logic
- **Storage** — Chrome storage sync for cross-device persistence
- **Shortcut database** — JSON mapping of selectors → keyboard shortcuts

### Detection Logic
```javascript
// Simplified detection flow
document.addEventListener('click', (event) => {
  const element = event.target;
  const shortcut = findShortcutFor(element, window.location.hostname);
  
  if (shortcut && !hasUserMastered(shortcut)) {
    showTip(`Press ${shortcut.keys} to ${shortcut.action}`);
    recordReminder(shortcut);
  }
});
```

### Shortcut Database Schema
```json
{
  "gmail.google.com": {
    "selectors": {
      "[data-tooltip='Compose']": {
        "keys": "C",
        "action": "compose a new email",
        "category": "navigation"
      },
      "[data-tooltip='Reply']": {
        "keys": "R",
        "action": "reply to email",
        "category": "actions"
      }
    }
  }
}
```

---

## Market Research

### Existing Solutions

| Product | Approach | Weakness |
|---------|----------|----------|
| **Shortcut.io** | Shortcut cheatsheets | Passive learning, no real-time coaching |
| **Vimium** | Keyboard navigation overlay | Replaces clicks with vim-style, steep learning |
| **Mouseless** | Mac app with quiz mode | Not browser-integrated, not contextual |
| **KeyCombiner** | Flashcard-style training | Separate from actual work, low retention |

### KeyCoach Differentiation
- **Real-time, in-context learning** — Learn while you work, not separately
- **Spaced repetition built-in** — Focus on shortcuts you're struggling with
- **Crowdsourced database** — Works on any site, not just popular ones
- **Non-intrusive** — Adjustable intensity, never blocks your workflow

### Market Size
- **Chrome extensions:** 2B+ active users globally
- **Productivity tools market:** $100B+ and growing
- **Corporate training:** Companies pay $1,000s per employee for productivity training
- **Keyboard enthusiasts:** Mechanical keyboard community = 1M+ Reddit members

---

## Monetization

### Freemium Model
- **Free:** 5 sites, basic spaced repetition, daily stats
- **Pro ($4/mo):** Unlimited sites, advanced analytics, team features, custom shortcuts

### Enterprise
- **Team plans ($3/user/mo):** Admin dashboard, team leaderboards, custom shortcut libraries
- **Enterprise:** SSO, custom deployments, training content integration

---

## Success Metrics

- **Adoption:** Chrome Web Store installs, active daily users
- **Engagement:** Tips shown per day, shortcuts learned per week
- **Retention:** D7, D30 retention rates
- **Impact:** Self-reported time savings, NPS scores
- **Revenue:** Pro/Enterprise conversion rates, MRR

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| **Annoying users** | Aggressive intensity control, "snooze" button, easy disable |
| **Privacy concerns** | All processing local, no click data sent to servers |
| **Inaccurate detection** | Community reporting, quick "wrong tip" feedback |
| **Limited site support** | Crowdsourcing + incentives for contributors |
| **Extension permissions** | Clear privacy policy, minimal permissions |

---

## Prototype

Interactive demo available in `/prototype` folder:
- Simulates the extension popup and notification UX
- Shows progress dashboard and shortcut database
- Test the "learn while you work" experience

---

## Next Steps

1. **Build MVP Chrome extension** — Gmail + Google Docs support
2. **Seed shortcut database** — Top 20 productivity sites
3. **Beta with 100 users** — Iterate on notification UX
4. **Launch on Chrome Web Store** — Free tier
5. **Build crowdsourcing system** — Community contributions
6. **Add spaced repetition** — Smart reminder scheduling
7. **Pro tier launch** — Advanced features, team plans

---

*Researched and documented by Duncan ⚔️*
