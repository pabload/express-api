import { Request, Response } from "express"
import { connect } from "../database";
const getComments = async (req: Request, res: Response) => {
    const conn = await connect();
    const query = await conn.query("SELECT * FROM user_comments");
    console.log(query[0])
    res.send(query[0]);
}
const addComment = async (req: Request, res: Response) => {
    try {
        const { email,commentInfo,parentId} = req.body;
        const conn = await connect();
        await conn.query('INSERT INTO user_comments (email,commentInfo,parentId) VALUES (?,?,?)', [email,commentInfo,parentId]);
        res.send(
            {
                res: "success",
            }
        )
    } catch (error) {
        res.send(
            {
                res: error,
            }
        )
    }
}


const UpdateComment = async (req: Request, res: Response) => {
    try {
        const {id,email,commentInfo} = req.body;
        const conn = await connect();
        await conn.query(`UPDATE user_comments SET email="${email}" , commentInfo="${commentInfo}" WHERE  id=${id}` );
        res.send(
            {
                res: "success",
            }
        )
    } catch (error) {
        res.send(
            {
                res: error,
            }
        )
    }
}

const deleteComment = async (req: Request, res: Response) => {
    try {
        const {id} = req.body;
        const conn = await connect();
        await conn.query(`delete from user_comments where parentId = ${id};`);
        await conn.query(`delete from user_comments where id = ${id};`);
        res.send(
            {
                res: "success",
            }
        )
    } catch (error) {
        res.send(
            {
                res: error,
            }
        )
    }
}


export {addComment,UpdateComment,deleteComment,getComments}