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
exports.closeConnection = exports.connect = void 0;
const config_1 = __importDefault(require("../config/config"));
const mongoose_1 = __importDefault(require("mongoose"));
const { username, password, database } = config_1.default;
const uri = `mongodb+srv://${username}:${password}@cluster0.r0mb0.mongodb.net/${database}?retryWrites=true&w=majority`;
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(uri);
        console.log('connected to MongoDB');
        return mongoose_1.default.connection;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('error connecting to MongoDB:', error.message);
        }
    }
});
exports.connect = connect;
const closeConnection = () => __awaiter(void 0, void 0, void 0, function* () { return yield mongoose_1.default.connection.close(); });
exports.closeConnection = closeConnection;
