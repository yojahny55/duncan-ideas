# CareLoop — Family Caregiver Coordination Hub

> **One-liner:** Coordinate aging parent care across siblings — appointments, meds, tasks, and updates in one shared hub that replaces the group text chaos.

## Problem Statement

**53 million Americans** are family caregivers, and the majority coordinate with siblings and family members using scattered group texts, shared Google Docs, and sticky notes. The result:

- **Missed medications** — nobody knows if Dad took his pills today
- **Appointment confusion** — "I thought YOU were taking Mom to the doctor"
- **Unequal burden** — one sibling does 80% of the work, others don't see it
- **Information silos** — medical info trapped in one person's phone
- **Burnout** — the primary caregiver burns out because coordination is exhausting

Multiple Reddit threads (r/AgingParents, r/CaregiverSupport, r/dementia) show families desperately asking for coordination tools. Existing solutions like Sagebeam and Lotsa Helping Hands are either too clinical, too complex, or designed for professional caregivers — not families.

## Target Users

- **Adult children** (35-65) coordinating care for aging parents
- **Families with 2-6 siblings** sharing caregiving responsibilities
- **Long-distance caregivers** who can't be physically present but want to help
- **Sandwich generation** parents juggling kids AND aging parents

## Proposed Solution

**CareLoop** is a family-first caregiving coordination app — like a shared family dashboard specifically designed for managing an aging parent's care. No medical jargon, no enterprise complexity. Just the things families actually need:

### Core Features

1. **Care Circle** — Invite siblings/family to a shared care hub for each parent
2. **Daily Check-In Feed** — Quick status updates: "Mom had a good day, ate well, took all meds"
3. **Med Tracker** — Shared medication list with "marked as given" confirmation visible to all
4. **Appointment Calendar** — Shared calendar with "I'll take this one" claim system
5. **Task Board** — Groceries, pharmacy runs, house repairs — assign and track
6. **Care Journal** — Log symptoms, mood changes, incidents for doctor visits
7. **Document Vault** — Insurance cards, medication lists, emergency contacts, POA docs
8. **Fairness Dashboard** — Visual breakdown of who's contributing what (drives accountability without finger-pointing)

### Differentiators

- **Family-first, not clinical** — Warm, approachable UI, not a medical EHR
- **No signup friction for family** — Share a link, they're in (like Splitwise)
- **Fairness visibility** — Gentle accountability without confrontation
- **Offline-capable** — Works in areas with poor connectivity (rural parents)
- **Daily digest email** — Family members who don't open the app still stay informed

## Market Research

### Market Size
- $4.58B elderly care apps market (2024), growing to $16.87B by 2033 (13.9% CAGR)
- 53M+ family caregivers in the US alone
- 55% of family caregivers already use tech to coordinate care (AARP 2025)

### Existing Solutions & Why They Fall Short
| Tool | Problem |
|------|---------|
| **Lotsa Helping Hands** | Community volunteer focus, not family coordination |
| **CaringBridge** | Health updates/journaling only, no task coordination |
| **Sagebeam** | New, limited features, not widely adopted |
| **TenderCare** | Dementia-specific, too narrow |
| **CareZone** | Shut down in 2022 |
| **Group texts** | Information gets buried, no structure, no accountability |
| **Shared Google Docs** | Not purpose-built, clunky on mobile, no notifications |

### Gap
No consumer-friendly app combines med tracking + appointment coordination + task assignment + fairness visibility in a single, family-oriented hub. The space is either too clinical (built for professional caregivers) or too simple (just a journal).

## Revenue Model

| Tier | Price | Features |
|------|-------|----------|
| Free | $0/mo | 1 care circle, 3 members, basic med tracking, calendar |
| Family | $7/mo | Unlimited members, document vault, fairness dashboard, daily digests |
| Family+ | $12/mo | Multiple care circles (both parents), care journal analytics, PDF export for doctors |

## Tech Stack (Suggested)

- **Frontend:** Next.js + Tailwind CSS (PWA for mobile)
- **Backend:** Supabase (auth, real-time, storage)
- **Notifications:** Email digests + push via web push API
- **Offline:** Service worker + IndexedDB sync

## Prototype

See `prototype/` directory for interactive HTML/CSS/JS demo.

---

*Researched and documented by Duncan ⚔️ — March 26, 2026*
*Source: Web (Reddit r/AgingParents, r/CaregiverSupport, AARP, Business Research Insights)*
