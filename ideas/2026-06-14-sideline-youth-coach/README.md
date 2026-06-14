# Sideline — Youth Sports Team Manager for Volunteer Coaches

> **The team manager that doesn't try to be ESPN.**
> Simple scheduling, attendance, snack rotation, and parent comms for rec-league coaches.

## 💡 The Problem

Every Saturday morning across America, **3.5 million volunteer coaches** wake up and run youth sports teams. They're not professionals — they're parents, teachers, and community members who said "yes" when nobody else would.

Their coaching toolbox looks like this:
- 📱 **Group text chaos** — 12 parents, 47 unread messages, the snack schedule is buried somewhere
- 📝 **Paper rosters** — crumpled in a backpack, water-stained, illegible by week 3
- 🌧️ **Weather panic** — "Is practice canceled?" texts fly at 4:47 PM every cloudy Tuesday
- 🚗 **Carpall mayhem** — "Can someone take Mia home? I have a dentist appointment"
- 🍊 **Snack drama** — "Wait, it's MY turn? I didn't know!"
- 📊 **Attendance guesses** — "Do we have enough for a scrimmage?"

**Current solutions all miss the mark:**

| Tool | Price | Problem |
|------|-------|---------|
| **TeamSnap** | $10-25/mo | Expensive for rec league. Built for travel teams. Feature bloat. |
| **SportsEngine** | Free-$20/mo | Owned by NBC. Complex. Feels like enterprise software. |
| **GameChanger** | Free-$15/mo | Scorekeeping & stats focused. Overkill for U8 soccer. |
| **Group text** | Free | No structure. No scheduling. Buried info. Chaos. |

**The gap:** A simple, affordable, structured team manager designed for the **rec-league volunteer coach** — not the travel-team parent or the high-school athletic director.

## 🎯 Target Users

### Primary: Volunteer Rec Coaches
- **Who:** Parents, teachers, community members coaching youth sports
- **Age:** 28-55
- **Sports:** Soccer, basketball, baseball, softball, t-ball, flag football
- **Commitment:** 1-2 practices + 1 game/week for 8-12 week seasons
- **Tech comfort:** Moderate. Uses WhatsApp, Google Calendar, but isn't installing "sports management software"

### Secondary: Team Parents (Team Mom/Dad)
- Often the actual organizer
- Manages snacks, carpool, communication
- Volunteers because the coach is overwhelmed

### Market Size
- **35M+** kids ages 6-17 play organized sports in the US (SFIA 2025)
- **3.5M+** volunteer coaches in the US alone
- **Youth sports market:** $19.2B annually (WinterGreen Research)
- **Average team:** 10-15 kids, 8-12 week seasons, 2-4 seasons/year
- **Churn:** Coaches rotate every 1-2 seasons — constant fresh market

## ✨ Proposed Solution

**Sideline** is a mobile-first web app that gives a volunteer coach the 5 things they actually need:

### 1. **Smart Schedule** 📅
- Add practices, games, and events in seconds
- Recurring practice schedule ("Tuesdays 5-6 PM at Lincoln Park")
- Auto-creates calendar invites for parents (.ics export)
- Weather integration — one-tap cancel with auto-notify
- Conflict detection — "You have 3 teams' schedules overlapping"

