import 'globals';
import React from 'react';
import { render } from 'react-dom';
import { routerMiddleware } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { createHashHistory } from 'history';

import { initialState } from './App/index';
import reducer from './reducer';
import configureStore from './Shared/store';
import Routes from './routes';

let props;
if (module.hot && module.hot.data) {
  props = {
    store: module.hot.data.store,
    history: module.hot.data.history,
  };
} else {
  props = {
    store: configureStore(reducer, initialState, [
      routerMiddleware(history),
    ]),
    history: createHashHistory(),
  };
}

render(
  <AppContainer><Routes {...props} /></AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(data => {
    props.store.replaceReducer(reducer);
    Object.assign(data, props);
  });
}
