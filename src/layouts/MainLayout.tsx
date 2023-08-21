'use client';

import SideNav from '@/features/navigations/SideNav';
import { ReactNode, useState } from 'react';

interface Props {
  children?: ReactNode;
}

export default function MainLayout({ children }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      <SideNav
        open={open}
        setOpen={handleOpen}
      />
      <div className={`p-5 ${open ? ' md:ml-80' : 'md:ml-20'}`}>{children}</div>
    </div>
  );
}
