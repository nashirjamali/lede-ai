import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3001),
  DATABASE_URL: z.string().min(1),
  REDIS_URL: z.string().min(1),
  JWT_PRIVATE_KEY: z.string().optional(),
  JWT_PUBLIC_KEY: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),
  INTEGRATION_ENCRYPT_KEY: z.string().optional(),
});

export type ApiEnv = z.infer<typeof envSchema>;

export function validateEnv(config: Record<string, unknown>): ApiEnv {
  const result = envSchema.safeParse(config);
  if (!result.success) {
    throw new Error(`Invalid API environment: ${result.error.message}`);
  }
  return result.data;
}
