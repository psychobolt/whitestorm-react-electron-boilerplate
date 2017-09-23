import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { appReducers } from './App/index';
import { frameworkReducers } from './Framework';

export default combineReducers({
  ...appReducers,
  ...frameworkReducers,
  routing: routerReducer,
});
