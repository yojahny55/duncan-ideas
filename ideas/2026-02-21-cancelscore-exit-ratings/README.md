# CancelScore — Know Before You Sign Up

**Crowdsourced cancellation difficulty ratings for subscriptions and memberships**

> The Annoyance Economy costs Americans $165 billion per year. Companies make cancellation difficult by design—boosting their revenue by 14-200%. CancelScore lets you know what you're getting into BEFORE you sign up.

## Problem Statement

### The Hidden Cost of "Easy Sign-Up"

- **Click to sign up, call to cancel**: 56% of newspapers require phone calls to cancel
- **Time tax**: Customer service hold times have increased 60% in two decades
- **By design**: Studies show difficult cancellation boosts company revenue by 14-200%
- **$165B problem**: The annual cost of the "Annoyance Economy" to American consumers
- **No transparency**: You only discover how hard it is to cancel AFTER you're trapped

### Real Examples
- Gym memberships requiring certified mail to cancel
- Streaming services hiding cancel buttons behind 12+ screens
- Insurance requiring in-person visits during business hours
- Publications with 30-day notice periods and retention calls

## Target Users

### Primary: Cautious Subscribers
- People burned by difficult cancellations before
- Research-first decision makers
- Budget-conscious consumers comparing options
- Anyone signing up for memberships, subscriptions, or services

### Secondary: Consumer Advocates
- Bloggers and journalists covering consumer issues
- Personal finance influencers
- FTC and consumer protection researchers

## Proposed Solution: CancelScore

A crowdsourced database that rates companies on their "exit difficulty" BEFORE you commit:

### How It Works
1. **Search** — Type any company, gym, streaming service, or subscription
2. **See the Score** — View their CancelScore (A-F grade) based on real user reports
3. **Read Details** — See exactly what cancellation involves (steps, wait times, fees)
4. **Report Your Experience** — After canceling, contribute your own data point

### What We Track
- **Method Required**: Online, phone, chat, mail, in-person
- **Steps to Cancel**: 1-click vs. 15-screen maze
- **Hold Time**: Average wait when calling
- **Retention Pressure**: How hard they push to keep you
- **Hidden Fees**: Early termination penalties, notice periods
- **Overall Escape Difficulty**: Letter grade A (easy) to F (nightmare)

## Key Features

### 1. CancelScore Search
- Search any company by name
- See letter grade (A-F) at a glance
- Quick comparison between similar services

### 2. Detailed Reports
- Breakdown by cancellation method
- Timeline of steps required
- Recent user reports and comments
- Tips from people who successfully canceled

### 3. Compare Services
- Side-by-side comparison of competing services
- Filter by category (gyms, streaming, insurance, etc.)
- "Cancellation-friendly alternatives" recommendations

### 4. Report Your Experience
- Simple form to log your cancellation journey
- Time spent, frustration level, outcome
- Upload evidence (screenshots, recordings)

### 5. Browser Extension (Future)
- Warns you on checkout pages
- Shows CancelScore rating before you enter payment info
- "Are you sure? This company has an F rating"

## Differentiation

| Feature | CancelScore | Yelp/Google Reviews | SubSlayer |
|---------|-------------|---------------------|-----------|
| Cancellation-specific focus | ✅ | ❌ (general quality) | ❌ (tracks existing subs) |
| Pre-signup warning | ✅ | ❌ | ❌ |
| Step-by-step breakdown | ✅ | ❌ | ❌ |
| Hold time tracking | ✅ | ❌ | ❌ |
| Crowdsourced data | ✅ | ✅ | ❌ |

## Market Research

### The Problem is Real
- **$165 billion**: Annual cost of the Annoyance Economy (Groundwork Collaborative, Feb 2026)
- **60%**: Increase in customer service hold times over 20 years
- **14-200%**: Revenue boost from difficult cancellation (academic study)
- **2/3 Americans**: Want Congress to address these frustrations

### Regulatory Tailwinds
- FTC's "Click-to-Cancel" rule (being fought by industry)
- Amazon fined $2.5B for dark patterns
- Consumer awareness at all-time high

### Competitors
- **DoNotPay**: AI-powered cancellation service (does it for you, doesn't warn you first)
- **Trim**: Cancels subscriptions but doesn't rate companies
- **General review sites**: Don't focus on cancellation experience

### Gap
No one is providing **pre-signup intelligence** about cancellation difficulty.

## Business Model

### Free Tier
- Search and view scores
- See basic cancellation info
- Submit reports

### Premium ($4.99/month)
- Browser extension with real-time warnings
- Detailed reports with timestamps
- Cancel guides with step-by-step instructions
- Priority report verification
- Ad-free experience

### B2B (Future)
- Company dashboards to see their score
- "CancelScore Certified" badge for easy cancelers
- API access for consumer protection orgs

## Technical Approach

### MVP Stack
- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + PostgreSQL
- **Search**: Algolia or MeiliSearch
- **Auth**: Clerk or Auth0
- **Hosting**: Vercel + Supabase

### Data Model
```
Companies: name, category, website, cancelUrl, avgScore, reportCount
Reports: companyId, userId, method, steps, waitTime, retentionPressure, fees, overallScore, comments, evidence[], createdAt
Users: id, email, reportsSubmitted, karma
```

## Success Metrics

### MVP Goals (3 months)
- 10,000 company records
- 1,000 user reports
- 50,000 monthly searches

### Growth Goals (1 year)
- 100,000 user reports
- 500,000 MAU
- Browser extension with 50,000 installs
- Press coverage in major outlets

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Fake reviews | Require receipt/evidence upload for verified reports |
| Legal pressure from companies | Clear editorial guidelines, user-generated content shield |
| Cold start problem | Seed with journalist investigations, FTC complaints, Reddit threads |
| Low engagement | Gamify reporting, karma system, "Cancel Hero" badges |

## Why Now?

1. **FTC Attention**: Dark patterns are in the news constantly
2. **Consumer Anger**: Post-pandemic subscription fatigue is real
3. **Groundwork Report**: Fresh $165B figure making headlines
4. **AI Tools**: Can help extract and verify cancellation data at scale

## Team Needs

- Solo founder can build MVP
- Content/community manager for seeding data
- Eventually: Data verification team

---

*Idea generated: February 21, 2026*
*Source: Web Research (Annoyance Economy Report, FTC Dark Patterns coverage)*

## Prototype

See the [interactive prototype](prototype/index.html) for a demo of the CancelScore interface.
