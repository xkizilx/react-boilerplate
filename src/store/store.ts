import { routerMiddleware } from 'react-router-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { createHashHistory, History } from 'history';
import { StateType } from 'typesafe-actions';

function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
  });
}

export const history = createHashHistory();
const reducer = createRootReducer(history);
const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

const createStore = (preloadedState?: StateType<ReturnType<typeof createRootReducer>>) =>
  configureStore({ reducer, middleware, preloadedState });

export type Store = ReturnType<typeof createStore>;
export default createStore();
