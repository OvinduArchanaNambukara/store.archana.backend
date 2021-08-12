import {IResolvers} from "graphql-tools";
import {UserModel} from "../../database/model/UsersModel";
import {v4 as uuidv4} from 'uuid';
import jwt from "jsonwebtoken";
import {AuthenticationError} from "apollo-server-express";
import {AdminModel} from "../../database/model/AdminModel";

export const userResolver: IResolvers = {
  Mutation: {
    signIn: async (_, args: { email: string, password: string }, context: { user_id: string }) => {
      const findUser = await UserModel.findOne({email: args.email});
      const findAdmin = await AdminModel.findOne({email: args.email});
      if (findUser) {
        if (findUser.password === args.password) {
          return jwt.sign({user_id: findUser._id, admin: false}, 'shhhhh',);
        }
        throw new AuthenticationError("sign in failed");
      } else {
        if (findAdmin) {
          if (findAdmin.password === args.password) {
            return jwt.sign({user_id: findAdmin._id, admin: true}, `${process.env.JWT_SECRET_ID}`, {
              expiresIn: '12h'
            });
          }
          throw new AuthenticationError("sign in failed");
        } else {
          throw new AuthenticationError("sign in failed");
        }
      }
    },
    signUp: async (_, args: { email: string, password: string, first_name: string, last_name: string }) => {
      const user = await UserModel.create(
          {
            _id: uuidv4(),
            email: args.email,
            first_name: args.first_name,
            last_name: args.last_name,
            password: args.password
          }
      );
      return jwt.sign({user_id: user._id, isAdmin: false}, `${process.env.JWT_SECRET_ID}`, {
        expiresIn: '12h'
      });
    }
  }
}
