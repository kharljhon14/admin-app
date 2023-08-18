import Button from '@/components/Button';
import TextArea from '@/components/TextArea';
import TextField from '@/components/TextField';

export default function AddSubjectForm() {
  return (
    <form className="space-y-4">
      <TextField
        label="Name"
        placeholder="Subject"
        name="name"
      />
      <TextArea
        label="Description"
        name="description"
      />
      <Button className="w-full">Add Subject</Button>
    </form>
  );
}
