import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex items-baseline gap-1.5',
        className,
      )}
    >
      <span
        className={cn(
          'font-display text-2xl font-semibold tracking-tight',
          variant === 'light' ? 'text-white' : 'text-ink',
        )}
      >
        Lede
      </span>
      <span
        className={cn(
          'font-mono text-[10px] uppercase tracking-[0.18em]',
          variant === 'light' ? 'text-white/40' : 'text-accent',
        )}
      >
        ops
      </span>
    </Link>
  );
}
