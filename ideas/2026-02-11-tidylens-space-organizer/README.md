# TidyLens - AI Space Organization Assistant

> Take a photo of any messy space. Get step-by-step instructions to organize it.

## Problem Statement

Decluttering and organizing spaces is overwhelming. People know they *should* clean their closet, garage, desk, or room, but the cognitive load of figuring out *where to start* creates friction that prevents them from ever beginning.

**Reddit Source:** [r/SomebodyMakeThis - An app idea to organize your space](https://www.reddit.com/r/SomebodyMakeThis/comments/1lxy80h/an_app_idea_to_organize_your_space/)

> "Would people be using an app where they can click a picture of their room, office, garden, desk, wardrobe or any other unorganised space and the app give steps to organize this space. The idea is to remove the cognitive load and the friction to start."

### The Real Pain Points:
- **Analysis paralysis** - "Where do I even begin?"
- **Lack of system** - No structured approach to decluttering
- **Motivation gap** - Hard to stay motivated without visible progress
- **No accountability** - Easy to quit halfway through
- **Lost time** - Hours wasted on inefficient organizing

## Target Users

1. **Busy professionals** - Want organized spaces but lack time/energy to plan
2. **ADHD individuals** - Struggle with executive function for large organizing tasks
3. **Moving/downsizing** - Need systematic help with major reorganization
4. **Marie Kondo fans** - Want guidance without hiring a professional organizer
5. **Parents** - Kids' rooms, playrooms, family spaces need constant organizing
6. **Small business owners** - Offices, storage rooms, workshops

## Proposed Solution

**TidyLens** uses AI vision to analyze photos of messy spaces and generates personalized, step-by-step organization plans.

### How It Works:
1. 📸 **Snap** - Take a photo of any space (closet, room, desk, garage)
2. 🔍 **Analyze** - AI identifies items, categories, and problem areas
3. 📋 **Plan** - Get a customized step-by-step action plan
4. ✅ **Execute** - Check off tasks with timed sessions
5. 📊 **Track** - See before/after progress and stay motivated

## Key Features

### Core Features
1. **AI Space Analysis** - Identify clutter categories, problem areas, and opportunities
2. **Step-by-Step Plans** - Broken into 15-30 minute actionable tasks
3. **Timed Declutter Sessions** - Pomodoro-style focus sessions with guidance
4. **Before/After Comparisons** - Visual progress tracking
5. **Smart Categorization** - Keep, donate, sell, trash recommendations

### Engagement Features
6. **Progress Streaks** - Daily/weekly organization goals
7. **Room-by-Room Projects** - Multi-day plans for larger spaces
8. **Sharing & Social** - Share transformations, get encouragement
9. **Donation Finder** - Locate nearby donation centers for items to give away
10. **Selling Integration** - Quick list items on marketplace apps

### Premium Features
11. **Professional Organizer Tips** - Category-specific expert advice
12. **Seasonal Reminders** - Prompted seasonal organizing (closet swaps, garage cleanouts)
13. **Family Mode** - Assign tasks to household members

## Technical Stack

### Frontend
- **React Native** (Expo) - Cross-platform mobile app
- **TailwindCSS/NativeWind** - Styling
- **React Navigation** - Navigation
- **Zustand** - State management

### Backend
- **Node.js/Express** or **Supabase** - API and auth
- **PostgreSQL** - Database
- **Redis** - Session caching

### AI/ML
- **OpenAI GPT-4 Vision** or **Claude Vision** - Image analysis
- **Custom prompts** - Space-specific organization expertise

### Infrastructure
- **AWS S3** - Image storage
- **Vercel/Railway** - Backend hosting
- **Expo EAS** - App builds and distribution

## Monetization Strategy

### Freemium Model
- **Free Tier:**
  - 3 space analyses per month
  - Basic step-by-step plans
  - Before/after tracking

- **Pro ($7.99/month):**
  - Unlimited space analyses
  - Timed session mode
  - Donation center finder
  - Progress analytics
  - Ad-free experience

- **Family ($12.99/month):**
  - Everything in Pro
  - Up to 5 family members
  - Shared household projects
  - Task assignments

### Additional Revenue
- **Affiliate partnerships** - Storage solutions, containers, organization products
- **Premium content** - Expert organizer video courses
- **B2B** - Property managers, Airbnb hosts, staging companies

## Competition Analysis

| Competitor | Strength | Weakness | TidyLens Advantage |
|------------|----------|----------|-------------------|
| **Sortly** | Great inventory tracking | No AI analysis, no organization guidance | AI-powered action plans |
| **Tody** | Cleaning schedules | Not focused on decluttering | Photo-based analysis |
| **Home Routines** | Habit tracking | Generic, not personalized | Customized per-space plans |
| **Clutterless** | Motivation tips | Manual categorization | Automatic AI categorization |
| **Professional Organizers** | Expert guidance | $50-150/hour | Affordable AI alternative |

## Why This Will Work

### 1. **Validated Demand**
The KonMari method book sold 13M+ copies. Professional organizers have 6-month waiting lists. The Home Edit Netflix show was a massive hit. People want help organizing.

### 2. **AI Timing**
Vision models are now good enough to analyze spaces accurately. This wasn't possible 2 years ago.

### 3. **Low Friction Entry**
Just take a photo - no complex setup, no data entry. Instant value.

### 4. **Emotional Payoff**
Before/after transformations are inherently satisfying and shareable. Built-in virality.

### 5. **Recurring Need**
Spaces get messy again. Seasonal changes. Moving. New purchases. Ongoing engagement.

### 6. **Expansion Potential**
- Partner with storage product brands
- Add smart home integration (inventory what you own)
- Enterprise: office space optimization

---

## Prototype

See `prototype/` folder for the interactive web prototype demonstrating the core flow.

**Created:** February 11, 2026  
**Source:** Reddit (r/SomebodyMakeThis)
