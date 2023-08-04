import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ReactNode } from 'react';

const inlineAlertVariants = cva('border-2 p-6 rounded-md shadow-sm relative', {
  variants: {
    variant: {
      default: 'border-gray-500 bg-gray-50',
      informative: 'border-blue-500 bg-blue-50',
      positive: 'border-green-500 bg-green-50',
      destructive: 'border-red-500 bg-red-50',
      warning: 'border-yellow-500 bg-yellow-50',
    },
    size: {
      default: 'w-72',
      lg: 'w-96',
      sm: 'w-64',
      full: 'w-full',
      half: 'w-1/2',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

interface Props extends VariantProps<typeof inlineAlertVariants> {
  title?: string;
  children?: ReactNode;
  className?: string;
}

export default function InlineAlert({ title, children, className, variant, size }: Props) {
  return (
    <div className={cn(inlineAlertVariants({ variant, size, className }))}>
      <h1 className="font-bold">{title}</h1>
      {children}
    </div>
  );
}
