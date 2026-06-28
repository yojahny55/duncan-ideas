# 🛋️ CouchPass

> **The streaming password crackdown has a body count. CouchPass is the triage.**

**Date:** 2026-06-28
**Category:** Personal Finance / Family Tech
**Inspiration:** PCMag (June 2026), Vulture, Cord Cutter Weekly, Reddit r/cordcutters, Business Insider

---

## 🔥 The Problem (defined by 2026 reality)

The golden age of shared streaming is **over**. Since 2023, every major service has cracked down:

| Service | Extra Member Fee | Household Check |
|---------|------------------|-----------------|
| Netflix | $7.99/mo | Periodic IP/device verification |
| Disney+ / Hulu | $7.99–$10.99/mo | Location + device checks |
| Max | $7.99/mo | IP-based, "more assertive" enforcement through 2026 |
| Paramount+ | Varies | Coming late 2026 per leaks |

**Real-world fallout:**
- A family of 4 spread across 2 households (parents + college kid + adult child) now pays **$30–$60/mo in extra member fees** across services they used to share freely.
- 47% of US streamers shared passwords in 2023. That's **100M+ people** affected.
- Each service has **different rules** for what counts as a "household." Nobody can keep track.
- When someone gets kicked off, the family group chat catches fire: *"Why isn't Netflix working?!"*
- **Nobody has built the consumer side of this.** Password managers store credentials. Subscription trackers track costs. **Nothing manages the human logistics of shared access under the new rules.**

### The gap, in one sentence
> Password managers store. Subscription trackers count. **CouchPass coordinates.**

---

## ✅ The Solution

**CouchPass** is the shared-streaming operations center for families and friend groups navigating the 2024–2026 crackdown era. It's a coordination layer, not another password vault.

### Core Features

#### 1. **Service Roster** — the single source of truth
Add each streaming service your group uses. For each:
- Who pays (account owner)
- Monthly cost + any extra-member fees already being paid
- Household status (primary address, verified devices)
- Who currently has access (by household)
- Last known "kicked off" events

