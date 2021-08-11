import {Document, model} from "mongoose";
import {UsersSchema} from "../schemas/UserSchema";

export interface User {
  first_name: string
  last_name: string
  email: string
  password: string
}

export interface UserModel extends User, Document {
}


export const UserModel = model<UserModel>("users", UsersSchema);
