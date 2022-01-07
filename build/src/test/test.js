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
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const mongodb_1 = require("mongodb");
const app_1 = __importDefault(require("../app"));
const conection_1 = __importDefault(require("../db/conection"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = chai_1.default.should();
const expect = chai_1.default.expect;
chai_1.default.use(chai_http_1.default);
describe("on start up api", () => {
    it('request to /ping  should return "pong" and  status code 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield chai_1.default.request(app_1.default).get('/api/ping');
        response.should.have.status(200);
        expect(response.text).eql("pong");
    }));
});
describe("on startup ", () => {
    it("it connects to mongo db ", () => __awaiter(void 0, void 0, void 0, function* () {
        const db = yield (0, conection_1.default)();
        expect(db).to.exist;
        if (db instanceof mongodb_1.MongoClient) {
            yield db.close();
        }
    }));
});
