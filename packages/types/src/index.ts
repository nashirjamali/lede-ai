export type PlanTier = 'STARTER' | 'PRO' | 'AGENCY' | 'ENTERPRISE';

export type ArticleStatus =
  | 'IDEA'
  | 'BRIEF'
  | 'DRAFT'
  | 'REVIEW'
  | 'APPROVED'
  | 'SCHEDULED'
  | 'PUBLISHED';

export type IntegrationType = 'WORDPRESS' | 'WEBFLOW' | 'GHOST' | 'CONTENTFUL' | 'WEBHOOK';

export type UserRole = 'OWNER' | 'ADMIN' | 'REVIEWER' | 'MEMBER';

export interface Organisation {
  id: string;
  name: string;
  slug: string;
  planTier: PlanTier;
  aiWordsUsedThisMonth: number;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  defaultAiPersona: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  orgId: string;
  email: string;
  name: string;
  role: UserRole;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Article {
  id: string;
  orgId: string;
  title: string;
  slug: string;
  status: ArticleStatus;
  authorId: string;
  assigneeId: string | null;
  content: Record<string, unknown>;
  wordCount: number;
  seoScore: number | null;
  publishAt: Date | null;
  publishedAt: Date | null;
  cmsIntegrationId: string | null;
  cmsPostId: string | null;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface BriefHeading {
  level: number;
  text: string;
}

export interface Brief {
  id: string;
  articleId: string;
  seedKeyword: string;
  targetCountry: string;
  primaryKeyword: string;
  semanticKeywords: string[];
  suggestedHeadings: BriefHeading[];
  competitorUrls: string[];
  targetWordCount: number;
  searchVolume: number | null;
  keywordDifficulty: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  articleId: string;
  authorId: string;
  parentId: string | null;
  content: string;
  paragraphRef: string | null;
  resolved: boolean;
  resolvedBy: string | null;
  resolvedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Integration {
  id: string;
  orgId: string;
  type: IntegrationType;
  label: string;
  siteUrl: string | null;
  spaceId: string | null;
  tokenExpiresAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface AiUsageLog {
  id: string;
  orgId: string;
  articleId: string;
  userId: string;
  command: string;
  tokensUsed: number;
  createdAt: Date;
}

export const ARTICLE_STATUSES: ArticleStatus[] = [
  'IDEA',
  'BRIEF',
  'DRAFT',
  'REVIEW',
  'APPROVED',
  'SCHEDULED',
  'PUBLISHED',
];
