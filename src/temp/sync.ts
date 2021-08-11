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
import {OrderModel} from "../database/model/OrderModel";

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
              key: item.key,
              qty: item.qty
            });
            console.log(product);
          }
        });
      });

      app.post('/add/orders', async (req: Request, res: Response) => {
        for (let i = 0; i < 2; i++) {
          const order = await OrderModel.create({
            _id: uuidv4(),
            user_id: "Ovinas",
            order_list: [
              {
                _id: "dsdsddsdsd",
                name: "sksks",
                unit_price: "10kg",
                qty: "45",
                price: 45000
              }, {
                _id: "dsdsddscssdsd",
                name: "sksks",
                unit_price: "10kg",
                qty: "45",
                price: 12
              },
              {
                _id: "dssasdsddsdsd",
                name: "sksks",
                unit_price: "10kg",
                qty: "45",
                price: 12
              }
            ],
            status: true,
            date: "new Date()",
            discount: 45,
            sub_total: 455,
            shipping: {
              city: "asas",
              country: "kskks",
              address: "asas",
              instructions: "asasas",
              postal_code: 555,
              full_name: 'kaskak',
              tel: "454845"
            },
            delivery: {
              full_name: "aksaas",
              country: "asas",
              city: "asas",
              postal_code: 1545,
              address: "asasasas",
              email: "jsh@gna",
              tel: "544445"
            }
          });
          console.log(order)
        }
      });

      app.listen(process.env.PORT, () => {
        console.log(`App is listen at http://localhost/${process.env.PORT}`);
      });
    })
    .catch(() => {
      console.log("error");
    });




