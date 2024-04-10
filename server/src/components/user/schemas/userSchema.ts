import { Static, Type } from "@sinclair/typebox";

export const UserSchema = Type.Object({
  username: Type.String(),
  password: Type.String(),
  firstName: Type.String(),
  lastName: Type.String(),
});

export type UserType = Static<typeof UserSchema>
