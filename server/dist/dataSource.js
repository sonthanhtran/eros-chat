"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const database_1 = __importDefault(require("./configs/database"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: database_1.default.type,
    host: database_1.default.host,
    port: database_1.default.port,
    username: database_1.default.username,
    password: database_1.default.password,
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
});
