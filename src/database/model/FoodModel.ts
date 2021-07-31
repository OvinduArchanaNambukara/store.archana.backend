import {model} from "mongoose";
import {ProductModel, ProductSchema} from "./ProductModel";

export const FoodModel = model<ProductModel>("food", ProductSchema);
