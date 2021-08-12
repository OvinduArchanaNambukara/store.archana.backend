"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.FruitsModel = void 0;
var mongoose_1 = require("mongoose");
var ProductSchema_1 = require("../schemas/ProductSchema");
exports.FruitsModel = mongoose_1.model("fruits", ProductSchema_1.ProductSchema);
