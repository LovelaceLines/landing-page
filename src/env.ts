import { z } from 'zod';

const envSchema = z.object({
  INSTAGRAM_TOKEN: z.string().optional().default(''),
  HOURS_REVALIDARE: z.string().default('24').transform(Number),
  NODE_ENV: z.string().default('development'),
});

export default envSchema.parse(process.env);
