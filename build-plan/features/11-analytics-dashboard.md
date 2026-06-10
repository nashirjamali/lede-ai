# 11 — Analytics Dashboard

- **Status:** Planned
- **Week:** 4
- **Spec Ref:** §2.6
- **Implementation file:** _none yet_

## Summary

Post-publish performance per article from Google Search Console + GA4, a composite Lede score, and a team leaderboard.

## Scope

- **GSC:** impressions, clicks, average position, CTR per article URL.
- **GA4:** pageviews, time on page, bounce rate, conversion events.
- **Lede score:** composite (traffic + rankings + engagement), updated weekly.
- **Team leaderboard:** top writers by published word count + avg performance.
- OAuth with refresh token rotation (flagged as a key differentiator).

## Data Models

- Analytics snapshot per article (impressions, clicks, position, ctr, pageviews, etc.)
- `Integration`-style OAuth credential storage for Google (encrypted)

## Frontend

- `/analytics` — GSC + GA4 stats per article + team leaderboard
- Components: `StatsCard`, `ArticlePerformanceTable`

## Worker

- `analytics.processor.ts` — weekly GSC/GA4 sync

## Implementation Checklist

- [ ] Google OAuth scopes for GSC + GA4 + refresh token rotation
- [ ] GSC API client (per-URL metrics)
- [ ] GA4 Data API client
- [ ] `analytics.processor.ts` weekly sync job
- [ ] Lede score computation + persistence
- [ ] Aggregation endpoints (per article + leaderboard)
- [ ] Analytics dashboard UI (`StatsCard`, `ArticlePerformanceTable`)
- [ ] Team leaderboard view

## Done When

Live GSC + GA4 data is visible per article and the leaderboard ranks writers.
