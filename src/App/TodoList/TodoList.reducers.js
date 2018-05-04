import undoable from 'redux-undo';

import { Actions as TodoListActions } from './TodoList.actions';
import initialState from './TodoList.state';
import { Actions as TodoFormActions } from './TodoForm';

export const todosReducer = (state = initialState.todos.present, action) => {
  switch (action.type) {
    case TodoFormActions.ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case TodoListActions.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
};

export default {
  todos: undoable(todosReducer, {
    undoType: TodoListActions.UNDO_TODO,
    redoType: TodoListActions.REDO_TODO,
  }),
};
