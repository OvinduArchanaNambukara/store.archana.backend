import express, {Application, Request, Response} from "express";
import {connectDatabase} from "../database/connection/connection";
import {v4 as uuidv4} from 'uuid';
import {Electronics, Foods, Fruit, Item, Meat, Pharmacy, Vegetables} from "./temp";
import {VegetableModel} from "../database/model/VegetableModel";
import {ElectronicModel} from "../database/model/ElectronicsModel";
import {FruitsModel} from "../database/model/FruitsModel";
import {PharmacyModel} from "../database/model/PharmacyModel";
import {MeatModel} from "../database/model/MeatModel";
import {FoodModel} from "../database/model/FoodModel";
import {Model} from "mongoose";

const app: Application = express();
app.use(express.json());

interface categoryList {
  categoryArray: Item[],
  model: Model<any>
}


const list: categoryList[] = [
  {
    categoryArray: Electronics,
    model: ElectronicModel
  },
  {
    categoryArray: Vegetables,
    model: VegetableModel
  },
  {
    categoryArray: Fruit,
    model: FruitsModel
  },
  {
    categoryArray: Foods,
    model: FoodModel
  },
  {
    categoryArray: Pharmacy,
    model: PharmacyModel
  },
  {
    categoryArray: Meat,
    model: MeatModel
  }
];

connectDatabase()
    .then(() => {
      app.post('/add/all', async (req: Request, res: Response) => {
        list.map(async (value: categoryList) => {
          for (const item of value.categoryArray) {
            const product = await value.model.create({
              _id: uuidv4(),
              name: item.name,
              old_price: item.oldPrice,
              current_price: item.currentPrice,
              image: item.image,
              key: item.key
            });
            console.log(product);
          }
        });
      });

      app.listen(process.env.PORT, () => {
        console.log(`App is listen at http://localhost/${process.env.PORT}`);
      });
    })
    .catch(() => {
      console.log("error");
    });




