# Lede
## AI Content Ops Platform — Product Specification v1.0 | June 2026

> **Stack:** TypeScript / Next.js / NestJS · **Category:** AI SaaS + B2B

Lede is a team workspace for content marketing teams. It combines AI-assisted writing, SEO brief generation, keyword research, multi-stage approval workflows, and scheduled publishing — all in one platform built for agencies and in-house content teams.

> 💡 **Why build this:** AI content tools (Jasper, Copy.ai) are single-user. Lede is team-native: workflows, roles, approvals, and publishing. This gap is exactly what Upwork B2B clients pay $80–150/hr to fill.

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Core Features](#2-core-features)
3. [Tech Stack](#3-tech-stack)
4. [System Architecture](#4-system-architecture)
5. [Data Models](#5-data-models)
6. [API Design](#6-api-design)
7. [Frontend Pages & UI Design](#7-frontend-pages--ui-design)
8. [Monorepo Folder Structure](#8-monorepo-folder-structure)
9. [Build Plan](#9-4-week-build-plan)
10. [Environment Variables](#10-environment-variables)
11. [Key Technical Decisions](#11-key-technical-decisions)
---

## 1. Product Overview

### 1.1 Vision

Lede eliminates the coordination tax of content marketing. Instead of bouncing between Google Docs, Notion, Ahrefs, Slack, and a CMS, teams plan, write, review, approve, and publish from a single workspace. The AI layer handles the grunt work — first drafts, meta descriptions, keyword clustering, readability scoring, and repurposing — so writers focus on voice and strategy.

### 1.2 Target Personas

| Persona | Pain today | Feature that wins them | Willingness to pay |
|---|---|---|---|
| Content marketing manager | Tracking 20 articles across Notion + Slack + Docs | Kanban board + approval workflow | $99–299/mo |
| SEO agency owner | Building briefs manually for every client article | AI brief generator with SERP data | $299–499/mo |
| Freelance writer | Waiting days for client feedback | In-line comments + one-click approve | $29/mo add-on seat |
| Growth marketer | No visibility on what's published where | Publishing calendar + CMS integrations | $99/mo |

### 1.3 Business Model

| | Starter | Pro | Agency | Enterprise |
|---|---|---|---|---|
| **Price** | Free | $49/mo | $149/mo | $399/mo |
| **Seats** | 1 | 5 | 20 | Unlimited |
| **AI words/mo** | 10,000 | 100,000 | 500,000 | Unlimited |
| **Articles** | 10 | 100 | Unlimited | Unlimited |
| **CMS integrations** | — | 1 | 5 | Unlimited |
| **White-label reports** | — | — | ✅ | ✅ |
| **Custom AI personas** | — | — | ✅ | ✅ |
| **SSO / SAML** | — | — | — | ✅ |

---

## 2. Core Features

### 2.1 Content Pipeline (Kanban)

The central workspace. Every article moves through configurable stages:

```
Idea → Brief → Draft → Review → Approved → Scheduled → Published
```

Cards show assignee, due date, word count, SEO score, and publishing target.

- Drag-and-drop between stages with optimistic UI updates via React Query + WebSocket sync
- Stage-gate rules: e.g. "Draft cannot move to Review unless SEO score ≥ 70"
- Bulk actions: reassign, reschedule, or archive multiple articles at once
- CSV import from existing editorial calendars

### 2.2 AI Writing Assistant

Embedded in the article editor. Powered by GPT-4o with a custom system prompt per workspace (the "AI persona"). Not a replacement for writers — a co-pilot.

| Command | What it does | Prompt strategy |
|---|---|---|
| Generate outline | Creates H2/H3 structure from brief + target keyword | SERP-informed, chain-of-thought |
| Write section | Drafts selected heading with context from surrounding sections | Section + adjacent context injection |
| Rewrite for tone | Rewrites selection in Formal / Conversational / Bold | System persona + tone enum |
| Expand | Adds depth and examples to a short paragraph | Instruct to add evidence |
| Summarise | TL;DR or meta description from full article | Constrained output format |
| Repurpose | Transforms article to Twitter thread, LinkedIn post, or email newsletter | Platform-specific system prompts |
| Fix readability | Shortens sentences, replaces jargon, scores Flesch–Kincaid | Iterative rewrite + score |

### 2.3 SEO Brief Generator

Before writing begins, a brief gives the writer everything they need: search intent, competitor analysis, target keywords, suggested headings, and word count range.

1. User enters a seed keyword and selects a target country
2. API calls DataForSEO for SERP top-10 + keyword metrics (volume, difficulty, CPC)
3. GPT-4o analyses top-ranking pages and generates: primary keyword, semantic keywords, content gaps, suggested H2 outline, meta title template
4. Brief is saved to the article and can be exported as PDF or sent to an external writer

### 2.4 Approval Workflow

Configurable per workspace. Supports linear and parallel reviewer chains.

- Reviewers leave in-line comments at paragraph level (not just document-level)
- Author resolves comments; resolved threads are hidden but preserved in history
- One-click "Approve" or "Request changes" with optional comment
- Automatic Slack or email notification on stage transitions (via AWS SES + BullMQ job)
- Audit log: full history of who approved what and when, exportable to CSV

### 2.5 Scheduling & CMS Publishing

Articles are published on a schedule to connected CMS platforms. No copy-paste.

| CMS | Integration method | Supported operations |
|---|---|---|
| WordPress | REST API + Application Password | Create, update, publish, schedule |
| Webflow | Webflow CMS API v2 | Create item, publish collection |
| Ghost | Ghost Admin API | Create post, publish, tag |
| Contentful | Contentful Management API | Create entry, publish, unpublish |
| Custom webhook | POST JSON payload to user URL | Publish event only |

**Scheduling engine:** BullMQ delayed jobs. Each scheduled article creates a job with `delay = publishAt - now`. Worker publishes to CMS API and updates article status to `PUBLISHED`. Failed publishes retry 3× with exponential backoff; author notified on final failure.

### 2.6 Analytics Dashboard

Post-publish performance per article, pulled from connected analytics sources.

- **Google Search Console:** impressions, clicks, average position, CTR per article URL
- **Google Analytics 4:** pageviews, time on page, bounce rate, conversion events
- **Lede score:** a composite metric (traffic + rankings + engagement) updated weekly
- **Team leaderboard:** top writers by published word count and avg performance score

> 🔥 **Upwork signal:** Connecting GSC + GA4 via OAuth and displaying unified analytics per article is a concrete technical differentiator. Most "content tool" Upwork jobs list this as a requirement — build it properly with refresh token rotation.

---

## 3. Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| Frontend framework | Next.js 15 (App Router), TypeScript | RSC, streaming, SEO-ready |
| UI components | shadcn/ui + Radix UI + Tailwind CSS | Accessible, unstyled, fast to customise |
| Rich text editor | Tiptap (ProseMirror) | Extensible, supports AI commands, comments |
| State / data fetching | TanStack Query v5 + Zustand | Server state vs client state separation |
| Backend API | NestJS, TypeScript, REST + SSE | DI, modules, guards — scales with team |
| Auth | NextAuth v5 + JWT (RS256) | OAuth (Google) + email/pass + magic link |
| Primary DB | PostgreSQL via Prisma ORM | Multi-tenant, relational, ACID |
| Cache / queue | Redis + BullMQ | Scheduling jobs, rate limits, sessions |
| AI / LLM | OpenAI GPT-4o + gpt-4o-mini | 4o for quality, mini for fast/cheap tasks |
| SEO data | DataForSEO API | SERP, keyword volume, competitor analysis |
| Object storage | AWS S3 | Image uploads, brief PDF exports |
| Email | AWS SES + React Email | Transactional — invites, notifications, digests |
| Payments | Stripe Billing + Webhooks | Subscriptions, seats, usage overages |
| Realtime | Socket.io | Live collaborative presence + comment sync |
| Deployment | Vercel (web) + Railway (api + worker) | Zero-config, env management |
| CI/CD | GitHub Actions | Lint, test, type-check, deploy on push |
| Monitoring | Sentry + Axiom (logs) | Error tracking + structured log search |

---

## 4. System Architecture

### 4.1 Component Map

The system has three runtime processes communicating via REST (web → api), BullMQ (api → worker), and Socket.io (api ↔ web).

| Component | Responsibilities | Runtime |
|---|---|---|
| Next.js web app | UI rendering, auth sessions, API calls, Socket.io client, SSE streaming consumer | Vercel Edge + Node |
| NestJS API server | Business logic, auth, DB writes, plan enforcement, AI prompt orchestration, Socket.io server, CMS OAuth exchange | Railway Node |
| NestJS worker | Scheduled publishing jobs, SEO data fetch jobs, email dispatch, AI brief generation queue, AI word count metering | Railway Node |

### 4.2 AI Writing Pipeline

All AI calls are proxied through the API server (never called directly from the browser) to enforce rate limits, log token usage, and swap models without frontend changes.

1. User triggers AI command in Tiptap editor (e.g. "Write section")
2. Browser calls `POST /ai/complete` with `{ command, context, articleId }`
3. NestJS validates JWT + plan limits (words remaining this month)
4. API assembles the prompt: system persona (from workspace settings) + article context + command instruction
5. API calls OpenAI chat completions with `stream: true` and pipes the response back as SSE
6. Browser receives token stream and appends to editor in real time via Tiptap's `insertContent`
7. On stream end, API logs `{ articleId, userId, tokensUsed, command }` to `AiUsageLog` table and decrements monthly word budget

### 4.3 Scheduling Architecture

Every article that reaches `Approved` + has a `publishAt` date triggers a BullMQ delayed job:

```typescript
queue.add('publish-article', { articleId }, {
  delay: publishAt.getTime() - Date.now(),
  attempts: 3,
  backoff: { type: 'exponential', delay: 60_000 }
})
```

The worker's `PublishProcessor` fetches the article, selects the correct CMS adapter (WordPress, Webflow, Ghost, Contentful), calls the CMS API, and marks the article `PUBLISHED`. If all 3 attempts fail, it emits a `failed` event that triggers an email to the article author via AWS SES.

### 4.4 Real-time Collaboration

Socket.io rooms are scoped to `articleId`. When a user opens an article editor:

- Client joins room `article:{id}`. Server broadcasts `presence: { userId, name, avatar, cursor }`
- Comment creation/resolution is broadcast to all room members instantly
- Stage transitions emit a `pipeline:update` event that refreshes the Kanban board for all workspace members

> **Note:** Full OT/CRDT co-authoring (like Google Docs) is out of scope for v1. Tiptap's Collaboration extension (Hocuspocus) is listed as a v2 feature.

### 4.5 Multi-tenancy

- **Database:** Every Postgres table carries `orgId`. A NestJS `TenantInterceptor` injects `WHERE orgId = req.user.orgId` on all Prisma queries — no cross-tenant data leaks possible
- **CMS credentials:** OAuth tokens are encrypted at rest using AES-256 before storing in the Postgres `Integration` table
- **BullMQ jobs:** Job payloads include `orgId`; workers validate it against the article before processing

---

## 5. Data Models

> PostgreSQL tables managed via Prisma ORM. All IDs are UUIDs. Soft deletes on Articles and Workspaces.

### Organisation

| Field | Type | Notes |
|---|---|---|
| id | UUID PK | |
| name | String | |
| slug | String UNIQUE | Used in subdomain or URL |
| planTier | Enum | `STARTER \| PRO \| AGENCY \| ENTERPRISE` |
| aiWordsUsedThisMonth | Int | Reset by cron on 1st of month |
| stripeCustomerId | String? | |
| stripeSubscriptionId | String? | |
| defaultAiPersona | Text? | Custom system prompt for AI |

### Article

| Field | Type | Notes |
|---|---|---|
| id | UUID PK | |
| orgId | UUID FK | Multi-tenant key |
| title | String | |
| slug | String | Auto-generated, editable |
| status | Enum | `IDEA \| BRIEF \| DRAFT \| REVIEW \| APPROVED \| SCHEDULED \| PUBLISHED` |
| authorId | UUID FK | User.id |
| assigneeId | UUID FK? | Current stage owner |
| content | JSON | Tiptap ProseMirror JSON |
| wordCount | Int | Updated on save |
| seoScore | Int? | 0–100, computed server-side |
| publishAt | DateTime? | Triggers BullMQ delayed job |
| publishedAt | DateTime? | Set on successful CMS publish |
| cmsIntegrationId | UUID FK? | Target CMS |
| cmsPostId | String? | ID of post in CMS after publish |
| deletedAt | DateTime? | Soft delete |

### Brief

| Field | Type | Notes |
|---|---|---|
| id | UUID PK | |
| articleId | UUID FK UNIQUE | One brief per article |
| seedKeyword | String | Input from user |
| targetCountry | String | ISO 3166-1 alpha-2 |
| primaryKeyword | String | AI-selected from SERP analysis |
| semanticKeywords | String[] | Supporting terms |
| suggestedHeadings | JSON | Array of `{ level, text }` |
| competitorUrls | String[] | Top-10 SERP URLs |
| targetWordCount | Int | Avg of top-10 + 10% |
| searchVolume | Int? | From DataForSEO |
| keywordDifficulty | Int? | 0–100 |

### Comment

| Field | Type | Notes |
|---|---|---|
| id | UUID PK | |
| articleId | UUID FK | |
| authorId | UUID FK | User.id |
| parentId | UUID FK? | For threaded replies |
| content | Text | Comment body |
| paragraphRef | String? | Tiptap node ID for in-line anchoring |
| resolved | Boolean | Default false |
| resolvedBy | UUID FK? | User.id |
| resolvedAt | DateTime? | |

### Integration (CMS)

| Field | Type | Notes |
|---|---|---|
| id | UUID PK | |
| orgId | UUID FK | |
| type | Enum | `WORDPRESS \| WEBFLOW \| GHOST \| CONTENTFUL \| WEBHOOK` |
| label | String | User-set nickname e.g. "Client Blog" |
| accessToken | String (encrypted) | AES-256 at rest |
| refreshToken | String? (encrypted) | For OAuth CMSes |
| tokenExpiresAt | DateTime? | Worker refreshes before expiry |
| siteUrl | String? | WordPress/Ghost base URL |
| spaceId | String? | Contentful space ID |

---

## 6. API Design

> Base URL: `/api/v1`. All endpoints require `Bearer JWT` unless marked Public.

| Method | Path | Auth | Description |
|---|---|---|---|
| POST | `/auth/register` | Public | Creates org + owner user |
| POST | `/auth/login` | Public | Returns access + refresh tokens |
| POST | `/auth/magic-link` | Public | Sends passwordless login email |
| POST | `/auth/refresh` | Refresh JWT | Rotates token pair |
| GET | `/articles` | Member+ | List articles (filterable by status, assignee) |
| POST | `/articles` | Member+ | Create article |
| GET | `/articles/:id` | Member+ | Article + brief + comments |
| PATCH | `/articles/:id` | Member+ | Update content, status, assignee, publishAt |
| DELETE | `/articles/:id` | Admin+ | Soft delete |
| POST | `/articles/:id/approve` | Reviewer+ | Approve + optional comment |
| POST | `/articles/:id/request-changes` | Reviewer+ | Request changes + required comment |
| POST | `/articles/:id/schedule` | Admin+ | Set publishAt + cmsIntegrationId |
| POST | `/articles/:id/brief/generate` | Member+ | Triggers DataForSEO + GPT-4o brief job |
| GET | `/articles/:id/brief` | Member+ | Return generated brief |
| POST | `/ai/complete` | Member+ | Proxied GPT-4o call, returns SSE stream |
| POST | `/ai/repurpose` | Member+ | Transforms article to social formats |
| GET | `/articles/:id/comments` | Member+ | Thread-structured comments |
| POST | `/articles/:id/comments` | Member+ | Create comment or reply |
| PATCH | `/comments/:id/resolve` | Member+ | Mark resolved |
| GET | `/integrations` | Admin+ | List CMS connections |
| POST | `/integrations` | Admin+ | Add new CMS connection |
| DELETE | `/integrations/:id` | Admin+ | Remove connection + revoke tokens |
| POST | `/billing/checkout` | Owner | Stripe Checkout session |
| POST | `/billing/portal` | Owner | Stripe customer portal URL |
| POST | `/webhooks/stripe` | Stripe sig | `subscription.updated`, `invoice.paid` events |
| GET | `/team/members` | Admin+ | List org members + roles |
| POST | `/team/invite` | Admin+ | Send invite email |
| PATCH | `/team/members/:id/role` | Owner | Change role |
| DELETE | `/team/members/:id` | Admin+ | Remove member |

---

## 7. Frontend Pages & UI Design

### 7.1 Page Map

| Route | Auth required | Key components |
|---|---|---|
| `/` | No | Landing: hero, feature sections, pricing, waitlist CTA |
| `/auth/login` | No | Email/pass + Google OAuth + magic link |
| `/auth/register` | No | Signup + org name + plan selection |
| `/dashboard` | Yes | Kanban pipeline, article count, AI word usage meter |
| `/articles/new` | Yes | Article metadata form + brief kickoff |
| `/articles/:id/brief` | Yes | Brief view: keywords, SERP data, outline |
| `/articles/:id/editor` | Yes | Tiptap editor + AI toolbar + comment drawer |
| `/articles/:id/review` | Yes | Read-only review view + approve/reject bar |
| `/calendar` | Yes | Month/week view of scheduled + published articles |
| `/analytics` | Yes | GSC + GA4 stats per article + team leaderboard |
| `/settings/team` | Admin+ | Invite, remove, change roles |
| `/settings/integrations` | Admin+ | Connect / disconnect CMS platforms |
| `/settings/ai` | Admin+ | Custom AI persona prompt, model selection |
| `/settings/billing` | Owner | Plan card, usage, Stripe portal link |

### 7.2 Design System

Lede uses an **editorial-green palette** that signals precision and professionalism without the sterile corporate blues common in B2B SaaS. The design should feel like a premium publishing tool — Notion meets The Economist.

#### Colour tokens

| Token | Hex | Usage |
|---|---|---|
| `--color-brand` | `#1C4A3E` | Primary actions, active nav, links |
| `--color-brand-light` | `#3D7A6B` | Hover states, secondary accents |
| `--color-surface` | `#FAFAF7` | Page background |
| `--color-surface-raised` | `#F0F4F2` | Cards, sidebar, table alt rows |
| `--color-border` | `#C5D0CB` | All borders and dividers |
| `--color-text-primary` | `#1A1A18` | Body copy |
| `--color-text-muted` | `#7A8780` | Labels, captions, placeholders |
| `--color-accent` | `#C4720D` | Callouts, AI badge, warnings |
| `--color-success` | `#2D6A4F` | Approved badge, published status |
| `--color-danger` | `#B91C1C` | Errors, delete actions |

#### Typography

| Role | Typeface | Usage |
|---|---|---|
| Display | Georgia (serif) | Page H1s, hero headlines, article titles in editor |
| UI / Body | Inter (sans-serif) | Navigation, labels, body copy, form inputs |
| Mono | JetBrains Mono | Code blocks, API keys, keyword pills |

#### Component library (shadcn/ui)

- Use shadcn/ui as the base for all form controls, dialogs, dropdowns, and toasts
- Override CSS variables to match the editorial-green design tokens above — do not use Tailwind's default blue
- **Kanban board:** custom component using `@dnd-kit/core` for drag-and-drop (hand-built for performance)
- **Rich text editor:** Tiptap with custom extensions for AI commands (SlashCommand menu) and comment anchors
- **Status badge:** colour-coded pill per status — `IDEA`=gray, `BRIEF`=blue, `DRAFT`=amber, `REVIEW`=orange, `APPROVED`=green, `SCHEDULED`=teal, `PUBLISHED`=brand-green

#### Signature UI moment

The **AI command menu**. When a writer types `/` in the editor, a floating command palette appears with animated categorised commands (Write, Rewrite, Analyse, Repurpose). Each command shows a one-line description and a token cost estimate. This moment should feel like the product's personality — fast, smart, effortless.

> **Design note:** Avoid the generic dark-sidebar + white-content layout. Use top navigation with a persistent left panel only for article-level pages (editor + review). The dashboard and calendar should be full-width with clear visual hierarchy using card elevation and green accent borders — not sidebar chrome.

---

## 8. Monorepo Folder Structure

> Turborepo. Three apps (`web`, `api`, `worker`) + two shared packages.

```
lede/
  apps/
    web/                          ← Next.js 15 frontend
      app/
        (auth)/                   ← login, register
        dashboard/                ← Kanban pipeline
        articles/
          [id]/
            brief/                ← SEO brief viewer
            editor/               ← Tiptap editor page
            review/               ← read-only reviewer view
        calendar/                 ← scheduling calendar
        analytics/                ← GSC + GA4 dashboard
        settings/                 ← team, billing, integrations, AI
      components/
        editor/                   ← Tiptap + AI toolbar + comment drawer
        pipeline/                 ← KanbanBoard, ArticleCard, StageColumn
        brief/                    ← BriefPanel, KeywordPills, SerpTable
        analytics/                ← StatsCard, ArticlePerformanceTable
        ui/                       ← shadcn/ui overrides
      lib/
        api.ts                    ← typed API client (fetch wrapper)
        socket.ts                 ← Socket.io client singleton
        hooks/                    ← useArticle, useAiStream, usePresence
    api/                          ← NestJS API server
      src/
        auth/                     ← JWT, OAuth, magic-link
        articles/                 ← CRUD, status transitions, workflow
        briefs/                   ← DataForSEO + GPT brief generation
        ai/                       ← OpenAI proxy, streaming, metering
        comments/                 ← in-line comments CRUD
        integrations/             ← CMS OAuth + adapter pattern
        billing/                  ← Stripe checkout, portal, webhooks
        analytics/                ← GSC + GA4 OAuth + data aggregation
        realtime/                 ← Socket.io gateway
        common/                   ← PlanGuard, TenantInterceptor, filters
    worker/                       ← NestJS background worker
      src/
        processors/
          publish.processor.ts    ← CMS publishing jobs
          brief.processor.ts      ← async brief generation
          email.processor.ts      ← notification emails
          analytics.processor.ts  ← weekly GSC/GA4 sync
        adapters/                 ← WordPress, Webflow, Ghost, Contentful
  packages/
    db/                           ← Prisma schema + client + migrations
    types/                        ← shared TS interfaces (Article, Brief, etc.)
    config/                       ← shared ESLint, tsconfig, prettier
```

---

## 9. Build Plan

| Week | Focus | Deliverables | Done when… |
|---|---|---|---|
| 1 | Foundation | Turborepo + Prisma schema + migrations. Auth (JWT + Google OAuth + magic link). Org/user/article CRUD. Kanban board UI (drag-and-drop). Stripe customer creation. CI pipeline. | Login works, articles move between stages on Kanban, DB migrations green. |
| 2 | AI writing + brief | Tiptap editor with AI slash-command menu. SSE streaming from OpenAI proxy. AI word count metering. DataForSEO integration. Brief generator (keyword + outline). Brief viewer page. | Round-trip AI generation streaming in editor. Brief generated for a test keyword. |
| 3 | Workflow + scheduling | Approval workflow (approve / request-changes). In-line comments (create, reply, resolve). Socket.io presence + comment sync. BullMQ scheduling engine. WordPress + Webflow CMS adapters. Publishing calendar UI. | Article published to a test WordPress site via scheduled job. Comments sync live across two browser tabs. |
| 4 | Analytics + polish + deploy | Google Search Console + GA4 OAuth + data aggregation. Analytics dashboard. Stripe subscription webhooks + PlanGuard. Team invites + role management. Settings pages (AI persona, integrations, billing). Vercel + Railway deploy. Sentry + Axiom. README + Loom walkthrough. | Live URL, all plan limits enforced, Loom demo recorded, GSC data visible per article. |

---

## 10. Environment Variables

> Store in `.env.local` (Next.js) and `.env` (NestJS). Never commit to git.

| Variable | Service | Notes |
|---|---|---|
| `DATABASE_URL` | PostgreSQL | Prisma connection string |
| `REDIS_URL` | Redis | BullMQ + session cache |
| `NEXTAUTH_SECRET` | NextAuth | 32-byte random hex |
| `NEXTAUTH_URL` | NextAuth | Base URL of Next.js app |
| `GOOGLE_CLIENT_ID` | Google OAuth | For auth + GSC/GA4 |
| `GOOGLE_CLIENT_SECRET` | Google OAuth | |
| `JWT_PRIVATE_KEY` | NestJS | RS256 key pair |
| `JWT_PUBLIC_KEY` | NestJS | |
| `OPENAI_API_KEY` | OpenAI | GPT-4o + gpt-4o-mini |
| `DATAFORSEO_LOGIN` | DataForSEO | Basic auth credentials |
| `DATAFORSEO_PASSWORD` | DataForSEO | |
| `AWS_ACCESS_KEY_ID` | AWS S3 + SES | IAM scoped policy |
| `AWS_SECRET_ACCESS_KEY` | AWS | |
| `AWS_REGION` | AWS | e.g. `ap-southeast-1` |
| `S3_BUCKET` | AWS S3 | |
| `AWS_SES_FROM_ADDRESS` | AWS SES | Verified sender |
| `STRIPE_SECRET_KEY` | Stripe | `sk_live_...` or `sk_test_...` |
| `STRIPE_WEBHOOK_SECRET` | Stripe | `whsec_...` from CLI / dashboard |
| `STRIPE_STARTER_PRICE_ID` | Stripe | |
| `STRIPE_PRO_PRICE_ID` | Stripe | |
| `STRIPE_AGENCY_PRICE_ID` | Stripe | |
| `INTEGRATION_ENCRYPT_KEY` | AES-256 | 32-byte key for CMS token encryption |
| `SENTRY_DSN` | Sentry | Error tracking for api + worker |
| `AXIOM_TOKEN` | Axiom | Structured log ingestion |
| `AXIOM_DATASET` | Axiom | |

---

## 11. Key Technical Decisions

| Decision | Chosen | Alternatives & why rejected |
|---|---|---|
| Rich text editor | Tiptap (ProseMirror) | Lexical (less mature extension ecosystem), Quill (unmaintained), Slate (complex) |
| Real-time | Socket.io rooms | Liveblocks (vendor lock-in), Ably (cost), Yjs only (no presence) |
| SEO data | DataForSEO API | Semrush API ($500/mo), Ahrefs API (no trial), Moz (less granular) |
| Scheduling engine | BullMQ delayed jobs | Cron on server (no retry/backoff), AWS EventBridge (extra infra) |
| CMS integration pattern | Adapter class per CMS | Single generic REST client (breaks on CMS-specific quirks) |
| Collab editing v1 | Presence only (no OT/CRDT) | Hocuspocus (adds ops complexity — v2 feature) |
| AI model split | GPT-4o for quality, gpt-4o-mini for speed | All 4o (cost), all mini (quality loss on long articles) |
| Token encryption | AES-256 (Node crypto) | KMS (overkill for v1), plaintext (unacceptable) |

---

### Proposal talking points

- *"I built a multi-tenant content ops platform with an AI writing assistant that streams GPT-4o completions directly into a Tiptap editor via Server-Sent Events."*
- *"The scheduling engine uses BullMQ delayed jobs with exponential backoff to publish to WordPress, Webflow, and Contentful — zero manual copy-paste."*
- *"Real-time collaboration (presence, comment sync, stage transitions) is built on Socket.io rooms scoped to `articleId`."*
- *"CMS OAuth tokens are AES-256 encrypted at rest — I can speak to security practices in enterprise contracts."*

*Lede · End of specification*