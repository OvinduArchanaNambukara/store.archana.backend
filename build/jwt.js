"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.getUser = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var getUser = function (token) {
    if (token) {
        try {
            return jsonwebtoken_1.default.verify(token, "" + process.env.JWT_SECRET_ID);
        } catch (err) {
            return null;
        }
    }
};
exports.getUser = getUser;
