# RightNow — AI Know-Your-Rights Assistant ⚖️

> Instant, situation-specific legal rights guidance when you need it most. Not in 3 days when you can afford a lawyer — right now.

## Problem Statement

People encounter legal situations daily — traffic stops, workplace disputes, landlord conflicts, consumer scams, immigration checkpoints, medical billing — and **don't know their rights in the moment**. By the time they research or consult a lawyer, the moment has passed and damage is done.

- **68% of Americans** can't name all three branches of government, let alone their 4th Amendment rights during a traffic stop
- Average lawyer consultation: **$200-400/hr** with days of wait time
- ACLU "Know Your Rights" guides exist but are **static, generic, and not state-specific**
- Legal Equalizer (2018) tried police encounter focus only — limited scope, poor UX, dead app
- Google/ChatGPT gives walls of text when you need **3 bullet points in 30 seconds**
- Laws vary dramatically by state — what's legal in Florida may be illegal in California

## Target Users

1. **Renters** (44M US households) — facing illegal evictions, deposit theft, repair neglect
2. **Workers** (160M US workforce) — wage theft ($15B/yr), wrongful termination, hostile work environments
3. **Consumers** (everyone) — billing disputes, return rights, warranty enforcement, debt collector harassment
4. **Drivers** (230M licensed) — traffic stops, DUI checkpoints, accidents, insurance disputes
5. **Immigrants** (46M foreign-born) — ICE encounters, workplace raids, airport questioning
6. **Patients** (everyone) — surprise billing, HIPAA violations, insurance denials, medical debt

## Proposed Solution

**RightNow** is an AI-powered legal rights assistant that gives you instant, state-specific, plain-English guidance for real-time situations. Think of it as having a civil rights lawyer in your pocket.

### How It Works
1. **Select your situation** from categorized scenarios (or describe it in natural language)
2. **Enter your state** (auto-detected via location, or manual)
3. **Get instant rights** — 3-5 bullet points of what you CAN and CANNOT do
4. **Follow the script** — exact phrases to say ("I do not consent to a search")
5. **Document the encounter** — one-tap incident logging with timestamps
6. **Know next steps** — when to call a lawyer, file complaints, or escalate

### What Makes It Different
- **Situation-first, not law-first** — you don't need to know it's "4th Amendment" to find your search rights
- **State-specific** — California tenant rights ≠ Texas tenant rights
- **Plain English** — zero legal jargon, written at a 6th-grade reading level
- **30-second answers** — designed for the moment, not research sessions
- **Offline capable** — your rights don't require Wi-Fi
- **Incident documentation** — timestamps and notes for evidence later
- **Exact scripts** — not just "you have the right to remain silent" but "say exactly: I am invoking my right to remain silent"

## Key Features

### 🚨 Situation Library
Pre-built scenarios organized by life area:
- **Police & Law Enforcement** — traffic stops, detentions, searches, arrests, protests
- **Housing & Tenants** — eviction, deposits, repairs, discrimination, lease disputes
- **Workplace** — wage theft, firing, harassment, FMLA, breaks, overtime
- **Consumer** — returns, warranties, debt collectors, billing disputes, scams
- **Medical** — surprise bills, insurance denials, HIPAA, emergency care rights
- **Immigration** — ICE encounters, airport CBP, workplace raids, DACA
- **Education** — student rights, IEP/504 plans, Title IX, campus safety
- **Family** — custody, domestic violence, child welfare, elder abuse

### 📍 State-Specific Intelligence
- All 50 states + DC + territories
- State law variations highlighted (e.g., "one-party consent" vs "two-party consent" for recording)
- Local ordinance awareness for major cities
- Recent law changes flagged with effective dates

### 🎯 Quick Actions
- **"Say This"** — exact phrases/scripts for each situation
- **"Don't Do This"** — common mistakes that waive your rights
- **"Record This"** — one-tap audio/video start with legal recording guidance
- **"Call Help"** — legal aid hotlines, ACLU, local resources
- **"Document It"** — structured incident report with timestamps

### 📋 Incident Journal
- Log encounters with timestamps, location, details
- Attach photos, audio, video
- Generate formatted reports for lawyers, agencies, or courts
- Track patterns (repeated landlord violations, workplace incidents)

