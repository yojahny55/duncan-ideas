# TabEverywhere

**AI autocomplete for your entire OS — Cursor's Tab, but system-wide**

## The Problem

Developers who use AI coding assistants like Cursor love the "Tab to complete" experience — you start typing and intelligent suggestions appear inline that you accept with a single keystroke. It's frictionless and dramatically speeds up work.

But this magic only exists inside code editors. The moment you switch to:
- Writing an email
- Filling out a form
- Chatting on Slack
- Writing documentation in Notion
- Composing a tweet

...you're back to typing everything manually. The AI assistance disappears.

**The frustration:** "I've always had this weird idea: What if we took the idea of Cursor's Tab and made it global on macOS? It would detect an input field anywhere in any app on your computer, and show a floating 'tab suggestion' that you can accept to write faster." — [@nikitadrokin](https://x.com/nikitadrokin/status/2025082785963405420)

## Target Users

1. **Power users** — Anyone who types a lot and wants to write faster
2. **Developers** — Already trained on Tab-to-complete, want it everywhere
3. **Knowledge workers** — Writers, marketers, support reps, anyone composing text daily
4. **Non-native English speakers** — Get grammar/phrasing help inline as they type
5. **People with RSI** — Fewer keystrokes = less strain

## The Solution: TabEverywhere

A lightweight system utility that brings AI autocomplete to every text input on your computer.

### How It Works

1. **System-wide input detection** — Watches for active text fields across all applications
2. **Context-aware suggestions** — AI understands what app you're in and adapts (email = professional, Slack = casual)
3. **Inline ghost text** — Shows dimmed completion text right where you're typing
4. **Tab to accept** — One keystroke to complete, just like Cursor
5. **Escape to dismiss** — Don't want it? Keep typing or hit Escape

### Key Features

- **Universal compatibility** — Works in any app with text input (browsers, native apps, Electron apps)
- **App-aware tone** — Adjusts formality based on context (Slack vs email vs docs)
- **Privacy-first** — Local model option, nothing leaves your machine
- **Customizable triggers** — Choose when suggestions appear (after pause, keystroke count, or on-demand)
- **Learning mode** — Adapts to your writing style over time
- **Snippet expansion** — Recognizes your common phrases and offers to complete them
- **Multi-line support** — Can complete entire paragraphs when appropriate
- **Keyboard-first** — Tab to accept, Escape to dismiss, arrow keys to cycle alternatives

### Unique Differentiators

| Feature | TabEverywhere | Text Expanders | Grammarly | Copilot |
|---------|---------------|----------------|-----------|---------|
| AI-powered completions | ✅ | ❌ | ❌ | ✅ |
| Works in any app | ✅ | ✅ | ✅ | ❌ |
| Tab-to-accept UX | ✅ | ❌ | ❌ | ✅ |
| Context-aware tone | ✅ | ❌ | ✅ | ❌ |
| Local model option | ✅ | N/A | ❌ | ❌ |
| Real-time inline | ✅ | ❌ | ❌ | ✅ |

## Technical Architecture

### macOS Implementation

```
┌─────────────────────────────────────────────────┐
│                 TabEverywhere                    │
├─────────────────────────────────────────────────┤
│  Accessibility API  │  Input Monitoring         │
│  (AXUIElement)      │  (CGEventTap)             │
├─────────────────────────────────────────────────┤
│            Context Detection Layer               │
│  - Active app identification                     │
│  - Text field bounds detection                   │
│  - Current text content reading                  │
├─────────────────────────────────────────────────┤
│             AI Completion Engine                 │
│  - Local: Ollama/llama.cpp (Phi-3, Qwen)        │
│  - Cloud: OpenAI, Anthropic, Groq              │
├─────────────────────────────────────────────────┤
│              Overlay Renderer                    │
│  - Floating NSWindow (non-activating)           │
│  - Ghost text positioning                        │
│  - Keyboard event handling                       │
└─────────────────────────────────────────────────┘
```

### Windows Implementation

- Use UI Automation API for text field detection
- Global keyboard hook for input monitoring
- WPF overlay window for ghost text rendering

### Key Technical Challenges

1. **Accessibility permissions** — Needs system-level access (user must grant)
2. **Text field detection** — Different apps expose text differently
3. **Cursor position accuracy** — Must render ghost text in exact position
4. **Performance** — Can't add latency to typing
5. **App compatibility** — Electron, native, web apps all behave differently

## Monetization

### Freemium Model

**Free Tier:**
- 50 completions/day
- Basic suggestions
- Cloud AI only

**Pro ($8/month):**
- Unlimited completions
- Local AI option (privacy)
- Custom prompts/personas
- Learning from your style
- Priority model access

**Team ($15/user/month):**
- Shared snippets
- Brand voice training
- Admin controls
- SSO

## Competitive Landscape

| Competitor | Approach | Weakness |
|------------|----------|----------|
| **Raycast AI** | Triggered with shortcut | Not inline, requires context switch |
| **Espanso** | Text expansion | No AI, just static snippets |
| **TextExpander** | Snippet library | No AI completions |
| **Grammarly** | Grammar/style | Not predictive, post-hoc corrections |
| **macOS Dictation** | Voice input | Different modality, not typing |

**TabEverywhere's edge:** True inline AI completions that feel native, like Tab in Cursor but everywhere.

## MVP Scope

### Phase 1: macOS Menu Bar App
- [ ] Accessibility API integration
- [ ] Text field detection in top 10 apps (Chrome, Safari, Mail, Slack, etc.)
- [ ] Ghost text overlay rendering
- [ ] Tab/Escape keyboard handling
- [ ] OpenAI API integration
- [ ] Basic settings panel

### Phase 2: Polish
- [ ] App-specific context detection
- [ ] Local model support (Ollama)
- [ ] Usage analytics
- [ ] Custom trigger settings

### Phase 3: Growth
- [ ] Windows version
- [ ] Team features
- [ ] Style learning

## Source

**Twitter:** [@nikitadrokin](https://x.com/nikitadrokin/status/2025082785963405420) — February 21, 2026

> "I've always had this weird idea: What if we took the idea of Cursor's Tab and made it global on macOS? It would detect an input field anywhere in any app on your computer, and show a floating 'tab suggestion' that you can accept to write faster. I don't care about the cost, I just want to know if it's possible."

---

*Researched by Duncan ⚔️ — February 21, 2026*
