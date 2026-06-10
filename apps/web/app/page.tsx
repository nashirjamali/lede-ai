import Link from 'next/link';
import { ARTICLE_STATUSES } from '@lede/types';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/layout/logo';
import { plans } from '@/lib/design-tokens';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    title: 'Content pipeline',
    description: 'Kanban stages from idea to published — with stage-gate rules and bulk actions.',
  },
  {
    title: 'AI writing co-pilot',
    description: 'Slash commands in the editor. Stream GPT-4o completions directly into your draft.',
  },
  {
    title: 'SEO brief generator',
    description: 'SERP-informed briefs with keywords, competitor analysis, and suggested outlines.',
  },
  {
    title: 'Approval workflows',
    description: 'Paragraph-level comments, one-click approve, and audit logs your clients trust.',
  },
];

export default function HomePage() {
  return (
    <div className="lede-grain min-h-screen bg-surface">
      <header className="border-b border-border bg-surface/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="flex gap-3">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/register">Get started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24 page-enter">
        <Badge variant="accent" className="mb-6">
          AI Content Ops Platform
        </Badge>
        <h1 className="font-display mb-6 max-w-3xl text-5xl font-bold leading-[1.1] text-foreground md:text-6xl">
          The editorial workspace your content team actually needs.
        </h1>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted">
          Plan, write, review, approve, and publish from one place. Built for agencies and
          in-house teams who are tired of bouncing between Docs, Notion, Ahrefs, and Slack.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <Link href="/auth/register">Start free</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/dashboard">View demo pipeline</Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border bg-surface-raised py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display mb-12 text-3xl font-bold text-foreground">
            Everything in one pipeline
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`lede-card-raised p-6 page-enter stagger-${i + 1}`}
              >
                <h3 className="font-display mb-2 text-lg font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pipeline" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display mb-4 text-3xl font-bold">Seven stages. Zero chaos.</h2>
          <p className="mb-8 max-w-xl text-muted">
            Every article moves through a configurable pipeline with assignees, SEO scores, and
            publishing targets visible at a glance.
          </p>
          <div className="flex flex-wrap gap-3">
            {ARTICLE_STATUSES.map((status) => (
              <span
                key={status}
                className="rounded-full border border-border bg-white px-4 py-2 font-mono text-sm text-foreground shadow-sm"
              >
                {status}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-raised py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display mb-12 text-center text-3xl font-bold">Pricing</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`lede-card flex flex-col p-6 ${'featured' in plan && plan.featured ? 'border-brand ring-2 ring-brand/20' : ''}`}
              >
                {'featured' in plan && plan.featured && (
                  <Badge variant="brand" className="mb-3 w-fit">
                    Popular
                  </Badge>
                )}
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className="font-display mt-2 text-3xl font-bold text-brand">{plan.price}</p>
                <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm text-muted">
                  <li>{plan.seats}</li>
                  <li>{plan.words}</li>
                  <li>{plan.articles}</li>
                </ul>
                <Button className="mt-6 w-full" variant={'featured' in plan && plan.featured ? 'default' : 'outline'} asChild>
                  <Link href="/auth/register">Get started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display mb-4 text-3xl font-bold">Join the waitlist</h2>
          <p className="mb-8 text-muted">
            Early access for content teams who want to ship faster without sacrificing quality.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="you@company.com"
              className="lede-input flex-1"
            />
            <Button type="submit">Notify me</Button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        Lede · AI Content Ops Platform
      </footer>
    </div>
  );
}
