import {Schema, SchemaTypes} from "mongoose";

export const OrderItemSchema = new Schema({
  _id: {
    type: SchemaTypes.String,
    required: true
  },
  name: {
    type: SchemaTypes.String,
    required: false
  },
  unit_price: {
    type: SchemaTypes.String,
    required: true
  },
  qty: {
    type: SchemaTypes.String,
    required: true
  },
  price: {
    type: SchemaTypes.Number,
    required: true
  }
});

