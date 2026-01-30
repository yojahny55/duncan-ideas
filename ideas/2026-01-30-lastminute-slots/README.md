# LastMinute Slots 🕐

> Find last-minute appointment cancellations for services in your city

## Problem Statement

Service providers (salons, spas, dog groomers, therapists, clinics) face a constant problem: **last-minute cancellations create empty slots** that could have generated revenue. Meanwhile, customers who need quick appointments or want discounted services have no easy way to find these openings.

**Pain points:**
- **For providers:** Empty slots from cancellations = lost revenue (estimated 10-30% of appointments are no-shows or late cancellations)
- **For customers:** Hard to find same-day/next-day appointments, often stuck on waitlists
- **For both:** No efficient marketplace connecting last-minute supply with demand

### Source Validation

**Twitter/X:**
- [@RachaelRad](https://x.com/RachaelRad/status/2012173681326240074) (Jan 16, 2026): *"Someone should build an app called 'Last Minute' that can find all the cancellations in your city for haircuts, dog grooming, massage, facial, etc."* - Tweet got significant engagement, Rachael Horwitz is a notable tech executive

**Additional validation:**
- Service industry consistently reports 10-30% no-show rates
- Platforms like Booksy, Vagaro, and StyleSeat don't have dedicated "fill cancellations" features
- Consumers frequently search "last minute appointments near me"

## Target Users

### Primary Users (Demand Side)
- **Flexible professionals** - Can work from anywhere, value good deals
- **Spontaneous self-care seekers** - "I need a haircut TODAY"
- **Budget-conscious consumers** - Want discounts for flexibility
- **New city residents** - Looking to try new providers
- **Gift card holders** - Have credits expiring, need to use them

### Secondary Users (Supply Side)
- **Hair salons & barbershops**
- **Spas & massage therapists**
- **Dog groomers & pet services**
- **Dental & medical clinics**
- **Personal trainers & fitness studios**
- **Beauty services** (nails, facials, lashes, etc.)
- **Therapists & counselors**
- **Auto detailers & mechanics**

## Proposed Solution

**LastMinute Slots** - A real-time marketplace for last-minute service appointments

### How it works:

**For Providers:**
1. Connect existing booking system (Calendly, Vagaro, Booksy, etc.) OR manually post openings
2. When a cancellation happens, slot automatically appears on LastMinute
3. Option to offer discounts (10-30% off) to fill slots faster
4. Get paid, reduce lost revenue

**For Consumers:**
1. Set preferences: services wanted, location, notification radius
2. Get push notifications when matching slots appear
3. Book instantly with one tap
4. Optional: Set "auto-book" for favorite providers

## Key Features

### MVP Features (Phase 1)
1. **Real-time slot feed** - Browse available appointments by category, location, time
2. **Push notifications** - Instant alerts when matching slots appear
3. **One-tap booking** - Stripe/Apple Pay integration for instant confirmation
4. **Provider dashboard** - Easy slot posting, either manual or via calendar sync
5. **Location-based search** - Find slots within configurable radius (1-25 miles)
6. **Category filtering** - Hair, Spa, Pets, Fitness, Medical, Auto, Other
7. **User profiles** - Save preferences, payment methods, favorites
8. **Rating system** - Build trust on both sides

### Growth Features (Phase 2)
9. **Calendar integrations** - Automatic slot detection from Calendly, Google Calendar, Vagaro, Booksy
10. **Auto-book rules** - "Book any haircut at X salon under $40 automatically"
11. **Loyalty points** - Earn rewards for booking and showing up
12. **Provider analytics** - Track fill rates, best posting times, pricing optimization
13. **Waitlist-to-slot** - Convert waitlist interest into bookings when slots open
14. **Group bookings** - Multiple slots for couples/friends

### Advanced Features (Phase 3)
15. **AI pricing suggestions** - Dynamic pricing based on demand, time-to-slot
16. **Predictive cancellation alerts** - Warn providers of likely no-shows
17. **White-label solution** - Embed LastMinute into provider's existing app
18. **Corporate partnerships** - Employee perks programs

## Technical Stack

### Frontend
- **Mobile:** React Native (iOS + Android)
- **Web:** Next.js 14 with App Router
- **Styling:** Tailwind CSS, Radix UI components

### Backend
- **API:** Node.js with tRPC or GraphQL
- **Database:** PostgreSQL (Supabase or Railway)
- **Real-time:** Supabase Realtime or Pusher
- **Auth:** Clerk or Supabase Auth
- **Payments:** Stripe Connect (for marketplace payments)

### Integrations
- **Calendars:** Google Calendar API, CalDAV
- **Booking systems:** Vagaro API, Booksy API, Square Appointments
- **Maps:** Google Maps / Mapbox for location services
- **Notifications:** Firebase Cloud Messaging, Apple Push Notifications

### Infrastructure
- **Hosting:** Vercel (frontend), Railway/Render (backend)
- **CDN:** Cloudflare
- **Monitoring:** Sentry, LogRocket
- **Analytics:** PostHog or Mixpanel

## Monetization Strategy

### Revenue Model: Commission-based marketplace

**Primary Revenue:**
- **Booking fee:** 10-15% commission on each booking (split: 8% from provider, 2-7% from consumer as "service fee")
- **Target:** $5-15 average fee per booking

**Secondary Revenue:**
- **Provider subscription tiers:**
  - Free: 5 slots/month, basic dashboard
  - Pro ($29/mo): Unlimited slots, analytics, priority placement
  - Business ($99/mo): Multi-location, API access, white-label
  
**Future Revenue:**
- **Featured slots:** Providers pay to boost visibility
- **Corporate accounts:** B2B deals with companies offering employee perks
- **Data insights:** Anonymized industry trends for larger chains

### Unit Economics (Target)
- Average booking value: $75
- Commission: $7.50-11.25
- CAC (Consumer): $15-25
- LTV (Consumer): $150+ (10+ bookings/year)
- CAC (Provider): $50-100
- LTV (Provider): $500+ (fills 40+ slots/year)

## Competition Analysis

| Competitor | What They Do | Gap We Fill |
|------------|--------------|-------------|
| **Booksy/Vagaro/StyleSeat** | Full booking platforms | No "cancellation marketplace" - focus on scheduled bookings |
| **Groupon** | Deals & discounts | Not real-time, not cancellation-specific |
| **Yelp/Google** | Discovery & reviews | No real-time availability, no instant booking |
| **OpenTable** | Restaurant reservations | Food only, not services |
| **ZocDoc** | Medical appointments | Healthcare only, not same-day focused |
| **Mindbody** | Fitness class bookings | Fitness-focused, no multi-category marketplace |

**Our differentiation:**
1. **Cancellation-specific** - We're the only platform focused on last-minute openings
2. **Multi-category** - One app for all service types
3. **Real-time push** - Instant notifications, not browse-and-hope
4. **Win-win pricing** - Providers fill slots, consumers get deals
5. **Frictionless** - One-tap booking vs. call-and-wait

## Why This Will Work

### Market Timing ✓
- Post-COVID "self-care" spending is at all-time highs
- Gig economy normalized flexible scheduling
- Consumers expect Uber-level instant booking experiences
- Service providers increasingly tech-savvy and using booking software

### Clear Value Proposition ✓
- **Providers:** Turn $0 cancellations into $50-150+ recovered revenue
- **Consumers:** Get services faster, often at a discount
- **LastMinute:** Take a cut of transactions that wouldn't have happened otherwise

### Network Effects ✓
- More providers → more slots → more consumers
- More consumers → faster fills → more providers
- Dense local networks create strong moats

### Low Barrier to Entry ✓
- No hardware needed
- Works with existing provider systems
- Easy onboarding for both sides

### Validated Demand ✓
- Tweet validation from Rachael Horwitz (tech executive)
- Industry-wide pain point (10-30% no-show rates)
- No direct competitor solving this specific problem

---

## Next Steps

1. ✅ Problem validation (Twitter, industry research)
2. 🔄 Build landing page & collect waitlist signups
3. 🔄 Create functional prototype
4. 📋 Interview 10+ service providers to validate pain points
5. 📋 Interview 20+ consumers about booking habits
6. 📋 MVP development (8-12 weeks)
7. 📋 Pilot in one city (Tampa, FL)
8. 📋 Iterate based on feedback
9. 📋 Expand to additional markets

---

*Idea documented: January 30, 2026*
*Source: X/Twitter research, Indie Hackers trends*
