"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.VegetableModel = void 0;
var mongoose_1 = require("mongoose");
var ProductSchema_1 = require("../schemas/ProductSchema");
exports.VegetableModel = mongoose_1.model("vegetables", ProductSchema_1.ProductSchema);
