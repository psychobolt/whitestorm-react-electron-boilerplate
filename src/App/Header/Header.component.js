// @flow
import React from 'react';

import Link from './Link';

type Props = {
  centered: boolean,
  style: {},
};

const Header = ({ centered, style = {} }: Props) => (
  <x-tabs style={style} centered={centered || null}>
    <Link to={[{ to: '/' }, { to: '/box', default: true }]}>
      Box
    </Link>
    <Link to="/sphere">
      Sphere
    </Link>
  </x-tabs>
);

export default Header;
