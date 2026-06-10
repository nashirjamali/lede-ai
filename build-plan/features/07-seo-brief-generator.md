# 07 — SEO Brief Generator

- **Status:** Planned
- **Week:** 2
- **Spec Ref:** §2.3
- **Implementation file:** _none yet_

## Summary

Generates a writer-ready brief (intent, competitors, keywords, headings, word count) from a seed keyword using DataForSEO + GPT-4o, run as an async worker job.

## Scope

1. User enters seed keyword + target country.
2. API/worker calls DataForSEO for SERP top-10 + keyword metrics (volume, difficulty, CPC).
3. GPT-4o analyses top-ranking pages → primary keyword, semantic keywords, content gaps, H2 outline, meta title template.
4. Brief saved to the article; exportable as PDF or sent to an external writer.

## Data Models

- `Brief` (articleId UNIQUE, seedKeyword, targetCountry, primaryKeyword, semanticKeywords[], suggestedHeadings JSON, competitorUrls[], targetWordCount, searchVolume?, keywordDifficulty?)

## API Endpoints

| Method | Path | Auth | Description |
|---|---|---|---|
| POST | `/articles/:id/brief/generate` | Member+ | Triggers DataForSEO + GPT-4o brief job |
| GET | `/articles/:id/brief` | Member+ | Return generated brief |

## Frontend

- `/articles/:id/brief` — keywords, SERP data, outline
- Components: `BriefPanel`, `KeywordPills`, `SerpTable`

## Worker

- `brief.processor.ts` — async brief generation

## Implementation Checklist

- [ ] DataForSEO client (SERP + keyword metrics) with basic auth
- [ ] `brief.processor.ts` BullMQ job
- [ ] GPT-4o analysis prompt → structured brief output
- [ ] Persist `Brief` (one per article)
- [ ] Brief generate + get endpoints
- [ ] Brief viewer page with `KeywordPills` + `SerpTable`
- [ ] PDF export to S3
- [ ] Job status surfaced to UI

## Done When

A brief is generated for a test keyword with keywords, SERP data, and an H2 outline, and renders on the brief page.
