import { UserType } from "./schemas/userSchema";
import userRepository from "./userRepository";

export const getAllUser = async () => {
  userRepository.find();
}

export const createUser = async (body: UserType) => {
  const newUser = userRepository.create({
    username: body.username,
    password: body.password,
    firstName: body.firstName,
    lastName: body.lastName,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  await userRepository.save(newUser);
  return body;
};
