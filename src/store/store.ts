import { routerMiddleware } from 'react-router-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { createHashHistory } from 'history';
import { StateType } from 'typesafe-actions';
import { counter } from './reducers';

export const history = createHashHistory();
const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

const reducer = combineReducers({
  router: connectRouter(history),
  counter,
});

const createStore = (preloadedState?: StateType<typeof reducer>) =>
  configureStore({ reducer, middleware, preloadedState });

export type State = StateType<ReturnType<typeof combineReducers>>;
export type Store = ReturnType<typeof createStore>;
export default createStore();
