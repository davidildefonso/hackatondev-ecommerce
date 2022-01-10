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
    const payments = yield database.collection("payments").find({}).toArray();
    yield (0, mongoConnection_1.closeConnectionDb)();
    return payments;
});
const getSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, mongoConnection_1.getDatabase)();
    const payment = yield database.collection("payments").findOne({ _id: new mongodb_1.ObjectId(id) });
    yield (0, mongoConnection_1.closeConnectionDb)();
    return payment;
});
const create = (obj) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, mongoConnection_1.getDatabase)();
    const payments = database.collection("payments");
    const result = yield payments.insertOne(obj);
    return result.insertedId;
});
const service = {
    getAll,
    getSingle,
    create
};
exports.default = service;
