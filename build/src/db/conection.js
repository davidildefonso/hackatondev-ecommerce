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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
const mongodb_1 = require("mongodb");
const { username, password, database } = config_1.default;
const uri = `mongodb+srv://${username}:${password}@cluster0.r0mb0.mongodb.net/${database}?retryWrites=true&w=majority`;
let _db;
const client = new mongodb_1.MongoClient(uri);
const connection = () => __awaiter(void 0, void 0, void 0, function* () {
    if (_db) {
        return _db;
    }
    else {
        try {
            _db = yield client.connect();
            return _db;
        }
        catch (error) {
            return error;
        }
    }
});
exports.default = connection;
