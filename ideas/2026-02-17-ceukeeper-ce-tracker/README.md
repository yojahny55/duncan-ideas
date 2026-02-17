# CEUKeeper — Professional CE Credit Tracker

**Track continuing education credits across all your professional licenses. Never scramble before a renewal deadline again.**

## The Problem

Licensed professionals (nurses, therapists, engineers, accountants, teachers, pharmacists) face a frustrating reality:

1. **Multiple licenses** — Many hold licenses in multiple states with different requirements
2. **Varied CE requirements** — Each license has different credit totals, topics, and deadlines
3. **Scattered records** — Certificates come from webinars, conferences, employers, online courses
4. **Confusing rules** — Some credits count for multiple licenses, others don't
5. **Last-minute panic** — "I need 40 hours of CEUs by November and I haven't started"

Current solutions are fragmented:
- State boards each have their own tracking systems
- CE providers offer partial tracking
- Most professionals resort to spreadsheets and folders

## The Solution

**CEUKeeper** — A unified dashboard that:

- Tracks all professional licenses in one place
- Monitors CE requirements per license (hours, topics, deadlines)
- Logs completed courses with automatic categorization
- Alerts you with smart reminders (not "due tomorrow" — "you need 20 more hours and have 3 months left")
- Shows which credits apply to multiple licenses
- Exports reports for license renewal

## Target Users

- **Healthcare professionals**: Nurses (RN, LPN), therapists (PT, OT, LCSW), pharmacists
- **Licensed engineers**: PE, SE licenses across states
- **Accountants**: CPAs maintaining licenses
- **Teachers**: State certifications requiring PD hours
- **IT professionals**: Cisco, CompTIA, AWS certifications
- **Real estate agents**: License renewal requirements
- **Legal professionals**: Bar association CLE requirements

## Key Features

### Dashboard
- Visual progress bars for each license
- Days remaining with pacing indicator ("on track" / "at risk" / "behind")
- Quick-add recent CE completions

### License Management
- Add multiple licenses with state-specific requirements
- Pre-populated templates for common license types
- Custom requirements support

### Credit Logging
- Log CE courses with provider, date, hours, topic categories
- Upload/attach certificates (PDF, images)
- Automatic topic detection via AI
- Duplicate detection

### Smart Alerts
- Pacing reminders ("You're 15 hours behind — here's a catch-up plan")
- Deadline escalation (monthly → weekly → daily)
- Renewal window opening notifications

### Cross-License Mapping
- See which completed credits apply to multiple licenses
- Maximize your CE investment

### Reporting
- Generate renewal-ready reports
- Export to PDF for board submissions
- Audit trail for all logged credits

## Differentiator vs RenewRadar

| Feature | RenewRadar | CEUKeeper |
|---------|------------|-----------|
| Focus | Document expiry dates | Education credits tracking |
| Tracks | Passports, visas, registrations | Professional license CE requirements |
| Complexity | Simple date tracking | Complex requirement rules per license |
| Categories | None | Topic-based (ethics, clinical, etc.) |
| Reporting | Expiration alerts | CE completion reports for boards |

## Competitive Landscape

| Competitor | Weakness |
|------------|----------|
| CE Broker | Limited to specific states/professions |
| Medscape CE | Healthcare only, provider-specific |
| Spreadsheets | No automation, easy to miss |
| Board portals | Fragmented per license |

## Revenue Model

- **Free tier**: 1 license, basic tracking
- **Pro** ($4.99/mo): Unlimited licenses, smart alerts, PDF reports
- **Teams** ($9.99/mo per seat): Employer compliance tracking

## Tech Stack (Suggested)

- **Frontend**: React Native (iOS/Android) + React Web
- **Backend**: Supabase or Firebase
- **Storage**: Cloud storage for certificate uploads
- **AI**: OpenAI for certificate parsing and topic extraction

## Market Size

- 20M+ nurses in the US alone
- 800K+ licensed therapists
- 1M+ CPAs
- Most require annual CE tracking

## Prototype

See `/prototype/index.html` for interactive dashboard demo.

---

**Source**: Reddit discussions in r/nursing, r/therapists, r/PharmacyTechnician, r/medlabprofessionals — widespread complaints about CE tracking complexity, spreadsheet workarounds, last-minute panic.

**Date**: 2026-02-17
**Researched by**: Duncan ⚔️
