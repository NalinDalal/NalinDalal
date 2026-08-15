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
- **Browser from scratch with vim motions** - Minimal HTTP client, HTML parser + DOM, Basic renderer, Keyboard-driven navigation, Vim motion/state machine, History + search, Search autocomplete, Tabs/session management, Cache/cookies, Optional JavaScript engine integration

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

## Cool Projects to Show Off

- **Live DDoS attack map**
- **Unalone** — Let people hangout at locations, real time chat rooms, add friends, earn trust points, language, report user. React Native, Lambda
- **Network wide ad blocker** — Raspberry Pi, AdGuard Home, OpenVPN/WireGuard (use a spare laptop)
- **Shazam clone**
- **Minimal, lightweight, fast navigational app** — React Native, OpenStreetMap, Tegola, OSRM
- **Card game or race game, train via reinforcement learning**

**Low-level stuff**

- Create your own transpiler
- ChatGPT inside calculator
- Convert a spare device into a server

- **Algorithm visualiser sandbox (canvas)**
- **Terminal based game**
- **Terminal based portfolio that runs on vim motions**
- **Domain specific language** — Write music like code, which runs music like animations
- **Shader language compiler** — {your HLSL to compiler = GLSL}. Graphics companies will notice you

---

## Build Your Own — Reference Repos (C/C++)

Topics: Compilers and Interpreters · Database and Storage · Operating Systems and Kernels · Tools, Shells and Editors · Virtual Machines and Emulators · Games and Graphics · Networking and Systems · Math, Graphics and Fun Stuff · Security and Low-Level · Miscellaneous and Unique Stuff

### 1. Compilers and Interpreters

