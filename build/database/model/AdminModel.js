"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.AdminModel = void 0;
var mongoose_1 = require("mongoose");
var AdminSchema_1 = require("../schemas/AdminSchema");
exports.AdminModel = mongoose_1.model("admin", AdminSchema_1.AdminSchema);
