// import { useDispatch } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from '../Loader';
import Header from '../Header';
import { Container } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
