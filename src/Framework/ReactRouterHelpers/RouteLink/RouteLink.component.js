// @flow
import * as React from 'react';
import { Route } from 'react-router-dom';

type Path = {
  to: string,
  default: ?boolean
};

type ChildrenProps = {
  match: boolean,
  onClick: () => void
};

type Props = {
  to: string | Array<Path>,
  children: (props: ChildrenProps) => React.Node,
};

export default ({ to, children }: Props) => {
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
      children={({ match, history }) => children({ // eslint-disable-line react/no-children-prop
        match, onClick: () => !match && history.push(route),
      })}
    />
  );
};
