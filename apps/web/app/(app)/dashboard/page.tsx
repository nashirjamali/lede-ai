import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/layout/page-header';
import { StatCard } from '@/components/layout/stat-card';
import { KanbanBoard } from '@/components/pipeline/kanban-board';
import { Progress } from '@/components/ui/progress';

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Pipeline"
        description="Track every article from idea to published"
        action={
          <Button asChild>
            <Link href="/articles/new">New article</Link>
          </Button>
        }
      />

      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <StatCard label="Active articles" value="24" sub="6 due this week" />
        <StatCard label="In review" value="3" sub="2 awaiting approval" />
        <div className="lede-card-raised p-6">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            AI words this month
          </p>
          <p className="font-display nums-old mt-2 text-3xl font-semibold tracking-tight text-ink">
            42,000
            <span className="ml-1.5 font-sans text-sm font-normal text-muted">/ 100,000</span>
          </p>
          <div className="mt-3">
            <Progress value={42000} max={100000} />
          </div>
        </div>
      </div>

      <div className="editorial-rule mb-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          The board
        </span>
      </div>

      <KanbanBoard />
    </>
  );
}
