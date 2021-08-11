import {model} from "mongoose";
import {ProductModel, ProductSchema} from "../schemas/ProductSchema";

export const PharmacyModel = model<ProductModel>("pharmacy", ProductSchema);
