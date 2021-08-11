import {model} from "mongoose";
import {ProductModel, ProductSchema} from "../schemas/ProductSchema";

export const FoodModel = model<ProductModel>("food", ProductSchema);
