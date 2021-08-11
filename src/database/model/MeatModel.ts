import {model} from "mongoose";
import {ProductModel, ProductSchema} from "../schemas/ProductSchema";

export const MeatModel = model<ProductModel>("meat", ProductSchema);
