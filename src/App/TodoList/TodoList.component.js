// @flow
import React from 'react';
import styled from 'styled-components';

import TodoItem, { type Todo } from './TodoItem';
import * as styles from './TodoList.style';

type Props = {
  todos: Todo[],
  onTodoClick: (id: number) => void,
  children: any,
  className: string,
}

const List = styled.ul`${styles.ul}`;

const Item = styled(TodoItem)`${styles.li}`;

export default ({ todos, onTodoClick, children, className }: Props) => (
  <x-card class={className}>
    {children}
    <List>
      {todos.length ? todos.map(todo => (
        <li key={todo.id}>
          <Item
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        </li>
      )) : (
        <x-label>
          {'No items'}
        </x-label>
      )}
    </List>
  </x-card>
);
