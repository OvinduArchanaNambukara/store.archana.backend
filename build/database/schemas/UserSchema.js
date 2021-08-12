"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.UsersSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UsersSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    first_name: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    last_name: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    password: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    },
    email: {
        type: mongoose_1.SchemaTypes.String,
        required: true
    }
});
