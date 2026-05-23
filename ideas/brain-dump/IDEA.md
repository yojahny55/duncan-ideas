# 💡 Brain Dump — Frictionless Thought Capture for ADHD Brains

**Date:** 2026-05-23
**Source:** Reddit r/ProductivityApps — "I do not need more motivation, I need an app that actually works with my brain" + r/macapps quick-thought capture frustration
**Status:** Idea

---

## Problem Statement

People with ADHD (and honestly, most people) go through an endless cycle of downloading productivity apps, using them for 3 days, then abandoning them. The core issue isn't motivation — it's **friction**. Every app demands you: open it → pick a notebook/category → fill metadata → sync → organize. By the time you're ready to type, the thought is gone. Existing solutions either have too many features (Notion, Evernote) or too few (Apple Notes).

**The gap:** There's no app that captures a thought in <2 seconds with zero decisions, then *quietly* organizes it for you later using AI.

## Solution

**Brain Dump** — a single-text-field app where you just *type and go*. No categories, no tags, no decisions. AI auto-categorizes, tags, and surfaces related past thoughts. Your only job is to dump. Everything else happens in the background.

### Core Features
1. **Zero-friction capture** — Open app → single text field → type → close. Done in 2 seconds. Widget/shortcuts for even faster access.
2. **AI auto-organization** — Backend uses LLM to categorize, tag, and link related dumps. You never manually organize.
3. **Timeline + Clusters view** — See your thoughts as a timeline or as AI-generated topic clusters. Discover patterns you didn't know existed.
4. **Daily Digest** — Each morning, a smart summary of yesterday's dumps grouped by theme. Feels like having a personal assistant who read your brain.
5. **"Remind me later"** — Tag any dump with a time/context and it surfaces when relevant (location-based, time-based, or when a related thought comes up).

## Target Users

- **Primary:** ADHD / neurodivergent individuals (25-45) who cycle through productivity apps
- **Secondary:** Creative professionals (writers, designers, developers) who need to capture fleeting ideas
- **Tertiary:** Anyone who uses Apple Notes/Google Keep but wishes it was smarter

**Market size:** 15M+ adults diagnosed with ADHD in the US alone. Productivity app market $10B+ globally.

## Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | React Native (Expo) | Cross-platform, fast iteration |
| **Backend** | Supabase (PostgreSQL + Edge Functions) | Auth, real-time sync, minimal DevOps |
| **AI** | OpenAI GPT-4o-mini for categorization, text-embedding-3-small for similarity | Cheap, fast, good enough for clustering |
| **Search** | pgvector (inside Supabase) | Vector similarity without extra infra |
| **Push** | Expo Push Notifications | Zero-config cross-platform |
| **Hosting** | Vercel (landing) + Supabase (app) | Free tier friendly |

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 50 dumps/month, basic AI categorization, timeline view |
| **Pro** | $4.99/mo or $39.99/yr | Unlimited dumps, clusters view, daily digest, smart reminders, export |
| **Team** | $9.99/user/mo | Shared dumps, team clusters, Slack/Discord integration |

**Revenue projection (Year 1):** 10K free users → 800 Pro ($40K ARR) → 50 Team ($6K ARR) = **~$46K ARR**

## Competitive Advantage

- **vs. Apple Notes / Google Keep:** AI auto-organization (no manual folders/tags)
- **vs. Notion / Obsidian:** Zero friction — no setup, no templates, no learning curve
- **vs. Reflect / Capacities:** ADHD-first design, single-field philosophy, cheaper

## MVP Scope (4 weeks)

- [ ] Week 1: Auth + single-field capture + save to Supabase
- [ ] Week 2: AI categorization pipeline (background job)
- [ ] Week 3: Timeline view + daily digest generation
- [ ] Week 4: Polish, onboarding, TestFlight/internal beta

## Name Ideas

- Brain Dump ✅ (working title)
- MindToss
- ThoughtDrop
- Unload

---

*Inspired by Reddit threads from real users frustrated with productivity app churn.*
