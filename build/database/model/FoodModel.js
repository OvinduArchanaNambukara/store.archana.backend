"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.FoodModel = void 0;
var mongoose_1 = require("mongoose");
var ProductSchema_1 = require("../schemas/ProductSchema");
exports.FoodModel = mongoose_1.model("food", ProductSchema_1.ProductSchema);
