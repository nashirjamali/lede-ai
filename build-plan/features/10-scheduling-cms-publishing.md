# 10 — Scheduling & CMS Publishing

- **Status:** Planned
- **Week:** 3
- **Spec Ref:** §2.5, §4.3
- **Implementation file:** _none yet_

## Summary

Articles publish on a schedule to connected CMS platforms via BullMQ delayed jobs and a per-CMS adapter pattern — no copy-paste.

## Scope

CMS adapters:

| CMS | Method | Operations |
|---|---|---|
| WordPress | REST API + App Password | Create, update, publish, schedule |
| Webflow | CMS API v2 | Create item, publish collection |
| Ghost | Ghost Admin API | Create post, publish, tag |
| Contentful | Management API | Create entry, publish, unpublish |
| Custom webhook | POST JSON to user URL | Publish event only |

Scheduling engine (§4.3): on `Approved` + `publishAt`, enqueue `publish-article` with `delay = publishAt - now`, `attempts: 3`, exponential backoff (60s). Worker `PublishProcessor` selects adapter, calls CMS, sets status `PUBLISHED`. On final failure, emit `failed` → email author (AWS SES).

## Data Models

- `Integration` (type enum, label, accessToken enc, refreshToken? enc, tokenExpiresAt?, siteUrl?, spaceId?)
- `Article` (publishAt, publishedAt, cmsIntegrationId, cmsPostId)

## API Endpoints

| Method | Path | Auth | Description |
|---|---|---|---|
| POST | `/articles/:id/schedule` | Admin+ | Set publishAt + cmsIntegrationId |
| GET | `/integrations` | Admin+ | List CMS connections |
| POST | `/integrations` | Admin+ | Add new CMS connection |
| DELETE | `/integrations/:id` | Admin+ | Remove connection + revoke tokens |

## Frontend

- `/calendar` — month/week view of scheduled + published articles
- `/settings/integrations` — connect/disconnect CMS platforms

## Worker

- `publish.processor.ts` + `adapters/` (WordPress, Webflow, Ghost, Contentful)

## Implementation Checklist

- [ ] `IntegrationsModule` CRUD + OAuth exchange + token encryption (§03)
- [ ] CMS adapter interface + WordPress adapter
- [ ] Webflow adapter
- [ ] Ghost + Contentful adapters
- [ ] Custom webhook adapter
- [ ] Schedule endpoint enqueues BullMQ delayed job
- [ ] `publish.processor.ts` with adapter selection + retry/backoff
- [ ] Token refresh-before-expiry in worker
- [ ] Failure → author email (§13)
- [ ] Publishing calendar UI

## Done When

A scheduled article publishes to a test WordPress site via the delayed job and flips to `PUBLISHED`.
