import {Schema, SchemaTypes} from "mongoose";
import {OrderItemSchema} from "./OrderItemSchema";
import {DeliverySchema} from "./DeliverySchema";
import {ShippingSchema} from "./ShippingSchema";

export const OrderSchema = new Schema({
  _id: {
    type: SchemaTypes.String,
    required: true
  },
  user_id: {
    type: SchemaTypes.String,
    required: true
  },
  order_list: {
    type: [OrderItemSchema],
    required: true
  },
  date: {
    type: SchemaTypes.String,
    required: true
  },
  discount: {
    type: SchemaTypes.Number,
    required: true
  },
  sub_total: {
    type: SchemaTypes.Number,
    required: true
  },
  status: {
    type: SchemaTypes.Boolean,
    required: true
  },
  delivery: {
    type: DeliverySchema,
    required: false
  },
  shipping: {
    type: ShippingSchema,
    required: false
  }
});
