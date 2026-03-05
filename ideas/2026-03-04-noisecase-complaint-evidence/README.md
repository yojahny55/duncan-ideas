# NoiseCase — Noise Complaint Evidence Builder

**Date:** 2026-03-04  
**Source:** Web Research (Reddit, Noise Ordinance Forums, Legal Blogs)  
**Category:** Consumer Protection / Housing / Legal Evidence

## Problem Statement

Millions of apartment dwellers suffer from noisy neighbors but lack credible evidence when reporting to landlords, police, or small claims court. The burden of proof falls on the complainer, but most people only have:

- Vague descriptions ("It was really loud last night")
- No timestamps or documentation
- No understanding of local noise ordinance thresholds
- No professional-looking evidence package

**The result:** Complaints get dismissed, landlords don't act, and people either move or suffer in silence.

### The Evidence Gap

- Housing authorities and courts want **decibel readings**, not feelings
- Local ordinances have specific thresholds (45 dB at night, 55 dB during day in many cities)
- Professional sound meters cost $200+ and require expertise
- Existing dB meter apps don't create evidence-ready documentation
- People don't know what their local noise laws actually say

### Market Pain Points (from research)

1. **"The data shows a violation"** — Moving from subjective complaints to objective measurements
2. **"Keep detailed noise logs"** — Legal advice sites consistently recommend logging incidents
3. **"Record audio/video evidence"** — But no tool makes this organized or court-ready
4. **"You can try one of the apps on your cell"** — But generic dB apps don't build cases
5. **"Evidence of excessive and disturbing noise"** — Required for small claims court

## Target Users

1. **Apartment renters** dealing with loud neighbors (music, parties, stomping, dogs)
2. **Homeowners** near construction, businesses, or loud neighbors
3. **HOA board members** documenting violations
4. **Property managers** investigating tenant complaints
5. **Legal self-advocates** building cases for small claims court

## Proposed Solution

**NoiseCase** — A mobile-first app that transforms your phone into a professional noise evidence collection system.

### How It Works

1. **Set Up Your Case** — Create a case file, enter your address, and NoiseCase automatically fetches your local noise ordinance thresholds

2. **Log Incidents** — When noise occurs:
   - Tap "Record Incident"
   - Phone measures decibel levels in real-time
   - App records audio clips with timestamps
   - Add notes about the noise type and source

3. **Build Your Evidence** — The app automatically:
   - Logs duration and peak dB readings
   - Compares to local ordinance thresholds
   - Flags violations with severity scores
   - Creates a timeline of incidents

4. **Generate Reports** — Export a professional PDF package containing:
   - Incident log with timestamps
   - Decibel readings vs. legal thresholds
   - Audio clip references (with secure cloud links)
   - Local ordinance citations
   - Total violation count and severity assessment

## Key Features

### 📊 Smart Decibel Monitoring
- Real-time dB readings via phone microphone
- Calibration wizard for improved accuracy
- Automatic threshold violation detection
- Peak, average, and duration tracking

### 📝 Incident Logger
- One-tap incident recording
- Audio clip capture (30 sec - 5 min)
- Noise type categories (music, voices, construction, pets, footsteps)
- Timestamped notes
- Location verification via GPS

### 📍 Local Ordinance Database
- Fetch noise laws by address
- Day/night threshold awareness
- Quiet hours detection
- Exception awareness (holidays, construction permits)

### 📋 Evidence Package Generator
- Professional PDF reports
- Court-ready formatting
- Incident timeline visualization
- Audio file references with secure links
- Local law citations included

### 📈 Case Dashboard
- Total incidents logged
- Violation percentage
- Worst offending times/days
- Pattern detection (recurring at 11 PM every Friday)

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 5 incidents/month, basic dB meter, manual logging |
| **Pro** | $4.99/mo | Unlimited incidents, audio recording, PDF reports |
| **Legal** | $9.99/mo | Everything + attorney-reviewed templates, cloud storage, certified timestamps |

### Why People Pay

- **Free trial trap avoided:** Even basic evidence logging has value
- **PDF reports unlock action:** Landlords/courts take documented complaints seriously
- **Legal tier for serious cases:** People fighting in court need bulletproof evidence

## Competitive Landscape

| Existing Solution | Limitation |
|-------------------|------------|
| Generic dB meter apps | No logging, no reports, no ordinance awareness |
| Noise monitoring devices | $200+ hardware, overkill for consumers |
| Manual logging | No dB readings, not professional, easy to dismiss |
| Legal consultation | $300+ per hour, overkill for simple neighbor disputes |

### NoiseCase Differentiation

- **Purpose-built for complaints** — Not a general sound meter
- **Ordinance-aware** — Knows what violates YOUR local laws
- **Evidence-focused** — Designed for legal credibility
- **Affordable** — $5/mo vs. $200 hardware or $300 lawyer

## Technical Architecture

### Frontend (Mobile-First PWA)
- React Native / Flutter for cross-platform
- Web Audio API for browser fallback
- Offline-first incident logging
- Local storage with cloud sync

### Backend
- Node.js + PostgreSQL
- Audio file storage (S3/R2)
- Ordinance database (scraped/curated by city)
- PDF generation (Puppeteer/html-pdf)

### Data Sources
- MuniCode API for ordinance data
- Google Maps for address verification
- Timezone API for quiet hours calculation

## Success Metrics

- **Activation:** User logs first incident within 24 hours
- **Engagement:** Average 3+ incidents logged per active case
- **Conversion:** 15% free-to-paid conversion
- **Outcome:** Track reported resolution rates (landlord action, legal win)

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Phone mic accuracy | Calibration wizard, disclaimer about non-certified readings |
| Ordinance data outdated | Regular scraping + user reports + manual curation for top cities |
| Legal liability | Clear disclaimers, not legal advice, evidence supplementation |
| Privacy concerns | Audio stored encrypted, user controls retention, GDPR compliant |

## Development Phases

### Phase 1: MVP (2 weeks)
- Basic dB meter with logging
- Manual incident notes
- Simple PDF export
- 10 major cities' ordinances

### Phase 2: Smart Features (4 weeks)
- Audio recording
- Automatic threshold detection
- Pattern analysis
- 100+ cities

### Phase 3: Legal Grade (6 weeks)
- Certified timestamps
- Attorney-reviewed templates
- Integration with legal services
- API for property managers

## Why This Wins

1. **Solves a real pain** — Noise complaints are one of the top reasons people hate apartment living
2. **Evidence shifts power** — Landlords and courts can't ignore documented violations
3. **Low competition** — No dedicated app for this specific use case
4. **Clear monetization** — Value prop is obvious (free = log, paid = prove)
5. **Expands with network** — Ordinance database gets better with each user

---

*When your neighbor's 2 AM parties meet your 2 AM evidence package.*
