# Flowkera

> **The control plane for automation.**
> Test · Version · Observe · Debug · Secure · Recover

Part of **Super 30 2.0 — Project #2** (successor to "Own n8n"). Main project remains **DriftLock**.

---

## 1. The starting point: explaining Zapier

Zapier is an automation layer between apps.

```
When X happens → do Y → then maybe do Z
```

Example:

```
New lead submits a form
  → create a CRM record
  → send an email
  → notify Slack
  → ask an AI agent to qualify the lead
  → update the CRM
```

Zapier calls these workflows **Zaps**.

A Zap has two structural pieces:

**1. Trigger** — something happens in an external system.
New Gmail email, new Stripe payment, new Google Sheet row, new Typeform submission, new GitHub issue, webhook received.

**2. Actions** — Zapier performs operations in other systems.

```
Trigger: New lead submitted
   ↓
Action: Create lead in HubSpot
   ↓
Action: Send email
   ↓
Action: Post to Slack
   ↓
Action: Call AI
   ↓
Action: Update lead status
```

Underneath, it is mostly APIs, webhooks, authentication, queues, and a workflow engine.

---

## 2. The real design problem

Naive framing: *"I'll make another Zapier."*

That framing is dead. Two facts make it dead:

- **n8n** is far more mature than "a visual workflow builder". 500+ integrations, workflow replay/debugging, Git-based environments, execution history, security auditing, AI functionality, observability, OpenTelemetry, an OEM offering.
- **Zapier** is no longer just trigger → action. As of 2026 it advertises 9,000+ apps, AI steps/agents, code steps, webhooks, APIs, MCP, Tables, Interfaces, analytics, and embedded/white-label capabilities.

The interesting complaint loop is not "there is no engine". It is:

```
n8n / Zapier
   ↓
production workflows
   ↓
something breaks
   ↓
?????
```

That `?????` is where the product lives.

### The recurring complaints (from n8n community discussions)

Debugging complex workflows, versioning, testing, credentials, long-running executions, retries/idempotency, monitoring, environment promotion, and "why did this workflow fail?"

### The key conceptual distinction

**Zapier = deterministic automation**

```
WHEN A → THEN B → THEN C
```

**AI automation = dynamic orchestration**

```
WHEN A happens
  → understand the situation
  → decide what needs doing
  → choose tools
  → delegate
  → inspect results
  → decide next action
  → request human approval when necessary
  → execute
```

---

## 3. Five product wedges considered

### Idea 1 — Automation CI/CD ⭐ investigate first

Treat an automation as production software, not a disposable visual diagram.

```
GitHub
  ↓
Workflow Pull Request
  ↓
Test → Validate → Security checks → Deploy → Monitor → Rollback
```

A workflow gets a test suite:

```json
{
  "workflow": "lead-router",
  "tests": [
    {
      "name": "high-score-lead",
      "trigger": { "email": "founder@acme.com", "company": "Acme" },
      "mocks": { "enrichment": { "score": 94 } },
      "expect": ["CRM.createLead", "Slack.sendMessage"]
    }
  ]
}
```

```
Workflow v1.4
   ↓
fixture input
   ↓
mock APIs
   ↓
execute → assert outputs
   ↓
PASS / FAIL
```

Then `v1.4 → v1.5` produces an automated diff, runs the suite, gates a PR, and ships.

> n8n already has Git-based source control/environments and replay/retry. So this is not invented from nothing — the room is in making the *developer workflow* software-engineering-like.

Recruiter value: distributed systems, CI/CD, queues, API integrations, testing, versioning, secrets, observability, failure recovery — not "I made a chatbot".

### Idea 2 — Automation Control Center

```
        Automation Control Center
      ┌──────────┼──────────┐
      ▼          ▼          ▼
     n8n       Zapier      Make
      └──────────┼──────────┘
                 ▼
           YOUR DASHBOARD
```

```
Lead enrichment        HEALTHY
CRM sync               HEALTHY
Invoice processor      FAILING
Daily report           SILENT
Customer onboarding    DEGRADED
```

