import { EnvSchema } from "@/utils/validators";
import z from "zod";

export type Env = z.infer<typeof EnvSchema>;
