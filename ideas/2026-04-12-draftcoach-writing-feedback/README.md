# DraftCoach — AI Writing Feedback That Tells You What Readers Will Actually Think

## Problem Statement

People write emails, cover letters, Slack messages, and texts every day — but they have no idea how they sound. They send messages and wonder:

- "Did that sound too aggressive?"
- "Was I too wishy-washy?"
- "Did they even see my request?"
- "Am I apologizing too much?"

**91% of people feel anxious about professional communication.** They stare at draft emails, re-reading and re-writing, unsure if they're hitting the right tone.

Existing tools help with grammar (Grammarly, ProWritingAid) or readability (Hemingway Editor), but nobody tells you **what the reader will actually think**.

## Target Users

- **Job seekers** writing cover letters and follow-up emails
- **Remote workers** sending Slack messages to managers/colleagues they've never met
- **Sales folks** writing cold outreach emails
- **Young professionals** who lack communication confidence
- **Anyone** who's ever hesitated before hitting "send"

## Proposed Solution

**DraftCoach** is AI writing feedback that reads like a tough-but-fair friend. Paste any text and get:

- **Tone analysis:** "This sounds passive-aggressive" or "You're burying your confidence"
- **Clarity scoring:** "Your ask is hidden in paragraph 3 — move it to line 2"
- **Persuasion coaching:** "You're asking but not explaining what's in it for them"
- **Red flags:** "You apologized 4 times in one email — stop"
- **Rewrite suggestions:** Concrete alternatives with explanations

Not grammar checking. **Real feedback on what the reader will think and feel.**

### How It Works

1. Paste your text (email, cover letter, Slack message, anything)
2. Get instant feedback across 5 dimensions:
   - **Tone:** Aggressive? Passive? Confident? Apologetic?
   - **Clarity:** Is the message easy to understand? Is the ask clear?
   - **Persuasion:** Does it motivate action? Does it explain "what's in it for them?"
   - **Length:** Too long? Too short? Just right?
   - **Impact:** Will it achieve your goal?
3. See specific line-by-line callouts with explanations
4. Get rewrite suggestions with before/after comparisons
5. Learn over time with a communication style dashboard

## Key Features

### Core Feedback Engine
- **5-dimension scoring:** Tone, Clarity, Persuasion, Length, Impact
- **Line-by-line callouts:** Click any sentence to see feedback
- **Red flag detection:** Over-apologizing, too many qualifiers, buried asks
- **Goal-aware analysis:** Tell DraftCoach "I want a raise" and get goal-specific feedback

### Smart Suggestions
- **Rewrite alternatives:** 2-3 rewrite options with explanations
- **Before/after comparisons:** See exactly what changed and why
- **Style presets:** Professional, Friendly, Confident, Direct, Empathetic
- **Tone adjustment slider:** "Make this 20% more direct"

### Learning & Improvement
- **Communication dashboard:** Track your communication patterns over time
- **Weakness spotting:** "You apologize in 67% of your emails"
- **Progress tracking:** Watch your scores improve week over week
- **Quick templates:** Proven templates for common scenarios (negotiation, apology, request)

### Browser Extension
- **Inline feedback:** Get DraftCoach suggestions as you type in Gmail, Outlook, Slack
- **One-click rewrite:** Apply suggestions with a single click
- **Keyboard shortcuts:** Quick analyze without leaving your flow

## Market Research

### Competitive Landscape

| Tool | Focus | Pricing | Gap |
|------|-------|---------|-----|
| **Grammarly** | Grammar/spelling | $0-30/mo | Only surface-level errors, no tone feedback |
| **Hemingway Editor** | Readability scores | $19.99 one-time | No contextual feedback, just grade-level scores |
| **ProWritingAid** | Style analysis | $0-25/mo | Academic focus, not professional communication |
| **Crystal Knows** | Personality insights | $49+/mo | Enterprise sales focus, too complex for individuals |
| **Boomerang Respondable** | Email effectiveness | Gmail only, $4.99/mo | Limited to Gmail, focuses on response rates |

**DraftCoach's Differentiation:**

1. **Reader-perspective feedback:** Not "is this correct?" but "will this work?"
2. **Goal-aware analysis:** Tells you whether you'll achieve your specific outcome
3. **Plain-English explanations:** Not "passive voice detected" but "you're hiding behind passive language"
4. **Consumer-first pricing:** Accessible to individuals, not just enterprises
5. **Any text format:** Emails, Slack, texts, cover letters, Tinder bios — anything

### Market Size

- **Professional writing anxiety:** 91% of professionals feel anxious about work communication
- **Email volume:** 126 emails sent/received per day per office worker
- **Job search market:** 20M+ job seekers in the US alone
- **Grammarly revenue:** $200M+ ARR (proving market demand for writing help)
- **Total addressable market:** 100M+ knowledge workers in the US

### Validation Signals

- **Reddit threads:** 40+ threads on r/jobs, r/resumes, r/careerguidance asking for cover letter/email feedback
- **Twitter/X:** Daily posts like "does this sound too aggressive?" with 50+ comments debating tone
- **Career coaches:** $50-150/hour for exactly this feedback (human bottleneck)
- **Grammarly users:** 30M+ daily active users (huge market, under-served problem)

## Pricing Model

### Free Tier
- 5 analyses/month
- Basic tone and clarity feedback
- Limited rewrite suggestions

