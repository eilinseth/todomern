import React from "react";
import { getTodos } from "../../api/getTodos";


const TaskCard : React.FC = () => {
    return (
        <div className="my-5 pb-5 px-2 flex flex-col overflow-y-auto gap-4 h-screen scroll-smooth">
            <div className="w-full p-3 rounded-xl bg-white">
                <p className="text-2xl text-gray-800">Ini Adalah Todo List</p>
            </div>
            <div className="w-full p-3 rounded-xl bg-white">
                <p className="text-2xl text-gray-800">Ini Adalah Todo List</p>
            </div>
            <div className="w-full p-3 rounded-xl bg-white">
                <p className="text-2xl text-gray-800">Ini Adalah Todo List</p>
            </div>
            <div className="w-full p-3 rounded-xl bg-white">
                <p className="text-2xl text-gray-800">Ini Adalah Todo List</p>
            </div>
            <div className="w-full p-3 rounded-xl bg-white">
                <p className="text-2xl text-gray-800">Ini Adalah Todo List</p>
            </div>
            <div className="w-full p-3 rounded-xl bg-white">
                <p className="text-2xl text-gray-800">Ini Adalah Todo List</p>
            </div>
            <div className="w-full p-3 rounded-xl bg-white">
                <p className="text-2xl text-gray-800">Ini Adalah Todo List</p>
            </div>
            <div className="w-full p-3 rounded-xl bg-white">
                <p className="text-2xl text-gray-800">Ini Adalah Todo List</p>
            </div>
            <div className="w-full p-3 rounded-xl bg-white">
                <p className="text-2xl text-gray-800">Ini Adalah Todo List</p>
            </div>
            <div className="w-full p-3 rounded-xl bg-white">
                <p className="text-2xl text-gray-800">Ini Adalah Todo List</p>
            </div>
        </div>
    )
}
export default TaskCard
