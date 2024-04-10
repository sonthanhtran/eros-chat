import { DataSource } from "typeorm";
import databaseConfig from "./configs/database";
import { User } from "./components/user/database/user";

export const AppDataSource = new DataSource({
  type: databaseConfig.type,
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
