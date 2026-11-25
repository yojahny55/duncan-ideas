# GatePass 🎟️ — The Universal Event Ticket Vault

> "You already paid for the game. You shouldn't need five apps, two logins, and a working signal just to get in." Forward every ticket email to one address — GatePass extracts the QR, the seat, and the countdown, stores it offline, and gives you one high-contrast "show the code" screen that works for every event you'll ever attend.

**Date:** 2026-11-25
**Source:** Reddit (r/complainaboutanything, r/mildlyinfuriating, r/PetPeeves, r/steelers, r/ScotlandRugby, r/CalgaryFlames, r/NPBtickets, r/erastourtickets, r/ManchesterUnited)
**Category:** Consumer / Events / Anti-app-fatigue
**Status:** Idea documented + interactive prototype

---

## 1. The Spark — "I Have to Download an App Just to Use What I Bought"

A recurring, high-sentiment Reddit theme (fresh threads into Oct–Nov 2026): **simple, one-off actions are being gated behind dedicated apps**, and event ticketing is where the pain hits hardest:

- **r/complainaboutanything, Oct 12, 2026 (101 pts):** *"The worst example was Major League Baseball. In order to scan a ticket, you have to download the MLB app… and go through the usual security song and dance… all of that just to go to a GD baseball game that I've already paid for. Every. Single. Business."*
- **r/mildlyinfuriating (3,484 pts):** *"Even if you want to park somewhere you need to download some shitty app you'll only use once, or you get charged a fee."* — the app-gate fatigue is a top-tier rage genre.
- **r/PetPeeves, Jul 7, 2026:** *"Websites constantly asking you to download their app"* — even CVS delivery tracking keeps nagging instead of just showing status.
- **r/PetPeeves, Nov 26, 2025:** *"I have so many unnecessary apps that I've only used once."*
- **r/steelers, Oct 14, 2026 (Steelers in Paris):** *"I purchased way back in July, and as of this week haven't received any update… I'm getting a little [nervous]."* — ticket never appeared in the app.
- **r/ScotlandRugby, Feb 3, 2026:** bought Six Nations tickets; *"they're not showing up in the Scottish rugby app."*
- **r/CalgaryFlames, Dec 19, 2025:** bought tickets for visiting dad; *"it says add to Google Wallet and it doesn't show a barcode."*
- **r/NPBtickets, Mar 1, 2025:** fan with **5 games across different Japanese stadiums, bought from different outlets weeks ahead** — posts a personal tip because nothing exists to centralize e-tickets.
- **r/erastourtickets:** AXS uses **rotating dynamic QR codes** — the code literally changes, so a screenshot doesn't work.
- **r/ManchesterUnited:** *"Can't download until a few hours before kick-off."* — release timing varies per league/venue, and nobody tells you when the code appears.

**The pattern:** your right of entry to a $200 event lives inside the least reliable, least-used app on your phone — the venue's app. On game day it must exist, be logged in, be updated, and the QR must have been released. There is **no universal, offline, high-contrast "show me the code" surface** for anything you've bought. And the meta-complaint — "stop making me download an app for everything" — is a standing 3k+ point rage thread, meaning the market is actively primed for a *one-app-to-replace-twenty-single-use-apps* wedge.

## 2. Problem Statement

Event ticket access is **fragmented, app-gated, and timing-opaque**:

1. **THE APP ZOO** — every venue, league, and ticketing platform wants you in *its* app. A family doing sports + concerts + theater in a year touches 8–15 single-use apps, most deleted within weeks.
2. **THE BURIED CODE** — tickets live in spam-fold confirmation emails, in one of 3 vendor apps, or in Google/Apple Wallet that "doesn't show a barcode." On game day, digging through a half-dead data connection in a parking garage is the actual experience.
3. **THE RELEASE RACKET** — QRs release at unpredictable times (instant, 48h out, 2h out, "a few hours before kick-off"). No system tells you *when your code appears*, so people panic, post to subreddits, and call support.
4. **THE SOTHEBY'S SCREENSHOT** — dynamic/rotating QR codes (AXS, many stadiums) make screenshot-and-forget impossible; you must be inside the source app with a live session.
5. **THE FLYING TIX** — tickets bought for other people (dad visiting, partner, friend) live in *your* account and the transfer process is a different puzzle per platform.

