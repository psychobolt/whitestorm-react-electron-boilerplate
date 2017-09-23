import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export default function configureStore(reducer, initialState, middlewares) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
}
