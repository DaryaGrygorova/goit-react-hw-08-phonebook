import { useSelector } from 'react-redux';
import { LinearProgress } from '@mui/material';

import ContactItem from './ContactItem';
import Notification from 'components/Notification';

import {
  selectContactsIsLoading,
  selectFilteredContacts,
} from 'redux/contacts/contactsSelectors';

import { StyledBox, StyledWrap } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectContactsIsLoading);

  return (
    <>
      {isLoading && <LinearProgress color="secondary" />}
      <StyledBox as="ul">
        {contacts?.length > 0 ? (
          contacts.map(({ name, number, id }) => (
            <StyledWrap key={id}>
              <ContactItem name={name} number={number} id={id} />
            </StyledWrap>
          ))
        ) : (
          <Notification message="There are no contacts." />
        )}
      </StyledBox>
    </>
  );
};

export default ContactList;
