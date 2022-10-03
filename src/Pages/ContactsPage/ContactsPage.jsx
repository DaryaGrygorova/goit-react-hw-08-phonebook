import { LinearProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { Suspense, useEffect } from 'react';

import { Box } from 'components/Box';
import ContactForm from 'components/ContactForm';

import { fetchContacts } from 'redux/contacts/contactsOperations';
import { userAuthSelector } from 'redux/user/userSelectors';

import {
  StyledSideBar,
  StyledSidebarThumb,
  StyledContentWrap,
} from './ContactsPage.styled';
import Filter from 'components/Filter';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLogIn = useSelector(userAuthSelector.selectIsLogIn);

  useEffect(() => {
    if (isLogIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLogIn]);

  return (
    <Box display="flex">
      <StyledSideBar as="aside">
        <StyledSidebarThumb>
          <Typography as="h1" variant="h5" my={0}>
            My PhoneBook
          </Typography>
          <ContactForm />
          <Filter />
        </StyledSidebarThumb>
      </StyledSideBar>

      <StyledContentWrap>
        <Suspense fallback={<LinearProgress color="secondary" />}>
          <Outlet />
        </Suspense>
      </StyledContentWrap>
    </Box>
  );
};

export default ContactsPage;
