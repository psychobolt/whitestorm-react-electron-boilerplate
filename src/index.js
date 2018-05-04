import 'globals';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import { forwardToMain, replayActionRenderer } from 'electron-redux';
import { createHashHistory } from 'history';

import { initialState } from './App';
import reducer from './reducer';
import configureStore from './shared/store';
import Routes from './routes';

const history = createHashHistory();
const store = configureStore(reducer, initialState, [
  forwardToMain,
  routerMiddleware(history),
]);

replayActionRenderer(store);

ReactDOM.render(
  <Provider store={store}><Routes history={history} /></Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./reducer', () => {
    store.replaceReducer(require('./reducer').default); // eslint-disable-line global-require
  });
}
