import { cn } from '@/utils';
import { SelectHTMLAttributes } from 'react';

import Label from './Label';

export interface SelectValueType {
  label: string;
  value: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  errorMessage?: string;
  options: SelectValueType[];
}

export default function Select({
  name,
  label,
  placeholder,
  className,
  errorMessage,
  options,
  ...props
}: Props) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <select
        {...props}
        id={name}
        name={name}
        defaultValue={undefined}
        className={cn(
          `w-full border bg-white px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 rounded-md disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-offset-2 ${
            errorMessage
              ? 'focus-visible:border-red-500  focus-visible:ring-red-300 border-red-500'
              : 'focus-visible:border-blue-500  focus-visible:ring-blue-300 border-gray-500'
          }`,
          className
        )}
      >
        {placeholder && (
          <option
            className="hidden"
            value={undefined}
          >
            {placeholder}
          </option>
        )}

        {options.map(({ value, label }) => (
          <option
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
