import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import CounterPage from '../pages/CounterPage';

export const Routes = (): JSX.Element => (
  <Switch>
    <Redirect exact path="/" to="/home" />
    <Route path="/home" render={() => <h1>home</h1>} />
    <Route path="/counter" component={CounterPage} />
    <Route render={() => <h1>404</h1>} />
  </Switch>
);
