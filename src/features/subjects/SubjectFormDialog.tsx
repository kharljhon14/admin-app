import Dialog from '@/components/Dialog';
import SubjectForm from './SubjectForm';
import { Subject } from '@/types/subject';

interface Props {
  active: boolean;
  hideDialog: () => void;
  subject?: Subject;
}

export default function SubjectFormDialog({ active, hideDialog, subject }: Props) {
  return (
    <Dialog
      open={active}
      hideDialog={hideDialog}
      position="topCenter"
    >
      <h1 className="font-bold text-xl">{`${subject ? 'Update Subject' : 'Add Subject'}`}</h1>
      <SubjectForm
        hideDialog={hideDialog}
        subject={subject}
      />
    </Dialog>
  );
}
