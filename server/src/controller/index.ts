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

const addTodo = async (req:Request,res:Response):Promise<void> => {
    try{
       const body : Pick<Todo, 'title' | 'status'> = req.body

       if(!body.title || !body.status){
        res.status(400).json({
            status : 400 ,
            message : "data invalid , Bad request"
        })
        return
       }

       const newTodo = new TodoModel({
        title:body.title,
        status:body.status
       })

       await newTodo.save()

       res.status(200).json({
        status : 200,
        message : "OK",
        added : newTodo,
       })
    }catch(error){
        console.error(`${error}`)
        res.status(500).json({
            status : 500,
            message : error.message
        })
    }
}

const updateTodo = async (req:Request,res:Response):Promise<void> => {
    try{
        const {params:{id},body} = req
        
        if(!body.title || !body.status || !id){
            res.status(401).json({
                status:401,
                message:"Data invalid , Unauthorized"
            })
            return
        }
        const updatedTodo = new TodoModel({
            title : body.title,
            status :body.status
        })

        await TodoModel.findByIdAndUpdate({_id:id},body)
        const todos = await TodoModel.find()
        if(!updatedTodo){
            res.status(501).json({
                status:501,
                message : "Update failed , Not implemented"
            })
            return
        }
        res.status(200).json({
            status : 200 ,
            message:"OK",
            updatedTodos : todos
        })
    }catch(error){
        console.error(`${error}`)
        res.status(500).json({
            status : 500,
            message : "Internal Server Error"
        })
    }
}

const deleteTodo = async (req:Request,res:Response):Promise<void> => {
    try{
        const {id} = req.params;
        if(!id){
            res.status(404).json({
                status:404,
                message:"Id not Found"
            })
            return
        }
        const deletedTodo = await TodoModel.findByIdAndDelete({_id:id})
        const updatedTodos= await TodoModel.find()
        
        res.status(200).json({
            status:200,
            message: "Delete Success",
            deletedTodo,
            updatedTodos
        })
    }catch(error){
        console.error(`${error}`)
        res.status(500).json({
            status:500,
            message:"Internal Server Error"
        })
    }
}

export {getTodos , getTodo , addTodo , updateTodo , deleteTodo}