# AI and Automation/ Gen AI

### 1. **Video Editor on top of Sora**

- A marketplace for users to upload their photos and participate in videos
- Visual editor that lets users edit content themselves
- Let creators build templates that users can use

### 2. **OS Devin - openswe**

- Category of projects
  - Coderabbit
  - Lovable
  - Devin
- Indexing codebases
- Sandboxes for running/building code
- Comprehensive AI layer
- Github integration

---

# LLM Parsers / Agents

- **Cursor for Blender/2d Animation**
  Like create some 2d animation via script, but the script gnrt via llm
  [github](https://github.com/ahujasid/blender-mcp)

  ```mermaid
  graph TD
  A[MCP Client] --> B[Blender MCP Server]
  B --> C[Blender]
  ```

---

# AI Interview Coach

**Idea:** Upload your resume → AI grinds you with interview questions + scores your confidence, English, and eye contact via whisper + webcam → session log with what to improve.

- Stack decided: Vite + Bun, Whisper for transcription, MediaPipe (in-browser, privacy-first) for eye contact, LLM for feedback

### Resume → Questions

- Upload PDF/DOCX → extract text (pdf-parse / mammoth)
- LLM generates role-specific questions from resume (projects, tech, behavioral)
- Output: ordered question list, one question shown at a time

### Live Session

- Mic recording via browser `MediaRecorder` → chunks → Whisper transcription (locally via whisper.cpp or OpenAI API)
- Webcam face tracking in-browser with MediaPipe Face Mesh → eye-contact % per question
- Filler-word + pacing detection from transcript (um/uh counts, words-per-min)
- Timer per question (2 min hard stop, optional extend)

### Report

- Per-question breakdown: transcript, eye-contact %, filler words, WPM
- LLM feedback: confidence signals in tone/repetition, English clarity, weak answers (e.g. no STAR), what to improve
- Log saved locally (state-based, no accounts in v1)
