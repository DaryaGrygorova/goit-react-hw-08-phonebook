import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, styled } from '@mui/material';

import { userAuthSelector } from 'redux/user/userSelectors';
import { logOut } from 'redux/user/userOperations';
import { theme } from './../../theme';

const UserMenu = () => {
  const dispatch = useDispatch();
  const profile = useSelector(userAuthSelector.selectUserProfile);
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
      }}
    >
      <p>{profile.email}</p>
      <StyledButton
        variant="outlined"
        onClick={handleClick}
        sx={{ my: 2, display: 'block', color: 'inherit' }}
      >
        Log Out
      </StyledButton>
    </Box>
  );
};

const StyledButton = styled(Button)`
  color: inherit;
  border-color: ${theme.colors.accent};

  :hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.white};
    border-color: ${theme.colors.accent};
  }
`;

export default UserMenu;
