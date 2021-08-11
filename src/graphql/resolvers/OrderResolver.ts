import {IResolvers} from "graphql-tools";
import {OrderModel} from "../../database/model/OrderModel";
import {CreateOrderType} from "../types/types";
import {v4 as uuidv4} from 'uuid';

export const orderResolver: IResolvers = {
  Query: {
    getAllPendingOrders: async () => {
      const orders = await OrderModel.find({status: false});
      return orders;
    },
    getAllCompletedOrders: async () => {
      const orders = await OrderModel.find({status: true});
      return orders;
    },
    getUserOrders: async (_, args: { user_id: string }) => {
      const orders = await OrderModel.find({user_id: args.user_id});
      return orders;
    }
  },
  Mutation: {
    setOrderDelivered: async (_, args: { order_id: string }) => {
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
    },
    deleteCompleteOrder: async (_, args: { order_id: string }) => {
      let order = null;
      order = await OrderModel.findOneAndDelete({_id: args.order_id});
      return order;
    },
    createOrder: async (_, args: { order: CreateOrderType }) => {
      let order = null;
      order = await OrderModel.create(
          {
            _id: uuidv4(),
            user_id: args.order.user_id,
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
    }
  }
}
