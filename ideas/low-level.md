# Low Level — Build Your Own

A progression from basic to advanced, with the right tool for each job.

---

## Tier 1: Beginner

Single-file tools, stdio, basic string processing. No networking, no persistence.

### CLI Tools

- **wc** — Count lines, words, chars ([C++](github.com/NalinDalal/wc-tool-cpp), [Go](github.com/NalinDalal/wc-tool-go))
- **cut** — Extract columns from text ([C++](github.com/NalinDalal/cut-cpp), [Rust](github.com/NalinDalal/cut-rust), [Go](github.com/NalinDalal/cut-go))
- **sort** — Sort lines ([C++](github.com/NalinDalal/sort-cpp), Rust, Go)
- **grep** — Regex search (C++, Rust)
- **uniq** — Deduplicate adjacent lines (C++, Rust, Go)
- **diff** — Line-by-line comparison (C++, Rust)
- **cat** — Concatenate files (C++, Rust, Go)
- **sed** — Stream editor (C++, Rust)
- **head / tail** — First/last N lines (C++, Rust, Go)
- **tr** — Translate characters (C++, Rust, Go)
- **xargs** — Build and execute command lines (C++, Rust)
- **which** — Locate a command (C++, Rust, Go)
- **tee** — Split stdout to file (C++, Rust)
- **xxd** — Hex dump (C++, Rust)
- **tar** — Tape archiver (C++, Rust)
- **echo server** — Basic TCP echo (C++, Rust, Go)
- **cron / crontab** — Scheduled task runner (C++, Go, Rust)
- **calculator** — Infix expression evaluator (C++, Rust, Go)

### Parsers & Validators

- **JSON validator** — Validate and prettify (Rust, C++, Go)
- **JSON parser** — Parse into a data structure (Rust, C++, Go)
- **YAML parser** — Parse YAML (Rust, Go)
- **jq** — JSON query tool (Rust, Go, C++)
- **yq** — YAML query tool (Rust, Go)

### Tiny Tools

- **loc counter** — Count lines of code (Rust, Go, Python)
- **code comment remover** — Strip comments from source (Rust, Go, C++)
- **duplicate file finder** — Find identical files (Rust, Go, C++)
- **whois** — Domain lookup client (Rust, Go)
- **port scanner** — Scan open ports on a host (Rust, Go, C++)

---

## Tier 2: Intermediate

Networking, state management, multi-file projects, protocol handling.
**Go** and **Rust** shine here — great stdlib, easy concurrency.

### Servers & Protocols

- **Web server** — HTTP/1.1, routing, static files (Rust, Go, C++)
- **curl** — HTTP client (Rust, Go, C++)
- **HTTP(S) load tester** — Benchmarking tool (Go, Rust)
- **DNS resolver** — Resolve domain names (Rust, Go, C++)
- **DNS forwarder** — Forward DNS queries (Rust, Go, C++)
- **traceroute** — Trace network path (C++, Rust)
- **netcat** — TCP/IP swiss army knife (C++, Rust, Go)
- **socat** — Multipurpose relay (C++, Rust)
- **HTTP forward proxy** — Forward requests through proxy (Go, Rust, C++)
- **reverse proxy** — Route/balance to backends (Go, Rust, C++)
- **load balancer** — Round-robin, least-connections (Go, Rust, C++)
- **NTP client** — Network time protocol (Rust, Go, C++)
- **SMTP server** — Send/receive email (Go, Rust)
- **IRC client** — Chat protocol client (Rust, Go, C++)
- **rate limiter** — Token bucket, sliding window (Go, Rust)
- **realtime chat** — WebSocket-based chat server (Go, Rust)
- **MCP server** — Model Context Protocol for AI agents (Rust, Go, Python)
- **HTTP Proxy with Logging** — Log, cache, replay (Go, Rust)

### Compression & Encoding

- **compression tool** — Huffman coding (Rust, C++, Go)
- **QR code generator** — Encode data into QR (Rust, Go, C++)

### Simple Services

- **URL shortener** — Redirect service with persistence (Go, Rust)
- **pastebin** — Share text snippets (Go, Rust)
- **uptime monitoring service** — Ping websites, alert on failure (Go, Rust)
- **scheduling automation app** — Calendar/task scheduler (Go, Rust)

