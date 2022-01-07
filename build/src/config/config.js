"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    development: {
        username: process.env.MONGODB_DEV_USER,
        password: process.env.MONGODB_DEV_PASS,
        database: process.env.MONGODB_DEV_DATABASE,
    },
    test: {
        username: process.env.MONGODB_TEST_USER,
        password: process.env.MONGODB_TEST_PASS,
        database: process.env.MONGODB_TEST_DATABASE,
    },
    production: {
        username: process.env.MONGODB_USER,
        password: process.env.MONGODB_PASS,
        database: process.env.MONGODB_DATABASE,
    },
};
exports.default = process.env.NODE_ENV === 'DEVELOPMENT'
    ? config.development :
    process.env.NODE_ENV === 'TEST'
        ? config.test
        : config.production;
