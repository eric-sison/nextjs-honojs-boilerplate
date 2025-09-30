import { defineConfig } from "drizzle-kit";
import { createEnv } from "./helpers/createEnv";

const env = createEnv();

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schemas/*.ts",
  out: "./db/migrations",
  dbCredentials: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    ssl: false,
  },
});
