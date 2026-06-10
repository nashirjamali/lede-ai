# 02 — Authentication

- **Status:** Planned
- **Week:** 1
- **Spec Ref:** §3 (NextAuth v5 + JWT RS256), §6 (`/auth/*`)
- **Implementation file:** _none yet_

## Summary

Account creation and sign-in via email/password, Google OAuth, and magic link, issuing RS256-signed JWT access + refresh tokens.

## Scope

- Register creates an org + owner user in one step.
- Login returns access + refresh token pair.
- Magic-link passwordless login email.
- Refresh token rotation.
- NextAuth v5 session on `web`; JWT (RS256) verification guard on `api`.

## Data Models

- `User` (id, orgId, email, name, role, passwordHash?, avatar)
- `Organisation` (created on register)

## API Endpoints

| Method | Path | Auth | Description |
|---|---|---|---|
| POST | `/auth/register` | Public | Creates org + owner user |
| POST | `/auth/login` | Public | Returns access + refresh tokens |
| POST | `/auth/magic-link` | Public | Sends passwordless login email |
| POST | `/auth/refresh` | Refresh JWT | Rotates token pair |

## Frontend

- `/auth/login` — email/pass + Google OAuth + magic link
- `/auth/register` — signup + org name + plan selection

## Implementation Checklist

- [ ] RS256 key pair loading (`JWT_PRIVATE_KEY` / `JWT_PUBLIC_KEY`)
- [ ] `AuthModule` with register/login/refresh/magic-link
- [ ] Password hashing (argon2/bcrypt)
- [ ] Google OAuth provider (NextAuth + Google client)
- [ ] Magic-link token issue + email dispatch (depends on §13 email)
- [ ] JWT auth guard + `req.user` population on `api`
- [ ] `/auth/login` + `/auth/register` pages

## Done When

A user can register (org auto-created), log in via all three methods, and a refresh rotates the token pair.
