// @flow
import React from 'react';

import TodoFilterLink from './TodoFilterLink';
import Filters from './TodoFilter.filters';

type Props = {
  centered: boolean,
  className: string
};

export default ({ centered, className }: Props) => (
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
