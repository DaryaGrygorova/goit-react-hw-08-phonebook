import { Paper, styled } from '@mui/material';
import RegisterForm from 'components/RegisterForm';

import Salutation from 'components/Salutation';

import { theme } from 'theme';
import RegisterFormWrapper from 'components/RegisterForm/RegisterFormWrapper';

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

const StyledPaper = styled(Paper)`
  display: flex;
  gap: 25px;
  justify-content: space-between;
  color: ${theme.colors.text};
  background-color: transparent;
`;

export default RegisterPage;
