import {createPool} from "mysql2/promise"; 

export const connect = async ()=>{
    const connection = await createPool({
        host:"localhost",
        user:"root",
        password: "1234",
        database: "test2",
        connectionLimit:10
    })
    return connection;
}