### 🧠 AI Chat
- Natural language: "My landlord just changed my locks without warning"
- Contextual follow-ups: "What if I haven't paid rent in 2 months?"
- State-aware responses
- Sources cited (statute numbers, case law)

## Revenue Model

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 5 lookups/day, top 3 situations per category, basic state info |
| Plus | $4.99/mo | Unlimited lookups, all situations, AI chat, incident journal |
| Family | $8.99/mo | Up to 5 members, shared incident journal, emergency contacts |
| Pro | $14.99/mo | Lawyer referral network, document review, priority AI, export reports |

**B2B opportunities:**
- Legal aid organizations (bulk licenses)
- Union locals (worker rights modules)
- Immigrant advocacy groups
- University student services

## Market Analysis

### Market Size
- US legal services market: **$400B+**
- Legal tech market: **$29B** (projected 2027)
- Self-help legal market: **$12B+**
- LegalZoom alone: **$600M+ revenue**

### Competitive Landscape
| Competitor | Weakness |
|-----------|----------|
| ACLU Know Your Rights | Static guides, not interactive, no state specificity |
| LegalZoom | Document prep, not real-time rights guidance |
| Rocket Lawyer | Subscription for lawyer access, not self-service rights |
| DoNotPay | Dispute automation, not know-your-rights |
| Google/ChatGPT | Generic, not verified, wall of text, not situation-designed |
| Legal Equalizer | Police-only, dead app, poor UX |

### Why Now
- **AI makes it feasible** — natural language understanding + state-specific legal databases
- **Rising legal awareness** — social media spreads "know your rights" content virally
- **Cost of living crisis** — more tenant disputes, wage theft, consumer conflicts
- **Immigration enforcement** — increased ICE activity drives need for accessible rights info
- **Gen Z expects self-service** — 73% prefer to resolve issues without calling someone

## Technical Architecture

### Frontend
- React + TypeScript + Tailwind CSS
- PWA for offline access
- Mobile-first, thumb-zone optimized
- Dark mode for discrete use

### Backend
- Node.js/Express API
- PostgreSQL for structured legal data
- Vector DB (Pinecone/Qdrant) for AI search
- Redis for caching popular queries

### Legal Data Pipeline
- State statute databases (bulk legal data providers)
- Automated monitoring for law changes
- Lawyer review queue for accuracy verification
- Version-controlled legal content (git-backed)

### AI Layer
- Fine-tuned model for legal plain-English translation
- RAG pipeline: situation → relevant statutes → plain-English response
- Confidence scoring (high/medium/low certainty)
- Mandatory disclaimers integrated naturally

## Development Roadmap

### Phase 1 (MVP — 6 weeks)
- 5 core categories: Police, Tenant, Worker, Consumer, Medical
- Top 10 states by population
- Situation library (pre-built, no AI chat yet)
- Basic incident journal
- PWA with offline support

### Phase 2 (3 months)
- All 50 states
- AI chat with RAG
- Audio/video recording integration
- Legal aid directory
- Push notifications for law changes

### Phase 3 (6 months)
- Lawyer referral network
- Document generation (demand letters, complaints)
- Community-verified tips
- Spanish language support
- B2B legal aid partnerships

## Legal Considerations

- **NOT legal advice** — clearly positioned as legal information/education
- Every response includes: "This is legal information, not legal advice. Consult an attorney for your specific situation."
- Lawyer-reviewed content with version tracking
- State bar compliance for each jurisdiction
- Insurance: E&O coverage for legal information services

## Why This Wins

1. **Universal need** — everyone encounters legal situations
2. **Emotional trigger** — fear/stress drives immediate adoption
3. **Network effects** — "my friend used RightNow when her landlord..." spreads organically
4. **Content moat** — 50-state legal database is hard to replicate
5. **Timing** — AI makes it possible now; wasn't feasible 2 years ago
6. **Social impact** — democratizes legal knowledge, disproportionately helps marginalized communities

---

*Researched and documented by Duncan ⚔️ — April 2, 2026*
*Source: Web research (ACLU, Legal Aid, California SB 294, Florida Legal Services, state law databases)*
