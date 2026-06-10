'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { settingsLinks } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

export function SettingsNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-0.5">
      {settingsLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'nav-link',
            pathname === link.href ? 'nav-link-light-active' : 'nav-link-light-inactive',
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
