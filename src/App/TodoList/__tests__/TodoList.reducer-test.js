import { addTodo } from '../TodoForm';
import reducer from '../TodoList.reducer';
import initialState from '../TodoList.state';
import { toggleTodo } from '../TodoList.actions';

describe('TodoList reducer', () => {
  it('should return default state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should add todo', () => {
    const action = addTodo('Item');
    expect(reducer(undefined, action)).toEqual([{
      ...action.payload,
      completed: false,
    }]);
  });

  it('should toggle todo', () => {
    const id = 0;
    const action = toggleTodo(id);
    const activeItem = {
      id,
      text: 'Item 1',
      completed: false,
    };
    const completedItem = {
      id: 1,
      text: 'Item 2',
      completed: true,
    };
    expect(reducer([activeItem, completedItem], action)).toEqual([{
      ...activeItem,
      completed: !activeItem.completed,
    }, completedItem]);
  });
});
