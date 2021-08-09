import React from 'react';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

type PrivateRouteProps = RouteProps & {
  component: React.FC;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  const { pathname } = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={`/login?redirect=${pathname}`} />
        );
      }}
    ></Route>
  );
};

export default PrivateRoute;
