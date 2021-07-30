import {model} from "mongoose";
import {ProductModel, ProductSchema} from "./ProductModel";

export const FruitsModel = model<ProductModel>("fruits", ProductSchema);
