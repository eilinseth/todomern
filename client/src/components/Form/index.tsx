import React from "react"
import {useForm,SubmitHandler} from "react-hook-form"
import { TodoBody } from "../../types/todo"
import {useQueryClient,useMutation} from "react-query"
import { addTodo } from "../../api/addTodo"

interface prop {
    open : () => void
}



const Form : React.FC<prop> = ({open}) => {
    const {register,handleSubmit,formState:{errors}} = useForm<TodoBody>()
    const query = useQueryClient()
    const mutation = useMutation(addTodo,{
        onSuccess : () => {
            query.invalidateQueries('todos')
        },
        onError : (error) => {
            console.error(`${error}`)
        }

    })

    const onSubmit : SubmitHandler<TodoBody> = (data) =>{
        const newData = {...data}
        newData.status = "uncompleted"
        mutation.mutate(newData)
        
    }


    return (
        <div className="absolute bottom-0 h-[25%] w-full mx-auto">
             
             <div  onClick={open} className="fixed inset-0 z-10 top-0 left-0 right-0 bottom-0 bg-black/35">

             </div>

            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 absolute left-1/2 transform -translate-x-1/2 h-full z-10 bg-white px-4 pt-6 rounded-tl-2xl rounded-tr-2xl w-screen ">
                <button onClick={open} className="absolute -right-2 px-3 pb-1 text-lg -top-2 bg-red-500 rounded-full text-white">x</button>
                <input type="text" className="w-full text-black text-sm py-1 px-4 rounded-xl" placeholder="Input here..." 
                {...register('title',{
                    required:"Title is required",
                    maxLength:{value:30,message:"Max 30 Character"},
                    minLength:{value:5,message:"Min 5 character"},
                })}
                />
                {errors.title && <p className="text-red-600 text-sm font-bold text-center">{errors.title.message}</p> }
                <div className="text-center ">
                    <button className="text-xs font-bold bg-green-600 w-[40%] rounded-full p-1 text-white">Submit</button>
                </div>
            </form>
        
        </div>
    )
}

export default Form