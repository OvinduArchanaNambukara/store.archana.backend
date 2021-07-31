import {IResolvers} from "graphql-tools";
import {FoodModel} from "../../database/model/FoodModel";

export const productResolver: IResolvers = {
  Query: {
    getFoodProducts: async () => {
      const all = await FoodModel.find();
      return all
    }
  }
}
