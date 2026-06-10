import { ARTICLE_STATUSES } from '@lede/types';
import { statusStyles } from '@/lib/design-tokens';
import { mockArticles } from '@/lib/mock-data';
import { ArticleCard } from './article-card';

export function KanbanBoard() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {ARTICLE_STATUSES.map((status) => {
        const articles = mockArticles.filter((a) => a.status === status);
        const style = statusStyles[status];
        return (
          <div key={status} className="flex w-72 shrink-0 flex-col">
            <div className="mb-3 flex items-center gap-2 px-1">
              <span className={`h-2 w-2 rounded-full ${style.dot}`} />
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                {style.label}
              </h2>
              <span className="ml-auto rounded-full bg-surface-raised px-2 py-0.5 font-mono text-xs text-muted">
                {articles.length}
              </span>
            </div>
            <div className="flex flex-col gap-3 rounded-lg bg-surface-raised/60 p-2 min-h-[200px]">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
