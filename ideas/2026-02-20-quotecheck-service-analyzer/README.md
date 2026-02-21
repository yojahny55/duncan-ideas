# QuoteCheck — AI Service Quote Analyzer

**Date:** 2026-02-20  
**Source:** Web Research (Product Hunt, Indie Hackers, Reddit)  
**Category:** Personal Finance / Consumer Protection

---

## Problem Statement

Getting quotes for repairs and services is stressful. Whether it's a mechanic, plumber, electrician, HVAC technician, or contractor, most people have no idea if they're being quoted a fair price or getting ripped off.

**Pain points:**
- No easy way to know if a quote is fair
- Don't understand what line items mean
- Can't tell what's necessary vs. upselling
- Feel intimidated asking questions
- End up overpaying or agreeing to unnecessary work
- Getting multiple quotes is time-consuming

**The gap:** Tools like RepairPal exist for auto repair, but there's no universal tool that helps consumers analyze ANY service quote — plumbing, electrical, HVAC, landscaping, appliance repair, home improvement, etc.

---

## Target Users

1. **Homeowners** — Dealing with contractors, plumbers, electricians
2. **Car owners** — Mechanics and auto repair shops
3. **Renters** — Understanding what landlords are charging them for
4. **Small business owners** — Evaluating vendor quotes
5. **Anyone uncomfortable with negotiation** — Need data to feel confident

---

## Proposed Solution

**QuoteCheck** — An AI-powered service that analyzes repair/service quotes and helps you understand:

1. **Is this price fair?** — Compare against market rates for your area
2. **What's actually necessary?** — Flag potentially unnecessary add-ons
3. **Red flags** — Identify common scam patterns
4. **Questions to ask** — Generate specific questions for the service provider
5. **Negotiation tips** — Suggest what to push back on

### How It Works

1. **Upload the quote** — Photo, PDF, or manual entry
2. **Select service type** — Auto, plumbing, electrical, HVAC, etc.
3. **Enter your location** — For regional pricing
4. **Get AI analysis** — Fair price range, red flags, questions to ask
5. **Export a summary** — To bring back to the service provider

---

## Key Features

### MVP Features
- **Quote upload** — Photo/PDF with OCR extraction
- **Service categories** — Auto, plumbing, electrical, HVAC, general contractor
- **Price fairness score** — Low/Fair/High with explanation
- **Line item breakdown** — What each item means in plain English
- **Red flag detection** — Common upsell tactics and unnecessary work
- **Question generator** — Specific questions to ask the provider
- **Local pricing context** — Regional adjustments

### Future Features
- **Multiple quote comparison** — Side-by-side analysis
- **Provider reputation** — Integration with reviews
- **Negotiation scripts** — What to say to push back
- **Community pricing data** — Crowdsourced prices
- **Receipt tracking** — Compare quotes to final bills
- **Warranty tracking** — Document what was promised

---

## Market Research

### Existing Solutions (Partial)
- **RepairPal** — Auto-only, provides estimates but limited analysis
- **HomeAdvisor/Angi** — Price guides but not quote analysis
- **Thumbtack** — Gets you quotes, doesn't analyze them
- **KBB/Edmunds** — Auto estimates only
- **Fixxr** — Auto quote analyzer (recent, limited)

### Gap in Market
No tool combines:
- Universal service types (not just auto)
- AI-powered quote understanding
- Plain English explanations
- Question generation
- Negotiation coaching

### Pricing Model
- **Freemium**: 3 quote analyses/month free
- **Pro**: $7.99/month unlimited
- **One-time**: $2.99 per quote analysis

### Competitive Advantage
- **Universal**: Works for any service type
- **Educational**: Teaches you what you're paying for
- **Empowering**: Gives you confidence to negotiate
- **AI-powered**: Understands context and nuance

---

## Technical Considerations

### MVP Stack
- **Frontend**: React/Next.js or Vue
- **OCR**: Google Vision API or Tesseract
- **AI**: GPT-4 / Claude for analysis
- **Database**: PostgreSQL for pricing data
- **Location**: IP-based or manual entry

### Data Sources for Pricing
- Government labor statistics
- Industry pricing guides
- Crowdsourced community data
- Partnership with trade organizations

### Privacy
- No quote data stored without consent
- Option to delete after analysis
- No personal info required

---

## Success Metrics

- **Conversion**: Free → Paid
- **Quote accuracy feedback**: "Was this helpful?"
- **Savings reported**: User-reported money saved
- **Return usage**: Repeat analyses
- **NPS**: Would you recommend?

---

## Prototype

A functional demo showing the quote upload and analysis experience.

**[View Prototype →](prototype/index.html)**

---

## Why This Will Work

1. **Universal pain point** — Everyone gets service quotes
2. **High stakes** — Thousands of dollars at risk
3. **Information asymmetry** — Service providers have all the knowledge
4. **Emotional relief** — Reduces anxiety and empowers decisions
5. **Viral potential** — "I saved $500 with this tool"
6. **Recurring need** — People need multiple quotes over time

---

*Idea researched and documented by Duncan ⚔️*
