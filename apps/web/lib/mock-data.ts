import type { ArticleStatus } from '@lede/types';

export interface MockArticle {
  id: string;
  title: string;
  status: ArticleStatus;
  assignee: string;
  wordCount: number;
  seoScore: number | null;
  dueDate: string;
  publishTarget: string;
}

export const mockArticles: MockArticle[] = [
  {
    id: '1',
    title: 'How to scale content ops for B2B SaaS',
    status: 'IDEA',
    assignee: 'Sarah K.',
    wordCount: 0,
    seoScore: null,
    dueDate: 'Jun 18',
    publishTarget: 'Company blog',
  },
  {
    id: '2',
    title: 'AI writing workflows for agencies',
    status: 'BRIEF',
    assignee: 'Marcus L.',
    wordCount: 0,
    seoScore: null,
    dueDate: 'Jun 15',
    publishTarget: 'Client site',
  },
  {
    id: '3',
    title: 'SEO brief template for enterprise teams',
    status: 'DRAFT',
    assignee: 'Priya N.',
    wordCount: 1240,
    seoScore: 62,
    dueDate: 'Jun 14',
    publishTarget: 'WordPress',
  },
  {
    id: '4',
    title: 'Content approval best practices',
    status: 'REVIEW',
    assignee: 'James T.',
    wordCount: 2100,
    seoScore: 78,
    dueDate: 'Jun 12',
    publishTarget: 'Webflow',
  },
  {
    id: '5',
    title: 'Publishing calendar playbook',
    status: 'APPROVED',
    assignee: 'Sarah K.',
    wordCount: 1850,
    seoScore: 84,
    dueDate: 'Jun 20',
    publishTarget: 'Ghost',
  },
  {
    id: '6',
    title: 'Q3 product launch narrative',
    status: 'SCHEDULED',
    assignee: 'Marcus L.',
    wordCount: 2400,
    seoScore: 91,
    dueDate: 'Jun 22',
    publishTarget: 'WordPress',
  },
  {
    id: '7',
    title: 'Customer story: Acme Corp',
    status: 'PUBLISHED',
    assignee: 'Priya N.',
    wordCount: 1680,
    seoScore: 88,
    dueDate: 'Jun 1',
    publishTarget: 'Company blog',
  },
];

export const mockBrief = {
  seedKeyword: 'content marketing workflow',
  primaryKeyword: 'content marketing workflow software',
  semanticKeywords: [
    'editorial calendar',
    'content approval',
    'SEO brief',
    'content ops',
    'publishing pipeline',
  ],
  targetWordCount: 2200,
  searchVolume: 2400,
  keywordDifficulty: 42,
  headings: [
    { level: 2, text: 'What is a content marketing workflow?' },
    { level: 2, text: 'Stages of a modern content pipeline' },
    { level: 3, text: 'Briefing and keyword research' },
    { level: 3, text: 'Drafting with AI assistance' },
    { level: 2, text: 'Tools teams use today' },
    { level: 2, text: 'How to measure content ops ROI' },
  ],
  competitors: [
    { url: 'hubspot.com/blog/content-workflow', position: 1 },
    { url: 'contentful.com/guides/editorial-workflow', position: 2 },
    { url: 'notion.so/templates/content-calendar', position: 3 },
  ],
};
