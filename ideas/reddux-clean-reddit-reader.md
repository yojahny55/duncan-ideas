# Redux - Clean Reddit Reader

**Inspiration:** Reddit's aggressive mobile web blocking (May 2026) - users frustrated by app-forcing pop-ups, privacy concerns, and inability to browse casually on mobile.

---

## Problem Statement

Reddit is aggressively blocking mobile web access to force users into their official app. Users face:
- Full-screen pop-ups that block navigation on mobile web
- No dismiss button - page becomes unresponsive
- Forced app download for even casual browsing from Google search results
- Privacy concerns: Reddit app collects location, search history, usage data, identifiers
- Cumbersome workarounds (clear cache, use Old Reddit, sign in)

Users want a lightweight, privacy-focused way to browse Reddit on mobile without tracking or app bloat.

---

## Solution

**Redux** - A clean, privacy-first Reddit reader that delivers the mobile web experience users love, without the invasive tracking and aggressive app forcing.

### Core Features
1. **Clean Mobile-First UI** - Optimized for mobile browsing, no clutter
2. **Privacy by Default** - No account required, no tracking, no data collection
3. **Smart Content Filtering** - Subreddit subscriptions, hide NSFW, filter by keywords
4. **Offline Mode** - Save threads for reading offline
5. **No App Nags** - Just Reddit content, plain and simple
6. **Cross-Platform** - Web PWA + native iOS/Android apps

### Differentiation
- Unlike official app: Zero data collection, no login required
- Unlike third-party apps (Apollo, Relay): Open source, privacy-focused, PWA-first
- Unlike Old Reddit: Modern mobile UI, still accessible

---

## Target Users

### Primary
- **Casual Reddit browsers** (60-70%) - People who find Reddit via Google search, don't want to install an app
- **Privacy-conscious users** (20-30%) - People who avoid apps with invasive tracking
- **One-off information seekers** (20-30%) - Quick lookups, specific questions, DIY help

### Secondary
- **Power users frustrated with official app** - Want clean experience without bloat
- **Corporate/restricted devices** - Can't install apps, need web access

### Market Size
- Reddit has 57M daily active users (2026)
- ~40% mobile traffic = ~23M mobile users
- Conservative 5% adoption = 1.15M potential users

---

## Tech Stack

### Frontend
- **Framework:** React 19 (latest) with Server Components
- **UI Library:** shadcn/ui (Radix primitives + Tailwind)
- **State Management:** Zustand (lightweight, no boilerplate)
- **PWA:** Next.js PWA with offline support via Workbox
- **Icons:** Lucide React

### Backend
- **API:** Reddit's public JSON API (no auth for read-only)
- **Rate Limiting:** Redis cache + IP-based throttling
- **CDN:** Cloudflare for edge caching
- **Hosting:** Vercel (frontend) + Railway (backend)

### Mobile
- **iOS/Android:** Capacitor for native wrapper (optional, PWA-first)
- **Push Notifications:** OneSignal (opt-in only)

### Infrastructure
- **Database:** PostgreSQL (user preferences, saved threads)
- **Caching:** Redis (hot posts, trending subreddits)
- **Monitoring:** Sentry + Vercel Analytics
- **CI/CD:** GitHub Actions

---

## Monetization

### Phase 1: Free, Open Source (Months 1-6)
- Build user base, gather feedback
- GitHub repository for transparency
- Zero revenue, focus on growth

### Phase 2: Freemium (Months 6-12)
- **Free Tier:** Full access, 5 saved threads, basic filtering
- **Pro ($3/mo):** Unlimited saved threads, custom filters, offline mode, dark mode themes
- **No ads, ever** - Privacy-first positioning

### Phase 3: Enterprise (Year 1+)
- **Team Plan ($19/mo):** Shared collections, team notes, API access
- **Self-hosted:** One-time license ($499) for internal teams

### Revenue Projections
| Year | Users | Pro Conversion (5%) | MRR |
|------|-------|---------------------|-----|
| Y1   | 100K  | 5,000               | $15K |
| Y2   | 500K  | 25,000              | $75K |
| Y3   | 1.5M  | 75,000              | $225K |

---

## Marketing Strategy

