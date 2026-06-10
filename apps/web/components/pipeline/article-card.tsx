import Link from 'next/link';
import { StatusBadge } from './status-badge';
import type { MockArticle } from '@/lib/mock-data';

interface ArticleCardProps {
  article: MockArticle;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const href =
    article.status === 'BRIEF'
      ? `/articles/${article.id}/brief`
      : article.status === 'REVIEW'
        ? `/articles/${article.id}/review`
        : `/articles/${article.id}/editor`;

  return (
    <Link
      href={href}
      className="group block rounded-lg border border-border bg-white p-4 shadow-sm transition-all hover:border-brand/30 hover:shadow-md"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="font-display text-sm font-semibold leading-snug text-foreground group-hover:text-brand">
          {article.title}
        </h3>
        <StatusBadge status={article.status} />
      </div>
      <dl className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-xs text-muted">
        <div>
          <dt className="sr-only">Assignee</dt>
          <dd>{article.assignee}</dd>
        </div>
        <div>
          <dt className="sr-only">Due</dt>
          <dd>{article.dueDate}</dd>
        </div>
        <div>
          <dt className="sr-only">Words</dt>
          <dd>{article.wordCount > 0 ? `${article.wordCount} words` : '—'}</dd>
        </div>
        <div>
          <dt className="sr-only">SEO</dt>
          <dd>{article.seoScore !== null ? `SEO ${article.seoScore}` : '—'}</dd>
        </div>
      </dl>
      <p className="mt-2 truncate text-xs text-muted">{article.publishTarget}</p>
    </Link>
  );
}
