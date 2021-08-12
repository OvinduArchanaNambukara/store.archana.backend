"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.credentials = void 0;
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
dotenv_1.default.config();
var app = express_1.default();
app.use(express_1.default.json());
exports.credentials = {
    accessKeyId: "" + process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: "" + process.env.AWS_S3_SECRET_KEY
};
aws_sdk_1.default.config.update({credentials: exports.credentials, region: process.env.AWS_S3_REGION});
