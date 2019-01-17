import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import appReducers from './App/App.reducers';
import { frameworkReducers } from './Framework';

export default history => combineReducers({
  ...appReducers,
  ...frameworkReducers,
  router: connectRouter(history),
});
