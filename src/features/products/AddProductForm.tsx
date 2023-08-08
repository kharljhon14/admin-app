import TextField from '@/components/TextField';

export default function AddProductForm() {
  return (
    <form action="">
      <TextField
        label="Product Name"
        name="name"
      />
      <TextField
        label="Product Name"
        name="password"
        type="password"
      />
    </form>
  );
}
