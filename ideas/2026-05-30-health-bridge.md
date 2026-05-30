# HealthBridge — Your Health Data, Unlocked

**Date:** 2026-05-30
**Source:** Reddit r/fitbit — mass backlash over Google Health migration, data sync failures, platform lock-in
**Status:** Idea Draft

---

## Problem Statement

Millions of fitness tracker users are trapped in platform silos. When Fitbit forced migration to Google Health (May 2026), users lost features, got incorrect health metrics, and couldn't sync data to Apple Health or other platforms. Users switching from Fitbit to Garmin lose years of historical data. There is no universal, user-owned health data layer.

**Key pain points (from Reddit):**
- Google Health reads from Apple Health but doesn't write to it
- Historical data lost when switching device ecosystems
- Blood pressure, weight, and workout data stuck in vendor silos
- "The app is telling me two different numbers on the same data"
- Users resort to hacks like smartscalesync.com just to move their own data

## Solution

**HealthBridge** — an open-source health data hub that connects to every major fitness platform (Fitbit/Google Health, Garmin, Apple Health, Samsung Health, Withings, Polar, OURA) and creates a unified, user-owned health record.

### Core Features
1. **Universal Sync** — Bidirectional sync across all connected platforms
2. **Data Ownership** — Export your complete health history as standard formats (FHIR, JSON, CSV)
3. **Migration Tool** — One-click transfer when switching devices (e.g., Fitbit → Garmin, keeping all history)
4. **Conflict Resolution** — When two sources disagree on a metric, shows both and lets you pick
5. **Local-First** — Data lives on your device first, cloud sync is optional
6. **Health Timeline** — Unified view of all health events regardless of which device captured them

## Target Users

| Segment | Size | Pain Level |
|---------|------|------------|
| Fitbit→Garmin switchers (current wave) | ~500K active | 🔴 Critical |
| Multi-device users (watch + scale + BP cuff from different brands) | ~5M | 🟠 High |
| Health-conscious 30-55 year olds | ~50M | 🟡 Medium |
| Quantified-self enthusiasts | ~2M | 🟠 High |

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Frontend** | React Native + Expo | Cross-platform iOS/Android from one codebase |
| **Web Dashboard** | Next.js 15 + Tailwind | Data visualization, export, settings |
| **Backend** | Node.js + Fastify | Lightweight, fast API layer |
| **Database** | PostgreSQL + TimescaleDB | Time-series health data at scale |
| **Auth** | OAuth 2.0 per provider | Standard for all health APIs |
| **Sync Engine** | Custom CRDT-based | Conflict-free data merging across sources |
| **Storage** | Encrypted SQLite (local) + S3 (cloud) | Local-first with optional backup |
| **Data Format** | FHIR R4 + custom extensions | Healthcare standard, future-proof |
| **Infra** | AWS (CDK) + CloudFront | Scalable, cost-effective |

### API Integrations (Phase 1)
- Google Health Connect API
- Garmin Health API
- Apple HealthKit
- Withings API
- Polar AccessLink
- OURA API
- Samsung Health SDK

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 1 device connection, basic sync, 30-day history |
| **Pro** | $4.99/mo | Unlimited devices, full history, exports, conflict resolution |
| **Family** | $9.99/mo | Up to 5 profiles, shared dashboard |
| **Lifetime** | $99 one-time | Pro features forever (early adopter deal) |

**Additional revenue:**
- Anonymized health data insights (opt-in, GDPR/CCPA compliant)
- Premium data visualizations and reports
- Healthcare provider API (B2B)

## Competition

| Competitor | Gap |
|------------|-----|
| Apple Health | Apple-only, no cross-platform |
| Google Health | Android-only, broken sync, vendor-locked |
| Validic | B2B only, no consumer app |
| MyFitnessPal | Nutrition only, no device sync |
| smartscalesync.com | Hacky, limited, one-trick |

**Key differentiator:** User owns the data. Open-source core. Works everywhere.

## MVP Scope (6 weeks)

- [ ] Connect 3 providers (Google Health, Garmin, Apple Health)
- [ ] Bidirectional sync for steps, heart rate, sleep, weight
- [ ] Unified timeline view
- [ ] Data export (JSON, CSV)
- [ ] Basic conflict resolution
- [ ] React Native mobile app
- [ ] Simple web dashboard

## Name Ideas

- HealthBridge ✅ (favorite)
- VitaSync
| HealthHaven
- BodyHub
- FitUnify

---

*Inspired by the r/fitbit Google Health migration disaster of May 2026, where thousands of users lost control of their own health data.*