But a dashboard alone is not enough — third-party monitoring tools already exist. The useful version is:

```
observe → diagnose → recover
```

not

```
observe → send Slack alert
```

### Idea 3 — Automation FinOps

Automation cost is getting complicated. Zapier's pricing can make AI steps consume multiple tasks depending on model tier and tool calls.

```
Workflow: Lead qualification

  HTTP              $0.000
  CRM               $0.000
  LLM call          $0.014
  Search API        $0.008
  Zapier execution  $0.020
  -----------------------------
  Total             $0.042

Ran 84,000 times  →  $3,528 / month
Potential waste   →  31%
Cause            →  repeated enrichment calls
```

Answer the question: **"Which automations are costing me money, and why?"**

n8n's economics differ (self-hosting shifts cost to infra + external API/model usage), so a cross-platform cost layer normalizes: execution cost, API cost, LLM cost, infra cost, retry cost, wasted execution cost.

### Idea 4 — Automation Governance (enterprise)

```
Who can deploy workflows?
Who can access credentials?
Who changed this workflow, and what version ran?
Which workflows can send email?
Which workflows can delete CRM records?
Which workflows use AI / contain customer data?
```

```
Developer changes workflow
   ↓
Policy engine
   ↓
"Uses production credentials"
   ↓
Requires approval
```

Becomes: RBAC, secrets, audit, approvals, policy, environment promotion, compliance.

### Idea 5 — "Describe the process, get a production workflow" (sexy but table stakes)

```
"When a new lead comes in, research the company, score it,
 put it in HubSpot, and notify sales if score > 80."
   ↓
Understand intent → Generate workflow → Validate integrations
   ↓
Generate tests → Show execution graph → Ask approval → Deploy
```

Both vendors are already shipping AI-assisted workflow creation. Do not make this the primary differentiation.

The defensible version:

```
AI generates it
   → our system tests, verifies, monitors, and safely operates it
```

---

## 4. What Flowkera actually is

> **A production control plane for automation.** Not another workflow editor.

The underlying engine can initially be n8n.

```
                         FLOWKERA
              ┌──────────────────────────┐
              │  Build / Test / Operate  │
              │                          │
              │  Tests                   │
              │  Versioning              │
              │  Debugging               │
              │  Observability           │
              │  Recovery                │
              │  Policies                │
              │  Cost                    │
              └────────────┬─────────────┘
                           │
                           ▼
                          n8n
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
           Gmail         Slack        Stripe
              └────────────┼────────────┘
                           ▼
                         APIs
```

Eventually:

```
Flowkera
  ├── n8n adapter
  └── Flowkera engine
```

### Legal constraint (design from day one)

n8n's licensing explicitly distinguishes internal use, backend use in a product, and exposing/editing n8n workflows to customers. Backend use requires the appropriate Enterprise arrangement; embedding the editor for end users is an OEM offering, and the editor remains n8n-branded.

- Side project: freely use n8n.
- Commercial Flowkera: license/commercial agreement is an **architectural constraint**, not a footnote.

### Competitive reality check

People are already building pieces of these ideas — n8n ships observability tooling, and independent products already monitor n8n/Make/Zapier. That is useful material, not a problem. Document honestly:

> "Here are the existing solutions. Here is what they do. Here is the remaining problem. Here is my experiment."

That turns this into an engineering investigation, not a toy Zapier clone.

---

## 5. Build plan — phase by phase

### Phase 0 — Define the wedge

Do not start with "Flowkera competes with Zapier".
Start with **"Flowkera makes automations behave like production software."**

A company has lead routing, customer onboarding, invoice processing, Slack alerts, CRM sync, support ticket routing, an AI email agent. The automation exists. Now:

```
Why did it fail?
Which version ran?
What changed?
Can I reproduce it? Test the new version? Safely retry it?
Did it partially execute? How many customers were affected?
How much did it cost? Who changed it? Can I roll it back?
```

