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

## Final Verdict for Dual RTX 3090 Setup

### Option A: Dual Qwen 3.6-27B (Your Current Plan) ✅ RECOMMENDED
- **One copy per GPU**, AutoRound INT4 quant
- ~70-90 tok/s per instance, 2 parallel agents
- 77.2% SWE-Bench — best quality that fits on 24GB
- LiteLLM routes between them for load balancing
- Apache 2.0 license

### Option B: Single Qwen 3.6-27B TP=2 + MoE on GPU 2
- GPU 0+1: 27B dense at TP=2 (90-96 tok/s, highest quality)
- GPU 2 doesn't exist, so this doesn't apply

### Option C: Hybrid Routing (Advanced)
- Run 27B dense on both GPUs (dual instance)
- Add LiteLLM routing to cloud APIs for tasks exceeding local capacity
- Use GLM-5.1 or DeepSeek V4-Pro via API for the hardest tasks

### Quantization Recommendation
- **AutoRound INT4** is the community-tested winner for 3090
- AWQ INT4 works but slightly worse quality
- FP8 not supported on Ampere (3090 is Ampere, not Hopper)
- GGUF/IQ4_XS for llama.cpp fallback

### What to AVOID
- FP8 on 3090 (not hardware-supported)
- vLLM MoE on single 3090 (documented 18 tok/s anti-pattern)
- Tensor parallelism beyond TP=2 on consumer GPUs (PCIe bottleneck, no NVLink)
- Llama 4 Scout (you already rejected it, community agrees it's weak for coding)
- Any MoE with "tensor split" — use layer split mode only

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
