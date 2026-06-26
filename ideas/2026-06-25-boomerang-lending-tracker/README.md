# Boomerang 🪃 — The "Who Has My Stuff?" App

> **Track everything you lend to friends — and everything you've borrowed — in one place.**

---

## The Problem

We all lend things. And we all forget.

*"Who has my pressure cooker?" "Did I return that ladder to Jamie?" "I lent Marcus $40 for concert tickets — did he pay me back?" "Sarah borrowed my favorite sweater three months ago."*

The average person has **8–15 items** outstanding at any time — lent to friends, borrowed from neighbors, half-remembered IOUs. The items pile up: books, tools, kitchen equipment, clothes, chargers, Tupperware, DVDs, camping gear. Small loans blur together.

**What goes wrong:**
- You forget who has what → item effectively disappears
- You're too embarrassed to ask for it back → it stays gone
- You forgot you borrowed something → the lender resents you
- Small IOUs are never settled → relationships quietly strain
- You repurchase something you already own but can't find → wasted money

**The cost:** The average household has **$300–$700** of lent-out or "borrowed and forgotten" items at any given time. Over a lifetime, that's thousands of dollars of stuff quietly walking out the door — not stolen, just forgotten.

**The awkwardness:** Asking for your stuff back feels petty. Not asking means losing it. There's no graceful middle ground.

---

## Existing Solutions (and Why They Fail)

| Solution | Problem |
|----------|---------|
| **Memory** | Fails. Always. Humans are bad at tracking physical items without a system. |
| **Phone notes** | Scattered, no reminders, no structure. Becomes a graveyard. |
| **Splitwise** | Tracks shared expenses and IOUs — not physical items. |
| **Group chats** | "Hey does anyone have my…" is chaotic and easy to miss. |
| **Just buying a replacement** | Expensive. And then the original shows up. |
| **Asking in person** | Awkward. The longer you wait, the worse it gets. |

**Nobody owns this problem.** It's too small for a full app ecosystem, too big to ignore.

---

## The Solution: Boomerang

A **personal lending tracker** — a simple, beautiful log of every item you've lent and borrowed. With smart reminders that handle the awkwardness for you.

### Core Loop

```
Lend item → Snap photo → Set return date → Get gentle reminder → Item comes back
```

### Key Features

**1. Quick-Add Lending**
- Photo of the item
- Who you're lending to (from contacts)
- What it is (AI suggests from photo: "Le Creuset Dutch oven — $350 value")
- Expected return date
- Optional: personal note ("for Maria's dinner party Saturday")

**2. Quick-Add Borrowing**
- Track what YOU'VE borrowed from others
- Set self-reminders so you don't become "that friend"
- Photo + lender + return date

**3. Smart Reminders**
- **3 days before due**: "Your lent air fryer is due back from Jake in 3 days"
- **On the due date**: "Today's the day — nudge Jake?"
- **1 week overdue**: Auto-generated friendly nudge template ("Hey! No rush on the air fryer — just a friendly reminder 🪃")
- **30 days overdue**: "This has been out 30 days. Want to escalate or write it off?"
- Custom cadence for open-ended loans ("no rush" items)

**4. The Awkwardness Engine** 🎯
- Tone-graded message templates: Casual → Friendly → Direct → Firm
- AI-drafted nudge referencing your relationship context
- "Mark as no longer awkward" — if you see them in person and handle it
- Track response: acknowledged / promised date / ghosted

**5. Small IOUs**
- Track casual loans: "$40 for concert tickets," "$15 for lunch"
- One-tap Venmo/PayPal/Zelle request links
- Auto-calculate who-owes-whom across multiple interactions

**6. Lending History & Patterns**
- "You've lent to Jake 12 times — he's returned 11 on time ✅"
- "Sarah tends to keep items 2x longer than agreed ⚠️"
- Reliability insights without judgment — just data

**7. Annual Write-Off**
- Once a year, review everything still outstanding
- "Forgive" items (mark as gifted — no more tracking)
- "Reclaim" items (commit to actually getting them back)
- Tax: could document for "casual gifts" if needed

**8. Shared Household Mode**
- Couples/roommates share a lending log
- "Oh, your dad has the chain saw? I didn't know."

---

## Target Users

### Primary: The Lender (80% of users)
- Age 25–55
- Established social circle — lends regularly
- Has a household with stuff worth lending (tools, kitchen, gear)
- Slightly conflict-averse; hates chasing people

