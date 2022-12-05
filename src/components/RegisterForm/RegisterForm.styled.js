import { Form, Field } from 'formik';
import { Button, styled } from '@mui/material';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p=>p.theme.space[2]}px;
  margin: 0 auto;
  max-width: 600px;
`;

export const Input = styled(Field)`
  height: 2rem;
  border: 1px solid #6f4e37;
  border-radius: ${p=>p.theme.radii.sm};
  padding: ${p=>p.theme.space[2]}px;
  margin-bottom: ${p=>p.theme.space[2]}px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  border-color: ${p=>p.theme.colors.primary};
  background-color: ${p=>p.theme.colors.primary};
  color: ${p=>p.theme.colors.text};
  margin-top: ${p=>p.theme.space[3]}px;
  margin-bottom: ${p=>p.theme.space[4]}px;

  :hover,
  :focus {
    font-weight: 600;
    background-color: ${p=>p.theme.colors.secondary};
    color: ${p=>p.theme.colors.white};
  }
`;
