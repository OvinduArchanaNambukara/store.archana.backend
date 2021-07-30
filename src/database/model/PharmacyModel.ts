import {model} from "mongoose";
import {ProductModel, ProductSchema} from "./ProductModel";

export const PharmacyModel = model<ProductModel>("pharmacy", ProductSchema);
