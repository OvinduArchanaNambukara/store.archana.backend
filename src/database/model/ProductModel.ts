import {Document, model, Schema, SchemaTypes} from "mongoose";

export interface Product {
  name: string
  image: string
  current_price: number
  old_price: number
}

export interface ProductModel extends Product, Document {
}

export const ProductSchema = new Schema({
  _id: {
    type: SchemaTypes.String,
    required: true
  },
  name: {
    type: SchemaTypes.String,
    required: true
  },
  image: {
    type: SchemaTypes.String,
    required: true
  },
  current_price: {
    type: SchemaTypes.Number,
    required: true
  },
  old_price: {
    type: SchemaTypes.Number,
    required: false
  }
});

export const ProductModel = model<ProductModel>("vegetables", ProductSchema);
