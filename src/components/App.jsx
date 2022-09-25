import { GlobalStyle } from './GlobalStyle';
// import useLocalStorage from './hooks/useLocalStorage';

import { Box } from './Box';
import Section from './Section';
import ContactForm from './ContactForm';
import Phonebook from './Phonebook';

export const App = () => {
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
