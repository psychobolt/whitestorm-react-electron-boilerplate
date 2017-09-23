// @flow
import React from 'react';

import TodoFilterLink from './TodoFilterLink';
import Filters from './TodoFilter.filters';

type Props = {
  centered: boolean,
  style: {},
};

const TodoFilter = ({ centered, style = {} }: Props) => (
  <x-tabs style={style} centered={centered || null}>
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

export default TodoFilter;
