'use client';

import { cn } from '@/utils';
import { InputHTMLAttributes, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'number';
  className?: string;
}

export default function TextField({ type = 'text', className, ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleType = () => {
    if (type === 'password') {
      if (showPassword) return 'text';
      else return 'password';
    }

    return type;
  };

  return (
    <div className="relative flex">
      <input
        {...props}
        className={cn(
          'w-full border border-gray-500 focus-visible:border-blue-500 bg-white px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded-md disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-offset-2',
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
  );
}
