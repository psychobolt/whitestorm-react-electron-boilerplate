// @flow
import React from 'react';
import { Route } from 'react-router-dom';

import { XTab } from 'Framework/ReactXelToolkit';

type Path = {
  to: string,
  default: ?boolean
};

type Props = {
  to: string | Array<Path>,
  children: any,
};

const Link = ({ to, children }: Props) => {
  let route;
  let path;
  if (typeof to === 'string') {
    route = to;
    path = to;
  } else if (to && to.length) {
    route = (to.find(p => p.default) || to[0]).to;
    path = `(${to.map(p => p.to).reduce((prev, curr) => `${prev}|${curr}`)})`;
  } else {
    path = '';
    route = '';
  }
  return (
    <Route
      path={path}
      children={({ match, history }) => ( // eslint-disable-line react/no-children-prop
        <XTab active={match ? true : null} onClick={() => !match && history.push(route)}>
          {children}
        </XTab>
      )}
    />
  );
};

export default Link;
