import { useDispatch, useSelector } from 'react-redux';

import { userAuthSelector } from 'redux/user/userSelectors';
import { logOut } from 'redux/user/userOperations';

import { StyledBox, StyledButton } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const profile = useSelector(userAuthSelector.selectUserProfile);
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