### Pro ($9.99/mo)
- Unlimited analyses
- All 5 dimensions (Tone, Clarity, Persuasion, Length, Impact)
- Unlimited rewrite suggestions
- Communication dashboard
- Web + mobile app

### Premium ($19.99/mo)
- Everything in Pro
- Browser extension (Gmail, Outlook, Slack, Notion)
- Goal-aware analysis ("I want a raise", "I'm asking for a meeting")
- Advanced templates library
- Export to PDF for review

### Teams ($49/mo for 5 users)
- Everything in Premium
- Team communication insights
- Style consistency checking
- Admin dashboard

## Technical Implementation

### MVP Architecture (Week 1-2)
- **Frontend:** React + Vite, beautiful and simple UI
- **Backend:** Node.js + Express API
- **AI Integration:** OpenAI GPT-4 for analysis and rewrites
- **Database:** PostgreSQL (user accounts, history, patterns)
- **Auth:** Firebase Auth

### AI Prompt Strategy

```
You are DraftCoach, a tough-but-fair communication coach.

Analyze this text for:
1. Tone - Does it sound aggressive, passive, confident, apologetic?
2. Clarity - Is the main point easy to find? Is the ask clear?
3. Persuasion - Does it motivate action? Does it explain "what's in it for them?"
4. Length - Is it too long, too short, or just right?
5. Impact - Will this achieve the writer's goal?

Provide feedback in plain English with specific line references.
Don't use jargon like "passive voice" — explain the actual issue.
Give 2-3 concrete rewrite suggestions with explanations.
```

### Key Tech Components

1. **Feedback Engine:** GPT-4 with specialized prompts for each dimension
2. **Goal Parser:** Extract user intent ("I want X") to contextualize feedback
3. **Rewrite Generator:** Generate variations at different tone levels
4. **Pattern Tracker:** Identify recurring issues over time (over-apologizing, qualifiers)
5. **Browser Extension:** Content script for inline Gmail/Slack integration

## Success Metrics

### Engagement KPIs
- **Retention:** 40% monthly retention for Pro users
- **Frequency:** 2+ analyses/week per active user
- **Conversion:** 15% free → Pro conversion
- **Browser extension install rate:** 60% of Premium users

### Outcome KPIs
- **User satisfaction:** 4.5+ star rating
- **Communication confidence:** 80% of users report feeling more confident
- **Outcome improvement:** 60% of users report better responses after using DraftCoach
- **Revenue:** $100K ARR by month 6

## Go-To-Market Strategy

### Launch (Month 1-3)
1. **Reddit AMA:** r/jobs, r/resumes, r/careerguidementors — free cover letter feedback for first 1000 users
2. **Twitter/X beta:** Daily "before/after" transformations showcasing DraftCoach impact
3. **Product Hunt:** Launch with killer before/after examples
4. **Cold email outreach:** To career coaches and resume writers (affiliate program)

### Growth (Month 3-6)
1. **Content marketing:** "5 Email Habits Making You Look Unprofessional" style articles
2. **YouTube channel:** Real-time feedback videos, "Fix My Email" series
3. **Partnerships:** Career platforms (LinkedIn Learning, Coursera, Udemy)
4. **Webinar:** "Write Emails That Get Responses" featuring DraftCoach live demos

### Scale (Month 6+)
1. **Enterprise sales:** Team packages for startups and SMBs
2. **White-label API:** Offer DraftCoach engine to ATS platforms and email tools
3. **International expansion:** Multi-language support (Spanish, French, German)
4. **Mobile app:** iOS/Android for on-the-go analysis

## Prototype

A working HTML/CSS/JS prototype is available in the `prototype/` directory demonstrating:
- Clean, minimal interface
- 5-dimension scoring visualization
- Line-by-line feedback display
- Before/after rewrite comparison
- Responsive design for mobile

**Try the prototype:** [Demo Link](https://yojahny55.github.io/duncan-ideas/ideas/2026-04-12-draftcoach-writing-feedback/prototype/index.html)

## Why This Now

1. **AI maturity:** GPT-4 can now understand nuance, tone, and context at a human level
2. **Remote work explosion:** More text communication, fewer in-person cues
3. **Gen Z entering workforce:** Digital natives who communicate differently from boomers
4. **Anxiety economy:** People will pay to reduce communication anxiety
5. **Grammarly proved the market:** People care about writing quality — they just need better feedback

## Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| AI hallucinations/incorrect feedback | Medium | High | Human-in-the-loop validation, user feedback system, confidence scores |
| Users don't trust AI feedback | Medium | High | A/B test with human coaches, show success stories, transparency |
| Grammarly launches similar feature | High | Medium | Focus on reader-perspective (not just correctness), lower pricing |
| High API costs | Medium | Medium | Use GPT-3.5 for initial drafts, GPT-4 for final analysis, cache results |
| Browser platform changes (extensions) | Low | Medium | Web app as primary, extension as value-add |

## Competitive Advantages

1. **Reader-perspective design:** Built around "what will they think?" not "is this correct?"
2. **Goal-aware analysis:** Contextualizes feedback based on what you're trying to achieve
3. **Plain-English explanations:** No jargon, just actionable advice
4. **Consumer-first pricing:** $9.99/mo vs $49-149/mo for enterprise solutions
5. **Any text format:** Not locked to emails — works for Slack, texts, cover letters, anything

---

**DraftCoach** — Because the world doesn't need more grammar checkers. It needs a friend who tells you the truth about how you sound.
