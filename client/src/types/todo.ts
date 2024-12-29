interface Todo {
  _id: string;
  title: string;
  status: 'completed' | 'uncompleted';
  createdAt: string;
  updatedAt: string;
  __V: number;
}

export interface Todos {
  todos: Todo[];
}

export interface GetTodoResult {
  todo: Todo;
}

export interface TodoBody {
  title: string;
  status?: 'completed' | 'uncompleted';
}
