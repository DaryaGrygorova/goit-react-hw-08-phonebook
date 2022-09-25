import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { getContactsFilter, getContacts } from 'redux/selectors';

const useContacts = (options = {filtered: false}) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactsFilter);

  const filteredContacts = contacts?.filter(({ name }) =>
  name.toLowerCase().includes(filter.toLowerCase())
  );

  return !!options.filtered ? filteredContacts : contacts;
};

useContacts.propTypes = {
 filtered: PropTypes.boolean,
};

export default useContacts;
