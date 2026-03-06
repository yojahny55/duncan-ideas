# ProofPost - Turn Reviews Into Social Content

**Date:** March 5, 2026  
**Source:** Web Research (Reddit r/AppIdeas, Product Hunt gap analysis)  
**Category:** Marketing / Small Business Tools

## Problem Statement

Small businesses have hundreds of 5-star reviews sitting unused on Google, Yelp, and Facebook. These reviews are **pure marketing gold** — authentic social proof from real customers — but they're going to waste because:

1. **Time poverty**: Small business owners are busy running their business, not making Instagram posts
2. **Design skills gap**: They don't know how to create professional-looking graphics
3. **Tool cost**: Existing solutions like NiceJob ($75/mo) and Broadly ($200+/mo) are too expensive for solo operators
4. **Manual effort**: Copying quotes, opening Canva, picking fonts... it never happens

**The result:** A restaurant with 400 five-star reviews has zero of them on their Instagram. A salon owner knows she should share customer love but hasn't posted in 3 months.

## Research Evidence

From Reddit r/AppIdeas analysis (749+ scraped problems):
> "A tool that turns customer reviews into social media posts automatically. Restaurants and local businesses have hundreds of 5-star reviews doing nothing. Pull the best quotes, generate branded graphics, schedule them. 8 threads from business owners saying they know they should do this but never have time."

Current market landscape:
- **NiceJob**: $75/mo — "Best for Social Proof" but expensive for solo operators
- **Broadly**: $200+/mo — bundled with website management, overkill
- **Flockler**: $110-325/mo — enterprise-focused, overwhelming
- **Manual Canva**: Free but requires design skills and 30+ minutes per post

**The gap:** Nothing affordable (<$20/mo) that does ONE thing well — turn reviews into shareable content with zero effort.

## Target Users

1. **Local restaurants** — Most have 100+ Google reviews, zero on Instagram
2. **Hair salons and barbershops** — Personal service, great review culture
3. **Auto repair shops** — Trust-based business where reviews matter
4. **Dentists and medical practices** — Professional services with review fatigue
5. **Fitness studios** — Community-driven, social-proof sensitive

**Ideal customer:** Solo owner or small team (1-5 employees), has reviews but no marketing person, wants "set and forget" content.

## Proposed Solution

**ProofPost** — The simplest way to turn your reviews into social content.

### How It Works

1. **Connect** — Link your Google Business Profile (one OAuth click)
2. **Pick** — We auto-surface your best quotes; you approve or tweak
3. **Style** — Choose from 10 professional templates that match your brand colors
4. **Post** — One-click publish to Instagram and Facebook, or download to share anywhere

### Key Differentiators

| Feature | ProofPost | NiceJob ($75) | Canva (Manual) |
|---------|-----------|---------------|----------------|
| Price | $9/mo | $75/mo | Free |
| Auto-fetch reviews | ✅ | ✅ | ❌ |
| Quote extraction | ✅ AI-powered | ✅ | ❌ Manual |
| Branded templates | ✅ | ✅ | ✅ but DIY |
| Time to post | ~30 seconds | ~2 minutes | ~30 minutes |
| Learning curve | Zero | Low | Medium |

## Key Features

### MVP (v1.0)

1. **Google Business Connect**
   - OAuth integration with Google Business Profile
   - Auto-import reviews with 4-5 stars
   - Weekly sync for new reviews

2. **Smart Quote Extraction**
   - AI identifies the most impactful sentences from each review
   - Filters out non-visual content ("my friend recommended them")
   - Suggests multiple quote options per review

3. **Template Library**
   - 10 professional, minimal templates
   - Auto-apply brand colors from logo or manual input
   - Works for any industry (not just restaurants)

4. **One-Click Export**
   - Download as PNG/JPG (Instagram-ready 1080x1080)
   - Direct share to Instagram/Facebook
   - Batch export for scheduling in other tools

### Future Features (v2.0+)

- **Auto-posting** with scheduling
- **Yelp and TripAdvisor** integration
- **Video templates** (review quotes as short videos)
- **QR code generator** linking to leave-a-review page
- **Analytics** — which review posts perform best

## Business Model

**Freemium with simple upgrade:**

- **Free tier**: 3 posts/month, watermark, download only
- **Pro ($9/mo)**: Unlimited posts, no watermark, direct Instagram/Facebook publish
- **Business ($29/mo)**: Multi-location, team access, video templates

**Why it works:**
- Low price = impulse purchase for small business owners
- Free tier demonstrates value before commitment
- Simple pricing avoids decision paralysis

## Technical Architecture

```
┌─────────────────┐     ┌──────────────────┐
│ Google Business │────▶│  Review Ingestion │
│   Profile API   │     │     Service       │
└─────────────────┘     └────────┬─────────┘
                                 │
                                 ▼
                        ┌──────────────────┐
                        │  Quote Extractor  │
                        │    (AI/NLP)       │
                        └────────┬─────────┘
                                 │
                                 ▼
┌─────────────────┐     ┌──────────────────┐
│  Template Engine │◀───│  Image Generator  │
│   (Branded)     │     │   (Canvas API)    │
└─────────────────┘     └────────┬─────────┘
                                 │
                                 ▼
                        ┌──────────────────┐
                        │  Social Publisher │
                        │ (Instagram/FB API)│
                        └──────────────────┘
```

**Stack:**
- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Node.js or Python FastAPI
- **Image generation**: HTML canvas → PNG or server-side rendering
- **AI**: OpenAI API for quote extraction (cheap per-call)
- **Auth**: Clerk or Auth0
- **Database**: Supabase (simple, affordable)

## Competitive Landscape

| Tool | Price | Focus | Weakness |
|------|-------|-------|----------|
| NiceJob | $75/mo | Full review marketing | Expensive for solos |
| Birdeye | $299/mo | Enterprise reputation | Way overkill |
| Podium | Custom | SMS + reviews | Sales-heavy, complex |
| **ProofPost** | $9/mo | Just social content | Focused, affordable |

**Positioning:** "We don't replace your review management — we just help you use the reviews you already have."

## Why Now?

1. **Review fatigue**: Businesses collected reviews during 2020-2024 COVID push, now sitting unused
2. **Social proof era**: 93% of consumers say online reviews impact purchasing decisions
3. **AI cost collapse**: Quote extraction via AI is now pennies per review
4. **Instagram visual standards**: Everyone expects professional-looking posts

## Success Metrics

- **Activation**: % of signups who create first post within 7 days
- **Retention**: Monthly active users after 30/60/90 days
- **Conversion**: Free → paid upgrade rate
- **NPS**: Would you recommend ProofPost to another business owner?

## Prototype

See `prototype/` folder for interactive HTML/CSS/JS demo.

---

*Researched and documented by Duncan ⚔️*
