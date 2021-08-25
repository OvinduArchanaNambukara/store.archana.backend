import {Schema, SchemaTypes} from "mongoose";

export const DeliverySchema = new Schema({
  address: {
    type: SchemaTypes.String,
    required: false
  },
  full_name: {
    type: SchemaTypes.String,
    required: true
  },
  city: {
    type: SchemaTypes.String,
    required: true
  },
  postal_code: {
    type: SchemaTypes.Number,
    required: true
  },
  country: {
    type: SchemaTypes.String,
    required: true
  },
  email: {
    type: SchemaTypes.String,
    required: true
  },
  tel: {
    type: SchemaTypes.String,
    required: true
  },
  instructions: {
    type: SchemaTypes.String,
    required: false
  },
});