**The one-liner:** nobody gives you one offline, always-available surface that answers *"where's my code, when does it show up, and how does my dad get in."*

## 3. Target Users

| Segment | Size (approx) | Pain |
|---|---|---|
| Regular live-event fans (sports/concerts, 2+ events/yr) | 100M+ in US/EU; ~$80B+ global ticketing | App zoo, buried codes, release panic |
| Traveling fans (cross-region/league, intl games) | Tens of millions | Foreign ticketing platforms (Passolig, NPB, Ticketmaster France), zero local apps on a data plan |
| Gifters / families (tickets for parents, partners, kids) | Enormous | Transfers, "which account is it in?", dad-without-smartphone problem |
| Theater/opera/broadway audiences | Huge in US/UK | QR releases hours before curtain; app vs. email vs. will-call confusion |
| Power users / digital minimalists | Growing | "I have so many unnecessary apps" — one vault to replace twenty |

Beachhead: **US/North American live-sports + concert fans who buy 4–20 events/year** — the cohort with the most apps, the most dynamic QRs, and the loudest game-day rage threads.

## 4. Proposed Solution — GatePass

**Tagline:** *"One screen. Every event. No app zoo."*

### Core flow

1. **THE FORWARD (10 seconds, free wedge).** User adds `you@gatepass.app` to ticket purchases and forwards every confirmation email to it (or takes a photo of the PDF/QR). GatePass parses: **event name, date/time, venue, section/row/seat, and the QR/barcode image** — including dynamic-QR tickets, where it stores the *source session link + app deep link* alongside the static fallback code.
2. **THE VAULT (the home screen).** Every upcoming event as one card: event, time, venue, seat, and a **status chip**:
   - 🟢 **CODE READY** — QR extracted and stored offline, full-screen display available now
   - 🟡 **RELEASES SOON** — venue holds the QR (48h/2h rule detected); GatePass *watches and pings the moment it's out*
   - 🔵 **LIVE SESSION** — dynamic-QR ticket; one tap opens the source app deep-linked straight to the ticket (best possible we can do without a platform partnership)
   - 🔴 **NEEDS YOU** — no code found; shows the exact next action (log in to venue app X, or call the box office)
3. **GAME DAY MODE (the signature screen).** A single swipe from the vault → **black background, huge high-contrast code, giant event name, seat info, auto-rotate, brightness pinned max.** Works fully offline. This is the 2% of the product people screenshot for Reddit.
4. **THE RADAR (release-watch engine).** Background job per ticket: polls the vendor page/app-link/MTA inbox for the code's release window, pushes *"Your Dodgers QR is live"* at the moment it appears. Kills the #1 game-day anxiety.
5. **SHARE THE SEAT (family/gifting).** Split an event to a family circle (up to 4 free, unlimited Pro): each person's phone gets the code in *their* vault. Dad doesn't need your iPhone, your login, or the MLB app.

### The honest constraint (and the brand)

We don't have API partnerships with every ticketing platform on day one. **Email is the universal interface every vendor already uses**, and photo-capture covers the rest. GatePass's honesty page: *"We can't always beat a dynamic QR — when we can't, we get you to the one screen that can, in two taps. Everything else lives with you, offline, forever."*

### What makes it defensible

- **Data gravity:** the vault is the place your tickets live. Every event added is switching cost.
- **The release radar needs watch-infra** (parsers per major platform: Ticketmaster, AXS, SeatGeek, Team apps) that compounds — each league/venue onboarded is a moat brick.
- **Trust + offline-first** is a real differentiator in a category where "the app needs internet" is the #1 game-day horror story.

