# RenewRadar 📋

**Never let an important document expire again.**

Track passports, driver's licenses, car registrations, visas, certifications, and insurance policies — get smart alerts before they expire.

## The Problem

People regularly miss critical document renewals:
- **Passport expires** days before an international trip
- **Driver's license lapses** — driving illegally without knowing
- **Car registration expires** — ticket on the windshield
- **Professional certification** — job at risk
- **Visa overstay** — immigration consequences
- **Insurance policy** — driving uninsured

Each of these can cost hundreds to thousands of dollars in fees, fines, or missed opportunities.

### Why Existing Solutions Fail

- **Calendar reminders**: Set once, forgotten, no smart escalation
- **WarrantyVault-style apps**: Focus on receipts/products, not identity documents
- **Notes apps**: No renewal timeline intelligence, no alerts
- **Mental memory**: The universal failure mode

## The Solution

**RenewRadar** is a dedicated document expiration tracker with:

1. **Smart Alert Ladder**: 90 → 60 → 30 → 14 → 7 → 3 → 1 day reminders
2. **Document Categories**: Passport, License, Visa, Registration, Certification, Insurance
3. **Renewal Intelligence**: Processing time estimates (passport = 6-8 weeks warning)
4. **Family Coverage**: Track documents for spouse, kids, elderly parents
5. **Photo Storage**: Snap the document for quick reference
6. **Renewal Links**: Direct links to official renewal portals

## Target Users

- **Frequent travelers** — passports, visas, Global Entry
- **Families** — tracking multiple people's documents
- **Professionals** — certifications, licenses (medical, legal, real estate)
- **Car owners** — registration, insurance, inspection stickers
- **Immigrants/expats** — visa renewals, work permits
- **Caregivers** — elderly parents' documents

## Key Features

### Core

| Feature | Description |
|---------|-------------|
| **Document Vault** | Add documents with expiry dates, photos, notes |
| **Smart Alerts** | Configurable reminder schedule per document type |
| **Processing Time Warnings** | Passports need 6-8 weeks; alerts start earlier |
| **Family Profiles** | Track documents for multiple people |
| **Renewal Portal Links** | One-tap to official renewal sites |

### Nice to Have

| Feature | Description |
|---------|-------------|
| **Document Scanning** | OCR to auto-extract expiry dates |
| **iCal/Google Calendar Sync** | Export alerts to calendar |
| **Renewal Cost Tracking** | Budget for upcoming renewals |
| **Document Checklist Templates** | Pre-built lists for travel, moving, etc. |

## User Flow

```
1. Add Document
   └── Select type (Passport, License, Visa, etc.)
   └── Enter expiry date (or scan document)
   └── Assign to person (self, spouse, child, parent)
   └── Optional: Add photo, notes, renewal link

2. Dashboard View
   └── See all documents sorted by urgency
   └── Color-coded: 🔴 Critical | 🟠 Soon | 🟢 OK
   └── Quick actions: Renew, Snooze, Edit

3. Alert System
   └── Push notifications at configured intervals
   └── Processing-time-aware (passport alerts earlier)
   └── Escalating urgency in notification tone

4. Renewal
   └── Tap "Renew" → direct link to official portal
   └── After renewal: Update expiry date
   └── Optional: Set next reminder
```

## Competitive Analysis

| App | Focus | Weakness |
|-----|-------|----------|
| **WarrantyVault** | Product warranties/receipts | Not for ID documents |
| **Apple/Google Wallet** | Digital cards | No expiry tracking/alerts |
| **Calendar apps** | Generic reminders | No smart escalation, no document context |
| **Notion/Notes** | Manual tracking | No alerts, no structure |
| **RenewRadar** | Document expiry specifically | — |

## Business Model

- **Free tier**: 5 documents, basic alerts
- **Premium ($2.99/mo or $19.99/yr)**: Unlimited documents, family profiles, document scanning, calendar sync

## Tech Stack (Suggested)

- **Frontend**: React Native (iOS + Android) or PWA
- **Backend**: Supabase or Firebase
- **Notifications**: OneSignal or native push
- **OCR**: Google Cloud Vision for document scanning
- **Auth**: Social login + biometric

## Prototype

See `prototype/index.html` for a working demo.

## Market Validation

From Reddit research:
- r/ADHD users struggle with document management
- r/immigration posts about missed visa renewals
- r/personalfinance threads on car insurance lapses
- r/travel horror stories about expired passports

## Why This Will Work

1. **Clear pain point** — everyone has documents that expire
2. **Simple value prop** — never miss a renewal
3. **Recurring need** — documents keep expiring
4. **Family expansion** — one user tracks for many people
5. **Premium conversion** — power users need unlimited docs

---

*Researched by Duncan ⚔️ on 2026-02-14*
*Source: Reddit (r/ADHD, r/travel, r/personalfinance)*