### Phase 1 — Run real n8n first

Don't abstract anything yet. Docker + Postgres + n8n, then Redis when moving to queue mode.

```
        ┌───────────┐
        │   n8n UI  │
        └─────┬─────┘
              │  Main/API
        ┌─────▼─────┐
        │ Postgres  │
        └─────┬─────┘
              │
           Redis
              │
   ┌──────────┼──────────┐
   ▼          ▼          ▼
Worker     Worker     Worker
```

This is n8n queue mode: main process + workers, Redis brokers executions, Postgres stores state/data, workers pull → run → write back → notify.

### Phase 2 — Flowkera's own backend

Keep it separate from n8n. TypeScript throughout.

```
flowkera/
├── apps/
│   ├── web/
│   └── api/
├── workers/
│   ├── collector/
│   ├── analyzer/
│   └── test-runner/
├── packages/
│   ├── workflow-ir/
│   ├── n8n-adapter/
│   ├── rules/
│   ├── test-engine/
│   ├── execution-model/
│   └── observability/
└── infra/
    ├── docker/
    └── migrations/
```

| Concern | Choice |
| --- | --- |
| Frontend | Next.js / React |
| API | TypeScript + Fastify |
| Database | PostgreSQL |
| Queue | Redis + BullMQ |
| Observability | OpenTelemetry |
| Storage | S3-compatible object store (later) |

**Do not put Gmail/Slack/etc. credentials in Flowkera initially.** Let n8n own them. n8n stores credential data encrypted and its workflow model separates config from credential material — its package format records credential *requirements* without exporting secrets. This massively shrinks our security surface.

### Phase 3 — Flowkera's own workflow model

Not to replace n8n — to stop Flowkera's internals from becoming *"whatever n8n happens to store this month."*

```ts
type Workflow = {
  id: string;
  name: string;
  version: number;
  trigger: NodeId[];
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  metadata: { environment: "dev" | "staging" | "prod"; owner: string };
};

type WorkflowNode = {
  id: string;
  type: string;
  version: number;
  config: unknown;
  capabilities: { sideEffect: boolean; network: boolean; ai: boolean };
};

type WorkflowEdge = { from: string; output: string; to: string; input: string };
```

This is the **Workflow IR**. n8n's own model is already graph-based (nodes + connections, multiple input/output structures, waiting execution state) — we preserve that boundary.

### Phase 4 — The n8n adapter

```
Flowkera IR ⇄ n8n adapter ⇄ n8n workflow
```

Initially support a subset only: `Webhook`, `HTTP Request`, `IF`, `Code`, `Set`, `Postgres`, `Slack`, `Gmail`.

Don't build 1,000 connectors. n8n does that. n8n's repo already separates the workflow engine from its integration nodes — the same boundary Flowkera should hold.

### Phase 5 — Workflow ingestion

```
n8n workflow JSON / package → parse → normalize → store
```

n8n's package format is useful here: workflows plus node types, credential requirements, variables, tags, data tables — deliberately without credential secrets.

Tables: `workflows`, `workflow_versions`, `workflow_nodes`, `workflow_edges`.

### Phase 6 — Execution collector

The point where Flowkera becomes useful.

```
Execution #18292
  Workflow: Lead Router   Version: v17
  Start: 21:31:04   Duration: 2.8s   Status: FAILED

  Webhook       12ms     SUCCESS
  HTTP         420ms     SUCCESS
  IF             3ms     SUCCESS
  Slack       2,300ms    FAILED
```

You now have a timeline. n8n already exposes execution history with filtering and retry — so do not merely reproduce that screen; build the operational layer above those records.

### Phase 7 — Execution graph

```
              Execution #18292

  Webhook
     │ 12ms
     ▼
  HTTP Request
     │ 420ms
     ▼
  IF
     ├──── yes ────────► Slack
     │                       │ FAILED 2300ms
     │                       ▼
     │                  HTTP 429
     └──── no
```

