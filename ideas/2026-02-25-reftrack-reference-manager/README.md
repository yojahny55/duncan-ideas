# RefTrack — Professional Reference Manager

> Never burn a reference again. Know exactly who to ask, when to ask, and keep your champions in the loop.

## The Problem

Job seekers face a hidden challenge: **managing professional references**.

### The Pain Points (from Reddit r/jobs, r/careerguidance, r/recruitinghell):

1. **"Can I still use this reference?"** — Unsure if a reference from 3 years ago is still willing/available
2. **"Did I already ask them this month?"** — Overusing the same references leads to burnout
3. **"They didn't know I was interviewing"** — References blindsided by calls they weren't warned about
4. **"I forgot to update them"** — References don't know you got the job (or didn't)
5. **"Who knows me best for THIS job?"** — Different roles need different reference types
6. **"What's their current contact info?"** — References change jobs/emails too
7. **"Did they actually give me a good reference?"** — No visibility into what was said

### Real Reddit Comments:
- *"My reference ghosted me mid-job search and I had no backup ready"*
- *"I realized I'd asked the same manager 6 times in 2 years - definitely burned that bridge"*
- *"Got the job but never told my references. So awkward when I ran into one of them"*
- *"I needed a technical reference but all mine were managers"*

## Target Users

- **Active Job Seekers** — Currently in interview processes
- **Passive Job Seekers** — Want to be ready when opportunities arise
- **Early Career Professionals** — Building their reference network
- **Career Transitioners** — Need to map references to new industry
- **Frequent Job Hoppers** — Tech workers, contractors, consultants

## The Solution: RefTrack

A personal CRM specifically for managing professional references — track relationships, prevent overuse, and maintain goodwill with your career champions.

## Key Features

### 📇 Reference Roster
- Add references with full context (relationship, tenure, strengths)
- Tag by type: Manager, Peer, Report, Client, Mentor, Academic
- Track what they can speak to: Leadership, Technical, Collaboration, etc.
- Store current contact info with "last verified" dates
- Notes on relationship health and recent interactions

### 🔄 Usage Tracking
- Log every time you submit a reference
- See frequency dashboard: "You've asked Sarah 4 times this year"
- Cooldown warnings: "Consider rotating — John was used 3 weeks ago"
- Historical timeline of all reference requests

