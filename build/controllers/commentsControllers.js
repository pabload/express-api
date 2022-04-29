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
exports.getComments = exports.deleteComment = exports.UpdateComment = exports.addComment = void 0;
const database_1 = require("../database");
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield (0, database_1.connect)();
    const query = yield conn.query("SELECT * FROM user_comments");
    console.log(query[0]);
    res.send(query[0]);
});
exports.getComments = getComments;
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, commentInfo, parentId } = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO user_comments (email,commentInfo,parentId) VALUES (?,?,?)', [email, commentInfo, parentId]);
        res.send({
            res: "success",
        });
    }
    catch (error) {
        res.send({
            res: error,
        });
    }
});
exports.addComment = addComment;
const UpdateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, email, commentInfo } = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query(`UPDATE user_comments SET email="${email}" , commentInfo="${commentInfo}" WHERE  id=${id}`);
        res.send({
            res: "success",
        });
    }
    catch (error) {
        res.send({
            res: error,
        });
    }
});
exports.UpdateComment = UpdateComment;
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query(`delete from user_comments where parentId = ${id};`);
        yield conn.query(`delete from user_comments where id = ${id};`);
        res.send({
            res: "success",
        });
    }
    catch (error) {
        res.send({
            res: error,
        });
    }
});
exports.deleteComment = deleteComment;
