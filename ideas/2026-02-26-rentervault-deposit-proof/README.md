# RenterVault — Renter's Digital Evidence Vault

**Date:** February 26, 2026  
**Source:** Reddit r/SomebodyMakeThis (21 upvotes, 96% upvote ratio)  
**Category:** Personal Finance / Legal / Real Estate

---

## Problem Statement

Renting in the US is a nightmare when it comes to security deposits. Landlords frequently withhold money for "damage" that was pre-existing, or tenants can't prove they requested repairs. The standard advice — take dated photos on move-in day, email them to yourself — is messy:

- Photos get lost in camera rolls
- Hard to organize "before vs after" comparisons
- No easy way to compile everything into a dispute-ready report
- Evidence scattered across Google Drive, Notes app, email

**The painful reality:** When you're in a deposit dispute 10-12 months later, you can't find your documentation, timestamps are questioned, and you lose money you're legally owed.

### Pain Points
- 🏠 **Lost evidence** — Move-in photos buried in camera roll
- ⏰ **Questionable timestamps** — "When was this really taken?"
- 📂 **Scattered documentation** — Repair requests in email, rent proofs in texts
- 📝 **No structured format** — Can't easily present evidence to landlord/court
- 😓 **Motivation decay** — No reminders to keep documenting

---

## Target Users

1. **Renters** — Anyone renting an apartment/house who wants to protect their deposit
2. **Young professionals** — First-time renters unfamiliar with documentation best practices
3. **Frequent movers** — People who move often and deal with deposits regularly
4. **Tenants in disputes** — Currently fighting to get their deposit back

### User Personas

**Sarah, 26, Software Developer**
- Just signed her first lease in a new city
- Heard horror stories about lost deposits
- Wants a simple system that "just works"
- Will forget to document unless reminded

**Marcus, 34, Sales Manager**
- Moves every 2-3 years for work
- Lost $800 on last deposit to bogus "carpet damage"
- Needs organized evidence for potential disputes
- Values one-tap export for professional presentation

---

## Proposed Solution

**RenterVault** — A lightweight mobile-first app that's literally a digital vault for renters:

### Core Features

1. **Guided Move-In/Out Checklists**
   - Room-by-room prompts for photos
   - Notes on existing issues (scratches, stains, appliance conditions)
   - Pre-populated checklist items based on property type

2. **Tamper-Proof Evidence**
   - Auto-timestamp all photos/videos
   - Geotag with property address
   - Hash files for tamper-proof verification
   - Blockchain timestamp option for legal disputes

3. **Document Categories**
   - Move-in condition photos
   - Move-out condition photos
   - Rent payment receipts/screenshots
   - Repair request communications
   - Appliance warranties/manuals
   - Lease agreement

4. **Before/After Comparison**
   - Side-by-side view of same location
   - Timeline slider for condition over time
   - Auto-match rooms between move-in/out

5. **One-Tap Evidence Package**
   - Generate timestamped PDF report
   - Professional formatting for landlord/small claims court
   - Include metadata verification
   - Email directly or download

6. **Gentle Accountability**
   - Monthly rent proof upload reminders
   - Streak system for consistent documentation
   - Move-out countdown with checklist alerts
   - "Document this issue" quick-capture

### Why Not Just Use [X]?

| Solution | Problem |
|----------|---------|
| Camera Roll | No organization, timestamps questioned |
| Google Drive | Manual sorting, no guided workflow |
| Notes App | No photo optimization, hard to export |
| Avail/RentRedi | Landlord tools, not tenant-focused |
| General doc scanners | Not purpose-built for rental disputes |

---

## Key Features (MVP)

### Phase 1 — Core Vault
- [ ] Property setup (address, move-in date, lease end)
- [ ] Room-by-room photo capture with checklist
- [ ] Auto-timestamp and geotag
- [ ] Basic categories (move-in, move-out, repairs, payments)
- [ ] Search and filter by date/category
- [ ] PDF export with timestamps

### Phase 2 — Smart Features
- [ ] Before/after comparison tool
- [ ] Reminder system (monthly check-ins, move-out countdown)
- [ ] Repair request log with communication screenshots
- [ ] Multiple property support
- [ ] Cloud sync and backup

### Phase 3 — Power Features
- [ ] Blockchain timestamp verification
- [ ] AI-powered damage assessment
- [ ] Template dispute letters
- [ ] Integration with local tenant rights resources
- [ ] Share vault with roommates

---

## Market Analysis

### Market Size
- **44 million** renter households in the US
- **$45 billion** collected in security deposits annually
- Average deposit: **$1,400**
- **26%** of renters report disputes over deposits

### Competition

| Competitor | Focus | Gap |
|------------|-------|-----|
| Avail | Landlord platform | Not tenant-focused |
| RentRedi | Property management | For landlords |
| Rhino | Deposit insurance | Replaces deposit, not evidence |
| Jetty | Deposit alternative | Different problem |

**No direct tenant-focused evidence vault exists.**

### Revenue Model
- **Free tier:** 1 property, basic features
- **Premium ($3.99/mo):** Multiple properties, cloud backup, advanced export
- **Dispute Package ($9.99 one-time):** Professional PDF report, legal template letters

---

## Technical Approach

### Stack
- **Mobile:** React Native or Flutter (cross-platform)
- **Backend:** Firebase or Supabase (auth, storage, sync)
- **Storage:** AWS S3 or Cloudflare R2 (photo storage)
- **Export:** PDF generation with `react-pdf` or server-side

### Key Technical Challenges
1. **Tamper-proof timestamps** — Hash files with SHA-256, store hash on backend
2. **Geolocation accuracy** — Use device GPS with address verification
3. **Photo quality** — Compress for storage but maintain legal-quality originals
4. **Offline support** — Local-first architecture with sync

---

## Success Metrics

- **Adoption:** Downloads, active properties documented
- **Engagement:** Photos uploaded per property, monthly active users
- **Outcome:** Dispute win rate (user surveys), deposit recovery amount
- **Retention:** Multi-property users, renewal rate

---

## Why This Will Work

1. **Universal pain point** — Every renter faces this
2. **Clear value proposition** — "Get your deposit back"
3. **Simple to use** — Guided workflow, not another generic tool
4. **High stakes** — $1,400 average deposit creates strong motivation
5. **Viral potential** — Share with roommates, recommend after winning dispute
6. **No competition** — Landlord tools exist, tenant tools don't

---

## Open Questions

1. Legal considerations for timestamp/hash verification admissibility?
2. Integration with tenant rights organizations?
3. Expansion to other countries with different deposit laws?
4. Partnership opportunities with rental listing sites?

---

## Prototype

See `prototype/index.html` for interactive demo.

---

*Researched by Duncan ⚔️ — February 26, 2026*
