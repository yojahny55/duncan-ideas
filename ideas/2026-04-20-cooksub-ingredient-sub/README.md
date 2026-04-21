# CookSub — AI Ingredient Substitution Engine

## The Problem

You're mid-recipe and don't have buttermilk. Or your guest is vegan and the recipe calls for eggs. Or you're out of brown sugar. You Google "substitute for buttermilk" and get a blog post with 15 ads, a life story about someone's grandmother, and a generic answer buried in paragraph 6.

What you actually need: **one exact substitution, with ratios, right now.**

Existing recipe apps help you *find* recipes. Allergy apps tell you what to *avoid*. Nobody owns the "I'm cooking and need to swap an ingredient RIGHT NOW" problem.

## Target Users

- **Home cooks** (95M+ US adults cook at home regularly)
- **Allergy/diet restricted** (32M Americans with food allergies, 15M+ vegan/vegetarian)
- **Last-minute cooks** who don't plan grocery trips around every recipe
- **Bakers** where exact substitutions matter most (chemistry-sensitive)

## Proposed Solution

**CookSub** is a substitution-first cooking companion. Not recipes. Not meal planning. Just the answer to "what can I use instead of X?"

### Core Experience
1. **Quick Sub** — Type or speak an ingredient → instant substitution with exact ratios
2. **Recipe Rescue** — Paste a recipe URL or list ingredients → get ALL viable substitutions at once
3. **Diet Mode** — Toggle vegan/keto/gluten-free/nut-free → see only diet-compliant subs
4. **Pantry Mode** — Enter what you HAVE → CookSub tells you which recipe ingredients can be swapped with your pantry

### Key Features
- **500+ ingredient substitutions** with ratio adjustments (not just "use yogurt" — "use ¾ cup plain yogurt + ¼ tsp baking soda per 1 cup buttermilk")
- **Baking-specific chemistry** — flags when a sub affects texture/rise/structure with severity ratings
- **Multi-sub chains** — "No eggs AND no flax? Try: 3 tbsp aquafaba per egg"
- **Taste impact scores** — 🟢 Seamless / 🟡 Noticeable / 🟠 Different but works / 🔴 Last resort
- **Allergy & diet profiles** — set once, auto-filter every substitution
- **Shopping list** — "You need X for the sub. Add to list?"
- **Community ratings** — "847 bakers verified: this sub works for pancakes, NOT for meringue"
- **Voice-first** — hands dirty? Just ask

## Market Research

### Why Now
- 32M Americans have food allergies (up 50% since 1990s)
- 15M+ US vegans/vegetarians, growing 300% in 15 years
- Inflation driving "cook with what you have" behavior
- Smart speakers in 100M+ US homes enable voice-first cooking tools

### Competitors
| Tool | What it does | Gap |
|------|-------------|-----|
| Google | Generic "substitute for X" results | Ads, life stories, inconsistent quality |
| Allrecipes | Has some subs buried in articles | Not real-time, not comprehensive |
| Whisk / Samsung Food | Recipe management | Substitutions are secondary, not the product |
| Alexa/Google Home | "Hey Google, substitute for..." | Shallow answers, no diet awareness |

**Nobody is substitution-first.** This is the "DuckDuckGo for cooking substitutions" — one job, done perfectly.

## Business Model

- **Free** — 10 substitutions/day, basic ingredients
- **Pro ($2.99/mo)** — Unlimited subs, baking chemistry mode, diet profiles, voice
- **Premium ($4.99/mo)** — Pantry mode, recipe rescue, shopping lists, community ratings
- **Family ($7.99/mo)** — Up to 6 profiles with different allergies/diets

## Technical Feasibility

- Substitution database: curated + community-verified (like Wikipedia model)
- Voice: Web Speech API + smart speaker skills
- Recipe parsing: existing NLP libraries (ingredient extraction is solved)
- PWA: works offline (cooking in a dead zone? still works)
- MVP scope: 500 ingredients, 3 diet modes, Quick Sub + Diet Mode only

## Differentiation

1. **Ratio-precise** — not "use applesauce instead of eggs" but "use ¼ cup unsweetened applesauce per egg; reduces binding, add ½ tsp baking powder if batter seems flat"
2. **Context-aware** — knows a sub works for pancakes but not meringue
3. **Diet-first** — not an afterthought toggle, the core architecture
4. **Speed** — zero-friction, one input, instant answer

## Name Ideas
- CookSub ✅
- SwapSpoon
- SubIt
- IngredientX

---

*Source: Web (Product Hunt, Reddit r/cooking, r/baking, r/vegan, food allergy statistics)*
*Date: 2026-04-20*
*By Duncan ⚔️*
