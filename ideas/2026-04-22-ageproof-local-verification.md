# AgeProof — Local-First Age Verification

## Problem Statement

**"I shouldn't have to upload my ID to every website just to prove I'm over 18."**

In 2026, adults are asked to verify their age hundreds of times across streaming services, gaming platforms, adult content, e-commerce (alcohol/tobacco), and more. Each request requires:
- Uploading government ID to a third party
- Storing personal data in centralized databases
- Risk of data breaches and identity theft
- Repeated friction across multiple platforms

The EU's recent age verification app controversy (flagged as unfit by GitHub, bypassed in 2 minutes) exposed a fundamental truth: **centralized age verification doesn't work and destroys privacy.**

**Reddit insights (r/technology, Apr 2026):**
> "90% of this is letting adults prove their age once to a local app without providing ID to half the internet"
> "Adults shouldn't need to provide their ID to each website they use"

## Solution

**AgeProof** — A local-first age verification app that:
1. Verifies your age **once** using government ID (scanned locally, never leaves your device)
2. Generates cryptographic age attestations (over 18, over 21, etc.)
3. Lets you share these attestations with any website via QR code or browser extension
4. Stores **zero** personal data on any server
5. Works completely offline after initial verification

**How it works:**
- User opens app, scans ID (front/back)
- App validates ID locally (ML models, no API calls)
- User takes a selfie (liveness detection, local comparison)
- App generates age bracket (e.g., "18-25", "26-35", "36+")
- App creates cryptographic attestation signed with device keys
- When visiting a site, user taps "Share AgeProof" → site receives attestation + zero PII

**Privacy guarantees:**
- ID images deleted immediately after verification
- Only age bracket stored (not birthdate)
- No account, no login, no phone number
- All data stays on device
- Open source auditable codebase

## Target Users

**Primary:**
- Adults 18+ who value privacy (tech-savvy, crypto-native)
- Parents managing age-gated content for family

**Secondary:**
- Website owners who need age verification without liability
- Jurisdictions requiring age verification (EU, US states, etc.)

**Market size:**
- 4.9B internet users globally
- Age-gated content estimated at $97B market (gaming, streaming, adult content)
- Growing regulatory pressure (UK Age Verification, EU DSA, US state laws)

## Tech Stack

### Core App
**Mobile (iOS/Android):**
- **Framework:** React Native / Expo
- **ID Scanning:** ML Kit Vision (Google) + Core ML (Apple)
- **Liveness Detection:** FaceTec SDK or open-source alternatives
- **Cryptography:** Web Crypto API + Ed25519 signatures
- **Storage:** SQLite (encrypted via SQLCipher)

**Web (for website integration):**
- **Browser Extension:** Chrome/Firefox/Safari (Manifest V3)
- **Verification API:** Minimal endpoints to validate attestations (no PII)
- **SDK:** JavaScript library for easy website integration

**Backend:**
- **Framework:** Node.js + Fastify
- **Database:** PostgreSQL (only stores attestation public keys, zero PII)
- **Hosting:** Cloudflare Workers (edge validation, low latency)
- **Rate Limiting:** Built-in to prevent abuse

### Security
- **Key Management:** Hardware-backed key storage (Secure Enclave / Keystore)
- **Attestation Format:** Verifiable Credentials (W3C standard)
- **Audit:** Open source code + regular security audits

## Monetization

**Core Principle:** Free for users. Paid for website operators.

### Revenue Streams

1. **Website API Tiered Pricing:**
   - **Starter:** 1,000 verifications/month → $29/mo
   - **Growth:** 10,000 verifications/month → $199/mo
   - **Enterprise:** Unlimited + priority support → $999/mo
   - **Custom:** Enterprise SLAs + dedicated support

2. **White-Label Solution:**
   - Companies rebrand AgeProof for their ecosystem
   - Revenue share on attestation volume
   - Target: Streaming platforms, gaming studios

3. **Compliance Add-ons:**
   - Detailed compliance reports (GDPR, CCPA)
   - Audit logs for regulated industries
   - Multi-jurisdiction age bracket configurations

**Projected Unit Economics:**
- CAC (website operators): $150
- LTV (average): $2,400/year
- Payback period: 3 months
- Gross margin: 85% (hosting costs are minimal)

## Competitive Landscape

**Direct Competitors:**
- **Yoti:** Centralized, requires phone number
- **Veratad:** Enterprise-focused, expensive
- **ID.me:** Government partnerships, privacy concerns

**Differentiators:**
- Only local-first solution
- Zero PII on any server
- Completely free for users
- Open source and auditable
- Simplest UX (one-time verification)

## MVP Features

### Phase 1 (0-3 months)
- iOS app with ID scanning
- Age bracket generation
- QR code sharing
- Demo website integration

### Phase 2 (3-6 months)
- Android app
- Browser extension
- API for website operators
- Self-serve developer dashboard

### Phase 3 (6-12 months)
- Multi-jurisdiction support (US states, EU)
- Compliance reporting
- Enterprise tier
- SDK for easy integration

## Risks & Mitigations

**Risk 1: Regulatory acceptance**
- Mitigation: Engage with regulators early, position as privacy-preserving alternative
- Partner with privacy organizations (EFF, Privacy International)

**Risk 2: ID forgery**
- Mitigation: Multi-layered validation (ML + liveness + manual review for edge cases)
- Partner with established ID verification companies as fallback

**Risk 3: User adoption**
- Mitigation: Build for the privacy community first (tech-savvy early adopters)
- Incentivize adoption via website discounts for AgeProof users

**Risk 4: Platform rejection**
- Mitigation: Self-host as PWA fallback
- Maintain open source version for direct installation

## Success Metrics

**User Growth:**
- 100K active users by month 6
- 1M active users by month 12

**Website Adoption:**
- 50 websites integrated by month 6
- 500 websites integrated by month 12

**Revenue:**
- $10K MRR by month 6
- $100K MRR by month 12

**Privacy Metrics:**
- Zero data breaches
- Zero PII stored on servers
- Independent audit passed

---

*Idea generated from Reddit trends (r/technology, r/privacy) — Age verification frustration + subscription fatigue*
*Date: 2026-04-22*
