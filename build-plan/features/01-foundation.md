# 01 — Foundation & Infrastructure

- **Status:** Implemented
- **Week:** 1
- **Spec Ref:** §3 Tech Stack, §4 System Architecture, §8 Monorepo, §10 Env Vars
- **Implementation file:** [01-foundation.md](../implemented/01-foundation.md)

## Summary

The base monorepo, shared packages, database schema, and CI pipeline that every other feature builds on.

## Scope

- Turborepo with three apps (`web`, `api`, `worker`) and two shared packages (`db`, `types`, `config`).
- Next.js 15 (App Router) + TypeScript for `web`.
- NestJS + TypeScript for `api` and `worker`.
- PostgreSQL via Prisma ORM — schema, client, migrations.
- Redis + BullMQ wiring shared by `api` and `worker`.
- shadcn/ui + Radix + Tailwind base with editorial-green design tokens (§7.2).
- Environment variable loading and validation per app (§10).
- GitHub Actions CI: lint, test, type-check.

## Data Models

All tables from §5 (`Organisation`, `Article`, `Brief`, `Comment`, `Integration`) plus `User` and `AiUsageLog` referenced across the spec. UUID PKs, soft deletes on `Article` and `Workspace`.

## Folder Targets

```
lede/
  apps/{web,api,worker}
  packages/{db,types,config}
```

## Implementation Checklist

- [x] Initialise Turborepo + pnpm workspaces
- [x] Scaffold `apps/web` (Next.js 15 App Router)
- [x] Scaffold `apps/api` (NestJS)
- [x] Scaffold `apps/worker` (NestJS)
- [x] Create `packages/db` with full Prisma schema + first migration
- [x] Create `packages/types` shared interfaces
- [x] Create `packages/config` (eslint, tsconfig, prettier)
- [x] Configure Redis + BullMQ connection module
- [x] Apply editorial-green design tokens to Tailwind + shadcn/ui
- [x] Add env var schema validation per app
- [x] GitHub Actions: lint + type-check + test on push

## Done When

DB migrations run green and all three apps boot locally with shared types resolving.
