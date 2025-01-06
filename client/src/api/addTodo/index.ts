import axios from 'axios';
import { TodoBody } from '../../types/todo';

export const addTodo = async (data: TodoBody): Promise<void> => {
  try {
    await axios({
      method: 'POST',
      url: 'http://localhost:8080/api',
      data: data,
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};