### 2. **Attendance Radar** ✅
- One-tap RSVP for parents (Going / Maybe / Can't make it)
- Coach sees a simple count: "9 going, 2 maybe, 3 no"
- No-show patterns surface gently — "Alex has missed 3 of last 5"
- Auto-adjusts drill plans based on attendance count

### 3. **Snack Wheel** 🍊
- Auto-rotates snack duty across families
- Reminder sent 2 days before: "It's your turn! 12 kids, no nuts"
- Swap requests: "Can I swap with someone next week?"
- Allergy summary visible to each snack family

### 4. **Parent Hub** 💬
- Threaded announcements (no more group text chaos)
- Broadcast vs. conversation separation
- Photo sharing from games (optional)
- Carpool board: "Need ride from school Thursday" / "I can take 3"

### 5. **Game Day Mode** 🏟️
- Field location with one-tap directions
- "Where's the field?" panic button for parents
- Uniform reminder ("Home whites this week")
- Post-game summary: attendance, score (optional), one photo

## 🚀 Key Features

### Free Tier (Forever)
- 1 team
- Up to 15 players
- Schedule + attendance + parent hub
- Snack rotation
- Calendar export

### Pro Coach — $4.99/mo or $29.99/yr
- Up to 4 teams (multiple kids or seasons)
- Unlimited players
- Carpool coordination board
- Photo sharing & game day summaries
- Season archive & rollover
- Weather auto-cancel
- Assistant coach access (share management)

### League Tier — $49.99/mo
- Up to 20 teams (small rec leagues)
- League-wide scheduling
- Shared field/court booking
- Background check integration (coming)
- Registration & payment collection (coming)

## 🎨 Design Principles

1. **30-second rule** — Any action (schedule game, mark attendance, add player) takes 30 seconds or less
2. **Coach-first** — The coach's phone is the source of truth. Parents don't need accounts unless they want them
3. **No feature creep** — Resist stats, standings, rankings. That's GameChanger's job
4. **Works offline** — Weak field signal? Core schedule + roster work offline
5. **One-thumb operation** — Coach is holding a clipboard and a coffee. UI must work one-handed

## 🔧 Technical Architecture

- **Frontend:** Next.js 15 (App Router) + Tailwind CSS v4 + shadcn/ui
- **Backend:** Supabase (Postgres + Auth + Realtime)
- **Mobile:** PWA with offline-first schedule + roster
- **Calendar:** .ics generation + Google Calendar sync
- **Weather:** National Weather Service API (US) / OpenWeather
- **Notifications:** Expo Push Notifications (parents), SMS fallback (Twilio)
- **Maps:** Native deep links to Apple Maps / Google Maps
- **Hosting:** Vercel

## 📊 Competitive Analysis

| Feature | Sideline | TeamSnap | SportsEngine | GameChanger | Group Text |
|---------|---------|----------|--------------|-------------|------------|
| Price | **$0-5/mo** | $10-25/mo | $0-20/mo | $0-15/mo | Free |
| Target | Rec coach | Travel team | Leagues | Scorekeepers | Everyone |
| Complexity | ⭐⭐ Simple | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐ |
| Snack rotation | ✅ | ✅ | ❌ | ❌ | ❌ |
| Carpool board | ✅ | ❌ | ❌ | ❌ | ❌ |
| Parent accounts | Optional | Required | Required | Required | N/A |
 stats & standings | ❌ (intentional) | ✅ | ✅ | ✅ | ❌ |
| Season rollover | ✅ | Manual | ✅ | ✅ | ❌ |
| One-tap weather cancel | ✅ | Add-on | ❌ | ❌ | ❌ |

## 💰 Revenue Model

- **Freemium:** Free tier covers 80% of use cases. Pro is for multi-team coaches
- **Annual push:** $29.99/yr framed as "one season's worth of snacks" — anchor pricing
- **League deals:** Volume pricing for small rec leagues migrating from paper
- **No ads. Ever.** Parents are the audience, not the product
- **No data selling.** Kids' data is sacred

## 📈 Go-to-Market

### Phase 1: Grassroots (Months 1-3)
- Target **rec league commissioners** — one commissioner = 50-200 teams
- Free for entire leagues for first season (land grab)
- "Sideline Promise": less time managing, more time coaching

### Phase 2: Viral Loop (Months 3-6)
- Every parent who gets a Sideline invite is a future coach
- "Powered by Sideline" footer in every parent notification
- Referral: Free Pro season for every coach who refers another

### Phase 3: Expansion (Months 6-12)
- Regional park & rec department partnerships
- YMCA / Boys & Girls Clubs
- National Alliance for Youth Sports (NAYS) partnership
- Coach certification bundles

## 🌟 Why This, Why Now

**Why now:**
1. **Youth sports participation is rebounding post-pandemic** — up 8% in 2025 (SFIA)
2. **Volunteer burnout is at all-time high** — 40% of rec leagues report coach shortages
3. **Parents expect app-level coordination** in every other part of life (school, daycare, work)
4. ** incumbents have grown enterprise-focused** — chasing travel-team revenue, ignoring rec coaches
5. **AI scheduling + natural language input** finally makes 30-second setup realistic

**Why you:**
- Solo founder can ship this in 6-8 weeks (Supabase + Next.js)
- Low infrastructure cost (Supabase free tier handles first 1,000 teams)
- Clear, narrow scope — no feature arms race with incumbents
- Mission-driven: gives time back to volunteers

## 📅 Build Roadmap

### MVP (6 weeks)
- [ ] Auth + team creation
- [ ] Roster management
- [ ] Schedule (add game/practice, recurring)
- [ ] Parent invite flow (SMS + email)
- [ ] Attendance RSVP via parent link
- [ ] Snack rotation
- [ ] Calendar export (.ics)

### V1 (3 months)
- [ ] Weather auto-cancel
- [ ] Carpool board
- [ ] Photo sharing
- [ ] Game day mode
- [ ] PWA offline support

### V1.5 (6 months)
- [ ] Multi-team support (Pro)
- [ ] Season rollover & archive
- [ ] League tier
- [ ] Background check integration (Certn)

## ⚠️ Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| TeamSnap launches free tier | High | Focus on UX simplicity + carpool + snack — features they won't copy |
| Parent adoption friction | Medium | Parents don't need accounts — just tap RSVP link |
| League gatekeepers slow deals | Medium | Start with individual coaches, build bottom-up demand |
| Weather data costs | Low | NWS API is free; Open-Meteo is free for low volume |
| Kids' privacy concerns | Critical | COPPA-compliant — store first name + age range only, no PII |

## 🏆 Success Metrics

- **Activation:** Coach creates team + schedule in < 5 min from install
- **Engagement:** Coach opens app 3+/week during season
- **Parent participation:** 70%+ of parents respond to RSVP on first invite
- **Retention:** 60% of coaches start a second season with Sideline
- **Revenue:** 8% free-to-paid conversion by month 6

## 🔗 Sources & Inspiration

- SFIA 2025 US Youth Sports Report — participation trends
- National Alliance for Youth Sports — volunteer coach data
- Reddit r/youthsports, r/coaching — constant complaint threads about TeamSnap pricing & complexity
- WinterGreen Research — youth sports market size
- TeamSnap pricing page (June 2026) — confirms $10-25/mo positioning
- Personal observation: every rec coach I've met complains about this

## 📄 License

MIT

---

**One-line pitch:** TeamSnap for the 90% of coaches who would never pay for TeamSnap.
