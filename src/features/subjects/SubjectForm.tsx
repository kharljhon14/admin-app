'use client';

import Button from '@/components/Button';
import TextArea from '@/components/TextArea';
import TextField from '@/components/TextField';
import { SubjectSchema, SubjectSchemaType } from '@/schemas/subject';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/services/firebase';
import { useId } from 'react';

export default function SubjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubjectSchemaType>({ resolver: zodResolver(SubjectSchema) });

  const submitForm: SubmitHandler<SubjectSchemaType> = async (data) => {
    const id = crypto.randomUUID();

    try {
      await setDoc(doc(db, 'subjects', id), { name: data.name, description: data.description });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="space-y-4"
      autoComplete="off"
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
