'use client';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Select, { SelectValueType } from '@/components/Select';
import TextArea from '@/components/TextArea';
import TextField from '@/components/TextField';

const testOptions: SelectValueType[] = [
  {
    label: 'Option 1',
    value: 'O1',
  },
  {
    label: 'Option 2',
    value: 'O1',
  },
  {
    label: 'Option 3',
    value: 'O1',
  },
];

export default function AddUserForm() {
  return (
    <form action="">
      <TextField
        label="Product Name"
        name="name"
      />
      <TextArea
        label="Product Description"
        name="description"
      />
      <Checkbox
        name="sale"
        label="On sale"
      />

      <Button>Add Product</Button>
    </form>
  );
}
