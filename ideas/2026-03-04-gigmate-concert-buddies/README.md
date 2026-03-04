# GigMate - Concert Buddy Finder

> Find your crew. Never go solo again.

## Problem Statement

Millions of people skip concerts they desperately want to attend because they don't have anyone to go with. Solo concertgoing is lonely, sometimes unsafe, and misses the shared euphoria that makes live music magical. This is especially acute for:

- People who move to new cities
- Fans of niche artists whose friends aren't into the same music
- Solo travelers who want to catch shows abroad
- Women and marginalized groups who feel unsafe attending alone

### Source Tweets

1. **@CruelSummerWU23**: "There needs to be an app to find concert buddies for specific ones, like you can match with other solo people to hang before/after"
   - https://x.com/CruelSummerWU23/status/2028199557088125398
   - Tue Mar 03 2026

2. **@phutrichor**: "helloooooooo if there's any indonesians attending gdh concert and looking for a concert buddy pls let me knoww 😭😭😭"
   - https://x.com/phutrichor/status/2029048403561476423
   - Wed Mar 04 2026

3. **@forhundae**: Asking about using online platforms to find concert buddies for international concerts
   - https://x.com/forhundae/status/2029040226472251706
   - Wed Mar 04 2026

## Why This Is Different From CineMatch (Movie Buddies)

| Aspect | Movies (CineMatch) | Concerts (GigMate) |
|--------|-------------------|-------------------|
| **Event Type** | Repeating showtimes | One-time events |
| **Rescheduling** | Easy - same movie tomorrow | Impossible - tour moves on |
| **Travel** | Local theaters | People fly cross-country for shows |
| **Safety Stakes** | Sitting in a theater | Crowds, late nights, unfamiliar cities |
| **Social Element** | Watch in silence | Dance, sing, mosh, make memories |
| **Pre/Post Show** | Quick dinner maybe | Tailgating, after-parties, festival camping |
| **Tickets** | Available walk-up | Often sold out, resale market |
| **Duration** | 2-3 hours | All-day festivals, multi-night residencies |

## Target Users

- **Solo Concertgoers** — 32% of concert attendees go alone (source: Live Nation 2024 survey)
- **Music Travelers** — People who travel specifically for concerts/festivals
- **New City Residents** — Looking to build a music-loving friend group
- **Superfans** — Want to meet others as passionate about their artist
- **Safety-Conscious Attendees** — Prefer the buddy system at crowded events
- **Festival Goers** — Need crews for camping, splits, and navigating massive events

## Proposed Solution

**GigMate** matches concert buddies based on:
- Specific shows you're attending or interested in
- Music taste compatibility (Spotify/Last.fm integration)
- Vibe preferences (chill observer vs. front-row moshpit)
- Social goals (just concert company vs. ongoing friendship)
- Safety preferences (buddy check-ins, shared location)

## Key Features

### Core Features

1. **Show-Specific Matching** — Browse people attending the same concert, filter by venue section, vibe, age range

2. **Spotify/Last.fm Integration** — Auto-detect compatible music taste, see listening overlap %

3. **Vibe Selector** — Are you a front-row screamer? VIP lounge sipper? Casual swayer? Match accordingly

4. **Pre-Show Meetups** — Coordinate dinner, drinks, or tailgating before the venue opens

5. **Post-Show Hangouts** — After-party planning, late-night food runs, ride sharing

6. **Safety Suite**
   - Verified profiles with ID/social verification
   - Real-time buddy location sharing (opt-in)
   - Check-in prompts during show
   - Emergency contact integration
   - "I made it home safe" notifications
   - Public first-meet locations only

7. **Ticket Coordination** — See who's looking for tickets, who has extras, facilitate transfers

8. **Festival Mode** — Extended features for multi-day events: campsite grouping, set schedule syncing, lost-and-found meetup points

9. **Travel Planning** — For out-of-towners: airport pickup coordination, hotel/Airbnb splitting, city guides from locals

10. **Artist Communities** — Ongoing groups for specific artist fandoms, not just single shows

### Discovery Features

- Concert calendar showing nearby shows with buddy demand
- "Looking for Buddy" status that pushes your profile to matches
- Hot events with high solo-attendee counts
- Genre-specific browsing

## Technical Stack

### Frontend
- **React Native** (cross-platform mobile)
- **TypeScript** 
- **Expo** for rapid development
- **React Navigation** for routing

### Backend
- **Node.js + Fastify** API
- **PostgreSQL** database
- **Redis** for caching and real-time
- **Socket.io** for chat

