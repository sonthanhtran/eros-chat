import { AppDataSource } from "../../dataSource";
import { User } from "./database/user";

const userRepository = AppDataSource.getRepository(User);

export default userRepository;
