import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  className?: string;
}

export function StatCard({ label, value, sub, className }: StatCardProps) {
  return (
    <Card className={cn('lede-card-raised', className)}>
      <CardContent className="p-6">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          {label}
        </p>
        <p className="font-display nums-old mt-2 text-3xl font-semibold tracking-tight text-ink">
          {value}
        </p>
        {sub && <p className="mt-1.5 text-xs text-muted">{sub}</p>}
      </CardContent>
    </Card>
  );
}
