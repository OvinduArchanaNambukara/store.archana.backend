"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.OrderItemSchema = void 0;
var mongoose_1 = require("mongoose");
exports.OrderItemSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    name: {
        type: mongoose_1.SchemaTypes.String,
        required: false
    },
    unit_price: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    qty: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    price: {
        type: mongoose_1.SchemaTypes.Number,
        required: true
    }
});
