// @flow
import type { Todo } from './TodoItem';

export type TodoListState = {
  todos: {
    past: Array<Todo[]>,
    present: Todo[],
    future: Array<Todo[]>
  }
};

export default {};
