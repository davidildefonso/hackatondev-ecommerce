"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const products_1 = __importDefault(require("./routes/products"));
const test_1 = __importDefault(require("./routes/test"));
const orders_1 = __importDefault(require("./routes/orders"));
const payments_1 = __importDefault(require("./routes/payments"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const staticPath = process.env.NODE_ENV === 'PRODUCTION'
    ? './build/src/dist'
    : './src/dist';
const app = (0, express_1.default)();
app.use(express_1.default.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use((0, cors_1.default)());
app.use(express_1.default.static(staticPath));
app.use('/api/ping', index_1.default);
app.use('/api/products', products_1.default);
app.use('/api/orders', orders_1.default);
app.use('/api/payments', payments_1.default);
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
app.use('/api/test', test_1.default);
exports.default = app;
