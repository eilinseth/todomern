import React, { useState } from 'react';
import ChecklistSvgComponent from '../../assets/svg/checklist';
import TrashSvgComponent from '../../assets/svg/trash';
import { Todos } from '../../types/todo';
import classnames from 'classnames';
import { updateTodo } from '../../api/updateTodo';
import { useMutation, useQueryClient } from 'react-query';
import DeleteBox from '../DeleteBox';
import ClockSvgComponent from '../../assets/svg/clock';

interface Prop {
  todos: Todos | undefined;
  open : () => void
  isOpen : boolean
  loading:boolean
}

const TaskCard: React.FC<Prop> = ({ todos,open,isOpen ,loading}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const [taskId,setTaskId] = useState('')

  function idContainer(id:string){
    setTaskId(id)
    open()
  }

  if (!todos)
    return (
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-brightGray text-2xl font-bold">
        Loading ...
      </p>
    );

  return (
    <div className="h-[80%] w-full overflow-y-auto mt-2 px-2">
      <div className="flex flex-col gap-4 ">
        {todos?.data.map((todo) => (
          <div
            className={classnames(
              'flex p-3 bg-white rounded-xl justify-between',
              {
                'bg-slate-400': todo.status === 'completed',
              }
            )}
            key={todo._id}
          >
            <p
              className={classnames('text-black text-sm', {
                'line-through': todo.status === 'completed',
              })}
            >
              {todo.title}
            </p>
            <div className="flex gap-4">
              <button
                className={classnames('text-green-500', {
                  'text-slate-700': todo.status === 'completed',
                })}
                onClick={() => {
                  mutation.mutate(todo._id);
                }}
              >
                {loading === true ? <ClockSvgComponent/> : <ChecklistSvgComponent />}
              </button>
              <button className="text-red-500" onClick={() => idContainer(todo._id)}>
                <TrashSvgComponent  />
              </button>
              
              {isOpen && <DeleteBox open={open} id={taskId}/>}

            </div>
          </div>

        ))}
      </div>
    </div>
  );
};
export default TaskCard;
