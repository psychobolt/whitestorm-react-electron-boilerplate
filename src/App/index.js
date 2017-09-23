import { reducers as todoReducers } from './TodoList';

export { default as initialState } from './App.state';
export { default } from './App.component';

export const appReducers = {
  ...todoReducers,
};
