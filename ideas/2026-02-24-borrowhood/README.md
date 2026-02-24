# BorrowHood 🏘️

> Peer-to-peer neighborhood lending — share tools, gear, and things with your neighbors without losing track or trust.

## The Problem

**The average power drill is used for 13 minutes in its entire lifetime.** Yet every household owns one.

Neighbors want to share things:
- Tools they rarely use (post hole digger, pressure washer, tile cutter)
- Party supplies (tents, chairs, coolers)
- Sports equipment (camping gear, kayaks, bikes)
- Specialty items (carpet cleaner, projector, hedge trimmer)

**But sharing has friction:**
- 🤔 **No visibility** — "Does anyone nearby have a ladder?"
- 📝 **No tracking** — "Who has my drill? When did I lend it?"
- 😤 **No accountability** — Items come back damaged or not at all
- ⚖️ **No reciprocity** — One neighbor does all the lending, gets nothing back
- 👴 **Too complex** — Existing solutions require tech-savvy users

Reddit threads show this problem repeatedly: people WANT tool libraries but every solution either requires a centralized staff or is just a Facebook album.

## The Solution

**BorrowHood** is a hyper-local lending network for your neighborhood:

1. **List anything** — Snap a photo, name it, done. 10-second listing.
2. **Browse nearby** — See what neighbors are willing to lend
3. **Request to borrow** — One tap, neighbor gets notified
4. **Track everything** — Who has what, for how long, automatic reminders
5. **Build trust** — Ratings, karma system, security deposits for valuable items
6. **Stay reciprocal** — "Share score" encourages two-way participation

## Target Users

**Primary:**
- Suburban homeowners (ages 35-65)
- Small neighborhood communities (50-200 homes)
- HOA communities with shared values
- Eco-conscious "buy less, share more" households

**Secondary:**
- Apartment buildings with shared storage
- Rural communities with expensive equipment
- College neighborhoods with transient needs
- "Library of Things" organizers wanting digital tools

## Key Features

### 🏠 Hyper-Local by Design
- GPS-based neighborhood boundaries
- Walking-distance first (0.5 mile default)
- Expandable radius for rarer items
- "Verified neighbor" system (address confirmation)

### 📸 Stupid-Simple Listing
- Photo → Auto-categorize with AI
- Suggested title and condition
- One toggle: available / not available
- "Add in bulk" mode for garage inventory

### 🔔 Smart Notifications
- "Bob needs your pressure washer for Saturday"
- "Reminder: Get the ladder back from Sarah (lent 5 days ago)"
- "Your tile saw is now the most-requested item in your hood!"

### ⚖️ Reciprocity Engine
- **Share Score**: Ratio of items lent vs borrowed
- Leaderboard (optional) for gamification
- "Top Lender" badges for recognition
- Gentle nudges: "You've borrowed 8 items. Consider adding some to share!"

### 💰 Optional Deposits & Fees
- Set security deposits for valuable items
- Small rental fees if desired (or free)
- Damage claims process with photo evidence
- In-app payments (Stripe) or cash option

### 📅 Calendar Integration
- Schedule pickups and returns
- "Unavailable until..." dates
- Recurring reservations (monthly book club tent)

### 🛡️ Trust & Safety
- Profile verification
- Mutual ratings after each loan
- Block/report bad actors
- Damage resolution workflow
- Privacy controls (hide address until loan confirmed)

## User Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    NEW USER ONBOARDING                       │
│  [Set Location] → [Verify Address] → [Add First Item]       │
│                         ↓                                    │
│              "You're now in Maple Street Network"            │
└─────────────────────────────────────────────────────────────┘
                              │
      ┌───────────────────────┴───────────────────────┐
      │                                               │
      ▼                                               ▼
┌─────────────┐                               ┌─────────────┐
│   LENDING   │                               │  BORROWING  │
│             │                               │             │
│ + Add Item  │                               │ 🔍 Search   │
│ 📸 Photo    │                               │ 📍 Browse   │
│ ✏️ Name     │                               │ 📋 Category │
│ 💰 Deposit? │                               │ ⭐ Ratings  │
└──────┬──────┘                               └──────┬──────┘
       │                                             │
       │         ┌──────────────────────┐            │
       └────────▶│   ACTIVE LOANS       │◀───────────┘
                 │                      │
                 │ • Due dates          │
                 │ • Return reminders   │
                 │ • Photo check-in/out │
                 │ • Ratings            │
                 └──────────────────────┘
