import type { ArticleStatus } from '@lede/types';

export const statusStyles: Record<
  ArticleStatus,
  { label: string; className: string; dot: string }
> = {
  IDEA: {
    label: 'Idea',
    className: 'bg-stone-100 text-stone-700 border-stone-200',
    dot: 'bg-stone-400',
  },
  BRIEF: {
    label: 'Brief',
    className: 'bg-sky-50 text-sky-800 border-sky-200',
    dot: 'bg-sky-500',
  },
  DRAFT: {
    label: 'Draft',
    className: 'bg-amber-50 text-amber-900 border-amber-200',
    dot: 'bg-amber-500',
  },
  REVIEW: {
    label: 'Review',
    className: 'bg-orange-50 text-orange-900 border-orange-200',
    dot: 'bg-orange-500',
  },
  APPROVED: {
    label: 'Approved',
    className: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    dot: 'bg-success',
  },
  SCHEDULED: {
    label: 'Scheduled',
    className: 'bg-teal-50 text-teal-800 border-teal-200',
    dot: 'bg-teal-500',
  },
  PUBLISHED: {
    label: 'Published',
    className: 'bg-brand/10 text-brand border-brand/20',
    dot: 'bg-brand',
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
