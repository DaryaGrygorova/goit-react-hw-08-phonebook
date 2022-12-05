import { Form } from 'formik';
import { Button, styled } from '@mui/material';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p=>p.theme.spacing(2)};
  margin: 0 auto;
  max-width: 600px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  border-color: ${p=>p.theme.palette.primary.main};
  background-color: ${p=>p.theme.palette.primary.main};
  color: ${p=>p.theme.palette.text.primary};
  margin-top: ${p=>p.theme.spacing(3)};
  margin-bottom: ${p=>p.theme.spacing(4)};

  :hover,
  :focus {
    font-weight: 600;
    background-color: ${p=>p.theme.palette.secondary.main};
    color: ${p=>p.theme.palette.common.white};
  }
`;