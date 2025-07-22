import z from "zod";
import { EnvSchema } from "./constants";

export type Env = z.infer<typeof EnvSchema>;
