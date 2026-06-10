import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/pipeline/status-badge';

export default function ReviewPage() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-6 flex items-center justify-between">
        <StatusBadge status="REVIEW" />
        <div className="flex gap-2">
          <Button variant="outline">Request changes</Button>
          <Button variant="accent">Approve</Button>
        </div>
      </div>

      <article className="lede-card flex-1 p-10">
        <h1 className="font-display mb-8 text-3xl font-semibold tracking-tight text-ink">
          Content approval best practices
        </h1>
        <div className="max-w-2xl space-y-5 leading-relaxed">
          <p className="dropcap text-muted">
            A well-designed approval workflow reduces revision cycles and keeps stakeholders aligned
            without endless email threads.
          </p>
          <p className="rounded-md border-l-2 border-accent bg-accent/5 py-3 pl-5 text-sm text-ink">
            Comment anchor · Consider adding a concrete example of a 3-stage approval chain here.
          </p>
          <p className="text-muted">
            The best teams treat approval as a gate with clear criteria — not a rubber stamp at the
            end of a rushed deadline.
          </p>
        </div>
      </article>
    </div>
  );
}
