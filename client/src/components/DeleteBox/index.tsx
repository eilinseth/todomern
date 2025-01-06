import  {useMutation,useQueryClient} from "react-query"
import { deleteTodo } from "../../api/deleteTodo";

import React from "react";
interface Prop {
    open : () => void
    id : string
}

const DeleteBox : React.FC<Prop> = ({open,id}) =>{
    const queryCliet = useQueryClient()
    const mutation = useMutation(deleteTodo,{
        onSuccess : () => {
            console.log(`Deleted`)
            queryCliet.invalidateQueries('todos')
        },
        onError : (error) => {
            console.error(error)
        }
    })
    function deleteId(id:string){
        mutation.mutate(id)
        open()
    }

    return(
            <>
            <div className="fixed z-10 inset-0 top-0 left-0 right-0 bottom-0 bg-black/45" onClick={open}>

            </div>
            <div className="absolute z-10 top-1/2 left-1/2 transform rounded-xl -translate-x-1/2 -translate-y-1/2 bg-white text-black w-[90%] h-[20%] p-4 ">
            <button onClick={open} className="absolute right-1 top-1 text-xl px-3 pb-1 text-white bg-red-600 rounded-full">x</button>
                <p className="text-xl">Delete This Task ?</p>
                <div className="text-center">
                <button className="mt-6 w-[70%] text-xl bg-red-700 text-white rounded-xl" onClick={()=> deleteId(id)}>Delete</button>

                </div>
            </div>
            </>
            
    )
}

export default DeleteBox