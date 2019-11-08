import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkAuthorization } from '../helpers/helpers';
import Header from '../components/Layouts/Private/Header';

const PrivateRoute = ({
  component: Component,
  redirect: pathname,
  ...rest
}) => {
  const Routes = (props) => {
    if(checkAuthorization() === true){
      return (
        <Route
          {...rest}
          render={props =>
            <div className="privateLayout">
              <Header />
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

PrivateRoute.defaultProps = { redirect: '/login' };

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirect: PropTypes.string,
};

export default PrivateRoute;