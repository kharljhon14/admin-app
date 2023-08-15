'use client';

import Button from '@/components/Button';
import Dialog from '@/components/Dialog';
import Table from '@/components/Table';

import UsersGrid from '@/features/products/UsersGrid';
import useDialog from '@/hooks/useDialog';

import { AiOutlinePlus } from 'react-icons/ai';

export default function Home() {
  const { active, showDialog, hideDialog } = useDialog(false);
  return (
    <main>
      <div className="mx-10">
        <h1>Home</h1>
        <UsersGrid />
        <Button
          onClick={showDialog}
          className="absolute bottom-10 right-10 h-14 w-14 text-2xl rounded-full flex items-center justify-center"
        >
          <AiOutlinePlus />
        </Button>

        <Dialog
          open={active}
          hideDialog={hideDialog}
        >
          <h1>hello</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque aspernatur vitae
            assumenda molestias quasi. Voluptate, minima ex laborum incidunt ipsum dignissimos,
            aliquam facilis pariatur praesentium eligendi, saepe aspernatur recusandae?
          </p>
        </Dialog>
      </div>
      <Table />
    </main>
  );
}
