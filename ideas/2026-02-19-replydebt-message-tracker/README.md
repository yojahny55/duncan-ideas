# ReplyDebt 💬

**Track your unanswered messages across platforms. Know who's been waiting the longest. Never forget to respond.**

## Problem Statement

Modern communication is fragmented across email, SMS, Slack, WhatsApp, Discord, LinkedIn, and more. People lose track of messages they meant to respond to, leaving contacts waiting for days, weeks, or indefinitely.

From Reddit r/SideProject:
> "It would be awesome to see all my emails, phone calls, voicemails, and texts in one spot so I'm not bouncing around all day."

The pain is real:
- **Response guilt** — knowing you owe someone a reply but can't remember who
- **Platform hopping** — checking 5+ apps just to see who's waiting
- **Aging messages** — some people wait weeks because you simply forgot
- **Professional damage** — missed replies hurt relationships and opportunities

## Target Users

1. **Knowledge workers** juggling multiple communication platforms
2. **Freelancers/consultants** managing client communications across channels
3. **Busy professionals** with overflowing inboxes
4. **Anyone with response anxiety** who knows they're leaving people hanging

## Proposed Solution

**ReplyDebt** is a unified "response debt" tracker that shows:
- All unanswered messages across connected platforms
- How long each person has been waiting
- Priority scoring based on wait time + relationship importance
- "Clear the debt" workflow to batch through responses

## Key Features

### Core Features
- **Unified Dashboard** — See all pending responses in one view
- **Wait Time Tracking** — "Sarah has been waiting 3 days" with visual aging
- **Platform Integrations** — Email, SMS, Slack, Discord, WhatsApp, LinkedIn
- **Smart Priority** — VIP contacts, long-wait messages bubble up
- **Response Snooze** — "Remind me to reply tomorrow"
- **Mark as Intentional** — Archive without responding (for messages that don't need replies)

### Gamification
- **Debt Score** — Lower is better. See your total hours/days of outstanding responses
- **Streaks** — "Inbox Zero" streaks for keeping debt low
- **Weekly Report** — "You cleared 23 messages this week. Avg response time: 4.2 hours"

### AI Features (Premium)
- **Smart Categorization** — "Needs reply" vs "FYI only" vs "Already handled"
- **Draft Suggestions** — One-click response drafts
- **Response Time Insights** — "You take 2x longer to reply to work emails on Mondays"

## User Flow

```
1. Connect Accounts
   └── OAuth/API for email, Slack, etc.

2. Initial Scan
   └── Pull all unread/unanswered messages
   └── AI categorizes: Needs Reply | FYI | Handled

3. Dashboard View
   ├── Sorted by wait time (longest first)
   ├── VIP badges for important contacts
   └── Platform icons for context

4. Action on Message
   ├── Reply → Opens native app/web
   ├── Snooze → Set reminder
   └── Archive → Mark as intentional no-reply

5. Weekly Summary
   └── Email digest of response performance
```

## Competitive Analysis

| Product | What It Does | Gap |
|---------|-------------|-----|
| Superhuman | Fast email | Email only, expensive |
| Hey | Screened inbox | Email only |
| Spark | Smart inbox | Email only |
| Unified Inbox apps | Aggregate messages | Don't track response debt |

**ReplyDebt's Differentiation:**
- **Response-centric** — not about reading, about replying
- **Multi-platform** — goes beyond email
- **Guilt-first design** — shows who's waiting, not just what's unread

## Technical Architecture

### Frontend
- Next.js + React
- Tailwind CSS
- Real-time updates via WebSocket

### Backend
- Node.js API
- PostgreSQL for user data
- Redis for caching/real-time

### Integrations
- **Email**: Gmail API, Outlook Graph API
- **Messaging**: Slack API, Discord API
- **SMS**: Twilio (read receipts where supported)
- **LinkedIn**: Unofficial API/scraping (risky)

### Privacy Considerations
- Messages stay on provider servers
- We only store: sender, timestamp, replied status
- Zero message content storage
- SOC 2 compliance path

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 2 platforms, 7-day history |
| Pro | $8/mo | Unlimited platforms, AI categorization |
| Team | $15/user/mo | Shared VIP lists, team analytics |

## MVP Scope (4 weeks)

### Week 1
- [ ] Gmail integration (OAuth + message sync)
- [ ] Basic dashboard UI

### Week 2
- [ ] Wait time tracking + sorting
- [ ] Manual mark as replied/archive

### Week 3
- [ ] Slack integration
- [ ] VIP tagging

### Week 4
- [ ] Weekly email digest
- [ ] Mobile-responsive design

## Success Metrics

- **Activation**: Connect 2+ platforms within 7 days
- **Engagement**: Daily active rate > 30%
- **Core metric**: Average response debt (hours) decreasing week over week
- **Conversion**: Free → Pro conversion > 5%

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Platform API restrictions | Start with stable APIs (Gmail, Slack) |
| Privacy concerns | Zero content storage, clear privacy policy |
| User overload | Smart defaults, gradual onboarding |
| "Another inbox" fatigue | Position as action list, not reading list |

## Why Now?

1. **Remote work** → More platforms, more fragmentation
2. **Async culture** → Response expectations are shifting
3. **AI maturity** → Smart categorization is finally good
4. **Response anxiety** → People genuinely feel bad about this

---

## Source

Reddit r/SideProject, February 2025:
- "It would be awesome to see all my emails, phone calls, voicemails, and texts in one spot"
- Multiple threads about communication overload and "who am I forgetting to reply to"

---

*Idea documented by Duncan ⚔️ | 2026-02-19*
