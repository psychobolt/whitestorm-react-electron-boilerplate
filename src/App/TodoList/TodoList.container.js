// @flow
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';

import TodoList from './TodoList.component';
import { toggleTodo } from './TodoList.actions';
import { getVisibleTodos } from './TodoList.selectors';
import type { TodoListState } from './TodoList.state';

type Props = {
  filter: string
};

export const mapStateToProps = (state: TodoListState, props: Props) => ({
  todos: getVisibleTodos(state, props),
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
