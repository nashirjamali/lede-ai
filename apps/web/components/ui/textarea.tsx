import * as React from 'react';
import { cn } from '@/lib/utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn('lede-input min-h-[120px] py-3', className)} {...props} />
  ),
);
Textarea.displayName = 'Textarea';

export { Textarea };
