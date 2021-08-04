import {IResolvers} from "graphql-tools";
import {FoodModel} from "../../database/model/FoodModel";
import {VegetableModel} from "../../database/model/VegetableModel";
import {PharmacyModel} from "../../database/model/PharmacyModel";
import {MeatModel} from "../../database/model/MeatModel";
import {ElectronicModel} from "../../database/model/ElectronicsModel";
import {FruitsModel} from "../../database/model/FruitsModel";

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
  }
}
