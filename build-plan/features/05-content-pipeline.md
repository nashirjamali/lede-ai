# 05 — Content Pipeline (Kanban)

- **Status:** Planned
- **Week:** 1
- **Spec Ref:** §2.1
- **Implementation file:** _none yet_

## Summary

The central workspace: a Kanban board where every article moves through configurable stages.

## Scope

- Stages: `Idea → Brief → Draft → Review → Approved → Scheduled → Published`.
- Cards show assignee, due date, word count, SEO score, publishing target.
- Drag-and-drop between stages with optimistic UI (React Query + WebSocket sync).
- Stage-gate rules (e.g. "Draft → Review requires SEO score ≥ 70").
- Bulk actions: reassign, reschedule, archive.
- CSV import from existing editorial calendars.
- Article CRUD.

## Data Models

- `Article` (status enum, assigneeId, wordCount, seoScore, publishAt, deletedAt)

## API Endpoints

| Method | Path | Auth | Description |
|---|---|---|---|
| GET | `/articles` | Member+ | List (filter by status, assignee) |
| POST | `/articles` | Member+ | Create article |
| GET | `/articles/:id` | Member+ | Article + brief + comments |
| PATCH | `/articles/:id` | Member+ | Update content/status/assignee/publishAt |
| DELETE | `/articles/:id` | Admin+ | Soft delete |

## Frontend

- `/dashboard` — Kanban pipeline, article count, AI word usage meter
- `/articles/new` — metadata form + brief kickoff
- Components: `KanbanBoard`, `ArticleCard`, `StageColumn`, status badge pills

## Implementation Checklist

- [ ] `ArticlesModule` CRUD with tenant scoping
- [ ] Status transition validation + stage-gate rule engine
- [ ] `KanbanBoard` with `@dnd-kit/core` drag-and-drop
- [ ] Optimistic updates via TanStack Query
- [ ] WebSocket `pipeline:update` sync (depends on §09)
- [ ] Bulk reassign / reschedule / archive
- [ ] CSV import endpoint + UI
- [ ] Status badge component (color-coded per §7.2)

## Done When

Articles can be created and dragged between stages on the Kanban with optimistic UI, respecting stage-gate rules.
