"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
exports.getOrders = exports.productsInDb = exports.nonExistingId = exports.initialProducts = void 0;
const mongoConnection_1 = require("../db/mongoConnection");
exports.initialProducts = [
    {
        name: 'Reloj US Polo Asnn Casual US9281',
        code: 'RPOLO9281',
        brand: 'US Polo',
        price: 350,
        currency: 'USD',
        productBullets: ["Imported", "Analog-digital", "Metal and Caucho", "Diameter 44mm", "not water-resistant", "model US9281", "Black"],
        productDescription: "Reloj casual de metal y caucho de color negro modelo US9281",
        category: "Men",
        colors: ["black", "silver", "gold"],
        sizes: "universal",
        productWeight: 200,
        weightUnit: "grams",
        productLength: 20,
        lengthUnit: "centimeters",
        ProductWidth: 8,
        ProductHeight: 4,
        PackageWeight: 350,
        PackageLength: 15,
        PackageWidth: 10,
        PackageHeight: 10
    },
    {
        name: 'Cartera Guess MishkaG',
        code: 'CGUESS461',
        brand: 'Guess',
        price: 450,
        currency: 'USD',
        productBullets: ["Imported", "Leather", "Front Logo & plaque", "3 containers", "interior cover", "zipped closure", "Long wire", "exterior pocket"],
        productDescription: "Exclusive Guess purse  long belt dusty mauve leather ",
        category: "Women",
        colors: ["black"],
        sizes: "universal",
        productWeight: 380,
        weightUnit: "grams",
        productLength: 50,
        lengthUnit: "centimeters",
        ProductWidth: 15,
        ProductHeight: 30,
        PackageWeight: 550,
        PackageLength: 60,
        PackageWidth: 25,
        PackageHeight: 25
    }
];
const nonExistingId = () => __awaiter(void 0, void 0, void 0, function* () {
    const product = {
        name: 'Cartera Guess MishkaG',
        code: 'CGUESS461',
        brand: 'Guess',
        price: 450,
        currency: 'USD',
        productBullets: ["Imported", "Leather", "Front Logo & plaque", "3 containers", "interior cover", "zipped closure", "Long wire", "exterior pocket"],
        productDescription: "Exclusive Guess purse  long belt dusty mauve leather ",
        category: "Women",
        colors: ["black"],
        sizes: "universal",
        productWeight: 380,
        weightUnit: "grams",
        productLength: 50,
        lengthUnit: "centimeters",
        ProductWidth: 15,
        ProductHeight: 30,
        PackageWeight: 550,
        PackageLength: 60,
        PackageWidth: 25,
        PackageHeight: 25
    };
    const database = (0, mongoConnection_1.getDatabase)();
    const products = database.collection("products");
    const result = yield products.insertOne(product);
    const id = result.insertedId;
    yield products.deleteOne({ _id: id });
    return id;
});
exports.nonExistingId = nonExistingId;
const productsInDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, mongoConnection_1.getDatabase)();
    const products = yield database.collection("products").find({}).toArray();
    return products;
});
exports.productsInDb = productsInDb;
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, mongoConnection_1.getDatabase)();
    const order = yield database.collection("orders").find({}).toArray();
    return order;
});
exports.getOrders = getOrders;
