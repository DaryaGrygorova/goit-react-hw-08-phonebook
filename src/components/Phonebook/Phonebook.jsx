import { Box } from 'components/Box';
import Filter from './Filter';
import Notification from '../Notification';
import ContactList from './ContactList';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectContactsIsLoading,
} from 'redux/contacts/contactsSelectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactsIsLoading = useSelector(selectContactsIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return contactsIsLoading ? (
    <Notification message="Wait a few seconds, the process is in progress..." />
  ) : contacts?.length ? (
    <Box
      display="flex"
      flexDirection="column"
      gridGap="10px"
      padding="0"
      margin="0 auto"
      maxWidth="650px"
    >
      <Filter />
      <ContactList />
    </Box>
  ) : (
    <Notification message="There are no contacts." />
  );
};

export default Phonebook;
