import {model} from "mongoose";
import {ProductModel, ProductSchema} from "../schemas/ProductSchema";

export const FruitsModel = model<ProductModel>("fruits", ProductSchema);
