# CineMatch - Movie Buddy Finder

> Find your perfect movie-watching companion

## Problem Statement

Many people want to watch movies in theaters or at home but don't have anyone to watch with. Going to movies alone can feel isolating, and the shared experience of reacting to films together is lost. This is especially prevalent post-pandemic as people rebuild social connections.

### Source Tweets

1. **@DDurritos**: "I wish there was an app where you could find people in your area to watch movies with"
   - https://x.com/DDurritos/status/2019323263768490095

2. **@mizuminaa**: "i hate watching movies alone i need my bestie there"
   - https://x.com/mizuminaa/status/2019621293331722634

3. **@SuppJurou**: "I mean, I love watching movies alone but it would be cool to have someone to really talk to while I log my thoughts on letterboxd tgt with them"
   - https://x.com/SuppJurou/status/2019264896312229936

## Target Users

- **Solo movie-goers** who want company for theatrical releases
- **New city residents** looking to make friends through shared interests
- **Film enthusiasts** wanting to discuss movies with like-minded people
- **Introverts** who prefer structured social activities (watching a movie together requires less small talk)
- **People rebuilding social circles** post-pandemic or after life changes

## Proposed Solution

**CineMatch** is a social app that connects movie lovers based on:
- Movie taste compatibility (genre preferences, favorite films)
- Location proximity
- Viewing preferences (theater vs home, talking during vs silence)
- Schedule availability

Users can create or join "Watch Sessions" for specific movies, either in theaters or virtual watch parties.

## Key Features

1. **Taste Matching Algorithm** - Connect Letterboxd/TMDB accounts or rate movies to build a compatibility score with other users

2. **Watch Sessions** - Create/join sessions for specific movies with date, time, theater location (or virtual link)

3. **Theater Integration** - See local showtimes, coordinate seat purchases, split group tickets

4. **Virtual Watch Parties** - Synchronized streaming with video chat for remote viewing

5. **Safety Features** - Verified profiles, public first-meet locations (theaters), in-app chat, report system, optional ID verification

6. **Discussion Rooms** - Post-movie chat threads for each session to discuss without spoilers

7. **Movie Clubs** - Create recurring groups for specific genres (Horror Mondays, Classic Film Fridays)

8. **Taste Badges** - Show your movie personality: "Arthouse Aficionado", "Blockbuster Fan", "Horror Junkie"

9. **Buddy System** - Favorite regular watch buddies for quick invites

10. **Event Discovery** - Special screenings, film festivals, pop-up events in your area

## Technical Stack

### Frontend
- **React Native** (cross-platform mobile)
- **TypeScript** for type safety
- **React Navigation** for routing
- **React Query** for data fetching

### Backend
- **Node.js + Express** API
- **PostgreSQL** database
- **Redis** for session caching and real-time features
- **Socket.io** for chat and sync

### External APIs
- **TMDB API** for movie data
- **Letterboxd** OAuth integration
- **Google Places** for theater locations
- **Stripe** for premium subscriptions

### Infrastructure
- **Vercel** or **Railway** for API hosting
- **Supabase** for auth and realtime
- **Cloudinary** for image handling

## Monetization Strategy

### Freemium Model

**Free Tier:**
- 3 watch sessions per month
- Basic matching
- In-app chat

**Premium ($4.99/month):**
- Unlimited sessions
- Advanced taste matching
- Virtual watch party hosting
- See who viewed your profile
- Priority matching for popular movies

**Premium+ ($9.99/month):**
- All Premium features
- Movie club creation (up to 50 members)
- Early access to film festival events
- Ad-free experience

### Additional Revenue
- Affiliate partnerships with theaters (ticket links)
- Promoted events/screenings
- Merchandise partnerships

## Competition Analysis

| Competitor | Strengths | Weaknesses | Our Edge |
|-----------|-----------|------------|----------|
| **Meetup** | Large user base, events | Generic, not movie-focused | Movie-specific matching |
| **Letterboxd** | Great film community | Social only online | In-person connections |
| **Fandango** | Ticket sales | No social features | Built for watching together |
| **Discord** | Watch parties exist | Not location-based | Local, real-world focus |
| **Bumble BFF** | Friend matching | Not activity-specific | Movie-centric experience |

## Why This Will Work

1. **Real Pain Point** - Multiple organic tweets expressing this exact need
2. **Post-Pandemic Timing** - People actively rebuilding social connections
3. **Structured Socializing** - Movies are perfect for introverts (activity-based, limited forced conversation)
4. **Existing Behavior** - People already use Letterboxd, TMDB, going to movies - we connect the dots
5. **Clear Monetization** - Premium features + affiliate revenue
6. **Network Effects** - More users = better matches = more users
7. **Viral Potential** - Shareable "we matched on movie taste!" moments
8. **Low Churn** - Once you find good movie buddies, you keep using it

## MVP Scope (4-6 weeks)

1. User profiles with movie preferences
2. TMDB integration for movie data
3. Basic taste matching algorithm
4. Watch session creation/discovery
5. In-app messaging
6. Location-based search
7. Theater showtime lookup

---

*Generated from Twitter research on 2026-02-06*
