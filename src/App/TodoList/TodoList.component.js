// @flow
import React from 'react';

import TodoItem, { type Todo } from './TodoItem';
import styles from './TodoList.style';

type Props = {
  todos: Todo[],
  onTodoClick: (id: number) => void,
  children: any,
  style: {},
}

const TodoList = ({ todos, onTodoClick, children, style = {} }: Props) => (
  <x-card style={style}>
    {children}
    <ul style={styles.ul}>
      {todos.length ? todos.map(todo => (
        <li key={todo.id}>
          <TodoItem
            style={styles.li}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        </li>
      )) : <x-label>No items</x-label>}
    </ul>
  </x-card>
);

export default TodoList;
