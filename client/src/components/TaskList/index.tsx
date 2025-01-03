import React, { ReactNode } from 'react';

interface TaskListProp {
  children: ReactNode;
}

const TaskList: React.FC<TaskListProp> = ({ children }) => {
  return (
    <div className="mx-auto text-4xl bg-navy h-screen w-[70%] relative box-border">
      <h1 className="text-center text-brightGray py-4">To do List</h1>
      {children}
    </div>
  );
};
export default TaskList;
