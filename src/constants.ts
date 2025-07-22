import z from "zod";

// zod validation schemas
export const EnvSchema = z.object({
  // Add environment variables here...
  NEXT_PUBLIC_HOST: z.url(),
  DB_HOST: z.url(),
  DB_PORT: z.coerce.number(),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_NAME: z.string(),
});
