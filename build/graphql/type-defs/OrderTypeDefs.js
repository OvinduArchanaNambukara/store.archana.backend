"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {value: raw});
    } else {
        cooked.raw = raw;
    }
    return cooked;
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.orderTypeDefs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.orderTypeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query{\n      getAllPendingOrders: [Order]\n      getAllCompletedOrders: [Order]\n      getUserPendingOrders: [Order]\n      getUserCompletedOrders: [Order]\n    }\n\n  type Mutation{\n      setOrderDelivered(order_id: String!): Order!\n      deleteCompleteOrder(order_id: String!): Order!\n      createOrder(order: CreateOrder!): Order!\n    }\n\n  type Order{\n      _id: String!\n      user_id: String!\n      date: String!\n      discount: Int!\n      sub_total: Int!\n      payment_method: String!\n      status: Boolean!\n      order_list: [OrderItem!] \n      delivery: Delivery\n      shipping: Shipping\n    }\n  \n  type OrderItem{\n      _id: String!\n      name: String\n      unit_price: String!\n      qty: String!\n      price: Int!\n  }\n  \n  type Delivery{\n      address: String!\n      full_name: String\n      city: String!\n      country: String!\n      postal_code: Int!\n      instructions: String\n      email: String!\n      tel: String!\n  }\n  \n  type Shipping{\n      address: String!\n      full_name: String\n      city: String!\n      country: String!\n      postal_code: Int!\n      tel: String!\n  }\n  \n  input CreateOrder{\n      date: String!\n      discount: Int!\n      sub_total: Int!\n      payment_method: String!\n      order_list: [CreateOrderItem!]! \n      delivery: CreateDelivery!\n      shipping: CreateShipping\n    }\n  \n  input CreateOrderItem{\n      _id: String!\n      name: String\n      unit_price: String!\n      qty: String!\n      price: Int!\n  }\n  \n  input CreateDelivery{\n      address: String!\n      full_name: String\n      city: String!\n      country: String!\n      postal_code: Int!\n      email: String!\n      tel: String!\n      instructions: String\n  }\n  \n  input CreateShipping{\n      address: String!\n      full_name: String\n      city: String!\n      country: String!\n      postal_code: Int!\n      tel: String!\n  }\n"], ["\n  type Query{\n      getAllPendingOrders: [Order]\n      getAllCompletedOrders: [Order]\n      getUserPendingOrders: [Order]\n      getUserCompletedOrders: [Order]\n    }\n\n  type Mutation{\n      setOrderDelivered(order_id: String!): Order!\n      deleteCompleteOrder(order_id: String!): Order!\n      createOrder(order: CreateOrder!): Order!\n    }\n\n  type Order{\n      _id: String!\n      user_id: String!\n      date: String!\n      discount: Int!\n      sub_total: Int!\n      payment_method: String!\n      status: Boolean!\n      order_list: [OrderItem!] \n      delivery: Delivery\n      shipping: Shipping\n    }\n  \n  type OrderItem{\n      _id: String!\n      name: String\n      unit_price: String!\n      qty: String!\n      price: Int!\n  }\n  \n  type Delivery{\n      address: String!\n      full_name: String\n      city: String!\n      country: String!\n      postal_code: Int!\n      instructions: String\n      email: String!\n      tel: String!\n  }\n  \n  type Shipping{\n      address: String!\n      full_name: String\n      city: String!\n      country: String!\n      postal_code: Int!\n      tel: String!\n  }\n  \n  input CreateOrder{\n      date: String!\n      discount: Int!\n      sub_total: Int!\n      payment_method: String!\n      order_list: [CreateOrderItem!]! \n      delivery: CreateDelivery!\n      shipping: CreateShipping\n    }\n  \n  input CreateOrderItem{\n      _id: String!\n      name: String\n      unit_price: String!\n      qty: String!\n      price: Int!\n  }\n  \n  input CreateDelivery{\n      address: String!\n      full_name: String\n      city: String!\n      country: String!\n      postal_code: Int!\n      email: String!\n      tel: String!\n      instructions: String\n  }\n  \n  input CreateShipping{\n      address: String!\n      full_name: String\n      city: String!\n      country: String!\n      postal_code: Int!\n      tel: String!\n  }\n"])));
var templateObject_1;
