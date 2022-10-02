import { Navigate, Outlet } from 'react-router';

const PrivateRoute = ({ isLogIn, redirectPath = '/login', children }) => {
  if (!isLogIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
export default PrivateRoute;
