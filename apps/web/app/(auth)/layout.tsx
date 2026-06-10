import Link from 'next/link';
import { Logo } from '@/components/layout/logo';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lede-grain flex min-h-screen">
      <aside className="hidden w-[42%] flex-col justify-between bg-ink p-12 lg:flex">
        <Logo variant="light" />
        <div>
          <blockquote className="font-display text-3xl font-medium leading-snug tracking-tight text-white/90">
            &ldquo;The best content teams don&apos;t chase deadlines — they orchestrate them.&rdquo;
          </blockquote>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-white/35">
            Lede · Content Operations
          </p>
        </div>
        <div className="h-px w-16 bg-accent" />
      </aside>
      <div className="flex flex-1 flex-col bg-surface">
        <header className="px-6 py-6 lg:hidden">
          <Logo />
        </header>
        <main className="flex flex-1 items-center justify-center px-6 pb-16">
          <div className="w-full max-w-md page-enter">{children}</div>
        </main>
        <footer className="py-6 text-center text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-accent">
            ← Back to home
          </Link>
        </footer>
      </div>
    </div>
  );
}
