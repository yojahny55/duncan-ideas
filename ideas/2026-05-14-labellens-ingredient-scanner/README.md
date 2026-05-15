# LabelLens 🔬 — AI Ingredient Label Scanner

**Scan any product label. Know what you're actually consuming.**

Point your camera at any food, cosmetic, or cleaning product ingredient list. LabelLens instantly breaks down every ingredient into plain English — what it is, safety rating, why it's there, and whether it's banned in other countries.

## Problem

70% of consumers don't understand ingredient labels. Products marketed as "natural" and "clean" contain synthetic chemicals with 20-letter names. The EU bans 1,600+ cosmetic ingredients; the US bans 11. Parents feed their kids foods with additives outlawed in 30+ countries. Nobody has time to Google 40 ingredients per product.

Current solutions:
- **Yuka** — barcode scanner, limited database, France-centric, paywalled
- **Think Dirty** — cosmetics only, outdated UI, limited ingredients
- **INCI Decoder** — web-only, no scanning, academic tone, no safety ratings
- **EWG Healthy Living** — US-focused, slow, limited product coverage

**Nobody owns the real-time camera-first ingredient scanning position with global regulatory comparison.**

## Target Users

- **Health-conscious parents** (33M US households) — "Is this safe for my kids?"
- **Allergy sufferers** (32M US adults) — hidden ingredients, cross-contamination flags
- **Clean beauty enthusiasts** (40M+ US consumers) — decoding INCI names
- **Immigrants/expats** — comparing US ingredients vs home country standards
- **Pregnant women** (6M/year) — avoiding harmful substances
- **People with dietary restrictions** — vegan, halal, kosher, GF hidden sources

**Total addressable:** 150M+ US adults who read labels and don't understand them.

## Solution

Camera-first ingredient intelligence:

1. **Snap & Scan** — point camera at any ingredient list, OCR extracts all ingredients in real-time
2. **Instant Breakdown** — each ingredient gets a safety score (🟢 Safe → 🔴 Avoid), plain-English name, purpose, and origin
3. **Global Regulatory Map** — see which countries banned or restricted each ingredient (EU 🇪🇺, UK 🇬🇧, Japan 🇯🇵, Canada 🇨🇦, Australia 🇦🇺)
4. **Health Context** — personalized flags based on your profile (pregnant, allergic, diabetic, kid-feeding)
5. **Better Alternatives** — swipe to see similar products with cleaner ingredient lists
6. **Diet Filters** — vegan/vegetarian/halal/kosher/GF/keto flags for ambiguous ingredients (e.g., "natural flavors" = could be animal-derived)

## Key Features

### Core
- **Real-time camera OCR** — scan labels like scanning a QR code, instant results
- **Ingredient safety scores** — 5-level system (🟢🟡🟠🔴⚫) with confidence levels
- **Plain-English explanations** — "Sodium Lauryl Sulfate → a foaming agent derived from coconut oil, can irritate sensitive skin"
- **Global ban map** — ingredient banned in EU? Restricted in Japan? Flagged by Canada? See at a glance
- **Personal health profile** — set allergies, dietary restrictions, pregnancy status, kid ages for personalized alerts

### Smart Features
- **"Why is this here?"** — tap any ingredient to see its function (preservative, emulsifier, colorant, flavor enhancer)
- **Cumulative exposure tracker** — scan multiple products, see your daily intake of controversial additives
- **"Red Flag" summary** — instant one-line verdict: "⚠️ 3 controversial additives, 1 EU-banned ingredient, hidden sugar"
- **Brand comparison** — scan two similar products side-by-side, see which is cleaner
- **Offline mode** — core ingredient database works without internet (100K+ ingredients cached)

### Social & Community
- **Scan history** — every product you've ever scanned, searchable
- **Community notes** — see what others say about specific ingredients
- **Weekly digest** — "You scanned 12 products this week. 2 contained EU-banned additives"

## Market Research

| Competitor | Focus | Limitation | Price |
|-----------|-------|-----------|-------|
| Yuka | Food + cosmetics barcode | Limited DB, France-centric, no camera OCR | Free / $9.99/yr |
| Think Dirty | Cosmetics only | Outdated, narrow | Free / $4.99/mo |
| INCI Decoder | Cosmetics web lookup | No scanning, academic | Free |
| EWG Healthy Living | Food + cosmetics | Slow, US-only ratings | Free / $19.99/yr |
| CodeCheck | Multi-category | Poor UX, limited | Free / $4.99/mo |

**LabelLens differentiators:**
- Camera-first (not barcode-dependent — works on ANY label, including restaurant menus, bulk bins, international products)
- Global regulatory comparison (not US-only)
- Personalized health context (not generic ratings)
- Cumulative exposure tracking (not one-product-at-a-time)
- Works on food AND cosmetics AND cleaning products AND supplements

## Business Model

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 10 scans/month, basic safety scores, top allergen flags |
| **Clear** | $3.99/mo | Unlimited scans, global regulatory map, diet filters, scan history |
| **Guardian** | $7.99/mo | Everything in Clear + cumulative exposure tracker, brand comparison, personalized alerts, weekly digest, offline mode |
| **Family** | $12.99/mo | Up to 6 family members, kid-specific safety flags, shared scan history |

**Revenue projection:** 1M free users → 8% conversion → 80K paid → avg $6/mo = $480K MRR at scale

## Technical Feasibility

- **OCR:** Apple Vision Framework / Google ML Kit (on-device, fast, offline)
- **Ingredient database:** Start with FDA GRAS list + EU CosIng + EWG + PubChem (100K+ ingredients)
- **Safety ratings:** Aggregate from EFSA, FDA, Health Canada, FSANZ, Japanese MHLW
- **AI explanations:** LLM-powered plain-English descriptions with medical accuracy guardrails
- **Offline:** Core 100K ingredient database = ~50MB cached on device

## Monetization Extras

- **Brand partnerships** — clean brands sponsor "Better Alternatives" placement ($0.50-2.00 CPC)
- **API access** — let other apps query ingredient safety ($0.001/query)
- **Enterprise** — food manufacturers validate their labels pre-launch ($299/mo)
- **Data insights** — anonymized trend data for food industry research

## Why Now

- EU continues tightening food/cosmetic regulations (2025-2026 round of bans)
- "Ultra-processed food" awareness at all-time high (20M+ TikTok views/month)
- California Food Safety Act (2025) banning Red 40, BHA, BKK — consumers waking up
- 4 in 10 Americans now read ingredient labels, up from 2 in 10 five years ago
- Camera + OCR + on-device AI finally fast enough for real-time scanning experience
- GLP-1 users (15M+) becoming hyper-aware of what they consume

## Name Ideas

- **LabelLens** ✅ (our pick — camera metaphor, clear, memorable)
- IngredientIQ
- ScanSafe
- WhatTheLabel
- ClearList

---

*Source: Web research (YC RFS 2026, Product Hunt trends, FDA/EFSA databases)*
*Date: 2026-05-14*
