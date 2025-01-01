import axios, { AxiosResponse } from 'axios';
import { GetTodoResult } from '../../types/todo';

export const getTodo = async (
  id: string
): Promise<AxiosResponse<GetTodoResult>> => {
  try {
    const res = await axios.get(`http://localhost:8080/${id}`);
    
    return res;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
