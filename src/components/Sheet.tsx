import { cn } from '@/utils';
import { ReactNode, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
interface Props {
  title?: string;
  children?: ReactNode;
  active: boolean;
  hideSheet: () => void;
}

export default function Sheet({ title, children, active, hideSheet }: Props) {
  useEffect(() => {
    if (active) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'visible';
  }, [active]);

  return (
    <>
      <aside
        className={cn(
          `fixed z-50 bg-white border-l border-slate-500 inset-y-0 w-full lg:w-1/4 md:w-1/3 h-full transition-all duration-700 ${
            active ? 'right-0 ' : '-right-full md:-right-1/3 ld:-right-1/4'
          }`
        )}
      >
        <div className="relative h-full w-full">
          <button
            onClick={hideSheet}
            className="absolute top-4 right-4 text-lg"
          >
            <AiOutlineClose />
          </button>

          <div className="p-6">
            <h1>{title}</h1>
            <div>{children}</div>
          </div>
        </div>
      </aside>
      <div
        className={`fixed inset-0 backdrop-blur-sm transition-opacity duration-700 bg-black/40 z-40 ${
          active ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
