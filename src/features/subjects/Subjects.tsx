'use client';

import useDialog from '@/hooks/useDialog';
import Button from '@/components/Button';

import { useState } from 'react';

import { Subject } from '@/types/subject';
import SubjectFormDialog from './SubjectFormDialog';
import SubjectList from './SubjectList';
import TextField from '@/components/TextField';

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
      <div className="space-y-5">
        <div className="flex justify-between ">
          <div className="flex items-end space-x-2">
            <TextField
              name="search"
              className="w-96"
              placeholder="Search"
            />
            <Button>Search</Button>
          </div>

          <Button onClick={handleShowDialog}>Add Subject</Button>
        </div>

        <SubjectList
          setSubject={handleSetSubject}
          showDialog={handleShowDialog}
          subject={subject}
        />
      </div>

      <SubjectFormDialog
        active={active}
        hideDialog={hideDialog}
        subject={subject}
      />
    </div>
  );
}
