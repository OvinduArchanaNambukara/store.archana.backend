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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
var express_1 = __importDefault(require("express"));
var connection_1 = require("../database/connection/connection");
var uuid_1 = require("uuid");
var temp_1 = require("./temp");
var VegetableModel_1 = require("../database/model/VegetableModel");
var ElectronicsModel_1 = require("../database/model/ElectronicsModel");
var FruitsModel_1 = require("../database/model/FruitsModel");
var PharmacyModel_1 = require("../database/model/PharmacyModel");
var MeatModel_1 = require("../database/model/MeatModel");
var FoodModel_1 = require("../database/model/FoodModel");
var OrderModel_1 = require("../database/model/OrderModel");
var app = express_1.default();
app.use(express_1.default.json());
var list = [
    {
        categoryArray: temp_1.Electronics,
        model: ElectronicsModel_1.ElectronicModel
    },
    {
        categoryArray: temp_1.Vegetables,
        model: VegetableModel_1.VegetableModel
    },
    {
        categoryArray: temp_1.Fruit,
        model: FruitsModel_1.FruitsModel
    },
    {
        categoryArray: temp_1.Foods,
        model: FoodModel_1.FoodModel
    },
    {
        categoryArray: temp_1.Pharmacy,
        model: PharmacyModel_1.PharmacyModel
    },
    {
        categoryArray: temp_1.Meat,
        model: MeatModel_1.MeatModel
    }
];
connection_1.connectDatabase()
    .then(function () {
        app.post('/add/all', function (req, res) {
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    list.map(function (value) {
                        return __awaiter(void 0, void 0, void 0, function () {
                            var _i, _a, item, product;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _i = 0, _a = value.categoryArray;
                                        _b.label = 1;
                                    case 1:
                                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                                        item = _a[_i];
                                        return [4 /*yield*/, value.model.create({
                                            _id: uuid_1.v4(),
                                            name: item.name,
                                            old_price: item.oldPrice,
                                            current_price: item.currentPrice,
                                            image: item.image,
                                            key: item.key,
                                            qty: item.qty
                                        })];
                                    case 2:
                                        product = _b.sent();
                                        console.log(product);
                                        _b.label = 3;
                                    case 3:
                                        _i++;
                                        return [3 /*break*/, 1];
                                    case 4:
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    return [2 /*return*/];
                });
            });
        });
        app.post('/add/orders', function (req, res) {
            return __awaiter(void 0, void 0, void 0, function () {
                var i, order;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < 6)) return [3 /*break*/, 4];
                            return [4 /*yield*/, OrderModel_1.OrderModel.create({
                                _id: uuid_1.v4(),
                                user_id: "Ovinas",
                                order_list: [
                                    {
                                        _id: "dsdsddsdsd",
                                        name: "sksks",
                                        unit_price: "10kg",
                                        qty: "45",
                                        price: 45000
                                    }, {
                                        _id: "dsdsddscssdsd",
                                        name: "sksks",
                                        unit_price: "10kg",
                                        qty: "45",
                                        price: 12
                                    },
                                    {
                                        _id: "dssasdsddsdsd",
                                        name: "sksks",
                                        unit_price: "10kg",
                                        qty: "45",
                                        price: 12
                                    }
                                ],
                                status: true,
                                date: "new Date()",
                                discount: 45,
                                payment_method: "cash",
                                sub_total: 455,
                                shipping: {
                                    city: "asas",
                                    country: "kskks",
                                    address: "asas",
                                    instructions: "asasas",
                                    postal_code: 555,
                                    full_name: 'kaskak',
                                    tel: "454845"
                                },
                                delivery: {
                                    full_name: "aksaas",
                                    country: "asas",
                                    city: "asas",
                                    postal_code: 1545,
                                    address: "asasasas",
                                    email: "jsh@gna",
                                    tel: "544445"
                                }
                            })];
                        case 2:
                            order = _a.sent();
                            console.log(order);
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4:
                            return [2 /*return*/];
                    }
                });
            });
        });
        app.listen(process.env.PORT, function () {
            console.log("App is listen at http://localhost/" + process.env.PORT);
        });
    })
    .catch(function () {
        console.log("error");
    });
