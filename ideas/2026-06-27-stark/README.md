# ⚪ Stark

> **The subscription tracker that hates subscriptions. Including its own.**

**Date:** 2026-06-27
**Category:** Personal Finance / Digital Minimalism
**Inspiration:** Reddit (r/linux_gaming, r/technology, r/dumbphones)

---

## 🔥 The Problem (validated on Reddit this week)

Three converging frustrations dominate Reddit right now:

1. **Subscription fatigue** — People are drowning in recurring payments and forget to cancel. Existing trackers (Rocket Money, Origin) are bloated, require accounts, and — ironically — charge their own monthly subscription to help you manage subscriptions.
2. **AI fatigue** — Top post on r/linux_gaming (5 days ago): *"I fucking hate AI. I'm so fucking sick of AI. Genuinely almost every single website, program, or app is integrating AI into it."* Top post on r/technology: companies reining in AI usage as costs strain budgets.
3. **Digital minimalism** — r/dumbphones is exploding. Commodore launched a flip phone that blocks social media. Minimalist Android launchers are trending. People want less, not more.

**The gap:** Every existing subscription tracker is a subscription itself, requires an account, has AI features nobody asked for, and phones home with analytics. The category is begging for a Stark option.

---

## ✅ The Solution

**Stark** is a local-first subscription tracker built on four principles, printed on the landing page:

| Principle | What it means |
|-----------|---------------|
| **Zero AI** | No "smart insights." No chatbot. No ML-driven recommendations. Just math. |
| **Zero Account** | No login. No email. No cloud. Your data lives on your device. |
| **Zero Subscription** | One-time purchase. $7.99. Ever. Updates free forever. |
| **Zero Tracking** | No analytics. No telemetry. No SDKs. We literally cannot see you. |

### Core Features (v1.0)
- ➕ **Add subscriptions** — name, cost, billing cycle (weekly/monthly/yearly), next renewal date, category
- 📊 **Total burn** — see monthly and yearly cost at a glance
- ⏰ **Renewal reminders** — local notifications 3 days before each renewal
- 🏷️ **Categories** — streaming, software, fitness, news, cloud, etc.
- 🔍 **Search & filter** — find any subscription instantly
- 📤 **Export** — CSV/JSON. Your data, always portable.
- 🌙 **Dark mode** — because of course
- 📱 **PWA** — install on phone or desktop. Works offline. No app store cut.

### Non-Features (marketed proudly)
- ❌ No AI insights
- ❌ No automatic bank scanning (privacy)
- ❌ No cancellation service (we show you the link, you click it)
- ❌ No social features
- ❌ No gamification
- ❌ No cloud sync between devices (use export/import)

---

## 🎯 Target Users

**Primary:** Digital minimalists, privacy-conscious users, and the growing "sick of AI / sick of subscriptions" crowd on Reddit, Hacker News, and Lobste.rs.

**Secondary:** Anyone who has been burned by Rocket Money's $12/month subscription to manage their subscriptions (yes, the irony is real).

**Tertiary:** Fans of tools like Notion (before AI), Bear Notes, iA Writer, and Things 3 — people who pay once for quality software.

**Persona:** *"Alex, 31, cancelled Netflix, Spotify, and three SaaS tools last month after realizing she was spending $340/month on subscriptions. She tried Rocket Money but balked at paying $12/month to track $340/month of subscriptions. She wants a simple, private, one-time tool."*

---

## 🛠 Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Frontend** | Vanilla HTML/CSS/JS or Svelte | Small bundle, no framework bloat, ships fast |
| **Storage** | IndexedDB (browser) / localStorage | Local-first, no server |
| **Notifications** | Web Notifications API + Service Worker | Works offline, no push server |
| **Sync (optional)** | Manual export/import (JSON) | User controls their data |
| **Hosting** | Static site (Cloudflare Pages / Netlify) | Near-zero cost |
| **Payments** | Lemon Squeezy or Gumroad | One-time payments, no subscription infrastructure |
| **PWA** | Vite PWA plugin | Installable, offline-capable |

**Estimated dev time:** 2-3 weeks for MVP. No backend = no ongoing costs.

---

## 💰 Monetization

### One-Time Purchase: $7.99
- Single payment, lifetime updates
- Marketed as: *"Less than one month of Rocket Money. Forever."*
- Lemon Squeezy handles global payments + VAT

### Optional "Tip Jar"
- $2 / $5 / $10 optional support
- No unlock, no perks — just appreciation
- Shown post-purchase, not before

