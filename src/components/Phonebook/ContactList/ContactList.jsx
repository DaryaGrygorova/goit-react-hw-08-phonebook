import { Box } from 'components/Box';
import ContactItem from './ContactItem';
import { ContactItemWrap } from './ContactList.styled';
import useContacts from 'components/hooks/useContacts.js';

const ContactList = () => {
  const contacts = useContacts({ filtered: true });

  return (
    <Box
      as="ul"
      display="flex"
      gridGap="10px"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      {contacts.map(({ name, number, id }) => (
        <ContactItemWrap key={id}>
          <ContactItem name={name} number={number} id={id} />
        </ContactItemWrap>
      ))}
    </Box>
  );
};

export default ContactList;
