# CostOf — Local Service Price Transparency

> **"What's the going rate for [X] in [your city]?"**

Crowdsourced local service price database — search any service, see what people near you actually paid, and stop overpaying.

## Problem

Service prices are a black box. An oil change costs $35 in one shop and $120 across the street. A plumber quotes $300 for 30 minutes of work. A teeth cleaning ranges from $75 to $400 in the same zip code. **Nobody knows the going rate until they've already been charged.**

Existing solutions:
- **Angi/HomeAdvisor** — lead-gen disguised as pricing. Quote ranges are useless.
- **Yelp** — reviews, not prices. You know the dentist has 4.5 stars but not what a filling costs.
- **Google** — "how much does [X] cost" gives national averages, not your city.
- **Thumbtack/TaskRabbit** — marketplace prices, not market intelligence.

**Nobody owns the "what do people actually pay?" position for local services.**

## Market

- **260M+** US consumers hire local services annually
- **$6T+** US consumer spending on services (BLS 2026)
- **Price variation**: 200-400% for identical services within the same metro area
- **Inflation anxiety** at record highs (UMich May 2026: 4.8% YoY expectations)
- **Gartner**: transparency tools are the #2 consumer tech trend for 2026
- r/personalfinance (18M+), r/Frugal (2.8M+), r/LifeProTips constantly ask "what should I pay for X?"

## Solution

### CostOf — The Glassdoor for Service Prices

Search any service → see real prices paid near you → report your own → help everyone.

### Core Features

1. **Price Search** — Type a service ("oil change," "plumber," "teeth cleaning") + your location → instant price distribution chart with median, p25, p75, and sample count
2. **Quick Report** — 3 taps to report: service type → amount paid → business name (optional). 15 seconds, done
3. **Service Categories** — Auto maintenance, home repair, health/dental, beauty, legal, pet care, fitness, education, child care, tech repair, cleaning, moving, landscaping, tax prep — 100+ subcategories
4. **Price Map** — Heat map showing price variations by neighborhood. See the cheap zone vs the expensive zone
5. **Fair Price Badge** — See at a glance if a quote you received is fair (green), high (yellow), or rip-off (red) compared to local data
6. **Quote Checker** — Enter a quote you received, get instant fairness analysis with confidence score
7. **Trending Services** — See what's getting more expensive in your area this month
8. **Anonymous** — No real names. Report prices without exposing yourself

### UX Philosophy

- **Search-first**: homepage is just a search bar + location. Zero friction.
- **Report in 15 seconds**: if reporting takes longer than 30 seconds, the UX failed
- **Visual pricing**: distribution charts, not tables. Humans understand bell curves better than spreadsheets.
- **Mobile-native**: most reports happen right after paying, standing at the counter or in the parking lot

## Business Model

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | Unlimited searches, 5 reports/day, basic price data |
| **Pro** | $3.99/mo | Unlimited reports, price maps, fair price badge, quote checker, trending alerts |
| **Premium** | $7.99/mo | Everything + price alerts for services you track, neighborhood insights, export reports |
| **Business** | $29.99/mo | Business listing, price analytics for your area, customer insights |

## Why Now

1. **Inflation anxiety** — 4.8% YoY expectations (UMich May 2026), consumers actively seeking price transparency
2. **Tariff impact** — service prices rising faster than goods as labor costs increase
3. **GasBuddy proved the model** — crowdsourced gas prices work. Same principle, 50x the market.
4. **Glassdoor proved salary transparency** — anonymous sharing works at scale. Apply it to services.
5. **AI makes categorization easy** — NLP auto-categorizes service reports, no manual taxonomy management

## Competition & Differentiation

| Competitor | What They Do | What They Don't Do |
|-----------|-------------|-------------------|
| Angi/HomeAdvisor | Lead-gen for contractors | Actual price data from consumers |
| Yelp | Reviews + star ratings | No price information |
| Thumbtack | Service marketplace | Marketplace prices only, no market data |
| GasBuddy | Gas prices | Only gas, not services |
| Glassdoor | Salary data | Employment only, not consumer services |
| FairHealth | Healthcare cost estimates | B2B/insurance, not consumer-facing |

**CostOf is the only consumer-first, crowdsourced, local service price database.**

## Technical Notes

- **Data model**: Service category → subcategory → location → price reports → aggregations
- **Privacy**: Reports are anonymous. Business names optional. No PII collected.
- **Geocoding**: Zip code + city is sufficient. No exact addresses.
- **Fraud prevention**: Rate limits, outlier detection, verified report badges (receipt photo optional)
- **Cold start**: Seed with publicly available data (Medicare pricing, state fee schedules, open data sets)
- **API-first**: Enable embedding ("What's the going rate?" widget on any website)

## Naming Alternatives

- CostOf — "What's the cost of X?"
- FairRate — "Know the fair rate"
- PricePeer — "See what your peers paid"
- GoingRate — "What's the going rate?"

## Source

Web research (May 2026): GasBuddy model, Glassdoor salary transparency, UMich consumer sentiment, Gartner 2026 trends, Reddit r/personalfinance price questions.

---

*💡 Idea #145 by Duncan ⚔️ — May 28, 2026*
