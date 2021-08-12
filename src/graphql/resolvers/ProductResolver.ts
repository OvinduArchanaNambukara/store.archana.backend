import {IResolvers} from "graphql-tools";
import {FoodModel} from "../../database/model/FoodModel";
import {VegetableModel} from "../../database/model/VegetableModel";
import {PharmacyModel} from "../../database/model/PharmacyModel";
import {MeatModel} from "../../database/model/MeatModel";
import {ElectronicModel} from "../../database/model/ElectronicsModel";
import {FruitsModel} from "../../database/model/FruitsModel";
import {v4 as uuidv4} from 'uuid';
import {ELECTRONICS, FOOD, FRUITS, MEAT, PHARMACY, VEGETABLES} from "../constants/constants";
import {ProductType} from "../types/types";
import {ForbiddenError} from "apollo-server-express";

export const productResolver: IResolvers = {
  Query: {
    getFoodProducts: async () => {
      const foods = await FoodModel.find();
      return {
        category_name: "Food", products: foods
      };
    },
    getVegetableProducts: async () => {
      const vegetables = await VegetableModel.find();
      return {
        category_name: "Vegetables", products: vegetables
      };
    },
    getPharmacyProducts: async () => {
      const pharmacy = await PharmacyModel.find();
      return {
        category_name: "Pharmacy", products: pharmacy
      };
    },
    getMeatProducts: async () => {
      const meat = await MeatModel.find();
      return {
        category_name: "Meat", products: meat
      };
    },
    getElectronicProducts: async () => {
      const electronics = await ElectronicModel.find();
      return {
        category_name: "Electronics", products: electronics
      };
    },
    getFruitProducts: async () => {
      const fruit = await FruitsModel.find();
      return {
        category_name: "Fruits", products: fruit
      };
    },
  },

  Mutation: {
    addProduct: async (_,
                       args: {
                         name: string,
                         image: string,
                         current_price: number,
                         old_price: number | null,
                         key: string,
                         qty: string,
                         category: string
                       },
                       context: {
                         admin: boolean
                       }) => {
      if (context.admin) {
        let product = null;
        const item: ProductType = {
          _id: uuidv4(),
          name: args.name,
          key: args.key,
          image: args.image,
          old_price: (args.old_price) ? args.old_price : null,
          current_price: args.current_price,
          qty: args.qty
        }

        switch (args.category) {
          case VEGETABLES: {
            product = await VegetableModel.create(item);
            break;
          }
          case FRUITS: {
            product = await FruitsModel.create(item);
            break;
          }
          case MEAT: {
            product = await MeatModel.create(item);
            break;
          }
          case PHARMACY: {
            product = await PharmacyModel.create(item);
            break;
          }
          case ELECTRONICS: {
            product = await ElectronicModel.create(item);
            break;
          }
          case FOOD: {
            product = await FoodModel.create(item);
            break;
          }
          default: {
            break;
          }
        }
        return product;
      } else {
        throw new ForbiddenError("No access, Admin only");
      }
    },
    updateProduct: async (_,
                          args: {
                            id: string
                            name: string,
                            image: string,
                            current_price: number,
                            old_price: number | null,
                            key: string,
                            qty: string,
                            category: string
                          },
                          context: {
                            admin: boolean
                          }) => {
      if (context.admin) {
        let product = null;
        const item = {
          name: args.name,
          key: args.key,
          image: args.image,
          old_price: (args.old_price) ? args.old_price : undefined,
          current_price: args.current_price,
          qty: args.qty
        }
        const options = {
          new: true
        }

        switch (args.category) {
          case VEGETABLES: {
            product = await VegetableModel.findOneAndUpdate({_id: args.id}, item, options);
            break;
          }
          case FRUITS: {
            product = await FruitsModel.findOneAndUpdate({_id: args.id}, item, options);
            break;
          }
          case MEAT: {
            product = await MeatModel.findOneAndUpdate({_id: args.id}, item, options);
            break;
          }
          case PHARMACY: {
            product = await PharmacyModel.findOneAndUpdate({_id: args.id}, item, options);
            break;
          }
          case ELECTRONICS: {
            product = await ElectronicModel.findOneAndUpdate({_id: args.id}, item, options);
            break;
          }
          case FOOD: {
            product = await FoodModel.findOneAndUpdate({_id: args.id}, item, options);
            break;
          }
          default: {
            break;
          }
        }
        return product;
      } else {
        throw new ForbiddenError("No access, Admin only")
            ;
      }
    },
    deleteProduct: async (_,
                          args: {
                            id: string,
                            category: string
                          },
                          context: {
                            admin: boolean
                          }) => {
      if (context.admin) {
        let product = null
        switch (args.category) {
          case VEGETABLES: {
            product = await VegetableModel.findOneAndDelete({_id: args.id});
            break;
          }
          case FRUITS: {
            product = await FruitsModel.findOneAndDelete({_id: args.id});
            break;
          }
          case MEAT: {
            product = await MeatModel.findOneAndDelete({_id: args.id});
            break;
          }
          case PHARMACY: {
            product = await PharmacyModel.findOneAndDelete({_id: args.id});
            break;
          }
          case ELECTRONICS: {
            product = await ElectronicModel.findOneAndDelete({_id: args.id});
            break;
          }
          case FOOD: {
            product = await FoodModel.findOneAndDelete({_id: args.id});
            break;
          }
          default: {
            break;
          }
        }
        return product;
      } else {
        throw new ForbiddenError("No access, Admin only");
      }
    }
  }
}
