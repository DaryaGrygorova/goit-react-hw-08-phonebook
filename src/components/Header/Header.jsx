import { Container } from '@mui/material';

import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

import useAuth from 'hooks/useAuth';

import { StyledAppBar, StyledToolbar } from './Header.styled';

const Header = () => {
  const { isLogIn } = useAuth();

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
