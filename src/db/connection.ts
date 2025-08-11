import { createEnv } from "@/env";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const env = createEnv();

const pool = new Pool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  ssl: false,
});

const db = drizzle({
  client: pool,
  logger: true,
});

export default db;
