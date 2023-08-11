import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ReactNode } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const dialogVariants = cva('fixed inset-0 flex p-10', {
  variants: {
    position: {
      center: 'items-center justify-center',
      topCenter: 'items-start justify-center',
      topLeft: 'items-start',
      topRight: 'items-start justify-end',
      bottomCenter: 'items-end justify-center',
      bottomLeft: 'items-end justify-start',
      bottomRight: 'items-end justify-end',
      left: 'items-center justify-start',
      right: 'items-center justify-end',
    },
  },
  defaultVariants: {
    position: 'center',
  },
});

interface Props extends VariantProps<typeof dialogVariants> {
  children?: ReactNode;
}

export default function Dialog({ children, position }: Props) {
  return (
    <div className={cn(dialogVariants({ position }))}>
      <div
        role="dialog"
        className="border p-4 rounded-lg relative z-50 bg-white shadow-md max-w-lg min-w-[32rem]"
      >
        <button className="absolute top-2 right-2 text-xl">
          <IoCloseOutline />
        </button>
        {children}
      </div>

      <div
        className={`fixed inset-0 backdrop-blur-sm transition-opacity duration-700 bg-black/40 z-40 ${
          true ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          //   onClick={hideSheet}
          className="w-full h-full cursor-default"
        ></button>
      </div>
    </div>
  );
}
