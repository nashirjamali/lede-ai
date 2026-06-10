import { cn } from '@/lib/utils';

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  label?: string;
}

export function Progress({ value, max = 100, className, label }: ProgressProps) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <div className="flex justify-between font-mono text-xs text-muted">
          <span>{label}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div className="h-1.5 overflow-hidden rounded-full bg-surface-inset">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-highlight transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
