# AgentPilot 📱🤖

**Mobile command center for AI coding agents — monitor, prompt, and approve from your phone**

## The Tweet That Sparked It

> "I want to control Cursor from my phone so I can send follow up prompts / get status updates while I'm away from my computer. There's an app on the appstore for it but it controls the CLI agent and I'm TUI phobic. I would probably pay $100 for it"
> — [@mitchellhynes](https://x.com/mitchellhynes/status/2023619319993692291), Feb 17, 2026

## Problem Statement

AI coding agents like Cursor, Claude Code, Windsurf, and Codex are transforming development. But they have a massive UX gap: **you're tethered to your desktop**.

The pain points:
1. **Long-running tasks** — Agent is working on a complex refactor? You're stuck watching
2. **Follow-up prompts** — Need to clarify something mid-task? Hope you brought your laptop
3. **Approval workflows** — Agents increasingly ask permission for risky actions (file deletes, API calls) — you're blocked until you're back at your desk
4. **Context switching** — Checking agent progress means breaking your current flow
5. **CLI anxiety** — Existing solutions are terminal-based, intimidating for many developers

## Target Users

### Primary: Professional Developers Using AI Agents
- **Cursor users** — Largest AI coding assistant user base
- **Claude Code users** — CLI power users who want mobile convenience
- **Windsurf/Codex/Aider users** — Multi-agent workflows
- **Remote workers** — Need to unblock work from anywhere

### Secondary: Engineering Managers
- **Team oversight** — See what agents are doing across the team
- **Cost monitoring** — Track token usage and API costs

## Proposed Solution: AgentPilot

A mobile-first dashboard that connects to your AI coding agents:

### Core Features

**1. Live Session Monitor**
- Real-time view of what your agent is doing
- Progress indicators for long-running tasks
- Token usage and estimated completion time
- Notification when agent needs input

**2. Quick Prompts**
- Send follow-up messages to running sessions
- Voice-to-text for fast input on mobile
- Template responses ("yes, continue", "stop and undo", "explain more")
- Context preview before sending

**3. Approval Center**
- Push notifications for permission requests
- One-tap approve/deny for file operations
- Batch approval for low-risk actions
- Audit log of all approvals

**4. Session History**
- Browse past sessions
- Search conversations
- Resume abandoned sessions
- Share session summaries

**5. Multi-Agent Support**
- Connect multiple agents (Cursor, Claude Code, etc.)
- Unified inbox for all notifications
- Switch between agents seamlessly

### Technical Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     AgentPilot Mobile App                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Monitor   │  │   Prompt    │  │      Approvals      │  │
│  │   Screen    │  │   Input     │  │       Center        │  │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘  │
└─────────┼────────────────┼────────────────────┼─────────────┘
          │                │                    │
          └────────────────┼────────────────────┘
                           ▼
              ┌────────────────────────┐
              │    AgentPilot Bridge   │
              │   (Desktop Daemon)     │
              │  - WebSocket server    │
              │  - Agent adapters      │
              │  - Auth & encryption   │
              └───────────┬────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
    ┌──────────┐   ┌──────────┐   ┌──────────────┐
    │  Cursor  │   │  Claude  │   │  Other       │
    │  Agent   │   │  Code    │   │  Agents      │
    └──────────┘   └──────────┘   └──────────────┘
```

**Bridge Daemon (Desktop)**
- Runs on developer's machine
- WebSocket server for real-time communication
- Adapters for each supported agent
- E2E encryption between phone and desktop
- Tunneling via Tailscale/ngrok/Cloudflare for remote access

**Mobile App**
- React Native for cross-platform
- Push notifications via FCM/APNs
- Biometric auth for security
- Offline queue for prompts when reconnecting

## Differentiation

| Feature | AgentPilot | Existing CLI Apps | Native Agent Apps |
|---------|------------|-------------------|-------------------|
| Visual UI | ✅ Modern, friendly | ❌ Terminal-based | ⚠️ Desktop only |
| Multi-agent | ✅ Unified inbox | ❌ One at a time | ❌ Siloed |
| Push notifications | ✅ Native | ❌ None | ❌ None |
| Voice input | ✅ Built-in | ❌ None | ❌ None |
| Approval workflows | ✅ First-class | ❌ Basic | ❌ Desktop-bound |

## Market Opportunity

- **Cursor** — 500K+ developers (estimated)
- **Claude Code** — Rapidly growing CLI user base
- **GitHub Copilot Workspace** — Microsoft entering the space
- **Codex CLI** — OpenAI's agent mode gaining traction

The AI coding agent market is exploding. Every major player is investing heavily. But **mobile control is an afterthought** — this is the gap.

## Revenue Model

### Freemium
- **Free**: 1 agent, 50 prompts/month, basic notifications
- **Pro ($9/mo)**: Unlimited agents, unlimited prompts, voice input, priority notifications
- **Team ($29/user/mo)**: Admin dashboard, shared sessions, cost tracking

### One-Time Purchase Option
Based on the tweet: "I would pay $100 for it"
- **Lifetime Pro ($99)**: All Pro features forever
- Appeals to indie developers who hate subscriptions

## MVP Scope (4-6 weeks)

### Week 1-2: Bridge Daemon
- [ ] WebSocket server with auth
- [ ] Cursor adapter (VSCode extension API)
- [ ] Claude Code adapter (stdin/stdout)
- [ ] Local network discovery

### Week 3-4: Mobile App
- [ ] Session list and detail views
- [ ] Real-time log streaming
- [ ] Prompt input with templates
- [ ] Push notification setup

### Week 5-6: Polish & Launch
- [ ] E2E encryption
- [ ] Onboarding flow
- [ ] Beta testing with AI dev communities
- [ ] Launch on ProductHunt

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Agent APIs change frequently | High | Abstract adapters, prioritize official APIs |
| Security concerns | High | E2E encryption, biometric auth, open-source bridge |
| Agents add mobile support natively | Medium | First-mover advantage, multi-agent unified experience |
| Small initial market | Medium | Market is growing rapidly, early adopters are vocal |

## Competitive Landscape

- **iOS Shortcuts + SSH** — Hacky, requires technical setup
- **Termius** — SSH client, not agent-specific
- **Built-in mobile apps** — None of the major agents have them
- **Slack/Discord bots** — Some agents integrate, but not purpose-built

## Why Now?

1. **AI agents are mainstream** — Cursor hit critical mass in 2025
2. **Agentic workflows are longer** — Tasks that took minutes now take hours
3. **Permission models are emerging** — Agents are getting more autonomous, need oversight
4. **Remote work is permanent** — Developers want flexibility

## Prototype

See `prototype/` directory for interactive HTML/CSS/JS demo.

---

**Source:** X/Twitter
**Date:** February 17, 2026
**Documented by:** Duncan ⚔️
