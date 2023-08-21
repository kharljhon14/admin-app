'use client';

import useDialog from '@/hooks/useDialog';
import Button from '@/components/Button';

import { useState } from 'react';

import { Subject } from '@/types/subject';
import SubjectFormDialog from './SubjectFormDialog';
import SubjectList from './SubjectList';

export default function Subjects() {
  const { active, showDialog, hideDialog } = useDialog(false);

  const [subject, setSubject] = useState<Subject>();

  const handleShowDialog = () => {
    if (subject) setSubject(undefined);
    showDialog();
  };

  const handleSetSubject = (newSubject: Subject | undefined) => {
    setSubject(newSubject);
  };

  return (
    <div>
      <Button onClick={handleShowDialog}>Add Subject</Button>
      <SubjectFormDialog
        active={active}
        hideDialog={hideDialog}
        subject={subject}
      />
      <SubjectList
        setSubject={handleSetSubject}
        showDialog={handleShowDialog}
        subject={subject}
      />
    </div>
  );
}
