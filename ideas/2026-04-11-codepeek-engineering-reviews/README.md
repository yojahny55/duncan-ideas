# CodePeek — Glassdoor for Engineering Culture

## Elevator Pitch
**Glassdoor but for code quality.** Anonymous developer reviews of companies' actual engineering practices — tech stack quality, code review culture, CI/CD maturity, tech debt level, testing standards, on-call burden, and manager technical competence. Because "great engineering culture" on Glassdoor means nothing when you find out they deploy by FTP on Fridays.

## Problem
- **28M+ software developers worldwide** change jobs every 2-3 years on average
- **Glassdoor is useless for engineers** — reviews mix catering complaints with actual engineering insights, no structured data on what matters to devs
- **Interviews don't reveal reality** — you can't ask "how much tech debt do you have?" in an interview
- **r/ExperiencedDevs threads** constantly ask "which companies still have strong engineering culture?" — there's no data source
- **Company tech blogs lie** — they write about Kubernetes while running PHP on FTP
- **30M+ monthly visitors to Glassdoor** proves the demand; nobody owns the developer vertical

## Target Users
- **Software engineers evaluating job offers** (primary)
- **Engineering managers assessing competitors** (secondary)
- **DevRel/recruiting teams benchmarking their org** (tertiary)
- **Bootcamp grads choosing first companies** (growing segment)

## Proposed Solution
Anonymous, structured engineering culture reviews with standardized scoring rubrics:

### Review Categories (each rated 1-5 stars)
- **🧱 Code Quality** — code standards, architecture, tech debt level
- **👀 Review Culture** — PR review thoroughness, time to review, review quality
- **🚀 CI/CD Maturity** — deployment frequency, rollback ease, pipeline quality
- **🧪 Testing Standards** — test coverage expectations, testing culture, TDD adoption
- **🔔 On-Call Burden** — rotation frequency, alert quality, incident culture
- **👨‍💻 Manager Competence** — does your manager code? understand technical tradeoffs?
- **📚 Learning & Growth** — tech talks, conference budget, mentorship, promotion clarity
- **🛠 Tooling & DX** — dev laptop, local setup time, internal tools quality

### Key Features
- **Company Engineering Scorecard** — aggregate grades (A-F) per category
- "Would you write code here again?" — the one question that matters
- **Tech Stack Verified** — reviewers confirm their tech stack (not what the blog says)
- **Red Flags / Green Flags** — quick visual summary per company
- **Compare Mode** — stack two companies side by side on engineering metrics
- **Salary + Engineering Score** — filter by "pays well AND doesn't suck to code at"
- **Interview Insider** — what coding questions they actually ask, not what HR says
- **Team-Level Reviews** — engineering culture varies by team; review your specific squad

## Market Research

### Competitors
| Tool | What It Does | Gap |
|------|-------------|-----|
| Glassdoor | General company reviews | No engineering-specific structure |
| Levels.fyi | Compensation data | No culture/quality data |
| Blind | Anonymous gossip | Unstructured, low signal |
| repVue (shut down) | Tried this exact idea | Poor execution, no traction |

### Differentiation
- **Structured rubrics** — not freeform text, actual scored dimensions
- **Engineering-only** — not a general review site, laser focused
- **Verified engineers** — GitHub/LinkedIn verification optional but rewarded
- **Team-level granularity** — not company-wide generalizations

### Market Size
- 28M+ software developers globally
- Average job tenure: 2-3 years = ~10M job evaluations/year
- Levels.fyi: 10M+ monthly visitors (compensation only)
- Glassdoor: 30M+ monthly visitors (general reviews)

## Business Model
- **Free:** Browse all reviews, write unlimited reviews
- **Pro ($4.99/mo):** Compare mode, salary + engineering score filter, saved searches, early access to new company data
- **Teams ($49/mo):** Recruiter dashboard, company claimed profile, response to reviews, employer branding
- **API ($99/mo):** Programmatic access for job boards and ATS integrations

## Monetization Path
1. **Phase 1:** Free reviews to build database (6 months)
2. **Phase 2:** Pro features for job seekers
3. **Phase 3:** Employer tools (claimed profiles, analytics)
4. **Phase 4:** API partnerships with job boards

## Technical Feasibility
- **MVP:** Next.js + Supabase (auth, DB) + Vercel (hosting) = weekend project
- **Anonymity:** No real names stored; optional GitHub OAuth for "verified" badge only
- **Scale:** Supabase handles 100K+ rows easily; migrate to PostgreSQL when needed
- **Data seeding:** Can import from public r/ExperiencedDevs threads, Hacker News discussions

## Risk & Mitigation
| Risk | Mitigation |
|------|-----------|
| Not enough reviews | Seed from Reddit/HN data; gamify with streaks |
| Fake reviews | Verified employer badge; anomaly detection |
| Legal threats | Section 230 protection; anonymity-first |
| Company pushback | "Any press is good press" — controversy drives signups |

## Name Ideas
- CodePeek ✅ (peek behind the code curtain)
- DevDoor
- EngSight
- StackReview

## Source
Reddit r/AppIdeas (3 upvotes but highly specific ask) + r/ExperiencedDevs (constant "which companies have good engineering culture?" threads with 100+ comments)

## Tags
`job-search` `developer-tools` `reviews` `engineering-culture` `career` `glassdoor-alternative`
