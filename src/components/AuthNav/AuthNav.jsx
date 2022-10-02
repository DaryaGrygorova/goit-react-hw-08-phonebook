// import { useDispatch } from 'react-redux';
import { Box, Button, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { theme } from './../../theme';

const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
      }}
    >
      <StyledButton
        component={NavLink}
        variant="outlined"
        to="register"
        sx={{ my: 2 }}
      >
        Sign up
      </StyledButton>
      <StyledButton
        component={NavLink}
        variant="outlined"
        to="login"
        sx={{ my: 2 }}
      >
        Log In
      </StyledButton>
    </Box>
  );
};

const StyledButton = styled(Button)`
  color: inherit;
  border-color: ${theme.colors.accent};

  &.active {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  }
  :hover {
    background-color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
  }
`;

export default AuthNav;
