# BrainDump — Your Thought Combustor 🔥

**Date:** May 13, 2026  
**Source:** Reddit trend analysis — r/ADHD, r/productivity, r/getdisciplined  
**Inspiration:** Top posts this week: rumination spirals (818 upvotes), ADHD emotional overwhelm (3,607 upvotes), inability to verbalize ADHD experience, paralysis cycles.

---

## Problem Statement

People with ADHD, anxiety, or high-stress lives get trapped in **rumination loops** — cycling through the same anxious thoughts for hours with no way out. Traditional journaling feels like homework. Therapy is expensive and weekly at best. Meditation apps ask you to *silence* your thoughts when what you really need is to **get them out of your head**.

The gap: There's no tool designed for the *messy middle* between "I'm spiraling" and "I feel okay." No frictionless way to dump a chaotic brain onto something that helps you process it in real-time.

## Solution

**BrainDump** — a voice-first thought release app. Hit one button, talk (or type) for 30 seconds to 5 minutes. The app:

1. **Transcribes** your dump in real-time
2. **Categorizes** themes (work stress, relationships, health, finances, existential dread, etc.)
3. **Identifies the loop** — "You've mentioned your boss 4x this week"
4. **Generates a "Release Note"** — a 2-3 sentence reframing of what you said, like a friend summarizing: "You're not failing — you're overwhelmed by 3 conflicting deadlines and no one's prioritized them for you."
5. **Tracks emotional velocity** — shows your mood arc over time, flags when you're escalating
6. **Pattern alerts** — "You dump about sleep every Sunday night. Want to set a Monday morning intention?"

No CBT worksheets. No gratitude prompts. Just: brain out → clarity in.

### Key Differentiator
- **Zero friction.** One tap to start. No templates, no categories to choose, no mood sliders.
- **Voice-first.** ADHD brains process better speaking than typing. Whisper-level STT, local or cloud.
- **Loop detection.** Not just logging — actively identifying when you're stuck on the same thought.
- **Release Notes.** Not a journal entry. A reframing. Something you can read in 5 seconds and feel lighter.

## Target Users

**Primary:** Adults 18-40 with ADHD, anxiety, or high-stress jobs  
**Secondary:** Anyone who journals, uses therapy apps, or feels "stuck in their head"  
**TAM:** ~15M diagnosed ADHD adults in the US alone. ~40M+ when including undiagnosed and anxiety.

**Persona:** "Alex, 28 — senior dev who ruminates at 2am about that one Slack message. Has tried 6 journaling apps. Opened each twice."

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Frontend** | React Native (Expo) | Cross-platform, fast iteration |
| **Voice STT** | OpenAI Whisper API (cloud) + on-device fallback | Best accuracy, handles messy speech |
| **NLP/Categorization** | GPT-4o-mini or Claude Haiku | Cheap, fast, good at summarization |
| **Loop Detection** | Vector embeddings (Supabase pgvector) | Semantic similarity across dumps |
| **Backend** | Supabase (Postgres + Auth + Edge Functions) | Zero infra overhead |
| **Storage** | Encrypted at rest, user-owned audio | Privacy-first |
| **Analytics** | Simple in-app charts (no third-party tracking) | Trust matters here |

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 5 dumps/week, basic Release Notes |
| **Pro** | $4.99/mo | Unlimited dumps, pattern alerts, emotional velocity, export to therapist |
| **Therapy Link** | $9.99/mo | Pro + shared dashboard for your therapist (B2B2C angle) |

**Why this works:** The free tier is enough to feel the value in one session. The pattern alerts are the "aha moment" that converts — "I didn't realize I was stuck on this." Therapy Link is the long-term moat.

## Competition

| App | Why they miss |
|-----|---------------|
| Day One / Rosebud | Beautiful journals, but still feels like homework |
| Wysa / Woebot | Chatbot CBT — too structured, too clinical |
| Reflectly | AI diary but focuses on "how was your day" — too generic |
| Voice notes (Apple/Google) | No processing, no reframing, no pattern detection |

**BrainDump's edge:** It doesn't ask you to organize your thoughts. It does it for you.

## MVP Scope (4 weeks)

1. **Week 1:** React Native shell, Supabase auth, voice recording + playback
2. **Week 2:** Whisper API integration, transcription pipeline
3. **Week 3:** LLM categorization + Release Note generation
4. **Week 4:** Basic pattern tracking, polish, TestFlight/internal beta

## Reddit Signal

Raw quotes from this week's top posts that validate the need:

> "I swear this disorder is such an invisible killer... ADHDers find it very difficult to verbally explain their ADHD" — r/ADHD (3,607 upvotes)

> "How do you deal with the non-stop rumination? I enter spirals where I pace for hours panicking, then cry, then pace, and cry, on repeat." — r/ADHD (818 upvotes)

> "I constantly think about how I messed up in the past" — r/ADHD

**The pattern:** People need to externalize thoughts *without structure*. They need something that listens and reflects back — not a workbook.

## Prototype

See `prototype.html` — interactive demo of the BrainDump experience.
