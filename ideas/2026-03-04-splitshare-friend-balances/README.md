# SplitShare 💸

**Track what friends owe you (and what you owe them) — without the awkwardness.**

## Problem Statement

Informal debts between friends are messy:
- "I'll Venmo you later" turns into "did I ever pay you back?"
- Splitting dinner, concert tickets, group gifts — nobody remembers who owes what
- Asking for money feels awkward; forgetting to pay back feels worse
- Spreadsheets are overkill; mental math fails
- Existing apps (Splitwise) are bloated with group features most people don't need

**Reddit signal:** "I need something simpler than Splitwise" appears constantly. People want lightweight IOU tracking without creating "groups" for every transaction.

## Target Users

1. **Friend groups** who split costs frequently (dinners, trips, shared expenses)
2. **Roommates** with informal arrangements (beyond rent — groceries, supplies, takeout)
3. **Anyone** who lends money casually and forgets who owes what
4. **People avoiding awkward money conversations**

## Proposed Solution

**SplitShare** — A dead-simple balance tracker for informal friend debts.

### Core Concept
- Add friends (no account required for them)
- Log expenses with one tap: "Alex owes me $24 for dinner"
- Running balance per friend: net positive = they owe you, negative = you owe them
- Gentle nudge system: reminds YOU to settle up, not aggressive "pay now" notifications
- "Settle up" marks debts as paid without actual money transfer

### Key Differentiators from Splitwise
1. **No groups required** — Just you and individual friends
2. **No signup friction** — Friends don't need accounts
3. **Balance-first view** — See who owes what at a glance
4. **Nudge, don't nag** — Reminds you to handle it, doesn't guilt-trip friends
5. **History clarity** — See exactly why the balance is what it is

## Key Features

### MVP (Phase 1)
- **Quick Add** — "Sam owes me $X for Y" in 3 taps
- **Friend Balances** — Dashboard showing net balance per friend
- **Expense History** — Chronological log with notes
- **Settle Up** — Mark a friend as squared without money transfer
- **Simple Split** — Divide a bill N ways automatically

### Phase 2
- **Smart Reminders** — Remind yourself to settle after X days
- **Venmo/Zelle Deep Links** — One tap to request/send (no integration needed)
- **Receipt Scan** — OCR to auto-populate amounts
- **Balance Summary** — "You're owed $340 total. You owe $85."
- **Categories** — Food, travel, entertainment, etc.

### Phase 3
- **Optional Groups** — For trips or recurring splits
- **Recurring Expenses** — Monthly subscriptions split between friends
- **Export** — PDF/CSV for those who need records
- **Multi-currency** — For international friend groups

## User Experience Flow

```
┌─────────────────────────────────────────┐
│           SplitShare                    │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    │
│                                         │
│   You're owed          You owe          │
│   ┌──────────┐        ┌──────────┐     │
│   │  $342    │        │   $45    │     │
│   └──────────┘        └──────────┘     │
│                                         │
│   ─────────────────────────────────     │
│                                         │
│   👤 Alex Chen            +$127.50 →    │
│   ────────────────────────────────      │
│   Last: Dinner at Nobu (Feb 28)         │
│                                         │
│   👤 Jordan R.             +$89.00 →    │
│   ────────────────────────────────      │
│   Last: Concert tickets (Feb 15)        │
│                                         │
│   👤 Sam M.                -$45.00 →    │
│   ────────────────────────────────      │
│   Last: Groceries (Mar 1)               │
│                                         │
│   ─────────────────────────────────     │
│                                         │
│          [ + Add Expense ]              │
│                                         │
└─────────────────────────────────────────┘
```

## Technical Considerations

### Stack Recommendation
- **Mobile-first PWA** — Works on any device, no app store needed
- **Local-first with sync** — Data stored locally, optional cloud backup
- **No backend required for MVP** — LocalStorage + export/import
- **Optional: Supabase** — For multi-device sync if users want it

### Privacy
- No friend data shared unless explicitly invited
- Friends don't need accounts — they're just names in your personal ledger
- Export/import for data ownership

## Market Research

### Existing Solutions & Gaps

| Solution | Issue |
|----------|-------|
| Splitwise | Bloated, requires groups, pushy notifications, premium for "full history" |
| Venmo | Great for payments, no running balance tracking |
| Spreadsheets | Manual, ugly, easy to forget |
| Mental Math | Unreliable, causes awkwardness |

### Market Size
- 67% of adults have lent money to friends/family in past year
- Average American has $1,200 in informal debts outstanding
- Splitwise has 50M+ users but constant complaints about complexity

## Revenue Model

1. **Free tier** — 10 friends, unlimited expenses, local storage
2. **Pro ($2.99/mo)** — Unlimited friends, cloud sync, receipt scanning
3. **Lifetime ($29.99)** — One-time purchase, all features

## Success Metrics

- Weekly active users
- Expenses logged per user
- "Settle up" completion rate
- Retention at 30/60/90 days

## Why This Will Work

1. **Pain is real** — Money between friends causes tension
2. **Existing solutions over-engineered** — People want simple
3. **Network effect light** — Works solo, better with friends
4. **Low-friction onboarding** — No friend invites required
5. **Clear monetization** — Freemium with obvious upgrade path

---

## Prototype

See `prototype/index.html` for a working demo.

**Features demonstrated:**
- Add friend flow
- Quick expense logging
- Balance dashboard
- Settle up action
- Expense history per friend

---

*Researched and documented by Duncan ⚔️ — March 4, 2026*
*Source: Reddit (r/AppIdeas, r/personalfinance, r/relationships)*
