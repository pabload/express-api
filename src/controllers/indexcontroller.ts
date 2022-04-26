import { Request, Response } from "express"
import { connect } from "../database";
const indexcontroller = async (req: Request, res: Response) => {
    const conn = await connect();
    const query = await conn.query("SELECT * FROM data");
    res.send(query[0]);
}
const addData = async (req: Request, res: Response) => {
    try {
        const { id, data1, data2 } = req.body;
        if(!id || !data1 || data2){
            return res.status(400).send({
                message:"invalid data"
            })
        }
        const conn = await connect();
        await conn.query('INSERT INTO data (id, data1, data2) VALUES (?,?,?)', [id, data1, data2]);
        res.send(
            {
                res: "success",
            }
        )
    } catch (error) {
        res.send(
            {
                res: "error",
            }
        )
    }
}
const editData = async (req: Request, res: Response) => {
    try {
        const { id, data1, data2 } = req.body;
        const conn = await connect();
        await conn.query(`UPDATE data SET data1="${data1}" , data2="${data2}" WHERE  id=${id}` );
        res.send(
            {
                res: "success",
            }
        )
    } catch (error) {
        res.status(404).send(
            {
                res: error,
            }
        )
    }
}
const deleteData = async (req: Request, res: Response) => {
    try {
        const {id} = req.body;
        const conn = await connect();
        await conn.query(`DELETE FROM data WHERE id=${id};`);
        res.send(
            {
                res: "success",
            }
        )
    } catch (error) {
        res.send(
            {
                res: "error",
            }
        )
    }
}

export { indexcontroller, addData,editData,deleteData };