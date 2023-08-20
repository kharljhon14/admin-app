'use client';

import Dialog from '@/components/Dialog';
import SubjectForm from './SubjectForm';
import useDialog from '@/hooks/useDialog';
import Button from '@/components/Button';

export default function Subjects() {
  const { active, showDialog, hideDialog } = useDialog(false);
  return (
    <div>
      <Button onClick={showDialog}>Show form</Button>
      <Dialog
        open={active}
        hideDialog={hideDialog}
        position="topCenter"
        overlayClose={false}
      >
        <h1 className="font-bold text-xl">Add Subject</h1>
        <SubjectForm />
      </Dialog>
    </div>
  );
}
