import {Document, model} from "mongoose";
import {OrderSchema} from "../schemas/OrderSchema";

export interface Order {
  user_id: string
  sub_total: string
  order_list: {
    _id: string
    name: string
    unit_price: string
    qty: string
    price: number
  }[]
  date: string
  discount: number
  payment_method: string
  status: boolean
  delivery: {
    address: string
    full_name: string
    city: string
    postal_code: number
    country: string
    email: string
    tel: string
  }
  shipping: {
    address: string
    full_name: string
    city: string
    postal_code: number
    country: string
    instructions: string
    tel: string
  } | null
}

export interface OrderModel extends Order, Document {
}

export const OrderModel = model<OrderModel>("orders", OrderSchema);