### External APIs
- **Spotify Web API** — Music taste analysis
- **Last.fm API** — Listening history
- **Ticketmaster Discovery API** — Event data
- **Bandsintown API** — Tour dates
- **Songkick API** — Concert discovery
- **Google Maps** — Venue info, directions
- **Twilio** — SMS verification, safety alerts

### Infrastructure
- **Railway** for API hosting
- **Supabase** for auth and realtime
- **Cloudinary** for images
- **Sentry** for error tracking

## Monetization Strategy

### Freemium Model

**Free Tier:**
- 3 buddy connections per month
- Basic event discovery
- In-app messaging
- Standard safety features

**GigMate Plus ($6.99/month):**
- Unlimited connections
- See who's interested in you
- Priority matching for sold-out shows
- Advanced vibe filters
- Festival mode
- Trip planning tools

**GigMate Pro ($12.99/month):**
- All Plus features
- Enhanced verification badge
- Create event communities (up to 100 members)
- Early access to presale buddy matching
- Ad-free experience
- VIP concert event alerts

### Additional Revenue
- Ticket marketplace fees (small cut on transfers)
- Promoted events from venues/promoters
- Merch partnerships with artists
- Festival sponsorship integrations
- Travel partner affiliates (hotels, flights)

## Competition Analysis

| Competitor | Strengths | Weaknesses | GigMate Edge |
|-----------|-----------|------------|--------------|
| **Meetup** | Large user base | Generic, events stale | Concert-specific, real-time |
| **Bumble BFF** | Good matching UX | Not activity-specific | Music-first matching |
| **Radiate (festivals)** | Festival-focused | Only major fests | All concerts + safety |
| **Facebook Events** | Huge reach | No matching, privacy issues | Curated buddy matching |
| **Reddit concert subs** | Passionate users | Scattered, no structure | Unified platform |
| **Discord servers** | Community depth | Hard to find, fragmented | One app, all shows |

## Why This Will Work

1. **Real Pain Point** — Active tweets literally asking for this product
2. **Growing Market** — Live events industry at all-time high post-pandemic
3. **Safety Sells** — Peace of mind is a premium feature people pay for
4. **Network Effects** — More users = more matches = more users
5. **Existing Data** — Spotify/Last.fm provide instant taste profiles
6. **Viral Moments** — "Met my best friend on GigMate" stories spread
7. **Clear Monetization** — Premium features + transaction fees + affiliates
8. **Event-Driven Urgency** — Shows sell out, creating FOMO that drives signups
9. **Different from Dating** — Explicitly friendship-focused, less creepy

## MVP Scope (4-6 weeks)

### Week 1-2: Foundation
- User auth with Spotify OAuth
- Profile creation with music taste import
- Basic event discovery via Ticketmaster API

### Week 3-4: Matching
- Show-specific user listings
- Basic matching algorithm
- In-app messaging
- Safety verification flow

### Week 5-6: Polish
- Push notifications
- Check-in system
- Profile verification badges
- App store submission

## Growth Strategy

### Launch Phase
1. Target 3-5 cities with active concert scenes (Austin, Nashville, LA, NYC, Chicago)
2. Partner with local music blogs for coverage
3. Street team at major venues with QR codes
4. Reddit/Discord soft launch in artist communities

### Scale Phase
1. Influencer partnerships with music content creators
2. Artist partnerships (verified artist community accounts)
3. Venue partnerships (in-app ticket integration)
4. Festival official app partnerships

## Metrics to Track

- Monthly Active Users (MAU)
- Buddy connections per user
- Show attendance rate (did matched users actually meet?)
- Safety feature usage
- Premium conversion rate
- User retention (return for multiple shows)
- NPS score

## Sample User Flow

1. **Sarah** downloads GigMate after seeing a tweet
2. Connects Spotify — app shows her top artists and upcoming shows
3. Sees Taylor Swift Eras Tour has 847 people looking for buddies
4. Filters by "Floor section" and "Swaying/singing" vibe
5. Matches with **Maya** who has 78% music taste overlap
6. They chat, verify profiles, and plan to meet at a nearby bar 2 hours before doors
7. Night of show: check-in feature confirms they met up
8. Post-show: both mark "Had a great time!" and stay connected for future shows
9. Sarah converts to Plus after attending 3 shows with GigMate buddies

---

*Generated from Twitter/X research on 2026-03-04*
*Source: Daily App Ideas Research*
