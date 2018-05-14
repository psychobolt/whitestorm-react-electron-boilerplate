// @flow
import React from 'react';
import styled from 'styled-components';

import * as styles from './TodoItem.style';

type Props = {
  onClick: () => void,
  completed: boolean,
  text: string,
  className: string
}

const TodoItem = ({ onClick, completed, text, className }: Props) => (
  <x-box class={className} completed={completed || null}>
    <x-checkbox onClick={onClick} toggled={completed || null} />
    <x-label for="checkbox">{text}</x-label>
  </x-box>
);

export default styled(TodoItem)`${styles.box}`;
