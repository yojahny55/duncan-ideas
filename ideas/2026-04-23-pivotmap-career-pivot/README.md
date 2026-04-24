# PivotMap — AI Career Displacement Navigator

## The Problem

18% of US workers believe their job will be eliminated by AI within 5 years (Gallup, April 2026). Clerical, data entry, customer support, and even junior developer roles face 65%+ automation risk. Yet when workers ask "what should I pivot to?", they get:

- Generic "learn to code" advice (ironic, since coding itself is being automated)
- Overwhelming lists of 500+ job titles
- No mapping of their EXISTING skills to safer careers
- No actionable transition timeline

People don't need another job board. They need a **strategic escape route** — personalized, based on what they already know, pointing toward careers with lower AI exposure.

## Target Users

- **At-risk workers** (ages 25-50): Clerical, admin, customer support, data entry, junior developers, paralegals, bookkeepers
- **Career changers**: Anyone sensing their industry is about to get disrupted
- **College students**: Choosing majors with AI resilience in mind
- **Career counselors**: Using the tool to advise clients

## The Solution

**PivotMap** — enter your current role and skills, get an AI automation risk assessment with a personalized pivot roadmap to safer careers.

### How It Works

1. **Risk Assessment** — Enter your job title → get an AI Exposure Score (0-100) based on O*NET task data, BLS projections, and current AI capability mapping
2. **Skill Transfer Map** — Your skills are mapped to adjacent careers with lower AI exposure. "Bookkeeper → Financial Analyst (75% skill overlap, 30% lower AI risk)"
3. **Pivot Roadmap** — Step-by-step transition plan: gap analysis, courses, certifications, networking targets, resume pivots, timeline
4. **Market Intelligence** — Salary comparison, job openings, growth projections for target careers
5. **Pivot Stories** — Real transition stories from people who made similar moves

### Key Features

- **AI Exposure Score** (0-100) per role — data-driven, not hype-driven
- **Skill Overlap Calculator** — "You already have 68% of the skills for [Safer Role]"
- **Gap Analysis** — exactly what you need to learn, no more no less
- **Transition Timeline** — realistic 3/6/12-month plans
- **Salary Bridge** — current salary → target salary, with ramp expectations
- **Course Recommendations** — specific courses that fill YOUR gaps (not generic lists)
- **Pivot Community** — connect with others making similar transitions
- **Monthly Re-assessment** — AI capabilities change, your risk score updates

## Why Now

- ChatGPT launched 2.5 years ago; AI automation is no longer theoretical
- 2025-2026 is the "first real wave" of white-collar displacement
- BLS data is lagging — workers need forward-looking risk assessment
- Career counseling costs $150-300/hour; PivotMap democratizes strategic career planning

## Market Size

- 160M+ US workers; 18% (29M) actively worried about AI displacement
- $15B career development market
- LinkedIn Learning ($400M+ ARR) proves willingness to pay for career growth
- Career counseling market: $7B+ globally

## Competitors

| Tool | What It Does | Gap |
|------|-------------|-----|
| LinkedIn Skills Assessment | Validates existing skills | No AI risk analysis, no pivot planning |
| O*NET | Occupational data | Raw data, no personalization |
| Will Robots Take My Job? | One-off novelty score | No actionable pivot path |
| Career counselors | Personalized advice | $150-300/hr, not scalable |
| Pathrise | Job search coaching | $0 income share, tech-only |

**PivotMap's differentiator:** Strategic career pivot planning specifically for AI displacement. Not a job board, not a course platform — a personalized escape route.

## Business Model

- **Free**: Risk assessment for your current role, top 3 pivot suggestions
- **Pro ($7.99/mo)**: Full skill transfer map, detailed gap analysis, transition timeline, course recommendations, monthly re-assessment
- **Premium ($14.99/mo)**: Everything in Pro + 1:1 AI career coach chat, resume pivot optimizer, cover letter generator, salary negotiation scripts, priority community access
- **Enterprise/Campus**: Career center licenses, university partnerships

## Technical Approach

- **Frontend**: React/Next.js PWA — mobile-first, works offline
- **Data Sources**: O*NET task/skill database, BLS projections, Lightcast labor market data, real-time job postings
- **AI Engine**: LLM-powered skill matching + transferability scoring
- **Risk Model**: Custom scoring combining task automation potential, current AI capabilities, industry adoption rates, BLS decline projections
- **Database**: PostgreSQL with vector embeddings for skill similarity matching

## Prototype

See [prototype/index.html](prototype/index.html) for the interactive demo.

---

*Source: Web (Gallup, Brookings, BLS, O*NET, Inside Higher Ed)*
*Date: 2026-04-23*
*Created by Duncan ⚔️*
