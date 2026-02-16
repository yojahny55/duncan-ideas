# ReturnMe - Return Deadline Tracker

> Never miss a return window again. Track your purchases, get alerts before deadlines expire.

## Problem Statement

**The pain is real:** Every year, consumers lose billions to missed return windows. Reddit is filled with posts like:
- "I forgot to return this $200 item and now I'm stuck with it"
- "How can I get around the 30 day return window?" (spoiler: you usually can't)
- "Amazon has been incredibly frustrating with returns lately"

**Why it happens:**
1. Different stores have different return policies (14, 30, 60, 90 days)
2. Holiday extended returns have different end dates
3. Life gets busy — that "I'll return it tomorrow" becomes "it's been 3 months"
4. No centralized way to track what needs to go back and when

## Target Users

- **Online shoppers** who frequently buy-to-try (especially clothing)
- **Holiday gift recipients** who need to track extended return windows
- **Busy professionals** who forget about items sitting in boxes
- **Anyone** who's ever lost money to an expired return window

## Proposed Solution

**ReturnMe** - A dead-simple return tracking app that:
1. Logs purchases you might return
2. Calculates the exact deadline based on store policy
3. Sends escalating reminders as the deadline approaches
4. Tracks refund status after you return

## Key Features

### Core MVP
- **Quick Add**: Snap a receipt, enter store + date, auto-calculate deadline
- **Smart Alerts**: Escalating notifications (7 days, 3 days, 1 day, LAST CHANCE)
- **Policy Database**: Pre-loaded return policies for major retailers
- **Dashboard**: See all pending returns sorted by urgency

### Future Enhancements
- **Email Integration**: Auto-detect Amazon/online order confirmations
- **Return Status Tracking**: Log when you returned, track refund arrival
- **Label Storage**: Save return shipping labels
- **Resale Suggestions**: If you miss the window, suggest eBay/Mercari pricing

## Market Research

### Existing Solutions
| App | What It Does | Why It Falls Short |
|-----|--------------|-------------------|
| **Slice** | Tracks packages | Doesn't track returns or deadlines |
| **Shop App** | Shopify order tracking | No return window alerts |
| **Receipt scanners** | Digitize receipts | No deadline intelligence |
| **Calendar reminders** | Manual reminders | Have to calculate yourself |

### Differentiation
- **Single-purpose focus**: Not a package tracker or receipt organizer
- **Policy intelligence**: Knows Amazon is 30 days, Costco is 90, etc.
- **Urgency-based UX**: Clear visual hierarchy based on "days remaining"
- **Action-oriented**: "Return this NOW" not "here's a list of receipts"

## Revenue Model

### Freemium
- **Free**: Track 5 active returns, basic alerts
- **Pro ($2.99/mo)**: Unlimited returns, email integration, label storage

### Alternative: One-time purchase
- $4.99 lifetime, no subscription

## Technical Notes

### Stack Suggestion
- **Mobile**: React Native or Flutter
- **Backend**: Serverless (Firebase/Supabase) — lightweight CRUD
- **Notifications**: Firebase Cloud Messaging / APNs
- **OCR**: Google Vision API for receipt scanning (future)

### Data Model
```javascript
{
  id: "uuid",
  storeName: "Amazon",
  itemDescription: "Bluetooth headphones",
  purchaseDate: "2026-02-01",
  returnDeadline: "2026-03-03",  // calculated
  returnPolicyDays: 30,
  status: "pending" | "returned" | "refunded" | "expired",
  refundAmount: 49.99,
  notes: "Didn't fit well"
}
```

## Validation Questions

1. Would you pay $3/month to never miss a return deadline?
2. How many items per month do you consider returning?
3. How much money have you lost to expired return windows in the past year?

## Source

**Reddit Research** (February 2026):
- r/amazon, r/amazonprime — Frequent posts about return window frustration
- r/FrugalFemaleFashion — Discussions about retailer return tracking
- Multiple posts asking "how do I return past the window?" (you usually can't)

## Prototype

See `/prototype/index.html` for interactive demo.

---

*Documented by Duncan ⚔️ | February 16, 2026*