- [Crafting Interpreters](https://craftinginterpreters.com/index.html) (language in Java/C)
- [Write Your Own Lisp in C](https://buildyourownlisp.com/contents)
- [C4 (self-hosting C compiler)](https://github.com/rswier/c4)
- [Tiny-C compiler](https://github.com/LuaDist/tcc)
- [Kaleidoscope (LLVM tutorial in C++)](https://llvm.org/docs/tutorial/)
- [Complete C99 parser in pure Python](https://github.com/eliben/pycparser/tree/main) (a C parser in Python but felt useful)
- [Build a JSON parser in C](https://github.com/DaveGamble/cJSON)
- [Lua (scripting language in C)](https://github.com/lua/lua)

### 2. Database and Storage

- [Build Your Own Database (SQLite clone)](https://cstack.github.io/db_tutorial/)
- [Redis (originally in C)](https://github.com/redis/redis)
- [TinyDB clone in C](https://github.com/nalgeon/sqlean)
- [B+ tree in C](http://amittai.com/prose/bplustree.html)
- [LSM tree in C](https://github.com/xx01cyx/LSM-Tree)
- [Log-structured DB in C](https://github.com/rxi/lite)
- [Simple in-memory KV store](https://github.com/pmwkaa/sophia)
- [File system in C](https://github.com/SrLozano/Simple-File-System)

### 3. Operating Systems and Kernels

- [OS from Scratch](https://github.com/cfenollosa/os-tutorial)
- [xv6 (MIT teaching Unix OS)](https://github.com/mit-pdos/xv6-public)
- [Sortix OS](https://sortix.org)
- [ToaruOS](https://github.com/klange/toaruos)
- [Multiple OS systems project](https://github.com/topics/operating-systems-project)
- [Write your own kernel in C](https://youtube.com/watch?v=FkrpUaGThTQ)
- [Linux from scratch (study Linux source)](https://github.com/torvalds/linux/tree/master)

### 4. Tools, Shells and Editors

- [Kilo text editor (1K lines)](https://github.com/antirez/kilo)
- [Build your own Shell in C](https://brennan.io/2015/01/16/write-a-shell-in-c/)
- [Simple C Debugger](https://github.com/taocp/c-debugger)
- [Nano text editor (classic, in C)](https://git.savannah.gnu.org/git/nano.git/)
- [Vim (study-worthy)](https://github.com/vim/vim)
- [sed in C](https://github.com/aureliojargas/sedsed)

### 5. Virtual Machines and Emulators

- [LC3 VM](https://jmeiners.com/lc3-vm/)
- [TinyVM](https://github.com/jakogut/tinyvm)
- [Write a CHIP-8 emulator in C](https://github.com/Klairm/chip8)
- [NES Emulator](https://github.com/ObaraEmmanuel/NES)
- [GameBoy Emulator](https://github.com/deltabeard/gameboy-c)
- [Write a WASM runtime in C](https://github.com/wasmerio/wasmer)
- [QEMU (huge VM project in C)](https://github.com/qemu/qemu)
- [x86 emulator](https://github.com/topics/x86-emulator)

### 6. Games and Graphics

- [Snake in C (ncurses)](https://github.com/Siddhantjan/Snake-game-in-C)
- [Tetris in C](https://github.com/svedev0/tetris-c)
- [DOOM Fire Algorithm](https://github.com/lpg2709/DoomFireC)
- [Pong in C](https://github.com/flightcrank/pong)
- [Flappy Bird in C](https://gist.github.com/fcharlie/b88b9011a0553fd65d5279e3cb25bc28)
- [Pac-Man in C](https://github.com/rsmahmud/paC-man)
- [Mario in C](https://github.com/MitchellSternke/SuperMarioBros-C)
- [Chess engine in C](https://github.com/topics/chess-engine)
- [Raycasting engine (Wolfenstein 3D style)](https://github.com/tsoding/koil)
- [Mandelbrot fractal generator in C](https://github.com/vkazanov/fractals-in-c)

### 7. Networking and Systems

- [Build your own HTTP server in C](https://github.com/jeremycw/httpserver.h)
- [Simple TCP/IP stack](https://github.com/saminiir/level-ip/tree/master)
- [Write a DNS resolver in C](https://github.com/riveraj/dns-resolver)
- [Socket programming in C](https://youtube.com/watch?v=LtXEMwSG5-8)
- [HTTP client in C](https://github.com/esnet/iperf)
- [Simple FTP client/server](https://gist.github.com/XBachirX/865b00ba7a7c86b4fc2d7443b2c4f238)
- [SSH implementation](https://github.com/topics/ssh-client)

### 8. Math, Graphics & Fun Stuff

- [Write your own linear algebra library in C/C++](https://github.com/sgorsten/linalg)
- [FFT from scratch in C](https://github.com/jtfell/c-fft)
- [Build a raytracer in C](https://github.com/ssloy/tinyraytracer)
- [Build a path tracer in C](https://github.com/topics/pathtracer)
- [Write a 3D software renderer in C](https://github.com/ssloy/tinyrenderer)
- [Graphics engine using SDL](https://github.com/topics/graphics-engine)
- [OpenGL from scratch in C](https://github.com/afiskon/c-opengl-text)
- [Neural net from scratch in C](https://github.com/mounirouadi/Deep-Neural-Network-in-C)
- [Genetic algorithms in C](https://github.com/ggjmI/genetic-C)
- [Build a Perlin noise generator](https://gist.github.com/nowl/828013)

### 9. Security & Low-Level

- [Build a hash function in C](https://github.com/topics/hash-functions)
- [AES in C](https://github.com/kokke/tiny-AES-c)
- [SHA implementation](https://github.com/clibs/sha1)
- [Write your own RSA in C](https://gist.github.com/AmruthPillai/42f4fef15bd2591aeddccae03b31ab25)
- [Packet sniffer in C](https://github.com/topics/packet-sniffer)
- [Write your own sandbox in C](https://github.com/topics/sandbox)
- [Keylogger in C (educational only)](https://github.com/topics/keylogger)
- [Rootkit in C (learning project)](https://h0mbre.github.io/Learn-C-By-Creating-A-Rootkit/)

### 10. Misc and Unique Stuff

- [Markdown parser in C](https://github.com/commonmark/cmark)
- [CSV parser in C](https://github.com/semitrivial/csv_parser)
- [HTTP parser in C](https://github.com/nodejs/http-parser)
- [INI file parser in C](https://github.com/benhoyt/inih)
- [MP3 decoder in C](https://github.com/topics/mp3-decoder)
- [JPEG decoder in C](https://github.com/cefqrn/jpeg-decoder)
- [PNG library in C](https://github.com/randy408/libspng)
- [QR code generator in C](https://github.com/nayuki/QR-Code-generator)
- [Write your own Git](https://wyag.thb.lt)

---

## Recommended Reading

- **[The Art of Unix Programming](http://www.catb.org/~esr/writings/taoup/html/)** — Eric S. Raymond.
  The definitive book on Unix philosophy, design principles, and the culture behind systems programming.
  Covers modularity, textuality, transparency, configuration, interfaces, and more.


