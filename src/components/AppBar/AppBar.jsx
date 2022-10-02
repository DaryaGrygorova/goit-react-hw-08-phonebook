// import { useDispatch } from 'react-redux';
import AuthNav from 'components/AuthNav';
import { Box } from 'components/Box';
import Navigation from 'components/Navigation/Navigation';
import Section from '../Section';
import UserMenu from './../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { userAuthSelector } from 'redux/user/userSelectors';

const AppBar = () => {
  const isLogIn = useSelector(userAuthSelector.selectIsLogIn);

  return (
    <Box as="header">
      <Section>
        <Box display="flex" justifyContent="space-between">
          <Navigation />
          {isLogIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Section>
    </Box>
  );
};

export default AppBar;
