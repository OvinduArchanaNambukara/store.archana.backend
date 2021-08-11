import {model} from "mongoose";
import {ProductModel, ProductSchema} from "../schemas/ProductSchema";

export const ElectronicModel = model<ProductModel>("electronics", ProductSchema);
