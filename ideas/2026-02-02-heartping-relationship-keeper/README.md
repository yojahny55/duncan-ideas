# 💜 HeartPing - Stay in Touch with People Who Matter

> Your personal relationship CRM — never let important connections fade

**Date:** February 2, 2026  
**Source:** Reddit (r/SomebodyMakeThis, r/fossdroid)  
**Status:** 💡 Concept + Prototype

---

## Problem Statement

Modern life makes it easy to lose touch with people we care about. We mean to call our parents more, text old friends, or remember anniversaries — but life gets busy. Before we know it, months (or years) have passed.

### Reddit Sources
> "An app that reminds us to stay in touch with not-so-close friends and relatives. It should track important dates and set communication preferences."
> — [r/fossdroid](https://www.reddit.com/r/fossdroid/comments/1jbw76f/comment/mi1c29t/)

> "A Stay in Touch App: An app that reminds users to keep in touch with friends and family, tracking important dates and setting communication preferences."
> — [r/SomebodyMakeThis compilation](https://www.reddit.com/r/SomebodyMakeThis/comments/1hm4j2m/)

### The Pain Points
1. **Guilt spiral** - Feeling bad about not reaching out, which makes it harder to reach out
2. **No system** - Relying on memory for dozens of relationships
3. **Asymmetric effort** - Some people always initiate; others don't
4. **Important dates slip** - Forgetting birthdays, anniversaries, milestones
5. **Relationship decay** - Friendships fading from neglect, not intent
6. **Contact overload** - 500+ phone contacts but no prioritization

---

## Target Users

### Primary
- **Busy professionals** (30-50) with large networks they want to maintain
- **Long-distance families** who struggle to stay connected
- **Introverts** who care but forget to reach out
- **Networkers & salespeople** who need relationship management

### Secondary
- **Remote workers** who miss casual office interactions
- **Recent graduates** trying to maintain college friendships
- **Caregivers** managing family communication

### User Personas

**1. Networking Nina**
- 35, marketing director, Tampa FL
- 200+ professional contacts, 50+ personal friends
- Knows she should "maintain her network" but forgets
- Currently uses spreadsheets (which she never updates)

**2. Guilty Gary**
- 42, software engineer, works remote
- Close family scattered across 3 states
- Feels bad he doesn't call his mom more
- Wants gentle nudges, not nagging

**3. Introverted Ian**
- 28, data analyst
- 10 close friends he genuinely cares about
- Time blindness makes months feel like weeks
- Needs a simple system, not another complex app

---

## Proposed Solution

**HeartPing** - A relationship maintenance app that helps you stay connected with the people who matter through intelligent reminders and relationship insights.

### Core Philosophy
- **Not a CRM** — It's for people you care about, not leads to convert
- **Not nagging** — Gentle, customizable nudges at the right time
- **Not surveillance** — You control what to track and share
- **Not another contact app** — Focused on connection quality, not quantity

### How It Works
1. **Import** - Select contacts you want to nurture (not all 500)
2. **Set cadence** - How often you want to connect (weekly/monthly/quarterly)
3. **Get nudged** - Smart reminders when it's time to reach out
4. **Log interactions** - Quick notes after calls/visits (optional)
5. **Never forget** - Birthday & milestone reminders

---

## Key Features

### MVP Features (v1.0)
1. **💜 Inner Circle** - Select and prioritize key relationships (not all contacts)
2. **⏰ Smart Nudges** - Customizable reminders ("You haven't called Mom in 3 weeks")
3. **🎂 Date Tracker** - Birthdays, anniversaries, important milestones
4. **📝 Quick Notes** - Log calls/visits with optional notes
5. **📊 Connection Health** - Visual dashboard of relationship status
6. **🔕 Quiet Mode** - Pause reminders during vacations/busy periods
7. **📤 One-Tap Reach Out** - Quick actions to call, text, or email
8. **🔄 Contact Sync** - Import from phone contacts (selective)

### Future Features (v2.0+)
9. **🤖 AI Conversation Starters** - "Ask about their new job" context
10. **👨‍👩‍👧 Family Hub** - Shared family communication tracking
11. **📅 Calendar Integration** - Schedule catch-up calls
12. **💬 Group Check-ins** - Coordinate with siblings for parent calls
13. **🎁 Gift Reminders** - Upcoming occasions + gift ideas
14. **📈 Relationship Insights** - Patterns over time
15. **🔒 Privacy Mode** - Local-only data option
16. **⌚ Watch App** - Quick logging from wrist

---

## Technical Stack

### Frontend (Mobile-First)
- **Framework:** React Native (iOS/Android)
- **Web:** Next.js PWA for desktop access
- **UI:** Tailwind CSS + custom design system
- **State:** Zustand or Jotai

### Backend
- **Runtime:** Node.js with Fastify
- **Database:** PostgreSQL (relationships) + Redis (caching)
- **Auth:** Clerk or Auth.js
- **Notifications:** Firebase Cloud Messaging / APNs

### Infrastructure
- **Cloud:** AWS or Vercel
- **Privacy:** End-to-end encryption for notes
- **Sync:** Conflict-free sync for offline support

### Integrations
```
┌─────────────────┐
│   HeartPing     │
├─────────────────┤
│ ↔ Phone Contacts│
│ ↔ Google Calendar│
│ ↔ Apple Calendar│
│ ↔ WhatsApp (deep link)│
│ ↔ Signal (deep link)│
│ ↔ Telegram (deep link)│
└─────────────────┘
```

---

## Monetization Strategy

### Free Tier
- Up to 15 relationships
- Basic reminders
- Birthday tracking
- Standard notifications

### Premium ($3.99/month or $29.99/year)
- Unlimited relationships
- AI conversation starters
- Advanced insights & analytics
- Family hub (shared tracking)
- Calendar integration
- Priority support
- No ads

### Business Model Mix
| Revenue Stream | Year 1 Est. |
|----------------|-------------|
| Premium Subscriptions | 80% |
| Family Plans ($6.99/mo) | 15% |
| Enterprise/Team Plans | 5% |

**No ads in free tier** — This is about relationships, not attention harvesting.

---

## Competition Analysis

| App | Strengths | Weaknesses |
|-----|-----------|------------|
| **UpHabit** | Similar concept | Clunky UI, limited free tier |
| **Fabriq** | Good design | iOS only, expensive |
| **Dex** | Professional focus | CRM-like, cold feeling |
| **Monica CRM** | Open source, privacy | Too complex for casual use |
| **Google Contacts** | Universal | Zero relationship intelligence |
| **Clay** | AI-powered | Expensive, networker focus |

### Competitive Advantages
1. **Emotional design** — Feels warm, not corporate
2. **Simple by default** — Complexity is optional
3. **Privacy-first** — Local-only mode available
4. **Cross-platform** — iOS, Android, Web
5. **Fair pricing** — Lower than competitors
6. **Not a CRM** — Personal relationships, not sales

---

## Why This Will Work

### Market Validation
1. **Pain is universal** — Everyone has relationships they neglect
2. **Reddit requests** — Multiple threads asking for this exact app
3. **Loneliness epidemic** — Post-pandemic isolation awareness
4. **Existing apps succeed** — UpHabit, Fabriq prove market exists
5. **No dominant player** — Space is fragmented

### Differentiation
Most existing apps feel like CRMs or are too complex. HeartPing is:
- **Simple enough** for your mom to use
- **Warm enough** to not feel transactional
- **Smart enough** to actually help

### Growth Strategy
1. **Word of mouth** — Users share with people they stay in touch with
2. **Referral program** — "Invite friends, get premium months"
3. **Content marketing** — Blog about meaningful connections
4. **App Store optimization** — Target "relationship" keywords

### Risk Mitigation
| Risk | Mitigation |
|------|------------|
| App fatigue | Make onboarding < 2 minutes |
| Privacy concerns | Local-only mode, transparent data policy |
| Feels transactional | Emotional design, warm copy |
| Users forget to log | Make logging optional, not required |

---

## Roadmap

### Phase 1: MVP (2 months)
- [ ] Core contact management
- [ ] Basic reminders
- [ ] Birthday tracking
- [ ] One-tap actions

### Phase 2: Polish (2 months)
- [ ] Connection health dashboard
- [ ] Quick notes
- [ ] Calendar integration
- [ ] iOS & Android apps

### Phase 3: Growth (3 months)
- [ ] AI conversation starters
- [ ] Family hub
- [ ] Premium features
- [ ] Referral program

---

## Copy & Microcopy Guidelines

### Tone
- Warm, not corporate
- Encouraging, not guilt-tripping
- Simple, not dumbed-down

### Example Notifications
- ✅ "Hey! It's been 3 weeks since you caught up with Mom. Quick call today?"
- ❌ "ALERT: Mom contact overdue by 21 days"

- ✅ "Sarah's birthday is tomorrow! 🎂"
- ❌ "Contact birthday approaching: Sarah (1 day)"

### Empty States
- "Your inner circle is waiting! Add people you want to stay connected with."
- Not: "No contacts found. Add contacts to get started."

---

## Prototype

See `/prototype/index.html` for interactive demo.

**Features demonstrated:**
- Inner circle management
- Connection health visualization
- Smart nudge interface
- Quick action flow
- Birthday/milestone tracking

---

## References

- [Reddit Request (fossdroid)](https://www.reddit.com/r/fossdroid/comments/1jbw76f/comment/mi1c29t/)
- [Reddit Compilation (SomebodyMakeThis)](https://www.reddit.com/r/SomebodyMakeThis/comments/1hm4j2m/)
- [UpHabit App](https://www.uphabit.com/)
- [Fabriq App](https://www.ourfabriq.com/)
- [Monica CRM](https://www.monicahq.com/)

---

*Generated by Duncan 🤖 | February 2, 2026*
