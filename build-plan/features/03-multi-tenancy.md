# 03 — Multi-tenancy

- **Status:** Planned
- **Week:** 1
- **Spec Ref:** §4.5
- **Implementation file:** _none yet_

## Summary

Strict org-level data isolation so no cross-tenant data can leak across queries, jobs, or stored credentials.

## Scope

- Every Postgres table carries `orgId`.
- NestJS `TenantInterceptor` injects `WHERE orgId = req.user.orgId` on all Prisma queries.
- CMS OAuth tokens AES-256 encrypted at rest in `Integration`.
- BullMQ job payloads carry `orgId`; workers validate against the article before processing.

## Data Models

- `orgId` FK present on `Article`, `Brief`, `Comment`, `Integration`, `User`, `AiUsageLog`.

## Implementation Checklist

- [ ] `TenantInterceptor` scoping all Prisma reads/writes to `req.user.orgId`
- [ ] AES-256 encrypt/decrypt helper using `INTEGRATION_ENCRYPT_KEY`
- [ ] Encrypt `accessToken` / `refreshToken` on write, decrypt on use
- [ ] Add `orgId` to all BullMQ job payloads
- [ ] Worker validates job `orgId` against article before processing
- [ ] Test: cross-tenant fetch returns 404/empty

## Done When

A request authenticated as org A cannot read, mutate, or publish any org B record, and stored CMS tokens are unreadable at rest.
