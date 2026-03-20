# AskThem — Family Story Preservation Before It's Too Late

> "After he's gone, the sound of your father's voice will break your heart but will heal your soul."

## The Problem

Every day, irreplaceable family stories die with the people who lived them. Parents and grandparents carry decades of memories — immigration journeys, family recipes, life lessons, war stories, cultural traditions — that vanish when they pass. Most people think "I'll ask them someday" and never do.

**The hard stats:**
- The average person loses all four grandparents by age 30
- 73% of adults say they wish they knew more about their family history (Ancestry.com 2023)
- Only 12% of families have any recorded oral history
- Once someone passes, their stories are gone forever — no undo button

**Why people don't do it:**
- Don't know what to ask ("Tell me about your childhood" → awkward silence)
- Feels morbid to bring up ("Are you expecting me to die?")
- No structure — conversations meander, key stories never surface
- Recording feels clinical and intimidating
- Results end up in random voice memos nobody finds later

## The Solution

**AskThem** — a guided family interview app that makes it natural, even enjoyable, to capture your family's stories.

The core insight: people don't need a recording app. They need **the right questions at the right time**, delivered in a way that doesn't feel like an interrogation.

### How It Works

1. **Pick a Topic** — Choose from curated question packs: Immigration Journey, Childhood Memories, Love Story, Career & Work, Cultural Traditions, Life Lessons, War & Service, Food & Recipes, and more
2. **Start a Session** — Sit with your parent/grandparent, tap a question, read it aloud. The app records the conversation naturally
3. **AI Enhancement** — After recording, AI transcribes, timestamps key moments, extracts names/dates/places, and creates a searchable archive
4. **Family Vault** — All stories organized by person, topic, and timeline. Shareable with family members
5. **Gentle Nudges** — Weekly prompts like "This Sunday, ask your mom about her favorite recipe from childhood" — timed for visits and calls

### What Makes It Different from "Just Use Voice Memos"

| Feature | Voice Memos | AskThem |
|---------|------------|---------|
| Question guidance | ❌ | ✅ 500+ curated questions by topic |
| Follow-up prompts | ❌ | ✅ AI suggests "ask about X next" |
| Auto-transcription | ❌ | ✅ With speaker separation |
| Searchable archive | ❌ | ✅ Search by name, place, date, topic |
| Family sharing | ❌ | ✅ Shared family vault |
| Timeline construction | ❌ | ✅ Auto-builds family timeline |
| Cultural templates | ❌ | ✅ Culture-specific question packs |
| Gentle reminders | ❌ | ✅ Don't-wait nudges |

## Target Users

### Primary
- **Adult children (30-55)** with aging parents — the "sandwich generation" who are starting to realize time is finite
- **Grandchildren (18-30)** curious about family history before grandparents pass

### Secondary
- **Genealogy enthusiasts** who want recorded oral history alongside their tree
- **Immigrant families** preserving origin stories and cultural memory
- **Military families** documenting service stories
- **Families dealing with early dementia** — capture stories while you still can

## Key Features

### 🎯 Guided Question Engine
- 500+ questions organized by life chapter and topic
- Culture-specific packs (Latino, Asian, African, European, etc.)
- Follow-up question AI: "Your mom mentioned 'Abuela Rosa' — ask about her next"
- Difficulty levels: Easy (childhood favorites) → Deep (regrets, fears, wisdom)

### 🎙️ Natural Recording
- Ambient recording mode — feels like a conversation, not an interview
- Speaker diarization (who said what)
- Auto-pause during silences
- Works on phone calls too (record remote conversations with consent)

### 📚 Family Story Vault
- Stories organized by person, topic, and chronological timeline
- Full-text search across all transcripts
- Photo attachment — link family photos to specific stories
- Family tree integration — connect stories to relatives

### 🧠 AI-Powered Enrichment
- Auto-transcription with timestamps
- Entity extraction (names, places, dates mentioned)
- Story summary generation
- "Chapters" — AI breaks long recordings into labeled segments
- Contradiction detection ("Wait, in another story you said 1962...")

