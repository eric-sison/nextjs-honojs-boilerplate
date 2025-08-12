import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./server/db/schemas/*.ts",
  out: "./server/db/migrations",
  dbCredentials: {
    host: "localhost",
    port: 5432,
    user: "admin",
    password: "my_password",
    database: "authn",
    ssl: false,
  },
});
