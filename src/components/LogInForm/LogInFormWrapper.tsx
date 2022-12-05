import { Link as RouteLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';

import { setUserError } from 'redux/user/userSlice';
import { useAppDispatch } from './../../hooks/hooksConfig';

import {
  StyledPaper,
  StyledSpan,
  StyledParagraph,
} from './LogInFormWrapper.styled';

const LogInFormWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const dispatch = useAppDispatch();
  const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;

  return (
    <StyledPaper elevation={5}>
      <StyledParagraph paragraph variant="h5">
        Please{' '}
        <StyledSpan component="span" variant="h5">
          login
        </StyledSpan>{' '}
        to use
      </StyledParagraph>

      {children}

      <Typography paragraph variant="h6">
        Don't have an account?{' '}
        <Link component={RouteLink} to={`/${ROUTE_HOME_PAGE}/register`} onClick={()=>dispatch(setUserError())}>
          <Typography component="span" variant="h6">
            Sign up
          </Typography>{' '}
        </Link>
      </Typography>
    </StyledPaper>
  );
};

export default LogInFormWrapper;
