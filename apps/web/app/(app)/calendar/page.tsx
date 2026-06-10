import { PageHeader } from '@/components/layout/page-header';
import { Button } from '@/components/ui/button';
import { mockArticles } from '@/lib/mock-data';
import { StatusBadge } from '@/components/pipeline/status-badge';
import { cn } from '@/lib/utils';

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

      <div className="mb-6 flex gap-1 rounded-md border border-border bg-surface-raised p-1 w-fit">
        <Button size="sm" className="h-8">
          Month
        </Button>
        <Button size="sm" variant="ghost" className="h-8">
          Week
        </Button>
      </div>

      <div className="lede-card overflow-hidden">
        <div className="grid grid-cols-7 border-b border-border bg-ink">
          {days.map((d) => (
            <div
              key={d}
              className="p-3 text-center font-mono text-[11px] font-medium uppercase tracking-widest text-white/50"
            >
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {weeks.map((day, i) => {
            const article = scheduled.find((a) => a.dueDate.includes(String(day)));
            return (
              <div
                key={day}
                className={cn(
                  'min-h-[110px] border-b border-r border-border p-2.5 last:border-r-0',
                  i % 7 >= 5 && 'bg-surface-raised/50',
                )}
              >
                <span className="font-mono text-[11px] text-muted">{day}</span>
                {article && (
                  <div className="mt-2 rounded-md border border-border bg-white p-2 shadow-card">
                    <p className="truncate text-xs font-medium text-ink">{article.title}</p>
                    <StatusBadge status={article.status} className="mt-1.5 scale-90 origin-left" />
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
