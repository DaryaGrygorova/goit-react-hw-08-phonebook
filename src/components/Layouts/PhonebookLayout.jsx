import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Box } from 'components/Box';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Phonebook from 'components/Phonebook';

import { fetchContacts } from 'redux/contacts/contactsOperations';
import { userAuthSelector } from 'redux/user/userSelectors';

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
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Phonebook />
      </Section>
    </Box>
  );
};

export default ContactsPage;
