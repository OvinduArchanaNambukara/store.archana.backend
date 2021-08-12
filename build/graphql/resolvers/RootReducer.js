"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.rootReducer = void 0;
var graphql_tools_1 = require("graphql-tools");
var ProductResolver_1 = require("./ProductResolver");
var OrderResolver_1 = require("./OrderResolver");
var UserResolver_1 = require("./UserResolver");
exports.rootReducer = graphql_tools_1.mergeResolvers([ProductResolver_1.productResolver, OrderResolver_1.orderResolver, UserResolver_1.userResolver]);
