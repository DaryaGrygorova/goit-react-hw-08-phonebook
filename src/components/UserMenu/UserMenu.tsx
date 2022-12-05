import { useAppDispatch } from 'hooks/hooksConfig';
import { logOut } from 'redux/user/userOperations';
import useAuth from 'hooks/useAuth';

import { StyledBox, StyledButton } from './UserMenu.styled';

const UserMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { profile } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <StyledBox>
      <p>{profile.email}</p>
      <StyledButton variant="outlined" onClick={handleClick}>
        Log Out
      </StyledButton>
    </StyledBox>
  );
};

export default UserMenu;
