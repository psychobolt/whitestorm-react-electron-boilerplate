// @flow
import type { Todo } from './TodoItem';

export type TodoListState = {
  todos: {
    past: Array<Todo[]>,
    present: Todo[],
    future: Array<Todo[]>
  }
};

const initialState: TodoListState = {
  todos: {
    past: [],
    present: [],
    future: [],
  },
};

export default initialState;
