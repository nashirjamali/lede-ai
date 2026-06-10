# Product

## Register

product

## Users

Content marketing teams at agencies and in-house — managed end to end in one workspace.

- **Content marketing managers** tracking 20+ articles that today sprawl across Notion, Slack, and Google Docs. They live in the pipeline view, triaging status and unblocking writers.
- **SEO agency owners** who build briefs by hand for every client article and want SERP-backed briefs generated in minutes.
- **Freelance writers** waiting days on client feedback, who want in-line comments and one-click approval inside the editor.
- **Growth marketers** with no visibility into what's published where, who need a publishing calendar and CMS integrations.

Context of use: focused, multi-hour work sessions on desktop, often with many articles in flight. The primary job on any screen is "move this article one step closer to published" — write, brief, review, approve, schedule.

## Product Purpose

Lede eliminates the coordination tax of content marketing. Instead of bouncing between five tools, teams plan, write, review, approve, and publish from a single workspace. AI handles the grunt work (first drafts, meta descriptions, keyword clustering, readability, repurposing) so writers focus on voice and strategy.

It exists because the dominant AI writing tools are single-user; Lede is team-native, built around workflows, roles, approvals, and scheduled publishing. Success looks like a team retiring its Notion-plus-Slack-plus-Docs stack because the whole pipeline now lives here, with articles flowing from idea to published without manual copy-paste.

## Brand Personality

Editorial, precise, confident, calm. The reference is a premium publishing tool — "Notion meets The Economist." Voice is expert and plain-spoken, never hype-driven or cutesy. The interface should feel like a well-made instrument: AI is present as a sharp co-pilot, not a gimmick that shouts for attention. Emotional goal: the quiet confidence of a team that has its act together.

## Anti-references

- **Sterile corporate-blue B2B SaaS.** The default navy/cyan dashboard look. Lede's identity is warm editorial ink, not generic enterprise blue.
- **Single-user AI toy energy.** Jasper / Copy.ai style "magic content" hype, glowing gradients, emoji-laden marketing. AI here is a professional tool, not a slot machine.
- **The generic dark-sidebar + white-content app shell.** Reserve a persistent left panel for article-level pages (editor, review) only; dashboard and calendar are full-width with real hierarchy.
- **Hype-y growth-hacker copy.** No "10x your content," no exclamation-mark marketing. Claims are specific and earned.

## Design Principles

- **The pipeline is the product.** Every screen should make "what's the state of this article and what's its next step" obvious. Status, ownership, and the next action come first.
- **AI is a co-pilot, not the author.** Surface AI as fast, precise assistance inside the writer's flow (the `/` command menu is the signature moment) — never as a replacement for human voice or judgment.
- **Editorial calm over dashboard noise.** Earn attention with hierarchy, typography, and restraint, not with chrome, badges, and color everywhere. It should read like a publication, not a control panel.
- **Team-native by default.** Roles, approvals, comments, and presence are first-class, not bolted on. The single-player path should still feel like part of a team workspace.
- **No manual copy-paste.** The product's promise is that work flows — briefs into drafts, approvals into scheduled jobs, scheduled jobs into published CMS posts — without leaving the workspace.

## Accessibility & Inclusion

Target **WCAG 2.1 AA**. Built on shadcn/ui + Radix primitives, so keyboard navigation, focus management, and ARIA semantics come from the component layer — preserve them in overrides. Body text must clear 4.5:1 contrast (watch muted text on the warm cream surface). Respect `prefers-reduced-motion` for the page-enter and stagger animations. Status must never be conveyed by color alone — pair status badges with text labels.