#### 2. **Household Map** — visualize who lives where
Define each household (Mom's house, Dad's apartment, College dorm, Sibling's studio). CouchPass maps which streaming services consider each household as "primary" vs "extra." This is the thing nobody can keep in their head.

#### 3. **Cost Splitter** — settle up without the spreadsheet
Every extra member fee ($7.99/mo × N services × N people) flows into a single running balance. Sarah owes Mike $23.97 this month. Venmo deeplink. Done. No more "I'll Venmo you" that never happens.

#### 4. **Optimization Engine** — who should own what?
This is the killer feature. AI evaluates your group's services and recommends the cheapest arrangement:
- "If **Dad** owns Netflix (his address is the Netflix primary household for 3 of 4 users) and **Sarah** owns Disney+ (she gets the Verizon free perk), you save **$15.98/mo** vs your current setup."
- Considers: Verizon/Amex/Visa perks, student discounts, ad-supported tiers, annual vs monthly, bundle deals (Disney+ Hulu ESPN).
- Quarterly re-check as promotions expire.

#### 5. **Access Alerts** — when the crackdown hits
- "Netflix may have flagged **Mom's iPad**. She watched from a different IP last night. Here's the household verification playbook."
- "**Disney+** is doing a sweep this week (per their pattern). Log in from your primary Wi-Fi in the next 48 hours."
- Step-by-step recovery when someone is kicked off.

#### 6. **Rotation Calendar** — annual rightsizing
- Track whose name is on each service
- Plan annual "rotation" — switch primary holder to optimize
- Reminder 30 days before annual promo expires
- "What if we cut Max?" scenario planner

#### 7. **Household Verification Playbook**
For each service, the current known rules:
- What triggers a check (IP change, new device, periodic sweep)
- How to pass verification (be on primary Wi-Fi every 31 days, etc.)
- What to do if flagged
- Updated as policies change — CouchPass tracks the crackdown news for you

#### 8. **Crackdown News Feed** — policy changes that matter
When Max announces "more assertive" enforcement, CouchPass tells you what it means for YOUR setup specifically — not a generic news blurb.

---

## 🎯 Target Users

**Primary:** Families with adult children or members spread across 2+ households
- 40M+ US households match this profile
- Highest pain: divorced parents sharing with kids, college students, adult siblings

**Secondary:** Friend groups who historically shared logins
- Less sticky (people drift apart), but high pain right now

**Tertiary:** Caregivers managing streaming for elderly parents
- Underserved overlap with CareLoop user base

---

## 💰 Monetization

**Free tier:**
- Up to 3 services, 1 household
- Basic cost splitter
- Crackdown news feed

**CouchPass+ ($14.99/yr or $1.99/mo):**
- Unlimited services & households
- Optimization engine
- Access alerts + verification playbook
- Rotation calendar
- Priority news alerts

**Pricing rationale:** Annual $14.99 pays for itself with a single optimization suggestion. Lower than the cost of one extra member fee. Not a SaaS — a utility.

### Market Math
- 47M US households shared passwords pre-crackdown
- If 10% adopt a tool: **4.7M households**
- At 10% paid conversion × $14.99 = **$70M ARR opportunity**
- Year-1 SOM: 100K paid users × $14.99 = **$1.5M ARR**

---

## 🚀 Why Now

1. **Crackdown maturity:** The "extra member" tier experiment (launched 2023) is now the **norm** across all five major services. Pain is fresh and ongoing.
2. **Policy fragmentation:** Each service has different rules — confusion is at peak. Max just announced "more assertive" enforcement for late 2026.
3. **Tool gap:** Password managers (1Password, Bitwarden) added credential storage but not coordination. Subscription trackers (Rocket Money, Stark) track costs but not the sharing economy.
4. **Cultural moment:** "Who has the Netflix password?" is a recurring meme and source of family friction. The problem has mindshare; the solution doesn't exist.

---

## 🧱 Differentiation

| Competitor | What they do | What they don't do |
|------------|--------------|---------------------|
| **1Password / Bitwarden** | Store & autofill passwords | Coordinate sharing, optimize arrangements, track households |
| **Rocket Money** | Track subscription costs | Manage shared access, recommend ownership rotation |
| **Stark / Subtract** | Cancel subscriptions | Manage the ones you keep |
| **Venmo / Splitwise** | Split bills | Track streaming-specific sharing, optimize arrangements |
| **JustWatch / Reelgood** | Find what to watch | Manage access or cost |
| **CouchPass** | **Coordinate shared streaming under crackdown rules** | **(This is the whole point.)** |

---

## 📐 Design Direction

**Vibe:** Warm, slightly retro, family-room feel. Not cold/techy. Streaming should feel cozy — this is about couches, not servers.

**Palette:**
- Warm charcoal `#2A2520` (primary background)
- Cream `#F4EBD9` (cards/surfaces)
- Sunset orange `#E07A4F` (primary accent — energy, action)
- Sage `#8BAA92` (success/paid states)
- Dusty rose `#C97B84` (alerts — "kicked off")

**Typography:**
- Headers: Fraunces or Recoleta (warm serif)
- Body: Inter or General Sans (clean sans)

**Voice:** Wry, knowing, slightly sardonic. We're all going through this. Acknowledge the absurdity.

---

## 🛠️ Technical Notes

**MVP scope (what to build first):**
1. Service roster + household map (manual entry)
2. Cost splitter with Venmo deeplinks
3. Static "current rules" page per major service
4. Optimization suggestions (rule-based for v1, AI for v2)

**Not in MVP:**
- Direct API integration with streaming services (they won't allow it; this is a policy/coordination layer, not a credential broker)
- Actual password storage (CouchPass coordinates; 1Password stores)
- Auto-billing (users handle payments via Venmo)

**Tech stack:** React + Tailwind. PWA-first (mobile primary). Local storage for v1, optional sync later.

**Privacy stance:** No storing passwords. Ever. We track *who has access*, not the credentials themselves. This is a hard line — it keeps CouchPass out of the security crosshairs and makes the value prop crystal clear.

---

## 📊 Validation Signals

- **PCMag (June 2026):** "5 Tricks That Still Work (for Now)" — proves ongoing demand for workaround content
- **Vulture (Oct 2025):** All major services now have crackdown policies in place
- **Business Insider (May 2025):** "Those still logged in to their sibling's or ex's account should prepare to pay up"
- **Reddit r/cordcutters:** Daily threads on household verification, extra member fees, optimal sharing setups
- **Cord Cutter Weekly (Feb 2026):** Annual guide to sharing policies — this content shouldn't need a guide, it needs an app

---

## 🎬 Prototype

See `prototype/index.html` for a working demo of the CouchPass dashboard.

---

## 📝 One-Sentence Pitch

**The streaming password crackdown created a $30/mo hidden tax on families. CouchPass is the only app built to minimize it.**
