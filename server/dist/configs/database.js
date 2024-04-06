"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_var_1 = require("env-var");
const databaseConfig = {
    type: "postgres",
    host: (0, env_var_1.get)("DB_HOST").required().asString(),
    port: (0, env_var_1.get)("DB_PORT").required().asIntPositive(),
    username: (0, env_var_1.get)("DB_USER").required().asString(),
    password: (0, env_var_1.get)("DB_PASSWORD").required().asString(),
    database: (0, env_var_1.get)("DB_DBNAME").required().asString(),
};
exports.default = databaseConfig;
