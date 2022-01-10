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
const temporal_1 = __importDefault(require("../db/models/temporal"));
const mongoose_atlas_search_1 = __importDefault(require("mongoose-atlas-search"));
const getFiltered = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("aqui");
    const films = yield temporal_1.default.find({}); //.limit(5);
    //eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return films;
});
const filteredFilms = (str) => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_atlas_search_1.default.initialize({
        model: temporal_1.default,
        overwriteFind: true,
        searchKey: 'search',
        addFields: {
            id: '$_id'
        },
        searchFunction: (query) => {
            return {
                index: 'default',
                text: {
                    query,
                    path: "title" // {		'wildcard': '*'		}
                }
            };
        }
    });
    const filteredFilms = yield temporal_1.default.find({ search: str });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return filteredFilms;
});
const service = {
    getFiltered,
    filteredFilms
};
exports.default = service;
