import React, { ReactNode } from 'react';

interface TaskListProp {
  children: ReactNode;
}

const TaskList: React.FC<TaskListProp> = ({ children }) => {
  return (
    <div className="container mx-auto text-4xl bg-navy px-4 h-screen max-w-[70%] ">
      <h1 className="text-center text-brightGray py-4">To do List</h1>
      {children}
    </div>
  );
};
export default TaskList;