> "Slack failed after 2.3s with HTTP 429. The execution reached the notification branch after enrichment succeeded."

That is materially better than "Workflow failed."

### Phase 8 — Automation testing (first killer feature) ⭐

Static tests first (no execution needed):

```
✓ trigger exists          ✓ referenced nodes exist
✓ all connections valid   ✓ required parameters present
✓ no unreachable nodes    ✓ required credentials available
✓ production-dangerous nodes detected
```

Then dynamic tests with fixtures, mocks, and assertions:

```
Workflow v18 → Tests → PASS PASS PASS FAIL
```

### Phase 9 — Sandboxed execution

```
Developer changes workflow
   ↓
Flowkera detects diff
   ↓
Tests
   ↓
Policy checks
   ↓
Approval
   ↓
Deploy
```

n8n's Git-backed environments have topology and promotion constraints — useful prior art, not an empty problem.

### Phase 10 — Workflow diff

```
Lead Router v17 → v18

ADDED
  Slack notification
CHANGED
  HTTP timeout     10s → 30s
  condition        score > 70 → score > 80
REMOVED
  email notification
```

Plus **impact analysis**:

> 23 production executions would now take the new branch. Potential side effect: Slack message will be sent to the production channel.

### Phase 11 — Policies

```
Rule: production workflows may not, without approval —
  - delete database records
  - send external email
  - spend money
  - modify production users
```

```
Developer → change → Policy engine → "Production Gmail send" → REQUIRES APPROVAL
```

### Phase 12 — Incident detection

```
Lead Router
  normal failure rate   0.2%
  current failure rate 18%

INCIDENT
  Failures      1,842 / 10,132
  Primary error HTTP 429
  Started       21:16
  Likely cause  rate-limit increase
```

```
Incident
  ├── affected workflows
  ├── affected executions
  ├── root error
  ├── first failure / latest failure
  └── suggested recovery
```

### Phase 13 — Recovery (with real semantics)

Buttons: `Retry` `Replay` `Disable` `Rollback` `Pause` `Open incident`

They are **not** the same operation:

| Operation | Meaning |
| --- | --- |
| **Retry** | Try the failed operation again |
| **Replay** | Re-execute the workflow from recorded input/state |
| **Rollback** | Make a previous workflow version active |

n8n already supports retry-from-execution (with original or currently-saved workflow). Flowkera turns that low-level feature into a version-aware incident/recovery system.

### Phase 14 — Cost engine

```
Lead qualification — 12,481 executions

  OpenAI       $182
  Search API    $94
  n8n / infra   $61
  Retries       $27
  ────────────────────
  Total        $364

  35% of LLM calls are duplicates.
```

This is what makes it useful to ops/engineering teams, not just automation builders.

### Phase 15 — AI, but only *after* the system has data

Not "AI builds workflows" (commodity). Instead:

```
Execution failed
   ↓
Structured execution context
   ↓
AI diagnosis
   ↓
"Likely cause: HubSpot returned 429 after an API quota change."

Suggested fixes:
  1. Increase backoff
  2. Reduce concurrency
  3. Add retry policy
  4. Switch enrichment provider
```

**AI may suggest. Human/system policy decides.**

### Phase 16 — Our own execution engine (the "Own n8n" part)

Only now. Start tiny.

```
Workflow → Graph → Scheduler → Execution stack → Node runner → Result → Next node
```

```ts
while (execution.queue.length > 0) {
  const task = execution.queue.shift();
  const result = await runner.execute(task);
  persistResult(result);
  const next = graph.next(task.node, result);
  execution.queue.push(...next);
}
```

n8n's engine already has execution stacks, waiting-execution state, source/connection data, runtime context, cancellation, and resumability. Those are the concepts to reproduce *experimentally*, not to copy from n8n's implementation.

### Phase 17 — A real queue

```
API → Redis → Worker × 3
```

Each execution is a job:

```json
{ "executionId": "exec_18292", "workflowVersion": 18 }
```

Worker loop: claim job → load workflow → execute node → persist checkpoint → enqueue next node.

