// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { type History } from 'history';

import App from './App';

type Props = {
  store: {},
  history: History,
};

const Routes = ({ store, history }: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Routes;
