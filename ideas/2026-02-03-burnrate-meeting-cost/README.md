# 🔥 BurnRate - Real-time Meeting Cost Calculator

> Watch your meeting money burn in real-time. Make meetings matter.

## Problem Statement

Corporate meetings are a massive productivity drain. The average employee spends **31 hours per month in unproductive meetings** (source: [Atlassian research](https://www.atlassian.com/time-wasting-at-work-infographic)). Yet teams have no visibility into the actual **financial cost** of their meetings.

Key pain points:
- Meetings run over time with no accountability
- No awareness of the real dollar cost of "quick syncs"
- Junior employees afraid to end meetings that should be emails
- No data to justify reducing meeting culture

**Web research sources:**
- [Knack No-Code Micro SaaS Ideas](https://www.knack.com/blog/no-code-micro-saas-ideas/) - highlights underserved workflow tools
- [Micro SaaS 2026 Trends](https://accountabilitynow.net/micro-saas-ideas-2026/) - solo founder opportunities
- Meeting fatigue is a documented workplace epidemic post-pandemic

## Target Users

1. **Engineering Managers** - Want to protect team's focus time
2. **HR/People Operations** - Tracking meeting culture health
3. **Startup Founders** - Every minute counts when bootstrapping
4. **Scrum Masters/Agile Coaches** - Optimizing ceremony efficiency
5. **Remote Teams** - More prone to Zoom fatigue

## Proposed Solution

**BurnRate** is a web app that calculates and displays the real-time cost of any meeting. Users add attendees with their hourly rates, start the timer, and watch the cost counter climb. Creates immediate psychological impact and data for organizational change.

### How It Works
1. Create a meeting and add participants
2. Set hourly rates (or use role-based defaults)
3. Start the meeting timer
4. Watch the live cost counter tick up
5. Export meeting cost history for analysis

## Key Features

1. **Live Cost Counter** - Real-time display showing dollars/cents ticking up
2. **Participant Management** - Add/remove attendees with custom or default rates
3. **Role-Based Presets** - Quick add "Engineer", "Manager", "Designer" with typical rates
4. **Meeting Templates** - Save common meeting types (standup, planning, 1:1)
5. **Cost Thresholds** - Visual warnings at $100, $500, $1000 milestones
6. **Meeting History** - Track costs over time, see trends
7. **Share/Export** - Generate shareable summary for stakeholders
8. **Browser Extension** - One-click start from Google Calendar/Zoom
9. **Slack Integration** - Post meeting costs to channels
10. **ROI Calculator** - Compare meeting cost vs. async alternatives

## Technical Stack

- **Frontend**: Vanilla HTML/CSS/JS (prototype), React for production
- **Backend**: Node.js + Express or serverless functions
- **Database**: Supabase or Firebase for user data
- **Auth**: Magic link or Google OAuth
- **Hosting**: Vercel or Netlify
- **Analytics**: Plausible or PostHog

## Monetization Strategy

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 5 meetings/month, 5 participants max |
| Pro | $9/mo | Unlimited meetings, history, exports |
| Team | $29/mo | Team dashboard, Slack integration, admin controls |
| Enterprise | Custom | SSO, API access, custom integrations |

**Additional revenue:**
- Browser extension upsell
- White-label for consulting firms
- Meeting efficiency audits using aggregated (anonymized) data

## Competition Analysis

| Competitor | Weakness | BurnRate Advantage |
|------------|----------|-------------------|
| Meeting Timer apps | No cost calculation | Real dollar impact |
| Time tracking (Toggl, etc.) | Retrospective, not real-time | Live psychological impact |
| Calendar analytics (Clockwise) | Enterprise focus, complex | Simple, visceral, viral |
| No direct competitor | Most focus on scheduling, not cost | First-mover in meeting cost visualization |

## Why This Will Work

1. **Viral by nature** - Screenshots of "$2,847 standup" spread organically
2. **Immediate value** - No onboarding needed, instant aha moment
3. **Low CAC** - Word of mouth in engineering/product circles
4. **Sticky** - Once teams see costs, they can't unsee them
5. **Timely** - Post-pandemic meeting fatigue is at peak
6. **Freemium works** - Core value free, power users pay for history
7. **B2B expansion** - Natural path from individual to team to enterprise

## Prototype

See `/prototype` folder for a working HTML/CSS/JS demo with:
- Real-time cost counter
- Add/remove participants
- Role presets
- Meeting history (localStorage)
- Responsive, production-quality UI

---

*Created: February 3, 2026*
*Source: Web Research / Indie Hackers / Micro SaaS Trends*
