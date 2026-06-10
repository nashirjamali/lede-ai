import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function EditorPage() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <Badge variant="accent">AI</Badge>
          <span className="text-sm text-muted">Type / for commands</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Save
          </Button>
          <Button size="sm">Submit for review</Button>
        </div>
      </div>

      <div className="flex flex-1 gap-6">
        <article className="prose-editor flex-1">
          <h1 className="font-display mb-6 text-3xl font-bold text-foreground">
            How to scale content ops for B2B SaaS
          </h1>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p className="text-muted italic">
              Start writing, or type <kbd className="rounded border border-border bg-surface-raised px-1.5 py-0.5 font-mono text-xs">/</kbd> to open the AI command menu.
            </p>
            <h2 className="font-display text-xl font-semibold">What is a content marketing workflow?</h2>
            <p className="text-muted">
              Content teams at scaling B2B companies face a coordination tax — briefs in one tool,
              drafts in another, approvals in Slack, publishing in a CMS...
            </p>
          </div>
        </article>

        <aside className="hidden w-72 shrink-0 border-l border-border pl-6 lg:block">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">Comments</p>
          <p className="text-sm text-muted">No comments yet. Reviewers can leave paragraph-level feedback here.</p>
        </aside>
      </div>
    </div>
  );
}
