# TwoHome — Coparenting Coordinator

> Two homes, one team. The free coparenting app for families who just need to stay coordinated.

## The Problem

13.4M+ single parents in the US share custody. They coordinate via:
- Scattered text messages (lost in chat history)
- Shared Google Calendars (no custody logic)
- Expensive apps ($99-199/yr for OurFamilyWizard, $108/yr for AppClose since Jan 2026)
- Paper agreements (forgotten, disputed)

In January 2026, **AppClose — the only free coparenting app — went paid at $8.99/mo**. r/DivorcedDads erupted. Low-income coparents are now choosing between paying for coordination tools or... just texting and hoping.

OurFamilyWizard ($99+/yr) is designed for **high-conflict, court-mandated** situations — overkill for the 70%+ of coparents who are cooperative but disorganized. TalkingParents is communication-only.

**Nobody serves the low-to-medium conflict coparent who needs coordination, not litigation.**

## Target Users

- **Low-to-medium conflict coparents** (70%+ of divorced parents) — need coordination, not legal documentation
- **Newly separated parents** — overwhelmed, need something simple NOW
- **Low-income coparents** — can't afford $100-200/yr tools
- **Grandparents/extended family** — need visibility into schedules
- **Blended families** — managing multiple custody schedules

## Proposed Solution

TwoHome is the **free, friendly coparenting coordinator** — shared custody calendar, expense tracking, and communication in one calm, simple app. No legal jargon, no conflict escalation features, no $100/yr price tag.

## Key Features

### 📅 Custody Calendar
- Visual custody schedule (color-coded by parent)
- Recurring patterns (week-on/week-off, 2-2-3, custom)
- One-tap swap requests ("Can you take Friday? I'll take next Tuesday")
- School/holiday/measurement schedule overlays
- Kids' activity calendar (sports, lessons, doctor appointments)
- Multi-child support with different schedules per child

### 💰 Shared Expenses
- Log expenses with photo receipts
- Category tracking (medical, school, activities, clothing, food)
- Automatic split calculation (50/50, proportional to income, custom)
- Monthly settlement with Venmo/Zelle/CashApp links
- "You owe $47 this month" — one number, no ambiguity
- Medical expense tracking (often court-ordered, always painful)

### 💬 Communication
- In-app messaging (keeps parenting talks separate from personal texts)
- Template messages ("Running 15 min late", "Can we swap next Saturday?")
- Decision logger (record agreed-upon decisions with timestamps)
- Shared notes (school info, doctor contacts, allergy lists)

### 👨‍👩‍👧 Kid Profiles
- Per-child profiles with medical info, allergies, emergency contacts
- School info (teacher, bus route, pickup permissions)
- Growth tracker (height, weight, milestones)
- Photo sharing (both parents see moments they missed)

### 📊 Documentation
- Timeline view of all custody exchanges, expenses, communications
- Export reports (PDF) for court if needed
- Pickup/dropoff confirmation log
- "Who had them when" history

### 🤝 Swap & Request System
- Calendar swap requests with accept/decline/counter
- Expense dispute resolution
- Change request history (accountability without hostility)

## Market Research

### Competitors
| App | Price | Focus | Gap |
|-----|-------|-------|-----|
| OurFamilyWizard | $99-199/yr | High-conflict, court-mandated | Overkill for cooperative parents, expensive |
| AppClose | $8.99/mo ($108/yr) | General coparenting | Was free until Jan 2026, now same price problem |
| TalkingParents | Free basic / $5.99+ | Communication only | No calendar, no expenses |
| Cozi | Free | General family | Not custody-aware, no expense splitting |
| Google Calendar | Free | Calendar | No custody logic, no expenses, no communication |

### Market Size
- 13.4M+ single parents in the US
- ~1M divorces/year (many with children)
- 50%+ of marriages end in divorce; 40%+ have children
- Coparenting app market estimated $150M+ and growing
- Average coparent uses 3-4 separate tools (calendar + texts + spreadsheets + Venmo)

### Why Now
- **AppClose went paid January 2026** — immediate gap in free market
- **Rising divorce rates** post-pandemic
- **Remote/hybrid work** makes custody coordination harder (not always at same address)
- **Court mandates increasing** — judges requiring documented communication
- Reddit r/DivorcedDads, r/coparenting, r/divorce — constant complaints about current tools

## Differentiation

1. **Free tier that actually works** — shared calendar + basic expenses + messaging (not a trial)
2. **Custody-first, not conflict-first** — designed for cooperation, not litigation
3. **Calm UX** — no orange alerts, no "violation tracking", no adversarial language
4. **Swap economy** — makes schedule flexibility easy and trackable
5. **One number** — "you owe $47" instead of spreadsheets of line items

## Business Model

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | Shared calendar, basic expenses, messaging, 1 child |
| **Family** | $3.99/mo | Unlimited children, expense photos, swap history, PDF exports, extended family access |
| **Pro** | $7.99/mo | Court-ready documentation, income-proportional splits, attorney access portal, priority support |

Free tier covers 80% of cooperative coparents. Paid tiers serve those who need documentation for legal situations or have complex finances.

## Technical Feasibility

- **Calendar**: Standard recurring event engine with custody pattern templates
- **Expenses**: CRUD + simple math + receipt photo storage
- **Messaging**: WebSocket-based chat with message logging
- **Mobile**: React Native or Flutter for cross-platform
- **Backend**: Node.js/PostgreSQL, simple schema
- **Real-time**: Push notifications for swap requests, messages, reminders

## Naming

**TwoHome** — two homes, one team. Warm, not legal. Descriptive without being clinical.

## Revenue Potential

If 5% of US coparents (670K) use the free tier and 10% of those convert to paid:
- 67K paying users × avg $5/mo = **$4M ARR** at conservative estimates
- Market is underserved; word-of-mouth in coparenting communities is strong
- Court/system referrals could drive significant growth

---

*Date: 2026-06-04 | Source: Web (Reddit r/DivorcedDads, AppClose pricing change, coparenting market research)*
