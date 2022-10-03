import { LocalPhone } from '@mui/icons-material';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contactsOperations';

import {
  Info,
  StyledWrap,
  StyledAvatar,
  StyledButton,
} from './ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const OnDeleteHandle = () => dispatch(deleteContact(id));

  return (
    <>
      <Info>
        <StyledWrap>
          <StyledAvatar>{name[0].toUpperCase()}</StyledAvatar>
          <Typography variant="h6">{name}</Typography>
        </StyledWrap>
        <StyledWrap>
          <LocalPhone />
          <Typography variant="subtitle1">{number}</Typography>
        </StyledWrap>
      </Info>
      <StyledButton type="button" onClick={OnDeleteHandle}>
        Delete
      </StyledButton>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}.isRequired;

export default ContactItem;
