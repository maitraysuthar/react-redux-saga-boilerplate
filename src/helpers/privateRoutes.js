import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirect: pathname,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() === true ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export const checkAuthorization = () => {
    const storedToken = localStorage.getItem('token');
  
    if (storedToken) {
      const tokenPayload = parseJwt(storedToken);
  
      const expiration = new Date(tokenPayload.exp * 1000).getTime();
      const current = new Date().getTime();
  
      if (current > expiration) return false;
  
      return true;
    }
  
    return false;
  };

PrivateRoute.defaultProps = { redirect: '/login' };

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
  redirect: PropTypes.string,
};

export default PrivateRoute;