"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const server_1 = __importDefault(require("./configs/server"));
const dataSource_1 = require("./dataSource");
const fastify_1 = __importDefault(require("fastify"));
const userRoutesV1_1 = __importDefault(require("./components/user/routes/userRoutesV1"));
const server = (0, fastify_1.default)({
    logger: true,
}).withTypeProvider();
// Register routes
server.register(userRoutesV1_1.default, { prefix: "/v1/user" });
// Start server
const start = async () => {
    try {
        await dataSource_1.AppDataSource.initialize();
        server.listen({ port: server_1.default.port, host: server_1.default.host }, (err, address) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log(`Server listening at ${address}`);
        });
        console.log(Date);
    }
    catch (error) {
        console.log(error);
    }
};
start();
