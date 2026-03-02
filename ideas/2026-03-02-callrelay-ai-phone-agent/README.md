# CallRelay - AI Phone Agent

> Let AI handle your tedious phone calls while you do literally anything else.

## The Problem

We all have those calls we keep putting off:
- "I need to call United to get a refund, but I'll be on hold for 2 hours..."
- "I should schedule that dentist appointment, but navigating the phone tree..."
- "My insurance overcharged me, but dealing with customer service..."
- "Cancel my gym membership? I know they'll try to retain me for 45 minutes..."

**Source:** Twitter user [@avisangh](https://x.com/avisangh/status/2028324097265172753) shared: "My dad made me call united for him. I was on the phone for two hours getting him a refund. I built a lightweight tool that takes care of refunds/scheduling my doctors appts/shitty stuff."

The average American spends **43 days of their life on hold**. That's insane.

## The Solution

**CallRelay** is an AI phone agent that handles tedious customer service calls on your behalf:

1. **You tell it what you need**: "Get a refund for my delayed flight UA1234" or "Schedule a checkup at Dr. Smith's office next week"
2. **AI makes the call**: Real-time voice AI navigates phone trees, waits on hold, and talks to agents
3. **You get notified**: Summary of what happened, any decisions needed, outcome documented

## Key Features

### 🎯 Task Templates
Pre-built workflows for common tasks:
- **Refunds & Disputes**: Airlines, subscriptions, billing errors
- **Appointments**: Doctor, dentist, DMV, auto service
- **Cancellations**: Gym, subscriptions, services (handles retention scripts!)
- **Information Requests**: Insurance questions, account status, balance inquiries

### 🤖 Smart Call Handling
- Navigates IVR phone trees automatically
- Waits on hold (AI doesn't mind!)
- Speaks naturally with human agents
- Handles authentication/verification with pre-provided info
- Escalates to you only when genuinely needed

### 📝 Full Transparency
- Live transcript of the call
- Recording available for your records
- Summary of key points and outcomes
- Any commitments or reference numbers captured

### 🔐 Privacy First
- You control exactly what info the AI can share
- Sensitive data (SSN last 4, account numbers) only revealed when necessary
- Clear consent for each call
- Option to take over the call at any moment

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                     CallRelay Flow                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📝 CREATE TASK                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ "Get refund for United flight UA1234 on 2/15"      │   │
│  │ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐    │   │
│  │ │ Refund      │ │ Appointment │ │ Cancel      │    │   │
│  │ └─────────────┘ └─────────────┘ └─────────────┘    │   │
│  └─────────────────────────────────────────────────────┘   │
│                           ↓                                 │
│  📞 AI CALLS                                                │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ▶ Calling United Airlines...                        │   │
│  │   [IVR: "Press 1 for..."]  → AI navigates           │   │
│  │   [Hold music...]          → AI waits               │   │
│  │   [Agent: "How can I..."]  → AI negotiates          │   │
│  └─────────────────────────────────────────────────────┘   │
│                           ↓                                 │
│  ✅ DONE                                                    │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ✓ Refund of $347 approved                           │   │
│  │ ✓ Ref #: UA-7829341                                 │   │
│  │ ✓ Credit in 5-7 business days                       │   │
│  │ [View Transcript] [Listen to Recording]              │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Target Audience

1. **Busy Professionals**: Time is money, and 2 hours on hold isn't worth it
2. **Elderly Parents** (and their kids who help them): Navigating modern phone systems is exhausting
3. **People with Phone Anxiety**: Real issue that affects millions
4. **Non-Native English Speakers**: Difficult to navigate complex customer service calls
5. **Anyone Who Values Their Sanity**: Because life is too short for hold music

## Technical Stack

- **Voice AI**: Real-time speech synthesis & recognition (e.g., Retell AI, Bland AI, Vapi)
- **LLM Backend**: Claude/GPT for understanding context and generating appropriate responses
- **Telephony**: Twilio or similar for placing actual calls
- **Frontend**: React Native or PWA for cross-platform
- **Backend**: Node.js/Python with real-time websocket for live updates

## Business Model

### Freemium
- **Free**: 2 calls/month, basic templates
- **Pro ($9.99/mo)**: 15 calls/month, priority queue, custom templates
- **Unlimited ($24.99/mo)**: Unlimited calls, family sharing, API access

### Per-Call
- $1.99 per successful call (only pay if task completed)
- Enterprise: Volume pricing for businesses

## Why Now?

1. **Voice AI is finally good enough**: Real-time, natural-sounding AI voice that can handle complex conversations
2. **Hold times are getting worse**: Companies are cutting call center staff
3. **Phone anxiety is real**: Gen Z notoriously hates phone calls
4. **AI acceptance**: People are comfortable with AI handling tasks

## Competitive Landscape

- **Virtual assistants (Siri, Alexa)**: Can make calls but can't handle conversations
- **Call scheduling apps (Calendly)**: Only work if the other party uses them
- **Human VA services**: Expensive, scheduling overhead
- **AI call handlers**: Emerging space, mostly B2B focused

## MVP Scope

1. **3 use cases**: Refunds, appointment scheduling, cancellations
2. **10 major companies**: United, Delta, Comcast, AT&T, etc.
3. **Web app**: Create task, monitor status, view results
4. **Basic auth**: Email/password, secure info storage

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Companies block AI callers | Use realistic voice, varied patterns |
| Legal/consent issues | Clear TOS, user authorizes each call |
| AI makes mistakes | Human takeover option, confirmation for big decisions |
| Privacy concerns | Transparent data handling, minimal info sharing |

## Success Metrics

- **Call completion rate**: % of tasks successfully completed
- **Time saved**: Hours of hold time avoided (gamify this!)
- **NPS**: Would users recommend to friends?
- **Conversion**: Free → paid conversion rate

## The Vision

Eventually, CallRelay becomes your phone concierge:
- "Cancel all my unused subscriptions"
- "Schedule all my annual checkups"
- "Negotiate my cable bill down"
- "Deal with this parking ticket"

You never have to make a tedious phone call again.

---

*Source: X/Twitter research on 2026-03-02. Idea inspired by real user frustration with customer service calls.*
