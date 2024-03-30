import {z} from 'zod';

export const supportFormZodSchema = z.object({
  content: z.string().min(30).max(5000),
  email: z.string().email(),
  phone_number: z.string().optional(),
  title: z.string().min(5).max(100),
  full_name: z.string()
});

export type TSupportForm = z.infer<typeof supportFormZodSchema>;
