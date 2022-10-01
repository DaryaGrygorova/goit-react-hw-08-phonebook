import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { Info, Button } from './ContactItem.styled';

const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const OnDeleteHandle = () => dispatch(deleteContact(id));

  return (
    <>
      <Info>
        {name}: {phone}
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
  phone: PropTypes.string.isRequired,
}.isRequired;

export default ContactItem;
