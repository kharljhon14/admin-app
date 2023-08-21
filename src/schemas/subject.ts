import { z } from 'zod';

export const SubjectSchema = z.object({
  name: z.string().nonempty('Please input name'),
  description: z
    .string()
    .nonempty('Please input description')
    .min(10, { message: 'Must be atleast 10 characters' }),
});

export type SubjectSchemaType = z.infer<typeof SubjectSchema>;