## 5. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| App | **React Native + Expo** (iOS/Android), PWA companion for web vault | One codebase; QR deep-linking + push are first-class in RN |
| Email intake | Forward-to-address → **MTA + parse workers** (Node/Fastify on a VPS) | The wedge; no vendor APIs needed to start |
| QR/barcode | **ZBar + Apple VisionKit / ML Kit** (photo & PDF) → normalized code store; dynamic-QR tickets keep source deep link | Covers static + rotation cases honestly |
| Storage | **SQLite (WatermelonDB) on-device, encrypted (SQLCipher)** + optional E2E-encrypted cloud sync | Offline-first is the product |
| Release radar | Scheduler (BullMQ) + per-platform checkers (HTTP poll of account pages where cookies are user-provided; MTA watch; deep-link fallback) | The radar is the differentiator |
| Push | APNs/FCM (Expo Push) | "Your QR is live" is a push product moment |
| Billing | **Stripe** (pro tier) | Standard |
| Backend | Node 22 + Fastify + Postgres, single VPS (start), Fly.io or Hetzner | Solo-dev operable |
| Web | Next.js marketing + web vault (read) | SEO wedge: "how do I find my ticket for [event]" |

## 6. Monetization

| Tier | Price | Includes |
|---|---|---|
| **Free** | $0 | 3 events/year, 1 device, vault + game-day mode (the wedge that goes viral) |
| **GatePass Pro** | **$29/yr** (or $3.99/mo) | Unlimited events, release radar, Share-the-Seat family circles (4+), multi-device, priority parsing, PDF vault |
| **Pro Family** | $49/yr | 4 seats, shared vault, kids' tickets with their own profiles |

- **B2B (year 2+):** white-label "universal ticket card" for venues/leagues that want a fallback screen when *their* app fails at the gate; data feed on release-time patterns (aggregated) sold to ticketing platforms.
- **Unit economics:** live-event fans churn *up* (more events = more value). $29/yr undercuts one missed-concert re-booking fee. Target: 5% free→Pro conversion; CAC near-zero via organic Reddit/SEO rage threads.

## 7. Solo MVP (4–6 weeks)

1. **Wk 1–2:** Email forward intake + parser (TM/AXS/StubHub templates first), on-device vault (SQLite), event card UI with status chips.
2. **Wk 3:** Game Day Mode (full-screen high-contrast, offline, brightness pin, auto-rotate) + photo-capture of PDFs.
3. **Wk 4:** Release radar v1 (MTA watch + HTTP poll for top 5 platforms) + push.
4. **Wk 5:** Share-the-Seat v1 (2 seats, code share via E2E link) + Stripe Pro tier.
5. **Wk 6:** Polish, App Store/TestFlight, launch thread on r/MLB, r/NFL, r/Concerts + "I built the app that hates the MLB app" positioning.

**KPI to hit in 90 days:** 1k vaults created, 200+ codes scanned at gates (self-reported), 3% free→Pro, zero "couldn't get in" incidents attributed to GatePass.

## 8. Risks

- **Dynamic QRs** can't be fully solved without platform partnerships → mitigate with deep-link fast-path + honest "live session" chip (we get you to the right screen in 2 taps).
- **Ticketing platforms may block** polling → user-provided cookies, MTA watching, and deep links keep us off the adversarial path.
- **Wallet integration (Apple/Google)** could do this natively → they've had a decade and their "doesn't show a barcode" threads keep growing; our radar + family share + cross-platform vault are the gaps they won't fill.

## 9. Sources

- r/complainaboutanything — "EVERYONE makes you install an App. EVERYONE" (Oct 12, 2026): https://www.reddit.com/r/complainaboutanything/comments/1x48v9h/
- r/mildlyinfuriating — "No, I don't want to download the app" (Dec 2024, 3.4k pts): https://www.reddit.com/r/mildlyinfuriating/comments/1hfefgv/
- r/PetPeeves — "Websites constantly asking you to download their app" (Jul 7, 2026): https://www.reddit.com/r/PetPeeves/comments/1upwphj/
- r/PetPeeves — "Having to download an app for everything" (Nov 26, 2025): https://www.reddit.com/r/PetPeeves/comments/1p7m821/
- r/steelers — Paris game tickets never arrived in app (Oct 14, 2026): https://www.reddit.com/r/steelers/comments/
- r/ScotlandRugby — tickets not showing in app (Feb 3, 2026)
- r/CalgaryFlames — "add to Google Wallet" no barcode; dad visiting (Dec 19, 2025)
- r/NPBtickets — multi-venue Japan e-ticket access tip (Mar 1, 2025)
- r/erastourtickets — AXS dynamic QR confusion (Aug 2024)
- r/ManchesterUnited — "can't download until a few hours before kick-off" (Oct 2024)
