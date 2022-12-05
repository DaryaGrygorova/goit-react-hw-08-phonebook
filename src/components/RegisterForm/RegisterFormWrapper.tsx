import { Link as RouteLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';

import { setUserError } from 'redux/user/userSlice';
import { useAppDispatch } from './../../hooks/hooksConfig';

import {
  StyledPaper,
  StyledParagraph,
  StyledSpan,
} from './RegisterFormWrapper.styled';

const RegisterFormWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const dispatch = useAppDispatch();
  const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;

  return (
    <StyledPaper elevation={5}>
      <StyledParagraph paragraph variant="h5">
        Please{' '}
        <StyledSpan as={"span"} variant="h5">
          register
        </StyledSpan>{' '}
        to use
      </StyledParagraph>

      {children}

      <Typography paragraph variant="h6">
        Do you already have an account?{' '}
        <Link component={RouteLink} to={`/${ROUTE_HOME_PAGE}/login`} onClick={()=>dispatch(setUserError())}>
          <Typography component={"span"} variant="h6">
            Log In
          </Typography>{' '}
        </Link>
      </Typography>
    </StyledPaper>
  );
};

export default RegisterFormWrapper;
