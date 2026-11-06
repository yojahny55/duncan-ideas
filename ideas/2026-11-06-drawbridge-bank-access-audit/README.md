# Drawbridge 🌉🔐

**The bank-access audit — "You linked your bank to an AI this week. What else is still connected?"**

![Status](https://img.shields.io/badge/status-prototyped-brightgreen)
![Source](https://img.shields.io/badge/source-X%2FTwitter-blue)
![Date](https://img.shields.io/badge/date-2026--11--06-lightgrey)
![Pricing](https://img.shields.io/badge/pricing-%240--9%2Fmo-orange)

> **Demo:** [prototype/index.html](prototype/index.html) · [Live on GitHub Pages](https://yojahny55.github.io/duncan-ideas/ideas/2026-11-06-drawbridge-bank-access-audit/prototype/index.html)

## The Spark (X/Twitter, THIS WEEK)

**Nov 5, 2026: Anthropic launched "Personal Finance in Claude"** — the #1 trending tech story on X within hours. Connect your bank accounts through Plaid (read-only, up to 16 US banks, 24 months of transactions) and Claude answers money questions from your real balances.

The reaction was not celebration. Per daily.dev's aggregation of 4 discussions / 163 comments across X (Nov 6): **75% skeptical, 15% mixed, 10% positive** — "dominated by mockery and alarm about linking bank accounts to an AI chatbot."

But here's the thing nobody in the thread answered: when people asked *"wait, what else has access to my bank?"* — **there is no good answer.**

- **Plaid Portal** (my.plaid.com) exists but by its own admission shows only *some* connections: "you may see many of the apps connected to your financial accounts, **but not all of them**… not all types of Plaid-powered connections are currently supported or discoverable in Portal." It's buried, incomplete, and Plaid-only.
- **Every bank does it differently.** Chase has Connected Apps; Wells Fargo has one; **Citi has no single screen at all** — you revoke app-by-app (spendandinvest.com had to publish a per-bank maze guide in 2026 just to explain it).
- **Connections outlive companies.** Fintechs get acquired and die; the token keeps reading your checking account. iluratechnology.com (Nov 1, 2026): *"It's the forgotten connection: an app you trialled for a month two years ago that has been quietly reading your checking account ever since."*
- **Some connections MOVE money.** Cash-advance/payday apps hold ACH-pull authorization. r/cashadvanceapps (Apr 2026) is full of people discovering the Plaid dashboard only because they were fighting unwanted withdrawals.

### The scale (all 2026 sources)

- Plaid: **500M+ cumulative consumer account connections**, 8,000+ apps, 12,000+ institutions, **150M consumers**, $546M ARR, $8B valuation, IPO rumors (Bloomberg, Jul 2026)
- **85% of Americans** connect bank accounts to digital financial apps (Plaid via VoxBooster, Sep 2026)
- **78% of Americans use fintech apps**, up 20pp since 2020 (Plaid Fintech Effect 2025)
- 2026's "API Security Lock": banks cutting off direct data sharing — **connections break silently**, users blame apps, nobody tells them which of their links just died (everybodylovesyourmoney.com, May 2026)
- CFPB §1033 open-banking rule: consumers legally own the right to see and revoke data access — almost nobody knows this exists

### Why NOW is the launch window

Every AI-finance integration launch (Claude this week; GPT/Gemini will follow), every fintech breach, every dead-app headline re-asks the same question: *"who can see my money?"* This is a **recurring weekly GTM event**, same pattern as Reinstated's ban waves and BillDelta's fee-creep threads. And the 75%-skeptic reaction means the audience arrives pre-sold on the fear — you don't have to create it, just answer it.

## The Product

**Drawbridge = a full census of everything connected to your financial accounts, risk-scored, with guided revocation.** You control the bridge.

### 1. The Scan (free 5-minute wedge)

Guided multi-surface census — because no single dashboard can see everything:

- Plaid Portal export/screenshot ingest (Claude vision parses it)
- Per-bank "Connected Apps" screens — Drawbridge ships the **exact click-path for your bank** (the maze guide, productized)
- Email-forward ingest: connection-confirmation emails ("You connected Acme to Chase ••4821") auto-filed
- MX/Finicity/other aggregators + direct screen-scrape connections

Output: one list. **Every app that can see or move your money, in one place, for the first time.**

### 2. Risk Scores (the crowd moat)

Each connection gets a verdict card:

- 🔴 **MOVES MONEY** — holds ACH pull/payment authorization
- 🟡 **READS EVERYTHING** — full transaction history (that's your salary, your rent, your clinic visits, your bar tab)
- 🟢 **READS BALANCES** — minimal exposure
- 💀 **DEAD APP** — company acquired/shut down; token orphaned (revoke immediately)
- 🚨 **BREACHED** — company had a security incident while holding your access
- Plus: last-active date, what data type, whether they sell/monetize data (crowd + privacy-policy corpus), revoke difficulty rating with crowd success rates ("Citi: 34% succeed via portal, use phone path — avg hold 8 min")

### 3. Guided Revocation (the differentiator — everybody diagnoses, nobody fixes; the Discovered Labs pattern)

Per-connection kill playbook: exact screens for YOUR bank, Plaid Portal deep links, privacy-request-form templates, phone scripts with the right department name, and a confirmation-checkbox so the census stays true. **Revocation receipts**: "You cut 6 dead connections. 14 apps can still see your accounts — down from 23."

### 4. The Watch (retention engine)

- New-connection alerts (email ingest catches confirmation mails in real time)
- Quarterly re-audit with diff ("+2 since March: Klarna 🟡, some 'BudgetBuddy LLC' 🔴 you don't remember")
- Dead-app radar: when a fintech on your list gets acquired/shut down, push notification with one-tap revoke path
- **Household mode**: spouse + kids' connections (the teen cash-advance app is how most parents find out)

### 5. Exposure Score (viral artifact)

One number, 0–100, rendered as a drawbridge: fully lowered = anyone can walk in. Shareable receipt card: **"23 apps can see my money. 4 can move it. 2 are dead companies."** Annual State of Access report from anonymized data (which apps accumulate the most orphaned tokens — recurring press bait).

## Why nobody owns this

| Player | What they do | Why they can't/won't |
|---|---|---|
| Plaid Portal | Partial Plaid-only list | Self-admittedly incomplete; Plaid's revenue = MORE connections, not fewer. Incentive points the other way (same posture as retailers vs FlexClock) |
| Banks' Connected Apps screens | Per-bank, inconsistent, Citi absent | No bank will build a cross-bank census of competitors' pipes |
| Rocket Money / budget apps | Bank-feed TOTALS | They're *consumers* of the access layer, not auditors of it — and they ARE one of the connections |
| Credit freezes (Experian etc.) | Lock NEW credit | Do nothing about EXISTING data pipes |
| Password managers | Credential vaults | Track logins, not API tokens/aggregator connections |
| spendandinvest/ilura blogs | Per-bank revoke guides | Pure editorial, zero product — the BillCreep pattern AGAIN |
| AITrail (2026-02-28, this repo) | AI-tool data footprint | Conversations/files shared with chatbots — not financial-account API access. Complementary: Drawbridge is AITrail's bank-shaped sibling |

**Not** a subscription tracker (explicitly banned space — and correctly so: revoking access ≠ canceling billing; most connected apps charge nothing, which is exactly why nobody audits them). **Not** AccountTrail (sign-up metadata). **Not** BillDelta (fee anatomy inside bills). **Not** UnlockMe (credential lockouts). Drawbridge owns one moment: **"wait — who has access to my bank?"**

## Business Model

- **Free forever**: full guided Scan + per-bank revoke paths + 3 risk lookups/mo + public app-risk database (SEO magnets: "does [app] sell your bank data", "how to disconnect [app] from Chase" — searches owned today by weak blogs). Census density IS the dataset → free tier is the moat (PityTrack/InReview/BillDelta pattern).
- **Drawbridge Watch — $5/mo or $39/yr**: new-connection alerts, quarterly re-audit with diff, dead-app radar, unlimited risk lookups, household mode (5 members). Priced below one cash-advance ACH surprise.
- **One-time Panic Pass — $9**: full audit + guided revocation of everything + PDF evidence pack. For the news-cycle visitors who arrive scared and leave clean (episodic pricing for episodic fear — NameSync/Reinstated model).
- **Year-2 B2B**: anonymized connection-intelligence for credit unions/banks ("your customers have 11 fintech connections each; 3 are dead companies — here's the retention play") + employer financial-wellness licensing ($1–2/employee/yr, FlexClock's HR pattern).
- **NEVER**: affiliate revenue from fintechs, "recommended apps," or selling exposure data. The audit's integrity is the entire brand — one sponsored placement kills it.

### TAM / SOM

150M Plaid-connected consumers; 85% of Americans link accounts to apps. Even the paranoid sliver is huge: Year-1 SOM 50K free scans → 6% paid ≈ 3K Watch + 4K Panic Passes ≈ **$190K ARR**, near-zero CAC (every AI-finance launch, fintech breach, and dead-app story is a weekly GTM event; reply-guy every "I linked my bank to Claude and now I'm freaked" thread — there were thousands this week alone).

### Solo MVP (4–6 weeks)

Next.js PWA + Supabase · Claude vision for screenshot/email ingest (Plaid Portal exports, bank Connected Apps screens, confirmation emails) · per-bank revoke-path dataset (curated, cited, community-corrected — start with top 15 US banks + Plaid Portal) · app-risk database seeded from public breach registries, privacy policies (LLM-extracted), and fintech-shutdown trackers · SES inbound email · OneSignal alerts · weekly SSG app-risk pages. No credentials ever requested, no Plaid API integration needed for v1 — **Drawbridge audits connections without being one** (the trust pitch; BillDelta's no-credentials posture applied to access).

## Design (ui-ux-pro-max)

**"Bank vault at midnight meets security terminal."**

- **Palette**: vault ink `#0A0E14`, steel panel `#141B26`, bridge amber `#FFB454` (caution/reads), money red `#E5484D` (moves/dead), safe green `#3FB950` (revoked/minimal), cream `#F2EDE2` text
- **Type**: Fraunces display (headlines, verdict stamps) · Inter (prose) · JetBrains Mono (every count, date, score, last-4)
- **Signature components**: the Drawbridge hero — a literal bridge graphic whose angle = your Exposure Score (starts lowered: the uncomfortable truth; animates raising as you revoke); verdict-stamped connection rows (🔴 MOVES MONEY / 💀 DEAD APP); sticky scan-progress rail; revocation wizard as a bank-branded step checklist with confirm-checkboxes; thermal-receipt Scan Card ("23 apps. 4 can move it. 2 are dead.")
- **Voice**: the calm security engineer — "here's what's connected, here's what it can see, here's how to cut it, here's what not to do." Never fear-mongering copy; the facts are scary enough. Every screen ends in ONE action: Scan, Revoke, or Watch.
- Dark-mode native (people audit their finances at 11pm after a news cycle), mobile-first, keyboard-accessible, empty/loading/error states covered.

## Sources

- X/Twitter via techtwitter.com trending (Nov 5–6, 2026): @claudeai Personal Finance launch = top story; GPT-6 Cyber security model same day (security anxiety week)
- daily.dev community aggregation (Nov 6, 2026): 75% skeptical / 15% mixed / 10% positive across 163 X comments
- x.com/claudeai/status/2118403114890137895 (launch tweet); zdnet.com, firstpost.com, testingcatalog.com (Nov 5–6: Plaid read-only, 16 banks, 24 months of transactions, "does not ask for or see a bank password")
- decrypt.co (Nov 5, 2026): Pompliano accuses Anthropic of copying Silvia — competitors circling the same fear
- support-my.plaid.com: Portal self-admittedly incomplete ("not all… supported or discoverable"); privacy-request-form fallback
- spendandinvest.com (2026): per-bank Plaid revocation maze guide — "Citi does not have a single Connected Apps screen"
- r/cashadvanceapps (Apr 21, 2026): users discovering my.plaid.com to fight ACH pulls
- iluratechnology.com (Nov 1, 2026): "the forgotten connection… quietly reading your checking account ever since"
- coinlaw.io / axis-intelligence.com (May–Jul 2026): Plaid 500M+ connections, 8,000+ apps, 12,000+ institutions, $546M ARR
- voxbooster.com (Sep 4, 2026): 85% of Americans connect bank accounts to apps
- filewiseapp.com (Aug 14, 2026): 78% fintech usage (Plaid Fintech Effect)
- everybodylovesyourmoney.com / newsbreak (May 14, 2026): 2026 "API Security Lock" — banks cutting data sharing, connections breaking silently
- valueaddvc.com (Oct 1, 2026): Plaid IPO consideration, $8B valuation — the access layer is going public while consumers can't see it
