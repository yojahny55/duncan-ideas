# GuestBook — Digital Guest Guide for Your Home

## Problem Statement

When guests stay at your home (friends, family, Airbnb, house-sitters), they inevitably ask: "What's the WiFi password?" "Where are the towels?" "How does the shower work?" "What's a good pizza place nearby?" "Where do I put the trash?"

Hosts either:
- Repeat the same information to every guest (exhausting)
- Print a welcome binder that's instantly outdated
- Send a long text message that gets buried
- Just hope guests figure it out

**There's no dead-simple, beautiful tool to create a shareable digital guest guide for your home.** Airbnb has a host guide feature, but it's locked inside their platform and only for paying guests. For everyone else — friends crashing, family visiting, house-sitters — you're on your own.

## Target Users

- **Homeowners/renters** who host guests regularly (holidays, weekends, events)
- **Airbnb/VRBO hosts** who want a branded guest guide outside platform lock-in
- **House-sitters & pet-sitters** who need all the info in one place
- **New roommates** getting oriented
- **Event hosts** (weddings, parties with overnight guests)

**Market size:** 130M+ US households host overnight guests yearly. 7M+ Airbnb listings worldwide. 37M+ roommate households.

## Proposed Solution

**GuestBook** — create a beautiful, shareable digital guest guide for your home in 5 minutes. One link (or QR code) gives your guests everything they need:

- 📶 WiFi network & password (one-tap copy)
- 🏠 House rules (quiet hours, smoking, shoes off, etc.)
- 🚿 How-to guides (shower, thermostat, TV, appliances)
- 📍 Where to find stuff (towels, extra blankets, snacks, cleaning supplies)
- 🍕 Local recommendations (restaurants, coffee, groceries, pharmacy)
- 🚨 Emergency info (contacts, nearest hospital, vet, poison control)
- 🗑️ Checkout instructions (trash, keys, linens)
- 🐾 Pet care sheet (feeding, vet info, quirks)

Guests open the link on their phone — no app download needed. Clean, mobile-first design that works offline once loaded (PWA).

## Key Features

### For Hosts
- **Quick setup wizard** — fill in sections, skip what doesn't apply
- **Custom sections** — add anything unique to your home
- **Multiple guides** — different guides for different guest types (friends vs Airbnb vs house-sitter)
- **QR code generation** — print for the guest room fridge
- **Share link** — SMS, WhatsApp, AirDrop, or print the QR
- **Analytics** (optional) — see if your guest opened the guide
- **Templates** — pre-built for common scenarios (beach house, ski cabin, apartment)
- **Multi-language** — auto-translate for international guests

### For Guests
- **Mobile-first** — beautiful on any phone, no app needed
- **One-tap WiFi** — copy password instantly
- **Offline access** — PWA caches the guide for no-signal areas
- **Maps integration** — tap a recommendation to open in Maps
- **One-tap call** — emergency contacts are tappable

## Market Research

### Existing Solutions
- **Airbnb Host Guide** — locked to Airbnb platform, only for paid guests
- **Touch Stay** ($15-30/mo) — built for property managers, way too complex/corporate
- **Hostfully** ($49+/mo) — enterprise property management, not for personal use
- **Welcome binder (paper)** — outdated immediately, gets lost, can't be shared digitally
- **Notion/Google Doc templates** — ugly, not mobile-optimized, no interactive features

### Differentiation
- **Free for personal use** — no $30/mo property management tax
- **Beautiful by default** — not a spreadsheet or corporate portal
- **5-minute setup** — not a 2-hour template customization
- **Share anywhere** — not locked to a booking platform
- **Guest-first design** — optimized for the person reading it on their phone at 11pm

## Pricing

| Tier | Price | Features |
|-------|-------|----------|
| Free | $0 | 1 guide, basic sections, share link |
| Host | $4.99/mo | 5 guides, custom sections, QR codes, analytics, templates |
| Pro | $9.99/mo | Unlimited guides, multi-language, branding, API, team sharing |

**Why it works:** Free tier is genuinely useful for most people. Host tier is cheaper than one month of Touch Stay. Pro tier for Airbnb hosts with multiple properties.

## Technical Notes

- **Frontend:** React/Next.js PWA with offline caching
- **Backend:** Serverless (Vercel/Cloudflare), low operational cost
- **Storage:** JSON-based guide data, minimal database needs
- **QR codes:** Generated client-side via QR code library
- **Maps:** Apple Maps / Google Maps deep links
- **Translation:** Integration with DeepL or Google Translate API
- **Offline:** Service worker + IndexedDB for PWA

## Source

Reddit r/answers, r/SomebodyMakeThis, r/AirBnB_hosts — consistent complaints about guest orientation being a pain point with no simple consumer solution.

## Tags

`hosting`, `hospitality`, `sharing`, `home`, `guest-experience`, `pwa`, `mobile-first`
