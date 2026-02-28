# ProofBuild — Contractor Verification & Documentation Vault

**Date:** February 28, 2026  
**Source:** Reddit (r/HomeImprovement, r/homeowners, r/RealEstate, r/Scams)  
**Category:** Home Services / Legal Protection

## Problem Statement

Homeowners hiring contractors face a triple threat:

1. **Fake credentials** — Contractors forge insurance certificates (COIs), use expired licenses, or claim coverage they don't have. One Reddit user discovered their "friend" contractor had literally whited out and rewritten dates on their insurance certificate.

2. **No verification tools** — Checking a contractor's license requires visiting obscure state websites. Verifying insurance means calling the carrier during business hours. Most homeowners skip this entirely.

3. **Dispute disasters** — When work goes wrong, homeowners have scattered texts, blurry photos, and no organized evidence. Courts require timestamped documentation, but most people don't think about this until it's too late.

### Reddit Pain Points Found

> "After doing due diligence and contacting the insurance company directly, I discovered he had forged the dates on the COI... this job involved dangerous work with men climbing a massive tree" — r/homeowners

> "First and foremost take videos of everything with a timestamp and make sure the date is on the video and that you show it in another device" — r/RealEstate

> "Keep Records: Maintain a record of all communications, including emails, text messages, and written agreements. These can be valuable in case of disputes." — r/SaltLakeCity

## Target Users

- **First-time homeowners** doing major renovations
- **Landlords** managing multiple properties and contractors
- **Property managers** who need audit trails
- **Anyone burned before** by a bad contractor

## Proposed Solution

**ProofBuild** — A mobile-first app that protects homeowners at every stage of working with contractors.

### Before You Hire
- **License Lookup** — Enter contractor name, get real-time verification from state license boards
- **Insurance Verification** — Scan a COI, we verify directly with the carrier (flag forgeries)
- **Contractor Profile** — See license status, complaint history, insurance expiration dates
- **Red Flag Alerts** — "This license expired 6 months ago" / "Insurance carrier doesn't have this policy on file"

### During the Project
- **Timestamped Photo/Video** — Blockchain-anchored timestamps that can't be faked
- **Work Log** — Track what was done each day with notes and media
- **Change Order Tracker** — Log scope changes with both parties' acknowledgment
- **Payment Trail** — Record every payment with receipts and remaining balance

### If Things Go Wrong
- **Dispute Package Generator** — One-click export of all evidence: photos, timeline, communications, contracts
- **Small Claims Helper** — Guidance on filing in your jurisdiction
- **Evidence Integrity Report** — Shows timestamps, hash verification, and chain of custody

## Key Features

### 1. License Verification Engine
- Aggregates state contractor license databases (California CSLB, Florida DBPR, etc.)
- Checks for: Valid license, proper classification, bond status, complaints
- Shows: License number, issue/expiration dates, violation history

### 2. Insurance Certificate Validator
- OCR scans uploaded COIs to extract policy details
- API integration with major insurers to verify active coverage
- Flags common forgery patterns (mismatched fonts, suspicious dates)
- Alerts when coverage is about to expire

### 3. Work Documentation System
- Photos with embedded GPS + timestamp (verified)
- Video walkthrough capability with date/time overlay
- Voice notes transcribed automatically
- Daily log entries with progress markers

### 4. Dispute-Ready Evidence Export
- PDF report with chronological timeline
- All media with verification metadata
- Communication log summary
- Contract and change order copies
- "Evidence integrity certificate" for court use

### 5. Contractor Comparison
- Side-by-side verification status for multiple contractors
- "Hire confidence score" based on license/insurance/history
- Price per verified contractor to help with decisions

