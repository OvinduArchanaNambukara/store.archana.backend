"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.DeliverySchema = void 0;
var mongoose_1 = require("mongoose");
exports.DeliverySchema = new mongoose_1.Schema({
    address: {
        type: mongoose_1.SchemaTypes.String,
        required: false
    },
    full_name: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    city: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    postal_code: {
        type: mongoose_1.SchemaTypes.Number,
        required: true
    },
    country: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    email: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    tel: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    instructions: {
        type: mongoose_1.SchemaTypes.String,
        required: false
    },
});