### Secondary: The Conscious Borrower
- Age 20–45
- Borrows from friends/family
- Wants to be the friend who returns things on time
- Uses the app to self-track

### Tertiary: The Household Coordinator
- Manages shared items for a couple or family
- "Did your brother return the air mattress?"

---

## Market Opportunity

**TAM:** ~150M US adults who lend/borrow casually
**Willingness to pay:** Low individually, high at scale
**Annual value of "lost" items per household:** $300–$700
**Total US "lost to lending" annually:** ~$45B+ in misplaced goods

### Competitive Landscape

| App | What They Do | Why Boomerang Wins |
|-----|-------------|-------------------|
| Splitwise | Expense splitting | No item tracking, no reminders, no photos |
| Notion templates | Generic trackers | High friction, no smart features |
| Phone notes | Free-form | No reminders, no structure |
| Group chats | Ad-hoc | Lost in the scroll |

### Pricing

**Free tier:**
- Up to 15 active items
- Standard reminders
- Basic message templates

**Boomerang+ ($2.99/mo or $19.99/yr):**
- Unlimited items
- AI-drafted nudges with tone control
- Reliability insights
- Shared household mode
- Photo timeline & lending archive

**Why annual pricing:** This is a utility, not a daily habit. Annual makes it feel like insurance — "I'll have this when I need it."

---

## Design Direction

### Aesthetic
- **Warm and friendly**, not corporate
- A wooden notebook with photo stickers vibe
- Rounded corners, generous whitespace
- Color palette: warm cream, soft amber, deep forest green, terracotta accent

### Voice
- Light and human — like a friend who's good at remembering things
- Never judgmental about overdue items
- "Hey, no rush on that stand mixer — just a ping 🪃"

### Key Screens

**1. Home Dashboard**
- Tabs: "I Lent" | "I Borrowed" | "IOUs"
- Cards sorted by urgency
- Top stat: "12 items out · 3 overdue · $480 value lent"

**2. Item Detail**
- Photo (large)
- Item name + description
- Lent to / borrowed from (with contact card)
- Date lent, expected return, days overdue (if any)
- Nudge history timeline
- Notes

**3. Nudge Composer**
- Tone selector: 🌿 Casual → 🌳 Friendly → 🪵 Direct → 🪨 Firm
- AI-drafted message using context
- Editable
- Send via WhatsApp/SMS/in-app
- "Mark as resolved in person"

**4. Add Item Flow**
- Camera → AI suggests name & category from photo
- Pick contact (or type name)
- Set return date (or "no rush")
- Save

---

## Business Model

| Tier | Price | Target |
|------|-------|--------|
| Free | $0 | Trial, casual users |
| Annual | $19.99/yr | Core users |
| Household | $29.99/yr | Couples/families |

**CAC strategy:** Organic + word-of-mouth. "Oh, I tracked that with Boomerang" is a natural referral moment. Content angles: "How much stuff have you lost to lending?" quiz. Partner with organizing influencers (HomeEdit-adjacent).

**LTV:** Target 3-year retention at $19.99/yr = $60 LTV. With 50K paid users by Y3, that's $1M ARR.

---

## Why Now

- **Smartphone camera + AI vision** — finally good enough to auto-categorize items from a quick snap
- **Contact list integration** — no social graph required
- **Venmo/PayPal APIs** — one-tap money requests for IOUs
- **Culture shift** — "borrow don't buy" sustainability movement makes lending more common
- **No dominant player** — this problem is hiding in plain sight

---

## Differentiation from Adjacent Ideas

| Boomerang | Closest Idea | Why Different |
|-----------|--------------|---------------|
| Personal item lending tracker | BorrowHood (neighborhood sharing) | BorrowHood is a P2P marketplace for borrowing. Boomerang is a personal log of items already lent to people you know. |
| Physical items + small IOUs | SplitShare (friend balances) | SplitShare tracks shared expenses. Boomerang tracks physical things + one-off casual IOUs. |
| Item return reminders | PromiseHold (commitments) | PromiseHold is abstract promises. Boomerang is concrete physical items with photos. |
| "Who has my stuff?" | HeartPing (relationship keeper) | HeartPing tracks social relationships. Boomerang tracks physical items between people. |

---

## Sources

- Web research June 2026: Product Hunt, Indie Hackers, Reddit r/AskReddit "what do you wish there was an app for"
- Survey Center on American Life — friendship statistics, casual lending patterns
- Consumer spending data — household goods replacement costs
- NicheMetric underserved markets report 2026
