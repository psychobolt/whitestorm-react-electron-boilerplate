export const Actions = {
  TOGGLE_TODO: 'toggleTodo',
  UNDO_TODO: 'undoTodo',
  REDO_TODO: 'redoTodo',
};

export const toggleTodo = id => ({
  type: Actions.TOGGLE_TODO,
  payload: { id },
});

export const undoTodo = () => ({ type: Actions.UNDO_TODO });
export const redoTodo = () => ({ type: Actions.REDO_TODO });
