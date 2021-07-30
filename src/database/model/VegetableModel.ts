import {model} from "mongoose";
import {ProductModel, ProductSchema} from "./ProductModel";

export const VegetableModel = model<ProductModel>("vegitables", ProductSchema);
