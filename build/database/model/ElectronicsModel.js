"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.ElectronicModel = void 0;
var mongoose_1 = require("mongoose");
var ProductSchema_1 = require("../schemas/ProductSchema");
exports.ElectronicModel = mongoose_1.model("electronics", ProductSchema_1.ProductSchema);
