'use client';

import Button from '@/components/Button';
import Dialog from '@/components/Dialog';
import Table, { Column } from '@/components/Table';
import useDialog from '@/hooks/useDialog';
import { db } from '@/services/firebase';
import { Subject } from '@/types/subject';
import {
  deleteDoc,
  doc,
  query,
  collection,
  orderBy,
  onSnapshot,
  getCountFromServer,
  limit,
  getDocs,
  startAfter,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Props {
  setSubject: (subject: Subject | undefined) => void;
  showDialog: () => void;
  subject?: Subject;
}

export default function SubjectList({ setSubject, showDialog, subject }: Props) {
  const { active, showDialog: showDeleteDialog, hideDialog } = useDialog(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const handleDeleteDialog = (selectedSubject: Subject) => {
    showDeleteDialog();
    setSubject(selectedSubject);
  };

  const deleteSubject = async (id?: string) => {
    if (id) {
      try {
        hideDialog();
        toast.success('Successfully Deleted Subject!');
        await deleteDoc(doc(db, 'subjects', id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const updateSubject = (subject: Subject) => {
    showDialog();
    setSubject(subject);
  };

  const subscribeToData = async () => {
    const subjects = collection(db, 'subjects');

    const q = query(subjects, orderBy('createdAt', 'desc'), limit(15));
    const documentSnapshots = await getDocs(q);
    const unsubscribe = onSnapshot(q, (snap) => {
      setSubjects(snap.docs.map((d) => d.data()) as Subject[]);
    });

    const last = documentSnapshots.docs[documentSnapshots.docs.length - 1];

    const next = query(subjects, orderBy('createdAt', 'desc'), startAfter(last), limit(10));

    const nextSnapshot = await getDocs(next);

    const snapshot = await getCountFromServer(subjects);

    setTotalItems(snapshot.data().count);

    return unsubscribe;
  };

  useEffect(() => {
    subscribeToData();
  }, []);

  const columns: Column<Subject>[] = [
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
      key: 'action',
      render: (data) => {
        return (
          <div className="flex items-center justify-center space-x-3">
            <Button onClick={() => updateSubject(data)}>Update</Button>
            <Button
              onClick={() => handleDeleteDialog(data)}
              variant="destructive"
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        data={subjects}
        itemsPerPage={15}
        totalItems={totalItems}
      />

      <Dialog
        open={active}
        hideDialog={hideDialog}
        position="topCenter"
      >
        <div className="space-y-5">
          <h1 className="font-bold text-xl">{`Delete ${subject?.name}?`}</h1>
          <p className="text-lg">{`Are you sure you want to delete ${subject?.name}`}</p>
          <div className="space-y-4">
            <Button
              onClick={() => deleteSubject(subject?.id)}
              className="w-full"
              variant="destructive"
            >
              Yes
            </Button>
            <Button
              onClick={hideDialog}
              className="w-full"
            >
              No
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
