# Local Coding Models for Dual RTX 3090 — Deep Research

**Date:** May 25, 2026
**Hardware:** 2x RTX 3090 (48GB VRAM total), Ampere architecture
**Use case:** AI agency (House Atreides) — BMAD workflows, code generation, SITREPs, CRM calls, multi-agent parallel execution

---

## Top Contenders for 24GB VRAM per GPU

### 1. Qwen 3.6-27B (Dense) — THE CONSENSUS #1 PICK

**Why everyone agrees:** Every major source (Kilo, WhatLLM, Pinggy, BenchLM, AIMadeTools, community benchmarks on r/LocalLLaMA) ranks this as the best dense model for consumer GPUs.

**Key benchmarks:**
- SWE-Bench Verified: **77.2%** (beats the 397B Qwen 3.5 MoE flagship)
- Terminal-Bench 2.0: **59.3**
- MMLU-Pro: 86.2
- GPQA: 87.8
- AIME: 94.1
- Context: 262K
- License: Apache 2.0

**RTX 3090 performance (measured, not vendor claims):**
- Single GPU (AutoRound INT4): 70-72 tok/s narrative, 91 tok/s code
- Single GPU (long context, TurboQuant 3-bit KV): 30-42 tok/s at 125K context
- **TP=2 (2x 3090): 90-96 tok/s narrative, 120 tok/s code, 100K context** ← your setup
- TP=2 with MTP-3 speculative: up to 264 tok/s on code

**Community sentiment:**
- "The 27B dense wins every quality benchmark vs the 35B MoE by 1-10 pts" — tfriedel/qwen3.6-rtx3090-lab
- "Best dense model for repo-level coding" — Kilo
- "27B dense model beating a 397B MoE flagship" — multiple sources
- Real-world concern: "can get stuck in thinking loops" on some tasks (Dre Dyson review)

**VRAM fit on single 3090:**
- AutoRound INT4 quant: ~18GB → fits with 6GB headroom for KV cache
- AWQ INT4: ~18-20GB → tighter but works
- BF16: won't fit (54GB)

**Verdict for your setup:** Run one copy per GPU at TP=1, or one copy at TP=2 for max quality. Dual instance at TP=1 each is exactly what your plan calls for.

---

### 2. Gemma 4 31B (Dense) — THE QUALITY ALTERNATIVE

**Key benchmarks:**
- SWE-Bench Verified: ~75% (estimated from comparisons)
- AIME: 89.2% (actually higher than Qwen 3.6 on math)
- Context: 256K
- License: Gemma License (more restrictive than Apache 2.0)

**RTX 3090 performance:**
- Barely fits on 24GB — needs aggressive quantization
- FP8: ~24GB (right at the limit, no KV headroom)
- Slower than Qwen 3.6 27B by ~28% on same hardware
- 31B dense means more memory bandwidth pressure

**Community sentiment:**
- "Higher code correctness rate justifies the VRAM cost for code-heavy workflows" — AI Thinker Lab
- "31B is notably slower than 27B 3.6" — r/LocalLLaMA dense model shoot-off
- "Qwen 3.6 wins on aggregate intelligence 74 to 65" — Roborhythms comparison
- Gemma 4 31B wins on: math, shorter/cleaner output, instruction following
- Qwen 3.6 wins on: coding benchmarks, speed, VRAM efficiency, context window

**VRAM problem:** 31B dense at any reasonable quant pushes right up against 24GB. You'd need INT4 or worse, which degrades quality. The 27B Qwen fits more comfortably.

**Verdict for your setup:** Quality competitor but the VRAM squeeze makes it impractical for dual-instance mode. You'd need to run TP=2 (one instance across both GPUs), killing your parallelization advantage.

---

### 3. Devstral Small 2 (24B) — THE MISTRAL OPTION

**Key benchmarks:**
- SWE-Bench Verified: **68%** (self-reported by Mistral)
- Context: 128K
- License: Apache 2.0
- Parameters: 24B dense

