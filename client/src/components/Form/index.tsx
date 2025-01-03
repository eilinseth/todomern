
const Form : React.FC = () => {
    return (
        <div className="absolute bottom-0 h-[18%] w-full mx-auto">
             
             <div className="fixed inset-0 z-10 top-0 left-0 right-0 bottom-0 bg-black/35">

             </div>

            
            <form className=" absolute left-1/2 transform -translate-x-1/2 h-full z-10 bg-white p-2 rounded-tl-2xl rounded-tr-2xl w-[80%] ">
                <input type="text" className="w-full text-black text-sm py-2 px-4 rounded-xl" placeholder="Input here..." />
                <div className="text-center ">
                    <button className="text-sm font-bold bg-green-600 w-[40%] rounded-full p-1 mt-4 text-white">Submit</button>
                </div>
            </form>
        
        </div>
    )
}

export default Form