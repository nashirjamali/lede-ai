# 13 — Settings & Notifications

- **Status:** Planned
- **Week:** 4
- **Spec Ref:** §7.1 (`/settings/*`), §2.4 (notifications), §3 (AWS SES + React Email)
- **Implementation file:** _none yet_

## Summary

Workspace settings (AI persona, integrations, billing, team) plus the transactional email layer used across the app.

## Scope

- Custom AI persona prompt + model selection (`/settings/ai`).
- CMS connect/disconnect (`/settings/integrations`, see §10).
- Billing settings (`/settings/billing`, see §12).
- Team settings (`/settings/team`, see §04).
- Transactional email via AWS SES + React Email: invites, magic links, notifications, digests.
- Email worker processor + BullMQ queue.

## Data Models

- `Organisation.defaultAiPersona`
- Reuses `User`, `Integration`, `Organisation`

## Frontend

- `/settings/ai` — custom AI persona prompt, model selection
- `/settings/integrations` — connect/disconnect CMS (§10 UI)
- `/settings/billing` — plan card, usage, portal (§12 UI)
- `/settings/team` — invite/remove/roles (§04 UI)

## Worker

- `email.processor.ts` — notification emails

## Implementation Checklist

- [ ] AWS SES client + verified sender
- [ ] React Email templates (invite, magic link, stage transition, publish failure, weekly digest)
- [ ] `email.processor.ts` BullMQ queue + dispatch
- [ ] `/settings/ai` persona + model picker (saves `defaultAiPersona`)
- [ ] Wire settings hub navigation across all `/settings/*` pages

## Done When

All settings pages are functional and transactional emails (invite, magic link, notifications) send via SES.
