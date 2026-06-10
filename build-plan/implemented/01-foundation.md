# 01 — Foundation & Infrastructure

- **Status:** Implemented
- **Completed:** 2026-06-10
- **Spec Ref:** §3 Tech Stack, §4 System Architecture, §8 Monorepo, §10 Env Vars

## What was built

### Monorepo

- Turborepo + pnpm workspaces with three apps (`web`, `api`, `worker`) and three shared packages (`config`, `types`, `db`).
- Root scripts: `dev`, `build`, `lint`, `type-check`, `test`, `db:generate`, `db:migrate`, `db:push`.

### Packages

| Package | Path | Purpose |
|---|---|---|
| `@lede/config` | `packages/config` | Shared TypeScript configs + ESLint base |
| `@lede/types` | `packages/types` | Shared TS interfaces (Article, Brief, enums) |
| `@lede/db` | `packages/db` | Prisma schema, client export, initial migration |

### Prisma schema

All models from SPEC §5: `Organisation`, `User`, `Article`, `Brief`, `Comment`, `Integration`, `AiUsageLog` with enums and relations. Initial migration at `packages/db/prisma/migrations/20250610000000_init/`.

### Apps

| App | Path | Stack |
|---|---|---|
| `@lede/web` | `apps/web` | Next.js 15 App Router, Tailwind, editorial-green tokens, shadcn-style Button |
| `@lede/api` | `apps/api` | NestJS, Prisma module, BullMQ queue module, Zod env validation, `/api/v1/health` |
| `@lede/worker` | `apps/worker` | NestJS application context, BullMQ processors stub, Zod env validation |

### Infrastructure wiring

- Redis + BullMQ connection module shared by `api` and `worker` (queues: publish, brief, email, analytics).
- Zod env validation per app (`apps/api/src/config/env.ts`, `apps/worker/src/config/env.ts`, `apps/web/lib/env.ts`).
- `.env.example` at repo root with all SPEC §10 variables.

### Design system (web)

- Editorial-green CSS variables in `apps/web/app/globals.css`.
- Tailwind theme tokens in `apps/web/tailwind.config.ts`.
- Landing page at `/` with pipeline stage badges.

### CI

- `.github/workflows/ci.yml` — install, Prisma generate, migrate deploy, type-check, lint, test, build (with Postgres + Redis services).

## Verification

```bash
pnpm install
pnpm db:generate
pnpm build
pnpm type-check
pnpm test
```

With Postgres + Redis running:

```bash
cp .env.example .env
pnpm db:migrate
pnpm dev
```

## Next phase

Proceed to **02 — Authentication** and **03 — Multi-tenancy**.
