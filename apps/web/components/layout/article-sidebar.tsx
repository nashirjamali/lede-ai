'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { StatusBadge } from '@/components/pipeline/status-badge';
import { cn } from '@/lib/utils';
import type { ArticleStatus } from '@lede/types';

interface ArticleSidebarProps {
  articleId: string;
  title: string;
  status: ArticleStatus;
}

const articleLinks = (id: string) => [
  { href: `/articles/${id}/brief`, label: 'Brief' },
  { href: `/articles/${id}/editor`, label: 'Editor' },
  { href: `/articles/${id}/review`, label: 'Review' },
];

export function ArticleSidebar({ articleId, title, status }: ArticleSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-border bg-surface-raised">
      <div className="border-b border-border p-4">
        <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">Article</p>
        <h2 className="font-display text-sm font-semibold leading-snug text-foreground">{title}</h2>
        <div className="mt-3">
          <StatusBadge status={status} />
        </div>
      </div>
      <nav className="flex flex-col gap-1 p-3">
        {articleLinks(articleId).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'rounded-md px-3 py-2 text-sm font-medium transition-colors',
              pathname === link.href
                ? 'bg-brand/10 text-brand'
                : 'text-muted hover:bg-white hover:text-foreground',
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
