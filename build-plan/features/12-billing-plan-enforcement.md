# 12 — Billing & Plan Enforcement

- **Status:** Planned
- **Week:** 1 (customer creation) / 4 (full)
- **Spec Ref:** §1.3 Business Model, §6 (`/billing/*`, `/webhooks/stripe`)
- **Implementation file:** _none yet_

## Summary

Stripe-backed subscriptions with seat and usage limits, and a `PlanGuard` enforcing tier limits across the app.

## Scope

Plan tiers (§1.3): Starter (free), Pro ($49), Agency ($149), Enterprise ($399) — varying seats, AI words/mo, article caps, CMS integrations, white-label, custom AI personas, SSO.

- Stripe Checkout for subscription.
- Stripe customer portal.
- Webhooks: `subscription.updated`, `invoice.paid`.
- `PlanGuard` enforcing seats, AI words/mo, article count, CMS integration count.
- Monthly AI word reset cron on the 1st.

## Data Models

- `Organisation` (planTier, aiWordsUsedThisMonth, stripeCustomerId?, stripeSubscriptionId?)

## API Endpoints

| Method | Path | Auth | Description |
|---|---|---|---|
| POST | `/billing/checkout` | Owner | Stripe Checkout session |
| POST | `/billing/portal` | Owner | Stripe customer portal URL |
| POST | `/webhooks/stripe` | Stripe sig | `subscription.updated`, `invoice.paid` |

## Frontend

- `/settings/billing` — plan card, usage, Stripe portal link
- `/auth/register` — plan selection at signup

## Implementation Checklist

- [ ] Create Stripe customer on register (Week 1)
- [ ] Checkout session endpoint (price IDs per tier)
- [ ] Customer portal endpoint
- [ ] Stripe webhook handler with signature verification
- [ ] `PlanGuard` enforcing seats / words / articles / integrations
- [ ] Monthly `aiWordsUsedThisMonth` reset cron
- [ ] `/settings/billing` UI with usage meters

## Done When

A subscription can be created/managed via Stripe and all plan limits (seats, words, articles, integrations) are enforced.
