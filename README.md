# Lede

AI content ops platform for content marketing teams — AI-assisted writing, SEO briefs, approval workflows, and scheduled publishing in one workspace.

See [SPEC.md](./SPEC.md) for the full product specification and [BUILD_PLAN.md](./BUILD_PLAN.md) for the feature rollout plan.

## Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15, TypeScript, Tailwind CSS, shadcn/ui |
| API | NestJS, REST |
| Worker | NestJS, BullMQ |
| Database | PostgreSQL, Prisma |
| Cache / Queue | Redis, BullMQ |
| Monorepo | Turborepo, pnpm |

## Prerequisites

- Node.js 22+
- pnpm 9 (`corepack enable && corepack prepare pnpm@9.15.0 --activate`)
- PostgreSQL 16
- Redis 7

## Getting started

```bash
cp .env.example .env
pnpm install
pnpm db:generate
pnpm db:migrate
pnpm dev
```

| Service | URL |
|---|---|
| Web | http://localhost:3000 |
| API | http://localhost:3001/api/v1 |
| Health check | http://localhost:3001/api/v1/health |

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all apps and packages |
| `pnpm type-check` | Type-check across the monorepo |
| `pnpm lint` | Lint across the monorepo |
| `pnpm test` | Run tests across the monorepo |
| `pnpm db:generate` | Generate Prisma client |
| `pnpm db:migrate` | Run Prisma migrations (dev) |
| `pnpm db:push` | Push schema to database (no migration file) |

## Project structure

```
lede/
  apps/
    web/       Next.js frontend
    api/       NestJS API server
    worker/    NestJS background worker
  packages/
    config/    Shared ESLint + TypeScript configs
    types/     Shared TypeScript interfaces
    db/        Prisma schema, client, migrations
  build-plan/  Feature specs and implementation records
```

## Build status

| Feature | Status |
|---|---|
| [01 — Foundation](./build-plan/features/01-foundation.md) | Implemented |
| 02 — Authentication | Planned |
| 03 — Multi-tenancy | Planned |
| 04–13 | Planned |

## Environment variables

Copy `.env.example` to `.env` and fill in the values. At minimum for local development:

- `DATABASE_URL` — PostgreSQL connection string
- `REDIS_URL` — Redis connection string
- `NEXT_PUBLIC_API_URL` — API base URL for the web app

See `.env.example` for the full list.
