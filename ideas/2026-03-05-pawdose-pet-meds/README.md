# PawDose 🐾💊

**Pet medication tracker for multi-med animals**

## Problem Statement

Pet owners with chronically ill animals often manage 3+ medications with different schedules, dosages, and refill timelines. They're:
- Missing doses because schedules are confusing
- Confusing which med is which (especially with similar-looking pills)
- Using paper notes, spreadsheets, or phone alarms that don't scale
- Struggling to remember when refills are needed
- Unable to share medication info easily with pet sitters or vets

Every health tracking app is built for humans. Not a single good option exists for managing a dog on 3 different meds with different schedules.

**Source:** 22+ Reddit threads across r/dogs, r/cats, r/AskVet, r/pets describing this exact pain point

## Target Users

1. **Primary:** Pet owners with chronically ill animals (diabetes, heart disease, kidney issues, cancer)
2. **Secondary:** Pet owners with temporary multi-med situations (post-surgery, infections)
3. **Tertiary:** Pet sitters, family members who help with medication duties

## Proposed Solution

**PawDose** — A dedicated pet medication tracker that understands:
- Multiple pets with multiple medications
- Different dosing schedules (2x daily, every 8 hours, every other day)
- Time-sensitive medications (must be given with food, 30 min before meals, etc.)
- Photo identification of pills to reduce confusion
- Refill tracking with pharmacy integration
- Shareable medication cards for pet sitters

## Key Features

### MVP (v1.0)
- **Pet profiles** — Add pets with photo, species, breed, weight, allergies
- **Medication management** — Name, dosage, frequency, instructions, photo
- **Smart reminders** — Push notifications with medication details
- **Dose logging** — Mark doses as given, skipped (with reason), or rescheduled
- **Refill alerts** — Track supply and remind before running out

### v1.5
- **Pet sitter mode** — Share a read-only medication card via link
- **Vet reports** — Export medication history as PDF for appointments
- **Photo identification** — Snap a photo of the pill, app shows which pet/med it's for
- **Multi-caregiver sync** — Family members see who gave what dose

### v2.0
- **Pharmacy integration** — Auto-refill reminders from Chewy, 1-800-PetMeds
- **Vet office sync** — Direct integration with vet practice management systems
- **Side effect tracking** — Log symptoms, correlate with medications
- **Voice logging** — "Alexa, tell PawDose I gave Max his insulin"

## User Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Add Pet       │────▶│   Add Meds      │────▶│   Set Schedule  │
│   (photo, info) │     │   (name, dose)  │     │   (times, days) │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                         │
         ┌───────────────────────────────────────────────┘
         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Get Reminder  │────▶│   Log Dose      │────▶│   View History  │
│   (push notif)  │     │   (given/skip)  │     │   (calendar)    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## Competitive Landscape

| Solution | Issue |
|----------|-------|
| Human medication apps (Medisafe, etc.) | Not designed for pet-specific needs, no vet integration |
| Spreadsheets | No reminders, hard to share, not mobile-friendly |
| Phone alarms | Can't track multiple meds, no dose logging |
| Pet health apps (PetDesk, etc.) | Focus on appointments, not robust med tracking |

**PawDose differentiator:** Purpose-built for pet medication management with photo ID, caregiver sharing, and vet export.

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 1 pet, 3 medications, basic reminders |
| PawDose+ | $4.99/mo | Unlimited pets/meds, sharing, vet reports |
| Family | $7.99/mo | Multi-caregiver sync, pharmacy integration |

## Technical Stack (Recommended)

- **Mobile:** React Native (iOS + Android)
- **Backend:** Node.js + PostgreSQL
- **Notifications:** Firebase Cloud Messaging
- **Photo storage:** S3/Cloudflare R2
- **Auth:** Clerk or Auth0

## Success Metrics

- Daily Active Users (DAU)
- Dose completion rate (given vs. scheduled)
- Refill on-time rate
- Pet sitter link shares
- Premium conversion rate

## Open Questions

1. Should we integrate with specific vet practice management systems first?
2. Is there a market for a B2B version for vet clinics to recommend to patients?
3. How critical is voice assistant integration (Alexa, Google Home)?

---

*Researched and documented by Duncan ⚔️ | March 5, 2026*
*Source: Reddit r/AppIdeas thread (22+ complaint threads validated)*
