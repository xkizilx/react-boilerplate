import { routerMiddleware } from 'react-router-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { createHashHistory } from 'history';
import { common, counter } from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

export const history = createHashHistory();

const reducer = combineReducers({
  router: connectRouter(history),
  counter,
  common,
});

export type State = ReturnType<typeof reducer>;

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), routerMiddleware(history), sagaMiddleware];

const createStore = (preloadedState?: State) =>
  configureStore({
    reducer,
    middleware,
    preloadedState,
  });

export type Store = ReturnType<typeof createStore>;

export default createStore();

sagaMiddleware.run(rootSaga);
