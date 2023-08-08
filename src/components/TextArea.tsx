import { TextareaHTMLAttributes } from 'react';
import Label from './Label';
import { UseFormRegister } from 'react-hook-form';
import { cn } from '@/utils';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  className?: string;
  register?: UseFormRegister<any>;
  errorMessage?: string;
}

export default function TextArea({
  label,
  name,
  className,
  register,
  errorMessage,
  ...props
}: Props) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <textarea
        id={name}
        {...props}
        {...(register ? { ...register(name) } : {})}
        className={cn(
          `w-full border  bg-white px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 rounded-md disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-offset-2 ${
            errorMessage
              ? 'focus-visible:border-red-500  focus-visible:ring-red-300 border-red-500'
              : 'focus-visible:border-blue-500  focus-visible:ring-blue-300 border-gray-500'
          }`,
          className
        )}
      />
      <Label
        htmlFor={name}
        className="text-red-500 text-sm"
      >
        {errorMessage}
      </Label>
    </div>
  );
}
