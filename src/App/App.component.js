// @flow
import React from 'react';
import type { Match } from 'react-router-dom';

import TodoList, { TodoForm, TodoFilter, Filters } from './TodoList';
import styles from './App.style';

const App = ({ match }: { match: Match }) => (
  <div style={styles.container}>
    <TodoForm style={styles.todoForm} />
    <TodoList style={styles.todoList} filter={match.params.filter || Filters.ALL}>
      <TodoFilter style={styles.todoFilter} centered />
    </TodoList>
  </div>
);

export default App;
