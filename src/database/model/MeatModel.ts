import {model} from "mongoose";
import {ProductModel, ProductSchema} from "./ProductModel";

export const MeatModel = model<ProductModel>("meat", ProductSchema);
