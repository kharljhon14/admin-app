import { z } from 'zod';

export const LoginSchema = z
  .object({
    email: z.string({ required_error: 'Email is missing' }).email('Please Input a valid email'),
    password: z
      .string({ required_error: 'Password is missing' })
      .nonempty('Please input your password'),
  })
  .required();

export type LoginSchemaType = z.infer<typeof LoginSchema>;
