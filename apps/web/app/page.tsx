import { ARTICLE_STATUSES } from '@lede/types';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface">
      <header className="border-b border-border bg-surface-raised">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-2xl font-bold text-brand">Lede</span>
          <nav className="flex gap-3">
            <Button variant="ghost" asChild>
              <a href="/auth/login">Log in</a>
            </Button>
            <Button asChild>
              <a href="/auth/register">Get started</a>
            </Button>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
          AI Content Ops Platform
        </p>
        <h1 className="font-display mb-6 max-w-3xl text-5xl font-bold leading-tight text-foreground">
          Plan, write, review, and publish — all in one workspace.
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-muted">
          Lede combines AI-assisted writing, SEO briefs, approval workflows, and scheduled
          publishing for agencies and in-house content teams.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href="/auth/register">Start free</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#pipeline">See the pipeline</a>
          </Button>
        </div>
      </section>

      <section id="pipeline" className="border-t border-border bg-surface-raised py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display mb-8 text-3xl font-bold text-foreground">
            Content pipeline
          </h2>
          <div className="flex flex-wrap gap-3">
            {ARTICLE_STATUSES.map((status) => (
              <span
                key={status}
                className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-sm text-foreground"
              >
                {status}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
