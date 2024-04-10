import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { UserSchema, UserType } from "../schemas/userSchema";
import userRepository from "../userRepository";
import { Type } from "@sinclair/typebox";
import { createUser } from "../userService";

const userRoutes: FastifyPluginAsync = async function(
  fastify: FastifyInstance,
  _opts,
) {
  fastify.route({
    method: "GET",
    url: "/",
    schema: {
      response: {
        '200': Type.Array(
          UserSchema
        )
      },
    },
    handler: async (request, response) => {
      return userRepository.find();
    },
  });

  fastify.route<{ Body: UserType, Reply: UserType }>({
    method: "POST",
    url: "/",
    schema: {
      response: {
        '200': UserSchema
      },
      body: UserSchema
    },
    handler: async (request, response) => {
      console.log(request.body);
      return createUser(request.body);
    },
  });
};

export default userRoutes;
