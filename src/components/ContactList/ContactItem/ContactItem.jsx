import { LocalPhone } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contactsOperations';

import { StyledWrap, StyledAvatar, StyledButton } from './ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const OnDeleteHandle = () => dispatch(deleteContact(id));

  return (
    <>
      <Grid container spacing={1} sx={{ alignItems: 'center' }}>
        <Grid item xs={5}>
          <StyledWrap>
            <StyledAvatar>{name[0].toUpperCase()}</StyledAvatar>
            <Typography variant="body1">{name}</Typography>
          </StyledWrap>
        </Grid>
        <Grid item xs={5}>
          <StyledWrap>
            <LocalPhone />
            <Typography variant="subtitle1">{number}</Typography>
          </StyledWrap>
        </Grid>
        <Grid item xs={2}>
          <StyledButton type="button" onClick={OnDeleteHandle}>
            Delete
          </StyledButton>
        </Grid>
      </Grid>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}.isRequired;

export default ContactItem;
