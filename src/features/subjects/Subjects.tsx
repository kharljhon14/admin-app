'use client';

import Dialog from '@/components/Dialog';
import SubjectForm from './SubjectForm';
import useDialog from '@/hooks/useDialog';
import Button from '@/components/Button';
import Table, { Column } from '@/components/Table';

import { query, collection, orderBy, getDocs, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { db } from '@/services/firebase';

export default function Subjects() {
  const { active, showDialog, hideDialog } = useDialog(false);

  const columns: Column<any>[] = [
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Description',
      key: 'description',
    },
    {
      title: 'Actions',
      key: 'actions',
    },
  ];

  const subscribeToData = () => {
    const q = query(collection(db, 'subjects'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => doc.data());
      console.log(updatedData);
    });

    // Return the unsubscribe function to clean up the listener when the component unmounts
    return unsubscribe;
  };
  useEffect(() => {
    const unsubscribe = subscribeToData();

    return () => {
      unsubscribe(); // Unsubscribe when the component unmounts
    };
  }, []);

  return (
    <div>
      <Button onClick={showDialog}>Show form</Button>
      <Dialog
        open={active}
        hideDialog={hideDialog}
        position="topCenter"
      >
        <h1 className="font-bold text-xl">Add Subject</h1>
        <SubjectForm />
      </Dialog>
      <Table
        columns={columns}
        data={[]}
      />
    </div>
  );
}
