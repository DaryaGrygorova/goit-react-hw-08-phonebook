import { LocalPhone } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { useAppDispatch } from 'hooks/hooksConfig';

import { deleteContact } from 'redux/contacts/contactsOperations';
import { ContactType } from 'types/types';

import { StyledWrap, StyledAvatar, StyledButton } from './ContactItem.styled';

type PropType = {item: ContactType}

const ContactItem: React.FC<PropType> = ({item}) => {
  const {name, number, id} = item;
  const dispatch = useAppDispatch();
  const OnDeleteHandle = () => dispatch(deleteContact(id));

  return (
    <>
      <Grid container spacing={1} sx={{ alignItems: 'center' }}>
        <Grid item xs={5}>
          <StyledWrap>
            <StyledAvatar>{name ? name[0].toUpperCase() : ';)'}</StyledAvatar>
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

export default ContactItem;
