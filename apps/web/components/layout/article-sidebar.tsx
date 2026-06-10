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
    <aside className="flex w-60 shrink-0 flex-col border-r border-border bg-surface-raised">
      <div className="border-b border-border p-5">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          Article
        </p>
        <h2 className="font-display text-base font-semibold leading-snug text-ink">{title}</h2>
        <div className="mt-3">
          <StatusBadge status={status} />
        </div>
      </div>
      <nav className="flex flex-col gap-0.5 p-3">
        {articleLinks(articleId).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'nav-link',
              pathname === link.href ? 'nav-link-light-active' : 'nav-link-light-inactive',
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
