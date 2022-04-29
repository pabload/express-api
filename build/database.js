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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const promise_1 = require("mysql2/promise");
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, promise_1.createPool)({
        host: "q1diwiodaej1.us-east-4.psdb.cloud",
        user: "kh4uvo0txxd8",
        password: "pscale_pw_6CxCi2hHzOrCWyQMj-YPSF3RrZQA7f7U7j-oRtUa5Bs",
        database: "commentappdatabase",
        connectionLimit: 10,
        ssl: {
            rejectUnauthorized: false
        }
    });
    return connection;
});
exports.connect = connect;
