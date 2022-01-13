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
    const database = (0, mongoConnection_1.getDatabase)();
    const orders = yield database.collection("orders").find({}).toArray();
    yield (0, mongoConnection_1.closeConnectionDb)();
    return orders;
});
const getSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, mongoConnection_1.getDatabase)();
    const order = yield database.collection("orders").findOne({ _id: new mongodb_1.ObjectId(id) });
    yield (0, mongoConnection_1.closeConnectionDb)();
    return order;
});
const create = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoConnection_1.connectDb)();
    const database = (0, mongoConnection_1.getDatabase)();
    const products = database.collection("orders");
    const result = yield products.insertOne(obj);
    yield (0, mongoConnection_1.closeConnectionDb)();
    return result.insertedId;
});
const service = {
    getAll,
    getSingle,
    create
};
exports.default = service;
