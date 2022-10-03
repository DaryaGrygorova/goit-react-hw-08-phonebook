import { Navigate, Outlet } from 'react-router';
import PropTypes from 'prop-types';

import useAuth from 'hooks/useAuth';

const PublicRoute = ({ redirectPath = '/contacts', children }) => {
  const { isLogIn } = useAuth();

  if (isLogIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

PublicRoute.propTypes = {
  redirectPath: PropTypes.string,
  children: PropTypes.any,
};

export default PublicRoute;
