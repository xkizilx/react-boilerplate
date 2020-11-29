import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Store } from './store/store';
import { Routes } from './Routes';
import App from './App';

type Props = {
  store: Store;
  history: History;
};

const Root = ({ store, history }: Props): JSX.Element => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Routes />
      </App>
    </ConnectedRouter>
  </Provider>
);

export default Root;
