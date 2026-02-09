# PillCheck - Medication Interaction Checker

> **Source:** Reddit Research (r/SomebodyMakeThis, r/AskReddit, r/MobileAppDevelopers)
> **Date:** February 9, 2026
> **Status:** Concept + Prototype

## Problem Statement

Millions of people take multiple medications daily, but have no easy way to check if their drugs could interact dangerously. A Reddit user described the problem perfectly:

> "A super useful app I feel would be where a user can input all the medicines they are taking and see if any medicine is in conflict with another medicine."
> — [r/AskReddit thread](https://www.reddit.com/r/AskReddit/comments/1m1fl4e/)

**The Pain Points:**
- 🏥 Doctors don't always catch interactions across multiple specialists
- 💊 OTC medications and supplements are often overlooked
- 👴 Elderly patients on 5+ medications are at highest risk
- 📋 Pharmacy systems don't communicate across chains
- ⏰ Waiting for a pharmacist consultation is inconvenient

**Real Statistics:**
- 1.3 million Americans are injured annually by medication errors
- Drug interactions cause ~125,000 deaths per year in the US
- 55% of adults take 4+ prescription medications

## Target Users

1. **Primary: Adults 50+ on multiple medications** - Managing chronic conditions, highest risk
2. **Caregivers** - Managing parents'/patients' medication lists
3. **Health-conscious individuals** - Want to verify supplement interactions
4. **Chronic condition patients** - Diabetes, heart disease, mental health patients on complex regimens

## Proposed Solution

**PillCheck** - A dead-simple mobile/web app that lets users:
1. Build their medication list (scan barcode, search, or add manually)
2. See instant interaction alerts with severity levels
3. Get plain-English explanations of what could happen
4. Share reports with doctors

## Key Features

### MVP Features
1. **Medication Search** - Comprehensive drug database (FDA, NIH data)
2. **Barcode Scanner** - Scan OTC medications for quick add
3. **Interaction Matrix** - Visual grid showing all drug-drug interactions
4. **Severity Levels** - Color-coded (Critical 🔴, Moderate 🟠, Minor 🟡)
5. **Plain-English Explanations** - "Taking X with Y can cause Z"
6. **Medication List** - Save your current medications for quick checks

### Future Features
7. **Food Interactions** - Grapefruit + statins, etc.
8. **Timing Recommendations** - When to take each medication
9. **Refill Reminders** - Track when you need refills
10. **Doctor Report** - Export PDF for your healthcare provider
11. **Family Profiles** - Manage medications for multiple family members
12. **AI Pharmacist** - Chat with AI about your medications

## Technical Stack

### Frontend
- **React** or **Next.js** for web
- **React Native** for mobile
- **TailwindCSS** for styling

### Backend
- **Node.js/Express** or **Python/FastAPI**
- **PostgreSQL** for user data
- **Redis** for caching drug lookups

### Data Sources
- **RxNorm API** (NIH) - Drug names and identifiers
- **DrugBank** - Interaction data
- **OpenFDA** - FDA drug labels
- **DailyMed** - Medication information

### Infrastructure
- **AWS** (Lambda, RDS, S3)
- **Auth0** or **Clerk** for authentication
- **Stripe** for premium subscriptions

## Monetization Strategy

### Freemium Model
- **Free Tier:**
  - 5 medications max
  - Basic interaction checks
  - Ad-supported

- **Premium ($4.99/month or $39.99/year):**
  - Unlimited medications
  - Family profiles (up to 5)
  - PDF reports for doctors
  - Food interactions
  - Refill reminders
  - No ads
  - Priority support

### B2B Opportunities
- **Pharmacy Integrations** - White-label for independent pharmacies
- **Healthcare Systems** - Enterprise licensing for hospitals
- **Insurance Partners** - Reduce claims from drug interactions

## Competition Analysis

| App | Strengths | Weaknesses |
|-----|-----------|------------|
| **Medisafe** | Pill reminders, syncs with pharmacies | Interaction check is secondary, cluttered UI |
| **Drugs.com** | Comprehensive database | Old UI, information overload, web-only |
| **Epocrates** | Trusted by doctors | Complex, designed for professionals |
| **WebMD** | Brand recognition | Ads everywhere, not focused on interactions |

### Our Differentiation
- **Simplicity first** - One job: check interactions
- **Visual interaction matrix** - See all conflicts at a glance
- **Plain English** - No medical jargon
- **Modern mobile-first design** - Not a 2010s web portal

## Why This Will Work

1. **Underserved market** - No app focuses purely on interaction checking with great UX
2. **Aging population** - 10,000 Americans turn 65 every day; polypharmacy is growing
3. **Health awareness** - Post-COVID, people are more engaged with their health
4. **Clear monetization** - Health subscriptions have proven high willingness-to-pay
5. **Trust factor** - Using official NIH/FDA data sources builds credibility
6. **Low-tech barrier** - APIs exist; it's about UX not rocket science

## Development Roadmap

### Phase 1: MVP (4-6 weeks)
- [ ] Drug database integration (RxNorm)
- [ ] Basic interaction checking
- [ ] Medication list management
- [ ] Simple web app

### Phase 2: Polish (2-4 weeks)
- [ ] Barcode scanning
- [ ] Severity levels and explanations
- [ ] User accounts and saved lists
- [ ] Mobile-responsive design

### Phase 3: Monetization (2-4 weeks)
- [ ] Premium tier implementation
- [ ] PDF report generation
- [ ] Family profiles
- [ ] Payment integration

### Phase 4: Growth (Ongoing)
- [ ] React Native mobile apps
- [ ] Food interactions
- [ ] AI pharmacist feature
- [ ] B2B partnerships

## Prototype

See the `prototype/` folder for a working HTML/CSS/JS demo showing the core UX flow.
