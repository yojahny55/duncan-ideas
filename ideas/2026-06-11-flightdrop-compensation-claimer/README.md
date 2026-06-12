# FlightDrop ✈️💰 — Flight Compensation Claim Automator

> "TurboTax for flight delay compensation" — enter your flight, get your money.

## Problem

Every year, **8M+ passengers** are eligible for flight delay/cancellation compensation. **Less than 2% claim it.**

Why?
- **People don't know their rights.** EU261 pays up to €600 ($650) per passenger for delays over 3 hours. US DOT mandates refunds for cancellations. Most passengers have no idea.
- **The process is intimidating.** Airlines make claiming deliberately difficult — buried forms, confusing language, automated rejections.
- **Claim services take 25-30%** of your money (AirHelp, ClaimCompass, SkyRefund). A $400 compensation becomes $280 in your pocket.
- **No DIY tool exists.** There's no "fill in 5 fields, get a professional claim letter" solution. It's either give away 30% or navigate the process blind.

The average eligible compensation is **$200-600 per flight**. That's **$1.6B-$4.8B** left on the table annually by passengers who just give up.

## Solution

**FlightDrop** is the DIY flight compensation claim automator:

1. **Enter your flight** — flight number + date (or forward your confirmation email)
2. **Instant eligibility check** — AI checks delay data against EU261, US DOT, Montreal Convention, Turkish SHY-PAS, UK261 rules
3. **Claim strength score** — 0-100% likelihood of success based on delay reason, weather exemptions, airline response history
4. **Professional claim letter** — auto-generated, regulation-cited, legally precise. In the airline's language.
5. **Submit & track** — one-click submission via airline portal or email, with status tracking and deadline monitoring
6. **Escalation engine** — if the airline rejects, FlightDrop generates the appeal + regulatory complaint to the national authority
7. **Past flight scanner** — connect Gmail/Outlook, find all flights from the past 2-3 years that were delayed, batch-check eligibility

## Key Features

### 🔍 Eligibility Engine
- Real-time flight status data (FlightAware API)
- Regulation-aware: EU261, UK261, US DOT, Montreal Convention, Turkish SHY-PAS
- Exception detection: weather, ATC strikes, extraordinary circumstances
- Connecting flight rules (missed connections count!)
- Compensation calculator: distance-based tiers (€250/€400/€600)

### 📝 Claim Letter Generator
- Regulation-cited, professional claim letters
- Auto-translated to airline's registered language
- Tailored to specific airline's known response patterns
- Includes all required legal references and deadlines

### 📊 Dashboard
- Active claims tracker with status (submitted → acknowledged → response → paid)
- Deadline monitor (airlines have 30-60 days to respond, you have 2-6 years to claim)
- Total compensation recovered counter
- Per-airline success rate from community data

### 🚀 Escalation Toolkit
- Appeal letter generator for rejections
- Regulatory body complaint auto-filing (NEBs in EU, DOT in US)
- Small claims court guide with pre-filled forms
- "Name & shame" social media template as last resort

### 📧 Email Scanner (Pro)
- Connect Gmail/Outlook/Others
- Auto-detects flight confirmations from past 2-3 years
- Cross-references with delay databases
- "You had 3 eligible flights worth $1,200 total"

### 👨‍👩‍👧‍👦 Group Claims
- One claim for your whole booking (family, friends)
- Per-passenger compensation tracking
- Split settlement calculator

## Target Users

- **Frequent flyers** (10M+ US passengers to/from EU annually)
- **Vacationers** who experienced delays but didn't know they could claim
- **Business travelers** whose companies don't claim on their behalf
- **Digital nomads** (35M+ globally, constantly flying)

## Market Size

- **8M+ eligible passengers/year** (EU261 alone)
- **Average compensation: €250-600** per claim
- **$1.6B-$4.8B in unclaimed compensation annually** (EU only)
- **US domestic: $500M+ in refund-eligible cancellations** yearly
- **Global air passengers: 4.7B** (IATA 2026 forecast)
- **Claim services market: $2B+** (but taking 25-30% commission)

## Competition

| Competitor | Model | Take Rate | Problem |
|---|---|---|---|
| AirHelp | Full service | 25-30% | You lose $100-180 per claim |
| ClaimCompass | Full service | 25-35% | Same, plus slow (3-6 months) |
| SkyRefund | Full service | 25% | Only EU261 |
| Refund.me | Full service | 15-25% + €25 | Hidden fees |
| **FlightDrop** | **DIY tool** | **$0 or flat fee** | **You keep 100% of compensation** |

Nobody owns the DIY "TurboTax" position for flight claims. Every existing player is a service that takes a percentage. FlightDrop empowers passengers to claim themselves with professional-quality documents.

## Pricing

| Tier | Price | Features |
|---|---|---|
| **Free** | $0 | 1 claim/month, eligibility check, basic claim letter |
| **Explorer** | $3.99/mo | 5 claims/month, email scanner, escalation toolkit, multi-regulation |
| **Jetsetter** | $7.99/mo | Unlimited claims, group claims, priority support, past flight scanner (3 years) |
| **Per-claim** | $4.99 one-time | Single claim with full features, no subscription |

**Revenue model:** Freemium subscription + per-claim one-time purchases. No percentage taken from compensation.

## Why Now (June 2026)

1. **EU expanding passenger rights** — new rules for connecting flights and tarmac delays effective 2026
2. **Air travel chaos continues** — staffing shortages, ATC issues, climate disruptions = more delays
3. **Awareness growing** — TikTok/Instagram content about EU261 going viral ("I got $600 for a 4-hour delay!")
4. **AI makes DIY viable** — generating regulation-cited claim letters required lawyers before; now AI does it in seconds
5. **AirHelp-style services face backlash** — Trustpilot full of complaints about slow payouts and high fees

## Technical Feasibility

- **Flight data:** FlightAware / AviationStack / OpenSky API (real-time + historical)
- **Regulation engine:** Rule-based system covering EU261, UK261, US DOT, Montreal Convention
- **Claim generation:** AI-powered legal letter templates with regulation citations
- **Email parsing:** IMAP integration + NLP for flight confirmation extraction
- **Airline portal:** Database of claim submission URLs for 300+ airlines
- **Stack:** React Native or Flutter (mobile-first), Node.js backend, PostgreSQL

## MVP Scope

1. Flight number + date → eligibility check
2. Compensation amount calculator
3. Professional claim letter PDF generator
4. Airline submission directory with direct links
5. Basic claim status tracker

**Build time:** 4-6 weeks for MVP

## Name Ideas

- **FlightDrop** ✈️💰 (drops money in your pocket)
- **ClaimSky**
- **DelayPay**
- **FairFlight**
- **SkyClaim**

---

*The average passenger leaves $200-600 on the table after every eligible delay. FlightDrop puts it back in their pocket — without taking a 30% cut.*
