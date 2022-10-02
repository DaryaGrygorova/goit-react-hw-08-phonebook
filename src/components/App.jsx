import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import ContactsPage from 'Pages/ContactsPage';
import Layout from 'components/Layout';
import LoginPage from 'Pages/LoginPage';
import RegisterPage from 'Pages/RegisterPage';
import HomePage from 'Pages/HomePage';
import { userAuthSelector } from 'redux/user/userSelectors';
import { useEffect } from 'react';
import { fetchUser } from 'redux/user/userOperations';

export const App = () => {
  const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;
  const dispatch = useDispatch();
  const token = useSelector(userAuthSelector.selectToken);

  useEffect(() => {
    const getUser = async () => {
      if (token) {
        try {
          dispatch(fetchUser(token));
        } catch (e) {
          console.log(e);
        }
      }
    };
    getUser();
  }, [dispatch, token]);

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
