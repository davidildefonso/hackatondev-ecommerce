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
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const app_1 = __importDefault(require("../app"));
const test_helper_1 = require("./test_helper");
const mongoConnection_1 = require("../db/mongoConnection");
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
describe("Products ", () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, mongoConnection_1.connectDb)();
    }));
    it("all products are returned", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield chai_1.default.request(app_1.default).get('/api/products');
        response.should.have.status(200);
        expect(response.body).to.have.lengthOf(34);
        expect(response.body[0].name).contain('Boieesen Art - Cuadro de pintura al óleo con textura');
    }));
    it("a single product can be returned", () => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield (0, test_helper_1.productsInDb)();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const id = products[0]._id.toString();
        const response = yield chai_1.default.request(app_1.default).get(`/api/products/${id}`);
        response.should.have.status(200);
        expect(response.body).to.exist;
        expect(response.body.name).contain('Boieesen Art - Cuadro de pintura al óleo con textura');
    }));
    it("search by query title returns filtered products by brand ", () => __awaiter(void 0, void 0, void 0, function* () {
        const query = "Winpeak Art";
        const response = yield chai_1.default.request(app_1.default).get(`/api/products/search/${query}`);
        response.should.have.status(200);
        expect(response.body).not.to.have.lengthOf(34);
        expect(response.body[0].brand).to.contain(query);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, mongoConnection_1.closeConnectionDb)();
    }));
});
describe("Order ", () => {
    let products;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, mongoConnection_1.connectDb)();
        products = yield (0, test_helper_1.productsInDb)();
    }));
    it("is created  ", () => __awaiter(void 0, void 0, void 0, function* () {
        const productId = products[0]._id.toString();
        const order = {
            products: [
                { productId, quantity: 1 }
            ],
            date: new Date(),
            email: "example@xample.com",
            status: "created",
            amount: 100.99
        };
        const response = yield chai_1.default.request(app_1.default).post('/api/orders').send(order);
        response.should.have.status(200);
        expect(response.body).to.exist;
        expect(response.body).to.haveOwnProperty("id");
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, mongoConnection_1.closeConnectionDb)();
    }));
});
describe("Payment ", () => {
    let orders;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, mongoConnection_1.connectDb)();
        orders = yield (0, test_helper_1.getOrders)();
    }));
    it("is created  ", () => __awaiter(void 0, void 0, void 0, function* () {
        const orderId = orders[0]._id.toString();
        const email = orders[0].email;
        const amount = orders[0].amount;
        const payment = {
            date: new Date(),
            orderId,
            email,
            success: true,
            transactionID: "p1312123x2",
            amount
        };
        const response = yield chai_1.default.request(app_1.default).post('/api/payments').send(payment);
        response.should.have.status(200);
        expect(response.body).to.exist;
        expect(response.body).to.haveOwnProperty("id");
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, mongoConnection_1.closeConnectionDb)();
    }));
});
