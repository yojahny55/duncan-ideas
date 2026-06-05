# ScopeGuard — Freelancer Scope Creep Defense

**Tagline:** Your scope bodyguard. Log every request, flag the creep, get paid for every hour.

## Problem

67% of freelancers do unpaid work because of scope creep (Freelancers Union, 2026). 57% of agencies lose $1,000–$5,000/month to unbilled scope expansion (Ignition). Solo freelancers lose $7,800–$15,600/year — that's 2+ hours/week of free work at $75–$150/hr.

Scope creep doesn't arrive as a monster. It shows up as "one small thing":
- "Can you also tweak the About page?"
- "I know we said 3 pages, but could we add a blog?"
- "This is great — can we try it in blue too? And green?"

Each request looks reasonable alone. Together, they're 20 extra unpaid hours.

**Current solutions don't work:**
- Contracts are static — they don't track what's happening in real-time
- Project management tools (Asana, Trello) log tasks but don't flag scope creep
- Freelancers say "I'll just do it" to avoid confrontation
- Invoicing tools only capture what you bill, not what you gave away

## Proposed Solution

**ScopeGuard** — a scope boundary defender that lives alongside your freelance projects.

1. **Define Scope**: Enter your project deliverables, revision limits, meeting hours, and response time SLA
2. **Log Every Request**: Forward client emails, screenshot Slack messages, or quick-type requests
3. **AI Scope Analysis**: Each request gets classified as ✅ In-Scope, ⚠️ Borderline, or 🔴 Scope Creep with confidence score and reasoning
4. **Auto-Generated Responses**: Polite, professional "that's beyond scope" emails with optional upsell pricing
5. **Creep Dashboard**: See total unbilled hours, creep % per client, revenue at risk
6. **Scope Reports**: Weekly/monthly PDF reports showing what was requested vs. what was contracted

## Target Users

- **Primary**: Solo freelancers (designers, developers, writers, marketers) — 70M+ globally, 12M+ in US
- **Secondary**: Small agencies (2-10 people)
- **Tertiary**: Consultants, coaches, and anyone who sells project-based services

## Key Features

### Scope Definition
- Quick scope templates by project type (website, logo, copywriting, marketing campaign)
- Deliverable checklist with revision limits
- Meeting & call budget (hours per project)
- Response time SLA (same day? 24hr? 48hr?)
- Exclusions list — what you're explicitly NOT doing

### Request Logger
- Forward emails to your ScopeGuard address
- Screenshot Slack/Teams messages
- Quick-type: paste the request, done
- Browser extension: right-click any message → "Log to ScopeGuard"

### AI Scope Analysis
- Classifies each request: ✅ In-Scope / ⚠️ Borderline / 🔴 Scope Creep
- Confidence score (0-100%)
- Reasoning: "Client requested 4th revision. Contract allows 2."
- Compares against YOUR specific scope, not generic rules

### Response Generator
- Tone control: friendly / firm / professional
- "That's beyond scope" with upsell pricing auto-calculated
- Alternative phrasing options
- Templates save to your voice over time

### Creep Dashboard
- Total unbilled hours this month
- Revenue at risk ($$$)
- Creep % per client (worst offenders ranked)
- Trend: getting better or worse?
- "You've done $2,340 of free work for Client X this quarter"

### Scope Reports
- Weekly digest: what was requested vs. delivered
- Monthly client report (shareable): "Here's everything we did, here's what was beyond scope"
- Quarterly business review: which clients creep most, should you raise rates?

## Market Research

### Competitors
- **ScopeShield** — launched 2026, appears to be early-stage, limited features
- **Monday.com / Asana** — project management, not scope defense
- **FreshBooks / HoneyBook** — invoicing + proposals, no scope tracking
- **Bonsai / AND CO** — freelancer admin tools, no scope creep detection
- **Contracts/signing tools** — static, don't monitor ongoing work

### Differentiation
Nobody owns the **real-time scope monitoring + AI classification + response generation** trifecta. Existing tools help you WRITE a scope but don't help you DEFEND it.

### Market Size
- 70M+ freelancers globally (Upwork, 2026)
- 12M+ in US alone
- 67% affected by scope creep
- $15,600 avg annual loss per freelancer
- Total addressable: ~$100B+ in unbilled freelance work annually

## Monetization

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0 | 1 active project, 10 requests/month, basic classification |
| **Pro** | $9.99/mo | 10 projects, unlimited requests, AI responses, reports, email forwarding |
| **Agency** | $24.99/mo | Unlimited projects, team access, client portal, priority AI, API |

Free tier lets freelancers try it on their worst client. Pro captures the $15K/yr savings at $120/yr — a no-brainer ROI.

## Source

Twitter/X + Reddit r/freelance, r/webdev, r/copywriting + MicroGaps validation + Freelancers Union 2026 study + Ignition agency data + DEV Community scope creep analysis

## Technical Feasibility

- **AI Classification**: GPT-4/Claude for scope analysis — straightforward NLP task
- **Email Forwarding**: Parse inbound emails via SendGrid/Postmark
- **Browser Extension**: Chrome extension for right-click logging
- **Dashboard**: React/Next.js PWA
- **Reports**: PDF generation via Puppeteer/React-PDF
- **Mobile**: PWA-first, native later

## Why Now

- Freelancing grew 30%+ since 2020, now 12M+ US freelancers
- Scope creep is the #1 complaint across freelancer communities in 2026
- AI can now classify requests and generate professional responses in real-time
- MicroGaps identified this as an unsolved gap (Feb 2026)
- Zero dominant player in the space — ScopeShield is the only attempt and appears early
