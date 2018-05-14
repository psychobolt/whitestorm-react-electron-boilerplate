// @flow
import React from 'react';
import type { Match } from 'react-router-dom';
import styled from 'styled-components';

import TodoList, { TodoForm, TodoFilter, Filters } from './TodoList';
import * as styles from './App.style';

const Container = styled.div`${styles.container}`;
const List = TodoList.extend`${styles.todoList}`;
const Form = TodoForm.extend`${styles.todoForm}`;
const Filter = TodoFilter.extend`${styles.todoFilter}`;

const App = ({ match }: { match: Match }) => (
  <Container>
    <Form />
    <List filter={match.params.filter || Filters.ALL}>
      <Filter centered />
    </List>
  </Container>
);

export default App;
