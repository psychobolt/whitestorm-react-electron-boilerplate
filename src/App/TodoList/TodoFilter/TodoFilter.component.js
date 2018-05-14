// @flow
import React from 'react';
import styled from 'styled-components';

import TodoFilterLink from './TodoFilterLink';
import Filters from './TodoFilter.filters';

type Props = {
  centered: boolean,
  className: string
};

const TodoFilter = ({ centered, className }: Props) => (
  <x-tabs class={className} centered={centered || null}>
    <TodoFilterLink filter={Filters.ALL}>
      All
    </TodoFilterLink>
    <TodoFilterLink filter={Filters.ACTIVE}>
      Active
    </TodoFilterLink>
    <TodoFilterLink filter={Filters.COMPLETED}>
      Completed
    </TodoFilterLink>
  </x-tabs>
);

export default styled(TodoFilter)``;
