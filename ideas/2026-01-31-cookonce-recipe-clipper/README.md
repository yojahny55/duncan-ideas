# CookOnce - Offline-First Minimalist Recipe Clipper

> *Just the recipe. Nothing else.*

## 🎯 Problem Statement

Recipe websites have become unbearable. Users are frustrated by:

- **Life stories before recipes** - Nobody cares about Karen's trip to Tuscany before making pasta
- **Intrusive ads and popups** - Auto-playing videos, newsletter modals, cookie banners
- **SEO-driven bloat** - 2000 words of fluff before ingredients
- **Subscription fatigue** - Most recipe apps charge monthly fees
- **No offline access** - Can't cook without internet

### Reddit Sources (High Frustration Evidence)

1. **[r/SaaS - 9,300+ "I wish there was an app" analysis](https://www.reddit.com/r/SaaS/comments/1q5lfur/i_analyzed_9300_i_wish_there_was_an_app_for_this/)** - Cooking & Recipes has **223 avg post length** (highest frustration), users want "ultra-minimalist, high-speed tools that just show the ingredients"

2. **[r/EatCheapAndHealthy - Recipe sites WITHOUT ads](https://www.reddit.com/r/EatCheapAndHealthy/comments/18o4lla/are_there_any_recipe_websites_without_annoying/)** - "I love 'Just the Recipe.' It filters out all the junk... Karen's life story that you couldn't give a shit less about"

3. **[r/webdev - App for people who can't stand recipe site bloat](https://www.reddit.com/r/webdev/comments/1g7el30/i_built_an_app_for_people_who_like_to_cook_but/)** - "I'm really frustrated with how recipe sites have become so unnecessarily long just to meet SEO standards"

4. **[r/Cooking - Recipe keeper with no recurring fee](https://www.reddit.com/r/Cooking/comments/19c9ryh/recipe_keeper_app_with_no_recurring_fee/)** - Users seeking alternatives to subscription-based apps

5. **Anti-Cloud Trend** - 7% of all app requests (640+ posts) specifically want offline-first, privacy-focused tools due to "subscription fatigue"

## 👥 Target Users

### Primary
- **Home cooks** frustrated with recipe website bloat
- **Budget-conscious users** who don't want another subscription
- **Privacy-conscious users** who want local-only storage
- **Meal preppers** who need quick access to recipes while cooking

### Secondary
- **Food bloggers** wanting a clean way to share recipes
- **Families** passing down recipes across generations
- **Travelers/campers** who need offline recipe access

## 💡 Proposed Solution

**CookOnce** - A Progressive Web App (PWA) that:

1. **Clips recipes instantly** - Paste any recipe URL, AI extracts just ingredients + steps
2. **Works 100% offline** - All data stored locally, no account needed
3. **Zero ads, no subscriptions** - One-time purchase or free with limits
4. **Beautiful minimal UI** - Focused on readability while cooking
5. **Cook Mode** - Keeps screen on, large text, step-by-step navigation

## ✨ Key Features

### Core (MVP)
1. **Smart Recipe Import** - Paste URL → Extracts recipe automatically
2. **Manual Recipe Entry** - Add your own recipes with structured format
3. **Offline-First Storage** - IndexedDB, works without internet
4. **Cook Mode** - Large text, step navigation, screen wake lock
5. **Search & Filter** - Find recipes by name, ingredient, tag

### Enhanced
6. **Smart Scaling** - Halve or double recipes with one tap
7. **Unit Conversion** - Metric ↔ Imperial toggle
8. **Tags & Categories** - Organize by cuisine, meal type, difficulty
9. **Grocery List** - Auto-generate shopping list from recipes
10. **Export/Import** - JSON backup, share with friends

### Future
- Browser extension for one-click save
- Voice commands while cooking
- Meal planning calendar
- Nutrition info extraction

## 🛠 Technical Stack

### Frontend
- **Vanilla JS + HTML5 + CSS3** - No framework bloat (ironic, right?)
- **PWA** - Service worker for offline, installable
- **IndexedDB** - Local recipe storage via Dexie.js
- **Wake Lock API** - Keep screen on during Cook Mode

### Backend (Optional)
- **Serverless functions** (Cloudflare Workers/Vercel Edge) for recipe extraction
- Or client-side extraction using DOM parsing

### Deployment
- **Vercel/Netlify** - Static hosting with edge functions
- **GitHub Pages** - For pure static version

## 💰 Monetization Strategy

### Freemium Model
- **Free tier**: 25 recipes, basic features
- **Pro (one-time $9.99)**: Unlimited recipes, grocery lists, export
- **No subscriptions** - Key differentiator

### Alternative: Donation-ware
- Fully free, optional tip jar
- GitHub Sponsors for sustainability

## 🏆 Competition Analysis

| App | Pros | Cons | Our Edge |
|-----|------|------|----------|
| **Paprika** | Great import, scaling | $5/mo subscription, not offline-first | One-time payment, truly offline |
| **Just the Recipe** | Simple extraction | Web-only, doesn't save recipes | Full recipe management |
| **Mealime** | Meal planning | Subscription, limited customization | Privacy-first, no account |
| **Copy Me That** | Good import | Clunky UI, ads in free tier | Modern, minimal design |
| **Notion** | Flexible | Overkill, requires internet | Purpose-built for cooking |

## 🚀 Why This Will Work

1. **Proven Pain Point** - 223 avg post length shows deep frustration; this isn't a nice-to-have
2. **Anti-Subscription Trend** - 7% of all app requests want offline-first, no recurring fees
3. **Clear Differentiator** - Truly offline, truly minimal, truly one-time
4. **Low Dev Cost** - PWA with vanilla JS, can MVP in a weekend
5. **Word-of-Mouth Potential** - Recipe-sharers will spread it
6. **SEO Opportunity** - "Recipe clipper no ads" has frustrated searchers
7. **Expansion Path** - Browser extension, mobile app, meal planning

## 📁 Prototype

See `/prototype` folder for a working demo:
- `index.html` - Main app structure
- `style.css` - Design system and styles
- `app.js` - Full interactivity

---

*Generated: January 31, 2026*
*Source: Reddit research + Neven.app data analysis*
