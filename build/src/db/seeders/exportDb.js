"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(0, child_process_1.exec)(`mongorestore  --uri "mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.r0mb0.mongodb.net" --archive="./sample_database/ecommerce_sample.json" --nsFrom="sample_mflix.*" --nsTo="ecommerce_sample.*"`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
});
