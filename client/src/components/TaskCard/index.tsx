import React from "react";
// import { getTodos } from "../../api/getTodos";
import ChecklistSvgComponent from "../../assets/svg/checklist";
import TrashSvgComponent from "../../assets/svg/trash";


const TaskCard : React.FC = () => {
    return (
        <div className="h-[80%] w-full overflow-y-auto mt-2 px-2">
            <div className="flex flex-col gap-4 ">
                <div className="flex p-3 bg-white rounded-xl justify-between">
                    <p className="text-black text-xl">Ini Adalah Todo List</p>
                    <div className="flex gap-4">
                        <button className="text-green-500"><ChecklistSvgComponent/></button>
                        <button className="text-red-500"><TrashSvgComponent/></button>
                    </div>
                </div>
                <div className="flex p-3 bg-white rounded-xl justify-between">
                    <p className="text-black text-xl">Ini Adalah Todo List</p>
                    <div className="flex gap-4">
                        <button className="text-green-500"><ChecklistSvgComponent/></button>
                        <button className="text-red-500"><TrashSvgComponent/></button>
                    </div>
                </div>
                <div className="flex p-3 bg-white rounded-xl justify-between">
                    <p className="text-black text-xl">Ini Adalah Todo List</p>
                    <div className="flex gap-4">
                        <button className="text-green-500"><ChecklistSvgComponent/></button>
                        <button className="text-red-500"><TrashSvgComponent/></button>
                    </div>
                </div>
                <div className="flex p-3 bg-white rounded-xl justify-between">
                    <p className="text-black text-xl">Ini Adalah Todo List</p>
                    <div className="flex gap-4">
                        <button className="text-green-500"><ChecklistSvgComponent/></button>
                        <button className="text-red-500"><TrashSvgComponent/></button>
                    </div>
                </div>
                <div className="flex p-3 bg-white rounded-xl justify-between">
                    <p className="text-black text-xl">Ini Adalah Todo List</p>
                    <div className="flex gap-4">
                        <button className="text-green-500"><ChecklistSvgComponent/></button>
                        <button className="text-red-500"><TrashSvgComponent/></button>
                    </div>
                </div>
                <div className="flex p-3 bg-white rounded-xl justify-between">
                    <p className="text-black text-xl">Ini Adalah Todo List</p>
                    <div className="flex gap-4">
                        <button className="text-green-500"><ChecklistSvgComponent/></button>
                        <button className="text-red-500"><TrashSvgComponent/></button>
                    </div>
                </div>
                <div className="flex p-3 bg-white rounded-xl justify-between">
                    <p className="text-black text-xl">Ini Adalah Todo List</p>
                    <div className="flex gap-4">
                        <button className="text-green-500"><ChecklistSvgComponent/></button>
                        <button className="text-red-500"><TrashSvgComponent/></button>
                    </div>
                </div>
                <div className="flex p-3 bg-white rounded-xl justify-between">
                    <p className="text-black text-xl">Ini Adalah Todo List</p>
                    <div className="flex gap-4">
                        <button className="text-green-500"><ChecklistSvgComponent/></button>
                        <button className="text-red-500"><TrashSvgComponent/></button>
                    </div>
                </div>
                <div className="flex p-3 bg-white rounded-xl justify-between">
                    <p className="text-black text-xl">Ini Adalah Todo List</p>
                    <div className="flex gap-4">
                        <button className="text-green-500"><ChecklistSvgComponent/></button>
                        <button className="text-red-500"><TrashSvgComponent/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaskCard
