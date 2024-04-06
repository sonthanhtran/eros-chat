import { get } from "env-var";

const databaseConfig = {
  type: "postgres" as const,
  host: get("DB_HOST").required().asString(),
  port: get("DB_PORT").required().asIntPositive(),
  username: get("DB_USER").required().asString(),
  password: get("DB_PASSWORD").required().asString(),
  database: get("DB_DBNAME").required().asString(),
};

export default databaseConfig;
