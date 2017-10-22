import initialState from './TodoList.state';
import { Actions as TodoListActions } from './TodoList.actions';
import { Actions as TodoFormActions } from './TodoForm';

export default (state = initialState, action) => {
  switch (action.type) {
    case TodoFormActions.ADD_TODO:
      return [
        ...state,
        {
          id: action.todo.id,
          text: action.todo.text,
          completed: false,
        },
      ];
    case TodoListActions.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.todoId ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
};
