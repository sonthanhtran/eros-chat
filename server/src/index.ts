import { AppDataSource } from "./dataSource";

const start = async () => {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.log(error);
  }
}

start()