### Interpreters (Toy)

- **Brainfuck interpreter** — Minimal esolang (C++, Rust, Go)
- **Forth interpreter** — Stack-based language (C++, Rust)

### Basic Games (C, C++, Rust)

- **Pong**
- **Snake**
- **Tetris**
- **Sudoku** — Solver + generator
- **Wheel of Names** — Random picker

---

## Tier 3: Advanced

Persistence, concurrency, distributed concepts, infrastructure.
Best fit: **Rust** (safety + perf) or **Go** (simplicity + goroutines). **C++** for maximum control.

### Databases & Storage

- **Redis server** — In-memory data store (C++, Rust, Go)
- **Redis CLI tool** — Client for Redis (Rust, Go)
- **Memcached server** — Distributed memory cache (C++, Rust, Go)
- **Memcached CLI tool** — Client for Memcached (Rust, Go)
- **Bitcask** — Log-structured hash table storage (Go, Rust)
- **key-value store** — Custom storage engine (Rust, Go, C++)
- **cache system** — LRU/LFU eviction, TTLs (Rust, Go, C++)
- **message broker** — Like Kafka / NATS (Go, Rust, C++)
- **database driver** — Wire protocol client (Rust, Go, C++)

### Version Control & CI

- **version control system (Git)** — Commit, diff, branch, merge (C++, Rust, Go)
- **Git contributions visualisation tool** — Heatmap of activity (Rust, Go, Python)
- **CI/CD system** — Pipeline runner (Go, Rust)

### Infrastructure (Rust, Go)

- **container runtime (Docker)** — Namespaces, cgroups, images (Go, Rust, C++)
- **container orchestrator (K8s)** — Scheduling, service discovery (Go, Rust)
- **package manager** — Dependency resolution, install (Rust, Go)
- **authentication server** — OAuth2 / OpenID Connect (Go, Rust)
- **API gateway** — Route, rate limit, auth (Go, Rust, C++)

### Advanced Interpreters & Compilers (Entry) — Rust, OCaml, C++

- **Lisp interpreter** — S-expressions, eval/apply
- **query language** — Simple SQL-like parser and executor
- **spelling correction tool** — Edit distance / BK-tree (Rust, Go, C++)

### Password Tools (Rust, Go, C++)

- **password cracker** — Dictionary / brute force
- **password manager** — Encrypted vault
- **zip file cracker** — Brute force zip passwords

### Shell (C++, Rust, Go)

- **shell** — Command parsing, pipes, job control
- **top / strace** — Process monitoring / syscall trace (C++, Rust)

### Mid-Complexity Games (C, C++, Rust)

- **Chess** — Move validation, basic AI
- **Space Invaders**
- **Asteroids**
- **Minesweeper**
- **PacMan** — Internals, GUI, game dev basics
- **Tower Defense** — Editable logic or level editor
- **Multiplayer Chess / Go / Sokoban** — Server logic included

---

## Tier 4: Hard Mode

Full language implementation, OS concepts, browsers, distributed systems.

### Languages & Compilers — Rust, OCaml, Haskell, C++

- **compiler** — Frontend (lexer, parser, codegen)
- **compiler backend** — LLVM target
- **compiler optimizer** — SSA, constant folding, dead code elimination
- **programming language** — Tiny Lisp or stack-based
- **scripting language** — Variables, functions, closures
- **text editor** — Buffer management, syntax highlighting (C, C++, Rust)
- **IDE** — Editor + LSP integration + file tree (C++, Rust, TypeScript)

### Operating Systems — C, Assembly, Rust

