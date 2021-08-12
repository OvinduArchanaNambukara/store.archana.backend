"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.OrderModel = void 0;
var mongoose_1 = require("mongoose");
var OrderSchema_1 = require("../schemas/OrderSchema");
exports.OrderModel = mongoose_1.model("orders", OrderSchema_1.OrderSchema);
