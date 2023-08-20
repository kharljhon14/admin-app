'use client';

import Dialog from '@/components/Dialog';
import SubjectForm from './SubjectForm';
import useDialog from '@/hooks/useDialog';
import Button from '@/components/Button';
import Table, { Column } from '@/components/Table';

import { query, collection, orderBy, getDocs, onSnapshot, DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '@/services/firebase';

export default function Subjects() {
  const { active, showDialog, hideDialog } = useDialog(false);

  const [subjects, setSubjects] = useState<DocumentData[]>([]);

  const columns: Column<DocumentData>[] = [
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Description',
      key: 'description',
    },
  ];

  const subscribeToData = () => {
    const q = query(collection(db, 'subjects'), orderBy('createdAt'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedData = snapshot.docs.map((doc) => doc.data());
      setSubjects(updatedData);
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
        data={subjects}
      />
    </div>
  );
}
