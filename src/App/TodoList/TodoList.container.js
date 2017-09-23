// @flow
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';

import TodoList from './TodoList.component';
import { toggleTodo } from './TodoList.actions';
import type { TodoListState } from './TodoList.state';
import { Filters } from './TodoFilter';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Filters.COMPLETED:
      return todos.filter(t => t.completed);
    case Filters.ACTIVE:
      return todos.filter(t => !t.completed);
    case Filters.ALL:
    default:
      return todos;
  }
};

type Props = {
  filter: string
};

export const mapStateToProps = (state: TodoListState, ownProps: Props) => ({
  todos: getVisibleTodos(state.todos, ownProps.filter),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onTodoClick: id => {
    dispatch(toggleTodo(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
