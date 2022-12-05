import { NavLink } from 'react-router-dom';

import { StyledButton, StyledBox } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <StyledBox>
      <StyledButton component={NavLink} variant="outlined" to="register" my={2}>
        Sign up
      </StyledButton>
      <StyledButton component={NavLink} variant="outlined" to="login" my={2}>
        Log In
      </StyledButton>
    </StyledBox>
  );
};

export default AuthNav;
