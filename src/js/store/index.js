import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import reducers from './reducers';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

export default store;
