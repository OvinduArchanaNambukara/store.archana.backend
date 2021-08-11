import {IResolvers} from "graphql-tools";
import {OrderModel} from "../../database/model/OrderModel";

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
  }
}
