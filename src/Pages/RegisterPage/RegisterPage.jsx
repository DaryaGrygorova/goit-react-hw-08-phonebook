import Salutation from 'components/Salutation/Salutation';
import RegisterFormWrapper from 'components/RegisterForm/RegisterFormWrapper';
import RegisterForm from 'components/RegisterForm';

import { StyledPaper } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <StyledPaper elevation={0} sx={{}}>
      <Salutation />

      <RegisterFormWrapper>
        <RegisterForm />
      </RegisterFormWrapper>
    </StyledPaper>
  );
};

export default RegisterPage;
