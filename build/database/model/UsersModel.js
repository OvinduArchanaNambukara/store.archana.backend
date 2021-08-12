"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var UserSchema_1 = require("../schemas/UserSchema");
exports.UserModel = mongoose_1.model("users", UserSchema_1.UsersSchema);
