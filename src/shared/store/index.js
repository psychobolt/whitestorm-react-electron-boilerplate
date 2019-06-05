import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export default function configureStore(reducer, initialState, middlewares) {
  const defaultMiddlewares = [];
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares(defaultMiddlewares))),
  );
}
