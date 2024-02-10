import { z } from 'zod';

const envSchema = z.object({
  APP_URL: z.string().default('http://localhost:3000'),
  INSTAGRAM_TOKEN: z.string().optional().default(''),
  HOURS_REVALIDARE: z.string().default('24').transform(Number),
  NODE_ENV: z.string().default('development'),
  INSTAGRAM_PROFILE: z.string(),
  LINKEDIN_PROFILE: z.string(),
  GITHUB_PROFILE: z.string(),
  TWITTER_PROFILE: z.string(),
  WHATSAPP_NUMBER: z.string(),
  PIX_KEY: z.string(),
  EMAIL: z.string(),
});

export default envSchema.parse(process.env);
