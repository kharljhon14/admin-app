'use client';

import Button from '@/components/Button';
import Dialog from '@/components/Dialog';
import Table, { Column } from '@/components/Table';

import UsersGrid from '@/features/products/UsersGrid';
import useDialog from '@/hooks/useDialog';
import { ReactNode } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';

interface TestType {
  subject: string; // Corrected typo 'subjuct' to 'subject'
  year: string;
  students: number;
  actions: ReactNode;
}

export default function Home() {
  const { active, showDialog, hideDialog } = useDialog(false);

  const columns: Column<TestType>[] = [
    {
      title: 'Subject',
      key: 'subject',
    },
    {
      title: 'Year',
      key: 'year',
    },
    {
      title: 'Students',
      key: 'students',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => {
        // Added type annotation for 'data'
        return (
          <div>
            <Button>Update</Button>
            <Button variant="destructive">Delete</Button>
          </div>
        );
      },
    },
  ];

  const data: TestType[] = [
    // Added type annotation for 'data'
    {
      subject: 'Math',
      year: 'First',
      students: 40,
      actions: 'actions',
    },
    {
      subject: 'Science', // Added different subject for diversity
      year: 'Second', // Corrected 'First' to 'Second' for diversity
      students: 30, // Adjusted number of students for diversity
      actions: 'actions',
    },
    // Add more data entries here...
  ];

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
      <Table
        data={data}
        columns={columns}
      />
    </main>
  );
}
