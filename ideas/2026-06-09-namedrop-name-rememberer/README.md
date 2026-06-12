# NameDrop — Never Forget a Name Again 🧠

> The social memory app that gives you superpowers at parties, meetings, and school pickup.

## Problem

**Everyone forgets names. It's universal, embarrassing, and socially costly.**

- 85% of adults consider themselves "bad with names" (Journal of Cognitive Psychology)
- Forgetting someone's name is rated the #1 social faux pas — worse than spilling a drink
- 2% of the population has prosopagnosia (face blindness) — that's 6.6M Americans
- Introverts and socially anxious people perform worse at face recognition (research-validated)
- Stress and cortisol directly impair name retrieval (especially in high-pressure networking)
- The average professional meets 500-1,000+ new people per year

**Current "solutions" don't work:**
- Phone contacts = no face, no context, no "where did I meet them?"
- LinkedIn = professional only, you need to remember their name to search
- Notes app = unstructured, never reviewed before events
- Mnemonic techniques = work for memory champions, not normal people
- No app exists that's purpose-built for the "who was that again?" moment

## Solution

**NameDrop** — your social memory sidekick.

1. **Quick Capture** — After meeting someone, log their name, photo, context ("Jake's BBQ, March"), and 2-3 details ("golden retriever, marketing at Adobe, kid named Leo") in 15 seconds
2. **Pre-Event Briefing** — Before walking into any room, review the people you'll likely see. Calendar integration detects upcoming meetings/parties/school events and surfaces relevant contacts
3. **Smart Flashcards** — Spaced repetition for names and faces. 30-second daily review keeps your memory sharp
4. **Face Match** — Snap a discreet photo, NameDrop tells you who they are and your conversation history
5. **Group Context** — "PTA meeting tonight" → shows all 12 parents you've met at PTA events with their kids' names and your last conversation topic
6. **Conversation Hooks** — Before seeing someone, get a cheat sheet: "Ask about their trip to Japan" or "Their dog had surgery last month — check in"

## Target Users

| Segment | Size | Pain Level |
|---------|------|------------|
| Professionals who network | 30M+ US | 🔴 High — career impact |
| Parents at school/events | 35M+ US | 🟠 Medium — 20+ other parents per kid |
| Introverts/socially anxious | 50M+ US | 🔴 High — name-blindness amplifies anxiety |
| People with prosopagnosia | 6.6M US | 🔴 Critical — medical necessity |
| College students | 20M US | 🟠 Medium — 100+ classmates/semester |
| Conference attendees | 5M+ US yearly | 🔴 High — 50-200 new people per event |

## Key Features

### Core
- **15-Second Capture** — Name, face, where, when, 3 key details. Voice-first option for hands-free
- **Pre-Event Briefing** — Calendar-aware review of who you'll see, with conversation starters
- **Spaced Repetition Flashcards** — 30-second daily name/face review
- **Search by Context** — "Who was the guy from the BBQ with the golden retriever?" → found
- **Group Tagging** — Tag people by event/group ("School parents", "Soccer team", "Work conference")
- **Conversation History** — Log what you talked about to avoid repeating yourself

### Pro
- **Face Match** — Point camera, identify person from your library + get context
- **LinkedIn Import** — Bulk import connections with faces
- **Shared Groups** — Both parents see the same school parent directory with notes
- **Event Scan** — Upload a group photo, NameDrop identifies everyone you've met

### Privacy-First
- All data stored on-device
- Face matching only against YOUR personal library (no creepy stranger identification)
- No cloud upload of faces
- Share notes with partner only with explicit consent

## Market Research

### Competitors
| App | What it does | Why it's not NameDrop |
|-----|-------------|----------------------|
| Contacts app | Stores names/numbers | No faces, no context, no review, no event awareness |
| LinkedIn | Professional networking | Only work contacts, must remember name to search |
| Evernote/Notes | Generic notes | Unstructured, no review, no face matching |
| Anki/flashcards | Spaced repetition | Not purpose-built for social memory, terrible UX |
| Humin (dead) | Contextual contacts | Shut down 2017, was ahead of its time |
| Monica CRM | Personal CRM | B2B/influencer-focused, not everyday social |

### Market Size
- 85% of adults = 220M+ US adults who self-report being bad with names
- Professional networking market: $1.8B (Eventbrite/B2B events)
- Social anxiety treatment market: $12B+
- Face recognition market: $5.15B (2022) → $15.84B (2030)
- No direct competitor owns the "social memory" position

### Why Now
- On-device ML finally powerful enough for private face matching
- Spaced repetition APIs mature (Anki-like scheduling as a service)
- Social anxiety at all-time highs post-COVID (more people need help)
- Calendar/contacts APIs enable automatic event-to-people matching
- Humin proved the concept but was too early (2014, no on-device ML)

## Business Model

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 50 people, manual capture, search, basic flashcards |
| **Pro** | $3.99/mo | Unlimited people, face match, calendar briefing, conversation hooks, LinkedIn import |
| **Family** | $6.99/mo | Pro for 2, shared groups, partner sharing |
| **Pro Unlimited** | $9.99/mo | Everything + event scan, group photo matching, priority face ML |

**Revenue projection:** 2% of 220M target → 4.4M users → 15% paid → 660K paying → avg $5/mo → $39.6M ARR

## Technical Feasibility

- **On-device face recognition:** Apple Vision Framework / Android ML Kit (free, private)
- **Spaced repetition:** SM-2 algorithm (open source, battle-tested by Anki)
- **Calendar integration:** EventKit (iOS) / Calendar Provider (Android)
- **Contact matching:** Contacts Framework / Contacts Provider
- **Voice capture:** Speech Framework / SpeechRecognizer
- **Storage:** Core Data / Room (on-device SQLite)

## Differentiation

1. **Social-first, not CRM-first** — Monica/Salesforce are for managing contacts. NameDrop is for *remembering* them
2. **Event-aware** — Knows you're walking into a PTA meeting and prepares you
3. **Conversation-focused** — Not just names, but "what did we talk about?" and "what should I ask about?"
4. **Privacy by default** — On-device face matching. Your faces never leave your phone
5. **Spaced repetition** — Scientifically proven memory technique applied to social context
6. **15-second capture** — Designed for the moment after a handshake, not a desk workflow

## Name

**NameDrop** — as in "dropping names" but also literally dropping a name into your memory. Playful, memorable, self-explanatory.

## Tagline

*"Your social memory, supercharged."*

---

**Date:** June 9, 2026
**Source:** X/Twitter + Research (Journal of Cognitive Psychology, prosopagnosia research, face recognition market data)
**Category:** Social / Productivity / Accessibility
**Market Size:** 220M+ US adults who struggle with names
**Revenue Model:** Freemium SaaS ($0-9.99/mo)
