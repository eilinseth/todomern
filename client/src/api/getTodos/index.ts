import axios from 'axios';
import { Todos } from '../../types/todo';

export const getTodos = async (): Promise<Todos> => {
  try {
    const res = await axios.get('http://localhost:8080/api');

    return res.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