### Phase 18 — Idempotency and leases

```
Worker → Slack.send() → SUCCESS → worker crashes
```

A naive system re-sends. So:

- every side-effecting operation gets an `idempotency_key`
- every worker job gets a lease: `claimed_by`, `claimed_at`, `lease_expires_at`, `heartbeat`
- worker dies → lease expires → job becomes retryable

This is exactly the detail that separates an automation demo from an execution platform.

### Phase 19 — Long-running workflows

```
Send email → WAIT 3 days → Check response → Continue
```

Never hold a worker for three days.

```
Execution #18292
  status    = WAITING
  resume_at = 2026-10-10T10:00:00
```

Scheduler fires → queue → worker resumes. This is why workflow engines need persistent execution state rather than scripts.

### Phase 20 — Code execution isolation

Never execute arbitrary user Code-node code inside the API server.

```
Workflow worker → Task runner → Sandbox
                                  (container / microVM / isolated process)
```

n8n uses task runners and documents external mode with separate runner processes/containers for JS and Python workloads.

### Final architecture

```
                         FLOWKERA
           ┌────────────────┼────────────────┐
         Build            Test            Operate
           │                │                │
       Workflow IR      Test engine       Incidents
       Versioning       Fixtures           Recovery
       Diff             Replay             Monitoring
       Policies         Assertions         Cost
           └────────────────┼────────────────┘
                            │
                     Execution API
                ┌───────────┴────────────┐
             n8n Adapter            Flowkera Engine
                ▼                        ▼
               n8n                     Workers
                └───────────┬────────────┘
                       Integrations
```

Start: `Flowkera → n8n`. Later: `→ n8n OR Flowkera Engine`. Eventually: `→ Flowkera Engine`.

---

## 6. What v0.1 actually looks like

Ridiculously narrow:

```
        n8n
         ↓
     Flowkera
         ↓
  ┌──────┼──────┐
  ▼      ▼      ▼
Workflow Exec   Tests
  diff  timeline checks
       └────┼────┘
            ▼
           UI
```

Workflow page:

```
Lead Router
Version: v18          Environment: production
Status: DEGRADED
Executions today: 12,481   Success 98.1%   Failure 1.9%

──────────────────────────────
Latest incident
HTTP 429 from enrichment API
First seen 21:16   Affected runs 1,842
[Inspect]
──────────────────────────────
Version diff   v17 → v18
  + Slack notification
  + timeout 10s → 30s
  - email notification
──────────────────────────────
Tests   12 / 12 passing
[Run tests] [Replay] [Rollback]
```

That is already a real product concept.

---

## 7. What NOT to build (initially)

| Don't build | Why |
| --- | --- |
| 9,000 integrations | Zapier has them; n8n has 500+; they're exposed via MCP/SDKs |
| AI workflow generator | becoming table stakes |
| A pretty workflow editor | n8n already has one |
| Your own credential vault | n8n solves it; it would enlarge our attack surface |

---

## 8. The AI / agent layer (from the CEO → Marketing Manager thread)

This is where a deterministic workflow becomes dynamic orchestration.

```
Trigger
   ↓
AI Manager
   ↓
Decide what needs to happen
   ↓
Create tasks
   ↓
Specialist agents
   ├── SEO agent
   ├── Outreach agent
   ├── Social agent
   └── Research agent
   ↓
Manager reviews results
   ↓
Execute actions
```

Example flow:

```
New company added to prospect list
   ↓
Marketing Manager
   ↓
Research company → Find decision maker → Analyze website
   ↓
Generate outreach
   ↓
Human approval
   ↓
Send
```

**The AI must not have unrestricted access.** Explicit tool grants:

```
Marketing Manager
  CAN:     search_web, create_task, assign_task, read_campaign, request_approval
  CANNOT:  send_email, spend_money, delete_data

Outreach agent
  CAN:     search_contacts, draft_email, send_email_after_approval
```

