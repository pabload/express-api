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
exports.deleteData = exports.editData = exports.addData = exports.indexcontroller = void 0;
const database_1 = require("../database");
const indexcontroller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield (0, database_1.connect)();
    const query = yield conn.query("SELECT * FROM data");
    res.send(query[0]);
});
exports.indexcontroller = indexcontroller;
const addData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, data1, data2 } = req.body;
        if (!id || !data1 || data2) {
            return res.status(400).send({
                message: "invalid data"
            });
        }
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO data (id, data1, data2) VALUES (?,?,?)', [id, data1, data2]);
        res.send({
            res: "success",
        });
    }
    catch (error) {
        res.send({
            res: "error",
        });
    }
});
exports.addData = addData;
const editData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, data1, data2 } = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query(`UPDATE data SET data1="${data1}" , data2="${data2}" WHERE  id=${id}`);
        res.send({
            res: "success",
        });
    }
    catch (error) {
        res.status(404).send({
            res: error,
        });
    }
});
exports.editData = editData;
const deleteData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query(`DELETE FROM data WHERE id=${id};`);
        res.send({
            res: "success",
        });
    }
    catch (error) {
        res.send({
            res: "error",
        });
    }
});
exports.deleteData = deleteData;
