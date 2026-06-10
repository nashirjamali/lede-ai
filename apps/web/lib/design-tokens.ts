import type { ArticleStatus } from '@lede/types';

export const statusStyles: Record<
  ArticleStatus,
  { label: string; className: string; dot: string }
> = {
  IDEA: {
    label: 'Idea',
    className: 'bg-surface-inset text-muted border-border',
    dot: 'bg-border',
  },
  BRIEF: {
    label: 'Brief',
    className: 'bg-ink-soft/8 text-ink-soft border-ink-soft/15',
    dot: 'bg-ink-soft',
  },
  DRAFT: {
    label: 'Draft',
    className: 'bg-highlight/15 text-foreground border-highlight/30',
    dot: 'bg-highlight',
  },
  REVIEW: {
    label: 'Review',
    className: 'bg-accent/10 text-accent border-accent/25',
    dot: 'bg-accent',
  },
  APPROVED: {
    label: 'Approved',
    className: 'bg-success/10 text-success border-success/20',
    dot: 'bg-success',
  },
  SCHEDULED: {
    label: 'Scheduled',
    className: 'bg-ink/6 text-ink border-ink/12',
    dot: 'bg-ink',
  },
  PUBLISHED: {
    label: 'Published',
    className: 'bg-ink text-white border-ink',
    dot: 'bg-accent-soft',
  },
};

export const plans = [
  {
    name: 'Starter',
    price: 'Free',
    seats: '1 seat',
    words: '10k AI words/mo',
    articles: '10 articles',
  },
  {
    name: 'Pro',
    price: '$49',
    seats: '5 seats',
    words: '100k AI words/mo',
    articles: '100 articles',
    featured: true,
  },
  {
    name: 'Agency',
    price: '$149',
    seats: '20 seats',
    words: '500k AI words/mo',
    articles: 'Unlimited articles',
  },
  {
    name: 'Enterprise',
    price: '$399',
    seats: 'Unlimited seats',
    words: 'Unlimited AI words',
    articles: 'Unlimited articles',
  },
] as const;

export const navLinks = [
  { href: '/dashboard', label: 'Pipeline' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/analytics', label: 'Analytics' },
] as const;

export const settingsLinks = [
  { href: '/settings/team', label: 'Team' },
  { href: '/settings/integrations', label: 'Integrations' },
  { href: '/settings/ai', label: 'AI Persona' },
  { href: '/settings/billing', label: 'Billing' },
] as const;
