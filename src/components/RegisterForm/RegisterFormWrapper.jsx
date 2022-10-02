import { Link as RouteLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';

import { StyledPaper } from './RegisterForm.styled';

const RegisterFormWrapper = ({ children }) => {
  const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;

  return (
    <StyledPaper elevation={5} variant="outlined">
      <Typography paragraph variant="h5" sx={{ textAlign: 'center' }}>
        Please{' '}
        <Typography component="span" variant="h5" sx={{ fontWeight: '600' }}>
          register
        </Typography>{' '}
        to use
      </Typography>

      {children}

      <Typography paragraph variant="h6">
        Do you already have an account?{' '}
        <Link component={RouteLink} to={`/${ROUTE_HOME_PAGE}/login`}>
          <Typography component="span" variant="h6">
            Log In
          </Typography>{' '}
        </Link>
      </Typography>
    </StyledPaper>
  );
};

export default RegisterFormWrapper;
