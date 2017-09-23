// @flow
import React from 'react';

const TodoFilterLink = (
  { active, goto, children }: {active?: boolean, goto: Function, children: any },
) => (
  <x-tab
    onClick={goto}
    selected={active || null}
  >
    <x-label>{children}</x-label>
  </x-tab>
);

TodoFilterLink.defaultProps = {
  active: false,
};

export default TodoFilterLink;
