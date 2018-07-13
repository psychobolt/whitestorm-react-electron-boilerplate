// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  active?: boolean,
  onClick: Function,
  children: any
};

export const XTab = ({ active, onClick, children }: Props) => (
  <x-tab
    onClick={onClick}
    selected={active || null}
  >
    <x-label>
      {children}
    </x-label>
  </x-tab>
);

XTab.defaultProps = {
  active: false,
};

export default styled(XTab)`
  /* stylelint-disable-line block-no-empty */
`;
