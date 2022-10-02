// import { useDispatch } from 'react-redux';
import { Box } from 'components/Box';
import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <Box display="flex" gridGap="15px">
      <Link to="register">Sign up</Link>
      <Link to="login">Log In</Link>
    </Box>
  );
};

export default AuthNav;
