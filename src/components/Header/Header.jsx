import { useSelector } from 'react-redux';
import { Container } from '@mui/material';

import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import { userAuthSelector } from 'redux/user/userSelectors';
import { StyledAppBar, StyledToolbar } from './Header.styled';

const Header = () => {
  const isLogIn = useSelector(userAuthSelector.selectIsLogIn);

  return (
    <StyledAppBar position="fixed" component="header">
      <Container maxWidth="md">
        <StyledToolbar disableGutters>
          <Navigation />
          {isLogIn ? <UserMenu /> : <AuthNav />}
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