That gives permissions and auditability — and it maps onto Flowkera's policy engine.

---

## 9. If we instead built our own Zapier

Kept for reference. This is the shape of the **eventual** Flowkera engine, and the architecture that sits under the control plane.

```
                 YOUR APP
                    │
              ┌─────▼──────────┐
              │ Workflow Builder│
              └─────┬──────────┘
                    │
              ┌─────▼──────────┐
              │ Workflow Engine│
              └─────┬──────────┘
     ┌──────────────┼──────────────┐
     ▼              ▼              ▼
  Gmail          Slack          Stripe
     └──────────────┼──────────────┘
                    ▼
            AI / Agent Layer
                    ▼
                Database
```

**Workflow definition** — JSON, engine-agnostic:

```json
{
  "name": "Lead Qualification",
  "trigger": { "app": "webhook", "event": "lead.created" },
  "steps": [
    { "id": "1", "app": "openai", "action": "classify",
      "input": { "text": "{{trigger.email}}" } },
    { "id": "2", "app": "hubspot", "action": "update_contact",
      "input": { "status": "{{steps.1.result}}" } },
    { "id": "3", "app": "slack", "action": "send_message",
      "input": { "message": "New lead classified as {{steps.1.result}}" } }
  ]
}
```

The engine doesn't care whether it's processing leads, invoices, or support tickets.

**Connectors** — one adapter per app, standardized operations:

```
connectors/
  gmail/  slack/  stripe/
  hubspot/  github/  notion/  openai/
```

```ts
interface Connector {
  authenticate(): Promise<void>;
  actions(): Action[];
  execute(action: string, input: unknown): Promise<unknown>;
}
```

```ts
// slack exposes
slack.sendMessage  slack.createChannel  slack.addReaction

// github exposes
github.createIssue  github.addComment  github.createPullRequest
```

**Trigger system** — the most important part. Webhooks where available:

```
Stripe ──POST /webhooks/stripe──► Our server
   → find workflows listening for payment.created
   → execute workflow
```

Polling where not:

```
Every 5 min: GET /gmail/messages?after=...
   → anything new? → YES → execute
```

**Execution engine** — the heart:

```ts
async function executeWorkflow(workflow, event) {
  const context = { trigger: event, steps: {} };
  for (const step of workflow.steps) {
    const input = resolveVariables(step.input, context);
    const result = await executeStep(step, input);
    context.steps[step.id] = { result };
  }
  return context;
}
```

The interesting part is the templating: `{{trigger.email}}`, `{{steps.1.result}}` — that is how data moves between steps.

**Queue + retries** — external APIs fail constantly:

```
attempt 1 → fail → wait 2s → attempt 2 → fail → wait 5s → attempt 3 → ✓
```

Execution record schema:

```
execution_id, workflow_id, step_id, status, attempt,
input, output, error, started_at, finished_at
```

**MVP stack:**

```
React / Next.js → API (TypeScript) → PostgreSQL + Redis/BullMQ → Webhooks
                                          ↓
                                       Workers
                                          ↓
                                     AI Tool Layer → Gmail / Slack / GitHub
```

**Database tables:** `users`, `workspaces`, `connections`, `workflows`, `workflow_steps`, `executions`, `execution_steps`, `tasks`, `agents`, `agent_runs`, `approvals`.

> This is enough to build a serious first version — and it's exactly what the later Flowkera engine phases (16–20) graduate into.

---

## 10. Notes from the n8n AI-email-agent tutorial

Useful as a worked example, not as architecture. It composes:

```
Google Docs → Pinecone → OpenAI → Gmail
```

n8n coordinates; a separate "Send Email" workflow is exposed as a **callable tool**, and an Agent node decides when to call the contact-lookup and email tools.

Three things it tells us:

1. **A workflow is a graph, not a line** — triggers, transformations, branches, sub-workflows, tools, waits, AI nodes.
2. **The tutorial itself treats n8n's execution history as the debugging surface** — inspect each node's input/output, find where it broke. Exactly the surface Flowkera productizes.
3. **Don't mistake it for "how n8n works internally"** — the tutorial itself admits the agent has no memory and only two tools. It's an application built on the engine.