### 🔔 Don't-Wait Nudges
- "Your dad's birthday is in 3 days — perfect time to ask about his childhood birthdays"
- "Mother's Day is coming — capture your mom's favorite memory of her mother"
- Seasonal: "Holiday season — ask about family traditions"
- Gentle escalation: "It's been 30 days since your last session with Mom"

### 🎁 Story Products
- Export as beautiful PDF book ("The Stories of Maria Chavez")
- Audio compilation — curated highlights reel
- Video slideshow — photos + audio stories
- Shareable family link (no app needed to view)

## Market Analysis

### Existing Solutions

| Product | Price | Gap |
|---------|-------|-----|
| StoryWorth | $99/year | Email-based only, no audio, no real-time guidance |
| Remento | $129/year | Video-focused, intimidating for elderly |
| Storyfile | Enterprise | AI avatar — creepy, not intimate |
| Heritage | Free | Genealogy-focused, no recording features |
| Voice memos | Free | Zero structure, unfindable later |

### AskThem's Edge
- **Question guidance** — the hardest part solved. Not "record your stories" but "here's exactly what to ask"
- **Audio-first** — less intimidating than video for elderly family members
- **Cultural sensitivity** — question packs designed for specific cultural contexts
- **Urgency engine** — gentle but real nudges about the passage of time
- **Family collaboration** — multiple family members can contribute and access

## Business Model

### Freemium
- **Free:** 5 recordings/month, 3 question packs, basic transcription
- **Family ($9.99/mo):** Unlimited recordings, all question packs, AI enrichment, family sharing (up to 10 members)
- **Legacy ($149 one-time):** Everything + lifetime access + printed book export + priority transcription

### Revenue Projections
- TAM: 150M adults in US with living parents/grandparents
- If 0.1% convert at $10/mo = $18M ARR
- Printed book upsell: $49-79 per book, high margin via print-on-demand
- Heritage DNA/Ancestry.com partnership potential

## Technical Stack

- **Frontend:** React Native (iOS + Android)
- **Backend:** Node.js + PostgreSQL
- **Audio:** Whisper for transcription, pyannote for diarization
- **AI:** GPT-4 for question follow-ups, entity extraction, summaries
- **Storage:** S3 for audio, encrypted at rest
- **Search:** Elasticsearch for full-text transcript search

## Emotional Hooks

The marketing writes itself:

- *"Your parents won't be here forever. Their stories don't have to die with them."*
- *"Ask your dad about his first car. Record the answer. Thank us later."*
- *"The question you'll regret not asking."*
- *"500 questions. Infinite memories."*

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Feels morbid | Frame as celebration, not preparation for death. "Capture the stories that make your family, your family" |
| Privacy concerns | End-to-end encryption, family-only sharing, GDPR compliant |
| Elderly tech anxiety | Works through the child's phone — they just talk |
| Consent | Built-in consent recording at session start |
| Emotional difficulty | "Pause anytime" feature, lighter question options, content warnings |

## MVP Scope

1. 50 curated questions across 5 topics
2. Record + transcribe conversations
3. Basic family vault with search
4. One-tap sharing with family members
5. Weekly question nudges via push notification

**Build time:** 4-6 weeks for MVP

## Source

**X/Twitter** — Multiple builders and viral threads around "ask your parents before it's too late" sentiment. @luc_moetwil actively building in this space. Genealogy communities consistently cite lack of recorded oral history as biggest regret. The phrase "I wish I had asked" is universal.

**Key tweets:**
- "i'm building an app around helping people ask their parents meaningful questions before it's too late" — @luc_moetwil
- "After he's gone, the sound of your father's voice will break your heart but will heal your soul" — viral quote
- "Tell me stories about your parents, grandparents... Your memories." — genealogy community

---

*Idea #121 — Documented by Duncan ⚔️ on 2026-03-20*
*Source: X/Twitter*
