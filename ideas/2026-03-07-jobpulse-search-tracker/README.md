# JobPulse - Personal Job Search Command Center

> **Your job search, finally organized.** Track every application, never miss a follow-up, and see patterns that help you land faster.

## The Problem

Job seekers are drowning in chaos:
- **50+ applications** scattered across LinkedIn, Indeed, company sites, and email
- **No single view** of where you stand — which are ghosting you, which need follow-ups?
- **Spreadsheet fatigue** — Google Sheets can't send reminders or track patterns
- **Lost context** — "Which resume did I send? What did the recruiter say?"
- **No accountability** — days turn into weeks without follow-ups

**The data is brutal:**
- Average job search takes 5+ months
- Most applications (75%+) receive no response
- Job seekers apply to 100-200 jobs on average
- Reddit r/jobs has 8,000+ posts about tracking frustration

## The Solution: JobPulse

A personal job search command center built for candidates, not employers.

### Core Features

**📋 Application Pipeline**
- Kanban board: Applied → Phone Screen → Interview → Offer → Rejected → Ghosted
- Add applications via quick-add, email parsing, or browser extension
- Track which resume/cover letter version you used

**⏰ Smart Follow-Up System**
- Auto-reminders based on stage (3 days for recruiter response, 1 week for post-interview)
- Escalating notifications: email → push → SMS
- "Ghosted" auto-detection after configurable silence period

**📊 Search Analytics**
- Response rates by source (LinkedIn vs. referral vs. cold apply)
- Time-to-response patterns
- Interview conversion rates
- Weekly/monthly velocity tracking

**📝 Interview Intelligence**
- Per-company notes and research
- Contact details and LinkedIn profiles
- Question bank from past interviews
- Offer comparison calculator

**🔗 Integrations**
- Gmail/Outlook email parsing for automatic status updates
- LinkedIn job save import
- Calendar sync for interview scheduling
- Salary data from Glassdoor/Levels.fyi

## Target Users

1. **Active job seekers** applying to 10+ jobs/week
2. **Career changers** running multi-month searches
3. **Tech professionals** with complex multi-stage interviews
4. **Recent grads** tracking dozens of entry-level applications
5. **Laid-off workers** needing structure during stressful transitions

## User Journey

```
1. Sign up → Quick onboarding (import existing applications or start fresh)
2. Add first application → Enter company, role, source, resume used
3. System sets follow-up reminder → 3 days by default
4. Status changes → Drag to new column or auto-detect from email
5. Interview scheduled → Sync to calendar, prep notes appear
6. Offer received → Compare against other offers
7. Weekly digest → See your velocity, response rates, what's working
```

## Competitive Analysis

| Feature | JobPulse | Teal | Huntr | Spreadsheet |
|---------|----------|------|-------|-------------|
| Free tier | ✅ Unlimited apps | Limited | Limited | ✅ |
| Smart reminders | ✅ | Basic | Basic | ❌ |
| Email parsing | ✅ | ❌ | ❌ | ❌ |
| Analytics | ✅ | Basic | Basic | Manual |
| Interview prep | ✅ | ✅ | ❌ | ❌ |
| Mobile app | ✅ | ❌ | ❌ | Awkward |
| Privacy-first | ✅ | ❌ | ❌ | ✅ |

**Differentiation:**
- **Privacy-first**: Your data stays yours. No selling to recruiters.
- **Generous free tier**: Unlimited applications, not 10.
- **Proactive, not reactive**: Nudges you to follow up before you forget.
- **Pattern recognition**: Shows you what's working, not just what happened.

## Monetization

**Freemium Model:**

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | Unlimited apps, basic pipeline, 1 week history |
| Pro | $9/mo | Full analytics, email parsing, unlimited history |
| Job Hunt | $29 one-time | 3-month Pro access, interview prep toolkit |

## Technical Architecture

**Stack:**
- Frontend: React + Tailwind CSS (mobile-first PWA)
- Backend: Node.js + PostgreSQL
- Email parsing: Gmail/Outlook API + AI extraction
- Notifications: Push + email + optional SMS
- Calendar: Google Calendar / Outlook sync

**Privacy Architecture:**
- End-to-end encryption for sensitive data
- No third-party analytics
- Data export/delete anytime
- Optional self-hosting

## Market Size

- 6.5M unemployed Americans at any given time
- 40M+ job changes per year in the US
- Average job search: 5 months
- TAM: $500M+ (based on 10M active searchers × $50/search average)

## MVP Scope (4 weeks)

**Week 1-2: Core Pipeline**
- Application CRUD
- Kanban board UI
- Status tracking

**Week 3: Reminders**
- Follow-up scheduling
- Email/push notifications
- Ghosted auto-detection

**Week 4: Analytics & Polish**
- Basic analytics dashboard
- Mobile-responsive design
- Onboarding flow

## Success Metrics

- **Activation**: % of users who add 5+ applications in first week
- **Engagement**: Daily active users / Weekly active users
- **Retention**: % still using after 30 days
- **Outcome**: Self-reported "landed a job" conversions
- **NPS**: Would you recommend to a job-seeking friend?

## Research Sources

- Reddit r/jobs, r/careerguidance (8,000+ posts about tracking frustration)
- HackerNews "Ask HN: How do you track job applications?"
- Survey data: 67% of job seekers lose track of applications
- Product Hunt: Teal, Huntr have traction but common complaints about limits

## Why Now?

- **2026 job market is volatile**: Tech layoffs continue, job hopping is normalized
- **Remote work = more applications**: People apply to 3x more jobs when location isn't a barrier
- **AI tools increasing application volume**: Easy Apply + AI cover letters = more chaos
- **Existing tools are stagnant**: Huntr/Teal haven't innovated in years

---

*Built with ⚔️ by Duncan | March 2026*
