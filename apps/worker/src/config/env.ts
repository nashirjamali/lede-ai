import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string().min(1),
  REDIS_URL: z.string().min(1),
  AWS_REGION: z.string().optional(),
  AWS_ACCESS_KEY_ID: z.string().optional(),
  AWS_SECRET_ACCESS_KEY: z.string().optional(),
  AWS_SES_FROM_ADDRESS: z.string().optional(),
  INTEGRATION_ENCRYPT_KEY: z.string().optional(),
});

export type WorkerEnv = z.infer<typeof envSchema>;

export function validateEnv(config: Record<string, unknown>): WorkerEnv {
  const result = envSchema.safeParse(config);
  if (!result.success) {
    throw new Error(`Invalid worker environment: ${result.error.message}`);
  }
  return result.data;
}
