'use client';

import Button from '@/components/Button';
import TextArea from '@/components/TextArea';
import TextField from '@/components/TextField';
import { SubjectSchema, SubjectSchemaType } from '@/schemas/subject';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/services/firebase';
import { toast } from 'react-toastify';
import { Subject } from '@/types/subject';
import { useEffect } from 'react';

interface Props {
  hideDialog: () => void;
  subject?: Subject;
}

export default function SubjectForm({ hideDialog, subject }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubjectSchemaType>({ resolver: zodResolver(SubjectSchema) });

  const handleAddSubject = async (data: SubjectSchemaType) => {
    const id = crypto.randomUUID();
    const now = Date.now();
    try {
      toast.success('Successfully Added Subject!');
      hideDialog();
      await setDoc(doc(db, 'subjects', id), {
        name: data.name,
        description: data.description,
        createdAt: now,
        modifiedAt: now,
        id,
      });
    } catch (err) {
      toast.error('Something went wrong try again later!');
    }
  };

  const handleUpdateSubject = async (data: SubjectSchemaType) => {
    const now = Date.now();
    if (subject) {
      try {
        toast.success('Successfully Updated Subject!');
        hideDialog();
        await setDoc(doc(db, 'subjects', subject.id), {
          ...subject,
          name: data.name,
          description: data.description,
          modifiedAt: now,
        });
      } catch (err) {
        toast.error('Something went wrong try again later!');
      }
    }
  };

  const submitForm: SubmitHandler<SubjectSchemaType> = async (data) => {
    if (subject) {
      handleUpdateSubject(data);
    } else {
      handleAddSubject(data);
    }
  };

  useEffect(() => {
    if (subject) reset(subject);
  }, [reset, subject]);

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
        rows={10}
      />
      <Button className="w-full">{`${subject ? 'Update Subject' : 'Add Subject'}`}</Button>
    </form>
  );
}
