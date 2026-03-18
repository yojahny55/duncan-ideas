# ActionPull — Meeting Recording → Structured Action Items

> **Upload a meeting recording or transcript. Get back a clean list of action items sorted by who's responsible, with deadlines and context.**

## Source

**Reddit** — 26+ threads across r/remotework, r/productivity, r/salesforce, r/startups, r/AppIdeas describing the exact same frustration: transcription tools give you a wall of text, but nobody wants to read a 45-minute transcript to find the 3 things they need to do.

Key complaints:
- "Fireflies transcript looks cool until you realize it's just a wall of words"
- "I spend 20 minutes after every meeting re-reading the transcript to figure out who committed to what"
- "Otter/Fireflies/Fathom give summaries but miss the nuance of WHO said they'd do WHAT by WHEN"
- "My team has 5+ meetings a day — nobody reads the transcripts"

## Problem Statement

Modern meeting transcription tools (Otter.ai, Fireflies.ai, Fathom, tl;dv) solved the *recording* problem but created a new one: **information overload**. They produce transcripts and generic summaries, but:

1. **Action items are buried** in walls of text
2. **Ownership is unclear** — "we should do X" doesn't assign a person
3. **Deadlines are vague** — "soon," "next week," "after launch"
4. **Follow-up is manual** — action items live in the transcript, not your task manager
5. **Meeting-to-meeting context is lost** — decisions from last week's meeting don't carry forward

The result: people leave meetings thinking they know what to do, but a week later, nothing happened because nobody wrote it down clearly.

## Target Users

| Segment | Pain Level | Size |
|---------|-----------|------|
| Remote team leads (5-20 person teams) | 🔴 High | ~4M in US |
| Product managers | 🔴 High | ~1.5M globally |
| Project managers / Scrum Masters | 🔴 High | ~2M globally |
| Startup founders (wearing many hats) | 🟠 Medium-High | ~5M globally |
| Freelancers managing client meetings | 🟡 Medium | ~10M+ |

**Primary persona:** Remote team lead with 4-8 meetings/day who can't remember what was decided or assigned across all of them.

## Proposed Solution

**ActionPull** — a meeting intelligence tool focused exclusively on extracting, assigning, and tracking action items.

### How It Works

1. **Upload** — Drag a recording (audio/video) or paste a transcript
2. **Extract** — AI identifies every commitment, decision, and action item
3. **Assign** — Each item is attributed to the person who said it or was assigned
4. **Deadline** — AI infers deadlines from context ("next sprint" → actual date)
5. **Export** — Push to Jira, Linear, Asana, Notion, Slack, or just copy the list

### Key Differentiator

Existing tools try to do everything (transcription + summary + action items + CRM updates + coaching). ActionPull does ONE thing: **pull out what needs to happen and who does it.** That's the only thing people actually need after 90% of meetings.

## Key Features

### Core (MVP)
- 🎙️ **Audio/Video Upload** — MP3, MP4, WAV, WebM up to 2 hours
- 📋 **Transcript Paste** — Already have a transcript? Just paste it
- 🎯 **Smart Extraction** — AI identifies action items, decisions, and commitments
- 👤 **Owner Attribution** — Maps items to specific speakers
- 📅 **Deadline Inference** — "next week" → "March 25, 2026"
- 🏷️ **Priority Detection** — Urgent vs. nice-to-have from tone and language
- 📤 **One-Click Export** — Copy, email, or push to task managers

### Growth
- 🔗 **Integrations** — Jira, Linear, Asana, Notion, Trello, Slack
- 🔄 **Meeting-to-Meeting Tracking** — "Last meeting you said X — is it done?"
- 📊 **Accountability Dashboard** — Who completes their items? Who doesn't?
- 🤖 **Bot Mode** — Auto-join Zoom/Meet/Teams, extract in real-time
- 📧 **Auto-Send** — Email action items to all attendees after meeting
- 🔍 **Search Across Meetings** — "What did Sarah commit to last month?"

### Premium
- 📈 **Meeting Effectiveness Score** — Ratio of time spent vs. actions generated
- 🔔 **Follow-Up Nudges** — Reminders before deadlines
- 👥 **Team Patterns** — "Engineering meetings generate 3x more actions than design reviews"
- 🏢 **Org-Wide Intelligence** — Cross-team dependency detection

## Technical Architecture

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Upload UI   │────▶│ Transcription│────▶│   AI Action  │
│  (React)     │     │  (Whisper)   │     │  Extraction  │
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                  │
                     ┌──────────────┐     ┌───────▼───────┐
                     │  Export /    │◀────│  Attribution  │
                     │  Integrations│     │  & Deadlines  │
                     └──────────────┘     └───────────────┘
```

### Stack
- **Frontend:** React + TailwindCSS
- **Backend:** Node.js / Python FastAPI
- **Transcription:** OpenAI Whisper (local) or Deepgram API
- **AI Extraction:** Claude/GPT-4 with structured output prompts
- **Speaker ID:** pyannote.audio for diarization
- **Storage:** PostgreSQL + S3
- **Integrations:** REST APIs (Jira, Linear, etc.)

## Market Analysis

### Competitive Landscape

| Tool | Transcription | Summary | Action Items | Owner Attribution | Task Export | Price |
|------|:---:|:---:|:---:|:---:|:---:|---:|
| Otter.ai | ✅ | ✅ | ⚠️ Basic | ❌ | ❌ | $17/mo |
| Fireflies.ai | ✅ | ✅ | ⚠️ Basic | ⚠️ | ⚠️ | $19/mo |
| Fathom | ✅ | ✅ | ⚠️ Basic | ❌ | ❌ | $19/mo |
| tl;dv | ✅ | ✅ | ⚠️ | ⚠️ | ⚠️ | $25/mo |
| Fellow.app | ❌ | ❌ | ✅ Manual | ✅ Manual | ✅ | $9/mo |
| **ActionPull** | ✅ | ❌ | ✅ **AI** | ✅ **AI** | ✅ | **$12/mo** |

**Key insight:** Existing tools treat action items as a feature. ActionPull treats it as THE product.

### Market Size
- TAM: $8.5B (meeting productivity software)
- SAM: $1.2B (meeting intelligence / action tracking)
- SOM: $15M (early adopter remote teams, first 2 years)

### Why Now?
1. **AI quality** — LLMs can now reliably extract structured data from messy conversations
2. **Remote work permanent** — More meetings = more need for action tracking
3. **Meeting fatigue** — Companies actively trying to reduce meetings; making them productive helps
4. **Transcription commoditized** — Whisper made transcription free; the value is in what you DO with it

## Business Model

| Tier | Price | Features |
|------|-------|----------|
| Free | $0/mo | 5 meetings/mo, basic extraction, copy to clipboard |
| Pro | $12/mo | Unlimited meetings, integrations, deadline tracking |
| Team | $8/user/mo | Shared dashboard, accountability metrics, bot mode |
| Enterprise | Custom | SSO, org intelligence, API access |

**Revenue target:** $50K ARR in year 1 (4,000 Pro users or 200 five-person teams)

## Prototype

→ [View Prototype](prototype/index.html)

Interactive demo showing:
- Meeting upload/paste interface
- AI extraction with progress animation
- Action items sorted by owner with deadlines
- Export to multiple formats
- Meeting history dashboard

---

*Researched and documented by Duncan ⚔️ — March 18, 2026*
*Source: Reddit (26+ threads across r/remotework, r/productivity, r/salesforce, r/AppIdeas)*