```

## Why This Wins

| Pain Point | BorrowHood Solution |
|------------|---------------------|
| "Who has what?" | Real-time loan tracking dashboard |
| "I always lend, never borrow" | Share Score + reciprocity nudges |
| "They ruined my drill" | Security deposits + damage claims |
| "Too hard to list things" | 10-second photo-to-listing |
| "Facebook groups are chaos" | Dedicated app with proper tracking |
| "I don't trust strangers" | Verified neighbors + ratings |

## Competitive Landscape

| Competitor | Gap |
|------------|-----|
| **Facebook Groups** | No tracking, no accountability, messy |
| **Nextdoor** | General-purpose, lending is an afterthought |
| **Library of Things** | Requires physical location + staff |
| **Buy Nothing** | Focused on gifting, not lending |
| **Snipe-IT** | Enterprise inventory tool, not peer-to-peer |
| **Peerby** | Defunct / limited regions |

**BorrowHood's edge:** Purpose-built for peer-to-peer neighborhood lending with tracking, accountability, and reciprocity — no staff needed.

## Revenue Model

1. **Freemium**
   - Free: List 20 items, basic tracking
   - Pro ($3/mo): Unlimited items, calendar sync, analytics

2. **Transaction fees**
   - 5% fee on paid rentals (many will be free)
   - No fee on free loans

3. **Neighborhood Premium** ($99/year per neighborhood)
   - White-label for HOAs
   - Admin dashboard
   - Bulk import tools
   - Usage analytics

## Technical Architecture

- **Frontend:** React Native (iOS + Android) + PWA
- **Backend:** Node.js / Postgres
- **Real-time:** WebSockets for notifications
- **AI:** Vision API for item categorization
- **Maps:** Mapbox for neighborhood boundaries
- **Payments:** Stripe Connect for deposits/fees

## MVP Scope (4-week build)

**Week 1-2:**
- User auth with address verification
- Item listing with photo upload
- Browse by location + category

**Week 3:**
- Borrow request flow
- Loan tracking dashboard
- Push notifications

**Week 4:**
- Ratings system
- Share Score calculation
- Basic deposit handling (manual/honor system)

## Success Metrics

- **Activation:** % of users who list ≥1 item within 7 days
- **Engagement:** Loans per user per month
- **Retention:** % of users active after 90 days
- **Network Density:** Items per neighborhood (target: 100+ for viability)
- **NPS:** Satisfaction score

## Marketing Strategy

1. **Seed neighborhoods:** Partner with 10 HOAs, offer free setup
2. **Invite mechanics:** "Invite 5 neighbors, unlock Pro features"
3. **Local press:** "This app is reducing waste in [Town Name]"
4. **Sustainability angle:** "The average home has $3,000 in rarely-used items"

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Cold start (not enough items) | Seed with HOA partnerships |
| Items not returned | Deposits + social accountability |
| Bad actor neighbors | Ratings + verification + blocking |
| Privacy concerns | Address hidden until loan confirmed |
| Liability for injuries | Clear ToS + safety guidelines |

## Open Questions

- Should neighborhoods be invite-only or open?
- How to handle cross-neighborhood borrowing?
- Insurance partnership opportunities?
- Integration with existing tool libraries?

---

## Source

**Reddit Research (February 2026):**
- r/selfhosted — "Neighborhood thing lending platform"
- r/simpleliving — "Does anyone have experience creating a tool library?"
- r/circular_economy — "Peer-to-Peer Neighborhood Sharing App"
- r/Anticonsumption — "Decentralized library of things"
- r/Startup_Ideas — "Startup ideas that don't sound sexy"
- r/neighborsfromhell — "My neighbor has borrowed 9 things and returned zero"

**Key insight:** People want to share but need **tracking** and **accountability**. Facebook albums aren't cutting it.

---

*Researched by Duncan ⚔️ — February 24, 2026*
