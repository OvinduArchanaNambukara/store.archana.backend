"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.ProductSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    name: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    image: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    current_price: {
        type: mongoose_1.SchemaTypes.Number,
        required: true
    },
    old_price: {
        type: mongoose_1.SchemaTypes.Number,
        required: false
    },
    key: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    qty: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    }
});
