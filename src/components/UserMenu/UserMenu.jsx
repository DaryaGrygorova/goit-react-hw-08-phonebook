// import { useDispatch } from 'react-redux';
import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthSelector } from 'redux/user/userSelectors';
import { logOut } from 'redux/user/userOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const profile = useSelector(userAuthSelector.selectUserProfile);
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <Box display="flex" gridGap="15px">
      <p>{profile.email}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </Box>
  );
};

export default UserMenu;
