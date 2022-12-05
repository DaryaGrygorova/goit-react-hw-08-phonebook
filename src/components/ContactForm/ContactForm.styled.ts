import { Button, styled } from '@mui/material';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p=>p.theme.spacing(2)};
  width: 245px;
  padding: ${p=>p.theme.spacing(4)} ${p=>p.theme.spacing(3)};
  margin: 0 auto;
  border-radius: ${p=>p.theme.spacing(3)};
  background-color: ${p=>p.theme.palette.background.default};
`;

export const StyledButton = styled(Button)`
  width: 100%;
  border-color: ${p=>p.theme.palette.primary.main};
  background-color: ${p=>p.theme.palette.primary.main};
  color: ${p=>p.theme.palette.text.primary};
  margin-top: ${p=>p.theme.spacing(3)};

  :hover,
  :focus {
    font-weight: 600;
    background-color: ${p=>p.theme.palette.secondary.main};
    color: ${p=>p.theme.palette.common.white};
  }
`;
