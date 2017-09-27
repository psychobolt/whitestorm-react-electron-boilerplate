// @flow
import React from 'react';

const XTab = (
  { active, onClick, children }: {active?: boolean, onClick: Function, children: any },
) => (
  <x-tab
    onClick={onClick}
    selected={active || null}
  >
    <x-label>{children}</x-label>
  </x-tab>
);

XTab.defaultProps = {
  active: false,
};

export default XTab;
