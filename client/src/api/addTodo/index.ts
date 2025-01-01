import axios from "axios"
import { TodoBody } from "../../types/todo"

export const addTodo = async (data:TodoBody) : Promise<void> => {
    try {
        
        await axios.post(`http://localhost:8080/api`,data,{
            headers : {
                "Content-Type" : "application/json"
            }
        })
        
    }catch (error) {
        throw new Error(`${error}`)
    }
}