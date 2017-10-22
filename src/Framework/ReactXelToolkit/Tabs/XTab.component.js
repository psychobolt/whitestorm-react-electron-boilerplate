// @flow
import React from 'react';

type Props = {
  active?: boolean,
  onClick: Function,
  children: any
};

const XTab = ({ active, onClick, children }: Props) => (
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
