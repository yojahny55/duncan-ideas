# SpeakEasy — AI Language Practice for Anxious Speakers 🗣️

> **"The app that doesn't judge your accent."**

## Problem Statement

Millions of language learners can *read* and *listen* to a foreign language with no issues, but freeze up the moment they need to *speak*. This isn't a knowledge gap — it's a **psychological barrier** rooted in:

- Bad classroom experiences (judgmental teachers, public humiliation)
- Fear of sounding stupid in front of native speakers
- No safe space to practice speaking without social consequences
- Perfectionism paralysis — waiting until "ready" (which never comes)

Reddit threads across r/languagelearning, r/socialanxiety, and r/ADHD consistently surface this pain:
- *"I literally said 'me no speak americano' to avoid talking to a tourist"*
- *"I can understand everything but can't form a sentence out loud"*
- *"Every language app is flashcards and grammar. Nobody helps you actually SPEAK"*
- *"I need an AI that won't judge me for how bad my speaking is"*

**The gap:** Duolingo teaches vocabulary. iTalki connects you with tutors. ChatGPT can chat but has no structure for building speaking confidence. **Nothing exists** specifically designed to help anxious speakers overcome the fear of opening their mouth.

## Source

- **Primary:** [r/languagelearning — "I need an app that won't judge me for how bad my speaking and writing skills are"](https://www.reddit.com/r/languagelearning/comments/1rj462b/) — deeply personal post about English anxiety rooted in teacher trauma
- **Supporting:** 50+ threads across r/languagelearning, r/socialanxiety about speaking fear
- **Market signal:** Language learning industry = $67B by 2028. "Speaking practice" is the #1 requested feature across all language app reviews

## Target Users

1. **Anxious language learners** — Can read/listen but freeze when speaking (largest segment)
2. **Immigrants & expats** — Need daily speaking confidence for work, errands, social life
3. **Students with bad teacher trauma** — Conditioned to associate speaking with judgment
4. **Introverts** — Want to practice without the social energy drain of a human tutor
5. **Professionals** — Need business conversation fluency (presentations, meetings, calls)

## Proposed Solution

**SpeakEasy** is an AI conversation partner that uses therapeutic principles (graduated exposure, positive reinforcement, anxiety tracking) to help people practice speaking a foreign language without fear.

### What Makes It Different

| Feature | Duolingo | iTalki | ChatGPT | **SpeakEasy** |
|---------|----------|--------|---------|---------------|
| Speaking practice | Minimal | ✅ (with humans) | Text-only | ✅ Voice-first |
| Anxiety-aware | ❌ | ❌ | ❌ | ✅ Core design |
| No judgment | ❌ (streak pressure) | Varies by tutor | Neutral | ✅ Actively supportive |
| Graduated difficulty | ❌ | ❌ | ❌ | ✅ Comfort zones |
| Progress on confidence | ❌ | ❌ | ❌ | ✅ Anxiety metrics |
| Structured scenarios | ❌ | Ad-hoc | ❌ | ✅ Real-world situations |
| Available 24/7 | ✅ | ❌ (scheduling) | ✅ | ✅ |
| Cost | $8-14/mo | $15-30/hr | $20/mo | $7-15/mo |

## Key Features

### 🌊 Comfort Zones (Graduated Exposure Therapy)
- **Zone 1 — Whisper:** Repeat single words/phrases after AI. No pressure.
- **Zone 2 — Echo:** Short responses to simple questions. AI fills silences gently.
- **Zone 3 — Chat:** Guided conversations on comfortable topics.
- **Zone 4 — Adventure:** Role-play real scenarios (ordering food, asking directions).
- **Zone 5 — Flow:** Free conversation. You're ready.

### 🎤 Voice-First Design
- Tap to speak, AI responds with natural speech
- Real-time pronunciation feedback (gentle, never harsh)
- "Take your time" mode — no timer pressure, AI waits patiently
- Option to type first, then say it out loud (training wheels)

### 💚 Anxiety-Aware UX
- Pre-session check-in: "How are you feeling about speaking today?" (1-5 scale)
- Post-session reflection: "That was brave. You spoke for 4 minutes today."
- Anxiety trend tracking — see your comfort grow over time
- Panic button: "I need a break" → supportive message + breathing exercise
- Never corrects mid-sentence (waits until you're done)

### 🎭 Real-World Scenarios
- **Daily Life:** Ordering coffee, asking for directions, small talk with neighbors
- **Work:** Job interviews, presentations, meetings, phone calls
- **Travel:** Airport, hotel, restaurant, emergency situations
- **Social:** Making friends, dating, parties, complaints
- **Custom:** Upload YOUR real scenario (email you need to discuss, meeting agenda)

### 📊 Confidence Dashboard
- Speaking time trend (minutes/week)
- Comfort zone progression
- Anxiety score over time
- Vocabulary growth
- Pronunciation improvement
- Streak (gentle — no guilt for missing days)

### 🔒 Privacy-First
- Conversations never stored on server (processed locally when possible)
- No recordings shared with anyone
- No leaderboards or social features (this is YOUR safe space)
- Option to auto-delete session history

## Technical Architecture

```
┌─────────────────────────────────────────┐
│          SpeakEasy App (PWA)            │
│  ┌──────────┐  ┌──────────────────────┐ │
│  │ Voice UI │  │  Comfort Zone Engine │ │
│  │ (Web     │  │  (progression,       │ │
│  │  Speech  │  │   difficulty,        │ │
│  │  API)    │  │   anxiety tracking)  │ │
│  └──────┬───┘  └──────────┬───────────┘ │
│         │                 │             │
│  ┌──────┴─────────────────┴───────────┐ │
│  │     Conversation Engine            │ │
│  │  (LLM with therapeutic prompting)  │ │
│  └──────────────┬─────────────────────┘ │
│                 │                       │
│  ┌──────────────┴─────────────────────┐ │
│  │     Progress & Analytics           │ │
│  │  (local-first, optional sync)      │ │
│  └────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Stack
- **Frontend:** React/Next.js PWA, Web Speech API, Tailwind CSS
- **AI:** OpenAI GPT-4o / Whisper (STT) / TTS API
- **Backend:** Node.js, Supabase (auth + sync)
- **Analytics:** Local-first with optional cloud backup
- **Pronunciation:** Custom model or Azure Speech SDK

## Monetization

| Tier | Price | Includes |
|------|-------|----------|
| Free | $0 | 3 sessions/week, Zone 1-2, 1 language |
| Plus | $7/mo | Unlimited sessions, all zones, 3 languages |
| Pro | $15/mo | Everything + custom scenarios, business pack, priority AI |

**Revenue projections:**
- 10K users × 15% conversion × $10 avg = $15K MRR
- Language learning has 82% higher retention than most app categories

## Competitive Landscape

| Competitor | Gap SpeakEasy Fills |
|-----------|---------------------|
| Duolingo | Gamification ≠ speaking confidence. Streak anxiety makes things worse. |
| iTalki | Great but expensive ($15-30/hr), requires scheduling, social anxiety barrier |
| Elsa Speak | Pronunciation-only. No conversation practice, no anxiety awareness |
| Pimsleur | Audio-only, no interactivity, $20/mo |
| ChatGPT Voice | No structure, no progression, no anxiety support, no speaking metrics |
| Speak (app) | Closest competitor but $14/mo, no anxiety framework, limited scenarios |

## Why Now?

1. **AI voice quality** just crossed the uncanny valley — conversations feel natural
2. **Post-COVID social anxiety** is at all-time highs, especially for language use
3. **Remote work** means more people need professional-level foreign language skills
4. **Immigration** continues to grow — practical speaking needs are urgent
5. **Mental health awareness** makes anxiety-aware design a selling point, not a niche

## MVP Scope (4-6 weeks)

- [ ] Voice-based conversation with AI (Web Speech API + OpenAI)
- [ ] 3 comfort zones (Whisper, Echo, Chat)
- [ ] 5 real-world scenarios per zone
- [ ] Pre/post session anxiety check-in
- [ ] Basic confidence dashboard
- [ ] English, Spanish, French (initial languages)
- [ ] PWA for mobile + desktop

## Success Metrics

- **North Star:** Average speaking minutes per user per week
- **Retention:** 7-day, 30-day speaking retention
- **Confidence:** Self-reported anxiety score improvement over 30 days
- **Zone progression:** % of users reaching Zone 3+ within first month

---

*Researched and documented by Duncan ⚔️ — March 21, 2026*
*Source: Reddit r/languagelearning + r/socialanxiety*
