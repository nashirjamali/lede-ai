# 04 — Org & Team Management

- **Status:** Planned
- **Week:** 1 / 4
- **Spec Ref:** §6 (`/team/*`), §5 (Organisation), §7.1 (`/settings/team`)
- **Implementation file:** _none yet_

## Summary

Manage organisation members, roles, and invitations.

## Scope

- List org members + roles.
- Invite a member via email.
- Change a member's role (Owner only).
- Remove a member (Admin+).
- Role hierarchy: Owner > Admin > Reviewer > Member.

## Data Models

- `User` (role enum), `Organisation`
- Invite token (email-bound, expiring)

## API Endpoints

| Method | Path | Auth | Description |
|---|---|---|---|
| GET | `/team/members` | Admin+ | List org members + roles |
| POST | `/team/invite` | Admin+ | Send invite email |
| PATCH | `/team/members/:id/role` | Owner | Change role |
| DELETE | `/team/members/:id` | Admin+ | Remove member |

## Frontend

- `/settings/team` — invite, remove, change roles

## Implementation Checklist

- [ ] Role enum + role guard on `api`
- [ ] `TeamModule` with members/invite/role/remove
- [ ] Invite token generation + acceptance flow
- [ ] Invite email template (depends on §13)
- [ ] `/settings/team` UI table with role controls
- [ ] Seat-count enforcement against plan tier (depends on §12)

## Done When

An admin can invite a member who joins the org, and an owner can change/remove roles within plan seat limits.
