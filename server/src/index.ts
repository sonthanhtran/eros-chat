import "dotenv/config";
import serverConfig from "./configs/server";

import { AppDataSource } from "./dataSource";

import fastify from "fastify";
import userRoutes from "./components/user/routes/userRoutesV1";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

const server = fastify({
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

// Register routes
server.register(userRoutes, { prefix: "/v1/user" });

// Start server
const start = async () => {
  try {
    await AppDataSource.initialize();

    server.listen(
      { port: serverConfig.port, host: serverConfig.host },
      (err, address) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        console.log(`Server listening at ${address}`);
      },
    );

    console.log(Date);

  } catch (error) {
    console.log(error);
  }
};

start();
