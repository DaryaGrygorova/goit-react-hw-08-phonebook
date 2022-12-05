import { Navigate, Outlet } from 'react-router';
import useAuth from 'hooks/useAuth';

type PropsT = {
  redirectPath: string;
};

const PublicRoute: ({ redirectPath }: React.PropsWithChildren<PropsT>)=> React.ReactElement | null = ({
  redirectPath = '/contacts',
  children,
}) => {
  const { isLogIn } = useAuth();

  if (isLogIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default PublicRoute;
