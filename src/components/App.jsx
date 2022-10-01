import { GlobalStyle } from './GlobalStyle';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Box } from './Box';
import Section from './Section';
import ContactForm from './ContactForm';
import Phonebook from './Phonebook';

import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <h1>Phonebook</h1>

      <Section>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Phonebook />
      </Section>

      <GlobalStyle />
    </Box>
  );
};
