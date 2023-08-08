'use client';

import Button from '@/components/Button';
import TextField from '@/components/TextField';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginSchemaType } from '@/schemas/login';
import InlineAlert from '@/components/InlineAlert';
import Link from 'next/link';
import { routes } from '@/routes';

interface Props {
  handleEmailLogin: (email: string, password: string) => Promise<void>;
  loading: boolean;
  error?: string;
}

export default function LoginForm({ handleEmailLogin, loading, error }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    handleEmailLogin(data.email, data.password);
  };

  return (
    <div className="space-y-6">
      {error && (
        <InlineAlert
          title="Something went wrong!"
          variant="destructive"
          size="full"
        >
          {error}
        </InlineAlert>
      )}

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
          disabled={loading}
        />

        <TextField
          name="password"
          placeholder="Password"
          type="password"
          register={register}
          errorMessage={errors.password?.message}
          disabled={loading}
        />

        <div className="text-sm">
          <Link
            className="text-blue-500 hover:underline"
            href={routes.REGISTER}
          >
            Need an account?
          </Link>
        </div>

        <Button
          loading={loading}
          disabled={loading}
          className="uppercase w-full"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
