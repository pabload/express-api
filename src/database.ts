import {createPool} from "mysql2/promise"; 

export const connect = async ()=>{
    const connection = await createPool({
        host:"q1diwiodaej1.us-east-4.psdb.cloud",
        user:"kh4uvo0txxd8",
        password: "pscale_pw_6CxCi2hHzOrCWyQMj-YPSF3RrZQA7f7U7j-oRtUa5Bs",
        database: "commentappdatabase",
        connectionLimit:10,
        ssl:{
            rejectUnauthorized:false
        }
    })
    return connection;
}