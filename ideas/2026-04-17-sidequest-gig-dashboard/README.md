# SideQuest 🎮 — Multi-App Gig Earnings Dashboard

**The command center for gig workers who drive for more than one app.**

## Problem

70M+ Americans did gig work in 2025. Most active drivers work across 2-4 platforms (Uber + Lyft + DoorDash + Instacart). Each app has its own earnings screen, its own stats, its own timeline. Nobody shows you the full picture:

- **How much did I actually make today across all apps?** You're manually adding up numbers from 4 different apps.
- **What's my real hourly rate?** After gas, maintenance, and self-employment tax? Each app claims you're making $25-35/hr. The real number after expenses is often $12-18.
- **Which app should I turn on right now?** Surge pricing, busy zones, and demand shift constantly. You're guessing.
- **How much do I owe in taxes?** 1099 workers get crushed at tax time because they didn't track quarterly.

Existing solutions: Mileage trackers (Everlance, Stride) track *deductions* but not *earnings*. Spreadsheet templates exist but require manual entry. Nobody owns the "unified gig dashboard" position.

## Target Users

- **Primary:** Multi-platform gig drivers (Uber/Lyft/DoorDash/Instacart/Amazon Flex) — estimated 8-12M active in the US
- **Secondary:** Single-platform drivers who want better financial insights
- **Tertiary:** Gig couriers, TaskRabbit, Rover walkers

## Proposed Solution

**SideQuest** aggregates earnings, hours, and expenses across all gig platforms into one real-time dashboard.

### Core Loop
1. **Connect apps** — link Uber, Lyft, DoorDash, Instacart, Amazon Flex (read-only earnings access)
2. **See everything** — unified daily/weekly/monthly earnings across all platforms
3. **Know your real rate** — auto-calculated after expenses and estimated taxes
4. **Pick the best app** — live "which app pays most right now" recommendation based on your historical data + current surge

### Key Features

1. **Unified Earnings Dashboard** — one screen, all apps, real-time totals. Daily/weekly/monthly/annual views. Per-app breakdowns with color coding.

2. **True Hourly Rate** — after gas (IRS mileage rate or actual), maintenance estimate, self-employment tax (15.3%), and health insurance. The number that actually matters.

3. **Smart Heatmap** — based on YOUR historical earnings by hour/day/location. "You earn 40% more on Thursday 6-8pm on DoorDash vs Uber." Not generic advice — your personal data.

4. **Tax Estimator** — running quarterly tax estimate based on actual earnings. Reminders before quarterly deadlines. Export Schedule C data for your accountant.

5. **Multi-App Timer** — start/stop per-app timers to track exactly how long you're on each platform. Auto-detect when you switch based on screen time.

6. **Streak & Goals** — daily/weekly earning goals with progress bars. Streak tracking for days worked. Gamification that actually motivates.

7. **Weekly Report** — push notification every Sunday with your week's summary: total earnings, best app, worst app, true hourly rate, tax reminder.

## Market Research

### Competitors
| App | What it does | Gap |
|-----|-------------|-----|
| Everlance | Mileage + expense tracking | Doesn't show earnings per platform |
| Stride | Tax + benefits for gig workers | No earnings aggregation |
| Gridwise | Driver analytics | Focused on driving data, not financial dashboard |
| Spreadsheet templates | Manual tracking | Manual, no real-time, no tax estimates |

### Differentiation
- **Earnings-first**, not deduction-first. Existing tools optimize for tax deductions. SideQuest optimizes for *making more money*.
- **Multi-platform by default** — not an afterthought.
- **True hourly rate** — the metric every gig worker actually cares about.
- **Personal heatmaps** — your data, not industry averages.

### Market Size
- 70M+ US gig workers (2025)
- 8-12M active multi-platform drivers
- Average gig worker earns $15-25/hr, works 20-35 hrs/week
- Growing 10-15% YoY as more workers supplement income

## Business Model

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | Connect 2 apps, daily dashboard, basic hourly rate |
| **Pro** | $4.99/mo | Unlimited apps, smart heatmap, tax estimator, weekly reports, goals |
| **Premium** | $9.99/mo | All Pro + AI recommendations, quarterly tax filing assist, priority support |

**Why it works:** A Pro user spending $5/mo to discover they should shift 3 hours from Uber to DoorDash (netting +$45/week) sees immediate ROI. The tax estimator alone saves hundreds at filing time.

## Technical Feasibility

- **App integrations:** Most gig apps don't have public earnings APIs. Approach: screen scraping with user consent (Plaid-style), or manual quick-entry with receipt/photo OCR
- **Phase 1 (MVP):** Manual earnings entry + auto-calculation. Still 10x better than 4 separate apps.
- **Phase 2:** OCR receipt/earnings screenshot parsing for semi-automated entry
- **Phase 3:** Partnerships or reverse-engineered integrations where possible
- **Platform:** Mobile-first (iOS/Android), PWA for web

## Prototype

A web-based dashboard showing the unified earnings view with true hourly rate calculation.

[🔗 Live Demo](https://yojahny55.github.io/duncan-ideas/ideas/2026-04-17-sidequest-gig-dashboard/prototype/index.html)

---

*Source: Web research (Reddit r/uberdrivers, r/doordash_drivers, r/gigwork, Deloitte 2026 gig economy data)*
*Date: April 17, 2026*
