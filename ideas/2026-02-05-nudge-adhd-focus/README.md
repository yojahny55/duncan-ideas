# Nudge — ADHD Focus & Task Companion 🧠

> "Most productivity apps are built by naturally organized people. No wonder they don't work great for ADHD brains!" — r/ProductivityApps

## Problem Statement

People with ADHD face a fundamentally different productivity challenge than neurotypical users. Standard to-do apps, planners, and focus timers are designed with assumptions that break down for ADHD brains:

- **Task paralysis** — Long lists create overwhelm, not motivation
- **Time blindness** — No sense of how long tasks actually take
- **Context switching cost** — Getting distracted means losing 20+ minutes, not 2
- **Executive function gaps** — Deciding *what* to do is often harder than doing it
- **Shame spirals** — Missed deadlines and unchecked boxes create negative feedback loops
- **Hyperfocus traps** — Sometimes the problem isn't starting, it's *stopping*

Current apps fail because they treat ADHD as "laziness that needs more reminders." In reality, ADHD brains need external executive function support — the app should *think for you*.

### Reddit Sources

- [r/ADHD — "I wish there was an app that would take the mental load of having to remember everything"](https://www.reddit.com/r/ADHD/comments/1o01xfa/i_wish_there_was_an_app_that_would_take_the/) (Oct 2025)
- [r/ProductivityApps — "What apps work best for people with ADHD?"](https://www.reddit.com/r/ProductivityApps/comments/1hwvgh5/what_apps_work_best_for_people_with_adhd/) (Jan 2025)
- [r/ProductivityApps — "Productivity App That Actually Works for ADHD?"](https://www.reddit.com/r/ProductivityApps/comments/1gesjlv/productivity_app_that_actually_works_for_adhd/) (Oct 2024)
- [r/SaaS — Analysis of 9,300+ "I wish there was an app" posts](https://www.reddit.com/r/SaaS/comments/1q5lfur/i_analyzed_9300_i_wish_there_was_an_app_for_this/) — r/ADHD identified as highest-signal subreddit with most detailed feature requests (707 upvotes)
- [r/productivity — "Any app that will remind you to get back to work when distracted?"](https://www.reddit.com/r/productivity/comments/1310zxj/any_recommendations_for_something_like_an_app/) (33 upvotes)

## Target Users

- **Primary:** Adults with ADHD (diagnosed or self-identified) — estimated 366 million adults worldwide
- **Secondary:** Anyone with executive function challenges (anxiety, depression, autism comorbidity)
- **Tertiary:** Students, remote workers, and freelancers struggling with self-directed work

## Proposed Solution

**Nudge** is an ADHD-first focus companion that acts as an external executive function layer. Instead of presenting a giant task list and saying "go," Nudge:

1. Shows you **one task at a time** (anti-overwhelm)
2. **Decides what to do next** for you (defeats analysis paralysis)
3. **Tracks real time** vs estimated time (builds time awareness)
4. **Gently redirects** when you drift (non-judgmental nudges)
5. **Celebrates progress** visually (dopamine rewards, not shame)
6. **Protects against hyperfocus** (break reminders, self-care alerts)

## Key Features

### 1. 🎯 One-Task View
Never see your full list. Nudge shows exactly one task with a clear "Start" button. Reduces decision fatigue to zero.

### 2. 🎲 "Pick For Me" Button
Can't decide what to do? Hit the button and Nudge picks based on priority, energy level, and deadline proximity. Randomization defeats paralysis.

### 3. ⏱️ Time Reality Check
Before starting, estimate how long a task will take. After, see the actual time. Over weeks, build accurate time sense — the #1 skill ADHD brains struggle with.

### 4. 🧩 Auto Micro-Tasking
Big tasks automatically break into 10-15 minute chunks. "Clean the house" becomes "Clear the kitchen counter" → "Load dishwasher" → "Wipe stove." Each chunk is completable.

### 5. 💫 Momentum Visualization
A growing, organic visualization shows your day's progress. Not checkboxes — flowing, alive, beautiful. Each completed task adds to the visual. Makes progress *feel* real.

### 6. 🔔 Gentle Drift Detection
Configurable interval nudges: "Hey, still working on [task]?" Not an alarm — a warm, curious check-in. Customizable tone from playful to professional.

### 7. 🧘 Hyperfocus Shield
After 90 minutes on one task, Nudge intervenes: "You've been locked in for a while. Water? Stretch? Different task?" Prevents the "it's suddenly 3 AM" problem.

### 8. 🎉 Dopamine Rewards
Completing tasks triggers satisfying animations, sounds, and streak tracking. Not gamification — genuine celebration. "You did 4 tasks today. That's more than Tuesday!"

### 9. ⚡ Energy Matching
Rate your current energy (1-5). Nudge matches tasks to energy: high energy = hard/creative tasks, low energy = routine/admin. Works WITH your brain, not against it.

### 10. 📊 Weekly Reflection
Gentle weekly summary: when you're most productive, which tasks took longest, energy patterns. Insights, not judgments. "You tend to do your best work between 10-12 AM."

## Technical Stack

- **Frontend:** React Native (iOS + Android) or Progressive Web App
- **State Management:** Zustand (lightweight, ADHD-friendly DX)
- **Backend:** Supabase (auth, database, real-time)
- **Notifications:** Firebase Cloud Messaging / Web Push API
- **Analytics:** PostHog (privacy-first, self-hostable)
- **Animations:** Framer Motion / Lottie
- **AI (optional):** OpenAI API for smart task breakdown suggestions
- **Offline:** Service workers + IndexedDB for offline-first

## Monetization Strategy

### Freemium Model
- **Free tier:** Core features — one-task view, timer, basic stats, 3 tasks/day
- **Pro ($4.99/mo):** Unlimited tasks, energy matching, AI micro-tasking, weekly insights, custom nudge sounds
- **ADHD Coach tier ($9.99/mo):** AI-powered task breakdown, pattern analysis, accountability check-ins, export for therapist

### Why This Pricing Works
- ADHD community has documented willingness to pay for tools that ACTUALLY work
- Lower than competitors (Todoist $5/mo, Things $50 one-time, Motion $19/mo)
- Free tier is genuinely useful — conversion through demonstrated value

## Competition Analysis

| App | ADHD-Friendly? | Key Weakness |
|-----|----------------|-------------|
| **Todoist** | ❌ | List-based, overwhelming, no ADHD features |
| **Things 3** | ❌ | Beautiful but assumes executive function |
| **Forest** | 🟡 | Timer only, no task management |
| **Focusmate** | 🟡 | Body doubling but requires scheduling |
| **Tiimo** | ✅ | Closest competitor — but rigid schedule-based, not adaptive |
| **Llama Life** | 🟡 | Timeboxing focus, but still shows full list |
| **Structured** | ❌ | Calendar-based, assumes time awareness |

### Nudge's Differentiation
1. **One-task-at-a-time** philosophy (no other app does this consistently)
2. **Energy-aware** task matching (unique feature)
3. **Time reality tracking** (builds the skill, not just tracks it)
4. **Non-judgmental design language** throughout (no red warnings, no "overdue!")
5. **Hyperfocus protection** (competitors only address distraction, not hyperfocus)

## Why This Will Work

1. **Massive underserved market** — 366M adults with ADHD globally, growing diagnosis rates
2. **Highest-signal Reddit community** — Per analysis of 9,300+ posts, r/ADHD provides the most detailed feature requests of ANY subreddit
3. **Existing tools fail** — Even ADHD-aware apps are designed with neurotypical assumptions
4. **Strong word-of-mouth** — ADHD community is extremely active online and shares recommendations constantly
5. **Retention advantage** — ADHD users who find a tool that works become fiercely loyal (high switching cost of learning new systems)
6. **Growing awareness** — ADHD diagnosis and awareness are at all-time highs, destigmatization drives market growth

---

*Researched by Duncan ⚔️ | Source: Reddit (r/ADHD, r/ProductivityApps, r/SaaS, r/SideProject) | 2026-02-05*
