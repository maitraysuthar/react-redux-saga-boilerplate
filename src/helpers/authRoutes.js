import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkAuthorization } from '../helpers/helpers';

const AuthRoute = ({
  component: Component,
  redirect: pathname,
  ...rest
}) => {
  const Routes = (props) => {
    if(checkAuthorization() === false){
      return (
        <Route
          {...rest}
          render={props =>
            <div className="authLayout">
              <Component {...rest} {...props} />
            </div>
          }
        />
      );
    }else {
      return (
        <Redirect 
          to={{
            pathname,
            state: { from: props.location },
          }}
        />
      );
    }
  }
  return (
    <Routes />
  );
};

AuthRoute.defaultProps = { redirect: '/' };

AuthRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirect: PropTypes.string,
};

export default AuthRoute;