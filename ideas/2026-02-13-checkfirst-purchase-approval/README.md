# CheckFirst - Household Purchase Coordination

**Date:** 2026-02-13  
**Source:** Reddit (r/relationships, r/personalfinance, r/Marriage pain points)  
**Status:** Prototype Complete

## Problem Statement

One of the most common sources of conflict in relationships and households is unexpected purchases. Partners and family members frequently argue about:

- "Why did you buy this without asking me first?"
- "I thought we agreed to save money this month"
- "You spent $300 on what?!"
- Duplicate purchases ("I already bought one yesterday")
- Budget surprises at month end

**The core issue:** No lightweight way to coordinate purchases in real-time before they happen.

## Target Users

1. **Couples** - Married or cohabiting partners sharing finances
2. **Families** - Parents coordinating with teens who have access to family cards
3. **Roommates** - Shared household purchases coordination
4. **Business Partners** - Small business expense coordination

## Market Research

### Current Solutions & Gaps

| Solution | Gap |
|----------|-----|
| Mint/YNAB | Track spending after the fact, don't prevent conflicts |
| Honeydue | Couples budgeting, but no pre-purchase approval flow |
| Splitwise | Splits expenses, doesn't coordinate before purchase |
| Text/Call partner | Awkward, easy to forget, no record |

### Opportunity

No app specifically designed for the **pre-purchase coordination** workflow. CheckFirst fills this gap with:
- Low-friction approval requests
- Smart thresholds (don't ask for $5 coffee)
- Purchase categories with different limits
- Quick approve/discuss actions

## Proposed Solution: CheckFirst

### Core Concept

A mobile-first app that makes it easy to "check first" before making purchases above your agreed threshold.

### Key Features

#### 1. Smart Thresholds
- Set spending limits by category (groceries: $100, electronics: $50, anything: $200)
- Optional "always ask" categories (e.g., subscriptions)
- Automatic approval for small purchases

#### 2. Quick Request Flow
- Snap a photo of item or share link
- One-tap "Request Approval"
- Price auto-detected when possible
- Add quick context ("need this for project")

#### 3. Partner Response
- Push notification with purchase details
- One-tap Approve / Discuss / Hold
- "Discuss" opens quick chat thread
- Set quiet hours for non-urgent requests

#### 4. Purchase Tracking
- Log of approved/declined purchases
- Monthly spending by category
- "Surprises avoided" metric (gamification)
- Shared shopping list integration

#### 5. Family Mode
- Multiple members with different roles
- Parents approve teen purchases
- Allowance integration
- Spending education for kids

### User Flow

```
1. Open app → See quick "Request" button
2. Add item: photo, link, or manual entry
3. Price & category auto-detected
4. Add optional note
5. Send to partner/family
6. Partner receives push → Reviews → Approves/Discusses
7. Requester gets notification → Proceeds or discusses
```

## Technical Architecture

### Frontend
- React Native (iOS + Android)
- Quick launch widget for fast requests
- Camera integration for item photos
- Share extension (share from any app)

### Backend
- Firebase/Supabase for real-time sync
- Push notifications (FCM/APNS)
- Image storage & OCR for receipts
- Price detection API integration

### Privacy
- End-to-end encryption option
- Data stays between household members
- No selling to advertisers
- Export/delete all data

## Business Model

### Freemium
- **Free:** 2 household members, basic thresholds, 50 requests/month
- **Plus ($4.99/mo):** Unlimited members, smart categories, purchase history, reports
- **Family ($7.99/mo):** Kid accounts, allowance management, spending education

### Growth
- Word of mouth (couples share with other couples)
- Financial wellness blogs & podcasts
- Marriage counselor partnerships
- Personal finance influencers

## Competitive Advantages

1. **Single Purpose** - Does one thing extremely well
2. **Low Friction** - Request in < 10 seconds
3. **Relationship-First** - Designed to reduce conflict, not create guilt
4. **Privacy-Focused** - Your spending data isn't sold

## Prototype

See `prototype/` folder for interactive HTML/CSS/JS demo.

### Screens Included
1. Home - Quick request button + recent activity
2. New Request - Add purchase for approval
3. Pending Approval - Partner's view
4. Settings - Thresholds and categories

## Success Metrics

- **Adoption:** 10K households in 6 months
- **Retention:** 70% weekly active (at least 1 request/response)
- **NPS:** Track "did this reduce money arguments?"
- **Conversion:** 5% free → paid

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Feel like "asking permission" | Frame as coordination, not control |
| Notification fatigue | Smart thresholds, quiet hours, batching |
| One partner doesn't engage | "Solo mode" still tracks your own spending |
| Privacy concerns | E2E encryption, transparent data policy |

## Future Ideas

- Bank/card integration (auto-detect large purchases)
- AI suggestions ("you usually buy this monthly")
- Shared wishlist/savings goals
- Anniversary/birthday gift exceptions

---

*"Check first, spend smart, argue less."*
