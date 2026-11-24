# Buyable 🛒📡 — The Buyability Radar for AI Commerce

> **"Your store has been selling to AI agents since March. You didn't know. And last week, a feed update quietly took half your catalog off the shelf. The agent didn't bounce to your analytics — it just bought the competitor's."**

**Date:** 2026-11-23
**Source:** Web — ChatGPT Wallet launch (TechCrunch, Nov 13, 2026), UCP/ACP protocol coverage (brandlight.ai Nov 18, silentinfotech Nov 18, singlegrain Nov 18), Retail Dive "is your store ready?" (Oct 26, 2026), Shopify agentic commerce guide (Nov 11, 2026), dev.to "Storewalk — 45 checks" (Nov 3, 2026), Onely "how AI agents find products" (Nov 4, 2026)
**Category:** E-commerce / Agentic Commerce Infrastructure / Merchant SaaS
**Status:** Idea documented + interactive prototype

---

## 1. The Spark — What the Web Was Screaming This Week

The biggest commerce story of November 2026 landed **last week**: on **Nov 13, OpenAI launched ChatGPT Wallet** — its agents ("dots") can now complete real purchases on your card, via tokenized network credentials, no card numbers touched (TechCrunch Nov 13; SingleGrain Nov 18; whatsthebigdata Nov 17). The rails it runs on have been piling up all year:

- **ACP** (Agentic Commerce Protocol, OpenAI + Stripe, Sept 2025) = the route into **ChatGPT**.
- **UCP** (Universal Commerce Protocol, announced at NRF **Jan 11, 2026** by Google with **Shopify, Etsy, Wayfair, Target, Walmart**, plus **Visa & Mastercard**) = the route into **Google AI Mode + Gemini**. Only products carrying the **`native_commerce` checkout-eligibility attribute** in Merchant Center get a **Buy button** (Onely, Nov 4, 2026).
- **Shopify switched Agentic Storefronts ON BY DEFAULT** for eligible US merchants in **March 2026** — ChatGPT auto-included, Copilot + AI Mode toggled in admin. Retail Dive (Oct 26, 2026) quotes Shopify: *"It is on by default, so many merchants are already live in ChatGPT, Gemini and Copilot without knowing it."*
- ChatGPT checkout is currently narrow (US Pro subscribers, eligible US-issued cards, running only inside dots) — but OpenAI itself says it's "starting small to learn," and the Nov 13 Wallet launch is the widening.
- Visa reported hundreds of controlled live agent-initiated transactions and projected **millions of consumers on agent checkout by the 2026 holiday season**.

And the sharpest framing of the whole week came from a dev post (dev.to, Nov 3, 2026) that named the category's blind spot verbatim:

> **"Visible is not the same as buyable."**
> Most "AI readiness" tools answer one of two questions: *Does AI talk about you?* (GEO/mention tools — Profound, ReSO AI) or *Is your product data clean?* (feed/schema scanners). **Neither tells you whether an agent can finish a purchase.** A store can be recommended by ChatGPT and still lose the sale, because a CAPTCHA, a login wall or unreadable shipping terms stop the agent. *"At the first step it can't pass, it leaves and buys somewhere else. You never see a bounced visit in your analytics."*

