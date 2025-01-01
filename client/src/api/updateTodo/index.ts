import axios from 'axios';
import { TodoBody } from '../../types/todo';
import { getTodo } from '../getTodo';
import { TodoStatus } from '../../enum';

export const updateTodo = async (id: string): Promise<void> => {
  try {
    const getTodoRes = await getTodo(id);
    if (!getTodoRes) {
      console.log(`Data not found`);
      return;
    }

    const todoData = getTodoRes.data.todo;
    const body: TodoBody = {
      title: todoData.title,
    };
    body.status =
      todoData.status === TodoStatus.completed ? 'uncompleted' : 'completed';
    await axios.put(`http:localhost:8080/api/${id}`, body);
  } catch (error) {
    throw new Error(`${error}`);
  }
};
