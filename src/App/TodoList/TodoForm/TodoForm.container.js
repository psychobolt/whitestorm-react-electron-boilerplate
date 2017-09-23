// @flow
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import TodoForm from './TodoForm.component';
import { addTodo } from './TodoForm.actions';

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onValueSubmit: (value) => {
    if (value.trim()) {
      dispatch(addTodo(value));
    }
  },
});

export default connect(undefined, mapDispatchToProps)(TodoForm);
