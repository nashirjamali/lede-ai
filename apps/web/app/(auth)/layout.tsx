import Link from 'next/link';
import { Logo } from '@/components/layout/logo';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lede-grain flex min-h-screen flex-col bg-surface">
      <header className="px-6 py-6">
        <Logo />
      </header>
      <main className="flex flex-1 items-center justify-center px-6 pb-16">
        <div className="w-full max-w-md page-enter">{children}</div>
      </main>
      <footer className="py-6 text-center text-sm text-muted">
        <Link href="/" className="hover:text-brand">
          ← Back to home
        </Link>
      </footer>
    </div>
  );
}