**Why consider it:**
- Purpose-built for agentic software engineering
- 24B fits perfectly on a 3090 with plenty of KV headroom
- Mistral's coding specialty
- Apache 2.0 license

**Why it's ranked below Qwen 3.6:**
- 68% SWE-Bench vs Qwen's 77.2% — significant gap
- 128K context vs Qwen's 262K
- Community consensus: "good but not in the same league"

**Pinggy recommendation:** "Start with Qwen 3.6 27B or Devstral Small 2 on local hardware"

**Verdict for your setup:** Good fallback but clearly inferior to Qwen 3.6 for coding. Only pick if you specifically want Mistral ecosystem or need the smaller VRAM footprint.

---

### 4. Qwen 3.6 35B-A3B (MoE) — THE SPEED OPTION

**Key benchmarks:**
- SWE-Bench Verified: 73.4% (vs 27B's 77.2%)
- Terminal-Bench 2.0: 51.5 (vs 27B's 59.3)
- AIME: 92.7 (vs 27B's 94.1)
- Context: 128K (GGUF) or 200K (vLLM TP=2)
- Only 3B active parameters per token

**RTX 3090 performance (measured):**
- llama.cpp GGUF (1 GPU): **115-133 tok/s** — way faster than 27B
- vLLM AWQ TP=2: 149 tok/s
- vLLM AWQ TP=2 + MTP-3: **264 tok/s code** — insane throughput

**The trade-off:**
- ~2x the speed of 27B
- Loses 4-8 pts on every quality benchmark
- No vision in GGUF mode
- vLLM single-GPU is broken for this model (18 tok/s — documented anti-pattern)

**Verdict for your setup:** Tempting for raw throughput, but the quality gap matters for agency work. Better as a routing option: send fast/cheap tasks to MoE, hard tasks to 27B dense.

---

### 5. Gemma 4 26B-A4B (MoE) — THE DARK HORSE

**Key benchmarks:**
- Only 3.8B active parameters (26B total)
- Context: 262K
- License: Gemma License

**RTX 3090 performance (measured):**
- llama.cpp GGUF + ngram-mod: **127-131 tok/s** — extremely fast
- 95% GPU SM utilization
- vLLM AWQ + DFlash: 95-179 tok/s on short context, but collapses past 16K

**Community finding:** "gguf is the safe default" — quality is good for its size but not competitive with Qwen 3.6 on coding.

**Verdict for your setup:** Great for ultra-fast simple tasks but not strong enough for agency-grade coding.

---

### 6. Models That DON'T Fit (But Worth Knowing)

| Model | Why Not |
|-------|---------|
| **DeepSeek V4-Pro** (1.6T/49B active) | #1 open-source coding model (80.6% SWE-Bench) but needs 200GB+ VRAM. API only. |
| **GLM-5.1** (744B/40B active) | #1 SWE-Bench Pro. MIT license. Needs 200GB+. You already have this via Z.AI API. |
| **Kimi K2.6** (1T/32B active) | Best for agent swarms. Needs enterprise hardware. |
| **Devstral 2** (123B) | Too large for 24GB. Needs 80GB+. |
| **Qwen3-Coder-Next** (80B/3B active) | Might fit with heavy quantization but untested on 3090. |

---

## Benchmark Comparison Table (Models That Fit)

| Model | Params | SWE-Bench | Terminal-Bench | Context | License | TPS (1x 3090) | TPS (2x 3090) | VRAM |
|-------|--------|-----------|----------------|---------|---------|----------------|----------------|------|
| **Qwen 3.6-27B** | 27B dense | **77.2%** | **59.3** | 262K | Apache 2.0 | 70-72 | 90-96 | ~18GB |
| Gemma 4 31B | 31B dense | ~75% | — | 256K | Gemma | ~50-55 | — | ~22-24GB |
| Qwen 3.6-35B MoE | 35B/3B | 73.4% | 51.5 | 200K | Apache 2.0 | 115-133 | 149-264 | ~17GB |
| Devstral Small 2 | 24B dense | 68% | — | 128K | Apache 2.0 | ~80-90 | — | ~16GB |
| Gemma 4 26B MoE | 26B/3.8B | — | — | 262K | Gemma | 127-131 | — | ~14GB |

---

## Final Verdict — LOCKED IN

### Production Config: Dual Qwen 3.6-27B ✅ SHIPPED

```
Per GPU (each 3090, 24GB VRAM):
├── Model: Qwen 3.6-27B
├── Quant: AutoRound INT4 (~18GB weights)
├── KV Cache: fp8_e5m2 (fp16 KV if Ampere issues)
├── Context: 20-75K tokens per instance
├── Engine: vLLM (OpenAI-compatible API + tool calling)
├── TPS: ~70-90 tok/s per instance
└── License: Apache 2.0

Routing:
├── LiteLLM round-robin between both instances
├── No external/cloud fallback — all local
└── 2 parallel agent streams for House Atreides
```

### Context Management Strategy

**Coding mode (big codebases):**
- Drop to Q4_K_M (~17GB weights) → ~7GB free per GPU for KV
- Enable Q4 KV cache quantization (q4_0)
- Result: ~64K-128K context per instance in VRAM
- Two instances still running, LiteLLM round-robins

**Quality mode (chat, reasoning, writing):**
- Stay at INT4 (~18GB weights)
- fp8 KV cache
- 20-75K context per instance
- Higher quality per token

**Max context (loading entire project, rare):**
- Spin up single instance across both GPUs (TP=2)
- Or chunk the task smaller
- No cloud fallback

### Why NOT Q5_K_M

Original plan was Q5_K_M (~20GB weights) but:
- Only ~4GB left for KV cache per GPU
- Limits context to ~8-16K tokens (too small for codebases)
- Q4_K_M frees ~7GB for KV → 4x more context room
- Quality difference between Q4 and Q5 is real but small
- For agency coding work, extra context > slight quality bump

### What to AVOID
- FP8 on 3090 (not hardware-supported on Ampere)
- vLLM MoE on single 3090 (documented 18 tok/s anti-pattern)
- Tensor parallelism beyond TP=2 on consumer GPUs (PCIe bottleneck, no NVLink)
- Llama 4 Scout (community agrees it's weak for coding)
- Any MoE with "tensor split" — use layer split mode only
- Cloud/API fallbacks — everything stays on the rig
- KTransformers for dense models (only useful for MoE like GLM-5)

### When to Switch Modes

| Scenario | Config | Context | Speed |
|----------|--------|---------|-------|
| Default agency work | INT4 + fp8 KV, 2 instances | 20-75K each | ~90 tok/s |
| Big codebase tasks | Q4_K_M + q4_0 KV, 2 instances | 64-128K each | ~70 tok/s |
| Need max context | INT4 + fp8 KV, TP=2 (1 instance) | 100-500K | ~96 tok/s |
| Max throughput code gen | INT4 + MTP-3, TP=2 | 100K | ~264 tok/s |

---

## Sources
- Kilo.ai Open-Source Coding Models (May 2026)
- WhatLLM.org Best LLM for Coding (April 2026)
- AIMadeTools Best Free AI Coding Models (April 2026)
- MindStudio Agentic Coding Guide (April 2026)
- tfriedel/qwen3.6-rtx3090-lab GitHub (measured benchmarks)
- noonghunna/qwen36-27b-single-3090 GitHub
- devnen/qwen3.6-windows-server GitHub
- r/LocalLLaMA community benchmarks (multiple threads)
- Roborhythms: Qwen 3.6 vs Gemma 4 comparison
- Pinggy: Best Self-Hosted LLMs for Coding (May 2026)
- BenchLM.ai: Best Open Source LLM Rankings (May 2026)
