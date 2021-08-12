"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.MeatModel = void 0;
var mongoose_1 = require("mongoose");
var ProductSchema_1 = require("../schemas/ProductSchema");
exports.MeatModel = mongoose_1.model("meat", ProductSchema_1.ProductSchema);
