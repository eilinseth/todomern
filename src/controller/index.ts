import {Response,Request} from "express"
import TodoModel from "../models/todo"
import {Todo} from "../types/todo"

const getTodos = async (req:Request,res:Response):Promise<void> => {
    try{
        const data : Todo[] = await TodoModel.find()
        res.status(200).json({
            status:"200",
            message:"OK",
            data
        })
        
    }catch(error){
        console.error(`${error}`);
        res.status(500).json({
            status:500,
            message:"Internal Server Error"
        })
    }
}

const getTodo = async (req:Request,res:Response):Promise<void> => {
    try{
        const {id} = req.params;
        const todo = await TodoModel.findById(id)
        if(!todo){
            res.status(404).json({
                status:404,
                message:"Id not found"
            })
        }
        
        res.status(200).json({
            status:200,
            message:"OK",
            todo
        })
        

    }catch(error){
        console.error(`${error}`)
        res.status(500).json({
            status:500,
            message:"Internal Server Error"
        })
    }
    
}

const addTodo = async () => {
    
}

const updateTodo = async () => {
    
}

const deleteTodo = async () => {
    
}

export {getTodos , getTodo , addTodo , updateTodo , deleteTodo}