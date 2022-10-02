import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactsPage from 'Pages/ContactsPage';
import Layout from 'components/Layout';
import LoginPage from 'Pages/LoginPage';
import RegisterPage from 'Pages/RegisterPage';
import HomePage from 'Pages/HomePage';

import { fetchCurrentUser } from 'redux/user/userOperations';

export const App = () => {
  const dispatch = useDispatch();
  const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path={`/${ROUTE_HOME_PAGE}`} element={<Layout />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="home" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
