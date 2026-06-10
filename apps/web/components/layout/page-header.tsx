interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 border-b border-border/60 pb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">{title}</h1>
        {description && (
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
