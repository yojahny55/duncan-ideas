# Capsule 🎁 — Digital Time Capsule

## Problem

People want to send messages, photos, and videos to their loved ones (or their future selves) that can only be opened at a specific future date — but there's no beautiful, simple tool for this.

**The pain:**
- Parents want to record messages for their kids' milestones ("Open on your 18th birthday") but never set it up
- Couples want to capture feelings at a moment in time ("Read on our 10th anniversary") but forget
- People going through hard times want to send encouragement to their future selves
- Grandparents want to leave something meaningful but don't know how

Current options are bleak: FutureMe does email-only to yourself. Facebook's "Look Back" is algorithmic, not personal. Nobody owns the **multimedia time capsule** position with a beautiful delivery experience.

## Solution

**Capsule** — Record messages, photos, videos, and letters locked until a future date. Beautiful creation, emotional unboxing.

### Core Concept
- **Create a capsule** → add text, photos, videos, voice notes
- **Lock it** → set delivery date (tomorrow or 20 years from now)
- **Choose recipient(s)** → yourself, your kids, your partner, anyone with an email
- **Countdown** → recipients see a locked capsule with a countdown timer
- **Unboxing day** → beautiful reveal experience with animation and music

## Target Users

| Segment | Size | Use Case |
|---------|------|----------|
| New parents | 3.6M/yr US | Messages for kids' milestones |
| Couples | 2.2M weddings/yr | Anniversary time capsules |
| College grads | 4M/yr | "Open in 10 years" self-reflection |
| Grieving families | 2.8M deaths/yr US | Final messages from loved ones |
| Grandparents | 50M+ US | Legacy messages for grandkids |
| Deployment families | 1.3M active military | Messages during separation |

**Total addressable:** 60M+ US adults have wanted to send a delayed message to someone they love.

## Key Features

### 1. Capsule Builder
- Drag-and-drop media: text, photos, videos, voice recordings
- Rich text editor for letters
- Mood/theme selector (birthday, anniversary, graduation, "just because", legacy)
- AI writing assistant to help express feelings ("Help me write something meaningful")
- Background music selector for the reveal

### 2. Delivery System
- Set exact date + time for delivery
- Timezone-aware (sender in NY, recipient in London — both see correct local time)
- Email + push notification on delivery day
- "Coming soon" teaser emails (3 days before, 1 day before)
- Recurring capsules (annual birthday messages, yearly marriage check-ins)

### 3. The Unboxing Experience
- Animated countdown timer
- Dramatic reveal with particle effects
- Photo gallery with Ken Burns zoom
- Voice notes auto-play
- Background music during reveal
- "Screenshot moment" auto-captured and shareable
- Reply feature — recipient can send a message back

### 4. Collaborative Capsules
- Multiple people contribute to one capsule (everyone writes a letter for the birthday person)
- Contributors see who's added content (but not what — surprise preserved)
- Deadline for contributions before delivery date
- Group video montage mode

### 5. Safety & Trust
- End-to-end encrypted content (we can't read your capsules)
- Two-factor authentication for delivery
- "Are you still alive?" check-ins for long-duration capsules
- Backup delivery contacts if primary email bounces
- Capsule never expires — even if Capsule the company goes away, we have a decentralization plan

### 6. Memorial Mode
- Record messages while healthy for delivery after passing
- Paired with estate planning tools
- Gentle prompts: "Have you considered recording a message for your grandchildren?"
- Partner notification system

## Design Direction

**Vibe:** Warm, nostalgic, hopeful. Not morbid. Think Pixar's *Coco* meets Apple's *Memories*.

- **Colors:** Soft amber/gold (#F5A623), warm cream (#FFF8F0), deep navy (#1A2332)
- **Typography:** Serif for letters (Playfair Display), clean sans for UI (Inter)
- **Animations:** Smooth, non-gimmicky. Parallax scroll on timelines. Particle effects on reveal.
- **Sound:** Optional ambient music, soft chime on unboxing
- **Dark mode:** Midnight blue with warm accents

## Pricing

| Tier | Price | Includes |
|------|-------|----------|
| **Free** | $0 | 3 capsules, text + 5 photos each, email delivery |
| **Capsule Plus** | $3.99/mo | Unlimited capsules, video + voice, collaborative, themes, push notifications |
| **Capsule Legacy** | $7.99/mo | Everything + memorial mode, estate integration, encrypted vault, priority delivery |
| **One-Time Capsule** | $4.99 | Single premium capsule, no subscription |

**Revenue model:** Freemium. Most users need 1-3 capsules (free). Power users and memorial/legacy create subscription revenue. Gift cards ("Give someone a Capsule subscription") for holidays.

## Market Research

### Competitors
| App | What it does | Where it falls short |
|-----|-------------|---------------------|
| FutureMe | Email to future self | Text only, ugly, no media, self-only |
| Facebook Memories | Algorithmic lookback | Not intentional, no future planning |
| Day One | Journal app | Not designed for delayed delivery or sharing |
| Afternote | End-of-life messages | Morbid framing, limited features |

### Differentiation
- **Multimedia first** — not just text, but voice, video, photos
- **Beautiful unboxing** — the delivery experience is the product
- **Collaborative** — group capsules for birthdays, weddings, farewells
- **Not just death** — most use cases are joyful (birthdays, anniversaries, milestones)
- **Built for recipients** — the person receiving should feel something special

### Trends Supporting This
- "Digital legacy" market growing 25% YoY (Gartner 2026)
- Gen Z and Millennials increasingly plan digital afterlife (AARP 2025 survey: 67% under 40)
- TikTok trend: #WriteYourFutureSelf (340M views)
- Emotional tech is booming: Calm ($2B valuation), Headspace ($300M)

## Technical Architecture

- **Frontend:** React Native (iOS + Android) + Next.js (web)
- **Backend:** Node.js + PostgreSQL + S3-compatible storage
- **Encryption:** AES-256, client-side encryption before upload
- **Delivery:** Scheduled jobs with SQS/Redis queue, email via SendGrid, push via FCM/APNS
- **Media processing:** FFmpeg for video/audio, Sharp for images
- **Unboxing:** Lottie animations, Web Audio API for music

## Name Ideas
- Capsule ✅ (clear, evocative, short)
- TimeDrop
- VaultMsg
- LaterNote
- UnboxFuture

---

*Researched: May 12, 2026 | Source: X/Twitter (AI voice scam coverage drove interest in "leaving messages for loved ones"), CNBC May 9 2026, TikTok trends, AARP digital legacy research*
