import { cn } from '@/utils';
import { ReactNode } from 'react';

interface Props {
  title?: string;
  children?: ReactNode;
  active: boolean;
  hideSheet: () => void;
}

export default function Sheet({ title, children, active, hideSheet }: Props) {
  return (
    <>
      <aside
        className={cn(
          `fixed z-50 bg-white border-l border-slate-500 inset-y-0 w-full lg:w-1/4 md:w-1/3 h-full transition-all duration-500 ${
            active ? 'right-0 ' : '-right-full md:-right-1/3 ld:-right-1/4'
          }`
        )}
      >
        <div className="relative h-full w-full">
          <button
            onClick={hideSheet}
            className="absolute top-2 right-4 text-md"
          >
            X
          </button>

          <div className="p-6">
            <h1>{title}</h1>
            <div>{children}</div>
          </div>
        </div>
      </aside>
      <div
        className={`fixed w-screen h-screen inset-0 backdrop-blur-sm transition-all duration-300 ${
          active ? ' bg-black/40 z-40' : '-z-40 bg-black/0'
        }`}
      >
        <button
          onClick={hideSheet}
          className="w-full h-full cursor-default"
        ></button>
      </div>
    </>
  );
}
