import { Route, Switch } from 'react-router-dom';
import React from 'react';

export const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={() => <h1>root</h1>} />
    <Route path="/app" component={() => <h1>app</h1>} />
    <Route path="/test" component={() => <h1>test</h1>} />
    <Route component={() => <h1>404</h1>} />
  </Switch>
);
