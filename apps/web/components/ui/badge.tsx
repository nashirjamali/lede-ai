import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide',
  {
    variants: {
      variant: {
        default: 'border-border bg-surface-raised text-muted',
        brand: 'border-ink/15 bg-ink/6 text-ink',
        accent: 'border-accent/25 bg-accent/10 text-accent',
        success: 'border-success/20 bg-success/10 text-success',
        highlight: 'border-highlight/30 bg-highlight/15 text-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
