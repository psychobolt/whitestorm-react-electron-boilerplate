import { Actions, undoTodo, redoTodo } from '../TodoList.actions';

describe('TodoList actions', () => {
  it('undo action creator should match type', () => {
    expect(undoTodo()).toEqual({ type: Actions.UNDO_TODO });
  });

  it('redo action creator should match type', () => {
    expect(redoTodo()).toEqual({ type: Actions.REDO_TODO });
  });
});
