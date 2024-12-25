import { Router } from "express";
import {
    getTodos,
    getTodo,
    addTodo,
    updateTodo,
    deleteTodo
} from "../controller"


const router = Router();

router.get("/api",getTodos);
router.get("/api/:id",getTodo);
router.post("/api",addTodo);
router.put("/api/:id",updateTodo);
router.delete("/api/:id",deleteTodo);
