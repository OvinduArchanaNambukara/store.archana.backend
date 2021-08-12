"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.PharmacyModel = void 0;
var mongoose_1 = require("mongoose");
var ProductSchema_1 = require("../schemas/ProductSchema");
exports.PharmacyModel = mongoose_1.model("pharmacy", ProductSchema_1.ProductSchema);
