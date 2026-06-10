# 09 — Real-time Collaboration

- **Status:** Planned
- **Week:** 3
- **Spec Ref:** §4.4
- **Implementation file:** _none yet_

## Summary

Socket.io rooms scoped to `articleId` for live presence, instant comment sync, and Kanban refresh on stage transitions. (Full OT/CRDT co-authoring is out of scope for v1.)

## Scope

- Client joins room `article:{id}`; server broadcasts `presence: { userId, name, avatar, cursor }`.
- Comment creation/resolution broadcast to all room members instantly.
- Stage transitions emit `pipeline:update` to refresh the Kanban for all workspace members.

## API / Runtime

- NestJS `realtime/` Socket.io gateway on `api`.
- `web` Socket.io client singleton (`lib/socket.ts`), `usePresence` hook.

## Implementation Checklist

- [ ] Socket.io gateway with `article:{id}` rooms
- [ ] JWT handshake auth + org scoping on connect
- [ ] `presence` join/leave broadcast with cursor
- [ ] Comment create/resolve broadcast (integrates §08)
- [ ] `pipeline:update` emit on stage transition (integrates §05)
- [ ] `lib/socket.ts` client singleton
- [ ] `usePresence` hook + presence avatars in editor

## Done When

Comments and presence sync live across two browser tabs, and stage changes refresh the Kanban for all members.
