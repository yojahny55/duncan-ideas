# LoopClose 🪢 — The Paper Trail for Verbal Work

**Date:** 2026-09-02
**Source:** Reddit — r/managers, r/ExperiencedDevs threads (late Aug–Sep 2026)
**Category:** Productivity / People Management / Local-first AI
**Status:** Idea documented + interactive prototype

---

## 1. The Spark — What Reddit Was Screaming This Week

Two back-to-back threads on r/managers this week hit the exact same nerve:

- **"Managers with 5–20 direct reports: how are you actually keeping track of everything?"** (312 votes, 202 comments, 3 days ago) — OP: *"I feel like the actual mechanics of managing a team get scattered across..."* — the thread devolves into 200 comments of people confessing their duct-tape systems: 14 tabs of OneNotes, a paper notebook per person, color-coded spreadsheets, Apple Reminders "tagged" with people's names.
- **"How you guys keep track of random verbal asks without looking lost?"** (3 weeks ago) — hallway/Zoom asks that evaporate the moment they're spoken.
- Adjacent pain in the same sub: performance-review season threads (*"Why is it always meets expectations?"*, 383 votes) where managers admit they **can't produce receipts** of what someone did or agreed to six months ago.

The pattern: **the actual work of managing people happens verbally — in 1:1s, hallway chats, quick Zooms — and then vanishes.** No tool captures it, so managers rebuild a private, shameful database from scratch every quarter. Existing tools don't fit: Jira is for tickets, Notion is for docs, and "manager tools" (15Five, Lattice) are HR surveillance products that employees hate and that answer to the company, not the manager.

Nobody is building **the personal, private ledger for verbal commitments** — the thing that turns "yeah, I'll get you that number by Friday" into a tracked, closed loop.

## 2. Problem Statement

Managers, leads, and anyone who coordinates humans carry dozens of open verbal loops: promises they made, promises made to them, follow-ups, small commitments, context from 1:1s. These loops live in working memory and die there.

Concrete costs:

- **Dropped balls** — the ask from Tuesday's hallway chat resurfaces Friday at 5pm, or never, eroding trust.
- **Review-season amnesia** — no receipts means generic "meets expectations" ratings and weaker advocacy for your people.
- **1:1 déjà vu** — same topics re-hashed because nobody remembered what was decided last time.
- **Tool mismatch** — everything available is either (a) a heavyweight HR platform that reports to the company, or (b) a blank notes app that requires religious manual discipline nobody has.

## 3. Solution

**LoopClose: capture verbal commitments in one tap, and never let a loop stay open by accident.**

Core loop (pun intended):

1. **Capture** — one-tap voice memo after a meeting/hallway chat ("Sarah will send the Q3 numbers by Friday; I promised her a headcount answer next week"). Local transcription (Whisper-class) runs on-device or in a private region.
2. **Extract** — an LLM parses the memo into structured **loops**: who promised what to whom, by when, which person/meeting it belongs to. No typing, no forms.
3. **Chase** — due dates become nudges. Open loops surface before your next 1:1 with that person: *"You owe Sarah a headcount answer — it's been 6 days."*
4. **Close** — mark done with one tap, or the app detects resolution from a follow-up memo. Closed loops accumulate into a **per-person ledger** — receipts for reviews, raises, and hard conversations.

Key differentiators:

- **Private by design.** The ledger belongs to the manager, not HR. Local-first (SQLite/OPFS), E2E-encrypted sync optional. This is the anti-Lattice positioning and Reddit will love it.
- **Zero-form UX.** Everything enters through voice or paste; structure comes out the other side automatically.
- **1:1 prep mode.** Open the app before a 1:1, get a briefing card: open loops, last decisions, recurring themes.
- **Anti-surveillance oath:** no employee-facing dashboards, no productivity scoring, no data resale. Marketed loudly.

## 4. Target Users

1. **Primary:** First-time and mid-level managers with 5–20 direct reports (the exact cohort in the Reddit thread) — eng managers, ops leads, agency PMs. ~40M+ in the US alone; they already buy books/courses on management.
2. **Secondary:** Anyone who coordinates without authority — project leads, chiefs of staff, recruiters, account managers, EAs.
3. **Beachhead channel:** r/managers, r/ExperiencedDevs, First Round Review crowd, "new manager" TikTok/LinkedIn. The spark thread itself is the launch post.

## 5. Tech Stack

**Mobile-first PWA + native shell** (managers live on their phones between meetings):

| Layer | Choice | Why |
|---|---|---|
| App | **React Native + Expo** (iOS/Android), shared core with web PWA | One codebase, fast ship, OTA updates |
| Backend | **Node.js (Fastify) + PostgreSQL** on Fly.io | Thin server; the app is local-first |
| Local store | **SQLite** (mobile) / **OPFS** (web) | Data lives on-device first |
| Sync | **PowerSync or custom CRDT-lite** | Offline-tolerant, optional E2EE |
| Transcription | On-device Whisper (iOS Neural Engine / Android NNAPI), fallback: Deepgram | Voice memos are the primary input |
| Extraction | Small fine-tuned model or structured-output LLM call (Qwen/GPT-class) with strict JSON schema | Memo → loops: who/what/when |
| Nudges | Push (APNs/FCM) + daily digest | "3 loops due before your 1:1 with Sarah" |
| Auth | Passkeys, no email/password | Frictionless |

Privacy architecture is the product: local-first storage, optional encrypted sync, and a published "we literally cannot read your ledger" threat model.

## 6. Monetization

- **Free tier:** 10 open loops, 1 person ledger, manual reminders — enough to get hooked.
- **Pro — $8/mo or $72/yr:** unlimited loops, voice capture, AI extraction, 1:1 briefing cards, encrypted sync. (Reddit crowd hates subscriptions → **offer a $129 one-time "lifetime local" license** for local-only mode. The anti-subscription angle is itself marketing.)
- **Team tier — $15/seat/mo (opt-in only):** shared-loop mode where both parties see mutual commitments. Never sold to HR as monitoring; sold to teams as "we both keep receipts."
- **Expansion:** API/Slack import ("turn this Slack thread into loops"), Notion/Linear export for review docs.

North-star metric: **loops closed per user per week.** Revenue follows trust.

## 7. Validation Plan

1. Post the prototype in the r/managers spark thread ("built the thing we were asking for") — measure DM/click-through.
2. 20 user interviews with managers of 5+ reports; test the privacy-first pitch vs. the 1:1-prep pitch.
3. Landing page with waitlist; target 500 signups from the thread + r/ExperiencedDevs crosspost before writing real backend code.

## 8. Prototype

See `prototype.html` — a self-contained HTML/CSS/JS mock of the manager's daily view: person ledger, open loops with due-date heat, one-tap voice capture (simulated), and a 1:1 briefing card. Open it in any browser.

## 9. Risks & Counter-arguments

- **"Managers won't dictate voice memos."** Mitigation: paste/text works too; make capture <5s or the habit dies.
- **HR will try to buy it.** Hard no — the moment it becomes a reporting tool, the trust product dies. Put it in the ToS.
- **Extraction errors.** Wrong dates are worse than no dates. Mitigation: every extracted loop gets a 2-second confirm swipe.
- **Lattice/15Five add this.** They can't — their business model *is* reporting to the company. A private ledger is structurally impossible for them.

---

*Captured by Duncan ⚔️ — daily ideas cron, Reddit-sourced.*
