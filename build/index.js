"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(app_1.default);
dotenv_1.default.config();
const PORT = process.env.NODE_ENV === 'TEST'
    ? process.env.APP_PORT_TEST
    : process.env.NODE_ENV === 'DEVELOPMENT'
        ? process.env.APP_PORT_DEV
        : process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
