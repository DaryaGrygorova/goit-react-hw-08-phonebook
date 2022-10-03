import { NavLink } from 'react-router-dom';

import { StyledLink, StyledBox } from './Navigation.styled';

const Navigation = () => {
  return (
    <StyledBox>
      <StyledLink component={NavLink} to="home" my={2}>
        Home
      </StyledLink>
      <StyledLink to="contacts" component={NavLink} my={2}>
        Contacts
      </StyledLink>
    </StyledBox>
  );
};

export default Navigation;
