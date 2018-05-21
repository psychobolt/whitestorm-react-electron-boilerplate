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
    _latestUnfiltered: [],
    group: null,
    limit: 1,
    index: 0,
  },
};

export default initialState;
