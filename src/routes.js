// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { type History } from 'history';

import App from './App';

type Props = {
  history: History,
};

const Routes = ({ history }: Props) => (
  <ConnectedRouter history={history}>
    <Route path="/" component={App} />
  </ConnectedRouter>
);

export default Routes;
