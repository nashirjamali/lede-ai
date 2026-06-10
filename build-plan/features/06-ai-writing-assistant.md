# 06 — AI Writing Assistant

- **Status:** Planned
- **Week:** 2
- **Spec Ref:** §2.2, §4.2
- **Implementation file:** _none yet_

## Summary

A GPT-4o co-pilot embedded in the Tiptap editor, proxied through the API server for rate limiting, metering, and model swapping. Streams completions into the editor via SSE.

## Scope

AI commands:

| Command | What it does |
|---|---|
| Generate outline | H2/H3 structure from brief + keyword (SERP-informed, CoT) |
| Write section | Drafts selected heading with adjacent context |
| Rewrite for tone | Formal / Conversational / Bold |
| Expand | Adds depth + examples |
| Summarise | TL;DR or meta description |
| Repurpose | Twitter thread / LinkedIn / email |
| Fix readability | Shorter sentences, Flesch–Kincaid score |

Pipeline (§4.2): browser → `POST /ai/complete` → JWT + plan check → assemble prompt (persona + context + command) → OpenAI `stream: true` → SSE back → Tiptap `insertContent` → log `AiUsageLog` + decrement word budget.

## Data Models

- `AiUsageLog` (articleId, userId, tokensUsed, command)
- `Organisation.aiWordsUsedThisMonth`, `Organisation.defaultAiPersona`

## API Endpoints

| Method | Path | Auth | Description |
|---|---|---|---|
| POST | `/ai/complete` | Member+ | Proxied GPT-4o call, returns SSE stream |
| POST | `/ai/repurpose` | Member+ | Transforms article to social formats |

## Frontend

- `/articles/:id/editor` — Tiptap editor + AI toolbar + SlashCommand menu
- Signature UI: `/` command palette (Write, Rewrite, Analyse, Repurpose) with token cost estimate
- Hook: `useAiStream`

## Implementation Checklist

- [ ] Tiptap editor with ProseMirror JSON persistence
- [ ] `SlashCommand` extension + floating command palette
- [ ] `AiModule` OpenAI proxy with SSE streaming
- [ ] Prompt assembly: persona + article/section context + command instruction
- [ ] Model split: GPT-4o vs gpt-4o-mini per command
- [ ] Plan limit check (words remaining) before completion
- [ ] `AiUsageLog` write + word budget decrement on stream end
- [ ] `useAiStream` hook appending tokens via `insertContent`
- [ ] Repurpose endpoint with platform-specific prompts

## Done When

A round-trip AI generation streams token-by-token into the editor and usage is logged + metered.
