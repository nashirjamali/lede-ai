import { PageHeader } from '@/components/layout/page-header';
import { mockArticles } from '@/lib/mock-data';
import { StatusBadge } from '@/components/pipeline/status-badge';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const weeks = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

const scheduled = mockArticles.filter(
  (a) => a.status === 'SCHEDULED' || a.status === 'PUBLISHED',
);

export default function CalendarPage() {
  return (
    <>
      <PageHeader
        title="Publishing calendar"
        description="Scheduled and published articles at a glance"
      />

      <div className="mb-6 flex gap-2">
        <button type="button" className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white">
          Month
        </button>
        <button type="button" className="rounded-md px-4 py-2 text-sm font-medium text-muted hover:bg-surface-raised">
          Week
        </button>
      </div>

      <div className="lede-card overflow-hidden">
        <div className="grid grid-cols-7 border-b border-border bg-surface-raised">
          {days.map((d) => (
            <div key={d} className="p-3 text-center font-mono text-xs font-medium text-muted">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {weeks.map((day) => {
            const article = scheduled.find((a) => a.dueDate.includes(String(day)));
            return (
              <div
                key={day}
                className="min-h-[100px] border-b border-r border-border p-2 last:border-r-0"
              >
                <span className="font-mono text-xs text-muted">{day}</span>
                {article && (
                  <div className="mt-1 rounded border border-border bg-white p-2">
                    <p className="truncate text-xs font-medium">{article.title}</p>
                    <StatusBadge status={article.status} className="mt-1 scale-90 origin-left" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
