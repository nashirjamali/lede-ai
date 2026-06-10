import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/pipeline/status-badge';

export default function ReviewPage() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-6 flex items-center justify-between">
        <StatusBadge status="REVIEW" />
        <div className="flex gap-2">
          <Button variant="outline">Request changes</Button>
          <Button>Approve</Button>
        </div>
      </div>

      <article className="flex-1 rounded-lg border border-border bg-white p-8">
        <h1 className="font-display mb-6 text-3xl font-bold">Content approval best practices</h1>
        <div className="space-y-4 leading-relaxed text-foreground">
          <p>
            A well-designed approval workflow reduces revision cycles and keeps stakeholders aligned
            without endless email threads.
          </p>
          <p className="rounded-md border-l-4 border-accent bg-accent/5 py-2 pl-4 text-sm">
            Comment anchor · Consider adding a concrete example of a 3-stage approval chain here.
          </p>
          <p>
            The best teams treat approval as a gate with clear criteria — not a rubber stamp at the
            end of a rushed deadline.
          </p>
        </div>
      </article>
    </div>
  );
}
