import z, { type ZodError } from "zod";
import { EnvSchema } from "./utils/validators";

/**
 * Parses and validates environment variables using the Zod schema `EnvSchema`.
 *
 * If validation passes, returns the parsed and typed `env` object.
 * If validation fails, logs a readable error tree and exits the process.
 *
 * @param env - An object conforming to the `Env` type (not actually used here, kept for typing).
 * @returns The validated environment configuration object.
 */
export const createEnv = () => {
  try {
    // Validate process.env against schema
    const env = EnvSchema.parse(process.env);
    return env;
  } catch (error) {
    const zodError = error as ZodError;

    // Print a structured error for easier debugging
    console.error(z.treeifyError(zodError));

    // Exit the application if env is invalid
    process.exit(1);
  }
};
