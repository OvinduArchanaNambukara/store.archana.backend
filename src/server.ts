import express, {Application, Request, Response, NextFunction} from "express";
import {FruitList} from "./temp";

const app: Application = express();
const port = 3000;

app.post('/fruit', (req: Request, res: Response) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`App is listen at http:localhost:${port}`);
});



