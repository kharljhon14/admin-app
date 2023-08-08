'use client';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import TextArea from '@/components/TextArea';
import TextField from '@/components/TextField';

export default function AddProductForm() {
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
