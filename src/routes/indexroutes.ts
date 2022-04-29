import {Router} from "express";
import { addComment, deleteComment, getComments, UpdateComment } from "../controllers/commentsControllers";
const router = Router();

router.get("/",getComments);
router.post("/",addComment);
router.put("/",UpdateComment);
router.delete("/",deleteComment)




export default router;