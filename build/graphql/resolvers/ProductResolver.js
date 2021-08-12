"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = {
        label: 0, sent: function () {
            if (t[0] & 1) throw t[1];
            return t[1];
        }, trys: [], ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;

    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }

    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {value: op[1], done: false};
                case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];
            y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {value: op[0] ? op[1] : void 0, done: true};
    }
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.productResolver = void 0;
var FoodModel_1 = require("../../database/model/FoodModel");
var VegetableModel_1 = require("../../database/model/VegetableModel");
var PharmacyModel_1 = require("../../database/model/PharmacyModel");
var MeatModel_1 = require("../../database/model/MeatModel");
var ElectronicsModel_1 = require("../../database/model/ElectronicsModel");
var FruitsModel_1 = require("../../database/model/FruitsModel");
var uuid_1 = require("uuid");
var constants_1 = require("../constants/constants");
var apollo_server_express_1 = require("apollo-server-express");
exports.productResolver = {
    Query: {
        getFoodProducts: function () {
            return __awaiter(void 0, void 0, void 0, function () {
                var foods;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            return [4 /*yield*/, FoodModel_1.FoodModel.find()];
                        case 1:
                            foods = _a.sent();
                            return [2 /*return*/, {
                                category_name: "Food", products: foods
                            }];
                    }
                });
            });
        },
        getVegetableProducts: function () {
            return __awaiter(void 0, void 0, void 0, function () {
                var vegetables;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            return [4 /*yield*/, VegetableModel_1.VegetableModel.find()];
                        case 1:
                            vegetables = _a.sent();
                            return [2 /*return*/, {
                                category_name: "Vegetables", products: vegetables
                            }];
                    }
                });
            });
        },
        getPharmacyProducts: function () {
            return __awaiter(void 0, void 0, void 0, function () {
                var pharmacy;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            return [4 /*yield*/, PharmacyModel_1.PharmacyModel.find()];
                        case 1:
                            pharmacy = _a.sent();
                            return [2 /*return*/, {
                                category_name: "Pharmacy", products: pharmacy
                            }];
                    }
                });
            });
        },
        getMeatProducts: function () {
            return __awaiter(void 0, void 0, void 0, function () {
                var meat;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            return [4 /*yield*/, MeatModel_1.MeatModel.find()];
                        case 1:
                            meat = _a.sent();
                            return [2 /*return*/, {
                                category_name: "Meat", products: meat
                            }];
                    }
                });
            });
        },
        getElectronicProducts: function () {
            return __awaiter(void 0, void 0, void 0, function () {
                var electronics;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            return [4 /*yield*/, ElectronicsModel_1.ElectronicModel.find()];
                        case 1:
                            electronics = _a.sent();
                            return [2 /*return*/, {
                                category_name: "Electronics", products: electronics
                            }];
                    }
                });
            });
        },
        getFruitProducts: function () {
            return __awaiter(void 0, void 0, void 0, function () {
                var fruit;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            return [4 /*yield*/, FruitsModel_1.FruitsModel.find()];
                        case 1:
                            fruit = _a.sent();
                            return [2 /*return*/, {
                                category_name: "Fruits", products: fruit
                            }];
                    }
                });
            });
        },
    },
    Mutation: {
        addProduct: function (_, args, context) {
            return __awaiter(void 0, void 0, void 0, function () {
                var product, item, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!context.admin) return [3 /*break*/, 15];
                            product = null;
                            item = {
                                _id: uuid_1.v4(),
                                name: args.name,
                                key: args.key,
                                image: args.image,
                                old_price: (args.old_price) ? args.old_price : null,
                                current_price: args.current_price,
                                qty: args.qty
                            };
                            _a = args.category;
                            switch (_a) {
                                case constants_1.VEGETABLES:
                                    return [3 /*break*/, 1];
                                case constants_1.FRUITS:
                                    return [3 /*break*/, 3];
                                case constants_1.MEAT:
                                    return [3 /*break*/, 5];
                                case constants_1.PHARMACY:
                                    return [3 /*break*/, 7];
                                case constants_1.ELECTRONICS:
                                    return [3 /*break*/, 9];
                                case constants_1.FOOD:
                                    return [3 /*break*/, 11];
                            }
                            return [3 /*break*/, 13];
                        case 1:
                            return [4 /*yield*/, VegetableModel_1.VegetableModel.create(item)];
                        case 2:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 3:
                            return [4 /*yield*/, FruitsModel_1.FruitsModel.create(item)];
                        case 4:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 5:
                            return [4 /*yield*/, MeatModel_1.MeatModel.create(item)];
                        case 6:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 7:
                            return [4 /*yield*/, PharmacyModel_1.PharmacyModel.create(item)];
                        case 8:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 9:
                            return [4 /*yield*/, ElectronicsModel_1.ElectronicModel.create(item)];
                        case 10:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 11:
                            return [4 /*yield*/, FoodModel_1.FoodModel.create(item)];
                        case 12:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 13: {
                            return [3 /*break*/, 14];
                        }
                            _b.label = 14;
                        case 14:
                            return [2 /*return*/, product];
                        case 15:
                            throw new apollo_server_express_1.ForbiddenError("No access, Admin only");
                    }
                });
            });
        },
        updateProduct: function (_, args, context) {
            return __awaiter(void 0, void 0, void 0, function () {
                var product, item, options, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!context.admin) return [3 /*break*/, 15];
                            product = null;
                            item = {
                                name: args.name,
                                key: args.key,
                                image: args.image,
                                old_price: (args.old_price) ? args.old_price : undefined,
                                current_price: args.current_price,
                                qty: args.qty
                            };
                            options = {
                                new: true
                            };
                            _a = args.category;
                            switch (_a) {
                                case constants_1.VEGETABLES:
                                    return [3 /*break*/, 1];
                                case constants_1.FRUITS:
                                    return [3 /*break*/, 3];
                                case constants_1.MEAT:
                                    return [3 /*break*/, 5];
                                case constants_1.PHARMACY:
                                    return [3 /*break*/, 7];
                                case constants_1.ELECTRONICS:
                                    return [3 /*break*/, 9];
                                case constants_1.FOOD:
                                    return [3 /*break*/, 11];
                            }
                            return [3 /*break*/, 13];
                        case 1:
                            return [4 /*yield*/, VegetableModel_1.VegetableModel.findOneAndUpdate({_id: args.id}, item, options)];
                        case 2:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 3:
                            return [4 /*yield*/, FruitsModel_1.FruitsModel.findOneAndUpdate({_id: args.id}, item, options)];
                        case 4:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 5:
                            return [4 /*yield*/, MeatModel_1.MeatModel.findOneAndUpdate({_id: args.id}, item, options)];
                        case 6:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 7:
                            return [4 /*yield*/, PharmacyModel_1.PharmacyModel.findOneAndUpdate({_id: args.id}, item, options)];
                        case 8:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 9:
                            return [4 /*yield*/, ElectronicsModel_1.ElectronicModel.findOneAndUpdate({_id: args.id}, item, options)];
                        case 10:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 11:
                            return [4 /*yield*/, FoodModel_1.FoodModel.findOneAndUpdate({_id: args.id}, item, options)];
                        case 12:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 13: {
                            return [3 /*break*/, 14];
                        }
                            _b.label = 14;
                        case 14:
                            return [2 /*return*/, product];
                        case 15:
                            throw new apollo_server_express_1.ForbiddenError("No access, Admin only");
                    }
                });
            });
        },
        deleteProduct: function (_, args, context) {
            return __awaiter(void 0, void 0, void 0, function () {
                var product, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!context.admin) return [3 /*break*/, 15];
                            product = null;
                            _a = args.category;
                            switch (_a) {
                                case constants_1.VEGETABLES:
                                    return [3 /*break*/, 1];
                                case constants_1.FRUITS:
                                    return [3 /*break*/, 3];
                                case constants_1.MEAT:
                                    return [3 /*break*/, 5];
                                case constants_1.PHARMACY:
                                    return [3 /*break*/, 7];
                                case constants_1.ELECTRONICS:
                                    return [3 /*break*/, 9];
                                case constants_1.FOOD:
                                    return [3 /*break*/, 11];
                            }
                            return [3 /*break*/, 13];
                        case 1:
                            return [4 /*yield*/, VegetableModel_1.VegetableModel.findOneAndDelete({_id: args.id})];
                        case 2:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 3:
                            return [4 /*yield*/, FruitsModel_1.FruitsModel.findOneAndDelete({_id: args.id})];
                        case 4:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 5:
                            return [4 /*yield*/, MeatModel_1.MeatModel.findOneAndDelete({_id: args.id})];
                        case 6:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 7:
                            return [4 /*yield*/, PharmacyModel_1.PharmacyModel.findOneAndDelete({_id: args.id})];
                        case 8:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 9:
                            return [4 /*yield*/, ElectronicsModel_1.ElectronicModel.findOneAndDelete({_id: args.id})];
                        case 10:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 11:
                            return [4 /*yield*/, FoodModel_1.FoodModel.findOneAndDelete({_id: args.id})];
                        case 12:
                            product = _b.sent();
                            return [3 /*break*/, 14];
                        case 13: {
                            return [3 /*break*/, 14];
                        }
                            _b.label = 14;
                        case 14:
                            return [2 /*return*/, product];
                        case 15:
                            throw new apollo_server_express_1.ForbiddenError("No access, Admin only");
                    }
                });
            });
        }
    }
};
