// @flow
import React from 'react';
import styled from 'styled-components';

import { XTab } from 'Framework/ReactXelToolkit';
import { RouteLink } from 'Framework/ReactRouterHelpers';

type Props = {
  centered: boolean,
  className: string
};

/* eslint jsx-a11y/anchor-is-valid: 0 */
const Header = ({ centered, className }: Props) => (
  <x-tabs class={className} centered={centered || null}>
    <RouteLink to={[{ to: '/' }, { to: '/box', default: true }]}>
      {({ match, onClick }) => (
        <XTab onClick={onClick} active={match ? true : null}>
          {'Box'}
        </XTab>
      )}
    </RouteLink>
    <RouteLink to="/sphere">
      {({ match, onClick }) => (
        <XTab onClick={onClick} active={match ? true : null}>
          {'Sphere'}
        </XTab>
      )}
    </RouteLink>
  </x-tabs>
);

export default styled(Header)`
  /* stylelint-disable-line block-no-empty */
`;
