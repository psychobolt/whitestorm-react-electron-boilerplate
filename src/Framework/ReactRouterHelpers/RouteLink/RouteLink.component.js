// @flow
import React from 'react';
import { Route } from 'react-router-dom';

type Path = {
  to: string,
  default: ?boolean
};

type Props = {
  to: string | Array<Path>,
  children: any,
  selectedProp: string
};

export default ({ to, selectedProp = 'active', children }: Props) => {
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
      children={({ match, history }) => // eslint-disable-line react/no-children-prop
        React.Children.map(children, child => {
          const { onClick, ...rest } = child.props;
          return React.cloneElement(child, {
            [selectedProp]: match ? true : null,
            onClick: (event: SyntheticEvent<*>) =>
              ((onClick && onClick(event)) || true) && (!match && history.push(route)),
            ...rest,
          });
        })}
    />
  );
};
