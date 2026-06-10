import { SettingsNav } from '@/components/layout/settings-nav';
import { PageHeader } from '@/components/layout/page-header';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader title="Settings" description="Manage your workspace" />
      <div className="flex gap-8">
        <aside className="w-48 shrink-0">
          <SettingsNav />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}
