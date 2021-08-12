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
exports.productTypeDefs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.productTypeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query{\n      getFoodProducts: Category!\n      getMeatProducts: Category!\n      getFruitProducts: Category!\n      getElectronicProducts: Category!\n      getPharmacyProducts: Category!\n      getVegetableProducts: Category!\n    }\n    \n    type Mutation{\n      addProduct(name: String!, image: String!, current_price: Int!, old_price: Int , key: String!, qty: String!, category: String!): Product!\n      updateProduct(id: String!, name: String!, image: String!, current_price: Int!, old_price: Int , key: String!, qty: String!, category: String!): Product!\n      deleteProduct(id: String!, category: String!): Product!\n    }\n    \n    type Category {\n      category_name: String!\n      products: [Product!]!\n    }\n    \n    type Product {\n      _id: String!\n      name: String!\n      image: String!\n      current_price: Int!\n      old_price: Int \n      key: String!\n      qty: String!\n    }\n"], ["\n    type Query{\n      getFoodProducts: Category!\n      getMeatProducts: Category!\n      getFruitProducts: Category!\n      getElectronicProducts: Category!\n      getPharmacyProducts: Category!\n      getVegetableProducts: Category!\n    }\n    \n    type Mutation{\n      addProduct(name: String!, image: String!, current_price: Int!, old_price: Int , key: String!, qty: String!, category: String!): Product!\n      updateProduct(id: String!, name: String!, image: String!, current_price: Int!, old_price: Int , key: String!, qty: String!, category: String!): Product!\n      deleteProduct(id: String!, category: String!): Product!\n    }\n    \n    type Category {\n      category_name: String!\n      products: [Product!]!\n    }\n    \n    type Product {\n      _id: String!\n      name: String!\n      image: String!\n      current_price: Int!\n      old_price: Int \n      key: String!\n      qty: String!\n    }\n"])));
var templateObject_1;
