# SnapContext - Remember WHY You Saved It

## Problem Statement

People save content constantly — screenshots, images, links, text snippets — but quickly forget **why** they saved it. The context is lost, leaving them with cluttered galleries and folders full of mystery saves.

### Source Tweets

**Primary source:**
> "I saved this image of this guy for a post last night but forgot what it was. Now I'm just angry looking at his stupid fucking face."
> — [@BigBoris_2](https://x.com/BigBoris_2/status/2021239717384110242), Feb 10, 2026

**Supporting evidence:**
> "this picture is not mine, i have seen it somewhere. but i forgot. i saved it on my phone. so credit to the person who edited this"
> — [@mikhaelanaa](https://x.com/mikhaelanaa/status/2020390916981457261), Feb 8, 2026

> "I forgot I had this video saved but found it. Saw that post and thought of this video specifically."
> — [@favvsdgaf](https://x.com/favvsdgaf/status/2021358848825868443), Feb 10, 2026

> "I had this saved, but forgot to put it in 😭"
> — [@DanaeLewis127](https://x.com/DanaeLewis127/status/2020512429155705044), Feb 8, 2026

> "im tryin to deal with my screenshot hoarding addiction so i compile all the bllk pwc dialogues in a database"
> — [@fukuraiguma](https://x.com/fukuraiguma/status/2021232454397313535), Feb 10, 2026

## Target Users

1. **Content creators** — Save references, memes, inspiration but forget context when posting
2. **Researchers/students** — Bookmark articles, screenshots but lose the "why" for assignments
3. **Social media power users** — Save content to share later but forget the intended audience/thread
4. **Digital hoarders** — Have thousands of screenshots with zero context
5. **ADHD/neurodivergent users** — Struggle with context-switching and remembering intentions

## Proposed Solution

**SnapContext** — A mobile-first app that captures the **WHY** along with the **WHAT** when you save content.

### Core Concept

When you share/save any content to SnapContext, a quick overlay prompts you to add context:
- Voice note (transcribed automatically)
- Quick text note
- AI-suggested context based on clipboard + recent activity
- Pre-set tags ("for Twitter post", "for work presentation", "gift idea", etc.)

### How It Works

1. **Save with Context** — Share any content to SnapContext from any app
2. **Quick Capture** — 3-second voice note or tap a pre-set tag
3. **AI Enhancement** — Automatically suggests context from clipboard, recent searches, current time
4. **Smart Retrieval** — Search by context ("that meme for responding to bad takes") not just metadata
5. **Use Reminders** — Nudges you to use saved items before they go stale
6. **Orphan Detection** — Shows content you saved but never used

## Key Features

1. **Quick Context Capture**
   - Voice-to-text context notes (under 5 seconds)
   - Smart tag suggestions based on usage patterns
   - One-tap preset categories (Reply fodder, Gift idea, Work reference, etc.)

2. **AI Context Suggestions**
   - Reads clipboard for URLs, text that might explain context
   - Uses time of day (saved at 2am = probably not work-related)
   - Detects content type and suggests appropriate tags

3. **Contextual Search**
   - Natural language: "that chart about productivity"
   - Search within notes, not just filenames
   - Fuzzy matching for half-remembered context

4. **Use-It-Or-Lose-It Nudges**
   - Weekly digest of "orphaned saves" (saved 30+ days, never used)
   - Context-triggered reminders ("You saved this for Twitter threads — you're drafting one now!")
   - Decay indicators showing how old saves are getting

5. **Source Tracking**
   - Auto-captures source URL/app when possible
   - Reverse image search integration
   - Credit attribution helper

6. **Collections by Intent**
   - Auto-organize by why, not what
   - "Things to reply with" vs "Research" vs "Buy later"
   - Cross-device sync

7. **Quick Use Actions**
   - One-tap copy to clipboard
   - Direct share to specific apps
   - Mark as "used" to track what's been deployed

8. **Privacy-First**
   - All AI processing on-device where possible
   - No content stored in cloud without encryption
   - Export all data anytime

## Technical Stack

### Mobile (Primary)
- **Framework:** React Native / Expo
- **Local Storage:** SQLite + encrypted file storage
- **Voice:** Whisper (on-device for privacy)
- **AI:** Local LLM for suggestions (Llama 3), cloud fallback optional

### Backend (Sync)
- **API:** Node.js/Express or Go
- **Database:** PostgreSQL + vector embeddings (pgvector)
- **Storage:** S3-compatible (Cloudflare R2 for cost)
- **Search:** Typesense or Meilisearch

### Web Companion
- **Framework:** Next.js
- **UI:** Tailwind + Radix primitives

## Monetization Strategy

### Freemium Model

**Free Tier:**
- 100 saves/month
- Basic text context (no voice)
- 30-day history
- Local storage only

**Pro ($4.99/mo):**
- Unlimited saves
- Voice context capture
- AI-powered suggestions
- Cloud sync across devices
- Advanced search
- Orphan detection + nudges

**Team ($12.99/user/mo):**
- Shared collections
- Team tags
- Admin controls
- Priority support

### Alternative: One-Time Purchase
- $19.99 lifetime (limited time launch offer)
- Sustainable for indie dev, attractive for users who hate subscriptions

## Competition Analysis

| App | What It Does | Gap SnapContext Fills |
|-----|-------------|----------------------|
| **Apple Photos** | Stores images | Zero context, bad search |
| **Google Photos** | AI-organized photos | Categorizes WHAT, not WHY |
| **Pinterest** | Visual bookmarking | No context notes, no reminders |
| **Pocket/Instapaper** | Article saving | Links only, no images/screenshots |
| **Notion** | Everything app | Too heavy for quick saves |
| **Raindrop.io** | Bookmark manager | Links only, no quick capture |
| **Marqly** | AI bookmark manager | Web-focused, not mobile-first |

**Key differentiator:** No one focuses on capturing the **intent/context** at save time with minimal friction.

## Why This Will Work

1. **Universal Pain Point** — Everyone with a smartphone has mystery screenshots
2. **Minimal Behavior Change** — Same share flow, just +3 seconds for context
3. **AI Timing is Right** — On-device AI now good enough for real-time suggestions
4. **No Direct Competition** — The "why" gap is unaddressed by major players
5. **Clear Value Prop** — "Never forget why you saved something again"
6. **Viral Potential** — "SnapContext reminded me I saved this for exactly this moment"
7. **ADHD Community** — Large, underserved market that loves tools for context-switching

## Launch Strategy

1. **MVP Focus:** iOS share extension + voice notes + basic search
2. **Beta:** ADHD/productivity Twitter communities
3. **Launch:** ProductHunt, Hacker News, r/productivity
4. **Content:** "My 10,000 mystery screenshots" viral post
5. **Partnerships:** Integrate with popular apps (Notion, Obsidian, etc.)

---

*Idea sourced from Twitter/X on February 11, 2026*
