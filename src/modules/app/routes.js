import { Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Router } from 'react-router';
import history from '../../config/history';

const Home = lazy(() => import('../Home'));
const Login = lazy(() => import('../Login'));
const Register = lazy(() => import('../Register'));

const Routes = () => (
  <Router history={history}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;