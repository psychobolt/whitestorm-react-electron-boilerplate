import undoable from 'redux-undo';

import todoListReducer from './TodoList.reducer';
import { Actions } from './TodoList.actions';

export { default as TodoFilter, Filters } from './TodoFilter';
export { default as TodoForm } from './TodoForm';
export { default } from './TodoList.container';

export const reducers = {
  todos: undoable(todoListReducer, {
    undoType: Actions.UNDO_TODO,
    redoType: Actions.REDO_TODO,
  }),
};
