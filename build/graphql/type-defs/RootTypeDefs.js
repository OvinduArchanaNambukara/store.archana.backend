"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.rootTypeDefs = void 0;
var graphql_tools_1 = require("graphql-tools");
var ProductTypeDefs_1 = require("./ProductTypeDefs");
var OrderTypeDefs_1 = require("./OrderTypeDefs");
var UserTypeDefs_1 = require("./UserTypeDefs");
exports.rootTypeDefs = graphql_tools_1.mergeTypeDefs([ProductTypeDefs_1.productTypeDefs, OrderTypeDefs_1.orderTypeDefs, UserTypeDefs_1.userTypeDefs]);
