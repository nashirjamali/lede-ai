import Link from 'next/link';
import { ArrowRight, Check, FileText, LayoutGrid, PenLine, Type } from 'lucide-react';
import { ARTICLE_STATUSES } from '@lede/types';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/layout/logo';
import { StatusBadge } from '@/components/pipeline/status-badge';
import { plans, statusStyles } from '@/lib/design-tokens';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: LayoutGrid,
    title: 'Content pipeline',
    description:
      'Kanban stages from idea to published — with stage-gate rules, bulk actions, and real-time sync.',
  },
  {
    icon: Type,
    title: 'AI writing co-pilot',
    description:
      'Slash commands in the editor. Stream completions directly into your draft as you write.',
  },
  {
    icon: FileText,
    title: 'SEO brief generator',
    description:
      'SERP-informed briefs with keywords, competitor analysis, and suggested outlines.',
  },
  {
    icon: PenLine,
    title: 'Approval workflows',
    description:
      'Paragraph-level comments, one-click approve, and audit logs your clients trust.',
  },
];

const mockCards = [
  { title: 'Q2 content strategy guide', status: 'DRAFT' as const, words: '1,240' },
  { title: 'SEO audit checklist', status: 'REVIEW' as const, words: '890' },
  { title: 'Product launch announcement', status: 'APPROVED' as const, words: '620' },
];

export default function HomePage() {
  return (
    <div className="landing-hero-mesh min-h-screen bg-surface">
      <header className="sticky top-0 z-50 border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Logo />
          <nav className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/register">
                Get started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="lede-grid-pattern absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-24 md:pt-32">
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="page-enter">
              <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                <span className="h-px w-8 bg-accent" />
                The editorial workspace
              </div>
              <h1 className="font-display mb-7 max-w-2xl text-[3rem] font-medium leading-[1.04] tracking-tight text-ink text-balance md:text-[4.25rem]">
                Where editorial
                <br />
                <span className="italic text-accent">meets velocity.</span>
              </h1>
              <p className="mb-10 max-w-md text-base leading-relaxed text-muted text-pretty">
                One workspace for planning, writing, reviewing, and publishing. Built for teams who
                treat content as craft — not chaos.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" asChild className="h-12 px-8">
                  <Link href="/auth/register">
                    Start free
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-12">
                  <Link href="#pipeline">See the workflow</Link>
                </Button>
              </div>
            </div>

            <div className="page-enter stagger-2 relative lg:border-l lg:border-border lg:pl-12">
              <div className="ink-panel">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                    Pipeline
                  </span>
                  <span className="rounded-sm bg-accent px-2 py-0.5 font-mono text-[10px] text-white">
                    Live
                  </span>
                </div>
                <div className="space-y-2.5">
                  {mockCards.map((card, i) => {
                    const style = statusStyles[card.status];
                    return (
                      <div
                        key={card.title}
                        className={`rounded-md border border-white/10 bg-white/5 p-4 page-enter stagger-${i + 3}`}
                        style={{ marginLeft: i > 0 ? `${Math.min(i * 12, 24)}px` : undefined }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-display text-sm font-medium leading-snug text-white/90">
                            {card.title}
                          </p>
                          <span className="shrink-0 rounded-sm border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide text-white/80">
                            {style.label}
                          </span>
                        </div>
                        <p className="mt-2 font-mono text-[10px] text-white/60">
                          {card.words} words
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-ink-band py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-4xl font-medium tracking-tight text-white text-balance">
                Built for the full lifecycle
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              From seed keyword to published URL — every stage instrumented, every handoff tracked.
            </p>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`group bg-ink p-8 transition-colors hover:bg-ink-soft/40 page-enter stagger-${i + 1}`}
              >
                <div className="mb-6">
                  <f.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-display mb-3 text-xl font-medium text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pipeline" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display mb-5 text-4xl font-medium tracking-tight text-ink text-balance">
                Seven stages.
                <br />
                One source of truth.
              </h2>
              <p className="max-w-md leading-relaxed text-muted">
                Every article moves through a configurable pipeline with assignees, SEO scores, and
                publishing targets visible at a glance.
              </p>
            </div>
            <div className="relative min-w-0">
              <div
                className="landing-pipeline-line pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 md:block"
                aria-hidden
              />
              <ol className="landing-pipeline-stages list-none" aria-label="Article pipeline stages">
                {ARTICLE_STATUSES.map((status, i) => (
                  <li key={status} className={`page-enter stagger-${i + 1} shrink-0`}>
                    <StatusBadge
                      status={status}
                      className="landing-pipeline-stage rounded-sm px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide"
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-raised py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <h2 className="font-display text-4xl font-medium tracking-tight text-ink text-balance">
              Transparent, team-first
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, i) => {
              const featured = 'featured' in plan && plan.featured;
              return (
                <div
                  key={plan.name}
                  className={`lede-card flex flex-col p-7 transition-all duration-200 hover:-translate-y-0.5 page-enter stagger-${i + 1} ${
                    featured ? 'landing-pricing-featured' : ''
                  }`}
                >
                  {featured && (
                    <Badge variant="accent" className="mb-4 w-fit">
                      Popular
                    </Badge>
                  )}
                  <h3 className="font-display text-2xl font-medium text-ink">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <p className="font-display nums-old text-4xl font-medium text-ink">
                      {plan.price}
                    </p>
                    {plan.price !== 'Free' && (
                      <span className="font-mono text-xs text-muted">/mo</span>
                    )}
                  </div>
                  <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-border pt-6 text-sm text-muted">
                    {[plan.seats, plan.words, plan.articles].map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <Check className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-8 w-full"
                    variant={featured ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href="/auth/register">Get started</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-lg bg-ink px-8 py-16 text-center md:px-20">
            <h2 className="font-display mb-4 text-3xl font-medium text-white text-balance md:text-4xl">
              Ready to move your pipeline?
            </h2>
            <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-white/60 text-pretty">
              Start free. No credit card. Your team can be planning, writing, and approving today.
            </p>
            <Button size="lg" variant="accent" asChild className="h-12 px-8">
              <Link href="/auth/register">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <Logo />
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            © 2026 Lede
          </p>
        </div>
      </footer>
    </div>
  );
}
