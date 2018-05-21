import { getVisibleTodos } from '../TodoList.selectors';
import { Filters } from '../TodoFilter';

const completedTodo = {
  id: 0,
  text: 'Completed Item',
  completed: true,
};
const activeTodo = {
  id: 1,
  text: 'Active Item',
  completed: false,
};
const todos = { present: [completedTodo, activeTodo] };

describe('TodoList selectors', () => {
  it('getVisibleTodos -- completed', () => {
    expect(getVisibleTodos({ todos }, { filter: Filters.COMPLETED }))
      .toEqual([completedTodo]);
  });

  it('getVisibleTodos -- active', () => {
    expect(getVisibleTodos({ todos }, { filter: Filters.ACTIVE }))
      .toEqual([activeTodo]);
  });

  it('getVisibleTodos -- all', () => {
    expect(getVisibleTodos({ todos }, { filter: Filters.ALL }))
      .toEqual(todos.present);
  });
});
