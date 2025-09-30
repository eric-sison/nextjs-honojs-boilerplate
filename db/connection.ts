import { createEnv } from "../helpers/createEnv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const env = createEnv();

const pool = new Pool({
  //* In production, set the database hostname to the service name defined in docker-compose.yaml
  host: process.env.NODE_ENV === "production" ? "db" : env.DB_HOST,

  //* In production, use the default Postgres port (5432) as the service hostname already maps to the container, not the forwarded port.
  port: process.env.NODE_ENV === "production" ? 5432 : env.DB_PORT,
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
