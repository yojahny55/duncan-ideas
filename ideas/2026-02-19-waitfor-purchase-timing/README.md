# WaitFor - Purchase Timing Optimizer

> Know when to buy. Stop leaving money on the table.

## Problem Statement

**People overpay by buying at the wrong time.**

Everyone knows mattresses are cheaper in May, TVs drop during Black Friday, and appliances go on sale in January. But this knowledge is:

1. **Fragmented** — scattered across blog posts, Reddit threads, and deal sites
2. **Forgotten** — you remember the advice 3 days after buying at full price
3. **Passive** — no alerts, no planning, just regret

The result: people regularly pay 20-40% more than necessary because they bought at the wrong time of year.

## Target Users

- **Cost-conscious shoppers** planning major purchases ($200+)
- **Home buyers/renovators** furnishing rooms on a budget
- **Parents** buying seasonal items (school supplies, winter coats, bikes)
- **Newlyweds** setting up households
- **Budget-conscious millennials/Gen Z** who research before buying

## Proposed Solution

**WaitFor** is a purchase timing optimizer. Add items to your wishlist with categories, and WaitFor tells you:

1. **When** that category historically has the best deals
2. **How long** until the next optimal buying window
3. **Why** (what sales events drive the discounts)
4. **Alerts** when your optimal window approaches

Think of it as a reverse calendar — instead of "what's on sale today," it's "when should I buy this?"

## Key Features

### 1. Smart Wishlist
Add items with categories:
- "New mattress" → Category: Mattresses → Best: May (Memorial Day), President's Day
- "65" TV" → Category: TVs → Best: November (Black Friday), Super Bowl Sunday
- "Patio furniture" → Category: Outdoor → Best: August-September (end of season)

### 2. Timing Intelligence
Built-in database of historical deal patterns by category:
- Major appliances: MLK Day, Memorial Day, July 4th, Labor Day, Black Friday
- Electronics: Black Friday, Amazon Prime Day, Back to School
- Mattresses: Memorial Day, Labor Day, President's Day (the "mattress holidays")
- Outdoor/Patio: End of summer (Aug-Sep clearance)
- Winter gear: January-February (post-season)
- Gym equipment: Late January (after resolution season)

### 3. Wait Score™
Each item shows a 0-100 "Wait Score":
- **90-100**: Don't buy now! Major sale coming within 4 weeks
- **70-89**: Consider waiting — better prices likely within 2 months
- **40-69**: Neutral zone — okay to buy if needed
- **0-39**: Good time to buy — you're in a typical discount window

### 4. Smart Alerts
- "Your mattress wishlist item enters prime buying season in 3 weeks (Memorial Day sales)"
- "Price window closing — outdoor furniture clearance ending soon"
- Weekly digest: "This week is great for: [categories]"

### 5. Community Intel (Future)
Let users report actual prices and deals to refine timing predictions.

## Market Research

### Similar Solutions (and gaps)

| Solution | What it does | Gap |
|----------|--------------|-----|
| CamelCamelCamel | Price history for specific Amazon products | Reactive, not proactive. No seasonal recommendations |
| Honey | Coupon codes at checkout | Point-of-purchase, doesn't help with timing |
| Slickdeals | Real-time deal aggregation | Information overload, no personalization |
| Google Shopping | Price comparison | Real-time prices, no historical patterns |

**Gap**: No app tells you "wait, don't buy a TV this week — Super Bowl deals are in 3 weeks."

### Why This Works

1. **Simple value prop**: Save money by waiting for the right time
2. **Habit-forming**: Check before any major purchase
3. **Shareable**: "WaitFor told me to hold off, saved $400"
4. **Data moat**: Historical pattern data + community intel improves over time

## Revenue Model

1. **Freemium**: 3 wishlist items free, unlimited for $2.99/month
2. **Affiliate**: Link to deals when the window arrives (opt-in)
3. **Pro tier**: API access for deal bloggers, comparison sites

## Technical Implementation

### MVP Stack
- **Frontend**: Static HTML/CSS/JS (PWA-ready)
- **Backend**: Optional — can work client-side with local storage
- **Data**: JSON database of category timing patterns

### Data Sources for Timing Intelligence
- Historical deal aggregation from Slickdeals, Reddit r/deals
- Retail calendar (Black Friday, Prime Day, etc.)
- Industry patterns (mattress industry promotional calendar)
- Seasonal retail patterns

## Differentiation

| Feature | WaitFor | CamelCamelCamel | Honey |
|---------|---------|-----------------|-------|
| Seasonal timing advice | ✅ | ❌ | ❌ |
| Category-based predictions | ✅ | ❌ | ❌ |
| Proactive "wait" alerts | ✅ | ❌ | ❌ |
| Works before you find a product | ✅ | ❌ | ❌ |
| No specific product needed | ✅ | ❌ | ❌ |

## Prototype

See `prototype/` folder for interactive demo.

## Future Features

- Browser extension: warns you at checkout if bad timing
- Calendar integration: "Block off Memorial Day for mattress shopping"
- Price prediction: combine seasonal + price tracking
- Local deals: integrate with store flyers
- Social: share wishlists with family (wedding registry style)

---

*Idea researched and documented by Duncan ⚔️*
*Source: Web/Product Hunt/Indie Hackers*
*Date: February 19, 2026*
