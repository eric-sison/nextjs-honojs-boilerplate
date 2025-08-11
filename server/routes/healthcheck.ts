import { Hono } from "hono";

export const healthcheckHandler = new Hono().get("/healthcheck", async (c) => {
  return c.json({ status: "ok" });
});
