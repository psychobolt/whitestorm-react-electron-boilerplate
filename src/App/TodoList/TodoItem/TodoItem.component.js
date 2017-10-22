// @flow
import React from 'react';

type Props = {
  onClick: () => void,
  completed: boolean,
  text: string,
  style: {}
}

const TodoItem = ({ onClick, completed, text, style }: Props) => (
  <x-box
    style={Object.assign(
      {},
      style,
      { textDecoration: completed ? 'line-through' : 'none' },
    )}
  >
    <x-checkbox onClick={onClick} toggled={completed || null} />
    <x-label for="checkbox">{text}</x-label>
  </x-box>
);

export default TodoItem;
