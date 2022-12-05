import { useSelector } from 'react-redux';
import { LinearProgress } from '@mui/material';

import ContactItem from './ContactItem';
import Notification from 'components/Notification';

import {
  selectContactsFilter,
  selectContactsIsLoading,
  selectFilteredContacts,
} from 'redux/contacts/contactsSelectors';

import { StyledList, StyledListItem } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const contactsFilter = useSelector(selectContactsFilter);
  const isLoading = useSelector(selectContactsIsLoading);

  return (
    <>
      {isLoading && <LinearProgress color="secondary" />}
      <StyledList dense={false}>
        {contacts?.length > 0 ? (
          contacts.map(({ name, number, id }) => (
            <StyledListItem key={id}>
              <ContactItem name={name} number={number} id={id} />
            </StyledListItem>
          ))
        ) : (
          <Notification
            message={
              contactsFilter ? 'No matches found' : 'Add your first contacts'
            }
          />
        )}
      </StyledList>
    </>
  );
};

export default ContactList;