### Why not freemium?
The whole point is zero friction and zero enshittification. A free tier creates pressure to upsell, which creates dark patterns. One price, one tier, done.

### Revenue projection
| Month | Sales | Revenue |
|-------|-------|---------|
| 1 (launch on HN/Reddit) | 500 | $3,995 |
| 2 | 300 | $2,397 |
| 3 | 200 | $1,598 |
| 6 (steady state) | 150/mo | $1,199/mo |

Low costs (~$5/mo hosting) means ~99% margin. Break-even at 1 sale.

---

## 📈 Go-To-Market

### Launch Strategy (zero marketing budget)
1. **Show HN** — title: *"Show HN: Stark — a subscription tracker with no AI, no account, no subscription"*
2. **Reddit** — r/selfhosted, r/privacy, r/simpleliving, r/dumbphones, r/personalfinance
3. **Lobste.rs** — privacy-focused audience
4. **Mastodon/Fediverse** — digital minimalism community
5. **Product Hunt** — position as "the anti-Rocket Money"

### The Viral Hook
The landing page lists what Stark does NOT do, in big letters:

> **No AI. No account. No subscription. No tracking. No bullshit.**

That's a screenshot people share. It writes its own Reddit title.

### Content Marketing
- Blog post: *"Why Stark doesn't use AI (and why that's a feature)*
- Blog post: *"The Rocket Money paradox: paying $12/month to manage $15/month of subscriptions"*
- Blog post: *"Local-first software is the future"*

---

## 🏆 Competitive Analysis

| Feature | Stark | Rocket Money | Origin | Bobby (macOS) | Subby |
|---------|-------|-------------|--------|---------------|-------|
| One-time price | ✅ $7.99 | ❌ $12/mo | ❌ $9/mo | ✅ $2.99 | ❌ $4/mo |
| No account needed | ✅ | ❌ | ❌ | ✅ | ❌ |
| No AI features | ✅ | ❌ | ❌ | ✅ | ❌ |
| No analytics/tracking | ✅ | ❌ | ❌ | ⚠️ | ❌ |
| Cross-platform (PWA) | ✅ | ✅ | ✅ | ❌ macOS | ✅ |
| Renews notifications | ✅ | ✅ | ✅ | ✅ | ✅ |
| Bank scanning | ❌ (by design) | ✅ | ✅ | ❌ | ❌ |
| Cancels for you | ❌ (gives link) | ✅ | ❌ | ❌ | ❌ |

**Stark's wedge:** The only tracker that is itself NOT a subscription, requires NOTHING from you, and runs entirely on your device.

---

## 🚀 Roadmap

**v1.0 (MVP — 3 weeks)**
- Add/edit/delete subscriptions
- Monthly/yearly totals
- Renewal reminders
- Categories + search
- Dark mode
- Export/import JSON

**v1.1 (week 4)**
- CSV export for spreadsheets
- Recurring billing detection from pasted text
- Custom reminder timing per subscription

**v1.2 (week 6)**
- Optional encrypted backup file (user stores where they want)
- Cost trends chart (simple, no AI insights)
- Currency support

**v2.0 (month 3)**
- Optional self-hosted sync via WebDAV (Nextcloud, Synology)
- Shared household view (local network only)
- Browser bookmarklet: one-click add from any subscription page

**Never**
- AI features
- Bank account scanning
- Cloud sync (beyond optional WebDAV)
- Social/sharing features
- Subscription pricing

---

## 💡 Why This Works Now

1. **The backlash is peaking.** Reddit's front page has AI-hate posts weekly. The tide is turning against "AI everywhere."
2. **Subscription overload is a universal pain.** Everyone has 10+ subscriptions. The market is proven (Rocket Money was acquired for $1.65B).
3. **Privacy is trending.** Post-Apple-mail-spyware, post-23andMe-breach, people want local-first tools.
4. **The "anti" positioning is viral.** "The X that doesn't do Y" is inherently shareable.
5. **Low cost to build, low cost to run.** No backend = no monthly burn = sustainable at low sales.

---

## ⚠️ Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Discovery without ads | Lean into Reddit/HN launch; the "no AI, no subscription" angle is catnip for these communities |
| App store fees (if native) | Ship as PWA first; native wrappers later if demand exists |
| Users want bank scanning | Partner with a secure open-source option (Actual Budget) via export; don't build it |
| Competition copies the angle | Be first, be authentic, build community around the philosophy |

---

*Stark. Less is more. A lot more.*
