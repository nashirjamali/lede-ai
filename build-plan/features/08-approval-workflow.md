# 08 — Approval Workflow & Comments

- **Status:** Planned
- **Week:** 3
- **Spec Ref:** §2.4
- **Implementation file:** _none yet_

## Summary

Configurable per-workspace review chains with paragraph-level in-line comments, one-click approve / request-changes, notifications, and an audit log.

## Scope

- Linear and parallel reviewer chains.
- Reviewers leave in-line comments at paragraph level.
- Author resolves comments; resolved threads hidden but preserved.
- One-click Approve / Request changes with optional/required comment.
- Slack or email notification on stage transitions (AWS SES + BullMQ).
- Audit log: who approved what and when, exportable to CSV.

## Data Models

- `Comment` (articleId, authorId, parentId?, content, paragraphRef?, resolved, resolvedBy?, resolvedAt?)
- Audit log entries on stage transitions / approvals

## API Endpoints

| Method | Path | Auth | Description |
|---|---|---|---|
| POST | `/articles/:id/approve` | Reviewer+ | Approve + optional comment |
| POST | `/articles/:id/request-changes` | Reviewer+ | Request changes + required comment |
| GET | `/articles/:id/comments` | Member+ | Thread-structured comments |
| POST | `/articles/:id/comments` | Member+ | Create comment or reply |
| PATCH | `/comments/:id/resolve` | Member+ | Mark resolved |

## Frontend

- `/articles/:id/review` — read-only review view + approve/reject bar
- Comment drawer + paragraph anchors in editor

## Implementation Checklist

- [ ] `CommentsModule` CRUD + threaded replies + resolve
- [ ] Paragraph-ref anchoring to Tiptap node IDs
- [ ] Approve / request-changes endpoints with role guard
- [ ] Reviewer chain config (linear + parallel)
- [ ] Stage-transition notification jobs (depends on §13)
- [ ] Audit log table + CSV export
- [ ] Review page UI + approve/reject bar
- [ ] Comment drawer with resolve/hide

## Done When

A reviewer can comment on a paragraph, approve or request changes, and the audit log records the transition.
