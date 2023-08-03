import { cn } from '@/utils';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'number';
  className?: string;
}

export default function TextField({ type = 'text', className, ...props }: Props) {
  return (
    <input
      {...props}
      className={cn(
        'w-full border border-blue-500 bg-white px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded-md disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-offset-2',
        className
      )}
      type={type}
    />
  );
}
