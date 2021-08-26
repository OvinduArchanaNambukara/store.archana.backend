import {IResolvers} from "graphql-tools";
import {OrderModel} from "../../database/model/OrderModel";
import {CreateOrderType} from "../types/types";
import {v4 as uuidv4} from 'uuid';
import {ForbiddenError} from "apollo-server-express";

export const orderResolver: IResolvers = {
  Query: {
    getAllPendingOrders: async (_, args: {}, context: { admin: boolean }) => {
      if (context.admin) {
        const orders = await OrderModel.find({status: false});
        return orders;
      } else {
        throw new ForbiddenError("No access, Only admin");
      }
    },
    getAllCompletedOrders: async (_, args: {}, context: { admin: boolean }) => {
      if (context.admin) {
        const orders = await OrderModel.find({status: true});
        return orders;
      } else {
        throw new ForbiddenError("No access, Only admin");
      }
    },
    getUserPendingOrders: async (_, args: {}, context: { user_id: string }) => {
      if (context.user_id) {
        const orders = await OrderModel.find({user_id: context.user_id, status: false});
        return orders;
      }
      throw new ForbiddenError("No access");
    },
    getUserCompletedOrders: async (_, args: {}, context: { user_id: string }) => {
      if (context.user_id) {
        const orders = await OrderModel.find({user_id: context.user_id, status: true});
        return orders;
      }
      throw new ForbiddenError("No access");
    }
  },
  Mutation: {
    setOrderDelivered: async (_, args: { order_id: string }, context: { admin: boolean }) => {
      if (context.admin) {
        let order = null;
        order = await OrderModel.findOneAndUpdate(
            {
              _id: args.order_id
            },
            {
              status: true
            },
            {
              new: true
            });
        return order;
      } else {
        throw new ForbiddenError("No access, only Admin");
      }
    },
    deleteCompleteOrder: async (_, args: { order_id: string }, context: { user_id: string }) => {
      if (context.user_id) {
        let order = null;
        order = await OrderModel.findOneAndDelete({_id: args.order_id});
        return order;
      } else {
        throw new ForbiddenError("No access");
      }
    },
    createOrder: async (_, args: { order: CreateOrderType }, context: { user_id: string }) => {
      if (context.user_id) {
        let order = null;
        order = await OrderModel.create(
            {
              _id: uuidv4(),
              user_id: context.user_id,
              date: new Date().toString(),
              discount: args.order.discount,
              sub_total: args.order.sub_total,
              payment_method: args.order.payment_method,
              status: false,
              order_list: args.order.order_list,
              delivery: args.order.delivery,
              shipping: args.order.shipping
            }
        );
        return order;
      } else {
        throw new ForbiddenError("No access");
      }
    }
  }
}
