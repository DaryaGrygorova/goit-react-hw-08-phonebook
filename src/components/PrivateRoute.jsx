import { Navigate, Outlet } from 'react-router';
import PropTypes from 'prop-types';

import useAuth from './../hooks/useAuth';

const PrivateRoute = ({ redirectPath = '/login', children }) => {
  const { isLogIn } = useAuth();

  if (!isLogIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

PrivateRoute.propTypes = {
  redirectPath: PropTypes.string,
  children: PropTypes.any,
};

export default PrivateRoute;