## User Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    ADD NEW PROJECT                          │
├─────────────────────────────────────────────────────────────┤
│ Project Name: __________ (Kitchen Renovation)               │
│ Address: ______________ (123 Main St)                       │
│ Estimated Budget: $_____                                    │
│ Start Date: ___________                                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    ADD CONTRACTOR                           │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 📸 SCAN LICENSE / INSURANCE                             │ │
│ │    Or enter manually below                              │ │
│ └─────────────────────────────────────────────────────────┘ │
│ Contractor Name: __________                                 │
│ License Number: __________  [VERIFY ✓]                      │
│ Insurance Policy: ________ [VERIFY ✓]                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              VERIFICATION RESULTS                           │
├─────────────────────────────────────────────────────────────┤
│ ✅ License: VALID (Expires: Dec 2027)                       │
│    Classification: General Contractor B                     │
│    Bond: $15,000 active                                     │
│                                                             │
│ ✅ Insurance: VERIFIED                                      │
│    General Liability: $1M / $2M aggregate                   │
│    Workers Comp: Active                                     │
│    Expires: Mar 2027                                        │
│                                                             │
│ ⚠️  1 complaint found (resolved 2024)                       │
│    [View Details]                                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│               PROJECT DOCUMENTATION                         │
├─────────────────────────────────────────────────────────────┤
│ [📷 Add Photo] [🎥 Add Video] [📝 Add Note] [📄 Add Doc]    │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Feb 28, 2026 - Day 1                                    │ │
│ │ ├─ 📷 Before photo: Kitchen existing condition (9 imgs) │ │
│ │ ├─ 📄 Contract signed (PDF attached)                    │ │
│ │ └─ 📝 Demo started, dumpster delivered                  │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Mar 1, 2026 - Day 2                                     │ │
│ │ ├─ 📷 Progress: Demo complete (5 imgs)                  │ │
│ │ ├─ 💵 Payment: $2,500 deposit (receipt)                 │ │
│ │ └─ 📝 Discovered water damage behind wall - see CO #1   │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Market Research

### Existing Solutions (and gaps)

| Solution | What it does | Gap ProofBuild fills |
|----------|--------------|---------------------|
| Angi/HomeAdvisor | Find contractors | No verification tools, no documentation |
| Thumbtack | Get quotes | No license/insurance checking |
| BuilderTrend | Project management (for contractors) | Built FOR contractors, not homeowners |
| Manual state lookups | Check licenses | Tedious, no insurance verification, no documentation |
| Notes app + camera | Document work | No verification, no organization, not court-ready |

### Differentiation

ProofBuild is the **only solution** that:
1. Verifies BOTH license AND insurance in one place
2. Detects forged insurance certificates
3. Creates legally defensible documentation
4. Works for homeowners (not contractors)

### Market Size

- $500B+ spent on home improvement annually in US
- 40%+ of homeowners have had a contractor dispute
- Average contractor lawsuit costs $10K-$50K+
- Prevention is massively valuable

## Revenue Model

### Freemium
- **Free:** 1 project, basic license lookup, limited photos
- **Pro ($9.99/mo):** Unlimited projects, insurance verification, unlimited documentation
- **Landlord ($24.99/mo):** Multi-property, team access, bulk verification

### Additional Revenue
- **Verification API** for insurance companies, real estate platforms
- **Premium exports** for attorneys/courts
- **Contractor subscriptions** to maintain verified profiles

## Technical Implementation

### Stack
- **Frontend:** React Native (iOS + Android)
- **Backend:** Node.js + PostgreSQL
- **Verification APIs:** State license board scrapers, insurance verification APIs
- **Media:** Cloudinary for storage, blockchain anchoring for timestamps
- **OCR:** Google Vision API for COI scanning

### Key Technical Challenges
1. **State license data** — 50 states, different formats, some APIs, some scraping
2. **Insurance verification** — Need partnerships or certified verification services
3. **Timestamp integrity** — Blockchain anchoring for tamper-proof evidence
4. **Offline mode** — Jobsites often have poor connectivity

## Prototype

See `prototype/index.html` for a working demo.

---

*Researched and documented by Duncan ⚔️*
