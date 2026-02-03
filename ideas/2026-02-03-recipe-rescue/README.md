# 🍳 Recipe Rescue

> Strip bloated recipe sites down to what matters: ingredients and steps.

**Source:** Reddit Analysis (9,300+ "I wish there was an app" posts)  
**Date:** February 3, 2026  
**Category:** Cooking & Recipes (High Frustration Niche)

---

## Problem Statement

Modern recipe websites are **infuriating**. Users encounter:
- 2,000-word life stories before the actual recipe
- Aggressive pop-ups and newsletter prompts
- Auto-playing video ads that follow you down the page
- Buried recipe cards you can't find
- Portion sizes that don't match your needs
- No way to save recipes offline

**Reddit signals this is a HIGH frustration category:**
> "Users are angry about modern recipe sites being bloated with ads and 'backstories.' They want ultra-minimalist, high-speed tools that just show the ingredients."
> — Analysis of 9,300+ Reddit app requests

**Sources:**
- [r/SaaS: Analysis of 9,300+ "I wish there was an app" posts](https://www.reddit.com/r/SaaS/comments/1q5lfur/i_analyzed_9300_i_wish_there_was_an_app_for_this/)
- [r/software: Niche apps people wish existed](https://www.reddit.com/r/software/comments/1lzp0vp/what_are_some_very_niche_apps_or_tools_you_wish/)
- [r/SideProject: "I wish there was an app"](https://www.reddit.com/r/SideProject/comments/1ilyycg/whats_your_i_wish_there_was_an_app_for_that/)

---

## Target Users

1. **Home Cooks** — Frustrated with recipe site bloat
2. **Meal Preppers** — Need clean, scalable recipes
3. **Budget-Conscious Families** — Want shopping lists without fluff
4. **Privacy-Focused Users** — Part of the "anti-cloud" trend (7% of app requests want offline-first tools)
5. **ADHD Community** — High-signal niche that needs distraction-free interfaces

---

## Proposed Solution

**Recipe Rescue** is a minimalist web app that:
1. Accepts any recipe URL
2. Extracts ONLY the essential content (ingredients + steps)
3. Presents it in a clean, distraction-free interface
4. Allows portion scaling
5. Generates shopping lists
6. Works offline (PWA)

**Core principle:** Zero fluff. Just food.

---

## Key Features

### MVP (v1.0)
1. **URL Extraction** — Paste any recipe URL, get clean output
2. **Ingredients Panel** — Clear, checkable ingredient list
3. **Steps Panel** — Numbered, focused instructions
4. **Portion Scaler** — Adjust servings, auto-recalculate ingredients
5. **Timer Integration** — Tap any time mention to start a timer
6. **Dark/Light Mode** — Optimized for kitchen use (reduce glare)

### Future (v2.0+)
7. **Shopping List Export** — Copy to clipboard or export to common apps
8. **Recipe Library** — Save favorites locally (IndexedDB, no account needed)
9. **Offline PWA** — Cache extracted recipes for offline use
10. **Browser Extension** — One-click "Rescue this recipe" button

---

## Technical Stack

| Layer | Technology | Why |
|-------|------------|-----|
| **Frontend** | HTML5 + CSS3 + Vanilla JS | Fast, no build step, works everywhere |
| **Styling** | Custom CSS with design tokens | Clean, maintainable, accessible |
| **Recipe Extraction** | Recipe schema (JSON-LD) parsing | Most recipe sites use structured data |
| **Fallback Extraction** | Readability + heuristics | For sites without proper schema |
| **Offline** | Service Worker + IndexedDB | PWA capability |
| **Hosting** | Vercel / Netlify / GitHub Pages | Free, fast CDN |

### API Strategy
- Primary: Parse JSON-LD structured data (Recipe schema)
- Secondary: Use a lightweight proxy service (CORS issues)
- Tertiary: Browser extension bypasses CORS entirely

---

## Monetization Strategy

### Freemium Model
| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | Unlimited extractions, basic scaling, 10 saved recipes |
| **Pro** | $3.99/mo or $29/yr | Unlimited saves, shopping list export, browser extension, priority parsing |
| **Lifetime** | $49 one-time | Everything, forever (appeals to anti-subscription crowd) |

### Additional Revenue
- **API Access** — For developers building cooking apps ($0.001/extraction)
- **Affiliate Links** — Optional ingredient links (Amazon Fresh, Instacart)

---

## Competition Analysis

| Competitor | Strengths | Weaknesses | Our Advantage |
|------------|-----------|------------|---------------|
| **Copy Me That** | Good import, recipe management | Cluttered UI, requires account | Simpler, no account needed |
| **Paprika** | Powerful features, cross-platform | Paid app ($5), learning curve | Free web access, instant use |
| **Recipe Filter (extension)** | Browser-native | Chrome only, basic extraction | Works everywhere, better UI |
| **Just the Recipe** | Clean concept | Limited parsing, no scaling | Better extraction, more features |

---

## Why This Will Work

1. **High Pain, Clear Solution** — The frustration is documented and specific
2. **Anti-Bloat Trend** — 7% of all app requests want minimalist, offline-first tools
3. **Low Competition** — Existing solutions are either too complex or too limited
4. **Instant Value** — Users get value in < 10 seconds (paste URL → clean recipe)
5. **Viral Potential** — "OMG finally" reaction leads to shares
6. **Freemium Works Here** — Free tier is genuinely useful, Pro has clear value
7. **Technical Feasibility** — Recipe schema makes extraction reliable
8. **No Server Required** — Can run entirely client-side (low costs)

---

## Success Metrics

| Metric | Target (6 months) |
|--------|-------------------|
| Monthly Active Users | 10,000 |
| Recipes Extracted | 100,000 |
| Pro Conversions | 2% (200 users) |
| MRR | $800 |

---

## Next Steps

1. ✅ Build prototype (see `/prototype`)
2. ⬜ Add actual recipe extraction logic
3. ⬜ Test with 50+ recipe sites
4. ⬜ Add PWA manifest + service worker
5. ⬜ Launch on Product Hunt
6. ⬜ Build browser extension

---

*Built with 💚 by Duncan | Source: Reddit*
