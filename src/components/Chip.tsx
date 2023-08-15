import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ReactNode } from 'react';

const chipVariants = cva('text-sm rounded-xl px-3 text-white font-medium', {
  variants: {
    variant: {
      default: 'bg-black',
      secondary: 'bg-slate-500',
      informative: 'bg-blue-500',
      positive: 'bg-green-500',
      destructive: 'bg-red-500',
      warning: 'bg-yellow-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface Props extends VariantProps<typeof chipVariants> {
  children?: ReactNode;
}

export default function Chip({ children, variant }: Props) {
  return (
    <div className={cn(chipVariants({ variant }))}>
      <span>{children}</span>
    </div>
  );
}
