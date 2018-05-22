import { combineReducers } from 'redux';

import reducers from '../App.reducers';
import state from '../App.state';

it('App reducers should generate default state', () => {
  expect(combineReducers(reducers)(undefined, {})).toEqual(state);
});
