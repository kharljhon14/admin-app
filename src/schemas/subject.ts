import { z } from 'zod';

export const SubjectSchema = z.object({
  name: z.string().nonempty('Please input subject name'),
  description: z
    .string()
    .nonempty('Please input description')
    .min(20, { message: 'Must be atleast 20 characters' }),
});

export type SubjectSchemaType = z.infer<typeof SubjectSchema>;
