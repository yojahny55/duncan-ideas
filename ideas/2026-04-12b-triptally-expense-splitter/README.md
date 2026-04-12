# TripTally — Group Expense Splitter That Doesn't Make Enemies

## Problem Statement

Splitting expenses in groups is universally hated. After every trip, dinner, or shared activity, someone has to:

- Track who paid what
- Remember who owes whom
- Chase people for money
- Deal with awkward conversations about "that one drink you didn't have"

**Existing solutions suck:**
- **Splitwise** is bloated, slow, and cluttered with features nobody uses
- **Google Sheets** require manual entry and math
- **Venmo requests** lose context -- "what was this $47 for?"
- **Group texts** about money are the fastest way to ruin friendships

**The result:** People either overpay to avoid the awkwardness or let debts fester until resentment builds. 60% of people say money issues have damaged a friendship.

## Target Users

- **Travel groups** -- friends on vacations, bachelor/bachelorette parties
- **Couples** sharing household expenses
- **Roommates** splitting rent, groceries, utilities
- **Event organizers** -- birthdays, BBQs, group dinners
- **Coworkers** -- team lunches, shared office supplies

## Proposed Solution

**TripTally** is a lightweight, instant group expense splitter. No accounts required. Snap a receipt, tag who's splitting, done.

### Core Features

1. **Receipt OCR** -- Snap a photo, auto-extract items, amounts, tax, tip
2. **Smart Splitting** -- Split evenly, by item, by percentage, or custom amounts
3. **Debt Minimization** -- Calculate the fewest transactions to settle all debts
4. **Multi-Currency** -- Traveling abroad? Auto-convert with live exchange rates
5. **Offline Mode** -- Bad WiFi at the beach? Works offline, syncs later
6. **One-Tap Settle** -- Deep links to Venmo, Zelle, CashApp with amount pre-filled
7. **Activity Timeline** -- Visual history of all expenses with receipt photos

### How It Works

1. **Create a group** -- share a link or QR code, no sign-up needed
2. **Add expenses** -- snap receipts or enter manually
3. **Tag who's involved** -- everyone, specific people, or custom splits
4. **See balances in real-time** -- who owes whom, always up to date
5. **Settle up** -- one tap to pay via Venmo/Zelle, or mark as cash

### The "Aha" Moment

You're at dinner with 6 friends. One person pays the bill. You open TripTally, snap the receipt, and it:
- Reads all items automatically
- Knows who was at dinner (GPS/group context)
- Splits tax and tip proportionally
- Sends everyone a push notification with their share
- Generates a Venmo link with the exact amount

**10 seconds. No math. No awkwardness.**

## Technical Design

### Architecture

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  PWA Client  │────▶│  API Server  │────▶│  Database   │
│  (Next.js)   │     │  (Node.js)   │     │ (PostgreSQL)│
└──────┬───────┘     └──────┬───────┘     └─────────────┘
       │                    │
  IndexedDB          OCR Service
  (offline)         (Tesseract.js)
```

### Stack

- **Frontend:** Next.js 14 PWA, Tailwind CSS, shadcn/ui
- **OCR:** Tesseract.js (client-side, free) with fallback to Google Vision API
- **Backend:** Node.js + Express or Next.js API routes
- **Database:** PostgreSQL with pgvector for receipt matching
- **Offline:** IndexedDB + Service Worker for full offline support
- **Auth:** Optional -- magic link for persistent groups, anonymous for one-offs
- **Payments:** Venmo deep links, Zelle API, CashApp $cashtag links
- **Currency:** ExchangeRate API for live multi-currency conversion
- **Deployment:** Vercel (frontend) + Railway (backend)

### Key Algorithms

**Debt Minimization (Simplification):**
Instead of A owes B $10, B owes C $10, C owes A $10 (3 transactions), simplify to 0 transactions (they cancel out). Uses graph-based debt simplification.

**Receipt Parsing:**
- OCR extracts raw text from receipt photo
- LLM or regex-based parser identifies items, quantities, prices, tax, tip
- Confidence scoring -- if < 80%, prompt user to verify

## Monetization

- **Free tier:** Up to 3 active groups, 30-day history, basic splitting
- **Pro ($2.99/mo):** Unlimited groups, unlimited history, multi-currency, receipt storage, export to CSV/PDF
- **One-time trip pass ($1.99):** Single group with all pro features for 30 days (perfect for vacations)

## Market Analysis

### Competitors

| Feature | TripTally | Splitwise | Settle Up | Tab |
|---------|-----------|-----------|-----------|-----|
| No sign-up | Yes | No | No | No |
| Receipt OCR | Yes | No | No | No |
| Offline mode | Yes | Partial | No | No |
| Debt simplification | Yes | Yes | Yes | Yes |
| Multi-currency | Yes | Paid only | Yes | No |
| PWA (no install) | Yes | No | No | No |
| One-tap pay | Yes | Partial | No | No |

### Market Size

- Splitwise has 50M+ registered users
- Group payment apps are a $2B+ market
- 73% of millennials prefer digital splitting over cash
- Travel market recovery driving demand (solo travel down, group travel up)

## Differentiation

1. **Zero friction** -- no account needed, just open and snap
2. **Receipt OCR built-in** -- no manual entry
3. **Offline-first** -- works anywhere
4. **Beautiful and fast** -- PWA that feels native, loads in < 2 seconds
5. **Debt minimization** -- always shows the simplest settlement path

## MVP Scope (Weekend Build)

### Must Have
- [ ] Create group (share link)
- [ ] Add expense manually
- [ ] Split evenly or by custom amounts
- [ ] View balances
- [ ] Debt minimization algorithm
- [ ] Basic PWA (installable, offline)

### Nice to Have
- [ ] Receipt OCR
- [ ] Venmo/Zelle deep links
- [ ] Multi-currency
- [ ] Push notifications
- [ ] Expense categories

## Future Ideas

- **Recurring splits** -- rent, utilities, subscriptions (monthly auto-split)
- **AI categorization** -- automatically tag restaurants, gas, groceries
- **Social feed** -- see friends' recent trips and expenses
- **Budget tracking** -- set trip budgets, get alerts when approaching limit
- **Business mode** -- project expense tracking with approval flows

---

*Generated by Duncan -- April 12, 2026*
