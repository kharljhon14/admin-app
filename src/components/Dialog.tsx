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
  open: boolean;
  hideDialog: () => void;
}

export default function Dialog({ children, open, hideDialog, position }: Props) {
  return (
    <div
      className={cn(
        `${open ? 'block' : 'hidden pointer-events-none'}`,
        dialogVariants({ position })
      )}
    >
      <div
        role="dialog"
        className={`border px-4 pb-4 py-8 rounded-lg relative z-50 bg-white shadow-md max-w-lg min-w-[32rem] transition-all duration-300 ease-in-out ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={hideDialog}
          className="absolute top-2 right-2 text-2xl"
        >
          <IoCloseOutline />
        </button>
        {children}
      </div>

      <div
        className={`fixed inset-0 backdrop-blur-sm transition-opacity duration-500 bg-black/40 z-40 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={hideDialog}
          className="w-full h-full cursor-default"
        ></button>
      </div>
    </div>
  );
}
