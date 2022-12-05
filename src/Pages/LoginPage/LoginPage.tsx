import Salutation from 'components/Salutation/Salutation';
import LogInForm from 'components/LogInForm';
import LogInFormWrapper from 'components/LogInForm/LogInFormWrapper';

import { StyledPaper } from './LoginPage.styled';

const LoginPage: React.FC  = () => {
  return (
    <StyledPaper elevation={0}>
      <Salutation />

      <LogInFormWrapper>
        <LogInForm />
      </LogInFormWrapper>
    </StyledPaper>
  );
};

export default LoginPage;
