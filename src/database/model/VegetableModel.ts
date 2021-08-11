import {model} from "mongoose";
import {ProductModel, ProductSchema} from "../schemas/ProductSchema";

export const VegetableModel = model<ProductModel>("vegetables", ProductSchema);
