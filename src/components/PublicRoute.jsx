import { Navigate, Outlet } from 'react-router';

const PublicRoute = ({ isLogIn, redirectPath = '/contacts', children }) => {
  if (isLogIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
export default PublicRoute;
