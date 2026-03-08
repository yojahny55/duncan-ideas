# CardStash - Gift Card Wallet & Reminder App

**Date:** 2026-03-08  
**Source:** Reddit (r/personalfinance, r/Frugal patterns)  
**Status:** Prototype Complete ✅

## Problem Statement

Americans lose **$3+ billion** in unused gift cards annually. The pain is real:

- **Forgotten cards** — Physical cards get lost in drawers; digital cards get buried in email
- **Balance mystery** — "How much is left on this?" requires hunting down receipts or calling customer service
- **Silent expiration** — Cards expire or rack up inactivity fees without warning
- **Fragmented value** — People don't realize they have $200+ in "free money" scattered across 15 gift cards
- **Missed opportunities** — Walking past a store where you have a $50 gift card, not knowing

The average American household has **$116 in unused gift cards** at any given time. That's real money sitting idle.

## Target Users

1. **Gift recipients** — Anyone who receives gift cards (most people)
2. **Frugal savers** — People who buy discounted gift cards (Raise, CardPool)
3. **Reward earners** — Credit card point redeemers, survey takers, rebate users
4. **Parents** — Managing kids' birthday gift cards
5. **Procrastinators** — The "I'll use it later" crowd

## Proposed Solution

**CardStash** — A unified gift card wallet that ensures you never lose value again.

### Core Features

1. **Quick Add**
   - Scan barcode/QR from physical card
   - Forward email confirmations for auto-import
   - Manual entry with retailer autocomplete

2. **Balance Tracking**
   - Manual balance updates after each use
   - Integration with major retailers for automatic balance checks
   - "Verify balance" one-tap links to retailer sites

3. **Smart Alerts**
   - Expiration warnings (30/7/1 day)
   - Inactivity fee alerts
   - "Use it or lose it" nudges for dormant cards

4. **Location-Based Reminders**
   - Notify when near a store you have a gift card for
   - Mall mode: "You have 3 cards usable here"
   - Privacy-first: optional, all processing on-device

5. **Value Dashboard**
   - Total "free money" available
   - Cards by category (Restaurants, Retail, Entertainment)
   - Recently added vs. aging cards
   - Value used this month/year

6. **Smart Spending**
   - Suggest combining cards for purchases
   - "This purchase could be covered by..." recommendations
   - Track partial redemptions

## Key Differentiators

| Feature | CardStash | Stocard | Key Ring |
|---------|-----------|---------|----------|
| Gift card focus | ✅ Primary | ❌ Loyalty focus | ❌ Loyalty focus |
| Expiration alerts | ✅ Smart | ❌ None | ❌ None |
| Balance tracking | ✅ Built-in | ❌ Manual only | ❌ Manual only |
| Location reminders | ✅ For gift cards | ✅ For loyalty | ✅ For loyalty |
| Inactivity fee warnings | ✅ Yes | ❌ No | ❌ No |
| Value dashboard | ✅ Financial focus | ❌ No | ❌ No |

## Market Research

### The Problem is Real
- **$3B+** in gift cards go unused annually (CEB research)
- **6%** of gift cards are never redeemed
- **Average household** has $116 in unused gift cards
- **47%** of Americans have at least one unused gift card

### Existing Solutions Fall Short
- **Stocard/Key Ring** — Loyalty card focus, not gift cards
- **Gyft** — Gift card purchasing, not management
- **Apple Wallet** — Limited retailer support, no expiration tracking
- **Google Wallet** — Same limitations
- **Spreadsheets** — Manual, no alerts, no location features

### Why Now
- Post-pandemic gift card surge (convenience gifting)
- Inflation making "free money" more valuable
- Better barcode scanning tech on phones
- Location services now privacy-respectful

## Business Model

### Freemium
- **Free tier:** Up to 10 cards, basic tracking
- **Pro ($2.99/mo or $24.99/yr):**
  - Unlimited cards
  - Location reminders
  - Auto-balance check integrations
  - Family sharing (5 members)
  - Export/backup

### Alternative Revenue
- Affiliate fees from "Sell unused card" partnerships (CardCash, Raise)
- Premium placement for retailers in "nearby" suggestions

## Technical Considerations

### Stack Options
- **Mobile-first:** React Native or Flutter for iOS/Android
- **Web companion:** Next.js PWA for email imports and dashboard
- **Backend:** Supabase or Firebase for sync + auth

### Key Technical Features
- Barcode/QR scanning via device camera
- Email parsing for digital card imports
- Geofencing for location reminders (background, battery-efficient)
- Retailer database with expiration policies

### Privacy
- Optional location features (off by default)
- Card numbers stored encrypted
- No selling user data
- Local-first where possible

## Success Metrics

1. **Activation:** % of users adding 3+ cards in first week
2. **Engagement:** Cards used per month
3. **Value saved:** Total value redeemed (vs. expired)
4. **Conversion:** Free → Pro upgrade rate
5. **Retention:** 30-day and 90-day retention

## MVP Scope

### Phase 1 (4 weeks)
- [ ] Add cards manually (retailer + balance + expiration)
- [ ] Barcode scanning
- [ ] Expiration alerts (push notifications)
- [ ] Simple dashboard (total value, list view)

### Phase 2 (4 weeks)
- [ ] Email forwarding for auto-import
- [ ] Location-based reminders
- [ ] Balance update prompts after store visits
- [ ] Categories and search

### Phase 3 (4 weeks)
- [ ] Auto-balance check integrations
- [ ] Family sharing
- [ ] "Sell card" partnerships
- [ ] Analytics (value saved, usage patterns)

## Prototype

A functional web prototype demonstrating the core concept:

→ [View Prototype](prototype/index.html)

---

*"Your gift cards are worth money. CardStash makes sure you actually use them."*
