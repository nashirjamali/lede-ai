# Lede — Build Plan

> Master index of all features derived from [SPEC.md](./SPEC.md).
> Each feature has its own file under [`build-plan/features/`](./build-plan/features) with full scope, data models, API, frontend, and an implementation checklist.

## Status Legend

| Status | Meaning |
|---|---|
| **Planned** | Specified, not yet built |
| **In Progress** | Currently being implemented |
| **Implemented** | Built, verified against "Done when…" |

## Feature Index

| # | Feature | Week | Spec Ref | Status | File |
|---|---|---|---|---|---|
| 01 | Foundation & Infrastructure | 1 | §3, §4, §8, §10 | Implemented | [01-foundation.md](./build-plan/features/01-foundation.md) · [implemented](./build-plan/implemented/01-foundation.md) |
| 02 | Authentication | 1 | §6 (`/auth/*`), Tech §3 | Planned | [02-authentication.md](./build-plan/features/02-authentication.md) |
| 03 | Multi-tenancy | 1 | §4.5 | Planned | [03-multi-tenancy.md](./build-plan/features/03-multi-tenancy.md) |
| 04 | Org & Team Management | 1 / 4 | §6 (`/team/*`), §5 | Planned | [04-org-team-management.md](./build-plan/features/04-org-team-management.md) |
| 05 | Content Pipeline (Kanban) | 1 | §2.1 | Planned | [05-content-pipeline.md](./build-plan/features/05-content-pipeline.md) |
| 06 | AI Writing Assistant | 2 | §2.2, §4.2 | Planned | [06-ai-writing-assistant.md](./build-plan/features/06-ai-writing-assistant.md) |
| 07 | SEO Brief Generator | 2 | §2.3 | Planned | [07-seo-brief-generator.md](./build-plan/features/07-seo-brief-generator.md) |
| 08 | Approval Workflow & Comments | 3 | §2.4 | Planned | [08-approval-workflow.md](./build-plan/features/08-approval-workflow.md) |
| 09 | Real-time Collaboration | 3 | §4.4 | Planned | [09-realtime-collaboration.md](./build-plan/features/09-realtime-collaboration.md) |
| 10 | Scheduling & CMS Publishing | 3 | §2.5, §4.3 | Planned | [10-scheduling-cms-publishing.md](./build-plan/features/10-scheduling-cms-publishing.md) |
| 11 | Analytics Dashboard | 4 | §2.6 | Planned | [11-analytics-dashboard.md](./build-plan/features/11-analytics-dashboard.md) |
| 12 | Billing & Plan Enforcement | 1 / 4 | §1.3, §6 (`/billing/*`) | Planned | [12-billing-plan-enforcement.md](./build-plan/features/12-billing-plan-enforcement.md) |
| 13 | Settings & Notifications | 4 | §7.1, §2.4 | Planned | [13-settings-notifications.md](./build-plan/features/13-settings-notifications.md) |

## Weekly Rollup

| Week | Focus | Features | Done when… |
|---|---|---|---|
| 1 | Foundation | 01, 02, 03, 04, 05, 12 (partial) | Login works, articles move between stages on Kanban, DB migrations green. |
| 2 | AI writing + brief | 06, 07 | Round-trip AI generation streaming in editor. Brief generated for a test keyword. |
| 3 | Workflow + scheduling | 08, 09, 10 | Article published to a test WordPress site via scheduled job. Comments sync live across two browser tabs. |
| 4 | Analytics + polish + deploy | 11, 12 (complete), 13 | Live URL, all plan limits enforced, GSC data visible per article. |

## How to update status

When a feature is implemented, update its status here and in the feature file header, then check off its implementation checklist items.
