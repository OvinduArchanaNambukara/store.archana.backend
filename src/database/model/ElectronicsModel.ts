import {model} from "mongoose";
import {ProductModel, ProductSchema} from "./ProductModel";

export const ElectronicModel = model<ProductModel>("electronics", ProductSchema);
