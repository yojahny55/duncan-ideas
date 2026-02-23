# MoveSync - Moving Address Update Manager 📦

> One dashboard to track every address change when you move

## The Problem

Moving is already stressful, but the aftermath is worse: updating your address with **dozens** of services. Bank accounts, credit cards, insurance, subscriptions, online shopping, utilities, government agencies, doctor's offices, pharmacies, employers, schools...

People typically:
- Forget half the services until something goes wrong
- Waste hours hunting for "change address" settings buried in each app
- Miss important mail that goes to the old address
- Get frustrated repeating the same info (new address, move date) over and over

**From Reddit (r/USPS, r/moving):**
> "The whole change of address process is tedious and requires a lot of documentation"
> "I wish there was a checklist... financial, medical, subscriptions, government..."
> "USPS forwarding only lasts 12 months, then what?"

## The Solution

**MoveSync** - A moving command center that tracks every service needing your new address:

1. **Pre-built checklist** of 50+ common services organized by category
2. **One-click links** to each service's address update page
3. **Progress tracking** - see what's done vs. pending
4. **Smart reminders** for services you might have forgotten
5. **Moving timeline** with milestones and deadlines

## Target Users

- **Anyone moving** (renters, homebuyers, students, military)
- **Frequent movers** (average American moves 11.7x in lifetime)
- **Property managers** helping tenants with move-in checklists
- **HR departments** relocating employees

## Market Opportunity

- **40M+ Americans move annually** (2023 Census data)
- Average household has **70+ accounts** with address on file
- Moving industry: **$20B+ annually** in the US alone
- Pain is universal, recurring, and time-sensitive

## Key Features

### 1. Smart Checklist
Pre-populated categories:
- 🏦 **Financial** (banks, credit cards, investments, loans)
- 🏥 **Medical** (doctors, dentists, pharmacy, insurance)
- 🛡️ **Insurance** (auto, home, life, health)
- 📦 **Subscriptions** (streaming, boxes, magazines)
- 🛒 **Shopping** (Amazon, retailers with saved addresses)
- 🏛️ **Government** (DMV, voter registration, IRS, SSA)
- 📡 **Utilities** (electric, gas, water, internet)
- 📬 **Mail** (USPS, UPS, FedEx accounts)
- 👔 **Work** (employer, 401k provider, professional licenses)

### 2. Quick-Link Library
Direct links to change-address pages for major services:
- Chase, Bank of America, Wells Fargo, etc.
- Amazon, Target, Walmart
- Netflix, Spotify, Disney+
- Geico, State Farm, Progressive
- IRS, SSA, USPS

### 3. Progress Dashboard
- Visual progress bar (34/57 updated)
- Filter by status: Done, Pending, Won't Update
- Estimated time remaining

### 4. Smart Nudges
- "You marked Geico as updated - did you also check Progressive?"
- "Moving to a new state? Don't forget voter registration!"
- "It's been 30 days - review services you might have missed"

### 5. Moving Timeline
- T-30 days: Start utility transfers
- T-14 days: Update shipping addresses
- T-7 days: USPS mail forwarding
- Move day: Final walk-through
- T+30 days: Check for missed services

## Differentiation

| Feature | MoveSync | USPS Forwarding | Spreadsheet |
|---------|----------|-----------------|-------------|
| Tracks services | ✅ 50+ | ❌ Just mail | Manual |
| Direct update links | ✅ | ❌ | ❌ |
| Progress tracking | ✅ | ❌ | Manual |
| Reminders | ✅ | ❌ | ❌ |
| Category organization | ✅ | ❌ | Manual |
| Moving timeline | ✅ | ❌ | ❌ |

## Technical Approach

### MVP (Web App)
- React + Tailwind CSS
- Local storage for privacy (no account required)
- Pre-built service database with update URLs
- Export checklist as PDF

### Future Features
- Browser extension to detect logged-in services
- OAuth integrations to auto-update where APIs exist
- Moving company partnerships
- Shared family/household lists

## Revenue Model

1. **Freemium**
   - Free: Basic checklist, 20 services
   - Pro ($4.99 one-time): Unlimited services, direct links, PDF export

2. **Affiliate**
   - Partner with moving companies, utilities, etc.
   - "Set up internet at your new place" → earn referral

3. **B2B**
   - White-label for property managers
   - HR relocation packages

## Competitive Landscape

- **Updater.com** - Enterprise-focused, not consumer-friendly
- **MoveAdvisor** - Generic moving tips, no tracking
- **Spreadsheets** - What most people use (poorly)

**Gap:** No simple, free, consumer-focused address change tracker

## Success Metrics

- Services tracked per user (target: 30+)
- Completion rate (target: 80%+ services updated)
- NPS from post-move survey
- Organic sharing (moving is social - "here's what I used")

## Why Now

- Remote work = more people moving more frequently
- Subscription economy = more services to update
- AI can auto-suggest forgotten services
- Privacy concerns make "one service to rule them all" less appealing

---

## Prototype

See the [interactive prototype](prototype/index.html) demonstrating:
- Category-organized service checklist
- Status toggles (Pending/Done/Skip)
- Progress dashboard
- Quick-link functionality
- Moving timeline view

---

*Research source: Reddit r/USPS, r/moving, r/usps_complaints - February 2026*
