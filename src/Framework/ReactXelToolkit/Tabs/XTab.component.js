// @flow
import React from 'react';

const XTab = (
  { active, goto, children }: {active?: boolean, goto: Function, children: any },
) => (
  <x-tab
    onClick={goto}
    selected={active || null}
  >
    <x-label>{children}</x-label>
  </x-tab>
);

XTab.defaultProps = {
  active: false,
};

export default XTab;
