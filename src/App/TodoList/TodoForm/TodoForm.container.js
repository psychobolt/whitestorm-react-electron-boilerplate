// @flow
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import styled from 'styled-components';

import TodoForm from './TodoForm.component';
import { addTodo } from './TodoForm.actions';

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onValueSubmit: value => {
    if (value.trim()) {
      dispatch(addTodo(value));
    }
  },
});

export default styled(connect(undefined, mapDispatchToProps)(TodoForm))``;
