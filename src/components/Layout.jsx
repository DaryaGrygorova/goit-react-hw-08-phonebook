// import { useDispatch } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from './Loader';
import AppBar from './AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
