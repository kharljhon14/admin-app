import { cn } from '@/utils';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
}

export default function Card({ children, className }: Props) {
  return <div className={cn('rounded-lg border shadow-lg p-8', className)}>{children}</div>;
}
