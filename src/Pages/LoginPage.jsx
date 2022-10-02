import { Paper, styled } from '@mui/material';

import Salutation from 'components/Salutation';
import LogInForm from 'components/LogInForm';
import LogInFormWrapper from 'components/LogInForm/LogInFormWrapper';

import { theme } from 'theme';

const LoginPage = () => {
  return (
    <StyledPaper elevation={0} sx={{}}>
      <Salutation />

      <LogInFormWrapper>
        <LogInForm />
      </LogInFormWrapper>
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)`
  display: flex;
  gap: 25px;
  justify-content: space-between;
  color: ${theme.colors.text};
  background-color: transparent;
`;

export default LoginPage;
