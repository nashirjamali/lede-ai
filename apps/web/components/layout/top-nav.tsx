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
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  activePath === link.href
                    ? 'bg-brand/10 text-brand'
                    : 'text-muted hover:bg-surface-raised hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/settings/team">Settings</Link>
          </Button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-medium text-white">
            SK
          </div>
        </div>
      </div>
    </header>
  );
}
