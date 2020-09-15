import { rootReducer } from './root.reducer';
import { saga, rootSaga } from './root.saga';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
export let store = createStore(rootReducer, applyMiddleware(logger, saga));

if (process.env.NODE_ENV === 'development') {
  const { composeWithDevTools } = require('redux-devtools-extension');
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, saga)));
}

saga.run(rootSaga);