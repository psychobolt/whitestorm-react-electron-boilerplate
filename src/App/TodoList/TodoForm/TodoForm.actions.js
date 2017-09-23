let nextTodoId = 0;

export const Actions = {
  ADD_TODO: 'addTodo',
};

export const addTodo = text => ({
  type: Actions.ADD_TODO,
  todo: {
    id: nextTodoId++, // eslint-disable-line no-plusplus
    text,
  },
});
