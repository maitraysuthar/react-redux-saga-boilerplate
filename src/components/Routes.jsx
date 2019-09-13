import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../screens/Login";
import Register from "../screens/Register";

const Routes = props => {

  return (
    <div className="routes">
      <div className="margin">
        <Route path="/" />
        <Switch location={window.location}>
          <Route path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );

};

export default Routes;
