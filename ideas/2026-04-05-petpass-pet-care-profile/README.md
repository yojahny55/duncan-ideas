# 🐾 PetPass — Shareable Pet Care Profiles

**Date:** 2026-04-05
**Source:** Web (Reddit r/dogs, r/petsitting, r/Pets + web research on pet care handoff frustrations)
**Category:** Pet Tech / Consumer Utility

## Problem Statement

Every time you leave your pet with someone — a sitter, boarder, vet, neighbor, family member, or emergency contact — you repeat the same info: feeding schedule, medications, allergies, vet contact, behavioral quirks, emergency protocols. It lives scattered across text messages, sticky notes, and scattered docs that are always outdated.

**The pain is acute in three scenarios:**
1. **Pet sitters/boarders** — You text them a wall of instructions. They lose it. Your pet misses a meal or medication.
2. **Veterinary emergencies** — Someone else takes your pet to the vet. They don't know the pet's history, allergies, or medications.
3. **Travel/unexpected absence** — You're hospitalized or delayed. Your emergency contact has no idea how to care for your pet.

**Scale of the problem:**
- 67% of US households own a pet (86.9M homes)
- $7.6B US pet services market (boarding, sitting, walking)
- Average pet owner uses a pet sitter 4-6 times/year
- 29% of pet emergencies involve a non-owner caretaker who doesn't know the pet's medical history
- r/dogs and r/petsitting regularly have posts like "what info should I leave my pet sitter?" with 100+ comment threads

## Target Users

1. **Pet owners who travel** — Business travelers, vacationers, anyone who regularly leaves pets with others
2. **Multi-pet households** — 3+ pets with different schedules, medications, dietary needs
3. **Pets with medical conditions** — Diabetic cats, epileptic dogs, senior pets on medications
4. **Co-parenting pets** — Divorced/separated couples sharing pet custody
5. **Pet sitters/dog walkers** — Professional sitters who want organized client info

## Existing Solutions & Gaps

| Solution | Gap |
|----------|-----|
| Text messages / Notes app | Not structured, gets buried, no updates |
| Pet health apps (PetDesk, PetPocket) | Vet-centric, not built for sharing care instructions |
| PawDose (our idea #89) | Medication tracking for OWNERS, not shareable care profiles |
| Google Docs | Not mobile-optimized, no pet-specific structure, manual |
| Rover/Wag profiles | Platform-locked, basic, only for their sitters |

**Nobody owns the "shareable pet care profile" position.** Apps are either vet records OR sitter marketplaces. PetPass is the pet's portable care identity — shareable with anyone via a single link.

## Proposed Solution

**PetPass** — Create a beautiful, comprehensive care profile for each pet. Share it via a single link or QR code. Anyone with the link sees exactly what they need to care for your pet.

### Core Concept
Think of it as a **medical ID bracelet + care manual** for your pet. One URL that contains everything a caretaker needs.

## Key Features

### 🏠 Pet Profile Builder
- Photo + basic info (name, breed, age, weight, microchip #)
- Personality summary (shy with strangers, loves belly rubs, scared of thunder)
- Behavioral notes (pulls on leash, counter surfs, door dasher)

### 🍽️ Care Schedule
- Feeding schedule with portions, brands, and prep instructions
- Medication schedule with photos of each med, dosage, and administration tips
- Exercise needs and preferred activities
- Grooming schedule

### 🏥 Medical Info
- Vet contact info + preferred emergency vet
- Allergies and sensitivities
- Current medications with refill info
- Medical conditions and history
- Insurance info

### 🔗 Smart Sharing
- **Share Link** — Single URL anyone can open (no app download required)
- **QR Code** — Print and attach to collar, crate, or care binder
- **Temporary Access** — Time-limited links for one-time sitters (auto-expires)
- **Permission Levels** — Full access vs. basic care only (hide financial/insurance info)

### 🚨 Emergency Mode
- One-tap emergency card with critical info (allergies, meds, vet #)
- "If found" contact info on QR tag
- Emergency medication instructions highlighted
- Poison control + nearest emergency vet auto-lookup

### 📋 Care Visit Logging
- Sitters can log: fed ✓, walked ✓, meds given ✓
- Photo updates sent to owner
- Owner gets real-time peace of mind without texting "did you feed him?"

## User Flow

1. **Create** → Add pet profile (guided wizard, 5 minutes)
2. **Customize** → Add schedules, medical info, personality notes
3. **Share** → Generate link/QR → Send to sitter, vet, neighbor
4. **Monitor** → Sitter logs care activities → Owner sees in real-time
5. **Update** → Change meds or schedule → Everyone with the link sees updates instantly

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 1 pet, basic profile, 2 share links |
| Plus | $3.99/mo | 3 pets, unlimited sharing, care logging, QR codes |
| Family | $6.99/mo | Unlimited pets, emergency mode, visit history, export |

**Why people pay:** Peace of mind. When your diabetic cat is with a sitter and you're 2,000 miles away, $4/mo is nothing for the confidence that the sitter has *everything* they need.

## Technical Architecture

- **Frontend:** PWA (React + Tailwind), works on any device without app download
- **Backend:** Node.js/Express or Next.js API routes
- **Database:** PostgreSQL (pet profiles, schedules, share links)
- **Storage:** S3/Cloudflare R2 for pet photos
- **Auth:** Magic link + OAuth (Google, Apple)
- **Sharing:** Unique UUID-based URLs, no auth required for viewers
- **QR:** Generated server-side, downloadable as PNG/SVG
- **Real-time:** WebSocket or SSE for care visit logging updates

## Market Validation

- **r/dogs** — "Leaving my dog with my parents, what info should I give them?" (recurring thread, 100+ comments each)
- **r/petsitting** — Professional sitters constantly ask for standardized intake forms
- **r/Pets** — "Emergency vet visit — sitter didn't know about allergies" horror stories
- **Google Trends** — "pet sitter instructions template" steady search volume
- **Rover marketplace** — 500K+ sitters, each needing better pet info from clients
- **Pet insurance growth** — 4.8M insured pets, owners increasingly treat pets like family members with documented care needs

## Competitive Advantages

1. **No app required for viewers** — PWA link works instantly
2. **Built for sharing, not record-keeping** — Everything optimized for the caretaker's perspective
3. **QR collar tag** — Physical-digital bridge for emergencies
4. **Real-time care logging** — Owners get peace of mind without nagging
5. **Always up-to-date** — One source of truth that syncs to everyone

## Revenue Projections

- **Conservative:** 5,000 paying users × $4/mo = $20K MRR
- **Moderate:** 25,000 paying users × $5/mo = $125K MRR
- **Aggressive:** 100,000 paying users × $5/mo = $500K MRR

**TAM:** 86.9M pet-owning households in US alone
**SAM:** ~15M who regularly use pet care services
**SOM:** ~500K who'd pay for organized pet care profiles

## Prototype

See [prototype/](prototype/) for a working HTML/CSS/JS demo.

---

*Researched and documented by Duncan ⚔️ — 2026-04-05*
