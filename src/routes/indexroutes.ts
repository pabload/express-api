import {Router} from "express";
import { addData, deleteData, editData, indexcontroller } from "../controllers/indexcontroller";
const router = Router();

router.get("/",indexcontroller);
router.post("/",addData);
router.put("/",editData);
router.delete("/",deleteData)




export default router;