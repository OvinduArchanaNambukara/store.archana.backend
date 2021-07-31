import express, {Application, Request, Response} from "express";
import {connectDatabase} from "../database/connection/connection";
import {v4 as uuidv4} from 'uuid';
import {Electronics, Foods, Fruit, Meat, Pharmacy, Vegetables} from "./temp";
import {VegetableModel} from "../database/model/VegetableModel";
import {ElectronicModel} from "../database/model/ElectronicsModel";
import {FruitsModel} from "../database/model/FruitsModel";
import {PharmacyModel} from "../database/model/PharmacyModel";
import {MeatModel} from "../database/model/MeatModel";
import {FoodModel} from "../database/model/FoodModel";

const app: Application = express();
app.use(express.json());

connectDatabase()
    .then(() => {

      app.post('/add/vegetables', async (req: Request, res: Response) => {
        for (const item of Vegetables) {
          const product = await VegetableModel.create({
            _id: uuidv4(),
            name: item.name,
            old_price: item.oldPrice,
            current_price: item.currentPrice,
            image: item.image
          });
          console.log(product);
        }
      });

      app.post('/add/electronics', async (req: Request, res: Response) => {
        for (const item of Electronics) {
          const product = await ElectronicModel.create({
            _id: uuidv4(),
            name: item.name,
            old_price: item.oldPrice,
            current_price: item.currentPrice,
            image: item.image
          });
          console.log(product);
        }
      });

      app.post('/add/meat', async (req: Request, res: Response) => {
        for (const item of Meat) {
          const product = await MeatModel.create({
            _id: uuidv4(),
            name: item.name,
            old_price: item.oldPrice,
            current_price: item.currentPrice,
            image: item.image
          });
          console.log(product);
        }
      });

      app.post('/add/fruits', async (req: Request, res: Response) => {
        for (const item of Fruit) {
          const product = await FruitsModel.create({
            _id: uuidv4(),
            name: item.name,
            old_price: item.oldPrice,
            current_price: item.currentPrice,
            image: item.image
          });
          console.log(product);
        }
      });

      app.post('/add/pharmacy', async (req: Request, res: Response) => {
        for (const item of Pharmacy) {
          const product = await PharmacyModel.create({
            _id: uuidv4(),
            name: item.name,
            old_price: item.oldPrice,
            current_price: item.currentPrice,
            image: item.image
          });
          console.log(product);
        }
      });

      app.post('/add/food', async (req: Request, res: Response) => {
        for (const item of Foods) {
          const product = await FoodModel.create({
            _id: uuidv4(),
            name: item.name,
            old_price: item.oldPrice,
            current_price: item.currentPrice,
            image: item.image
          });
          console.log(product);
        }
      });

      app.post('/add/all', async (req: Request, res: Response) => {
        for (const item of Vegetables) {
          const product = await VegetableModel.create({
            _id: uuidv4(),
            name: item.name,
            old_price: item.oldPrice,
            current_price: item.currentPrice,
            image: item.image
          });
          console.log(product);
        }
        for (const item of Electronics) {
          const product = await ElectronicModel.create({
            _id: uuidv4(),
            name: item.name,
            old_price: item.oldPrice,
            current_price: item.currentPrice,
            image: item.image
          });
          console.log(product);
        }
        for (const item of Meat) {
          const product = await MeatModel.create({
            _id: uuidv4(),
            name: item.name,
            old_price: item.oldPrice,
            current_price: item.currentPrice,
            image: item.image
          });
          console.log(product);
        }
        for (const item of Fruit) {
          const product = await FruitsModel.create({
            _id: uuidv4(),
            name: item.name,
            old_price: item.oldPrice,
            current_price: item.currentPrice,
            image: item.image
          });
          console.log(product);
        }
        for (const item of Pharmacy) {
          const product = await PharmacyModel.create({
            _id: uuidv4(),
            name: item.name,
            old_price: item.oldPrice,
            current_price: item.currentPrice,
            image: item.image
          });
          console.log(product);
        }
        for (const item of Foods) {
          const product = await FoodModel.create({
            _id: uuidv4(),
            name: item.name,
            old_price: item.oldPrice,
            current_price: item.currentPrice,
            image: item.image
          });
          console.log(product);
        }
      });

      app.listen(process.env.PORT, () => {
        console.log(`App is listen at http://localhost/${process.env.PORT}`);
      });
    })
    .catch(() => {
      console.log("error");
    });




