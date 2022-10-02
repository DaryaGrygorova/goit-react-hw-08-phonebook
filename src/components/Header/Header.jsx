import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Container } from '@mui/material';

import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import { userAuthSelector } from 'redux/user/userSelectors';
import { theme } from './../../theme';

const Header = () => {
  const isLogIn = useSelector(userAuthSelector.selectIsLogIn);

  return (
    <AppBar
      position="fixed"
      component="header"
      sx={{ backgroundColor: '#d2c5f9' }}
    >
      <Container maxWidth="md">
        <Toolbar
          disableGutters
          sx={{ justifyContent: 'space-between', color: theme.colors.text }}
        >
          <Navigation />
          {isLogIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
