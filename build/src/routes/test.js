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
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const testService_1 = __importDefault(require("../services/testService"));
const router = express_1.default.Router();
router.get('/search', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("gola");
    const films = yield testService_1.default.getFiltered();
    console.log(films.length);
    res.json(films);
}));
router.get('/search/:query', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.params.query;
    const films = yield testService_1.default.filteredFilms(query);
    console.log(films.length);
    res.json(films);
}));
exports.default = router;
