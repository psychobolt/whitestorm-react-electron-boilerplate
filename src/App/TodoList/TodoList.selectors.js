import { createSelector } from 'reselect';

import { Filters } from './TodoFilter';

const getTodos = state => state.todos.present;

const getFilter = (state, { filter }) => filter;

export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    switch (filter) {
      case Filters.COMPLETED:
        return todos.filter(t => t.completed);
      case Filters.ACTIVE:
        return todos.filter(t => !t.completed);
      case Filters.ALL:
      default:
        return todos;
    }
  },
);
