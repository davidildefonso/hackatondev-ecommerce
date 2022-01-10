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
exports.getDatabase = exports.closeConnectionDb = exports.connectDb = void 0;
const config_1 = __importDefault(require("../config/config"));
const mongodb_1 = require("mongodb");
const { username, password, database } = config_1.default;
class DbClient {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            const uri = `mongodb+srv://${username}:${password}@cluster0.r0mb0.mongodb.net/${database}?retryWrites=true&w=majority`;
            this.instance = new mongodb_1.MongoClient(uri);
        }
        return this.instance;
    }
}
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoClient = DbClient.getInstance();
        const client = yield mongoClient.connect();
        console.log('connected to MongoDB');
        return client;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('error connecting to MongoDB:', error.message);
        }
    }
});
exports.connectDb = connectDb;
const closeConnectionDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const mongoClient = DbClient.getInstance();
    const client = yield mongoClient.connect();
    yield client.close();
});
exports.closeConnectionDb = closeConnectionDb;
const getDatabase = () => {
    const mongoClient = DbClient.getInstance();
    return mongoClient.db(database);
};
exports.getDatabase = getDatabase;
