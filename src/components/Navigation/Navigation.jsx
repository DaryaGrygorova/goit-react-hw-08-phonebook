// import { useDispatch } from 'react-redux';
import { Box, Link, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
      <StyledLink component={NavLink} to="home" sx={{ my: 2 }}>
        Home
      </StyledLink>
      <StyledLink
        to="contacts"
        component={NavLink}
        sx={{ my: 2, display: 'block' }}
      >
        Contacts
      </StyledLink>
    </Box>
  );
};

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: block;
  text-transform: uppercase;
  &.active {
    font-weight: 600;
    text-decoration: underline;
  }
`;

export default Navigation;
