# GameDev Pulse 🎮

**A focused news and community platform for game developers, free from political noise and negativity.**

## Problem Statement

Game developers on Twitter/X are overwhelmed by negativity, political content, and off-topic drama. They want a dedicated space for:
- Gamedev news and updates
- Technical discussions
- Community support
- Inspiration and showcases

### Source Tweet
> "Man, I wish there was an app JUST for gamedev news and discussions...that's why I'm so tempted to delete twitter. I still love the community here, but its so full of negative news and such on all sides. It doesn't matter where you stand, it's just depressing and overwhelming."
> 
> — [@IsaiahToth_Dev](https://x.com/IsaiahToth_Dev/status/2018335508389142946) (Feb 2, 2026)

## Target Users

### Primary
- **Indie game developers** (solo or small teams)
- **Hobbyist gamedevs** learning the craft
- **Game dev students** in bootcamps or university

### Secondary
- **Game artists** (2D, 3D, pixel art, VFX)
- **Game designers** and writers
- **Audio designers** for games

### Psychographics
- Tired of social media negativity
- Want focused, curated content
- Value community over clout
- Prefer substance over viral drama

## Proposed Solution

**GameDev Pulse** — A clean, focused web/mobile app that aggregates gamedev news and provides a positive community space.

### Core Concept
- **Curated news feed** from trusted sources (GDC, Unity, Unreal, itch.io, indie blogs)
- **Topic-based channels** (not algorithmic feeds)
- **Devlog sharing** with supportive community
- **Job board** for gamedev positions
- **Learning resources** organized by skill level

## Key Features

### 1. Curated News Feed
- Aggregates from 50+ trusted gamedev sources
- AI-filtered to remove off-topic/negative content
- Daily digest option
- Bookmarkable articles

### 2. Topic Channels
- Engine-specific (Unity, Godot, Unreal, GameMaker)
- Discipline-specific (Art, Audio, Design, Programming)
- Career stage (Beginner, Intermediate, Veteran)
- Jam announcements and participation

### 3. Devlog Showcase
- Share your progress with screenshots/GIFs
- Feedback Friday threads
- Screenshot Saturday integration
- WIP sharing with constructive-only culture

### 4. Community Guidelines
- Strict no-politics rule
- Constructive criticism only
- Verified gamedev profiles (shipped games = badges)
- Positive-only reactions (🎮, 🔥, 💡, ❤️)

### 5. Learning Hub
- Curated tutorials by topic
- Skill trees for different paths
- Mentor matching for beginners
- Resource recommendations

### 6. Job Board (Premium)
- Gamedev-specific job listings
- Freelance marketplace
- Team-finding for jams
- Revenue share opportunities

### 7. Events Calendar
- Game jams (Ludum Dare, GMTK, etc.)
- GDC, PAX, indie showcases
- Online meetups and streams
- Release calendars

### 8. Notification Digest
- Daily summary instead of constant pings
- Customize what you care about
- "Quiet hours" built-in
- No FOMO-inducing design

## Technical Stack

### Frontend
- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Query** for data fetching

### Backend
- **Node.js + Express** or **Bun + Hono**
- **PostgreSQL** for data
- **Redis** for caching
- **Typesense** for search

### Infrastructure
- **Vercel** or **Railway** for hosting
- **Cloudflare** for CDN
- **Resend** for emails
- **Stripe** for payments

### AI/ML
- **OpenAI/Claude** for content moderation
- **RSS parsing** with sentiment filtering
- **Spam detection** for community posts

## Monetization Strategy

### Freemium Model

**Free Tier:**
- Full news feed access
- Browse all channels
- Post devlogs (5/month)
- Basic profile

**Pro Tier ($8/month):**
- Unlimited devlog posts
- Job board access
- Priority event notifications
- Custom profile themes
- Analytics for your devlogs
- Ad-free experience

**Team Tier ($25/month):**
- Everything in Pro
- Team workspace
- Private channels
- Recruitment tools
- Featured job listings

### Additional Revenue
- Sponsored tutorials (clearly labeled)
- Featured showcase spots
- Premium job listings
- Conference ticket partnerships

## Competition Analysis

| Platform | Pros | Cons |
|----------|------|------|
| **Twitter/X** | Large community | Noisy, political, algorithmic |
| **Reddit (r/gamedev)** | Good discussions | Reddit's general toxicity |
| **Discord servers** | Real-time chat | Hard to search, fragmented |
| **Mastodon** | Decentralized | Small gamedev community |
| **LinkedIn** | Professional | Not gamedev-focused |

### Our Advantage
1. **Laser focus** on gamedev only
2. **Curated, not algorithmic** — you choose topics
3. **Positive by design** — no politics, constructive culture
4. **Async-first** — no pressure to be online
5. **Built BY gamedevs FOR gamedevs**

## Why This Will Work

### 1. Clear Pain Point
The source tweet resonated widely — gamedevs are vocal about Twitter fatigue. This is a pull market, not a push.

### 2. Proven Model
Specialized communities work: Dribbble (design), Product Hunt (products), Polywork (professional). Gamedev deserves its own.

### 3. Passionate Niche
Game developers are passionate and loyal. A well-executed platform will earn word-of-mouth growth.

### 4. Monetization Clarity
Job boards and premium features work. The gamedev job market is hot, making recruiting revenue viable.

### 5. Content Flywheel
- News aggregation = always fresh content
- Devlogs = user-generated content
- Screenshot Saturday = viral hooks
- Jams = recurring engagement

### 6. Timing
AI tools are making solo gamedev more accessible than ever. The community is growing, and the need for a clean space grows with it.

## MVP Scope (4-6 weeks)

### Week 1-2
- [ ] News feed with 10 curated sources
- [ ] Basic topic channels (3-5)
- [ ] User auth (email/Discord)

### Week 3-4
- [ ] Devlog posting
- [ ] Basic profiles
- [ ] Like/bookmark system

### Week 5-6
- [ ] Search functionality
- [ ] Email digest
- [ ] Mobile responsive polish

### Post-MVP
- Job board
- Premium tier
- Mobile app (React Native)
- API for integrations

---

## Prototype

See `prototype/` folder for the working HTML/CSS/JS demo.

**Live features:**
- Responsive news feed
- Topic filtering
- Devlog cards
- Loading states
- Dark mode by default (devs love dark mode)

---

*Created: February 3, 2026*
*Source: Twitter/X research*
*Status: Prototype ready*
