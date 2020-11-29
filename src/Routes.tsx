import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Counter from './components/counter';

export const Routes = (): JSX.Element => (
  <Switch>
    <Redirect exact path="/" to="/home" />
    <Route path="/home" render={() => <h1>home</h1>} />
    <Route path="/counter" component={Counter} />
    <Route render={() => <h1>404</h1>} />
  </Switch>
);
