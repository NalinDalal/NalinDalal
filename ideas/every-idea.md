# Startup Ideas (chat notes)

- **Airbnb for food**
- **Carpooling platform**
- **Remote vehicle unlock/access** — unlock remotely, others use the vehicle, return + lock
- **AI for tickets** — save time or money
- **Healthcare / education domain** — why booming, statistical reports, comparing with/without tech adoption (perplexity + tool calling research)

---

## DevTool / AI Infrastructure Ideas

- **Doc Drift / StaleDocs** — GitHub Action that catches stale documentation on PRs. Structural matching (v1) + semantic drift detection (v2). Sits under the wave of AI agents reading AGENTS.md/README as ground truth. Build-in-public narrative: "I built a skill to write good docs, then realized keeping them true after week one is the harder problem." Name TBD: `docdrift` or `staledocs`.
- **Spawn** — Lightweight, fast, self-hostable code execution sandbox purpose-built for LLM tool-calling. WASM-first cold starts instead of Docker containers. "Judge0 for AI agents" — the execution backend that agent frontends (T3 Code, Cursor, custom agents) plug into. Rides the agent/MCP/tool-use wave.

---

## Meta / Process Ideas

- **Build in public** — update build logs at the right place (projects/)
- **Start a company loop** — research pain with agents → MVP → get users
