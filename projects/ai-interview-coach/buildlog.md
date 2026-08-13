# Build Log — AI Interview Coach

**Idea:** Upload your resume → AI grinds you with interview questions + scores your confidence, English, and eye contact via whisper + webcam → session log with what to improve.

## 2026-08-13
- Scoped MVP: resume upload → question generation → live session (webcam + mic) → post-session report
- Stack decided: Next.js + Node API, Whisper for transcription, MediaPipe (in-browser, privacy-first) for eye contact, LLM for feedback
- Build in public — updates land here after every session. Actual code lives in its own repo (TBD), this folder is docs only.

## MVP Plan

### Scope (v1)
One flow: upload resume → get ~6 interview questions → answer out loud in front of camera → get a report.

### Slice 1: Resume → Questions
- Upload PDF/DOCX → extract text (pdf-parse / mammoth)
- LLM generates role-specific questions from resume (projects, tech, behavioral)
- Output: ordered question list, one question shown at a time

### Slice 2: Live Session
- Mic recording via browser `MediaRecorder` → chunks → Whisper transcription (locally via whisper.cpp or OpenAI API)
- Webcam face tracking in-browser with MediaPipe Face Mesh → eye-contact % per question
- Filler-word + pacing detection from transcript (um/uh counts, words-per-min)
- Timer per question (2 min hard stop, optional extend)

### Slice 3: Report
- Per-question breakdown: transcript, eye-contact %, filler words, WPM
- LLM feedback: confidence signals in tone/repetition, English clarity, weak answers (e.g. no STAR), what to improve
- Log saved locally (state-based, no accounts in v1)

### Out of scope for v1
- Accounts, storage, multi-user
- Eyeliner detection (funny, noted from notes — it's eye contact)
- Tone/audio emotion analysis beyond transcript

### Milestones
- M1: resume upload → question generation working (basic UI)
- M2: recording + whisper transcript during session
- M3: eye-contact tracking + report generation
- M4: polish + dogfood on real mocks (10 sessions), then share

### Build-in-public cadence
- Update this log after every working session
- Share on X/LinkedIn at each milestone