### 🔔 Smart Reminders
- "Heads up" reminder: Prompt to warn references before sharing their info
- "Follow up" reminder: Tell them how the interview went
- "Outcome" reminder: Let them know you got (or didn't get) the job
- "Keep warm" reminder: Periodic check-ins for dormant references

### 🎯 Match Scoring
- Input job requirements, get ranked reference suggestions
- "For a tech lead role, your top references are: 1. Sarah (former tech lead), 2. Mike (worked on scaling projects together)"
- Identify gaps: "You have no references who can speak to people management"

### 📊 Reference Health Dashboard
- Green/Yellow/Red status for each reference
- Factors: Recency of contact, usage frequency, relationship tenure
- Actionable tips: "Send a LinkedIn congratulations to keep this relationship warm"

### 📝 Request Templates
- Pre-written messages for asking to be a reference
- Templates for heads-up emails before job applications
- Thank you templates after interview rounds
- Outcome notification templates (got the job / didn't get it)

### 🔒 Privacy-First
- All data stored locally or E2E encrypted
- References never know they're in your app
- No LinkedIn scraping or social integrations that leak data

## User Flow

```
1. Add Reference
   ├── Name, Title, Company, Contact Info
   ├── Relationship: Manager | Peer | Report | Client | Mentor
   ├── Skills they can vouch for: [Technical] [Leadership] [Collaboration]
   ├── Relationship strength: Strong | Good | Okay | Needs Warming
   └── Notes: "Loved working together on Project X"

2. Starting Job Search
   ├── Input target role type
   ├── Get matched references with reasoning
   ├── See usage history and cooldown status
   └── Identify gaps in reference coverage

3. Using a Reference
   ├── Select reference to submit
   ├── Prompted: "Did you give them a heads up?"
   ├── Log submission with company/role
   └── Set follow-up reminder

4. After Interview Round
   ├── Reminder: "Update your references on how it went"
   ├── Quick-send template or custom message
   └── Log interaction

5. Job Search Complete
   ├── Prompt: "Let your references know the outcome"
   ├── One-click thank you for each reference used
   └── Update reference health scores
```

## Why This Wins

| Problem | Current "Solution" | RefTrack |
|---------|-------------------|----------|
| Tracking usage | Mental notes / spreadsheets | Automatic logging + dashboards |
| Reference burnout | Realize too late | Proactive warnings + rotation |
| Keeping references informed | Forget constantly | Automated reminder workflows |
| Matching refs to jobs | Gut feeling | Skill-based matching algorithm |
| Contact info decay | Outdated spreadsheet | Verification prompts |

## Competitive Landscape

### What Exists
- **LinkedIn** — Shows connections but no reference tracking
- **Password managers** — Store contact info but no workflow
- **Personal CRM (Clay, Monica)** — General relationships, not reference-specific
- **Job search apps** — Focus on applications, not references

### Gap in Market
No tool specifically addresses the reference management workflow. This is a **category-creating** opportunity for a focused, single-purpose tool.

## Monetization

### Freemium Model
- **Free**: Up to 5 references, basic tracking
- **Pro ($4/month)**: Unlimited references, templates, reminders
- **Job Search Mode ($12/month)**: Active search features, match scoring, priority support

### B2B Angle
- Career coaches could use with clients
- Outplacement services bundle
- University career centers

## Technical Approach

### MVP Stack
- **Frontend**: React/Next.js PWA (works offline)
- **Storage**: Local-first with optional cloud sync
- **Backend**: Minimal — mostly client-side logic
- **Notifications**: Email or push reminders

### Data Model
```typescript
interface Reference {
  id: string;
  name: string;
  title: string;
  company: string;
  email: string;
  phone?: string;
  linkedIn?: string;
  
  relationship: 'manager' | 'peer' | 'report' | 'client' | 'mentor' | 'academic';
  skills: string[];  // What they can speak to
  strength: 'strong' | 'good' | 'okay' | 'needs_warming';
  
  lastContactedAt: Date;
  lastVerifiedAt: Date;
  notes: string;
}

interface ReferenceUsage {
  id: string;
  referenceId: string;
  company: string;
  role: string;
  submittedAt: Date;
  headsUpSent: boolean;
  followUpSent: boolean;
  outcomeSent: boolean;
  outcome?: 'got_offer' | 'rejected' | 'withdrew' | 'pending';
}
```

## Success Metrics

- **User Activation**: Added 3+ references within first session
- **Engagement**: Reference logged per job application
- **Retention**: Active during job search periods (may be seasonal)
- **NPS**: "Would you recommend to a friend job searching?"

## Launch Strategy

1. **Reddit Launch**: r/jobs, r/careerguidance, r/cscareerquestions
2. **Twitter/X**: Job search and career advice communities
3. **LinkedIn Content**: "The hidden skill of managing references" posts
4. **SEO**: "How to manage professional references" content
5. **Partnership**: Career coaches, resume writers

## Future Features

- **Reference request automation**: Generate and track outreach
- **Anonymous feedback**: Did the reference actually help?
- **Calendar integration**: Schedule reference check-ins
- **Interview prep**: "What your references might say" based on history
- **Multi-user**: Couples job searching together

---

## Prototype

See `prototype/index.html` for interactive demo.

**Core Screens:**
1. Reference roster with health indicators
2. Add/edit reference form
3. Usage logging flow
4. Match scoring for job roles
5. Reminder dashboard

---

*Researched and documented by Duncan ⚔️*
*Source: Reddit r/jobs, r/careerguidance, r/recruitinghell*
*Date: February 25, 2026*
