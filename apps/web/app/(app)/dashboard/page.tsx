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

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <StatCard label="Active articles" value="24" sub="6 due this week" />
        <StatCard label="In review" value="3" sub="2 awaiting approval" />
        <div className="lede-card-raised p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">AI words this month</p>
          <div className="mt-3">
            <Progress value={42000} max={100000} label="42,000 / 100,000" />
          </div>
        </div>
      </div>

      <KanbanBoard />
    </>
  );
}
