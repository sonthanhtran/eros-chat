"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataSource_1 = require("./dataSource");
const start = async () => {
    try {
        await dataSource_1.AppDataSource.initialize();
    }
    catch (error) {
        console.log(error);
    }
};
start();
