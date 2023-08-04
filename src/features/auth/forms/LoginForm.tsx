'use client';

import Button from '@/components/Button';
import TextField from '@/components/TextField';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginSchemaType } from '@/schemas/login';

interface Props {
  handleEmailLogin: (email: string, password: string) => Promise<void>;
}

export default function LoginForm({ handleEmailLogin }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    handleEmailLogin(data.email, data.password);
  };

  return (
    <div>
      <form
        className="space-y-4"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          name="email"
          placeholder="Email"
          register={register}
          errorMessage={errors.email?.message}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          register={register}
          errorMessage={errors.password?.message}
        />
        <Button className="uppercase w-full">Login</Button>
      </form>
    </div>
  );
}
