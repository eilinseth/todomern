import { Router } from "express";
import bodyParser from "body-parser"
import {
    getTodos,
    getTodo,
    addTodo,
    updateTodo,
    deleteTodo
} from "../controller"


const router = Router();
const parser = bodyParser.json()

router.get("/api",getTodos);
router.get("/api/:id",parser,getTodo);
router.post("/api",parser,addTodo);
router.put("/api/:id",parser,updateTodo);
router.delete("/api/:id",parser,deleteTodo);

export default router
