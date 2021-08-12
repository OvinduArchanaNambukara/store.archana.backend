"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.OrderSchema = void 0;
var mongoose_1 = require("mongoose");
var OrderItemSchema_1 = require("./OrderItemSchema");
var DeliverySchema_1 = require("./DeliverySchema");
var ShippingSchema_1 = require("./ShippingSchema");
exports.OrderSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    user_id: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    order_list: {
        type: [OrderItemSchema_1.OrderItemSchema],
        required: true
    },
    date: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    discount: {
        type: mongoose_1.SchemaTypes.Number,
        required: true
    },
    sub_total: {
        type: mongoose_1.SchemaTypes.Number,
        required: true
    },
    status: {
        type: mongoose_1.SchemaTypes.Boolean,
        required: true
    },
    payment_method: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    delivery: {
        type: DeliverySchema_1.DeliverySchema,
        required: true
    },
    shipping: {
        type: ShippingSchema_1.ShippingSchema,
        required: false
    }
});
