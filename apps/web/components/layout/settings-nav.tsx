'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { settingsLinks } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export function SettingsNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {settingsLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'rounded-md px-3 py-2 text-sm font-medium transition-colors',
            pathname === link.href
              ? 'bg-brand/10 text-brand'
              : 'text-muted hover:bg-surface-raised hover:text-foreground',
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
