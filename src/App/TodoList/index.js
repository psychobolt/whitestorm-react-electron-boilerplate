import todoListReducer from './TodoList.reducer';

export { default as TodoFilter, Filters } from './TodoFilter';
export { default as TodoForm } from './TodoForm';
export { default } from './TodoList.container';

export const reducers = {
  todos: todoListReducer,
};
