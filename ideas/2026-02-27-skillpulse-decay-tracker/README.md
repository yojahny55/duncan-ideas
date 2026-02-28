# SkillPulse - Personal Skill Health Tracker

**Date:** February 27, 2026  
**Source:** Web Research (Indie Hackers, Academic Research, Product Hunt)  
**Category:** Productivity / Learning / Personal Development

---

## Problem Statement

Skills decay when not practiced. Research shows professionals lose **30% of trained skills annually** without reinforcement. Whether you're a developer who learned Rust six months ago, a marketer who mastered Excel macros, or a musician who used to play guitar — unused skills fade predictably according to well-documented "skill decay curves."

**The pain points:**
- **No visibility** — You don't know which skills are at risk until you need them and fail
- **No system** — Random "I should practice that sometime" never happens
- **Learning investment wasted** — Courses, certifications, bootcamps forgotten within months
- **Career anxiety** — "Am I still qualified if I haven't used X in a year?"
- **Professional requirements** — Some roles require demonstrable skill currency

Current solutions focus on **learning new skills** (Duolingo, Coursera, Udemy) or **enterprise training compliance** (expensive LMS systems). Nothing helps individuals **maintain** the skills they've already acquired.

---

## Target Users

1. **Software Developers** — Multiple languages, frameworks, tools that change rapidly
2. **Creative Professionals** — Design tools, techniques, software proficiency
3. **Healthcare Workers** — Clinical skills, certifications, procedures
4. **Musicians/Artists** — Instruments, techniques, theory
5. **Knowledge Workers** — Spreadsheets, presentations, specialized software
6. **Career Changers** — Maintaining old skills while building new ones
7. **Lifelong Learners** — Anyone who's taken courses and wants ROI on that investment

---

## Proposed Solution

**SkillPulse** — A personal skill health tracker that applies spaced repetition science to skill maintenance.

### Core Concept
- Add skills you want to maintain (programming languages, tools, instruments, certifications)
- Set criticality level (career-critical vs nice-to-have)
- System calculates decay rate based on skill type and your practice history
- Get timely reminders before skills become "rusty"
- Log practice sessions to reset the decay timer
- See a health dashboard showing which skills need attention

### Key Differentiators
- **Maintenance-focused** — Not about learning, about preserving what you've learned
- **Science-based** — Uses actual skill decay curves from academic research
- **Personalized decay rates** — Learns how quickly YOU forget specific skill types
- **Practice suggestions** — AI suggests quick drills to refresh specific skills
- **Career portfolio** — Documented proof of ongoing skill maintenance

---

## Key Features

### 1. Skill Inventory
- Add skills with category, proficiency level, and last practiced date
- Import from LinkedIn, resume, or manually add
- Group by domain (coding, creative, music, professional, etc.)

### 2. Decay Prediction Engine
- Based on academic "forgetting curves" and skill decay research
- Adjusts for skill type (motor skills decay slower than procedural knowledge)
- Learns your personal retention patterns over time

### 3. Health Dashboard
- Visual "skill health" indicators (green/yellow/red)
- "At Risk" section highlighting skills approaching decay threshold
- Trend charts showing maintenance history

### 4. Smart Reminders
- Spaced repetition scheduling (not annoying daily pings)
- Priority-weighted (career-critical skills get more attention)
- Snooze with reason tracking ("I used this at work today")

### 5. Practice Logging
- Quick log: "Practiced Python for 30 min"
- Auto-detect from activity (optional GitHub integration, IDE plugins)
- Effort tracking for meaningful practice vs superficial review

### 6. AI Practice Suggestions
- "Your SQL skills are at 60% health. Try these 3 quick challenges:"
- Links to relevant practice resources (LeetCode, Exercism, etc.)
- Micro-drills designed for maintenance, not learning

### 7. Skill Portfolio
- Shareable proof of ongoing competence
- Great for freelancers, contractors, job seekers
- "I haven't used React daily in 2 years, but I maintain it monthly — here's proof"

---

## User Flow

```
1. Onboarding
   └─> Import skills from LinkedIn/resume OR manual add
   └─> Set proficiency levels (beginner/intermediate/advanced)
   └─> Prioritize (career-critical, professional, hobby)

2. Dashboard View
   └─> See all skills with health indicators
   └─> "Needs Attention" section at top
   └─> Quick-log recent practice

3. Receive Reminder
   └─> "Your Kubernetes skills haven't been practiced in 45 days"
   └─> Options: Log practice | Snooze | Get practice suggestions

4. Practice Session
   └─> Complete suggested micro-drill OR
   └─> Log self-directed practice
   └─> Skill health resets/improves

5. Review Progress
   └─> Weekly digest of maintenance activity
   └─> Skills saved from decay
   └─> Suggestions for next week
```

---

## Technical Architecture

### Frontend
- **Web:** React + Tailwind CSS (PWA for mobile)
- **Mobile:** React Native for iOS/Android

### Backend
- **API:** Node.js/Express or Python/FastAPI
- **Database:** PostgreSQL (skill data) + Redis (reminder scheduling)
- **AI:** OpenAI API for practice suggestions

### Integrations (Future)
- LinkedIn import
- GitHub activity tracking
- IDE plugins (VS Code, JetBrains)
- Calendar integration for auto-logging

---

## Revenue Model

### Freemium
- **Free:** 10 skills, basic decay tracking, weekly reminders
- **Pro ($5/mo):** Unlimited skills, AI suggestions, portfolio, integrations
- **Team ($15/user/mo):** Shared skill inventories, manager dashboards

---

## Competitive Analysis

| Solution | Focus | Gap |
|----------|-------|-----|
| Duolingo | Learning languages | No maintenance for other skills |
| Anki | Memorization flashcards | Not skill-focused, requires card creation |
| LinkedIn Learning | Courses | No maintenance tracking |
| Corporate LMS | Compliance | Expensive, enterprise-only |
| **SkillPulse** | **Skill maintenance** | **First consumer solution** |

---

## Market Opportunity

- **50M+ professionals** take online courses annually
- **$300B+ spent** on corporate training
- **73% of learned skills** are forgotten within a year without reinforcement
- Growing gig economy needs provable, current skills
- "Upskilling" is a $400B market — "skill maintenance" is completely unaddressed

---

## MVP Scope (4 weeks)

### Week 1-2: Core
- [ ] Skill inventory CRUD
- [ ] Basic decay algorithm
- [ ] Health dashboard
- [ ] Email reminders

### Week 3: Intelligence
- [ ] Practice logging
- [ ] AI practice suggestions
- [ ] Personal decay calibration

### Week 4: Polish
- [ ] Onboarding flow
- [ ] Weekly digest emails
- [ ] Mobile PWA

---

## Success Metrics

- **Activation:** Users add 5+ skills in first session
- **Retention:** Weekly active users maintaining skills
- **Engagement:** Practice sessions logged per week
- **Outcome:** Users report feeling confident in maintained skills

---

## Why Now?

1. **Remote work** — Skills matter more than credentials
2. **AI disruption** — People anxious about skill relevance
3. **Gig economy** — Freelancers need provable, current competencies
4. **Learning fatigue** — People tired of courses, want to preserve existing investment
5. **Science is clear** — Skill decay is predictable and preventable

---

## Open Questions

- How to verify practice actually happened vs. just logging it?
- What's the right balance of reminders (helpful vs. annoying)?
- Should we gamify (streaks, points) or keep it professional?
- Integration with actual practice platforms (LeetCode, Exercism, etc.)?

---

*Researched and documented by Duncan ⚔️*
