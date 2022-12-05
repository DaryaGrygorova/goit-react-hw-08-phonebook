import { styled } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

export const Input = styled(Field)`
  border: 1px solid #6f4e37;
  padding: ${p=>p.theme.spacing(2)};
  border-radius: ${p=>p.theme.spacing(2)};
  margin-bottom: ${p=>p.theme.spacing(2)};
`;

export const StyledErrorMessage = styled(ErrorMessage)`
color: red;
`;