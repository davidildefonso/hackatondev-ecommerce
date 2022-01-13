"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoConnection_1 = require("../db/mongoConnection");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoConnection_1.connectDb)();
    const database = (0, mongoConnection_1.getDatabase)();
    const products = yield database.collection("products").find({}).limit(6).toArray();
    yield (0, mongoConnection_1.closeConnectionDb)();
    return products;
});
const getAllSkip = (skipped) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoConnection_1.connectDb)();
    const database = (0, mongoConnection_1.getDatabase)();
    const products = yield database.collection("products").find({}).limit(6).skip(skipped).toArray();
    yield (0, mongoConnection_1.closeConnectionDb)();
    return products;
});
const getSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoConnection_1.connectDb)();
    const database = (0, mongoConnection_1.getDatabase)();
    const product = yield database.collection("products").findOne({ _id: new mongodb_1.ObjectId(id) });
    yield (0, mongoConnection_1.closeConnectionDb)();
    return product;
});
const getFiltered = (query) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoConnection_1.connectDb)();
    const database = (0, mongoConnection_1.getDatabase)();
    const products = database.collection("products");
    const limit = 6;
    const skip = 6;
    const filteredProducts = yield products.aggregate([
        {
            $search: {
                index: 'default',
                text: {
                    path: ["brand", "name"],
                    query,
                    fuzzy: {}
                }
            }
        },
        {
            $skip: skip
        },
        {
            $limit: limit
        }
    ]).toArray();
    yield (0, mongoConnection_1.closeConnectionDb)();
    return filteredProducts;
});
const service = {
    getAll,
    getSingle,
    getFiltered,
    getAllSkip
};
exports.default = service;
