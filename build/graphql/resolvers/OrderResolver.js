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
exports.orderResolver = void 0;
var OrderModel_1 = require("../../database/model/OrderModel");
var uuid_1 = require("uuid");
var apollo_server_express_1 = require("apollo-server-express");
exports.orderResolver = {
    Query: {
        getAllPendingOrders: function (_, args, context) {
            return __awaiter(void 0, void 0, void 0, function () {
                var orders;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!context.admin) return [3 /*break*/, 2];
                            return [4 /*yield*/, OrderModel_1.OrderModel.find({status: false})];
                        case 1:
                            orders = _a.sent();
                            return [2 /*return*/, orders];
                        case 2:
                            throw new apollo_server_express_1.ForbiddenError("No access, Only admin");
                    }
                });
            });
        },
        getAllCompletedOrders: function (_, args, context) {
            return __awaiter(void 0, void 0, void 0, function () {
                var orders;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!context.admin) return [3 /*break*/, 2];
                            return [4 /*yield*/, OrderModel_1.OrderModel.find({status: true})];
                        case 1:
                            orders = _a.sent();
                            return [2 /*return*/, orders];
                        case 2:
                            throw new apollo_server_express_1.ForbiddenError("No access, Only admin");
                    }
                });
            });
        },
        getUserPendingOrders: function (_, args, context) {
            return __awaiter(void 0, void 0, void 0, function () {
                var orders;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!context.user_id) return [3 /*break*/, 2];
                            return [4 /*yield*/, OrderModel_1.OrderModel.find({
                                user_id: context.user_id,
                                status: false
                            })];
                        case 1:
                            orders = _a.sent();
                            return [2 /*return*/, orders];
                        case 2:
                            throw new apollo_server_express_1.ForbiddenError("No access");
                    }
                });
            });
        },
        getUserCompletedOrders: function (_, args, context) {
            return __awaiter(void 0, void 0, void 0, function () {
                var orders;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!context.user_id) return [3 /*break*/, 2];
                            return [4 /*yield*/, OrderModel_1.OrderModel.find({
                                user_id: context.user_id,
                                status: true
                            })];
                        case 1:
                            orders = _a.sent();
                            return [2 /*return*/, orders];
                        case 2:
                            throw new apollo_server_express_1.ForbiddenError("No access");
                    }
                });
            });
        }
    },
    Mutation: {
        setOrderDelivered: function (_, args, context) {
            return __awaiter(void 0, void 0, void 0, function () {
                var order;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!context.admin) return [3 /*break*/, 2];
                            order = null;
                            return [4 /*yield*/, OrderModel_1.OrderModel.findOneAndUpdate({
                                _id: args.order_id
                            }, {
                                status: true
                            }, {
                                new: true
                            })];
                        case 1:
                            order = _a.sent();
                            return [2 /*return*/, order];
                        case 2:
                            throw new apollo_server_express_1.ForbiddenError("No access, only Admin");
                    }
                });
            });
        },
        deleteCompleteOrder: function (_, args, context) {
            return __awaiter(void 0, void 0, void 0, function () {
                var order;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!context.user_id) return [3 /*break*/, 2];
                            order = null;
                            return [4 /*yield*/, OrderModel_1.OrderModel.findOneAndDelete({_id: args.order_id})];
                        case 1:
                            order = _a.sent();
                            return [2 /*return*/, order];
                        case 2:
                            throw new apollo_server_express_1.ForbiddenError("No access");
                    }
                });
            });
        },
        createOrder: function (_, args, context) {
            return __awaiter(void 0, void 0, void 0, function () {
                var order;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!context.user_id) return [3 /*break*/, 2];
                            order = null;
                            return [4 /*yield*/, OrderModel_1.OrderModel.create({
                                _id: uuid_1.v4(),
                                user_id: context.user_id,
                                date: new Date().toString(),
                                discount: args.order.discount,
                                sub_total: args.order.sub_total,
                                payment_method: args.order.payment_method,
                                status: false,
                                order_list: args.order.order_list,
                                delivery: args.order.delivery,
                                shipping: args.order.shipping
                            })];
                        case 1:
                            order = _a.sent();
                            return [2 /*return*/, order];
                        case 2:
                            throw new apollo_server_express_1.ForbiddenError("No access");
                    }
                });
            });
        }
    }
};
