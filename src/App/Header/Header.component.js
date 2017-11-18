// @flow
import React from 'react';

import { XTab } from 'Framework/ReactXelToolkit';
import { RouteLink } from 'Framework/ReactRouterHelpers';

type Props = {
  centered: boolean,
  style: {},
};

/* eslint jsx-a11y/anchor-is-valid: 0 */
const Header = ({ centered, style = {} }: Props) => (
  <x-tabs style={style} centered={centered || null}>
    <RouteLink to={[{ to: '/' }, { to: '/box', default: true }]}>
      <XTab>Box</XTab>
    </RouteLink>
    <RouteLink to="/sphere">
      <XTab>Sphere</XTab>
    </RouteLink>
  </x-tabs>
);

export default Header;
