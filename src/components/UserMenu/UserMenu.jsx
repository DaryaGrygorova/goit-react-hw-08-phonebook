import { useDispatch } from 'react-redux';

import { logOut } from 'redux/user/userOperations';
import useAuth from 'hooks/useAuth';

import { StyledBox, StyledButton } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { profile } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <StyledBox>
      <p>{profile.email}</p>
      <StyledButton variant="outlined" onClick={handleClick} my={2}>
        Log Out
      </StyledButton>
    </StyledBox>
  );
};

export default UserMenu;
