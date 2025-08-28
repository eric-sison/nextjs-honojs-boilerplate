import z from "zod";

// zod validation schemas
export const EnvSchema = z.object({
  // Add environment variables here...
  APP_HOST: z.url(),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_NAME: z.string(),
});

export type Env = z.infer<typeof EnvSchema>;
