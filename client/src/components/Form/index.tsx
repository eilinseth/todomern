import React from "react"
import {useForm,SubmitHandler} from "react-hook-form"
import { TodoBody } from "../../types/todo"
import {useQueryClient,useMutation} from "react-query"
import { addTodo } from "../../api/addTodo"

interface prop {
    open : () => void
}



const Form : React.FC<prop> = ({open}) => {
    const {register,handleSubmit,formState:{error}} = useForm<TodoBody>()
    const query = useQueryClient()
    const mutation = useMutation(addTodo,{
        onSuccess : () => {
            query.invalidateQueries('todos')
        },
        onError : (error) => {
            console.error(`${error}`)
        }

    })


    return (
        <div className="absolute bottom-0 h-[25%] w-full mx-auto">
             
             <div  onClick={open} className="fixed inset-0 z-10 top-0 left-0 right-0 bottom-0 bg-black/35">

             </div>

            
            <form className=" absolute left-1/2 transform -translate-x-1/2 h-full z-10 bg-white px-4 pt-6 rounded-tl-2xl rounded-tr-2xl w-[90%] ">
                <button onClick={open} className="absolute right-2 px-3 pb-1 text-2xl top-2 bg-red-500 rounded-full text-white">x</button>
                <input type="text" className="w-full text-black text-sm py-2 px-4 rounded-xl" placeholder="Input here..." />
                <div className="text-center ">
                    <button className="text-sm font-bold bg-green-600 w-[40%] rounded-full p-1 mt-12 text-white">Submit</button>
                </div>
            </form>
        
        </div>
    )
}

export default Form