export const Actions = {
  TOGGLE_TODO: 'toggleTodo',
};

export const toggleTodo = id => ({
  type: Actions.TOGGLE_TODO,
  todoId: id,
});
