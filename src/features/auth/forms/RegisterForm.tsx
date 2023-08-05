'use client';

import Button from '@/components/Button';
import TextField from '@/components/TextField';

export default function RegisterForm() {
  return (
    <form
      action=""
      className="space-y-4"
    >
      <TextField
        name="first_name"
        placeholder="Name *"
      />

      <TextField
        name="email"
        placeholder="Email *"
      />

      <TextField
        name="password"
        placeholder="Password *"
        type="password"
      />

      <TextField
        name="confirm-password"
        placeholder="Confirm Password *"
        type="password"
      />

      <Button className="uppercase w-full">Submit</Button>
    </form>
  );
}
