import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

import { Info, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const OnDeleteHandle = () => dispatch(deleteContact(id));

  return (
    <>
      <Info>
        {name}: {number}
      </Info>
      <Button type="button" onClick={OnDeleteHandle}>
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}.isRequired;

export default ContactItem;
