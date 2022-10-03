import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';

import { fetchCurrentUser } from 'redux/user/userOperations';
import Loader from './Loader';
import PrivateRoute from './PrivateRoute';
import { userAuthSelector } from 'redux/user/userSelectors';
import PublicRoute from './PublicRoute';

const Layout = lazy(() => import('components/AppLayout'));
const LoginPage = lazy(() => import('Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('Pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('Pages/ContactsPage/ContactsPage'));
const HomePage = lazy(() => import('Pages/HomePage'));
const ContactList = lazy(() => import('components/ContactList'));

export const App = () => {
  const dispatch = useDispatch();
  const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;
  const isLogIn = useSelector(userAuthSelector.selectIsLogIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={`/${ROUTE_HOME_PAGE}`} element={<Layout />}>
            <Route
              element={
                <PublicRoute isLogIn={isLogIn} redirectPath="contacts" />
              }
            >
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route index element={<LoginPage />} />
              <Route path="*" element={<LoginPage />} />
            </Route>
            <Route
              element={<PrivateRoute isLogIn={isLogIn} redirectPath="login" />}
            >
              <Route path="contacts" element={<ContactsPage />}>
                <Route index element={<ContactList />} />
              </Route>
              <Route path="home" element={<HomePage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
};
