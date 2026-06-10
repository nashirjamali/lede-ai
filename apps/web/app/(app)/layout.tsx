import { TopNav } from '@/components/layout/top-nav';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <TopNav />
      <main className="mx-auto max-w-7xl px-6 py-8 page-enter">{children}</main>
    </div>
  );
}