### Launch Channels
1. **Reddit itself** - Post in r/RedditAlternatives, r/privacy, r/privacytoolsIO (avoid spam)
2. **Hacker News** - Technical audience, privacy-conscious
3. **Product Hunt** - Day 1 launch
4. **Twitter/X** - Engage with #RedditBlocked conversation

### Content Marketing
- Blog posts: "Why We Built Redux - Privacy First Reddit"
- YouTube: "Stop Reddit App Nags - Redux Tutorial"
- Twitter threads: Breakdown of Reddit's tracking vs Redux's privacy

### Viral Loop
- "Share this thread" button generates Redux URL
- User acquisition credit system (future)
- "Invite friends" for free Pro month

---

## Competitive Analysis

| App             | Pros                          | Cons                          | Redux Edge |
|-----------------|-------------------------------|-------------------------------|------------|
| Official App     | Full features                 | Invasive tracking, heavy, bugs| Privacy, light, clean |
| Apollo (iOS)     | Beautiful UI, power features  | $20/yr, iOS only              | Free tier, cross-platform |
| Relay (Android) | Customizable, open source     | Still requires login         | No login required |
| Old Reddit       | Lightweight, no app           | dated UI, not mobile-friendly| Modern mobile UI |
| Reddit Mobile Web | Native feel                  | Aggressive pop-up blocking    | No nags, consistent |

---

## Development Roadmap

### Sprint 1-2: MVP (4 weeks)
- [x] Reddit API integration (read-only)
- [x] Mobile-responsive UI
- [x] Home feed (hot/new)
- [x] Post view with comments
- [x] Basic subreddit navigation
- [x] PWA manifest

### Sprint 3: Core Features (3 weeks)
- [ ] User accounts (local only, Reddit auth optional)
- [ ] Subreddit subscriptions
- [ ] Search functionality
- [ ] Save threads
- [ ] Dark mode
- [ ] Offline mode (cache saved threads)

### Sprint 4: Pro Features (3 weeks)
- [ ] Custom filters
- [ ] Advanced search
- [ ] Export saved threads
- [ ] Custom themes
- [ ] Integration with external tools (Notion, Obsidian)

### Sprint 5+: Polish & Scale
- [ ] Performance optimization
- [ ] Analytics dashboard
- [ ] A/B testing
- [ ] Native iOS/Android apps via Capacitor

---

## Risk Analysis

### Technical Risks
- **Reddit API changes** - Mitigation: Fallback to old.reddit.com HTML parsing
- **Rate limiting** - Mitigation: Client-side rendering + Redis cache
- **Reddit legal action** - Mitigation: Non-commercial, open source, attribution

### Market Risks
- **Reddit blocks Redux** - Mitigation: Domain rotation, Tor option (controversial)
- **User apathy** - Mitigation: Aggressive launch, PR, influencer outreach
- **Competitors copy features** - Mitigation: First-mover, open source community

---

## Success Metrics

### Vanity Metrics
- MAU (Monthly Active Users)
- App Store ratings (iOS/Android)
- GitHub stars

### Actionable Metrics
- 7-day retention rate
- Pro conversion rate
- Saved threads per user
- Time spent per session

### Revenue Metrics
- MRR (Monthly Recurring Revenue)
- CAC (Customer Acquisition Cost)
- LTV (Lifetime Value)

### Targets (Year 1)
- 100K MAU
- 5% Pro conversion = 5K Pro users
- $15K MRR
- $50K total revenue

---

## Prototype

See `/home/yojahny/clawd/projects/duncan-ideas/ideas/reddux-prototype.html` for a working HTML/CSS/JS prototype demonstrating the core UI concept.

---

## Open Questions

1. Should we support Reddit OAuth for personalization, or stay 100% anonymous?
2. How to handle NSFW content? Filter by default, opt-in toggle?
3. Should we build a browser extension for desktop users too?
4. Is $3/mo Pro pricing too aggressive? Consider $2/mo or $1.99/mo.

---

**Next Steps:**
1. Build MVP prototype (Sprint 1-2)
2. Create GitHub repo, document architecture
3. Launch Product Hunt + Reddit posts
4. Gather user feedback, iterate
5. Introduce Pro features at 6-month mark

---

*Created: May 6, 2026*
*Source: Lifehacker article on Reddit mobile site blocking*