That last sentence is the entire product. The agent's lost sale is **invisible by construction** — no 404, no exit event, no analytics row. And the surfaces (ChatGPT, Gemini, AI Mode, Copilot, Perplexity, Meta AI) are **live, churning, and independently flaky**: a Merchant Center disapproval wave, a `/.well-known/ucp` profile that returns 404 after a domain migration, a theme update that puts a CAPTCHA in front of payment, a plugin that blanket-disallows robots, Shopify's toggle silently off after a plan change. Each one removes buyability on exactly one surface — and the only tooling that exists today (Storewalk's one-time 45-check crawl report) is a **snapshot**. A store-walk report from October is wallpaper in a world where the checkout protocol changed in November.

**Nobody owns the merchant's standing question: "Right now, on each AI surface, can my catalog actually be bought — and when did that change?"**

## 2. Problem Statement

1. **Invisible loss.** Agents don't bounce to analytics. The first blocked step (guest-checkout wall, CAPTCHA, missing machine-readable price/stock/shipping/returns, blocked crawler, missing protocol endpoint) and the sale goes elsewhere silently. Merchants feel it as unexplained category softness in the exact products AI shoppers ask for.
2. **Default-on, knowledge-absent.** Shopify's March 2026 default-on means *hundreds of thousands* of US merchants are already reachable by agents with feeds that carry chronic disapproval rates (20–40% is normal GMC life) and policy pages written for humans. They are "live in ChatGPT without knowing it" — selling their worst data first.
3. **The buyability state is a matrix, not a score.** Surfaces (ChatGPT / Gemini+AI Mode / Copilot / Perplexity / Meta AI) × states (reachable? discoverable? **buyable?** — protocol + feed + attribute + checkout passability). A single "AI readiness score" hides a store that's discoverable everywhere but blocked at payment (the Storewalk critique, internalized: score the *path*, show the *stopping point*).
4. **The state decays.** Merchant Center disapprovals spike after feed/plugin/theme updates; UCP profiles 404 after migrations; robots.txt gets blanket-`Disallow: /` by a "anti-scraper" plugin that also blinds every compliant shopping agent; ChatGPT Wallet's eligibility gates (US, Pro, dots) widen on OpenAI's schedule, not yours. A one-time audit rots in weeks; **buyability is a live wire, and it needs a radar.**
5. **The fix knowledge is tribal.** "Why doesn't my product show a Buy button in Gemini?" is answered in forums by a rotating cast of integration devs (Merchant Center attribute + UCP profile + feed health + eligible country + adult-goods gating + Shopify channel state). It's a 7-part checklist nobody ships as tooling.

## 3. Target Users

- **Primary: DTC/ecommerce operators, 1–50 staff** (Shopify-first, then BigCommerce/Magento/Custom) who heard "agentic commerce" in a podcast, saw the ChatGPT Wallet launch, and want one calm answer to *"are we actually reachable and buyable by AI agents, where, and what broke this week?"* Will pay for radar + alerts the way they pay for search-console monitoring.
- **Secondary: E-commerce agencies & feed managers** — they manage 10–50 client stores and already live on feed-disapproval anxiety; white-label radar reports and client alerting is the expansion. (House pattern: Prosumer wedge → Agency tier.)
- **Tertiary (Year-2): Platform & protocol vendors** — anonymous "where stores stop" dataset and per-surface buyability indices are the intelligence layer for protocol docs, agency marketing, and platform partnerships.

## 4. Proposed Solution: Buyable

**Buyable = the standing buyability radar for the AI storefront.** Connect the store (URL always; platform OAuth optional) and get a live **Surfaces × States matrix** with evidence, a fix queue, and an alert for the moment buyability changes — plus receipts proving when you fixed it.

### Core loop
`Connect store → Baseline walk (45-check-style crawl, zero credentials) → Connect platform truth (Shopify / Merchant Center OAuth) → Surfaces×States radar → Alerts on any state change → Fix queue (ID-tagged, one-tap dev hand-off) → Re-walk → Before/After Receipt → Crowd "Where Stores Stop" intel`

### Key Features

**1. The Baseline Walk (free wedge, zero credentials, 2 minutes)**
Enter store URL → external probe runs the agent's path in agent order — **Find → Compare → Buy → After** — with ID-tagged checks (DISC/EVAL/TRX/AFT families, Storewalk-compatible vocabulary): robots.txt agent rules (named-agent vs. blanket-disallow), Product JSON-LD vs. rendered-page consistency (stale sale price = trust breaker), no-JS readability (price/stock only after client render = empty shell), GET-able search (`/search?q=…`), machine-readable price/stock/variants/**shipping/returns** (the two most-missing fields), guest checkout, CAPTCHA-before-payment, and the protocol endpoints: `/.well-known/ucp`, ACP/agent cards, `llms.txt`, MCP/A2A discovery files. Output: **The Stopping Point Card** — the *first* step an agent can't pass, on each surface, one screen, with the ID you hand your developer. Free forever for 1 store, 1 walk/month — the walk is the wedge and the dataset.

**2. Platform Truth (the moat layer — the part one-time crawlers can't see)**
- **Shopify OAuth (read-only):** Agentic Storefront channel state (which surfaces are actually ON for you), live feed export health, theme/plugin change events correlated to state changes.
- **Google Merchant Center OAuth (read-only):** per-product **disapproval waves with error codes**, `native_commerce` attribute presence by product, feed eligibility — because in AI Mode/Gemini, *disapproved = not buyable, full stop*, and GMC's own UI buries this in a table 6 clicks deep.
- **No-credential fallback:** paste the GMC diagnostics CSV / Shopify channel screenshot → same radar, manual refresh. House trust posture: read-only scopes, no order data, no credentials ever beyond OAuth, everything deletable.

**3. The Radar (the signature screen)**
A live matrix — rows: **ChatGPT (ACP) / Google AI Mode + Gemini (UCP) / Microsoft Copilot / Perplexity / Meta AI**; columns: **Reachable → Discoverable → Buyable**. Each cell: state + one-line evidence ("Buyable — UCP profile live, 94% of catalog eligible", "Blocked at payment — CAPTCHA detected on checkout step 1 (TRX-002)", "Discovered, not buyable — 27% of catalog GMC-disapproved, no Buy button"). Under the matrix: **Change Strip** — the last 5 buyability state changes across all surfaces with timestamps ("Gemini: Buyable → Degraded, Nov 20 14:12 — GMC disapproval wave +412 products after feed-plugin update"). This strip is the product; the matrix is the dashboard.

**4. Alerts (the retention engine)**
Buyability is a wire, so it gets wire alerts: UCP profile went 404 (domain migration?), blanket `Disallow: /` appeared in robots.txt, CAPTCHA appeared before payment, Shopify channel toggled off, GMC disapproval wave crossed threshold, `native_commerce` attribute dropped from N products, a new surface opened to your region (Wallet eligibility widened — "ChatGPT checkout is now available to all Plus users — your catalog state: 71% buyable"). Push/email/Slack; every alert carries the Stopping Point + the fix ID.

**5. Fix Queue + Re-walk Receipts (the BillDelta pattern)**
Every finding is an ID-tagged card (TRX-002, EVAL-004…) with plain-English diagnosis, the exact fix (file, admin path, attribute), one-tap "copy hand-off" for your dev/agency, and **Re-walk** — re-run just the affected checks and get a thermal **Before/After Receipt**: "ChatGPT: stopped at payment → BUYABLE. Nov 21 09:40 — TRX-002 CAPTCHA removed, re-walked 41s." The receipt is the shareable artifact (PityTrack/Upheld DNA) and the proof of work agencies bill for.

**6. Where Stores Stop (the crowd moat + SEO shelf)**
Every baseline walk (consented, anonymized) feeds per-check failure rates by platform × check ID × store size: "41% of Shopify stores fail TRX-001 (guest checkout) — the #1 stopping point; median GMC disapproval rate among connected stores: 27%; only 6% publish a UCP profile." Weekly SSG pages own the queries nobody has: *"why can't ChatGPT buy from my store"*, *"Gemini buy button not showing"*, *"UCP setup guide"*, *"is my store agentic commerce ready"*, *"[platform] agentic storefronts how to check"*. Seeded honestly day one from the dev.to 45-check dataset + published protocol docs (Upheld/ProofOnce honest-seed posture); the n= compounds with every free walk. Annual **State of Agentic Readiness** = earned media every January.

### What it is NOT
- Not a mention/GEO tool (Profound/ReSO/OpenSign = "does AI *talk about* you"; Buyable = "can an agent *buy* from you" — different question, different data, different buyer).
- Not a feed optimizer (feed tools fix GMC hygiene for *Google Shopping* traffic; Buyable reframes feed health as **buyability per AI surface** and watches the protocol layer they ignore).
- Not a one-time audit (Storewalk et al. — the crawl is the free wedge here; the standing radar is the product).
- Not consumer-side agent spend control (CartCheck — different side of the counter; Buyable is the merchant's, CartCheck the shopper's; the two are natural future allies).

## 5. Why Now (the 2026 stack-up)

1. **Nov 13, 2026 — ChatGPT Wallet.** OpenAI's agents started spending real card money. The "will agents buy" question closed; the "is my store buyable" question opened — for everyone who sells.
2. **Jan 2026 — UCP with the full retail cartel** (Google, Shopify, Etsy, Wayfair, Target, Walmart, Visa, Mastercard). Checkout in AI Mode/Gemini is gated on Merchant Center attributes + UCP profiles — i.e., on *merchant-side setup state* that changes and decays.
3. **Mar 2026 — Shopify default-on.** Hundreds of thousands of US merchants are already agent-facing without knowing it. The ignorance window is the GTM window: *"You've been sellable since March. Here's your radar."*
4. **Dec 2026 — Visa's holiday projection** (millions of agent checkouts). Every retailer's Q4 board deck now has an "agentic commerce" line item; the audit/radar purchase is a Q4 line item with it.
5. **The decay is structural, not incidental.** Protocols pre-1.0, feeds churning weekly, platforms widening eligibility on their own clocks. Monitoring is the only honest product shape — the same logic that made status pages, uptime monitoring, and search consoles into durable categories.

## 6. Competitive Landscape

| Player | What it does | The gap Buyable owns |
|---|---|---|
| **Storewalk** (dev.to, Nov 2026) | One-time 45-check agent-crawl report, stopping-point framing | Snapshot, crawl-only, no platform truth (GMC/Shopify), no alerts, no receipts; Buyable's walk is the same vocabulary — standing, connected, and alerted |
| **GEO/mention tools** (Profound $499+, ReSO AI $599, Peec €89+) | "Does AI talk about you?" brand-mention tracking | Different question entirely — mentions ≠ purchasability; also priced for CMOs, not operators |
| **Feed/schema scanners** (feed optimizers, SEO audit tools) | GMC/Shopify data hygiene for *classic* search & shopping | Don't watch the protocol layer (UCP/ACP/llms.txt), don't compute per-surface buyability, don't alert on state change |
| **Shopify Agentic Storefront admin** | Toggles + basic channel status | One platform's view of itself; no cross-surface matrix, no third-party evidence, no fix queue, no history |
| **Merchant Center UI** | Disapprovals, eligibility | 6-clicks deep, Google-Shopping-framed, no AI-surface mapping, no alert thresholds, no receipts |
| **CartCheck** (this catalog, 2026-09-01) | Consumer-side agent spend oversight | Other side of the counter; complementary, not competing |

## 7. Pricing

- **Free forever — 1 store, 1 walk/month, Baseline Walk + Stopping Point Card, public Where-Stores-Stop intel.** (The free walks ARE the dataset — free-tier-as-moat, DeadWire/ProofOnce pattern.)
- **Pro $29/mo or $199/yr — 1 store, full Radar (5 surfaces), Platform Truth (Shopify + GMC OAuth), unlimited re-walks, alerts (push/email/Slack), Fix Queue + Receipts, 90-day change history.** Priced against one quarter of invisible agent-surface loss, not against SEO tools.
- **Agency $99/mo — 10 stores, white-label radar reports, per-client alert routing, client-facing receipts** (the expansion that pays for itself on two agency clients).
- **Year-2 B2B:** per-platform anonymous read indices & dataset licensing (protocol vendors, agencies, payment networks) $499–2,499/mo.
- **Never:** order data, customer PII, or selling the merchant's catalog data. Read-only scopes are the brand.

## 8. Market & Sizing

- **~2M Shopify merchants globally** (Shopify ~1.75–2M active stores, 2025–26 filings/earnings coverage); US-eligible agentic storefronts in the six figures *alone*. Add BigCommerce/Magento/WooCommerce custom stores: **tens of millions of active e-commerce sites** worldwide.
- **Agent checkout volume:** Visa projected millions of consumers by holiday 2026; ChatGPT Wallet gating (US, Pro, dots) is explicitly widening; UCP partners (Target, Walmart, Wayfair, Etsy) bring first-party supply. Analyst consensus frames agentic commerce as a high-tens-of-billions-by-2030 share of digital retail.
- **Year-1 SOM (conservative):** 8K free walks/mo flywheel from the SEO shelf + "you're live without knowing it" outreach → 4% Pro ≈ **$90K** + 250 Agency seats ≈ **$119K** ≈ **~$210K ARR** at near-zero CAC. Recurring GTM is structural: every protocol version bump, every Wallet eligibility widening, every GMC policy change, every Q4 board-deck season, every "my competitor shows up in ChatGPT and I don't" thread (a weekly format once the surfaces are mainstream).

## 9. Solo MVP (4–6 weeks)

Next.js PWA + Supabase. Walk engine = headless fetch pipeline (raw-HTML mode + one JS-render pass via a cheap headless worker), check rules in plain TS over the fetched artifacts (no ML); robots/JSON-LD/UCP/llms.txt checks are deterministic HTTP + parse. Shopify OAuth (read-only channels+products scopes) + GMC API OAuth (read-only feeds/products) — both well-documented; no-credential fallback = CSV paste + screenshot. Radar state machine = plain SQL over per-surface state rows with a change log. Alerts = cron diff + OneSignal/email/Slack webhook. SSG "Where Stores Stop" pages weekly, seeded day one from the dev.to 45-check dataset + published UCP/ACP docs. Claude only for fix-card phrasing (~$0.005/card). No crawler arms race, no order data, no ML training.

## 10. Design (ui-ux-pro-max)

**Concept: "the stock exchange floor for your storefront — every AI surface is a ticker, and buyability is the price."** A calm, information-dense trading-floor aesthetic: dark room, paper artifacts, one green that means *BUYABLE*.

- **Palette:** terminal-ink `#0A0F14`, panel-steel `#141C26`, ticker-green `#3FB950` (Buyable — the only color that means *money can flow*), degraded-amber `#FFB454` (Degraded/Discovered-not-buyable), stop-red `#E5484D` (Stopped/Blocked — stamps only), protocol-cyan `#5CC8FF` (protocol-layer accents: UCP/ACP tags), paper-cream `#F4EEE2` (receipts & Stopping Point Card).
- **Type:** Fraunces for verdicts/numbers-of-consequence, Inter for UI, **JetBrains Mono for every state, check ID, timestamp, and percentage** ("states are monospace or they lie" — house rule).
- **Signature components:**
  1. **The Surfaces Matrix** — 5 rows × 3 states, each cell a lit lamp (green/amber/red) with a one-line evidence tooltip; the whole product in one glance.
  2. **The Stopping Point Card** — a paper card (cream, slight rotation) showing *the first step the agent can't pass* per surface, ID-stamped (`TRX-002`), the "hand this to your dev" artifact.
  3. **The Change Strip** — a horizontal ticker under the matrix: the last 5 state changes, monospace, with timestamps and causes; when one is a loss, the strip flashes amber once and stays.
  4. **Before/After Receipt** — thermal-printer zigzag tear: "GEMINI: DEGRADED → BUYABLE · Nov 21 09:40 · TRX-002 CAPTCHA removed · re-walked 41s" with a rotated `BUYABLE` stamp (the only confetti in the product).
  5. **Where Stores Stop** — a single big bar chart on the free landing: "41% of stores stop at guest checkout" — the shareable dataset page.
- **Voice:** the floor broker who's seen it all — plain, dry, receipts over adjectives: *"Your store is buyable on ChatGPT. On Gemini, 27% of your catalog is off the shelf. Here's the ID. Here's the fix. Here's the receipt."*
- **Every screen ends in ONE action:** Walk, Connect, Fix, or Re-walk.
- **A11y:** WCAG AA on dark canvas (green/amber/red never the only signal — always paired with icon + text), full keyboard path through matrix cells and fix queue, respect `prefers-reduced-motion` on the ticker.

## 11. House Non-Overlap (checked twice)

- **OpenSign (2026-11-02)** = local-service businesses, *mention* visibility in AI answers, GEO. Buyable = **e-commerce**, *purchase-completion* readiness across protocol-gated surfaces. Different vertical, different mechanism, different buyer.
- **CartCheck (2026-09-01)** = **consumer-side** oversight of agent spending. Buyable = **merchant-side** readiness. Opposite sides of the same counter.
- **RugRadar (2026-09-01)** = devtools that shut down. **ModelCompass (2026-08-25)** = model selection advice. **LinkLifespan (2026-05-29)** = dead-link monitoring (generic). **UpgradeIntel (2026-03-07)** = changelog analysis. None touches merchant buyability.
- Not a subscription tracker, not a billing tool, not a mention tool.

## 12. Risks

- **Platform absorption:** Shopify could surface a cross-surface radar in admin. Mitigation: multi-platform (GMC/BigCommerce/custom) + independent third-party evidence + agency tier — the search-console history (Google owns search but third-party SEO tools still thrive) is the precedent.
- **Protocol churn:** UCP/ACP pre-1.0. This is a cost *and* the moat — churn means the state decays, which is the reason a radar exists.
- **OAuth friction:** GMC API access has review steps. Mitigation: the no-credential fallback (CSV paste/screenshot) makes Pro usable before any OAuth approval.
- **Small early volume:** agent checkout is gated (US, Pro) — but the *setup* work is happening now, before the volume, which is exactly when the radar sells (the "get your feeds ready" window is 2026 Q4–2027 Q2).
