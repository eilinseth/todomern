import React, { useState } from 'react';
// import { getTodos } from "../../api/getTodos";
import ChecklistSvgComponent from '../../assets/svg/checklist';
import TrashSvgComponent from '../../assets/svg/trash';
import { Todos } from '../../types/todo';
import classnames from "classnames"

interface Prop {
  todos: Todos | undefined ;
}



const TaskCard: React.FC<Prop> = ({ todos }) => {
    const [isChecked , setIsChecked] = useState(false)
    console.log(isChecked)

    
  if (!todos)
    return (
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-brightGray text-2xl font-bold">
        Loading ...
      </p>
    );
    
  return (
    <div className="h-[80%] w-full overflow-y-auto mt-2 px-2">
      <div className="flex flex-col gap-4 ">
        {todos.data.map((todo, index) => (
          <div
            className={classnames("flex p-3 bg-white rounded-xl justify-between",{
                'bg-slate-400' : todo.status === "completed"
            })}
            key={index}
          >
            <p className={classnames("text-black text-xl",{
                'line-through' : todo.status === "completed"
            })}>{todo.title}</p>
            <div className="flex gap-4">
              <button className={classnames("text-green-500",{
                'text-slate-700' : todo.status === 'completed'
              })} onClick={() => {
                setIsChecked(!isChecked)}
                
              }>
                <ChecklistSvgComponent />
              </button>
              <button className="text-red-500">
                <TrashSvgComponent />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TaskCard;