- **operating system** — Kernel, drivers, syscalls
- **kernel in assembly** — Boot to minimal kernel
- **operating system for embedded devices**
- **bootloader** — Multi-stage boot (Assembly, C)
- **scheduler** — Preemptive multitasking (C, Rust)
- **memory allocator** — malloc/free from scratch (C, Rust)
- **hypervisor** — Virtualize CPU/memory (C, Rust)
- **microkernel** — Minimal IPC-based kernel (C, Rust)
- **window manager** — X11/Wayland compositor (C, C++, Rust)
- **GUI toolkit** — Widgets, event loop, rendering (C, Rust, C++)
- **Video course:** [Write your own Operating System](https://www.youtube.com/playlist?list=PLHh55M_Kq4OApWScZyPl5HhgsTJS9MZ6M)

### Browsers & Runtimes — C++, Rust

- **browser** — Full browser
- **browser engine** — HTML/CSS/JS parser and renderer
- **runtime** — Like Node.js (event loop, JS engine binding)
- **scripting sandbox** — Isolated code execution

### Networking — C++, Rust

- **networking stack** — TCP/IP from scratch
- **network protocol** — Custom protocol design

### Distributed Systems — Go, Rust, C++

- **distributed file system** — Chunk storage, replication
- **distributed system (microservices)** — Service discovery, retries, observability, auth, rate limiting
- **message queue** — At-least-once/exactly-once, ordering, retries

### Apps — Go, Rust, C++

- **Dropbox** — File sync service
- **Notion** — Block-based editor + database
- **Google Keep** — Notes with reminders
- **video chat application** — WebRTC + signaling
- **BitTorrent client** — Peer protocol, piece selection (C++, Rust, Go)
- **online Python playground** — Sandboxed execution (Rust, Go)
- **language server (LSP)** — Completion, diagnostics, hover (Rust, Go, C++)
- **static site generator** — Markdown → HTML (Rust, Go)
- **markdown to PDF editor** (Rust, C++)
- **markdown presentation tool** (Rust, Go)
- **blogging software** (Go, Rust)
- **Loom clone** — Screen recording + sharing (C++, Rust)
- **Monkeytype clone** — Typing test (Rust, Go, TypeScript)
- **ELIZA chatbot** — Pattern-matching therapist (any language)
- **OCR tool** — Image to text (C++, Rust, Python)
- **ebook reader** (C++, Rust)
- **RTFM agent** — Docs-aware Q&A (Rust, Python)

---

## Tier 5: Expert

Specialized domains: graphics, crypto, emulation, ML, blockchain.

### Graphics & Rendering — C, Rust, C++ (GPU: CUDA/Vulkan)

- **graphics renderer** — Rasterizer or ray tracer
- **physics engine** — Collision detection, rigid bodies
- **audio engine** — Mixing, effects, playback
- **Mandelbrot set explorer** — Fractal visualization
- **game engine** — ECS, rendering, input, audio

### Emulation — C, C++, Rust

- **CPU emulator** — Fetch-decode-execute cycle
- **disassembler** — Binary → assembly
- **debugger** — Breakpoints, step, memory inspect
- **profiler** — Sampling/instrumentation

### Crypto & Blockchain — Rust, C, Go

- **encryption algorithm** — AES/RSA from scratch
- **blockchain** — Blocks, mining, consensus
- **blockchain consensus algorithm** — PoW, PoS, PBFT
- **zero-knowledge proof system** — Prover/verifier

### Search & ML — C++, Rust, Python

- **search engine** — Crawl, index, rank (TF-IDF)
- **machine learning framework** — Autograd, optimizers, layers
- **static code analyzer** — AST analysis, lint rules

### Advanced Games (C, C++, Rust)

- **Roguelike Engine** — Procedural generation, tilemaps, turn-based logic
- **Physics Sandbox** — Collisions, gravity, particles (Matter.js / Rapier)

---

## Specific

- **message framing layer in Cpp**
  - Never copies payload data
  - Handles fragmentation (one recv != one message)
  - Upper layers get std::string_view (or gsl::span) straight into the original buffer

A log structured hash table layer for kv data fetching on the server side (Go)
Language subtitle delivery pipeline (Go)
DVR store (Go)
HLS segmenter (Go)

- **Build trading system** — [example](https://github.com/Erio-Harrison/rust-trade) (Rust, C++, Go)

---


## Recommended Reading

- **[The Art of Unix Programming](http://www.catb.org/~esr/writings/taoup/html/)** — Eric S. Raymond.
  The definitive book on Unix philosophy, design principles, and the culture behind systems programming.
  Covers modularity, textuality, transparency, configuration, interfaces, and more.


