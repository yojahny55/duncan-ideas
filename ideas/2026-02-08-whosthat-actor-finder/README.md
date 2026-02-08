# WhosThat - Shazam for Actors

> *"That person looks so familiar... where have I seen them before?"*

**Capture any actor on screen → Instantly know who they are and where you've seen them.**

## Problem Statement

Every movie and TV watcher has experienced this frustration: you're watching something, and an actor's face is incredibly familiar, but you can't place them. You pause, squint, and it drives you crazy trying to remember.

Current workarounds are painful:
- Pausing and manually searching IMDb (interrupts viewing experience)
- Describing the actor to Google ("guy with beard from that show")
- Asking "who's that actor?" and getting unhelpful responses
- Scrolling through entire cast lists hoping to recognize a face

**Source:** [r/AppIdeas - Shazam for actors discussion](https://www.reddit.com/r/AppIdeas/) - Users describe this as a frustration "to no end" with no good existing solution.

## Target Users

### Primary
- **Casual viewers** (18-55) who watch 2+ hours of TV/movies weekly
- Experience "tip of the tongue" actor recognition regularly
- Own smartphones, comfortable with camera apps

### Secondary
- **Movie enthusiasts** who want to explore filmographies
- **Trivia lovers** who want to know every actor in a scene
- **Second-screen users** who browse while watching

### User Personas

**Sarah, 34, Marketing Manager**
> "I was watching a new show and recognized an actor from Breaking Bad but couldn't remember which character. Spent 15 minutes on IMDb and missed important plot."

**Marcus, 28, Software Engineer**
> "I play a game with friends where we try to name actors. Would love an app to settle debates instantly."

## Proposed Solution

**WhosThat** - A mobile-first app that uses facial recognition to identify actors from any screen capture.

### Core Flow
1. User sees a familiar face on TV/movie
2. Snap a photo of the screen (or screenshot)
3. AI identifies the actor's face
4. Shows name, photo, and filmography
5. "Where you've seen them" highlights popular roles

## Key Features

### MVP (Phase 1)
1. **Instant Actor Recognition** - Upload photo → Get actor match in <3 seconds
2. **Filmography Display** - Complete TV/movie credits from TMDb
3. **"Known For" Highlights** - Show their 5 most popular roles first
4. **Character Name Display** - "In this show, they play: [Character Name]"
5. **Search History** - Recently identified actors

### Phase 2
6. **Multi-Face Detection** - Identify all actors in a group shot
7. **Watchlist Integration** - "Add to My Watchlist" for their other work
8. **Share Results** - Send actor card to friends
9. **Offline Mode** - Cache popular actors for quick lookup
10. **Voice Query** - "Who is the tall guy with glasses?"

### Phase 3
11. **Watch Context** - Connect to streaming apps to know what you're watching
12. **Personalized "Where You've Seen Them"** - Based on your watch history
13. **Actor Alerts** - "This actor is in a new show premiering next week"
14. **Social Features** - Compare actor recognitions with friends

## Technical Stack

### Frontend
- **React Native** (cross-platform iOS/Android)
- **TypeScript** for type safety
- **React Navigation** for routing
- **Zustand** for state management
- **React Query** for API caching

### Backend
- **Node.js + Express** API server
- **PostgreSQL** for user data
- **Redis** for caching actor lookups
- **AWS S3** for image storage

### AI/ML
- **Amazon Rekognition** or **Azure Face API** for facial recognition
- **Custom Model** - Train on actor headshots (optional)
- **TMDb API** for movie/TV database

### Infrastructure
- **Vercel** or **Railway** for API hosting
- **Cloudflare** for CDN
- **Sentry** for error tracking

## Monetization Strategy

### Freemium Model
- **Free Tier:** 10 recognitions/month, basic filmography
- **Pro ($4.99/month):** Unlimited recognitions, offline mode, no ads
- **Annual ($39.99/year):** Best value, 35% discount

### Additional Revenue
- **Affiliate Links** - "Watch on Netflix" with commission
- **Non-intrusive Ads** - Banner ads for free tier only
- **Data Licensing** - Anonymized usage patterns (with consent)

## Competition Analysis

| Competitor | Approach | Weakness |
|------------|----------|----------|
| **Google Lens** | General image search | Not optimized for actors, shows web results |
| **IMDb App** | Manual search by name | Requires knowing the name first |
| **Shazam** (analogy) | Music, not faces | Different domain |
| **PimEyes** | Face search engine | Privacy concerns, not entertainment-focused |
| **Google Photos** | Labels your own photos | Doesn't work on TV screens |

### Our Advantage
- **Single-purpose UX** - Optimized specifically for the actor identification flow
- **Entertainment Context** - Integrated with movie/TV databases
- **"Where You Know Them From"** - Solves the actual problem, not just identification
- **Second-Screen Design** - Built for the couch experience

## Why This Will Work

### Market Validation
1. **Universal Problem** - Anyone who watches TV/movies has experienced this
2. **No Good Solution** - Current options require knowing the name or manual searching
3. **Viral Potential** - "OMG that app knew it was that guy from The Office instantly!"
4. **Low Friction** - Snap and done, no account required for basic use

### Technical Feasibility
- Face recognition APIs are mature and affordable
- TMDb provides comprehensive, free actor/movie data
- React Native enables fast cross-platform development
- Can MVP in 4-6 weeks with solo developer

### Business Model Proof
- Shazam proved the "identify unknown thing" model works
- Entertainment apps monetize well (streaming tie-ins)
- Subscription fatigue is real, but $5/month is impulse territory

### Growth Strategy
1. **Launch on Product Hunt** - Perfect for tech-savvy early adopters
2. **TikTok/YouTube Shorts** - Demo videos showing the "magic moment"
3. **Partnership with movie blogs** - Reviews and features
4. **Word of Mouth** - Natural shareable moments

## Prototype

See the `prototype/` folder for a working HTML/CSS/JS demo of the core experience.

---

*Idea researched: February 8, 2026*
*Source: Reddit r/AppIdeas*
