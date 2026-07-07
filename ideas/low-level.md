
# Low Level

### 1. **Build your own Web Server**

- HTTP parsing, routing, middleware, concurrency, timeouts.
- This teaches you how every backend request actually flows.

### 2. **Build your own Database / Key-Value Store**

- Storage engine, indexing, WAL, compaction, concurrency control.
- You'll finally understand why databases are slow or fast.

### 3. **Build your own Cache System (Redis-like)**

- Eviction policies (LRU/LFU), TTLs, memory management, persistence tradeoffs.
- This teaches performance and real-world scaling.
- **Redis Clone** — Simple in-memory DB with commands, pub/sub, persistence.

### 4. **Build your own Message Queue / Broker**

- Producers, consumers, retries, ordering, at-least-once vs exactly-once.
- This is core to modern distributed backend systems.

### 5. **Build a Distributed System (Mini Microservices Platform)**

- Service-to-service calls, auth, rate limiting, failures, retries, observability.
- This ties everything together and separates seniors from juniors.

- Build your own operating system
- Build your virtual machine
- Build your own game engine
- Build your compiler
- Build your own programming language
- Build your own browser
- Build your own blockchain
- Build your own encryption algorithm
- Build your own CPU emulator
- Build your own file system
- Build your own container runtime
- Build your own package manager
- Build your own shell
- Build your own window manager
- Build your own GUI toolkit
- Build your own text editor
- Build your own IDE
- Build your own version control system
- Build your own network protocol
- Build your own operating system kernel in assembly
- Build your own scheduler
- Build your own memory allocator
- Build your own hypervisor
- Build your own microkernel
- Build your own compiler backend (LLVM target)
- Build your own query language
- Build your own cache system (like Redis)
- Build your own message broker (like Kafka)
- Build your own search engine
- Build your own machine learning framework
- Build your own graphics renderer (rasterizer or ray tracer)
- Build your own physics engine
- Build your own scripting language
- Build your own audio engine
- Build your own database driver
- Build your own networking stack (TCP/IP implementation)
- Build your own API gateway
- Build your own reverse proxy
- Build your own load balancer
- Build your own CI/CD system
- Build your own operating system bootloader
- Build your own container orchestrator (like Kubernetes)
- Build your own distributed file system
- Build your own key-value store
- Build your own authentication server (OAuth2/OpenID Connect)
- Build your own operating system scheduler
- Build your own compiler optimizer
- Build your own disassembler
- Build your own debugger
- Build your own profiler
- Build your own static code analyzer
- Build your own runtime (like Node.js)
- Build your own scripting sandbox
- Build your own browser engine (HTML/CSS/JS parser and renderer)
- Build your own blockchain consensus algorithm
- Build your own zero-knowledge proof system
- Build your own operating system for embedded devices

- **message framing layer in Cpp** (currently resolving few errors)
  - Never copies payload data
  - Handles fragmentation (one recv != one message)
  - Upper layers get std::string_view (or gsl::span) straight into the original buffer
  - A log structured hash table layer for kv data fetching on the server side (go)
  - Language subtitle delivery pipeline (go)
  - DVR store (go)
  - HLS segmenter (go)

- **Build trading system:** [example](https://github.com/Erio-Harrison/rust-trade)


**PacMan**

- **Stack:** CPP
- **Why:** Learn internals, gui, basic game development


- **Your own programming language** (Tiny Lisp or stack-based)
- **HTTP Proxy with Logging** — Log, cache, replay requests, add latency.


### 2. **Games with Systems Thinking**

- **Tower Defense Game** — With editable logic or level editor.
- **Physics Sandbox** — Collisions, gravity, particles — use Matter.js or Rapier (Rust).
- **Multiplayer Chess / Go / Sokoban** — Implement server logic too.
- **Roguelike Engine** — Procedural generation, tilemaps, turn-based logic.

> You learn rendering, game logic, networking, and polish. Later you can plug in AI players, narration, or level generation.



