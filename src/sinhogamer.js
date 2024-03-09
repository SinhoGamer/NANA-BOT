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
exports.extractFromSinhoGamer = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = require("cheerio");
const extractFromSinhoGamer = (q) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://www.sinhogamer.com/search`, {
        params: {
            q
        },
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0"
        }
    });
    const $ = (0, cheerio_1.load)(response.data);
    let titles = [];
    let links = [];
    let snippets = [];
    $('.pTtl > a').each((i, e) => {
        titles[i] = $(e).text();
    });
    $('.pJmp').each((i_1, e_1) => {
        links[i_1] = $(e_1).attr('href');
    });
    $('.pSnpt').each((i_2, e_2) => {
        snippets[i_2] = $(e_2).text();
    });
    const results = [];
    for (let i_3 = 0; i_3 < titles.length; i_3++) {
        results.push({
            title: titles[i_3],
            link: links[i_3],
            snippet: snippets[i_3]
        });
    }
    console.log(results);
    return results;
});
exports.extractFromSinhoGamer = extractFromSinhoGamer;
