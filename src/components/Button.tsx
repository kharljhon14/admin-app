import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-blue-500 text-white hover:bg-blue-500/90',
        destructive: 'bg-red-500 text-white hover:bg-red-500/90',
        outline:
          'border border-input border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white',
        secondary: 'bg-slate-500 text-white hover:bg-slate-500/80',
        ghost: 'hover:bg-blue-500 hover:text-white',
        link: 'text-blue-500 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  className?: string;
  loading?: boolean;
}

export default function Button({ children, className, variant, size, loading, ...props }: Props) {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {loading ? (
        <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="20"
          visible={true}
        />
      ) : (
        children
      )}
    </button>
  );
}
