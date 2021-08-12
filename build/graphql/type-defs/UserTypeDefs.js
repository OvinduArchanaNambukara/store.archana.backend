"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {value: raw});
    } else {
        cooked.raw = raw;
    }
    return cooked;
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.userTypeDefs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.userTypeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Mutation{\n      signIn(email: String!, password: String!): String!\n      signUp(email: String!, password: String!, first_name: String!, last_name: String!): String!\n    }\n"], ["\n  type Mutation{\n      signIn(email: String!, password: String!): String!\n      signUp(email: String!, password: String!, first_name: String!, last_name: String!): String!\n    }\n"])));
var templateObject_1;
