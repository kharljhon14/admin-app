'use client';

import Button from '@/components/Button';
import TextArea from '@/components/TextArea';
import TextField from '@/components/TextField';
import { SubjectSchema, SubjectSchemaType } from '@/schemas/subject';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function SubjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubjectSchemaType>({ resolver: zodResolver(SubjectSchema) });

  const submitForm: SubmitHandler<SubjectSchemaType> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="space-y-4"
    >
      <TextField
        label="Name"
        placeholder="Subject"
        name="name"
        register={register}
        errorMessage={errors.name?.message}
      />
      <TextArea
        label="Description"
        name="description"
        register={register}
        errorMessage={errors.description?.message}
      />
      <Button className="w-full">Add Subject</Button>
    </form>
  );
}
