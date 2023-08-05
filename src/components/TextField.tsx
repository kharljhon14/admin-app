'use client';

import { cn } from '@/utils';
import { InputHTMLAttributes, useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Label from './Label';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: 'text' | 'password' | 'number';
  className?: string;
  register?: UseFormRegister<any>;
  errorMessage?: string;
}

export default function TextField({
  name,
  type = 'text',
  className,
  register,
  errorMessage,
  ...props
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleType = () => {
    if (type === 'password') {
      if (showPassword) return 'text';
      else return 'password';
    }

    return type;
  };

  return (
    <div>
      <div className="relative flex">
        <input
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
          type={handleType()}
        />

        {type === 'password' && (
          <button
            onClick={() => setShowPassword((prev) => !prev)}
            type="button"
            className="absolute z-10 top-1/2 transform -translate-y-1/2 right-3 text-gray-500 text-2xl"
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        )}
      </div>

      <Label
        htmlFor={name}
        className="text-red-500 text-sm"
      >
        {errorMessage}
      </Label>
    </div>
  );
}
