import { drizzle } from "drizzle-orm/node-postgres";

import pg from "pg";

const { Client } = pg;

import * as schema from "./schema.js";

const client = new Client({
  host: "127.0.0.1",

  port: 5432,

  user: "nodejs_course_admin",

  password: "my_password",

  database: "nodejs_course_database",
});

await client.connect();

export const db = drizzle(client, { schema });
