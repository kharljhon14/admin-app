import { z } from 'zod';

export const RegisterSchema = z
  .object({
    name: z.string().nonempty('Please input your name'),
    email: z.string({ required_error: 'Email is missing' }).email('Please input a valid email'),
    password: z
      .string({ required_error: 'Password is missing' })
      .nonempty('Please input your password'),
    'confirm-password': z.string().nonempty('Please input your password'),
  })
  .refine((data) => data['password'] === data['confirm-password'], {
    message: 'Passwords do not match',
    path: ['confirm-password'],
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
