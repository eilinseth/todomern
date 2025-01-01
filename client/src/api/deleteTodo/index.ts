import axios from "axios"

export const deleteTodo = async(id:string) : Promise<void> => {
    try {
        await axios.delete(`http:localhost:8080/api/${id}`)
    } catch (error) {
        throw new Error(`${error}`)
    }
}