The real architectural gold is in n8n itself: a monorepo where `workflow` holds the representation, `core` the execution engine, `cli` the backend/API, `editor-ui` the editor, `nodes-base` the integrations.

The core engine maintains an **execution stack**, waiting executions, execution data, runtime context, and resumable state — not `for step in workflow`.

---

## 11. Documentation sequence (Super 30 2.0 — Project #2)

```
01  What is n8n?
02  Read the architecture
03  Run n8n locally
04  Build a simple workflow
05  Read the workflow representation
06  Follow one execution through the code
07  Understand the execution stack
08  Understand waiting / resume
09  Understand workers / queues
10  Understand credentials
11  Understand nodes
12  Build Flowkera IR
13  Build n8n adapter
14  Build execution collector
15  Build workflow diff
16  Build workflow tests
17  Build incident detection
18  Build replay / recovery
19  Build policy engine
20  Build cost analysis
21  Add AI diagnosis
22  Implement tiny Flowkera engine
23  Compare Flowkera engine vs n8n
24  Document where n8n wins
25  Document where Flowkera wins
```

Steps 24–25 matter most. Do not try to prove "I built something better than n8n". Run experiments:

```
Experiment 1  How does n8n execute a branching graph?
Experiment 2  What happens when a worker dies?
Experiment 3  How do retries interact with side effects?
Experiment 4  How should workflow versions be represented?
Experiment 5  Can failed executions be deterministically replayed?
Experiment 6  What is the minimum execution engine needed?
Experiment 7  Where does n8n become difficult to extend?
```

---

## 12. Project plan

```
SUPER 30 2.0 — PROJECT #2: Flowkera
"Own n8n"

Goal: Understand workflow automation deeply.
One-liner: A production control plane for automation — test, version, observe,
debug, govern and recover workflows, initially powered by n8n and eventually
backed by our own execution engine.

Phase 1  Study n8n architecture
Phase 2  Run n8n locally
Phase 3  Build integrations
Phase 4  Build reliability / testing layer
Phase 5  Run real workloads
Phase 6  Document failures and bottlenecks
Phase 7  Design our own automation architecture
Phase 8  Potentially replace n8n components
```

The loop that makes this an investigation rather than a guess:

```
Study n8n
  → build a layer on top
  → run real workflows
  → measure failures and costs
  → find a real operational pain
  → build the solution
```

### The pitch

**Engineer:** "I studied a production workflow engine and built a reliability/control layer around it, then experimented with replacing pieces of the engine."

**Evidence, not just a repo:** architecture diagrams, benchmarks, failure experiments, API designs, load tests, incident reports, design decisions, tradeoffs.

That is substantially stronger than a repository saying "Zapier clone".

### Scope guard

DriftLock remains the main thing. This stays a documented technical rabbit hole until it produces a real insight or becomes useful enough to deserve more time.

---

## Name

**Flowkera**

Coined. No indexed results across general web, GitHub, LinkedIn, startups, SaaS, or AI searches — but that is **not** trademark clearance, and domain availability still needs a registrar/DNS check.

Chosen because the project can evolve:

```
n8n companion → automation control plane → automation platform
```

without the name becoming misleading — and because it is not overtly "AI-ish".

```
Zapier / n8n  →  workflows  →  Flowkera  →  test · observe · secure · debug · recover
```

---

## References

- [How to build an AI email agent with n8n (Medium)](https://medium.com/@amitXD/how-to-build-an-ai-email-agent-with-n8n-step-by-step-no-code-guide-9ea9d7393ef5)
- [n8n LangChain + RAG developer's guide (Medium)](https://medium.com/@vedaterenoglu/n8n-langchain-and-rag-a-developers-guide-cf8f16dcfbfb)
- [w8w](https://github.com/Rudra-Sankha-Sinhamahapatra/w8w)