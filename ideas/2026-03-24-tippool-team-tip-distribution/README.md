# TipPool 💰

**Dead-simple tip splitting for small teams — no POS required, no enterprise pricing.**

## Problem

Small business owners (coffee shops, food trucks, salons, small bars) spend 30+ minutes per shift manually calculating tip splits. The process is:

1. Count total tips (cash + digital)
2. Look up who worked and how many hours
3. Calculate each person's share (by hours, role, or equal split)
4. Distribute — often via Venmo/Zelle/Cash App individually
5. Track it all for tax reporting

**Existing solutions don't fit:**
- **TipHaus** ($100-300/mo) — requires POS integration, built for restaurants with 50+ staff
- **Kickfin** ($100+/mo) — same enterprise tier, complex onboarding
- **Square Shifts Plus** ($4.50/employee/mo) — locks you into Square ecosystem
- **Spreadsheets** — error-prone, time-consuming, no transparency for staff

The tweet that sparked this: *"been trying for years to find a super cheap easy way to send out tips to our team of baristas. no good way exists."* — @kylematthews on X/Twitter (March 24, 2026)

## Evidence of Demand

- **Reddit r/barista**: Multiple threads about tip splitting methods, most using manual calculation
- **Reddit r/smallbusiness**: Cafe owners asking how to divide tips fairly
- **Reddit r/Coffee**: Discussions about tip pooling transparency and fairness
- **X/Twitter**: Direct complaint about no cheap solution existing for small teams
- **Market gap**: Enterprise tools start at $100/mo; nothing exists between spreadsheets and enterprise

## Target Users

- ☕ **Coffee shop owners/managers** (2-10 baristas)
- 🚚 **Food truck operators** (2-5 staff)
- 💇 **Salon/barbershop owners** (shared tip jar scenarios)
- 🍺 **Small bar owners** (2-8 bartenders/servers)
- 🎨 **Any small team** that pools and splits tips

## Solution: TipPool

**Enter tips. Enter hours. Split. Send. Done.**

### Core Features

1. **Quick Tip Entry** — Enter total tips for the shift (cash + card separately)
2. **Team Roster** — Add team members once, select who worked each shift
3. **Flexible Split Rules:**
   - By hours worked (most common for coffee shops)
   - Equal split
   - Role-based weights (barista 100%, trainee 50%, manager 0%)
   - Custom percentages
4. **Instant Calculation** — See each person's share in real-time
5. **Distribution Links** — Generate Venmo/Zelle/Cash App payment links
6. **Shift History** — Full log of every split for tax time
7. **Team Transparency** — Staff can see their tip history via shared link
8. **Weekly/Monthly Reports** — Auto-generated summaries

### What Makes TipPool Different

| Feature | TipPool | TipHaus/Kickfin | Spreadsheets |
|---------|---------|-----------------|--------------|
| Price | $9/mo flat | $100-300+/mo | Free (your time) |
| POS required | No | Yes | No |
| Setup time | 2 minutes | Days/weeks | Hours |
| Team size | 2-15 | 20-500+ | Any |
| Staff visibility | Yes (link) | Yes (app) | No |
| Tax reports | Yes | Yes | Manual |
| Mobile-first | Yes | Partial | No |
| Payment links | Venmo/Zelle/CashApp | Bank transfer | Manual |

### User Flow

1. **Owner opens TipPool** → sees today's shift
2. **Taps "New Split"** → enters total tips ($247.50)
3. **Selects team** → checks off who worked (Maya 6h, Alex 4h, Jordan 8h)
4. **Reviews split** → Maya: $82.50, Alex: $55.00, Jordan: $110.00
5. **Taps "Send"** → payment links generated, notifications sent
6. **Staff gets text/notification** → "You earned $82.50 in tips today" with Venmo link

## Technical Approach

### MVP Stack
- **Frontend:** React Native (iOS + Android) or PWA
- **Backend:** Node.js + PostgreSQL
- **Payments:** Deep links to Venmo/Zelle/Cash App (no money handling = no financial regulation)
- **Notifications:** SMS via Twilio or push notifications
- **Auth:** Phone number + PIN (simple, no email required)

### Key Technical Decisions
- **No money handling** — TipPool calculates and generates payment links. The actual money moves through Venmo/Zelle/Cash App. This means:
  - No money transmitter license needed
  - No PCI compliance required
  - No liability for payment failures
  - Users keep their existing payment apps
- **PWA-first** — Works on any phone, no app store approval needed
- **Offline-capable** — Can enter tips offline, syncs when connected (food trucks!)

## Monetization

- **Free tier:** 1 team, up to 3 members, 10 splits/month
- **Pro:** $9/mo — Unlimited members, unlimited splits, reports, tax export
- **Team:** $19/mo — Multiple locations, role-based access, advanced analytics

## Market Size

- **600,000+** coffee shops in the US alone
- **35,000+** food trucks
- **1.2M+** salons and barbershops
- **~60%** are small (under 10 employees) and don't use enterprise tip management
- **SAM:** ~500K small tipped businesses × $9/mo = **$54M/yr** potential

## Competitive Landscape

| Solution | Target | Price | Weakness for Small Teams |
|----------|--------|-------|-------------------------|
| TipHaus | Restaurants 50+ staff | $100-300/mo | Overkill, requires POS |
| Kickfin | Multi-unit restaurants | $100+/mo | Enterprise onboarding |
| Square Shifts | Square users | $4.50/employee/mo | Locked to Square ecosystem |
| 7shifts | Restaurants | $35-150/mo | Restaurant-specific, complex |
| Manual/Spreadsheet | Everyone | Free | Error-prone, no transparency |
| **TipPool** | Small teams 2-15 | **$9/mo** | **That's the point** |

## Risks & Mitigations

1. **Risk:** Venmo/Zelle could block deep links
   - **Mitigation:** Fall back to showing payment details for manual entry
2. **Risk:** Square adds better tip splitting to free tier
   - **Mitigation:** POS-agnostic positioning; most small shops use multiple payment methods
3. **Risk:** Low willingness to pay
   - **Mitigation:** Free tier proves value; $9/mo < 30 minutes of owner's time per shift

## Development Roadmap

### Phase 1 — MVP (4 weeks)
- Team roster management
- Tip entry and split calculation
- Shift history
- Payment link generation

### Phase 2 — Growth (4 weeks)
- Staff portal (view your tips)
- SMS notifications
- Weekly/monthly reports
- CSV export for tax

### Phase 3 — Scale (4 weeks)
- Multiple locations
- Role-based permissions
- POS integrations (optional, not required)
- Analytics dashboard

## Source

- **Primary:** X/Twitter — @kylematthews tweet about inability to find cheap tip distribution for barista team
- **Supporting:** Multiple Reddit threads across r/barista, r/smallbusiness, r/Coffee about manual tip splitting pain
- **Market research:** TipHaus, Kickfin, Square Shifts Plus pricing analysis
- **Date:** March 24, 2026

---

*Built for the coffee shop owner who's tired of doing tip math on a napkin at 10pm.*
