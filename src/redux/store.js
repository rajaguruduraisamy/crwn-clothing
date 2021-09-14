import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { reducers } from './reducers';

const middlewares = [logger];
export const store = createStore(reducers, applyMiddleware(...middlewares));
