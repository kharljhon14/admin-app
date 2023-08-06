'use client';

import Button from '@/components/Button';
import TextField from '@/components/TextField';
import { RegisterSchema, RegisterSchemaType } from '@/schemas/register';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <TextField
        name="name"
        placeholder="Name *"
        register={register}
        errorMessage={errors.name?.message}
      />

      <TextField
        name="email"
        placeholder="Email *"
        register={register}
        errorMessage={errors.email?.message}
      />

      <TextField
        name="password"
        placeholder="Password *"
        type="password"
        register={register}
        errorMessage={errors.password?.message}
      />

      <TextField
        name="confirm-password"
        placeholder="Confirm Password *"
        type="password"
        register={register}
        errorMessage={errors['confirm-password']?.message}
      />

      <Button className="uppercase w-full">Submit</Button>
    </form>
  );
}
