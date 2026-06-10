import Link from 'next/link';
import { Logo } from './logo';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

interface TopNavProps {
  activePath?: string;
}

export function TopNav({ activePath }: TopNavProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink shadow-elevated">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Logo variant="light" />
          <nav className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'nav-link',
                  activePath === link.href ? 'nav-link-active' : 'nav-link-inactive',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-white/60 hover:bg-white/8 hover:text-white"
          >
            <Link href="/settings/team">Settings</Link>
          </Button>
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent font-mono text-xs font-medium text-white">
            SK
          </div>
        </div>
      </div>
    </header>
  );
}
