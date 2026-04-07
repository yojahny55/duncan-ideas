# DropVault — Delivery Evidence Vault

**Tagline:** Your package, your proof. Never lose a delivery dispute again.

## Problem Statement

**$12 billion** — that's how much porch piracy costs Americans annually. 1 in 3 people have had a package stolen. When you file a claim with FedEx, UPS, USPS, or Amazon, they demand proof you didn't receive it. But what proof do you have? A carrier saying "delivered" with a blurry photo? That's not evidence — that's their word against yours.

The problem isn't just theft. It's:
- Packages marked "delivered" that never arrived
- Packages left at the wrong address
- Damaged packages left without notification
- Carriers denying claims because "delivery was confirmed"
- No consumer-side record of what actually happened at your door

Consumers have **zero independent evidence**. Carriers control the narrative. You need your own vault.

## Target Users

- **Online shoppers** (200M+ in the US) who receive regular deliveries
- **Apartment/condo residents** where package theft is highest (40%+ of thefts)
- **Remote workers** expecting important deliveries
- **Small business owners** receiving valuable shipments
- **Anyone who's lost a claim** because they had no proof

## Proposed Solution

**DropVault** is a delivery evidence vault that gives consumers independent, timestamped, geolocated proof of what happened at their doorstep — before, during, and after delivery.

**Core flow:**
1. **Expect a package?** Log it with tracking number and carrier
2. **Get notified?** DropVault auto-captures carrier notification screenshots
3. **Check your door?** Snap a time-stamped, geolocated photo
4. **Something wrong?** Document it instantly (missing, damaged, wrong package)
5. **Need to fight?** Generate a carrier-specific dispute PDF in one tap

**Why it works:** DropVault builds an independent evidence timeline that's stronger than anything a carrier provides. Combined with GPS coordinates, timestamps, and structured incident reports, your claim goes from "he said, she said" to "here's the evidence package."

## Key Features

### 📦 Package Tracker
- Log expected packages with tracking number, carrier, item description, and value
- Auto-detect carrier from tracking number format
- Delivery window estimates
- Status tracking (Ordered → Shipped → Out for Delivery → Delivered)

### 📸 Evidence Capture
- **Porch Check Photos** — Timestamped + geolocated photos of your doorstep
- **Notification Screenshot Capture** — Auto-prompt to screenshot delivery notifications
- **Condition Documentation** — Photo evidence of damaged items with annotation
- **Before/After Delivery** — Capture porch state before and after delivery window

### 🛡️ Dispute Generator
- One-tap dispute package creation
- Carrier-specific templates (Amazon, FedEx, UPS, USPS, DHL)
- Includes all evidence: photos, timestamps, GPS, tracking info
- PDF export for email/mail submission
- Pre-written cover letters customized per carrier's claim process

### 📊 Delivery Analytics
- **Carrier Reliability Score** — Track which carriers deliver correctly to YOUR address
- **Delivery Time Accuracy** — Actual vs. estimated delivery times
- **Theft Pattern Detection** — Time-of-day and day-of-week theft correlations
- **Value at Risk** — Monthly exposure based on expected deliveries

### 🔔 Smart Alerts
- "Delivery window opening" reminder to check porch
- "Package not confirmed received" follow-up if you haven't logged receipt
- Escalation reminders for open disputes (carrier deadlines)
- Claim statute of limitations warnings

### 🏘️ Neighborhood Intelligence (Optional)
- Anonymous, opt-in theft heat map for your area
- "Packages missing on your street?" awareness
- Safe delivery spot recommendations based on community data

## Technical Approach

- **Frontend:** HTML/CSS/JS PWA (installable, works offline)
- **Photo capture:** Camera API with EXIF metadata (timestamp + GPS)
- **Storage:** Local-first with optional cloud sync (IndexedDB)
- **Carrier API:** Tracking number format detection + carrier URL generation
- **PDF generation:** jsPDF for dispute packages
- **Notification parsing:** OCR or manual logging of carrier notifications

## Market Research

### Similar Solutions
| Solution | What it does | Gap |
|----------|-------------|-----|
| Ring/Arlo cameras | Security footage | Not delivery-focused, no dispute generation, requires hardware |
| Amazon photo proof | Carrier-side delivery photo | Controlled by Amazon, blurry, no consumer verification |
| Route app | Package tracking | No evidence capture or dispute tools |
| Parcels app | Multi-carrier tracking | Tracking only, no dispute support |
| Carrier claim portals | File disputes | Burden of proof on consumer, no evidence tools |

### Key Insight
No existing tool combines: **independent evidence capture + carrier tracking + dispute generation**. Cameras provide footage but not structured evidence. Tracking apps provide status but not proof. DropVault bridges the gap.

### Market Size
- **200M+** US online shoppers
- **$12B** annual porch piracy losses
- **1.7M** packages lost/stolen daily in the US
- **Only 30%** of victims file claims (most give up due to evidence burden)
- **Carrier claim approval rates:** 40-60% without evidence, 80%+ with photo proof

## Differentiation

Not a security camera. Not a package tracker. **A consumer-side evidence vault.**

- **vs. Ring/Arlo:** No hardware required. Structured dispute packages, not raw footage.
- **vs. Route/Parcels:** Evidence capture + dispute generation, not just tracking.
- **vs. Carrier tools:** Independent from carriers. Your evidence, your control.
- **vs. Insurance:** Preventive evidence vs. after-the-fact coverage.

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| Free | $0 | 5 packages/month, basic photo capture, 1 dispute/month |
| Shield | $3.99/mo | Unlimited packages, unlimited disputes, analytics, smart alerts |
| Vault | $7.99/mo | Everything + neighborhood intel, priority dispute support, insurance integration |

## Feasibility

- Pure web app, no hardware dependencies
- Camera API widely supported on mobile browsers
- No carrier API integration needed (evidence-based, not API-based)
- PDF generation is client-side
- Could ship MVP in a weekend

## Why Now?

1. **Porch piracy is accelerating** — 2024-2025 saw record package theft
2. **Carriers are shifting burden** — More carriers requiring photo/proof for claims
3. **AI-powered scam delivery notifications** are rising (fake "your package is here" texts)
4. **Working from home** means more high-value deliveries to residences
5. **Tariffs driving more online shopping** as consumers hunt for deals

## Source

Web research — porch piracy trends, carrier dispute processes, Reddit r/personalfinance and r/legaladvice threads about denied delivery claims.

---

*Generated by Duncan ⚔️ — April 6, 2026*
