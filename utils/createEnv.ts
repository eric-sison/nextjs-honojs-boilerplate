import z, { type ZodError } from "zod";
import { EnvSchema } from "../shared/validators/env";

export const createEnv = () => {
  try {
    // Validate process.env against schema
    return EnvSchema.parse(process.env);
  } catch (error) {
    const zodError = error as ZodError;

    // Print a structured error for easier debugging
    console.error(z.treeifyError(zodError));

    // Exit the application if env is invalid
    process.exit(1);
  }
};
