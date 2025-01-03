import React from "react";

const DeleteBox : React.FC = () =>{
    return(
            <>
            <div className="fixed z-10 inset-0 top-0 left-0 right-0 bottom-0 bg-black/45">

            </div>
            <div className="absolute z-10 top-1/2 left-1/2 transform rounded-xl -translate-x-1/2 -translate-y-1/2 bg-white text-black w-[90%] h-[20%] p-4 ">
                <p className="text-xl">Delete This Task ?</p>
                <div className="text-center">
                <button className="mt-6 w-[70%] text-xl bg-red-700 text-white rounded-xl">Delete</button>

                </div>
            </div>
            </>
            
    )
}

export default DeleteBox